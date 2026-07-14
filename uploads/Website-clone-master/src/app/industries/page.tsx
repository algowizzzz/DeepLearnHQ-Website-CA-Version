import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve | DeepLearnHQ",
  description:
    "DeepLearnHQ builds production AI for 7 regulated, high-stakes industries — from financial services and healthcare to manufacturing, government, and beyond. Real systems. Proven ROI.",
};

const industries = [
  {
    slug: "financial-services",
    title: "Financial Services",
    subtitle: "Banking, Fintech & Capital Markets",
    stat: "$340B",
    statLabel: "annual value AI can add to global banking (McKinsey 2025)",
    description:
      "Fraud detection, AML automation, wealth management AI, and credit decisioning for regulated financial institutions. We've shipped production systems that catch anomalies humans miss while generating the audit trails regulators demand.",
    topics: ["AML / KYC", "Fraud Detection", "Wealth Management AI", "Credit Decisioning"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    subtitle: "Hospitals, Pharma & Health Insurance",
    stat: "$3.20",
    statLabel: "return per $1 invested in healthcare AI (Rock Health 2025)",
    description:
      "HIPAA-compliant AI for clinical documentation, prior authorization, predictive readmissions, and drug discovery acceleration. We've built the implementations that move those numbers.",
    topics: ["Clinical Documentation AI", "Prior Auth Automation", "Predictive Analytics", "HIPAA Compliance"],
  },
  {
    slug: "ecommerce-retail",
    title: "E-Commerce & Retail",
    subtitle: "DTC, Marketplace & Omnichannel",
    stat: "446%",
    statLabel: "three-year ROI from AI personalization (Optimizely benchmark)",
    description:
      "AI personalization, dynamic pricing, inventory optimization, and conversational commerce. 89% of retailers implementing AI report positive ROI within 9 months.",
    topics: ["Personalization Engines", "Dynamic Pricing", "Demand Forecasting", "Conversational Commerce"],
  },
  {
    slug: "marketing-professional-services",
    title: "Marketing & Professional Services",
    subtitle: "Agencies, Legal & Accounting",
    stat: "544%",
    statLabel: "three-year ROI from AI marketing automation (Forrester)",
    description:
      "Custom AI workflows for marketing agencies, AI contract review for legal, and automated bookkeeping for accounting firms.",
    topics: ["AI Content Pipelines", "Marketing Automation", "Contract Review AI", "Accounting Automation"],
  },
  {
    slug: "energy-telecom-media",
    title: "Energy, Telecom & Media",
    subtitle: "Utilities, Networks & Entertainment",
    stat: "€180M",
    statLabel: "cumulative AI operational value at E.ON (2022–2025)",
    description:
      "Predictive maintenance for energy infrastructure, network self-optimization for telecoms, and AI-powered content recommendation for media.",
    topics: ["Predictive Maintenance", "Grid Optimization", "Network AI", "Content Recommendation"],
  },
  {
    slug: "manufacturing-logistics",
    title: "Manufacturing & Logistics",
    subtitle: "Industry 4.0, Supply Chain & Last-Mile",
    stat: "307%",
    statLabel: "ROI from AI supply chain control towers within 18 months",
    description:
      "Computer vision quality inspection, predictive maintenance, demand forecasting, and AI route optimization. 76% AI adoption in manufacturing supply chains.",
    topics: ["Computer Vision QC", "Predictive Maintenance", "Demand Forecasting", "Route Optimization"],
  },
  {
    slug: "education-real-estate-government",
    title: "Education, Real Estate & Gov",
    subtitle: "EdTech, PropTech & Public Sector",
    stat: "2×",
    statLabel: "learning gains from AI tutoring vs. traditional classrooms (Harvard RCT)",
    description:
      "Adaptive learning platforms, AI-powered property valuation, and FedRAMP-compliant solutions for government. 90% of U.S. agencies adopting AI.",
    topics: ["Adaptive Learning", "Property Valuation AI", "FedRAMP Compliance", "Benefits Automation"],
  },
];

const credibilityStats = [
  { value: "50+", label: "Production Projects" },
  { value: "7", label: "Industries Served" },
  { value: "$2T+", label: "Addressable AI Value in Banking Alone" },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            Industries We Serve
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "42rem",
            }}
          >
            AI built for your industry.
          </h1>
          <p
            className="mt-6 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
          >
            We don&apos;t build generic AI. We build AI shaped by the compliance requirements, data environments, and ROI benchmarks of your specific vertical. After 50+ projects across finance, healthcare, retail, manufacturing, and government, we know what works — and we ship software that stays compliant, scales under pressure, and actually moves the needle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/industries"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              Browse Industries
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid #e5e5e5", backgroundColor: "#ffffff", color: "#4e4e4e", fontFamily: "Inter, sans-serif" }}
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {credibilityStats.map((item) => (
              <div key={item.value} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: "#000000",
                  }}
                >
                  {item.value}
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry grid */}
      <section className="py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col p-8 transition-shadow hover:shadow-md"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                }}
              >
                {/* Subtitle label */}
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
                >
                  {industry.subtitle}
                </p>

                {/* Title */}
                <h3
                  className="mb-4 group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.5rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                  }}
                >
                  {industry.title}
                </h3>

                {/* Stat */}
                <div className="mb-4">
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      lineHeight: 1.0,
                      letterSpacing: "-0.02em",
                      color: "#000000",
                    }}
                  >
                    {industry.stat}
                  </p>
                  <p
                    className="mt-1 text-xs leading-snug"
                    style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                  >
                    {industry.statLabel}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="flex-1 mb-5 leading-relaxed text-sm"
                  style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                >
                  {industry.description}
                </p>

                {/* Topic pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {industry.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "#f5f5f5",
                        color: "#4e4e4e",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Explore link */}
                <div
                  className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                  style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}
                >
                  Explore
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#f5f2ef" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            We&apos;ve worked in your industry. We know what AI actually does there.
          </h2>
          <p
            className="leading-relaxed mb-8"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: "#4e4e4e",
              maxWidth: "32rem",
              margin: "0 auto 2rem",
            }}
          >
            Tell us about your biggest operational challenge. We&apos;ll map it to technologies and capabilities you can actually use — no slide-decks, no vague roadmaps. Just production-grade engineering and a clear path to ROI.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid #e5e5e5", backgroundColor: "#ffffff", color: "#4e4e4e", fontFamily: "Inter, sans-serif" }}
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
