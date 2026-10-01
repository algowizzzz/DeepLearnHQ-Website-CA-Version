// Vercel serverless function — Stripe webhook: the purchase source of truth.
//
// checkout.session.completed → first-party purchase record (Redis) joined to
// the lead by client_reference_id → MailerLite buyer group → Meta CAPI
// Purchase → GA4 Measurement Protocol purchase → owner notification.
//
// Hardened per ticket 7.10 / SK-6+T4 (MailerLite failure returns 5xx so
// Stripe retries; CAPI/notify failures never block fulfilment), and in the
// funnel-hardening pass (2026-10-01):
//   - Idempotent. Stripe retries and dashboard "Resend" are no-ops: the
//     event id and the session id are each claimed once in Redis. A replay
//     used to re-fire CAPI and re-send the purchase alert.
//   - client_reference_id is now USED, not just printed: dl_… resolves the
//     lead (and its first/last touch), aq_… an anonymous acquisition, and
//     the purchase record carries both so "which Reel produced this $99"
//     is answerable. Email is the fallback join.
//   - Server-side GA4 purchase (gated on GA4_API_SECRET) so revenue reaches
//     GA4 even when the thank-you page never loads.
//
// Env vars (Vercel):
//   STRIPE_WEBHOOK_SECRET   required
//   STRIPE_PAYMENT_LINK_99  required — plink_… for the $99 product (ticket 0.6)
//   MAILERLITE_API_KEY, ML_GROUP_BUYERS   required
//   MAILERLITE_GROUP_ID     optional — code-series group to remove buyers from
//   KV_REST_API_URL/TOKEN   Upstash Redis — without it the webhook still
//                           fulfils but cannot dedup or persist attribution
//   META_CAPI_TOKEN, GA4_API_SECRET, ALERT_WEBHOOK_URL/KEY   optional
import crypto from "node:crypto";
import { claim, release, resolveBuyer, buildPurchase, recordPurchase } from "../lib/leads.js";
import { upsertSubscriber, removeFromGroup } from "../lib/mailerlite.js";
import { sendEvents, userData } from "../lib/capi.js";
import { sendPurchase as sendGa4Purchase } from "../lib/ga4-mp.js";
import { notify } from "../lib/notify.js";
import { log, logError } from "../lib/log.js";

export const config = { api: { bodyParser: false } };

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

