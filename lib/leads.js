// First-party lead store on Upstash Redis. Key schema (all under "dlhq:"):
//
//   lead:{dl_id}                HASH   the lead record
//   lead:email:{sha256(email)}  STRING → dl_id   (SET NX = the duplicate gate)
//   aq:{aq_id}                  HASH   anonymous attribution snapshot, 90d TTL
//   purchase:{cs_id}            HASH   purchase record
//   leads:by_registered         ZSET   score = registered_at ms
//   purchases:by_time           ZSET   score = purchase ms
//   stats:content:{content}     HASH   registrations/outbound/bootcamp_visits/
//   stats:source:{source}              checkout_starts/purchases/revenue_cents
//   stats:day:{YYYY-MM-DD}             (keyed by FIRST-touch content/source)
//   wh:event:{id} / wh:session:{id}    STRING NX — webhook idempotency
//   email:retry                 LIST   dl_ids whose MailerLite sync failed
//
// Every function degrades to null/false when Redis is unavailable; callers
// treat persistence as best-effort except where they explicitly check.
import { redis, K, safe } from "./redis.js";
import { newLeadId, isLeadId, isAqId, sha256 } from "./ids.js";
import { flattenTouch, pickTouch, daysBetween } from "./attribution-server.js";

const AQ_TTL = 90 * 86400;
const STEPS = new Set(["free_course_outbound", "bootcamp_visit", "checkout_start", "purchased", "consent"]);

function emailKey(email) {
  return K("lead:email:" + sha256(String(email).trim().toLowerCase()));
}

function statsKeys(lead, day) {
  const content = (lead && lead.first_touch_content) || "none";
  const source = (lead && lead.first_touch_source) || "none";
  return [K(`stats:content:${content}`), K(`stats:source:${source}`), K(`stats:day:${day || today()}`)];
}

export const today = () => new Date().toISOString().slice(0, 10);

// Returns { lead, created } — created=false means the email already had a
// lead and `lead` is the EXISTING record (last touch updated if newer).
export async function createLead({ email, firstTouch, lastTouch, registrationPage, marketingConsent, gaClientId, fbclid, aqId, source }) {
  const r = redis();
  const now = new Date().toISOString();
  const id = newLeadId();
  if (!r) {
    // No persistence: still mint an id so the browser/Stripe chain works.
    return { lead: { lead_id: id, email, registered_at: now, ...flattenTouch("first_touch", firstTouch), ...flattenTouch("last_touch", lastTouch) }, created: true, persisted: false };
  }
  try {
    const won = await r.set(emailKey(email), id, { nx: true });
    if (won !== "OK") {
      const existingId = await r.get(emailKey(email));
      const lead = existingId ? await getLead(existingId) : null;
      if (lead) {
        if (lastTouch && lastTouch.ts && (!lead.last_touch_at || lastTouch.ts > lead.last_touch_at)) {
          await r.hset(K("lead:" + lead.lead_id), flattenTouch("last_touch", lastTouch));
          Object.assign(lead, flattenTouch("last_touch", lastTouch));
        }
        return { lead, created: false, persisted: true };
      }
      // Index points at a missing hash (should not happen) — repair by falling through.
      await r.set(emailKey(email), id);
    }
    const lead = {
      lead_id: id,
      email: String(email).trim().toLowerCase(),
      registered_at: now,
      registration_page: registrationPage || "/free-course",
      signup_source: source || "free_course_landing",
      marketing_consent: marketingConsent ? "1" : "0",
      ...(marketingConsent ? { marketing_consent_at: now } : {}),
      ...flattenTouch("first_touch", firstTouch),
      ...flattenTouch("last_touch", lastTouch || firstTouch),
      ml_status: "pending",
      ml_attempts: "0",
    };
    if (!lead.first_touch_at) lead.first_touch_at = now;
    if (!lead.last_touch_at) lead.last_touch_at = lead.first_touch_at;
    if (gaClientId) lead.ga_client_id = String(gaClientId).slice(0, 64);
    if (fbclid) lead.fbclid = String(fbclid).replace(/[^A-Za-z0-9_.-]/g, "").slice(0, 400);
    if (isAqId(aqId)) lead.aq_id = aqId;

    const p = r.pipeline();
    p.hset(K("lead:" + id), lead);
    p.zadd(K("leads:by_registered"), { score: Date.now(), member: id });
    for (const sk of statsKeys(lead)) p.hincrby(sk, "registrations", 1);
    if (isAqId(aqId)) p.hset(K("aq:" + aqId), { lead_id: id });
    await p.exec();
    return { lead, created: true, persisted: true };
  } catch (e) {
    console.error(JSON.stringify({ ts: now, route: "leads.createLead", error_type: "redis_error", message: String(e.message || e).slice(0, 300) }));
    return { lead: { lead_id: id, email, registered_at: now, ...flattenTouch("first_touch", firstTouch), ...flattenTouch("last_touch", lastTouch) }, created: true, persisted: false };
  }
}

