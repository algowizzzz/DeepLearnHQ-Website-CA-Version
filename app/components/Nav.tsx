"use client";

import Link from "next/link";
import { track } from "../lib/track";

/* One main navigation conversion path (spec: "don't give Courses / Services /
   Workshops / Blog ... equal prominence"). Logo, the two funnel destinations,
   one CTA. Nothing else competes for attention here.

   The CTA always reports a click: the bootcamp page passes its checkout
   handler so the nav "Join for $99" fires checkout_start like every other
   Stripe CTA (it fired nothing before — the one untracked CTA on the page). */
export default function Nav({
  ctaLabel = "Start Free",
  ctaHref = "/free-course",
  onCtaClick,
}: {
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}) {
  const handleCta = onCtaClick || (() => track("free_cta_click", { location: "nav" }));
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }} aria-label="DeepLearnHQ">
          <img src="/assets/logo-dark.png" alt="DeepLearnHQ" style={{ height: 24 }} />
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a
            href="/free-course"
            style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", textDecoration: "none" }}
            onClick={() => track("free_cta_click", { location: "nav_link" })}
          >
            Free Course
          </a>
          <Link
            href="/bootcamp"
            style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", textDecoration: "none" }}
            onClick={() => track("bootcamp_cta_click", { location: "nav_link" })}
          >
            8-Week Program
          </Link>
          <a href={ctaHref} onClick={handleCta} className="btn btn-grad" style={{ padding: "10px 20px", minHeight: "auto", fontSize: 14 }}>
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
