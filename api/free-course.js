// Vercel serverless function — free-course lead capture (email + phone).
//
// Distinct from api/subscribe.js on purpose: that endpoint mints a per-user,
// time-limited Stripe promo code for the $99 sales page. This one has no
// Stripe involvement at all — the free course link and the current coupon
// text live inside the MailerLite automation email itself, so Saad can
// rotate the coupon anytime by editing that email, with no deploy needed.
//
// Order matters:
//   1. Guard the request (honeypot, email + phone validation, rate limit).
//   2. Upsert the MailerLite subscriber with phone + consent fields set.
//   3. Remove-then-add to the group so a repeat signup re-enters the
//      automation instead of silently dead-ending (same fix as subscribe.js).
//
// Env vars (Vercel, never in this file):
//   MAILERLITE_API_KEY          required — shared with api/subscribe.js
//   MAILERLITE_GROUP_FREE_COURSE required — the group that fires the free-course automation
//   ALERT_WEBHOOK_URL           optional — Web3Forms/Resend endpoint for failure alerts
//   META_PIXEL_ID               optional — CAPI Lead backstop
//   META_CAPI_TOKEN             optional — CAPI Lead backstop; absent = silently off
import crypto from "node:crypto";

const PIXEL_ID = "656402296715617";   // same pixel as the rest of the site
const RATE_LIMIT_MAX = 3;             // signups per identity per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

// Best-effort, per-instance rate limiting — see api/subscribe.js for why this
// is not a hard guarantee across serverless instances.
const hits = new Map();

function rateLimited(key) {
  const now = Date.now();
  const rec = hits.get(key);
  if (!rec || now - rec.start > RATE_LIMIT_WINDOW_MS) {
    hits.set(key, { start: now, n: 1 });
    return false;
  }
  rec.n += 1;
  if (hits.size > 5000) hits.clear();
  return rec.n > RATE_LIMIT_MAX;
}

function validEmail(e) {
  return typeof e === "string" && e.length <= 254 && /^[^@\s]+@[^@\s.]+(\.[^@\s.]+)+$/.test(e);
}

function validPhone(p) {
  // Up to 24, not 20: the page now sends "<country dial code> <local number>"
  // (e.g. "+44 7911 123456") as a single string.
  return typeof p === "string" && /^[0-9()+\-.\s]{7,24}$/.test(p.trim());
}

async function alertSaad(subject, body) {
  const url = process.env.ALERT_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, body }),
    });
  } catch (e) {
    /* alerting must never break the request path */
  }
}

// --- MailerLite -------------------------------------------------------------

const ML = "https://connect.mailerlite.com/api";

function mlHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + process.env.MAILERLITE_API_KEY,
  };
}

async function upsertSubscriber(email, phone, fields) {
  // MailerLite's POST /subscribers is an upsert keyed on email. "phone" is one
  // of MailerLite's built-in fields, so unlike the custom fields below it does
  // not need to be created in the dashboard first.
  const r = await fetch(ML + "/subscribers", {
    method: "POST",
    headers: mlHeaders(),
    body: JSON.stringify({ email, fields: { phone, ...fields } }),
  });
  if (!r.ok) throw new Error("mailerlite_upsert_" + r.status);
  const j = await r.json();
  return j && j.data && j.data.id;
}

// Remove then add, so MailerLite treats it as a fresh group join and the
// automation re-enters (finding T5 in api/subscribe.js applies here too).
async function rejoinGroup(subscriberId, groupId) {
  await fetch(`${ML}/subscribers/${subscriberId}/groups/${groupId}`, {
    method: "DELETE",
    headers: mlHeaders(),
  }).catch(() => {});
  const r = await fetch(`${ML}/subscribers/${subscriberId}/groups/${groupId}`, {
    method: "POST",
    headers: mlHeaders(),
  });
  if (!r.ok) throw new Error("mailerlite_group_" + r.status);
}

// --- Meta CAPI (Lead only — this is a free opt-in, not a purchase funnel) ---

const sha256 = (s) => crypto.createHash("sha256").update(s).digest("hex");

function readCookie(header, name) {
  if (!header) return null;
  const m = String(header).match(new RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

async function sendCapiLead({ email, eventId, sourceUrl, fbp, ip, ua }) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return false;
  const pixel = process.env.META_PIXEL_ID || PIXEL_ID;

  const user_data = { em: [sha256(email)] };
  if (fbp) user_data.fbp = fbp;
  if (ip && ip !== "unknown") user_data.client_ip_address = ip;
  if (ua) user_data.client_user_agent = ua;

  const r = await fetch(`https://graph.facebook.com/v21.0/${pixel}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: token,
      data: [{
        event_name: "Lead",
        event_id: eventId,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: sourceUrl || "https://www.deeplearnhq.ca/free-course",
        user_data,
        custom_data: { value: 0, currency: "USD", content_name: "Free AI Tools Course" },
      }],
    }),
  });
  return r.ok;
}

// --- handler ----------------------------------------------------------------

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });

  let data = req.body;
  if (typeof data === "string") { try { data = JSON.parse(data); } catch (e) { data = {}; } }
  data = data || {};

  // 1. Guards ---------------------------------------------------------------
  if (data.company) return res.status(200).json({ ok: true, spam: true });

  const email = (data.email || "").trim().toLowerCase();
  const phone = (data.phone || "").trim();
  if (!validEmail(email)) return res.status(400).json({ ok: false, error: "invalid_email" });
  if (!validPhone(phone)) return res.status(400).json({ ok: false, error: "invalid_phone" });

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  if (rateLimited("e:" + email) || rateLimited("i:" + ip)) {
    return res.status(429).json({ ok: false, error: "rate_limited" });
  }

  const smsConsent = data.sms_consent === true;

  // 2 + 3. MailerLite upsert, then force automation re-entry ----------------
  try {
    const id = await upsertSubscriber(email, phone, {
      sms_consent: smsConsent ? "yes" : "no",
      // MailerLite reserves the field name "source", so ours is signup_source.
      signup_source: (data.source || "free_course_landing").toString().slice(0, 60),
    });
    if (!id) throw new Error("mailerlite_no_id");
    await rejoinGroup(id, process.env.MAILERLITE_GROUP_FREE_COURSE);
  } catch (e) {
    await alertSaad("Free-course signup failed: MailerLite", `${email} — ${e.message}`);
    return res.status(502).json({ ok: false, error: "email_delivery_failed" });
  }

  // 4. Meta CAPI Lead — best-effort, after the signup is real. Never fail the
  //    request on it: the lead is captured and the email is sending.
  const eventId = "lead_fc_" + crypto.randomBytes(8).toString("hex");
  try {
    const capiOk = await sendCapiLead({
      email,
      eventId,
      sourceUrl: data.page_url || "https://www.deeplearnhq.ca/free-course",
      fbp: readCookie(req.headers.cookie, "_fbp"),
      ip,
      ua: req.headers["user-agent"] || null,
    });
    if (!capiOk && process.env.META_CAPI_TOKEN) {
      await alertSaad("Meta CAPI free-course lead failed", email);
    }
  } catch (e) {
    await alertSaad("Meta CAPI free-course lead error", `${email} — ${e.message}`);
  }

  return res.status(200).json({ ok: true, event_id: eventId });
}
