// Meta Conversions API. One sender for every server-side event (Lead,
// CompleteRegistration, Purchase, free_course_link_click).
//
// Dedup contract: the browser pixel and this sender must use the SAME
// event_id for the same action, so Meta counts one event when both arrive
// and still gets the event when the browser never fires (consent declined,
// ad blocker, tab closed). Callers pass deterministic ids built from the
// lead_id or the Stripe session id — never random ones.
import { sha256 } from "./ids.js";

const PIXEL_ID = "656402296715617"; // same pixel as the rest of the site
const GRAPH = "https://graph.facebook.com/v21.0";

export function readCookie(header, name) {
  if (!header) return null;
  const m = String(header).match(new RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

// _fbc is written by the browser pixel, which is consent-gated here, so for
// most signups the cookie does not exist. Rebuild it from the fbclid the ad
// click left in the URL, in the format the pixel would have used.
export function deriveFbc(cookieHeader, fbclid) {
  const fromCookie = readCookie(cookieHeader, "_fbc");
  if (fromCookie) return fromCookie;
  const clean = String(fbclid || "").replace(/[^A-Za-z0-9_.-]/g, "").slice(0, 400);
  return clean ? `fb.1.${Date.now()}.${clean}` : null;
}

export function userData({ email, ip, ua, fbp, fbc, cookieHeader, fbclid } = {}) {
  const u = {};
  if (email) u.em = [sha256(String(email).trim().toLowerCase())];
  const p = fbp || readCookie(cookieHeader, "_fbp");
  const c = fbc || deriveFbc(cookieHeader, fbclid);
  if (p) u.fbp = p;
  if (c) u.fbc = c;
  if (ip && ip !== "unknown") u.client_ip_address = ip;
  if (ua) u.client_user_agent = ua;
  return u;
}

// events: [{ event_name, event_id, event_source_url, user_data, custom_data }]
// Returns true on 2xx, false when unconfigured or failed. Never throws.
export async function sendEvents(events) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token || !events || !events.length) return false;
  const pixel = process.env.META_PIXEL_ID || PIXEL_ID;
  const now = Math.floor(Date.now() / 1000);
  try {
    const r = await fetch(`${GRAPH}/${pixel}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_token: token,
        data: events.map((e) => ({ event_time: now, action_source: "website", ...e })),
      }),
    });
    return r.ok;
  } catch {
    return false;
  }
}
