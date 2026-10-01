// Structured telemetry. One JSON line per record so Vercel's log drain and
// grep both work; the last 500 failures are also kept in Redis so they can
// be inspected without log access. Never log emails, phones or payloads —
// a lead_id is enough to find the record.
import { redis, K } from "./redis.js";

export function log(route, fields = {}) {
  console.log(JSON.stringify({ ts: new Date().toISOString(), route, ...fields }));
}

export async function logError(route, err, extra = {}) {
  const rec = {
    ts: new Date().toISOString(),
    route,
    error_type: (err && err.name) || "Error",
    message: String(err && err.message ? err.message : err).slice(0, 300),
  };
  if (extra.status) rec.status = extra.status;
  if (extra.lead_id) rec.lead_id = extra.lead_id;
  if (extra.kind) rec.kind = extra.kind;
  console.error(JSON.stringify(rec));
  const r = redis();
  if (!r) return;
  try {
    await r.lpush(K("errors:recent"), JSON.stringify(rec));
    await r.ltrim(K("errors:recent"), 0, 499);
  } catch {
    /* telemetry must never affect the request */
  }
}
