// Vercel serverless function — discount-code signup.
//
// Contract (sprint tickets 8.2/8.2b, findings T5/T6/G11). Order matters:
//   1. Guard the request  (honeypot, server-side email validation, rate limit)
//   2. Create the Stripe promotion code FIRST. If this fails we return a real
//      error and save nothing — the old version returned HTTP 200 with
//      {ok:false}, so the UI showed success while nothing had happened.
//   3. Upsert the MailerLite subscriber with the code + expiry fields set.
//   4. Remove-then-add to the group so a repeat signup re-enters the
//      automation and gets a FRESH code instead of silently dead-ending.
//
// Funnel-hardening pass (2026-10-01): helpers moved to lib/; if the browser
// holds a lead_id (free-course registrant), it is written to the MailerLite
// record and the code is noted on the lead so the $49 path joins the same
// attribution chain as the $99 purchase.
//
// Env vars (Vercel, never in this file):
//   STRIPE_SECRET_KEY     required — restricted key: promotion_codes write
//   STRIPE_COUPON_ID      required — the "$50 off" coupon the codes attach to
//   MAILERLITE_API_KEY    required
//   MAILERLITE_GROUP_ID   required — the code-series group that fires E1
//   ALERT_WEBHOOK_URL/KEY optional — failure alerts
//   META_CAPI_TOKEN       optional — CAPI Lead backstop; absent = silently off
import { upsertSubscriber, rejoinGroup } from "../lib/mailerlite.js";
import { sendEvents, userData } from "../lib/capi.js";
import { rateLimited, clientIp } from "../lib/ratelimit.js";
import { notify } from "../lib/notify.js";
import { logError } from "../lib/log.js";
import { updateLead } from "../lib/leads.js";
import { isLeadId } from "../lib/ids.js";

const CODE_TTL_HOURS = 72;
const LEAD_VALUE = 49;                 // discounted price, matches track.js PRICE_CODE

function validEmail(e) {
  return typeof e === "string" && e.length <= 254 && /^[^@\s]+@[^@\s.]+(\.[^@\s.]+)+$/.test(e);
}

function makeCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no I/O/0/1 — read aloud safely
  let s = "";
  for (let i = 0; i < 6; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)];
  return "SAVE50-" + s;
}

function form(params) {
  return Object.entries(params)
    .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
    .join("&");
}

// --- Stripe -----------------------------------------------------------------

async function createPromotionCode(expiresAt) {
  const KEY = process.env.STRIPE_SECRET_KEY;
  const COUPON = process.env.STRIPE_COUPON_ID;
  if (!KEY || !COUPON) throw new Error("stripe_not_configured");

  // Retry once on a code collision — makeCode() can theoretically repeat.
  for (let attempt = 0; attempt < 2; attempt++) {
    const code = makeCode();
    const r = await fetch("https://api.stripe.com/v1/promotion_codes", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + KEY,
        "Content-Type": "application/x-www-form-urlencoded",
        // Pin a stable API version: the account default is a 2026 version on
        // which POST /v1/promotion_codes requires a nested `promotion` object
        // and rejects the flat coupon= param this endpoint sends. Confirmed
        // live 2026-08-29 — the first test signup 502'd on exactly this.
        "Stripe-Version": "2024-06-20",
      },
      body: form({
        coupon: COUPON,
        code,
        expires_at: expiresAt,
        max_redemptions: 1,
      }),
    });
    if (r.ok) return code;
    const err = await r.json().catch(() => ({}));
    const c = err && err.error && err.error.code;
    if (c === "resource_already_exists") continue;
    throw new Error("stripe_" + (c || r.status));
  }
  throw new Error("stripe_code_collision");
}

