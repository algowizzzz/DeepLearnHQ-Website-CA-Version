// Vercel serverless function — first-party data export for funnel reporting.
//
// Streams leads then purchases as JSON Lines, oldest first, so a spreadsheet
// or notebook can compute the content funnel (registrations → outbound →
// bootcamp visits → checkout starts → purchases → revenue, per utm_content)
// without GA4 — which consent declines make unreliable for exactly this.
//
//   curl "https://www.deeplearnhq.ca/api/admin/export?token=$ADMIN_EXPORT_TOKEN" > funnel.jsonl
//   curl ".../api/admin/export?token=…&kind=purchases"
//
// Each line: {"kind":"lead"|"purchase", ...record}. Paginates with ?cursor=
// when a collection exceeds 1000 rows; the last line carries the next cursor.
import crypto from "node:crypto";
import { listLeads, listPurchases } from "../../lib/leads.js";

function authorized(token) {
  const secret = process.env.ADMIN_EXPORT_TOKEN;
  if (!secret || !token || token.length !== secret.length) return false;
  return crypto.timingSafeEqual(Buffer.from(String(token)), Buffer.from(secret));
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();
  const q = req.query || {};
  if (!authorized(q.token)) return res.status(401).json({ ok: false, error: "unauthorized" });

  const kind = q.kind === "purchases" ? "purchases" : q.kind === "leads" ? "leads" : "all";
  const cursor = Math.max(0, parseInt(q.cursor, 10) || 0);

  res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  const write = (o) => res.write(JSON.stringify(o) + "\n");

  if (kind !== "purchases") {
    const { items, next } = await listLeads(cursor, 1000);
    for (const l of items) write({ kind: "lead", ...l });
    if (next != null) write({ kind: "cursor", collection: "leads", next });
  }
  if (kind !== "leads") {
    const { items, next } = await listPurchases(kind === "purchases" ? cursor : 0, 1000);
    for (const p of items) write({ kind: "purchase", ...p });
    if (next != null) write({ kind: "cursor", collection: "purchases", next });
  }
  res.end();
}
