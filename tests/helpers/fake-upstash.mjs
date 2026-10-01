// In-process stand-in for the Upstash Redis REST API, installed as a global
// `fetch` interceptor so `@upstash/redis` talks to it unmodified.
//
// Why this exists: the Stripe webhook's correctness is mostly about Redis
// side effects (idempotency claims, the purchase record, counters) and those
// cannot be exercised against production — a replayed live event would
// double-count a real purchase in Meta and GA4, and the Vercel credentials
// are deliberately not materialised on developer machines. Emulating the
// handful of commands the lib uses lets `node --test` prove the handler
// end to end with no network and no secrets.
//
// Protocol (from @upstash/redis 1.39, chunk-*.mjs HttpClient):
//   POST {base}            body: ["set", key, value, "nx", "ex", 60]
//   POST {base}/pipeline   body: [[cmd...], [cmd...]]
//   response               { result } | [{ result }, ...]
//   With the default `Upstash-Encoding: base64` header every string result
//   except the literal "OK" is base64; numbers, null and nested arrays pass
//   through (arrays element-wise). Argument numbers arrive as JSON numbers.
export const UPSTASH_URL = "https://fake-upstash.test";

export function createFakeUpstash() {
  const store = new Map(); // key -> { t: "str"|"hash"|"zset"|"list", v }

  const hash = (k) => {
    let e = store.get(k);
    if (!e) { e = { t: "hash", v: {} }; store.set(k, e); }
    return e.v;
  };
  const zset = (k) => {
    let e = store.get(k);
    if (!e) { e = { t: "zset", v: new Map() }; store.set(k, e); }
    return e.v;
  };
  const list = (k) => {
    let e = store.get(k);
    if (!e) { e = { t: "list", v: [] }; store.set(k, e); }
    return e.v;
  };
  const ZADD_OPTS = new Set(["nx", "xx", "gt", "lt", "ch", "incr"]);

  function exec(cmd) {
    const [name, ...a] = cmd.map((x) => (typeof x === "string" ? x : String(x)));
    switch (name.toLowerCase()) {
      case "set": {
        const [k, v, ...opts] = a;
        const o = opts.map((s) => s.toLowerCase());
        if (o.includes("nx") && store.has(k)) return null;
        store.set(k, { t: "str", v });
        return "OK";
      }
      case "get": { const e = store.get(a[0]); return e && e.t === "str" ? e.v : null; }
      case "del": { let n = 0; for (const k of a) if (store.delete(k)) n++; return n; }
      case "exists": { let n = 0; for (const k of a) if (store.has(k)) n++; return n; }
      case "expire": return store.has(a[0]) ? 1 : 0;
      case "hset": {
        const h = hash(a[0]); let added = 0;
        for (let i = 1; i < a.length; i += 2) { if (!(a[i] in h)) added++; h[a[i]] = a[i + 1]; }
        return added;
      }
      case "hsetnx": { const h = hash(a[0]); if (a[1] in h) return 0; h[a[1]] = a[2]; return 1; }
      case "hget": { const e = store.get(a[0]); return e && e.t === "hash" && a[1] in e.v ? e.v[a[1]] : null; }
      case "hgetall": { const e = store.get(a[0]); return e && e.t === "hash" ? Object.entries(e.v).flat() : []; }
      case "hincrby": {
        const h = hash(a[0]);
        h[a[1]] = String(Number(h[a[1]] || 0) + Number(a[2]));
        return Number(h[a[1]]);
      }
      case "zadd": {
        const z = zset(a[0]);
        const rest = a.slice(1).filter((s) => !ZADD_OPTS.has(s.toLowerCase()));
        let added = 0;
        for (let i = 0; i < rest.length; i += 2) { if (!z.has(rest[i + 1])) added++; z.set(rest[i + 1], Number(rest[i])); }
        return added;
      }
      case "zrange": {
        const e = store.get(a[0]); if (!e || e.t !== "zset") return [];
        const sorted = [...e.v.entries()].sort((x, y) => x[1] - y[1]).map(([m]) => m);
        const start = Number(a[1]), stop = Number(a[2]);
        return sorted.slice(start, stop < 0 ? sorted.length + stop + 1 : stop + 1);
      }
      case "lpush": { const l = list(a[0]); l.unshift(...a.slice(1)); return l.length; }
      case "rpop": { const e = store.get(a[0]); if (!e || e.t !== "list" || !e.v.length) return null; return e.v.pop(); }
      case "ltrim": return "OK";
      default:
        throw new Error("fake-upstash: unsupported command " + name);
    }
  }

  const enc = (r) =>
    r == null ? null
      : typeof r === "number" ? r
      : Array.isArray(r) ? r.map(enc)
      : r === "OK" ? "OK"
      : Buffer.from(String(r), "utf8").toString("base64");

  async function handle(url, init) {
    // Outage simulation: the client does not retry non-2xx responses (only
    // thrown fetches), so a 503 surfaces immediately as an UpstashError and
    // every lib/ caller takes its "Redis unavailable" branch.
    if (api.outage) return new Response(JSON.stringify({ error: "unavailable" }), { status: 503 });
    const body = JSON.parse(init.body);
    const json = (payload) => new Response(JSON.stringify(payload), { status: 200, headers: { "content-type": "application/json" } });
    try {
      if (url.endsWith("/pipeline") || url.endsWith("/multi-exec")) return json(body.map((c) => ({ result: enc(exec(c)) })));
      return json({ result: enc(exec(body)) });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 400 });
    }
  }

  // Test-side helpers: read the store without going through the client.
  const api = {
    handle,
    store,
    outage: false,
    has: (k) => store.has(k),
    str: (k) => { const e = store.get(k); return e && e.t === "str" ? e.v : null; },
    hash: (k) => { const e = store.get(k); return e && e.t === "hash" ? { ...e.v } : null; },
    hset: (k, fields) => Object.assign(hash(k), fields),
    zmembers: (k) => { const e = store.get(k); return e && e.t === "zset" ? [...e.v.keys()] : []; },
    list: (k) => { const e = store.get(k); return e && e.t === "list" ? [...e.v] : []; },
    reset: () => { store.clear(); api.outage = false; },
  };
  return api;
}
