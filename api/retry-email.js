// Vercel serverless function — drain the MailerLite retry queue on demand.
//
// Leads whose MailerLite sync failed at registration are kept (Redis is the
// system of record) and queued. api/free-course.js retries one per live
// request; this endpoint drains the rest. No Vercel cron on the Hobby plan
// (daily minimum), so it is called manually or from any external scheduler:
//   curl -X POST https://www.deeplearnhq.ca/api/retry-email -H "Authorization: Bearer $CRON_SECRET"
import crypto from "node:crypto";
import { getLead, updateLead, queueEmailRetry, popEmailRetry } from "../lib/leads.js";
import { upsertSubscriber, rejoinGroup, leadToFields } from "../lib/mailerlite.js";
import { logError } from "../lib/log.js";

function authorized(req) {
  const secret = process.env.CRON_SECRET;
  const got = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!secret || !got || got.length !== secret.length) return false;
  return crypto.timingSafeEqual(Buffer.from(got), Buffer.from(secret));
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });
  if (!authorized(req)) return res.status(401).json({ ok: false, error: "unauthorized" });

  const result = { synced: [], failed: [], skipped: 0 };
  for (let i = 0; i < 50; i++) {
    const id = await popEmailRetry();
    if (!id) break;
    const lead = await getLead(id);
    if (!lead || lead.ml_status === "synced") { result.skipped++; continue; }
    const attempts = Number(lead.ml_attempts || 0) + 1;
    try {
      const sid = await upsertSubscriber(lead.email, leadToFields(lead));
      if (!sid) throw new Error("mailerlite_no_id");
      await rejoinGroup(sid, process.env.MAILERLITE_GROUP_FREE_COURSE);
      await updateLead(id, { ml_status: "synced", ml_attempts: String(attempts) });
      result.synced.push(id);
    } catch (e) {
      await updateLead(id, { ml_attempts: String(attempts) });
      if (attempts < 3) await queueEmailRetry(id);
      await logError("retry-email", e, { lead_id: id });
      result.failed.push(id);
    }
  }
  return res.status(200).json({ ok: true, ...result });
}
