// Upstash Redis (Vercel Marketplace) — the first-party source of truth for
// leads, acquisitions, purchases, funnel counters and webhook idempotency.
//
// Every caller must tolerate `redis()` returning null (integration not yet
// provisioned, or env vars missing on a Preview). Registration, the course
// redirect and buyer fulfilment all keep working without Redis; only
// persistence and dedup degrade, and the degradation is logged.
import { Redis } from "@upstash/redis";

let client = null;

export function redis() {
  if (client) return client;
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  client = new Redis({ url, token });
  return client;
}

// Single namespace so the store can be shared with other projects on the
// same Upstash database without key collisions.
export const K = (s) => "dlhq:" + s;

// Run `fn(redis)`; on missing client or any error return `fallback` and log
// a one-line structured record. Never throws — persistence is best-effort by
// design everywhere except where a caller explicitly checks the result.
export async function safe(fn, fallback, route = "redis") {
  const r = redis();
  if (!r) {
    console.warn(JSON.stringify({ ts: new Date().toISOString(), route, warn: "redis_unavailable" }));
    return fallback;
  }
  try {
    return await fn(r);
  } catch (e) {
    console.error(JSON.stringify({
      ts: new Date().toISOString(),
      route,
      error_type: "redis_error",
      message: String(e && e.message ? e.message : e).slice(0, 300),
    }));
    return fallback;
  }
}
