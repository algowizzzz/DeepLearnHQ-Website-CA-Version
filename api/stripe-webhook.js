// Vercel serverless function — Stripe webhook → MailerLite buyer group,
// Meta CAPI Purchase backstop, and a purchase notification to Saad.
//
// Hardened per ticket 7.10 / finding SK-6+T4. The previous version wrapped the
// MailerLite call in a try/catch that swallowed everything and always returned
// 200, so a failed buyer-group add looked identical to success: Stripe never
// retried, nobody was alerted, and the buyer stayed subscribed to the E1–E3
// "your code is about to expire" series they had already paid to escape.
//
// Now: MailerLite failure returns 5xx so Stripe retries (the add is an
// idempotent upsert, so retries are safe). CAPI and notification failures are
// alerted but do NOT fail the webhook — they must not block buyer fulfilment.
//
// Env vars (Vercel):
//   STRIPE_WEBHOOK_SECRET   required
//   MAILERLITE_API_KEY      required
//   ML_GROUP_BUYERS         required — "99 Course Buyers" group id
//   STRIPE_PAYMENT_LINK_99  required — plink_… for the $99 product (ticket 0.6)
//   META_PIXEL_ID           optional — CAPI backstop
//   META_CAPI_TOKEN         optional — CAPI backstop
//   ALERT_WEBHOOK_URL       optional — purchase + failure notifications
//   ALERT_WEBHOOK_KEY       required WITH Web3Forms — its access_key; without it
//                           Web3Forms rejects the post and alerts silently no-op
import crypto from "node:crypto";

export const config = { api: { bodyParser: false } };

const PIXEL_ID = "656402296715617"; // D5 — reuse the existing pixel

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function verifySignature(rawBody, header, secret) {
  if (!header) return false;
  const parts = Object.fromEntries(
    header.split(",").map((kv) => {
      const i = kv.indexOf("=");
      return [kv.slice(0, i), kv.slice(i + 1)];
    })
  );
  const t = parts.t, v1 = parts.v1;
  if (!t || !v1) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${t}.${rawBody.toString("utf8")}`)
    .digest("hex");
  const a = Buffer.from(v1), b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;
  return true;
}

const sha256 = (s) => crypto.createHash("sha256").update(s).digest("hex");

async function notify(subject, body) {
  const url = process.env.ALERT_WEBHOOK_URL;
  if (!url) return false;
  // Web3Forms (the chosen sender, 0.10b) rejects any payload without access_key,
  // and reads `message` as the email body. Generic webhooks ignore both extras.
  const payload = { subject, body, message: body };
  const key = process.env.ALERT_WEBHOOK_KEY;
  if (key) payload.access_key = key;
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return r.ok;
  } catch (e) {
    return false;
  }
}

// Idempotent upsert — safe to repeat when Stripe retries.
// Suppression (MAILERLITE-SETUP step 6): the Code Series trigger has
// "exit when subscriber leaves the trigger group" enabled, so removing the
// buyer from that group cancels any queued E2/E3 instantly. Best-effort —
// a failure here must not fail the webhook (the buyer add is the critical op).
async function removeFromCodeSeries(subscriberId) {
  const codeGroup = process.env.MAILERLITE_GROUP_ID;
  const KEY = process.env.MAILERLITE_API_KEY;
  if (!codeGroup || !subscriberId || !KEY) return;
  try {
    await fetch(
      `https://connect.mailerlite.com/api/subscribers/${subscriberId}/groups/${codeGroup}`,
      { method: "DELETE", headers: { Authorization: "Bearer " + KEY } }
    );
  } catch (e) {}
}

async function addBuyerToGroup(email, groupId, fields) {
  const KEY = process.env.MAILERLITE_API_KEY;
  if (!KEY) throw new Error("mailerlite_not_configured");
  const r = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + KEY,
    },
    body: JSON.stringify({ email, groups: [groupId], fields }),
  });
  if (!r.ok) throw new Error("mailerlite_" + r.status);
  const j = await r.json().catch(() => null);
  return j && j.data && j.data.id;
}

