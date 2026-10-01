// Vercel serverless function — free-course registration.
//
// Contract (funnel-hardening pass, 2026-10-01):
//   - Email is the only required input. Marketing consent is a separate,
//     optional, unchecked box; phone is optional and only asked AFTER the
//     success state (`phone_only:true`).
//   - Registration is real the moment the lead is written to Redis (lib/leads.js),
//     which also mints the stable first-party `lead_id`. MailerLite is the
//     email delivery layer, NOT the system of record: if it fails the lead
//     is kept, the failure is queued for retry, and the visitor still gets
//     the on-page course link. The response says `email_delivery:false` so
//     the UI can adjust its copy.
//   - A repeat signup never errors: it returns the existing lead_id with
//     `already_registered:true` and re-enters the MailerLite automation so a
//     visitor on a second device gets the email again.
//
// Env vars (Vercel, never in this file):
//   KV_REST_API_URL / KV_REST_API_TOKEN   Upstash Redis (Marketplace)
//   MAILERLITE_API_KEY, MAILERLITE_GROUP_FREE_COURSE
//   META_CAPI_TOKEN (optional), ALERT_WEBHOOK_URL + ALERT_WEBHOOK_KEY (optional)
import { createLead, getLead, getLeadByEmail, updateLead, queueEmailRetry, popEmailRetry } from "../lib/leads.js";
import { sanitizeTouch } from "../lib/attribution-server.js";
import { upsertSubscriber, rejoinGroup, leadToFields } from "../lib/mailerlite.js";
import { sendEvents, userData } from "../lib/capi.js";
import { rateLimited, clientIp } from "../lib/ratelimit.js";
import { notify } from "../lib/notify.js";
import { log, logError } from "../lib/log.js";
import { isLeadId, isAqId } from "../lib/ids.js";

function validEmail(e) {
  return typeof e === "string" && e.length <= 254 && /^[^@\s]+@[^@\s.]+(\.[^@\s.]+)+$/.test(e);
}
function validPhone(p) {
  return typeof p === "string" && /^[0-9()+\-.\s]{7,24}$/.test(p.trim());
}
function pathOf(url) {
  try { const u = new URL(String(url), "https://www.deeplearnhq.ca"); return (u.pathname + u.search).slice(0, 300); }
  catch { return "/free-course"; }
}

async function syncToMailerLite(lead, { rejoin }) {
  const id = await upsertSubscriber(lead.email, leadToFields(lead));
  if (!id) throw new Error("mailerlite_no_id");
  if (rejoin) await rejoinGroup(id, process.env.MAILERLITE_GROUP_FREE_COURSE);
  return id;
}

