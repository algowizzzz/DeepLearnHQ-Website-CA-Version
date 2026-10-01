import Link from "next/link";

/* One main navigation conversion path (spec: "don't give Courses / Services /
   Workshops / Blog ... equal prominence"). Logo, the two funnel destinations,
   one CTA. Nothing else competes for attention here. */
export default function Nav({
  ctaLabel = "Start Free",
  ctaHref = "/free-course",
}: {
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }} aria-label="DeepLearnHQ">
          <img src="/assets/logo-dark.png" alt="DeepLearnHQ" style={{ height: 24 }} />
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* /free-course is a plain anchor, not next/link — it's a static
              public/ page (rewritten via vercel.json), not an app/ route. */}
          <a href="/free-course" style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", textDecoration: "none" }}>
            Free Course
          </a>
          <Link href="/bootcamp" style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", textDecoration: "none" }}>
            8-Week Program
          </Link>
          <a href={ctaHref} className="btn btn-grad" style={{ padding: "10px 20px", minHeight: "auto", fontSize: 14 }}>
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
