// The one alert sender. Web3Forms (ticket 0.10b) rejects any payload without
// `access_key` and reads `message` as the email body — the copies that lived
// in api/free-course.js and api/subscribe.js sent neither, so every alert
// from those two routes has silently no-op'd. This is the stripe-webhook.js
// version, which was the only correct one.
export async function notify(subject, body) {
  const url = process.env.ALERT_WEBHOOK_URL;
  if (!url) return false;
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
  } catch {
    return false;
  }
}
