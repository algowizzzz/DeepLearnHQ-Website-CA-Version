// End-to-end test of api/stripe-webhook.js: real handler, real HMAC
// signature check, real lib/ code, with every network edge replaced —
// Upstash by the in-process emulator, MailerLite / Meta CAPI / GA4 MP /
// the alert webhook by recording stubs. Run with `npm test`.
//
// What this proves that production cannot safely prove: a replayed event is
// a no-op, a MailerLite outage makes Stripe retry without double-counting
// the purchase, and client_reference_id actually joins the purchase to the
// lead's first touch.
import { test, before, beforeEach } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { Readable } from "node:stream";
import { createFakeUpstash, UPSTASH_URL } from "./helpers/fake-upstash.mjs";

const SECRET = "whsec_test_" + crypto.randomBytes(8).toString("hex");
const LINK = "plink_test_bootcamp_99";
const BUYERS = "grp_buyers";
const CODE_SERIES = "grp_code_series";
const ALERT_URL = "https://alerts.test/hook";

Object.assign(process.env, {
  STRIPE_WEBHOOK_SECRET: SECRET,
  STRIPE_PAYMENT_LINK_99: LINK,
  MAILERLITE_API_KEY: "ml_test_key",
  ML_GROUP_BUYERS: BUYERS,
  MAILERLITE_GROUP_ID: CODE_SERIES,
  META_CAPI_TOKEN: "meta_test_token",
  GA4_API_SECRET: "ga4_test_secret",
  GA4_MEASUREMENT_ID: "G-TEST",
  ALERT_WEBHOOK_URL: ALERT_URL,
  ALERT_WEBHOOK_KEY: "w3f_test",
  KV_REST_API_URL: UPSTASH_URL,
  KV_REST_API_TOKEN: "fake-token",
});

const kv = createFakeUpstash();
const calls = { mailerlite: [], capi: [], ga4: [], alerts: [] };
let mailerliteFails = false;

globalThis.fetch = async (url, init = {}) => {
  url = String(url);
  const body = init.body ? JSON.parse(init.body) : null;
  if (url.startsWith(UPSTASH_URL)) return kv.handle(url, init);
  if (url.startsWith("https://connect.mailerlite.com/api")) {
    calls.mailerlite.push({ url, method: init.method || "GET", body });
    if (mailerliteFails && url.endsWith("/subscribers")) return new Response("{}", { status: 500 });
    if (init.method === "DELETE") return new Response(null, { status: 204 });
    return new Response(JSON.stringify({ data: { id: "ml_sub_1", email: body && body.email } }), { status: 200 });
  }
  if (url.startsWith("https://graph.facebook.com/")) { calls.capi.push({ url, body }); return new Response("{}", { status: 200 }); }
  if (url.startsWith("https://www.google-analytics.com/mp/collect")) { calls.ga4.push({ url, body }); return new Response(null, { status: 204 }); }
  if (url === ALERT_URL) { calls.alerts.push(body); return new Response("{}", { status: 200 }); }
  throw new Error("unexpected fetch " + url);
};

// Import AFTER env + fetch are in place: lib/redis.js caches its client.
const { default: handler } = await import("../api/stripe-webhook.js");
const { createLead, upsertAcquisition } = await import("../lib/leads.js");
const { syntheticClientId } = await import("../lib/ga4-mp.js");
const { sha256 } = await import("../lib/ids.js");

// ---------------------------------------------------------------- helpers
function sign(raw, secret = SECRET, t = Math.floor(Date.now() / 1000)) {
  const v1 = crypto.createHmac("sha256", secret).update(`${t}.${raw}`).digest("hex");
  return `t=${t},v1=${v1}`;
}

async function invoke(event, { signature, method = "POST" } = {}) {
  const raw = JSON.stringify(event);
  const req = Readable.from([Buffer.from(raw)]);
  req.method = method;
  req.headers = { "stripe-signature": signature === undefined ? sign(raw) : signature };
  const out = { status: null, body: null };
  const res = { status(n) { out.status = n; return this; }, json(b) { out.body = b; return this; } };
  await handler(req, res);
  return out;
}

