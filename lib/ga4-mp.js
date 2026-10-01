// GA4 Measurement Protocol — server-side purchase so revenue reaches GA4
// even when the buyer never returns to the thank-you page.
//
// Limitation, stated plainly: GA4 attributes an MP event to the session of
// the `client_id` it carries. We only hold a real client_id when the visitor
// granted analytics consent before registering/clicking checkout (captured
// from the _ga cookie and stored on the lead). Without it we send a
// deterministic synthetic id so the revenue is at least counted, but GA4 will
// show it as a new direct user. Stripe + Redis remain the revenue truth.
import { sha256 } from "./ids.js";

const MP = "https://www.google-analytics.com/mp/collect";

// GA client ids look like "<random>.<timestamp>" — two numeric halves.
export function syntheticClientId(seed) {
  const h = sha256("ga:" + seed);
  return `${parseInt(h.slice(0, 8), 16)}.${parseInt(h.slice(8, 16), 16)}`;
}

export async function sendPurchase({ clientId, userId, transactionId, value, currency, timestampMs }) {
  const secret = process.env.GA4_API_SECRET;
  const mid = process.env.GA4_MEASUREMENT_ID || "G-154Y1RBED7";
  if (!secret) return false;
  const body = {
    client_id: clientId || syntheticClientId(userId || transactionId),
    events: [
      {
        name: "purchase",
        params: {
          transaction_id: transactionId,
          value,
          currency,
          items: [
            { item_id: "build_with_ai_8_week", item_name: "Build With AI — 8-Week Program", price: value, quantity: 1 },
          ],
        },
      },
    ],
  };
  if (userId) body.user_id = userId;
  if (timestampMs) body.timestamp_micros = String(timestampMs * 1000);
  try {
    const r = await fetch(`${MP}?measurement_id=${encodeURIComponent(mid)}&api_secret=${encodeURIComponent(secret)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return r.ok; // MP returns 204 for accepted payloads regardless of validity
  } catch {
    return false;
  }
}
