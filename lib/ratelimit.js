// Rate limiting that actually spans serverless instances. The previous
// per-file in-memory Map only ever throttled a bot that happened to hit the
// same warm lambda twice; Redis INCR+EXPIRE makes the limit real. The Map
// stays as the fallback when Redis is not configured.
import { redis, K } from "./redis.js";
import { sha256 } from "./ids.js";

const mem = new Map();

export async function rateLimited(kind, key, max = 3, windowSec = 3600) {
  const id = sha256(kind + ":" + key); // never store the raw email/IP as a key
  const r = redis();
  if (r) {
    try {
      const k = K(`rl:${kind}:${id}`);
      const n = await r.incr(k);
      if (n === 1) await r.expire(k, windowSec);
      return n > max;
    } catch {
      /* fall through to memory */
    }
  }
  const now = Date.now();
  const rec = mem.get(id);
  if (!rec || now - rec.start > windowSec * 1000) {
    mem.set(id, { start: now, n: 1 });
    return false;
  }
  rec.n += 1;
  if (mem.size > 5000) mem.clear();
  return rec.n > max;
}

export function clientIp(req) {
  const xf = req.headers["x-forwarded-for"] || (req.headers.get && req.headers.get("x-forwarded-for")) || "";
  return String(xf).split(",")[0].trim() || (req.socket && req.socket.remoteAddress) || "unknown";
}