let seq = 0;
function sessionEvent({ ref = null, email = "buyer@example.com", link = LINK, sessionId, eventId, type = "checkout.session.completed", amount = 9900 } = {}) {
  seq++;
  const cs = sessionId || `cs_test_${seq}_${crypto.randomBytes(4).toString("hex")}`;
  return {
    id: eventId || `evt_test_${seq}_${crypto.randomBytes(4).toString("hex")}`,
    type,
    created: Math.floor(Date.now() / 1000),
    data: {
      object: {
        id: cs,
        object: "checkout.session",
        payment_link: link,
        payment_intent: "pi_test_" + seq,
        client_reference_id: ref,
        customer_details: email ? { email } : null,
        amount_total: amount,
        currency: "usd",
        created: Math.floor(Date.now() / 1000),
        success_url: "https://www.deeplearnhq.ca/thank-you-purchase?session_id={CHECKOUT_SESSION_ID}",
        metadata: {},
      },
    },
  };
}

const K = (s) => "dlhq:" + s;
const DAY_MS = 86400000;

async function seedLead(email, content = "ig_test_001", { daysAgo = 3 } = {}) {
  const { lead } = await createLead({
    email,
    firstTouch: { source: "instagram", medium: "organic", campaign: "free_ai_course", content, landing_page: "/free-course?utm_content=" + content, ts: new Date(Date.now() - daysAgo * DAY_MS).toISOString() },
    lastTouch: { source: "email", medium: "owned", campaign: "free_course_nurture", content: "email_01", ts: new Date(Date.now() - DAY_MS).toISOString() },
    registrationPage: "/free-course",
    marketingConsent: true,
  });
  // createLead stamps registered_at = now; back-date it so days_since_registration is meaningful.
  kv.hset(K("lead:" + lead.lead_id), { registered_at: new Date(Date.now() - daysAgo * DAY_MS).toISOString() });
  return lead;
}

before(() => { assert.equal(typeof handler, "function"); });
beforeEach(() => {
  kv.reset();
  for (const k of Object.keys(calls)) calls[k].length = 0;
  mailerliteFails = false;
});

// ------------------------------------------------------------------ gates
test("rejects a bad signature and writes nothing", async () => {
  const ev = sessionEvent({ ref: null });
  const r = await invoke(ev, { signature: sign(JSON.stringify(ev), "whsec_wrong") });
  assert.equal(r.status, 400);
  assert.equal(r.body.error, "bad_signature");
  assert.equal(kv.store.size, 0);
  assert.equal(calls.mailerlite.length, 0);
});

test("rejects a stale timestamp (replayed capture)", async () => {
  const ev = sessionEvent();
  const r = await invoke(ev, { signature: sign(JSON.stringify(ev), SECRET, Math.floor(Date.now() / 1000) - 600) });
  assert.equal(r.status, 400);
  assert.equal(r.body.error, "bad_signature");
});

test("ignores non-checkout events without claiming anything", async () => {
  const r = await invoke(sessionEvent({ type: "payment_intent.succeeded" }));
  assert.equal(r.status, 200);
  assert.equal(r.body.ignored, "payment_intent.succeeded");
  assert.equal(kv.store.size, 0);
});

test("ignores other payment links but alerts the owner", async () => {
  const r = await invoke(sessionEvent({ link: "plink_other_product" }));
  assert.equal(r.status, 200);
  assert.equal(r.body.ignored, "payment_link");
  assert.equal(calls.alerts.length, 1);
  assert.match(calls.alerts[0].subject, /unrecognised payment link/);
  assert.equal(calls.mailerlite.length, 0);
  assert.equal(calls.capi.length, 0);
});

test("ignores a session with no email but alerts", async () => {
  const r = await invoke(sessionEvent({ email: null }));
  assert.equal(r.status, 200);
  assert.equal(r.body.ignored, "no_email");
  assert.match(calls.alerts[0].subject, /no email/);
});

test("405 on non-POST", async () => {
  const r = await invoke(sessionEvent(), { method: "GET" });
  assert.equal(r.status, 405);
});