export async function getLead(id) {
  if (!isLeadId(id)) return null;
  return safe(async (r) => {
    const h = await r.hgetall(K("lead:" + id));
    return h && Object.keys(h).length ? stringify(h) : null;
  }, null, "leads.getLead");
}

export async function getLeadByEmail(email) {
  if (!email) return null;
  return safe(async (r) => {
    const id = await r.get(emailKey(email));
    return id ? getLead(id) : null;
  }, null, "leads.getLeadByEmail");
}

export async function updateLead(id, fields) {
  if (!isLeadId(id) || !fields || !Object.keys(fields).length) return false;
  return safe(async (r) => { await r.hset(K("lead:" + id), fields); return true; }, false, "leads.updateLead");
}

// First time a step is recorded for a lead it increments the funnel counters;
// repeats update last-touch only. Returns { first:boolean }.
export async function markStep(id, step, lastTouch) {
  if (!isLeadId(id) || !STEPS.has(step)) return { first: false };
  return safe(async (r) => {
    const key = K("lead:" + id);
    const now = new Date().toISOString();
    const first = step === "consent" ? 0 : await r.hsetnx(key, `${step}_at`, now);
    const upd = {};
    if (lastTouch && lastTouch.ts) {
      const cur = await r.hget(key, "last_touch_at");
      if (!cur || lastTouch.ts > cur) Object.assign(upd, flattenTouch("last_touch", lastTouch));
    }
    if (Object.keys(upd).length) await r.hset(key, upd);
    if (first === 1) {
      const lead = await r.hgetall(key);
      const field = { free_course_outbound: "outbound", bootcamp_visit: "bootcamp_visits", checkout_start: "checkout_starts", purchased: "purchases" }[step];
      if (field) {
        const p = r.pipeline();
        for (const sk of statsKeys(lead)) p.hincrby(sk, field, 1);
        await p.exec();
      }
    }
    return { first: first === 1 };
  }, { first: false }, "leads.markStep");
}

export async function getAcquisition(id) {
  if (!isAqId(id)) return null;
  return safe(async (r) => {
    const h = await r.hgetall(K("aq:" + id));
    return h && Object.keys(h).length ? stringify(h) : null;
  }, null, "leads.getAcquisition");
}

// Creates the snapshot once (first touch preserved), refreshes last touch and
// step timestamps on repeats. Counters only move on checkout_start.
export async function upsertAcquisition(id, { firstTouch, lastTouch, gaClientId, step }) {
  if (!isAqId(id)) return false;
  return safe(async (r) => {
    const key = K("aq:" + id);
    const now = new Date().toISOString();
    const exists = await r.exists(key);
    const upd = { ...flattenTouch("last_touch", lastTouch || firstTouch) };
    if (!exists) Object.assign(upd, { aq_id: id, created_at: now }, flattenTouch("first_touch", firstTouch || lastTouch));
    if (gaClientId) upd.ga_client_id = String(gaClientId).slice(0, 64);
    if (step && STEPS.has(step)) upd[`${step}_at`] = now;
    await r.hset(key, upd);
    await r.expire(key, AQ_TTL);
    if (step === "checkout_start" && !(await r.hget(key, "checkout_counted"))) {
      await r.hset(key, { checkout_counted: "1" });
      const snap = await r.hgetall(key);
      const p = r.pipeline();
      for (const sk of statsKeys(snap)) p.hincrby(sk, "checkout_starts", 1);
      await p.exec();
    }
    return true;
  }, false, "leads.upsertAcquisition");
}

// Idempotent on session id: returns false when this purchase was already
// counted, so callers never double-increment revenue.
export async function recordPurchase(p) {
  return safe(async (r) => {
    const counted = await r.set(K(`purchase:${p.stripe_session}:counted`), "1", { nx: true });
    if (counted !== "OK") return false;
    const rec = {};
    for (const [k, v] of Object.entries(p)) if (v != null && v !== "") rec[k] = String(v);
    rec.product = "build_with_ai_8_week";
    const pipe = r.pipeline();
    pipe.hset(K("purchase:" + p.stripe_session), rec);
    pipe.zadd(K("purchases:by_time"), { score: Date.now(), member: p.stripe_session });
    const cents = Math.round(Number(p.amount || 0) * 100);
    for (const sk of statsKeys(p)) { pipe.hincrby(sk, "purchases", 1); pipe.hincrby(sk, "revenue_cents", cents); }
    if (isLeadId(p.lead_id)) {
      pipe.hset(K("lead:" + p.lead_id), {
        purchased_at: p.purchase_timestamp,
        purchase_session: p.stripe_session,
        ...(p.days_since_registration != null ? { days_since_registration: String(p.days_since_registration) } : {}),
      });
    }
    await pipe.exec();
    return true;
  }, false, "leads.recordPurchase");
}

