// Vercel serverless function — first-party funnel beacons.
//
// The browser calls this (navigator.sendBeacon, so a page unload never loses
// it) at the two steps between registration and purchase that GA4 cannot be
// trusted to see (analytics consent can be declined):
//   bootcamp_visit   the lead reached /bootcamp
//   checkout_start   the lead (or anonymous acquisition) clicked toward Stripe
//   consent          analytics consent was granted — carries the GA client_id
//                    so a later server-side purchase can attribute in GA4
//
// `id` is a lead_id (dl_…) or an acquisition id (aq_…). Unknown lead ids are
// ignored; acquisition ids are created on first sight with the attribution
// snapshot the browser holds, so a visitor who buys without ever registering
// is still attributable to the Reel that brought them.
import { getLead, markStep, updateLead, upsertAcquisition } from "../lib/leads.js";
import { isLeadId, isAqId } from "../lib/ids.js";
import { sanitizeTouch, flattenTouch } from "../lib/attribution-server.js";
import { upsertSubscriber } from "../lib/mailerlite.js";
import { rateLimited, clientIp } from "../lib/ratelimit.js";
import { logError } from "../lib/log.js";

const TYPES = new Set(["bootcamp_visit", "checkout_start", "consent"]);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  let data = req.body;
  if (typeof data === "string") { try { data = JSON.parse(data); } catch { data = {}; } }
  data = data || {};

  const type = String(data.type || "");
  const id = String(data.id || "");
  if (!TYPES.has(type) || !(isLeadId(id) || isAqId(id))) return res.status(204).end();
  if (await rateLimited("touch_ip", clientIp(req), 120)) return res.status(204).end();

  const firstTouch = sanitizeTouch(data.first_touch);
  const lastTouch = sanitizeTouch(data.last_touch);
  const gaClientId = typeof data.ga_client_id === "string" ? data.ga_client_id.slice(0, 64) : null;

  try {
    if (isLeadId(id)) {
      const lead = await getLead(id);
      if (!lead) return res.status(204).end();
      const { first } = await markStep(id, type, lastTouch);
      if (gaClientId && !lead.ga_client_id) await updateLead(id, { ga_client_id: gaClientId });
      // Mirror the milestone to MailerLite so segments can use it. Awaited on
      // purpose: a fire-and-forget promise here is dropped when the function
      // freezes after the response (verified on Preview — the field stayed
      // null). Best-effort only in the sense that a failure is swallowed.
      if (first && type !== "consent") {
        const fields = { lead_id: id, [`${type}_at`]: new Date().toISOString(), ...flattenTouch("last_touch", lastTouch) };
        await upsertSubscriber(lead.email, fields).catch(() => {});
      } else if (lastTouch && type !== "consent") {
        await upsertSubscriber(lead.email, { lead_id: id, ...flattenTouch("last_touch", lastTouch) }).catch(() => {});
      }
    } else {
      await upsertAcquisition(id, { firstTouch, lastTouch, gaClientId, step: type === "consent" ? null : type });
    }
  } catch (e) {
    await logError("touch", e, { lead_id: isLeadId(id) ? id : undefined, kind: type });
  }
  return res.status(204).end();
}