// --- handler ----------------------------------------------------------------

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });

  let data = req.body;
  if (typeof data === "string") { try { data = JSON.parse(data); } catch (e) { data = {}; } }
  data = data || {};

  // 1. Guards ---------------------------------------------------------------
  if (data.company) return res.status(200).json({ ok: true, code: null, spam: true });

  const email = (data.email || "").trim().toLowerCase();
  if (!validEmail(email)) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }

  const ip = clientIp(req);
  if ((await rateLimited("sub_email", email, 3)) || (await rateLimited("sub_ip", ip, 3))) {
    return res.status(429).json({ ok: false, error: "rate_limited" });
  }

  const marketingOptIn = data.marketing === true;
  const expiresAt = Math.floor(Date.now() / 1000) + CODE_TTL_HOURS * 3600;
  const leadId = isLeadId(data.lead_id) ? data.lead_id : null;

  // 2. Stripe promo code FIRST — no code, no signup, no fake success ---------
  let code;
  try {
    code = await createPromotionCode(expiresAt);
  } catch (e) {
    await logError("subscribe.stripe", e, { lead_id: leadId, status: 502 });
    await notify("Signup failed: Stripe promo code", `${email} — ${e.message}`);
    return res.status(502).json({ ok: false, error: "code_creation_failed" });
  }

  // 3 + 4. MailerLite upsert, then force automation re-entry ----------------
  try {
    const id = await upsertSubscriber(email, {
      discount_code: code,
      // Human-readable, for display in the email body.
      code_expires_at: new Date(expiresAt * 1000).toISOString(),
      // Unix seconds, for the ?exp= link parameter. The landing pages parse
      // exp with parseInt, so feeding them the ISO string would yield 2026 —
      // i.e. 1970 — and every code-holder arriving from email would be shown
      // the "your code expired" state. Both formats are stored deliberately.
      code_expires_unix: String(expiresAt),
      marketing_opt_in: marketingOptIn ? "yes" : "no",
      // MailerLite reserves the field name "source", so ours is signup_source.
      signup_source: (data.source || "site").toString().slice(0, 60),
      ...(leadId ? { lead_id: leadId } : {}),
    });
    if (!id) throw new Error("mailerlite_no_id");
    await rejoinGroup(id, process.env.MAILERLITE_GROUP_ID);
  } catch (e) {
    // The code exists in Stripe but the email won't send. Tell the user the
    // truth and alert Saad — this is the case that silently lost signups before.
    await logError("subscribe.mailerlite", e, { lead_id: leadId, status: 502 });
    await notify("Signup failed: MailerLite", `${email} — code ${code} — ${e.message}`);
    return res.status(502).json({ ok: false, error: "email_delivery_failed", code });
  }

  if (leadId) await updateLead(leadId, { discount_code: code, discount_requested_at: new Date().toISOString() });

  // 5. Meta CAPI — best-effort, after the signup is real. Two events describe
  //    the same signup deliberately: Lead (reporting continuity) and
  //    CompleteRegistration (what the OUTCOME_SALES ad set can optimise on —
  //    Meta rejects Lead there). Distinct event_names are not double-counting.
  const eventIds = { lead: "lead_" + code, registration: "cr_" + code };
  const base = {
    event_source_url: data.page_url || "https://www.deeplearnhq.ca/",
    user_data: userData({ email, ip, ua: req.headers["user-agent"], cookieHeader: req.headers.cookie, fbclid: data.fbclid }),
    custom_data: { value: LEAD_VALUE, currency: "USD", content_name: "The Generative AI 8-Week Bootcamp" },
  };
  const capiOk = await sendEvents([
    { ...base, event_name: "Lead", event_id: eventIds.lead },
    { ...base, event_name: "CompleteRegistration", event_id: eventIds.registration },
  ]);
  if (!capiOk && process.env.META_CAPI_TOKEN) {
    await logError("subscribe.capi", new Error("capi_signup_failed"), { lead_id: leadId });
  }

  return res.status(200).json({
    ok: true,
    code,
    expires_at: expiresAt,
    event_id: eventIds.lead,          // retained: older track.js builds read this
    event_ids: eventIds,
  });
}