// Server-side Purchase, deduplicated against the browser pixel via event_id.
// The browser uses the same "purchase_<session_id>", so Meta counts one event
// even when both fire — and we still get the event if the browser never does
// (ad-blocker, consent decline, closed tab before the thank-you page loaded).
async function sendCapiPurchase({ email, value, currency, eventId, sourceUrl, fbp, fbc }) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return false;
  const pixel = process.env.META_PIXEL_ID || PIXEL_ID;
  const user_data = {};
  if (email) user_data.em = [sha256(email.trim().toLowerCase())];
  if (fbp) user_data.fbp = fbp;
  if (fbc) user_data.fbc = fbc;

  const r = await fetch(`https://graph.facebook.com/v21.0/${pixel}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: token,
      data: [
        {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          event_source_url: sourceUrl || "https://www.deeplearnhq.ca/thank-you-purchase",
          user_data,
          custom_data: { value, currency, content_name: "The Generative AI 8-Week Bootcamp" },
        },
      ],
    }),
  });
  return r.ok;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return res.status(500).json({ ok: false, error: "not_configured" });

  let raw;
  try { raw = await readRawBody(req); }
  catch (e) { return res.status(400).json({ ok: false, error: "body" }); }

  if (!verifySignature(raw, req.headers["stripe-signature"], secret)) {
    return res.status(400).json({ ok: false, error: "bad_signature" });
  }

  let event;
  try { event = JSON.parse(raw.toString("utf8")); }
  catch (e) { return res.status(400).json({ ok: false, error: "json" }); }

  if (event.type !== "checkout.session.completed") {
    return res.status(200).json({ ok: true, ignored: event.type });
  }

  const s = (event.data && event.data.object) || {};
  const email = (s.customer_details && s.customer_details.email) || s.customer_email || "";
  const link99 = process.env.STRIPE_PAYMENT_LINK_99;

  // Only the $99 bootcamp link is ours. Anything else is ignored, but an
  // unrecognised link on a live product is worth knowing about rather than
  // dropping silently — that was SK-3.
  if (!link99 || s.payment_link !== link99) {
    await notify(
      "Stripe: unrecognised payment link",
      `session ${s.id} · link ${s.payment_link} · ${email} · ${(s.amount_total || 0) / 100} ${(s.currency || "").toUpperCase()}`
    );
    return res.status(200).json({ ok: true, ignored: "payment_link" });
  }

  if (!email) {
    await notify("Stripe: purchase with no email", `session ${s.id}`);
    return res.status(200).json({ ok: true, ignored: "no_email" });
  }

  const value = (s.amount_total || 0) / 100;
  const currency = (s.currency || "usd").toUpperCase();

  // 1. Buyer group — MUST succeed. Failure => 5xx => Stripe retries.
  //    A miss here means a paying customer keeps getting "your code dies
  //    tonight" emails, so it is worth failing loudly for.
  let buyerId = null;
  try {
    buyerId = await addBuyerToGroup(email, process.env.ML_GROUP_BUYERS, {
      signup_source: "bootcamp_99_purchase",
      purchase_amount: value.toString(),
      purchase_currency: currency,
      stripe_session: s.id,
    });
  } catch (e) {
    await notify(
      "URGENT: buyer not added to MailerLite",
      `${email} paid ${value} ${currency} (session ${s.id}) but the group add failed: ${e.message}.\n` +
      `Stripe will retry. If it keeps failing, add them manually AND suppress them from E1-E3 — ` +
      `otherwise they receive discount-expiry emails after paying.`
    );
    return res.status(500).json({ ok: false, error: "mailerlite_failed" });
  }

  // 1b. Pull the buyer out of the Code Series group. With the trigger's
  //     "exit when no longer in trigger group" setting on, this cancels any
  //     queued E2/E3 the moment they pay. Best-effort by design.
  await removeFromCodeSeries(buyerId);

  // 2 + 3. CAPI and notification are best-effort: alert on failure, never
  //        fail the webhook, because a retry would re-run step 1 for nothing.
  const eventId = "purchase_" + s.id;
  const capiOk = await sendCapiPurchase({
    email,
    value,
    currency,
    eventId,
    sourceUrl: s.success_url,
    fbp: (s.metadata && s.metadata.fbp) || null,
    fbc: (s.metadata && s.metadata.fbc) || null,
  });
  if (!capiOk && process.env.META_CAPI_TOKEN) {
    await notify("Meta CAPI Purchase failed", `session ${s.id} · ${email} · ${value} ${currency}`);
  }

  const notified = await notify(
    `New purchase: ${value} ${currency}`,
    `${email}\nsession ${s.id}\nref ${s.client_reference_id || "-"}\n\n` +
    `ACTION: send login credentials within 24h (SLA), then log it in the reconciliation sheet.`
  );

  return res.status(200).json({ ok: true, capi: capiOk, notified });
}
