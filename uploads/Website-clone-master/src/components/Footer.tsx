'use client';

import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ffffff", color: "#777169", fontFamily: "Inter, sans-serif", borderTop: "1px solid #e5e5e5" }}>
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-8" style={{ borderBottom: "1px solid #e5e5e5" }}>
          {[
            {
              title: "Services",
              links: [
                { label: "AI Solutions", href: "/ai-solutions" },
                { label: "Software Development", href: "/software-development" },
                { label: "Data & Analytics", href: "/data-analytics" },
                { label: "Cloud & DevOps", href: "/cloud-devops" },
                { label: "Strategy & Consulting", href: "/strategy-consulting" },
              ],
            },
            {
              title: "Work",
              links: [
                { label: "Case Studies", href: "/work" },
                { label: "Financial Services", href: "/industries/financial-services" },
                { label: "Healthcare", href: "/industries/healthcare" },
                { label: "E-Commerce", href: "/industries/ecommerce-retail" },
                { label: "All Industries", href: "/industries" },
              ],
            },
            {
              title: "Learn",
              links: [
                { label: "Courses & Workshops", href: "/learning/courses" },
                { label: "Enterprise Training", href: "/learning/enterprise-training" },
                { label: "Blog", href: "/blog" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About Us", href: "/about" },
                { label: "How We Work", href: "/about/how-we-work" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "info@deeplearnhq.tech", href: "mailto:info@deeplearnhq.tech" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "#aaa" }}
              >
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="text-[12px] transition-colors"
                        style={{ color: "#777169" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#000")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#777169")}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[12px] transition-colors"
                        style={{ color: "#777169" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#000")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#777169")}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px]" style={{ color: "#aaa" }}>
            &copy; 2026 DeepLearnHQ Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[11px]" style={{ color: "#aaa" }}>
            <Link
              href="/privacy-policy/"
              className="transition-colors"
              style={{ color: "#aaa" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#000")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#aaa")}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "#e5e5e5" }}>·</span>
            <Link
              href="/terms-of-use/"
              className="transition-colors"
              style={{ color: "#aaa" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#000")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#aaa")}
            >
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