// ------------------------------------------------- the reconciliation chain
test("lead_id reference: purchase joined to the lead's FIRST touch, every downstream fires once", async () => {
  const lead = await seedLead("ananya@example.com", "ig_093");
  const ev = sessionEvent({ ref: lead.lead_id, email: "ananya@example.com" });
  const cs = ev.data.object.id;

  const r = await invoke(ev);
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, { ok: true, recorded: true, link_method: "lead_id", capi: true, ga4: true, notified: true });

  // Redis: purchase record
  const p = kv.hash(K("purchase:" + cs));
  assert.ok(p, "purchase hash written");
  assert.equal(p.lead_id, lead.lead_id);
  assert.equal(p.link_method, "lead_id");
  assert.equal(p.amount, "99");
  assert.equal(p.currency, "USD");
  assert.equal(p.product, "build_with_ai_8_week");
  assert.equal(p.transaction_id, cs);
  assert.equal(p.stripe_payment_intent, ev.data.object.payment_intent);
  assert.equal(p.first_touch_source, "instagram");
  assert.equal(p.first_touch_content, "ig_093");
  assert.equal(p.last_touch_source, "email");
  assert.equal(p.last_touch_content, "email_01");
  assert.equal(p.days_since_registration, "3");
  assert.deepEqual(kv.zmembers(K("purchases:by_time")), [cs]);

  // Redis: lead updated, counters keyed by first touch
  const l = kv.hash(K("lead:" + lead.lead_id));
  assert.equal(l.purchase_session, cs);
  assert.ok(l.purchased_at);
  assert.equal(l.days_since_registration, "3");
  for (const sk of ["stats:content:ig_093", "stats:source:instagram", "stats:day:" + new Date().toISOString().slice(0, 10)]) {
    const s = kv.hash(K(sk));
    assert.equal(s.purchases, "1", sk);
    assert.equal(s.revenue_cents, "9900", sk);
  }
  // Nothing counted under the last-touch content.
  assert.equal(kv.hash(K("stats:content:email_01")), null);

  // Idempotency claims exist
  assert.equal(kv.str(K("wh:event:" + ev.id)), "1");
  assert.equal(kv.str(K("wh:session:" + cs)), "1");
  assert.equal(kv.str(K(`purchase:${cs}:counted`)), "1");

  // MailerLite: one upsert into the buyers group carrying the join + attribution, then removal from the code series
  const upserts = calls.mailerlite.filter((c) => c.method === "POST" && c.url.endsWith("/subscribers"));
  assert.equal(upserts.length, 1);
  assert.equal(upserts[0].body.email, "ananya@example.com");
  assert.deepEqual(upserts[0].body.groups, [BUYERS]);
  const f = upserts[0].body.fields;
  assert.equal(f.lead_id, lead.lead_id);
  assert.equal(f.signup_source, "bootcamp_99_purchase");
  assert.equal(f.purchase_amount, "99");
  assert.equal(f.purchase_currency, "USD");
  assert.equal(f.stripe_session, cs);
  assert.equal(f.first_touch_content, "ig_093");
  assert.equal(f.last_touch_source, "email");
  assert.equal(f.days_since_registration, "3");
  const removes = calls.mailerlite.filter((c) => c.method === "DELETE");
  assert.equal(removes.length, 1);
  assert.ok(removes[0].url.endsWith(`/subscribers/ml_sub_1/groups/${CODE_SERIES}`));

  // Meta CAPI: deterministic event_id shared with the thank-you page, hashed email
  assert.equal(calls.capi.length, 1);
  const capiEvent = calls.capi[0].body.data[0];
  assert.equal(capiEvent.event_name, "Purchase");
  assert.equal(capiEvent.event_id, "purchase_" + cs);
  assert.deepEqual(capiEvent.user_data.em, [sha256("ananya@example.com")]);
  assert.equal(capiEvent.custom_data.value, 99);
  assert.equal(capiEvent.custom_data.currency, "USD");

  // GA4 MP: transaction keyed on the session, user_id = lead_id, synthetic client_id (no consent captured)
  assert.equal(calls.ga4.length, 1);
  assert.match(calls.ga4[0].url, /measurement_id=G-TEST&api_secret=ga4_test_secret/);
  const ga = calls.ga4[0].body;
  assert.equal(ga.user_id, lead.lead_id);
  assert.equal(ga.client_id, syntheticClientId(lead.lead_id));
  assert.equal(ga.events[0].name, "purchase");
  assert.equal(ga.events[0].params.transaction_id, cs);
  assert.equal(ga.events[0].params.value, 99);

  // Owner alert carries the attribution answer
  assert.equal(calls.alerts.length, 1);
  assert.equal(calls.alerts[0].subject, "New purchase: 99 USD");
  assert.match(calls.alerts[0].message, new RegExp(`lead ${lead.lead_id} \\(lead_id\\)`));
  assert.match(calls.alerts[0].message, /first touch instagram \/ ig_093/);
  assert.match(calls.alerts[0].message, /3 days from signup/);
  assert.equal(calls.alerts[0].access_key, "w3f_test");
});

test("uses the lead's real GA client_id when consent captured one", async () => {
  const lead = await seedLead("consented@example.com");
  kv.hset(K("lead:" + lead.lead_id), { ga_client_id: "1234567890.1700000000" });
  await invoke(sessionEvent({ ref: lead.lead_id, email: "consented@example.com" }));
  assert.equal(calls.ga4[0].body.client_id, "1234567890.1700000000");
});

