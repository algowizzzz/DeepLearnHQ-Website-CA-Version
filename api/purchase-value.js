// Vercel serverless function — look up what a completed checkout actually cost,
// so the browser Purchase event reports a real number instead of a hardcoded 99.
//
// Ticket 7.4. This matters more than it looks: most buyers arrive through the
// $50-off code, so hardcoding 99 would overstate revenue to Meta by ~2x and
// train the ad algorithm on a value that never existed.
//
// The session id comes from Stripe's success_url and is unguessable, but we
// still return only what the thank-you page needs — amount, currency, and a
// deterministic event id. No customer PII crosses back to the browser.
//
// Env: STRIPE_SECRET_KEY (restricted key: checkout sessions read)

export default async function handler(req, res) {
  const id = (req.query && req.query.session_id) || "";
  if (!/^cs_[A-Za-z0-9_]+$/.test(id)) {
    return res.status(400).json({ ok: false, error: "bad_session_id" });
  }

  const KEY = process.env.STRIPE_SECRET_KEY;
  if (!KEY) return res.status(200).json({ ok: false, error: "not_configured" });

  try {
    const r = await fetch("https://api.stripe.com/v1/checkout/sessions/" + id, {
      headers: { Authorization: "Bearer " + KEY },
    });
    if (!r.ok) return res.status(200).json({ ok: false, error: "stripe_" + r.status });
    const s = await r.json();

    // Only report a Purchase for a session that actually paid.
    if (s.payment_status !== "paid") {
      return res.status(200).json({ ok: false, error: "unpaid" });
    }

    return res.status(200).json({
      ok: true,
      value: (s.amount_total || 0) / 100,
      currency: (s.currency || "usd").toUpperCase(),
      // Must match the webhook's id so Meta deduplicates browser vs server.
      event_id: "purchase_" + s.id,
    });
  } catch (e) {
    return res.status(200).json({ ok: false, error: "upstream" });
  }
}
