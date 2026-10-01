/* UTM/fbclid persistence — ported from public/track.js's captureRef() /
   captureFbclid(), which already solves "don't lose attribution after
   signup" for the paid funnel. Reused here rather than designing a new
   attribution mechanism, per the migration plan. */

const LS_UTM = "dlhq_ref";
const LS_FBCLID = "dlhq_fbclid";

function sanitise(v: string | null): string {
  return String(v || "").replace(/[^A-Za-z0-9_-]/g, "").slice(0, 40);
}

export function captureFbclid(): string {
  if (typeof window === "undefined") return "";
  try {
    const v = new URLSearchParams(location.search).get("fbclid");
    if (v) localStorage.setItem(LS_FBCLID, v);
    return v || localStorage.getItem(LS_FBCLID) || "";
  } catch {
    return "";
  }
}

const BOOTCAMP_PAYMENT_LINK = "https://buy.stripe.com/8x23cw8NA7p76o56skejK0b";

/* Mirrors track.js's checkoutUrl() — attaches client_reference_id so a
   purchase still attributes back to its original ad/UTM, same mechanism
   already proven on the old sales page. No promo-code prefill here (that's
   the discount-modal flow, which stays on the old flow for now, not part of
   this phase's bootcamp redesign). */
export function bootcampCheckoutUrl(): string {
  if (typeof window === "undefined") return BOOTCAMP_PAYMENT_LINK;
  const ref = captureRef();
  if (!ref) return BOOTCAMP_PAYMENT_LINK;
  const u = new URL(BOOTCAMP_PAYMENT_LINK);
  u.searchParams.set("client_reference_id", ref);
  return u.toString();
}

export function captureRef(): string {
  if (typeof window === "undefined") return "";
  const q = new URLSearchParams(location.search);
  const parts = [
    "fb",
    sanitise(q.get("utm_campaign") || q.get("campaign_id")),
    sanitise(q.get("utm_content") || q.get("adset_id")),
    sanitise(q.get("utm_term") || q.get("ad_id")),
  ];
  if (!parts[1] && !parts[2] && !parts[3]) {
    try {
      return localStorage.getItem(LS_UTM) || "";
    } catch {
      return "";
    }
  }
  const ref = parts.join("--").slice(0, 200);
  try {
    localStorage.setItem(LS_UTM, ref);
  } catch {}
  return ref;
}