// Resolve a Stripe client_reference_id (or an email) to whatever attribution we hold.
export async function resolveBuyer(ref, email) {
  let lead = null, aq = null, method = "none", legacyRef = null;
  if (isLeadId(ref)) { lead = await getLead(ref); if (lead) method = "lead_id"; }
  else if (isAqId(ref)) { aq = await getAcquisition(ref); if (aq) method = "aq"; }
  else if (ref) legacyRef = String(ref).slice(0, 200);
  if (!lead && email) { lead = await getLeadByEmail(email); if (lead) method = method === "aq" ? "aq+email" : "email"; }
  return { lead, aq, method, legacyRef };
}

export function buildPurchase({ session, lead, aq, method, legacyRef, email }) {
  const purchased = new Date((session.created || Math.floor(Date.now() / 1000)) * 1000).toISOString();
  const src = lead || aq || {};
  const rec = {
    stripe_session: session.id,
    transaction_id: session.id,
    stripe_payment_intent: typeof session.payment_intent === "string" ? session.payment_intent : (session.payment_intent && session.payment_intent.id) || "",
    email: lead ? lead.email : email,
    purchase_email: email,
    amount: (session.amount_total || 0) / 100,
    currency: String(session.currency || "usd").toUpperCase(),
    purchase_timestamp: purchased,
    link_method: method,
    ...flattenTouch("first_touch", pickTouch(src, "first_touch")),
    ...flattenTouch("last_touch", pickTouch(src, "last_touch")),
  };
  if (lead) {
    rec.lead_id = lead.lead_id;
    const d = daysBetween(lead.registered_at, purchased);
    if (d != null) rec.days_since_registration = d;
  }
  if (aq) rec.aq_id = aq.aq_id;
  if (legacyRef) rec.legacy_ref = legacyRef;
  return rec;
}

// Webhook idempotency. claim() returns true when this id is new.
export async function claim(kind, id, ttlSec) {
  const r = redis();
  if (!r) return true; // no Redis → cannot dedup; proceed (fulfilment beats dedup)
  try { return (await r.set(K(`wh:${kind}:${id}`), "1", { nx: true, ex: ttlSec })) === "OK"; }
  catch { return true; }
}
export async function release(kind, id) {
  await safe((r) => r.del(K(`wh:${kind}:${id}`)), null, "leads.release");
}

export async function queueEmailRetry(id) {
  await safe((r) => r.lpush(K("email:retry"), id), null, "leads.queueEmailRetry");
}
export async function popEmailRetry() {
  return safe((r) => r.rpop(K("email:retry")), null, "leads.popEmailRetry");
}

export async function incrConsent(choice) {
  if (choice !== "granted" && choice !== "denied") return;
  await safe((r) => r.hincrby(K("stats:consent:" + today()), choice, 1), null, "leads.incrConsent");
}

// cursor = ZSET rank offset. Returns { items, next }.
export async function listLeads(cursor = 0, count = 1000) {
  return safe(async (r) => {
    const ids = await r.zrange(K("leads:by_registered"), cursor, cursor + count - 1);
    if (!ids.length) return { items: [], next: null };
    const p = r.pipeline();
    for (const id of ids) p.hgetall(K("lead:" + id));
    const rows = await p.exec();
    return { items: rows.filter(Boolean).map(stringify), next: ids.length === count ? cursor + count : null };
  }, { items: [], next: null }, "leads.listLeads");
}

export async function listPurchases(cursor = 0, count = 1000) {
  return safe(async (r) => {
    const ids = await r.zrange(K("purchases:by_time"), cursor, cursor + count - 1);
    if (!ids.length) return { items: [], next: null };
    const p = r.pipeline();
    for (const id of ids) p.hgetall(K("purchase:" + id));
    const rows = await p.exec();
    return { items: rows.filter(Boolean).map(stringify), next: ids.length === count ? cursor + count : null };
  }, { items: [], next: null }, "leads.listPurchases");
}

// @upstash/redis auto-deserialises JSON-looking values ("1" → 1); keep the
// record shape predictable for callers by stringifying scalars back.
function stringify(h) {
  const out = {};
  for (const [k, v] of Object.entries(h)) out[k] = v == null ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
  return out;
}
