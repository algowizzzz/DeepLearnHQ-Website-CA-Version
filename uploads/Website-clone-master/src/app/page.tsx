import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeepLearnHQ — AI-Native Software Studio",
  description:
    "We build AI systems, web applications, and mobile products for companies across financial services, healthcare, e-commerce, and more. 50+ shipped projects. Toronto & Madison.",
};

const headingFont: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 300,
  letterSpacing: "-0.02em",
};

const bodyFont: React.CSSProperties = { fontFamily: "Inter, sans-serif" };

const cardStyle: React.CSSProperties = {
  borderRadius: "20px",
  boxShadow:
    "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
};

function SectionLabel({ text }: { text: string }) {
  return (
    <span
      style={{
        ...bodyFont,
        color: "#777169",
        fontSize: "0.75rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
      }}
    >
      {text}
    </span>
  );
}

// ── Inline SVG Icons ──────────────────────────────────────────────────────────

function IconBrain() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.84A2.5 2.5 0 0 1 9.5 2" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.84A2.5 2.5 0 0 0 14.5 2" />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconData() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

function IconLightbulb() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ ...bodyFont, color: "#4e4e4e" }}>

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f5f5f5",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "7rem",
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto", width: "100%" }}>
          <SectionLabel text="AI-Native Product Studio" />

          <h1
            style={{
              ...headingFont,
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "#000000",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            We build software<br />that thinks.
          </h1>

          <p
            style={{
              ...bodyFont,
              maxWidth: "36rem",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "#4e4e4e",
              marginBottom: "2.5rem",
            }}
          >
            DeepLearnHQ is a product studio specializing in AI systems, full-stack
            applications, and mobile products. 50+ shipped projects across North
            America, Europe, and Asia.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "4rem" }}>
            <Link
              href="/contact"
              style={{
                ...bodyFont,
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "9999px",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Start a Project
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              borderLeft: "1px solid #d0cfc9",
            }}
          >
            {[
              { num: "50+", label: "Projects" },
              { num: "7", label: "Industries" },
              { num: "35,000+", label: "Learners" },
              { num: "4.6★", label: "Udemy Rating" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  borderRight: "1px solid #d0cfc9",
                }}
              >
                <div
                  style={{
                    ...headingFont,
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    color: "#000000",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    ...bodyFont,
                    color: "#777169",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES ──────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <SectionLabel text="What We Do" />
          <h2
            style={{
              ...headingFont,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#000000",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
          >
            Eight practice areas. One integrated studio.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { icon: <IconBrain />, title: "AI Solutions & Engineering", desc: "LLM applications, ML pipelines, agentic workflows", href: "/ai-solutions" },
              { icon: <IconStrategy />, title: "Strategy & Consulting", desc: "AI readiness, technology roadmapping, assessments", href: "/strategy-consulting" },
              { icon: <IconCode />, title: "Software Development", desc: "Web apps, iOS, Android, cross-platform mobile", href: "/software-development" },
              { icon: <IconData />, title: "Data & Analytics", desc: "Data engineering, data science, BI platforms", href: "/data-analytics" },
              { icon: <IconCloud />, title: "Cloud & DevOps", desc: "Cloud migration, cloud-native, CI/CD pipelines", href: "/cloud-devops" },
              { icon: <IconLightbulb />, title: "Innovation", desc: "Product discovery, design thinking, rapid prototyping", href: "/innovation" },
              { icon: <IconShield />, title: "Quality Assurance", desc: "Testing strategy, automation, regression testing", href: "/quality-assurance" },
              { icon: <IconRefresh />, title: "Modernization", desc: "Legacy migration, architecture evolution, re-platforming", href: "/modernization" },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                style={{
                  ...cardStyle,
                  backgroundColor: "#ffffff",
                  padding: "1.5rem",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>{s.icon}</div>
                <div
                  style={{
                    ...headingFont,
                    fontSize: "1.25rem",
                    color: "#000000",
                    lineHeight: 1.2,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </div>
                <p style={{ ...bodyFont, fontSize: "0.875rem", color: "#4e4e4e", margin: 0 }}>
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <Link
              href="/services"
              style={{ ...bodyFont, color: "#000000", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}
            >
              All services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. AI SOLUTIONS SPOTLIGHT ────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f5f2ef",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Left: copy */}
            <div>
              <SectionLabel text="AI Solutions" />
              <h2
                style={{
                  ...headingFont,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#000000",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                Every engagement is AI-augmented.
              </h2>
              <p
                style={{
                  ...bodyFont,
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#4e4e4e",
                  marginBottom: "2rem",
                  maxWidth: "32rem",
                }}
              >
                We don&apos;t add AI as an afterthought — we design for it from sprint
                one. Whether it&apos;s an LLM reasoning layer, a real-time ML pipeline,
                or an agentic workflow, AI is the architecture, not the feature.
              </p>
              <Link
                href="/ai-solutions"
                style={{
                  ...bodyFont,
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "9999px",
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                See AI Services
              </Link>
            </div>

            {/* Right: capability pills */}
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                {[
                  "Large Language Models",
                  "AI Agents & Orchestration",
                  "RAG Systems",
                  "ML Pipelines",
                  "Computer Vision",
                  "Predictive Analytics",
                ].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      ...bodyFont,
                      border: "1px solid #c5c1ba",
                      borderRadius: "9999px",
                      padding: "0.625rem 1.25rem",
                      fontSize: "0.875rem",
                      color: "#4e4e4e",
                      backgroundColor: "transparent",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <p
                style={{
                  ...bodyFont,
                  fontSize: "0.75rem",
                  color: "#777169",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                }}
              >
                LangGraph · Claude · GPT-4 · Gemini · LlamaIndex · Pinecone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MOBILE APP DEVELOPMENT SPOTLIGHT ──────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Left: visual (reversed layout — visual first) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                alignItems: "flex-start",
              }}
            >
              {[
                { label: "iOS Native", sub: "Swift · SwiftUI · Xcode" },
                { label: "Android Native", sub: "Kotlin · Jetpack Compose" },
                { label: "Cross-Platform", sub: "React Native · Flutter" },
              ].map((item, i) => (
                <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                  <div
                    style={{
                      ...cardStyle,
                      backgroundColor: "#f5f5f5",
                      padding: "1rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <span style={{ ...bodyFont, color: "#000000", fontWeight: 500, fontSize: "0.9375rem" }}>
                      {item.label}
                    </span>
                    <span style={{ ...bodyFont, color: "#777169", fontSize: "0.8125rem" }}>
                      {item.sub}
                    </span>
                  </div>
                  {i < 2 && (
                    <div
                      style={{
                        width: "1px",
                        height: "1.25rem",
                        backgroundColor: "#e5e5e5",
                        marginLeft: "2rem",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Right: copy */}
            <div>
              <SectionLabel text="Mobile Development" />
              <h2
                style={{
                  ...headingFont,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#000000",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                Native apps. Cross-platform reach.
              </h2>
              <p
                style={{
                  ...bodyFont,
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#4e4e4e",
                  marginBottom: "1.5rem",
                }}
              >
                We build iOS, Android, and cross-platform mobile applications that
                don&apos;t compromise. From healthcare patient portals to fintech
                dashboards to consumer apps — production-quality mobile that performs
                in the real world.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0" }}>
                {[
                  "iOS & Swift development",
                  "Android & Kotlin development",
                  "React Native & Flutter cross-platform",
                  "App Store optimization & deployment",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      ...bodyFont,
                      fontSize: "0.875rem",
                      color: "#4e4e4e",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/software-development"
                style={{
                  ...bodyFont,
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "9999px",
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Mobile Development Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FEATURED WORK ─────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f5f5f5",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <SectionLabel text="Selected Work" />
          <h2
            style={{
              ...headingFont,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#000000",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
          >
            Built and shipped.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                slug: "ccr-analytics-engine",
                category: "Financial Services",
                title: "CCR Analytics Engine",
                desc: "Python-based counterparty credit risk platform covering 90+ financial products, SA-CCR/Basel III/IV compliant.",
                metrics: [
                  { value: "90+", label: "Financial Products" },
                  { value: "16", label: "Risk Calculators" },
                ],
              },
              {
                slug: "openbb-terminal",
                category: "Market Intelligence",
                title: "FinData Terminal",
                desc: "Unified financial data platform consolidating market data, research feeds, and alternative data into one API-first intelligence layer.",
                metrics: [
                  { value: "All", label: "Asset Classes" },
                  { value: "MCP", label: "AI-Native" },
                ],
              },
              {
                slug: "monai-medical-imaging",
                category: "Healthcare AI",
                title: "MedVision AI",
                desc: "Deep learning framework for medical imaging — CT, MRI, and pathology with pre-trained model bundles for clinical deployment.",
                metrics: [
                  { value: "PyTorch", label: "Ecosystem" },
                  { value: "MONAI Deploy", label: "Clinical Ready" },
                ],
              },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                style={{
                  ...cardStyle,
                  backgroundColor: "#ffffff",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    ...bodyFont,
                    backgroundColor: "#f5f2ef",
                    color: "#777169",
                    borderRadius: "9999px",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    alignSelf: "flex-start",
                    marginBottom: "1rem",
                    display: "inline-block",
                  }}
                >
                  {p.category}
                </span>
                <div
                  style={{
                    ...headingFont,
                    fontSize: "1.375rem",
                    color: "#000000",
                    lineHeight: 1.2,
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </div>
                <p
                  style={{
                    ...bodyFont,
                    fontSize: "0.875rem",
                    color: "#4e4e4e",
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    borderTop: "1px solid #e5e5e5",
                    paddingTop: "1.25rem",
                  }}
                >
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div
                        style={{
                          ...headingFont,
                          fontSize: "1.25rem",
                          color: "#000000",
                          lineHeight: 1.1,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ ...bodyFont, fontSize: "0.75rem", color: "#777169", marginTop: "0.125rem" }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <Link
              href="/work"
              style={{ ...bodyFont, color: "#000000", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}
            >
              All case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. ABOUT US ──────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left: copy */}
            <div>
              <SectionLabel text="About DeepLearnHQ" />
              <h2
                style={{
                  ...headingFont,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#000000",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                A studio that builds what it teaches.
              </h2>
              <p
                style={{
                  ...bodyFont,
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#4e4e4e",
                  marginBottom: "1.25rem",
                }}
              >
                DeepLearnHQ is an AI-native product studio based in Toronto, ON and
                Madison, WI. We build AI systems, web applications, mobile products,
                and data platforms for clients across financial services, healthcare,
                e-commerce, and more. Our work spans from production LLM applications
                to enterprise ERP implementations.
              </p>
              <p
                style={{
                  ...bodyFont,
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#4e4e4e",
                  marginBottom: "2rem",
                }}
              >
                Our team is led by practitioners — not project managers. Saad Ahmed,
                our founder, spent a decade in data science and AI at Deloitte, PwC,
                BMO, and Microsoft before building this studio. We hire people who
                have shipped real products, not slides about them.
              </p>
              <Link
                href="/about"
                style={{
                  ...bodyFont,
                  color: "#000000",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Learn more about us →
              </Link>
            </div>

            {/* Right: stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                { num: "50+", label: "Shipped Projects" },
                { num: "10", label: "Years of Experience" },
                { num: "2", label: "Global Offices" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "20px",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      ...headingFont,
                      fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                      color: "#000000",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      ...bodyFont,
                      color: "#777169",
                      fontSize: "0.8125rem",
                      marginTop: "0.375rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. COURSES & ACADEMY ─────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f5f5f5",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <SectionLabel text="DeepLearnHQ Academy" />
          <h2
            style={{
              ...headingFont,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#000000",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
          >
            We teach what we build.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* Card 1: filled black */}
            <div
              style={{
                backgroundColor: "#000000",
                borderRadius: "20px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  ...headingFont,
                  fontSize: "1.5rem",
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                AI Courses on Udemy
              </div>
              <p
                style={{
                  ...bodyFont,
                  fontSize: "0.875rem",
                  color: "#a09d98",
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: "1.5rem",
                }}
              >
                7 courses covering prompt engineering, AI agents, data science,
                Python, and generative AI. 4.6★ · 4,610+ reviews · 35,000+ learners.
              </p>
              <Link
                href="/learning/courses"
                style={{
                  ...bodyFont,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  borderRadius: "9999px",
                  padding: "0.625rem 1.25rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-block",
                  alignSelf: "flex-start",
                }}
              >
                Browse Courses →
              </Link>
            </div>

            {/* Card 2: white with border */}
            <div
              style={{
                ...cardStyle,
                backgroundColor: "#ffffff",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  ...headingFont,
                  fontSize: "1.5rem",
                  color: "#000000",
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Enterprise Training
              </div>
              <p
                style={{
                  ...bodyFont,
                  fontSize: "0.875rem",
                  color: "#4e4e4e",
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: "1.5rem",
                }}
              >
                Custom AI training programs for teams and organizations. From
                board-level workshops to hands-on engineering bootcamps.
              </p>
              <Link
                href="/learning/enterprise-training"
                style={{
                  ...bodyFont,
                  border: "1px solid #000000",
                  color: "#000000",
                  backgroundColor: "transparent",
                  borderRadius: "9999px",
                  padding: "0.625rem 1.25rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-block",
                  alignSelf: "flex-start",
                }}
              >
                Learn More →
              </Link>
            </div>
          </div>

          <p style={{ ...bodyFont, fontSize: "0.8125rem", color: "#777169" }}>
            Available in English and Urdu. Built for learners globally.
          </p>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f5f2ef",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <SectionLabel text="Client Stories" />
          <h2
            style={{
              ...headingFont,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#000000",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
          >
            What clients say.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                quote:
                  "DeepLearnHQ understood the complexity of our risk systems from day one. Their solution handles everything from regulatory compliance to real-time analytics, and it scales beautifully across our operations.",
                name: "Director of Risk Technology",
                role: "Global Financial Institution",
              },
              {
                quote:
                  "The team challenged our assumptions and delivered a product that exceeded our vision. Having engineers who actually understand both the technical and business sides is rare.",
                name: "Chief Product Officer",
                role: "Healthcare Technology Company",
              },
              {
                quote:
                  "Working with DeepLearnHQ felt like having a co-founder who happened to be an entire engineering team. From architecture to deployment, they were consistent and excellent.",
                name: "Founder & CEO",
                role: "E-Commerce Platform",
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  ...cardStyle,
                  backgroundColor: "#ffffff",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    ...headingFont,
                    fontSize: "3rem",
                    color: "#e5e5e5",
                    lineHeight: 1,
                    fontStyle: "italic",
                    marginBottom: "0.5rem",
                    letterSpacing: "0",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    ...bodyFont,
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "#4e4e4e",
                    flex: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {t.quote}
                </p>
                <div>
                  <div
                    style={{
                      ...bodyFont,
                      fontWeight: 500,
                      color: "#000000",
                      fontSize: "0.875rem",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      ...bodyFont,
                      color: "#777169",
                      fontSize: "0.8125rem",
                      marginTop: "0.125rem",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. BOOK TIME CTA ─────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f5f2ef",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <SectionLabel text="Get Started" />
          <h2
            style={{
              ...headingFont,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "#000000",
              marginTop: "1rem",
              marginBottom: "1.25rem",
              letterSpacing: "-0.03em",
              fontWeight: 300,
            }}
          >
            Ready to build something that matters?
          </h2>
          <p
            style={{
              ...bodyFont,
              fontSize: "0.9375rem",
              color: "#4e4e4e",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            50-minute discovery call. No sales deck. Just an honest conversation
            about your problem and whether we&apos;re the right team to solve it.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/contact"
              style={{
                ...bodyFont,
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "9999px",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book a Discovery Call
            </Link>
            <Link
              href="mailto:info@deeplearnhq.tech"
              style={{
                ...bodyFont,
                border: "1px solid #000000",
                color: "#000000",
                backgroundColor: "transparent",
                borderRadius: "9999px",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Email Us
            </Link>
          </div>
          <p
            style={{
              ...bodyFont,
              fontSize: "0.75rem",
              color: "#777169",
              letterSpacing: "0.05em",
            }}
          >
            Toronto, ON · Madison, WI · info@deeplearnhq.tech
          </p>
        </div>
      </section>

    </main>
  );
}
