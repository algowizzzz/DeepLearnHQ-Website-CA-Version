"use client";

/* ============================================================
   Consent gate + analytics for the React pages.
   Ported from public/chrome.js's logic (same GA_ID, PIXEL_ID, same
   "dlhq_consent" localStorage key, same compact-banner copy/behavior from
   the consent-banner fix shipped earlier) so a visitor's choice and the
   legal behavior described in privacy.html §9 are identical whether they're
   on an old static page or a new React one. Do not fork this logic —
   if the banner copy or analytics IDs change, change both places.

   Funnel-hardening additions:
   - After a grant, the GA4 client_id is captured (attribution.ts) so a
     server-side purchase can be attributed in GA4.
   - window.__dlhqConsent + the "dlhq:consent" CustomEvent — the contract
     chrome.js already exposes — so page scripts can react to the choice.
   - --consent-h on <html> while the banner is visible, so fixed-bottom UI
     (the bootcamp sticky CTA) can sit above it instead of under it.
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { captureGaClientId } from "../lib/attribution";

const GA_ID = "G-154Y1RBED7";
const PIXEL_ID = "656402296715617";
const KEY = "dlhq_consent";

function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args); };

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_ID);

  (function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s2 = b.getElementsByTagName(e)[0];
    s2.parentNode?.insertBefore(t, s2);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  window.fbq?.("init", PIXEL_ID);
  window.fbq?.("track", "PageView");

  captureGaClientId(GA_ID);
}

function announce(choice: "granted" | "denied") {
  (window as unknown as { __dlhqConsent?: string }).__dlhqConsent = choice;
  try {
    window.dispatchEvent(new CustomEvent("dlhq:consent", { detail: choice }));
  } catch {}
}

function record(choice: "granted" | "denied") {
  try {
    const body = JSON.stringify({ choice, path: location.pathname });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/consent-event", new Blob([body], { type: "application/json" }));
    } else {
      fetch("/api/consent-event", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true });
    }
  } catch {}
  try {
    window.va?.("event", { name: "consent_" + choice });
  } catch {}
}

export default function ConsentAnalytics() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Vercel Web Analytics: cookieless, loads unconditionally — identical
    // reasoning to the chrome.js Change B fix (see consent banner work).
    window.va = window.va || function va(...args: unknown[]) { (window.vaq = window.vaq || []).push(args); };
    const vaScript = document.createElement("script");
    vaScript.defer = true;
    vaScript.src = "/_vercel/insights/script.js";
    document.head.appendChild(vaScript);

    let prior: string | null = null;
    try {
      prior = localStorage.getItem(KEY);
    } catch {}
    if (prior === "granted") { loadAnalytics(); announce("granted"); }
    else if (prior === "denied") announce("denied");
    else setVisible(true);
  }, []);

  // Publish the banner's height so fixed-bottom UI can avoid it.
  useEffect(() => {
    const root = document.documentElement;
    if (!visible || !bannerRef.current) {
      root.style.setProperty("--consent-h", "0px");
      return;
    }
    const el = bannerRef.current;
    const sync = () => root.style.setProperty("--consent-h", el.offsetHeight + "px");
    sync();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(sync) : null;
    ro?.observe(el);
    window.addEventListener("resize", sync);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", sync);
      root.style.setProperty("--consent-h", "0px");
    };
  }, [visible]);

  function decide(choice: "granted" | "denied") {
    try {
      localStorage.setItem(KEY, choice);
    } catch {}
    record(choice);
    if (choice === "granted") loadAnalytics();
    announce(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-label="Cookie choices"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        padding: "8px 12px calc(8px + env(safe-area-inset-bottom))",
        background: "rgba(6,8,15,.94)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,.10)",
        color: "#fff",
      }}
    >
      <p style={{ margin: 0, fontSize: ".78rem", lineHeight: 1.3, opacity: 0.75 }}>
        Cookies help us measure our ads. <a href="/privacy.html" style={{ color: "inherit" }}>Details</a>
      </p>
      <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
        <button
          type="button"
          onClick={() => decide("denied")}
          className="btn btn-ghost"
          style={{ padding: "6px 12px", fontSize: ".78rem", minHeight: 36, color: "#fff", borderColor: "rgba(255,255,255,.3)" }}
        >
          No thanks
        </button>
        <button
          type="button"
          onClick={() => decide("granted")}
          className="btn btn-ghost"
          style={{ padding: "6px 12px", fontSize: ".78rem", minHeight: 36, color: "#fff", borderColor: "rgba(255,255,255,.3)" }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
