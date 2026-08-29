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

const CODE_TTL_HOURS = 72;
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
      source: (data.source || "site").toString().slice(0, 60),
    });
    if (!id) throw new Error("mailerlite_no_id");
    await rejoinGroup(id, process.env.MAILERLITE_GROUP_ID);
  } catch (e) {
    // The code exists in Stripe but the email won't send. Tell the user the
    // truth and alert Saad — this is the case that silently lost signups before.
    await alertSaad("Signup failed: MailerLite", `${email} — code ${code} — ${e.message}`);
    return res.status(502).json({ ok: false, error: "email_delivery_failed", code });
  }

  return res.status(200).json({ ok: true, code, expires_at: expiresAt });
}