test("Stripe retry / dashboard Resend of the same event is a no-op", async () => {
  const lead = await seedLead("retry@example.com");
  const ev = sessionEvent({ ref: lead.lead_id, email: "retry@example.com" });
  const first = await invoke(ev);
  assert.equal(first.body.recorded, true);

  const again = await invoke(ev);
  assert.equal(again.status, 200);
  assert.deepEqual(again.body, { ok: true, duplicate: "event" });

  assert.equal(calls.capi.length, 1, "CAPI fired exactly once");
  assert.equal(calls.ga4.length, 1, "GA4 fired exactly once");
  assert.equal(calls.alerts.length, 1, "one purchase alert");
  assert.equal(calls.mailerlite.filter((c) => c.method === "POST").length, 1);
  assert.equal(kv.hash(K("stats:content:ig_test_001")).purchases, "1");
});

test("a second distinct event for the same session is deduped on the session", async () => {
  const lead = await seedLead("twice@example.com");
  const ev1 = sessionEvent({ ref: lead.lead_id, email: "twice@example.com" });
  await invoke(ev1);
  const ev2 = sessionEvent({ ref: lead.lead_id, email: "twice@example.com", sessionId: ev1.data.object.id });
  const r = await invoke(ev2);
  assert.deepEqual(r.body, { ok: true, duplicate: "session" });
  assert.equal(calls.capi.length, 1);
  assert.equal(kv.hash(K("stats:source:instagram")).revenue_cents, "9900");
});

test("MailerLite outage: 500 so Stripe retries, claims released, purchase never double-counted", async () => {
  const lead = await seedLead("outage@example.com");
  const ev = sessionEvent({ ref: lead.lead_id, email: "outage@example.com" });
  const cs = ev.data.object.id;

  mailerliteFails = true;
  const r1 = await invoke(ev);
  assert.equal(r1.status, 500);
  assert.equal(r1.body.error, "mailerlite_failed");
  // Claims released so the retry is real
  assert.equal(kv.has(K("wh:event:" + ev.id)), false);
  assert.equal(kv.has(K("wh:session:" + cs)), false);
  // The purchase itself was already persisted (fulfilment data beats dedup)
  assert.ok(kv.hash(K("purchase:" + cs)));
  assert.equal(kv.hash(K("stats:content:ig_test_001")).purchases, "1");
  // Owner told, telemetry kept, nothing sent to Meta/GA4
  assert.equal(calls.alerts.length, 1);
  assert.match(calls.alerts[0].subject, /URGENT: buyer not added to MailerLite/);
  assert.equal(calls.capi.length, 0);
  assert.equal(calls.ga4.length, 0);
  assert.equal(kv.list(K("errors:recent")).length, 1);
  assert.match(kv.list(K("errors:recent"))[0], /mailerlite_upsert_500/);

  // Stripe retries after MailerLite recovers
  mailerliteFails = false;
  const r2 = await invoke(ev);
  assert.equal(r2.status, 200);
  assert.equal(r2.body.ok, true);
  assert.equal(r2.body.recorded, false, "purchase was counted on the first attempt, not again");
  assert.equal(r2.body.link_method, "lead_id");
  assert.equal(kv.hash(K("stats:content:ig_test_001")).purchases, "1");
  assert.deepEqual(kv.zmembers(K("purchases:by_time")), [cs]);
  assert.equal(calls.capi.length, 1);
  assert.equal(calls.ga4.length, 1);
  assert.equal(calls.alerts.length, 2);
  assert.equal(calls.alerts[1].subject, "New purchase: 99 USD");
});

// ----------------------------------------------------- the other join paths
test("buyer paid with a different email: lead_id wins, purchase_email kept separately", async () => {
  const lead = await seedLead("personal@example.com", "yt_012");
  const r = await invoke(sessionEvent({ ref: lead.lead_id, email: "work@example.com" }));
  assert.equal(r.body.link_method, "lead_id");
  const p = kv.hash(K("purchase:" + kv.zmembers(K("purchases:by_time"))[0]));
  assert.equal(p.email, "personal@example.com");
  assert.equal(p.purchase_email, "work@example.com");
  assert.equal(p.first_touch_content, "yt_012");
  // MailerLite gets the paying email (that is who Stripe will talk to)
  assert.equal(calls.mailerlite[0].body.email, "work@example.com");
  assert.equal(calls.mailerlite[0].body.fields.lead_id, lead.lead_id);
});