const DAY = 86400;

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

  // Idempotency 1 — the Stripe event id. Retries and "Resend" reuse it.
  if (!(await claim("event", event.id, 30 * DAY))) {
    log("stripe-webhook", { duplicate: "event", event_id: event.id });
    return res.status(200).json({ ok: true, duplicate: "event" });
  }

  const s = (event.data && event.data.object) || {};
  const email = ((s.customer_details && s.customer_details.email) || s.customer_email || "").trim().toLowerCase();
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

  // Idempotency 2 — the session. Two distinct events for one session
  // (should not happen, but costs nothing to guard).
  if (!(await claim("session", s.id, 365 * DAY))) {
    log("stripe-webhook", { duplicate: "session", session: s.id });
    return res.status(200).json({ ok: true, duplicate: "session" });
  }

  const value = (s.amount_total || 0) / 100;
  const currency = (s.currency || "usd").toUpperCase();

  // 1. Attribution — who is this buyer, and what brought them? -------------
  const { lead, aq, method, legacyRef } = await resolveBuyer(s.client_reference_id, email);
  const purchase = buildPurchase({ session: s, lead, aq, method, legacyRef, email });
  const recorded = await recordPurchase(purchase);

  // 2. Buyer group — MUST succeed. Failure => release the claims so Stripe's
  //    retry is a real retry, then 5xx. A miss here means a paying customer
  //    keeps getting "your code dies tonight" emails.
  let buyerId = null;
  try {
    const fields = {
      signup_source: "bootcamp_99_purchase",
      purchase_amount: value.toString(),
      purchase_currency: currency,
      stripe_session: s.id,
      purchased_at: purchase.purchase_timestamp,
    };
    if (purchase.stripe_payment_intent) fields.stripe_payment_intent = purchase.stripe_payment_intent;
    if (lead) {
      fields.lead_id = lead.lead_id;
      if (purchase.days_since_registration != null) fields.days_since_registration = String(purchase.days_since_registration);
    }
    for (const k of Object.keys(purchase)) {
      if (k.startsWith("first_touch_") || k.startsWith("last_touch_")) fields[k] = purchase[k];
    }
    buyerId = await upsertSubscriber(email, fields, [process.env.ML_GROUP_BUYERS]);
    if (!buyerId) throw new Error("mailerlite_no_id");
  } catch (e) {
    await release("event", event.id);
    await release("session", s.id);
    await logError("stripe-webhook.mailerlite", e, { lead_id: lead && lead.lead_id, status: 500 });
    await notify(
      "URGENT: buyer not added to MailerLite",
      `${email} paid ${value} ${currency} (session ${s.id}) but the group add failed: ${e.message}.\n` +
      `Stripe will retry. If it keeps failing, add them manually AND suppress them from E1-E3 — ` +
      `otherwise they receive discount-expiry emails after paying.`
    );
    return res.status(500).json({ ok: false, error: "mailerlite_failed" });
  }

  // 2b. Pull the buyer out of the Code Series group. With the trigger's
  //     "exit when no longer in trigger group" setting on, this cancels any
  //     queued E2/E3 the moment they pay. Best-effort by design.
  await removeFromGroup(buyerId, process.env.MAILERLITE_GROUP_ID);

  // 3. Meta CAPI Purchase — same deterministic event_id the thank-you page
  //    uses, so Meta counts one event when both fire.
  const eventId = "purchase_" + s.id;
  const capiOk = await sendEvents([{
    event_name: "Purchase",
    event_id: eventId,
    event_source_url: s.success_url || "https://www.deeplearnhq.ca/thank-you-purchase",
    user_data: userData({
      email,
      fbp: (s.metadata && s.metadata.fbp) || null,
      fbc: (s.metadata && s.metadata.fbc) || null,
      fbclid: lead && lead.fbclid,
    }),
    custom_data: { value, currency, content_name: "The Generative AI 8-Week Bootcamp" },
  }]);
  if (!capiOk && process.env.META_CAPI_TOKEN) {
    await notify("Meta CAPI Purchase failed", `session ${s.id} · ${email} · ${value} ${currency}`);
  }

  // 4. GA4 Measurement Protocol purchase — real client_id when the lead
  //    consented to analytics before registering/clicking checkout; a
  //    deterministic synthetic one otherwise (counted, not attributed).
  const gaClientId = (lead && lead.ga_client_id) || (aq && aq.ga_client_id) || null;
  const ga4Ok = await sendGa4Purchase({
    clientId: gaClientId,
    userId: lead ? lead.lead_id : (aq ? aq.aq_id : s.id),
    transactionId: s.id,
    value,
    currency,
    timestampMs: s.created ? s.created * 1000 : undefined,
  });

  // 5. Owner notification — now with the attribution answer in it.
  const attribution = lead
    ? `lead ${lead.lead_id} (${method}) · first touch ${lead.first_touch_source || "-"} / ${lead.first_touch_content || "-"} · last touch ${lead.last_touch_source || "-"} · ${purchase.days_since_registration ?? "?"} days from signup`
    : aq
      ? `acquisition ${aq.aq_id} · first touch ${aq.first_touch_source || "-"} / ${aq.first_touch_content || "-"}`
      : `no attribution (ref ${s.client_reference_id || "-"})`;
  const notified = await notify(
    `New purchase: ${value} ${currency}`,
    `${email}\nsession ${s.id}\n${attribution}\n\n` +
    `ACTION: send login credentials within 24h (SLA), then log it in the reconciliation sheet.`
  );

  log("stripe-webhook", {
    session: s.id, lead_id: lead ? lead.lead_id : null, aq_id: aq ? aq.aq_id : null, link_method: method,
    recorded, capi: capiOk, ga4: ga4Ok, value, currency,
  });

  return res.status(200).json({ ok: true, recorded, link_method: method, capi: capiOk, ga4: ga4Ok, notified });
}
