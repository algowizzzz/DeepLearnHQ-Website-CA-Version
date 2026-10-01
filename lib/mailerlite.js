// The one MailerLite client. Replaces three near-identical copies that lived
// in api/free-course.js, api/subscribe.js and api/stripe-webhook.js.
//
// Hard-won rule (FREE-COURSE-SETUP.md): MailerLite silently DROPS any field
// that has not been created in the account first — the request still
// returns 200. Every key in FIELD_KEYS must exist before it is sent;
// ensureFields() creates the missing ones and is safe to run repeatedly.
import { flattenTouch } from "./attribution-server.js";

const ML = "https://connect.mailerlite.com/api";

function headers() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + process.env.MAILERLITE_API_KEY,
  };
}

function configured() {
  if (!process.env.MAILERLITE_API_KEY) throw new Error("mailerlite_not_configured");
}

// POST /subscribers is an upsert keyed on email. `groups` is optional.
export async function upsertSubscriber(email, fields, groups) {
  configured();
  const body = { email, fields };
  if (groups && groups.length) body.groups = groups;
  const r = await fetch(ML + "/subscribers", { method: "POST", headers: headers(), body: JSON.stringify(body) });
  if (!r.ok) throw new Error("mailerlite_upsert_" + r.status);
  const j = await r.json().catch(() => null);
  return j && j.data && j.data.id;
}

export async function getSubscriber(emailOrId) {
  configured();
  const r = await fetch(`${ML}/subscribers/${encodeURIComponent(emailOrId)}`, { headers: headers() });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error("mailerlite_get_" + r.status);
  const j = await r.json().catch(() => null);
  return j && j.data ? j.data : null;
}

export async function addToGroup(subscriberId, groupId) {
  configured();
  const r = await fetch(`${ML}/subscribers/${subscriberId}/groups/${groupId}`, { method: "POST", headers: headers() });
  if (!r.ok) throw new Error("mailerlite_group_" + r.status);
}

export async function removeFromGroup(subscriberId, groupId) {
  if (!subscriberId || !groupId || !process.env.MAILERLITE_API_KEY) return;
  await fetch(`${ML}/subscribers/${subscriberId}/groups/${groupId}`, { method: "DELETE", headers: headers() }).catch(() => {});
}

// Remove then add, so MailerLite treats it as a fresh group join and the
// automation re-enters. Without this a returning signup gets its record
// updated but no email — a silent dead end (finding T5).
export async function rejoinGroup(subscriberId, groupId) {
  await removeFromGroup(subscriberId, groupId);
  await addToGroup(subscriberId, groupId);
}

export const FIELD_KEYS = [
  "lead_id", "signup_source", "marketing_consent", "marketing_consent_at", "sms_consent",
  "registration_page", "phone",
  "first_touch_source", "first_touch_medium", "first_touch_campaign", "first_touch_content",
  "first_touch_term", "first_touch_referrer", "first_touch_landing_page", "first_touch_at",
  "last_touch_source", "last_touch_medium", "last_touch_campaign", "last_touch_content",
  "last_touch_referrer", "last_touch_at",
  "free_course_outbound_at", "bootcamp_visit_at", "checkout_start_at", "purchased_at",
  "purchase_amount", "purchase_currency", "stripe_session", "stripe_payment_intent",
  "days_since_registration",
  // kept for continuity with the first free-course version and existing segments
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "referrer", "landing_page",
  "discount_code", "code_expires_at", "code_expires_unix", "marketing_opt_in",
];

export async function ensureFields() {
  configured();
  const r = await fetch(ML + "/fields?limit=200", { headers: headers() });
  if (!r.ok) throw new Error("mailerlite_fields_" + r.status);
  const j = await r.json();
  const have = new Set((j.data || []).map((f) => f.key));
  const created = [];
  for (const key of FIELD_KEYS) {
    if (have.has(key)) continue;
    const c = await fetch(ML + "/fields", {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ name: key, type: "text" }),
    });
    if (c.ok) created.push(key);
  }
  return created;
}

// Lead hash (Redis shape) → MailerLite custom fields. Only sends keys that
// have values so a partial update never blanks existing data.
export function leadToFields(lead) {
  const f = {};
  const put = (k, v) => { if (v != null && v !== "") f[k] = String(v); };
  put("lead_id", lead.lead_id);
  put("signup_source", lead.signup_source || "free_course_landing");
  put("marketing_consent", lead.marketing_consent == null ? null : (String(lead.marketing_consent) === "1" || lead.marketing_consent === "yes" ? "yes" : "no"));
  put("marketing_consent_at", lead.marketing_consent_at);
  put("sms_consent", lead.sms_consent == null ? null : (String(lead.sms_consent) === "1" || lead.sms_consent === "yes" ? "yes" : "no"));
  put("registration_page", lead.registration_page);
  put("phone", lead.phone);
  for (const prefix of ["first_touch", "last_touch"]) {
    for (const k of ["source", "medium", "campaign", "content", "term", "referrer", "landing_page", "at"]) {
      put(`${prefix}_${k}`, lead[`${prefix}_${k}`]);
    }
  }
  for (const k of ["free_course_outbound_at", "bootcamp_visit_at", "checkout_start_at", "purchased_at"]) put(k, lead[k]);
  // Legacy mirror: the first version of the page wrote plain utm_* fields and
  // any segment built on them keeps working.
  put("utm_source", lead.first_touch_source);
  put("utm_medium", lead.first_touch_medium);
  put("utm_campaign", lead.first_touch_campaign);
  put("utm_content", lead.first_touch_content);
  put("referrer", lead.first_touch_referrer);
  put("landing_page", lead.first_touch_landing_page);
  return f;
}

export { flattenTouch };