test("no reference, known email: falls back to the email join", async () => {
  const lead = await seedLead("direct@example.com", "ig_007");
  const r = await invoke(sessionEvent({ ref: null, email: "direct@example.com" }));
  assert.equal(r.body.link_method, "email");
  const p = kv.hash(K("purchase:" + kv.zmembers(K("purchases:by_time"))[0]));
  assert.equal(p.lead_id, lead.lead_id);
  assert.equal(p.first_touch_content, "ig_007");
  assert.equal(kv.hash(K("stats:content:ig_007")).purchases, "1");
});

test("aq_ reference (never registered): acquisition snapshot attributes the purchase", async () => {
  const aqId = "aq_" + "Q1w2E3r4T5";
  await upsertAcquisition(aqId, {
    firstTouch: { source: "youtube", medium: "organic", campaign: "free_ai_course", content: "yt_044", ts: new Date().toISOString() },
    step: "checkout_start",
  });
  const r = await invoke(sessionEvent({ ref: aqId, email: "stranger@example.com" }));
  assert.equal(r.body.link_method, "aq");
  const cs = kv.zmembers(K("purchases:by_time"))[0];
  const p = kv.hash(K("purchase:" + cs));
  assert.equal(p.aq_id, aqId);
  assert.equal(p.lead_id, undefined);
  assert.equal(p.first_touch_source, "youtube");
  assert.equal(p.first_touch_content, "yt_044");
  const s = kv.hash(K("stats:content:yt_044"));
  assert.equal(s.checkout_starts, "1");
  assert.equal(s.purchases, "1");
  assert.equal(calls.ga4[0].body.user_id, aqId);
  assert.match(calls.alerts[0].message, /acquisition aq_Q1w2E3r4T5 · first touch youtube \/ yt_044/);
});

test("aq_ reference but the email belongs to a lead: lead attribution wins (aq+email)", async () => {
  const lead = await seedLead("both@example.com", "ig_100");
  const aqId = "aq_" + "Z9y8X7w6V5";
  await upsertAcquisition(aqId, { firstTouch: { source: "youtube", content: "yt_999", ts: new Date().toISOString() } });
  const r = await invoke(sessionEvent({ ref: aqId, email: "both@example.com" }));
  assert.equal(r.body.link_method, "aq+email");
  const p = kv.hash(K("purchase:" + kv.zmembers(K("purchases:by_time"))[0]));
  assert.equal(p.lead_id, lead.lead_id);
  assert.equal(p.aq_id, aqId);
  assert.equal(p.first_touch_content, "ig_100", "lead's first touch, not the acquisition's");
});

test("legacy fb-- reference from an old cached page: stored verbatim, never mis-attributed", async () => {
  const legacy = "fb--2026-09Bootcamp99SalesUS--CompleteReg-Broad--us-anti-funnel";
  const r = await invoke(sessionEvent({ ref: legacy, email: "unknown@example.com" }));
  assert.equal(r.status, 200);
  assert.equal(r.body.link_method, "none");
  const cs = kv.zmembers(K("purchases:by_time"))[0];
  const p = kv.hash(K("purchase:" + cs));
  assert.equal(p.legacy_ref, legacy);
  assert.equal(p.first_touch_source, undefined);
  assert.equal(p.lead_id, undefined);
  // Counted under "none", so the dashboard shows unattributed revenue rather than inventing a source
  assert.equal(kv.hash(K("stats:content:none")).purchases, "1");
  assert.equal(kv.hash(K("stats:source:none")).revenue_cents, "9900");
  assert.equal(calls.ga4[0].body.user_id, cs);
  assert.match(calls.alerts[0].message, /no attribution \(ref fb--/);
});

test("Redis outage: the buyer is still fulfilled (dedup and attribution degrade, nothing else)", async () => {
  kv.outage = true;
  const r = await invoke(sessionEvent({ ref: "dl_AAAAAAAAAA", email: "noredis@example.com" }));
  assert.equal(r.status, 200);
  assert.equal(r.body.ok, true);
  assert.equal(r.body.recorded, false);
  assert.equal(r.body.link_method, "none");
  assert.equal(calls.mailerlite.filter((c) => c.method === "POST").length, 1, "buyer still added to MailerLite");
  assert.equal(calls.capi.length, 1);
  assert.equal(calls.ga4.length, 1);
  assert.equal(calls.alerts.length, 1);
  assert.equal(calls.alerts[0].subject, "New purchase: 99 USD");
  assert.equal(kv.store.size, 0, "nothing written");
});