// Opportunistic retry for leads whose MailerLite sync failed earlier. Bounded
// to one per request so it never meaningfully delays a live registration;
// api/retry-email.js drains the rest on demand.
async function drainRetries(max = 1) {
  for (let i = 0; i < max; i++) {
    const id = await popEmailRetry();
    if (!id) return;
    const lead = await getLead(id);
    if (!lead || lead.ml_status === "synced") continue;
    const attempts = Number(lead.ml_attempts || 0) + 1;
    try {
      await syncToMailerLite(lead, { rejoin: true });
      await updateLead(id, { ml_status: "synced", ml_attempts: String(attempts) });
    } catch (e) {
      await updateLead(id, { ml_attempts: String(attempts) });
      if (attempts < 3) await queueEmailRetry(id);
      await logError("free-course.retry", e, { lead_id: id });
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });

  let data = req.body;
  if (typeof data === "string") { try { data = JSON.parse(data); } catch { data = {}; } }
  data = data || {};

  // 1. Guards ---------------------------------------------------------------
  if (data.company) return res.status(200).json({ ok: true, spam: true });

  const email = (data.email || "").trim().toLowerCase();
  if (!validEmail(email)) return res.status(400).json({ ok: false, error: "invalid_email" });

  const ip = clientIp(req);
  if ((await rateLimited("fc_email", email, 5)) || (await rateLimited("fc_ip", ip, 10))) {
    return res.status(429).json({ ok: false, error: "rate_limited" });
  }

  const now = new Date().toISOString();

  // 2. Optional post-registration phone add-on -------------------------------
  //    Upsert the phone only; never touch the group (rejoining would re-send
  //    the "your course is ready" email the visitor already has).
  if (data.phone_only === true) {
    const phone = (data.phone || "").trim();
    if (!validPhone(phone)) return res.status(400).json({ ok: false, error: "invalid_phone" });
    const lead = (isLeadId(data.lead_id) && (await getLead(data.lead_id))) || (await getLeadByEmail(email));
    if (lead) await updateLead(lead.lead_id, { phone, sms_consent: "1", sms_consent_at: now });
    try {
      await upsertSubscriber(email, { phone, sms_consent: "yes", ...(lead ? { lead_id: lead.lead_id } : {}) });
    } catch (e) {
      await logError("free-course.phone", e, { lead_id: lead && lead.lead_id, status: 502 });
      return res.status(502).json({ ok: false, error: "update_failed" });
    }
    return res.status(200).json({ ok: true, lead_id: lead ? lead.lead_id : null });
  }

  // 3. Registration ---------------------------------------------------------
  //    Legacy shape (the static free-course page, until the Next port lands):
  //    flat utm_* fields and a single pre-checked `sms_consent` box that read
  //    "course access and occasional updates by email". Mapped here so no
  //    attribution is lost during the cutover; the port sends the new shape.
  const legacyTouch = !data.first_touch && (data.utm_source || data.utm_campaign || data.utm_content || data.referrer)
    ? { source: data.utm_source, medium: data.utm_medium, campaign: data.utm_campaign, content: data.utm_content,
        referrer: data.referrer === "direct" ? undefined : data.referrer, landing_page: data.landing_page, ts: now }
    : null;
  const firstTouch = sanitizeTouch(data.first_touch) || sanitizeTouch(legacyTouch);
  const lastTouch = sanitizeTouch(data.last_touch) || firstTouch;
  const marketingConsent = data.marketing_consent === true || (data.marketing_consent === undefined && data.sms_consent === true);

  const { lead, created, persisted } = await createLead({
    email,
    firstTouch,
    lastTouch,
    registrationPage: pathOf(data.page_url),
    marketingConsent,
    gaClientId: typeof data.ga_client_id === "string" ? data.ga_client_id : null,
    fbclid: typeof data.fbclid === "string" ? data.fbclid : null,
    aqId: isAqId(data.aq_id) ? data.aq_id : null,
    source: (data.source || "free_course_landing").toString().slice(0, 60),
  });

  // Consent can only be upgraded by a repeat submit, never silently revoked.
  if (!created && marketingConsent && lead.marketing_consent !== "1") {
    await updateLead(lead.lead_id, { marketing_consent: "1", marketing_consent_at: now });
    lead.marketing_consent = "1";
    lead.marketing_consent_at = now;
  }

  // 4. Email delivery (MailerLite) — separate from registration success -----
  let emailDelivery = true;
  try {
    await syncToMailerLite(lead, { rejoin: true });
    if (persisted) await updateLead(lead.lead_id, { ml_status: "synced", ml_attempts: String(Number(lead.ml_attempts || 0) + 1) });
  } catch (e) {
    emailDelivery = false;
    if (persisted) {
      await updateLead(lead.lead_id, { ml_status: "failed", ml_attempts: String(Number(lead.ml_attempts || 0) + 1) });
      await queueEmailRetry(lead.lead_id);
    }
    await logError("free-course.mailerlite", e, { lead_id: lead.lead_id });
    await notify(
      "Free-course signup: MailerLite failed (lead kept)",
      `${email} — ${lead.lead_id} — ${e.message}\nThe visitor still got the on-page course link.` +
        (persisted ? " Queued for retry." : " NOT persisted (Redis unavailable) — add them to Free Course Members CA manually.")
    );
  }

  // 5. Meta CAPI Lead — only for a genuinely new registration, deterministic
  //    event_id so the browser pixel (same id as eventID) dedups against it.
  const eventId = "lead_fc_" + lead.lead_id;
  if (created) {
    const ok = await sendEvents([{
      event_name: "Lead",
      event_id: eventId,
      event_source_url: data.page_url || "https://www.deeplearnhq.ca/free-course",
      user_data: userData({ email, ip, ua: req.headers["user-agent"], cookieHeader: req.headers.cookie, fbclid: data.fbclid }),
      custom_data: { value: 0, currency: "USD", content_name: "Free AI Tools Course" },
    }]);
    if (!ok && process.env.META_CAPI_TOKEN) await logError("free-course.capi", new Error("capi_lead_failed"), { lead_id: lead.lead_id });
  }

  await drainRetries();

  log("free-course", {
    lead_id: lead.lead_id, created, persisted, email_delivery: emailDelivery,
    source: lead.first_touch_source || null, content: lead.first_touch_content || null,
  });

  return res.status(200).json({
    ok: true,
    lead_id: lead.lead_id,
    already_registered: !created,
    email_delivery: emailDelivery,
    persisted,
    event_id: eventId,
  });
}
