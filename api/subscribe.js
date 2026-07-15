// Vercel serverless function — adds a signup to MailerLite.
// Secrets live in Vercel env vars (never in this file / the client):
//   MAILERLITE_API_KEY   (required)  — your MailerLite API token
//   MAILERLITE_GROUP_ID  (optional)  — group to add subscribers to (drives the welcome automation)
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });

  let data = req.body;
  if (typeof data === "string") { try { data = JSON.parse(data); } catch (e) { data = {}; } }
  data = data || {};
  const email = (data.email || "").trim();
  const source = (data.source || "website").toString().slice(0, 60);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }

  const KEY = process.env.MAILERLITE_API_KEY;
  const GROUP = process.env.MAILERLITE_GROUP_ID;
  if (!KEY) return res.status(200).json({ ok: false, error: "not_configured" });

  try {
    const payload = { email, fields: { source } };
    if (GROUP) payload.groups = [GROUP];
    const r = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + KEY,
      },
      body: JSON.stringify(payload),
    });
    return res.status(200).json({ ok: r.ok });
  } catch (e) {
    return res.status(200).json({ ok: false, error: "upstream" });
  }
}
