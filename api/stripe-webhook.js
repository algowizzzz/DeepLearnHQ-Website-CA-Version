// Vercel serverless function — Stripe webhook → routes course buyers into MailerLite.
// A completed checkout on a COURSE payment link adds the buyer to the matching group,
// which fires the MailerLite welcome automation. Client-project links are ignored.
//
// Secrets live in Vercel env vars (never in this file / the client):
//   STRIPE_WEBHOOK_SECRET  (required) — signing secret from the Stripe webhook endpoint
//   MAILERLITE_API_KEY     (required) — MailerLite API token (already configured)
import crypto from "node:crypto";

// Stripe delivers the raw body; disable Vercel's parser so we can verify the signature.
export const config = { api: { bodyParser: false } };

// Only these two payment links are course purchases we care about.
const ROUTES = {
  plink_1TtFzbJPOpfKeQtNqut7D2h2: { group: "193571815245743296", source: "bootcamp_purchase" }, // 8-Week Bootcamp → Bootcamp Customers CA
  plink_1TtFvuJPOpfKeQtNVbzxNdDK: { group: "193571836213069631", source: "free_enroll" },       // Free MasterClass → Free Course Members CA
};

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

// Verify Stripe's `stripe-signature` header (HMAC-SHA256 over `${t}.${rawBody}`).
function verifySignature(rawBody, header, secret) {
  if (!header) return false;
  const parts = Object.fromEntries(
    header.split(",").map((kv) => {
      const i = kv.indexOf("=");
      return [kv.slice(0, i), kv.slice(i + 1)];
    })
  );
  const t = parts.t;
  const v1 = parts.v1;
  if (!t || !v1) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${t}.${rawBody.toString("utf8")}`)
    .digest("hex");
  const a = Buffer.from(v1);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  // Reject events older than 5 minutes (replay protection).
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;
  return true;
}

async function addToMailerLite(email, groupId, fields) {
  const KEY = process.env.MAILERLITE_API_KEY;
  if (!KEY) return false;
  const payload = { email, groups: [groupId], fields };
  const r = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + KEY,
    },
    body: JSON.stringify(payload),
  });
  return r.ok;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return res.status(500).json({ ok: false, error: "not_configured" });

  let raw;
  try {
    raw = await readRawBody(req);
  } catch (e) {
    return res.status(400).json({ ok: false, error: "body" });
  }

  if (!verifySignature(raw, req.headers["stripe-signature"], secret)) {
    return res.status(400).json({ ok: false, error: "bad_signature" });
  }

  let event;
  try {
    event = JSON.parse(raw.toString("utf8"));
  } catch (e) {
    return res.status(400).json({ ok: false, error: "json" });
  }

  if (event.type === "checkout.session.completed") {
    const s = (event.data && event.data.object) || {};
    const route = ROUTES[s.payment_link];
    const email = (s.customer_details && s.customer_details.email) || s.customer_email || "";
    if (route && email) {
      try {
        await addToMailerLite(email, route.group, {
          source: route.source,
          purchase_amount: ((s.amount_total || 0) / 100).toString(),
        });
      } catch (e) {
        // swallow — still 200 so Stripe doesn't retry-storm; we can replay from Stripe if needed
      }
    }
  }

  // Acknowledge fast so Stripe marks delivery successful.
  return res.status(200).json({ ok: true, received: true });
}
