/* The one gtag/fbq wrapper for every React page. Both loaders are
   consent-gated (ConsentAnalytics), so either global may be absent; every
   call is a no-op in that case and the first-party beacons (/api/touch,
   /api/free-course) remain the source of truth for the funnel. */

export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

// eventID lets Meta dedupe this browser event against the server-side CAPI
// copy that carries the same id (lead_fc_<lead_id>, purchase_<session>, …).
export function fbTrack(name: string, params: Record<string, unknown> = {}, eventID?: string) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", name, params, eventID ? { eventID } : undefined);
}
