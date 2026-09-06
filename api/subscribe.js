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
// Env vars (Vercel, never in this file):
//   STRIPE_SECRET_KEY     required — restricted key: promotion_codes write
//   STRIPE_COUPON_ID      required — the "$50 off" coupon the codes attach to
//   MAILERLITE_API_KEY    required
//   MAILERLITE_GROUP_ID   required — the code-series group that fires E1
//   ALERT_WEBHOOK_URL     optional — Web3Forms/Resend endpoint for failure alerts
//   META_PIXEL_ID         optional — CAPI Lead backstop
//   META_CAPI_TOKEN       optional — CAPI Lead backstop; absent = silently off
import crypto from "node:crypto";

const CODE_TTL_HOURS = 72;
const PIXEL_ID = "656402296715617";    // D5 — same pixel as the Purchase backstop
const LEAD_VALUE = 49;                 // discounted price, matches track.js PRICE_CODE
const RATE_LIMIT_MAX = 3;              // signups per identity per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

// Best-effort, per-instance rate limiting. Serverless instances are not shared,
// so this throttles the common case (one bot, one warm instance) but is not a
// hard guarantee. A KV store would be required for that; noted in DECISIONS.
const hits = new Map();

function rateLimited(key) {
  const now = Date.now();
  const rec = hits.get(key);
  if (!rec || now - rec.start > RATE_LIMIT_WINDOW_MS) {
    hits.set(key, { start: now, n: 1 });
    return false;
  }
  rec.n += 1;
  if (hits.size > 5000) hits.clear();   // crude memory ceiling
  return rec.n > RATE_LIMIT_MAX;
}

function validEmail(e) {
  // Deliberately strict-ish: one @, a dot in the domain, no spaces, sane length.
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

// --- MailerLite -------------------------------------------------------------

const ML = "https://connect.mailerlite.com/api";

function mlHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + process.env.MAILERLITE_API_KEY,
  };
}

async function upsertSubscriber(email, fields) {
  // MailerLite's POST /subscribers is an upsert keyed on email.
  const r = await fetch(ML + "/subscribers", {
    method: "POST",
    headers: mlHeaders(),
    body: JSON.stringify({ email, fields }),
  });
  if (!r.ok) throw new Error("mailerlite_upsert_" + r.status);
  const j = await r.json();
  return j && j.data && j.data.id;
}

// Remove then add, so MailerLite treats it as a fresh group join and the
// automation re-enters. Without this a returning signup gets a new code in the
// database but no email — a silent dead end (finding T5).
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

// --- Meta CAPI --------------------------------------------------------------

const sha256 = (s) => crypto.createHash("sha256").update(s).digest("hex");

function readCookie(header, name) {
  if (!header) return null;
  const m = String(header).match(new RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

// _fbc is written by the browser pixel, which on this site is consent-gated
// (chrome.js) — so for most signups the cookie does not exist. Rebuild it from
// the fbclid the ad click left in the URL, in the same format the pixel would
// have used. Without this, ad-clicked signups reach Meta with an email hash
// and nothing else, and match quality suffers exactly where it matters most.
function deriveFbc(cookieHeader, fbclid) {
  const fromCookie = readCookie(cookieHeader, "_fbc");
  if (fromCookie) return fromCookie;
  const clean = String(fbclid || "").replace(/[^A-Za-z0-9_.-]/g, "").slice(0, 400);
  return clean ? `fb.1.${Date.now()}.${clean}` : null;
}

// Server-side Lead, deduplicated against the browser pixel via event_id: the
// browser sends the same "lead_<code>" as eventID, so Meta counts one event
// when both fire, and we still get the event when the browser never does.
// On this site the browser usually never does — the pixel only loads after the
// visitor accepts the consent banner, so a decline or a bounce past the banner
// is invisible to it. Signup-time CAPI use is disclosed in privacy.html §9.
async function sendCapiLead({ email, eventId, sourceUrl, fbp, fbc, ip, ua }) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return false;
  const pixel = process.env.META_PIXEL_ID || PIXEL_ID;

  const user_data = { em: [sha256(email)] };   // email already trimmed+lowercased
  if (fbp) user_data.fbp = fbp;
  if (fbc) user_data.fbc = fbc;
  if (ip && ip !== "unknown") user_data.client_ip_address = ip;
  if (ua) user_data.client_user_agent = ua;

  const r = await fetch(`https://graph.facebook.com/v21.0/${pixel}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: token,
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          event_source_url: sourceUrl || "https://www.deeplearnhq.ca/",
          user_data,
          custom_data: {
            value: LEAD_VALUE,
            currency: "USD",
            content_name: "The Generative AI 8-Week Bootcamp",
          },
        },
      ],
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
  // Honeypot: a field hidden from humans. Anything filling it is a bot.
  if (data.company) return res.status(200).json({ ok: true, code: null, spam: true });

  const email = (data.email || "").trim().toLowerCase();
  if (!validEmail(email)) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  if (rateLimited("e:" + email) || rateLimited("i:" + ip)) {
    return res.status(429).json({ ok: false, error: "rate_limited" });
  }

  const marketingOptIn = data.marketing === true;
  const expiresAt = Math.floor(Date.now() / 1000) + CODE_TTL_HOURS * 3600;

  // 2. Stripe promo code FIRST — no code, no signup, no fake success ---------
  let code;
  try {
    code = await createPromotionCode(expiresAt);
  } catch (e) {
    await alertSaad("Signup failed: Stripe promo code", `${email} — ${e.message}`);
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
    });
    if (!id) throw new Error("mailerlite_no_id");
    await rejoinGroup(id, process.env.MAILERLITE_GROUP_ID);
  } catch (e) {
    // The code exists in Stripe but the email won't send. Tell the user the
    // truth and alert Saad — this is the case that silently lost signups before.
    await alertSaad("Signup failed: MailerLite", `${email} — code ${code} — ${e.message}`);
    return res.status(502).json({ ok: false, error: "email_delivery_failed", code });
  }

  // 5. Meta CAPI Lead — best-effort, after the signup is real. Never fail the
  //    request on it: the user has their code and the email is sending, and a
  //    5xx here would tell the UI the signup failed when it did not.
  const eventId = "lead_" + code;
  try {
    const capiOk = await sendCapiLead({
      email,
      eventId,
      sourceUrl: data.page_url || "https://www.deeplearnhq.ca/",
      fbp: readCookie(req.headers.cookie, "_fbp"),
      fbc: deriveFbc(req.headers.cookie, data.fbclid),
      ip,
      ua: req.headers["user-agent"] || null,
    });
    if (!capiOk && process.env.META_CAPI_TOKEN) {
      await alertSaad("Meta CAPI Lead failed", `${email} — code ${code}`);
    }
  } catch (e) {
    await alertSaad("Meta CAPI Lead error", `${email} — code ${code} — ${e.message}`);
  }

  return res.status(200).json({ ok: true, code, expires_at: expiresAt, event_id: eventId });
}
