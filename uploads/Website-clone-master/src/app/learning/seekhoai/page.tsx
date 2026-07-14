import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Courses by Saad Ahmed — DeepLearnHQ Academy",
  description:
    "Saad Ahmed's AI courses — top-rated on Udemy (4.6★, 4,610+ reviews). Prompt engineering, ChatGPT, AI agents, LangChain, data science, financial analytics, and more. In English and Urdu. Learn and enroll on Udemy.",
  keywords:
    "Saad Ahmed Udemy, AI bootcamp, prompt engineering course, ChatGPT course, LangChain, AI agents, data science Toronto, machine learning bilingual, bilingual AI education",
  openGraph: {
    title: "DeepLearnHQ Academy — AI Courses by Saad Ahmed",
    description:
      "4.6★ on Udemy. 4,610+ reviews. 35,000+ learners. Courses in prompt engineering, AI agents, data science & more — in English and Urdu.",
    url: "https://deeplearnhq.tech/learning/seekhoai",
    type: "website",
  },
};

const courses = [
  {
    title: "Complete AI Bootcamp — Prompt Engineering, ChatGPT & AI",
    level: "Beginner to Advanced",
    duration: "28 hours",
    description:
      "The flagship course. 2,000+ real-world prompts. Covers prompt engineering, ChatGPT, MidJourney, AI agents, LangChain, and vibe coding. Zero prerequisites — built for learners starting from scratch and practitioners looking to go deeper.",
    topics: ["Prompt Engineering", "ChatGPT", "MidJourney", "AI Agents", "LangChain", "Vibe Coding"],
    badge: "Most Popular",
  },
  {
    title: "Data Science with Python: Complete Bootcamp",
    level: "Intermediate",
    duration: "12 weeks",
    description:
      "Python for data science from the ground up. Real datasets, real analysis, real business problems. By week 6 you're cleaning data fluently. By the end, you're building and presenting data-driven solutions.",
    topics: ["Python", "Pandas", "NumPy", "Data Visualization", "ML Models", "Capstone Project"],
    badge: null,
  },
  {
    title: "Machine Learning for Business Decisions",
    level: "Intermediate",
    duration: "10 weeks",
    description:
      "ML applied to the problems that matter in business — churn prediction, pricing optimization, demand forecasting. Built for business professionals who want to think like a data scientist without becoming one.",
    topics: ["Classification", "Regression", "Clustering", "A/B Testing", "Demand Forecasting"],
    badge: null,
  },
  {
    title: "Generative AI & Prompt Engineering Masterclass",
    level: "Intermediate",
    duration: "6 weeks",
    description:
      "Move past ChatGPT as a search engine. Build applications with it. This course covers the mechanics of prompt engineering at depth — few-shot prompting, chain-of-thought, RAG architectures, and OpenAI API integration.",
    topics: ["Prompt Engineering", "LLMs", "RAG Systems", "OpenAI API", "Chatbots", "Deployment"],
    badge: null,
  },
  {
    title: "Financial Analytics with AI",
    level: "Advanced",
    duration: "14 weeks",
    description:
      "Built from Saad's decade in finance at Deloitte, PwC, and BMO. Predictive modeling for markets, risk assessment, portfolio optimization, credit analysis, and time-series forecasting. Essential for finance professionals who need to understand what AI is doing to their field.",
    topics: ["Time Series", "Risk Modeling", "Portfolio Optimization", "Credit Analysis", "Forecasting"],
    badge: null,
  },
  {
    title: "Business Intelligence & Data Visualization",
    level: "Intermediate",
    duration: "8 weeks",
    description:
      "Most dashboards don't drive decisions. This course teaches you to build the ones that do. Tableau, Power BI, and the principles of data storytelling that turn charts into clarity.",
    topics: ["Tableau", "Power BI", "Dashboard Design", "Data Storytelling", "KPI Tracking"],
    badge: null,
  },
  {
    title: "AI for Non-Technical Leaders",
    level: "Beginner",
    duration: "4 weeks",
    description:
      "An executive course with no code. Understand what AI can and cannot do. Evaluate vendor claims. Manage AI projects. Make decisions about where to invest. Built for the leader who needs depth without the syntax.",
    topics: ["AI Strategy", "Managing AI Teams", "AI Ethics", "ROI Measurement", "Use Case Selection"],
    badge: "No code required",
  },
  {
    title: "Build Your First AI Agent",
    level: "Advanced",
    duration: "10 weeks",
    description:
      "AI agents are the most important shift in software development since mobile. This course builds one from scratch — with LangChain and OpenAI — starting with why agents are hard, covering memory and tool use, and ending with a deployed agent solving a real problem.",
    topics: ["LangChain", "Agentic Loops", "Tool Use", "Memory", "Deployment", "Real-World Project"],
    badge: null,
  },
];

const levelColors: Record<string, { bg: string; color: string }> = {
  "Beginner": { bg: "#f0fdf4", color: "#15803d" },
  "Beginner to Advanced": { bg: "#f5f5f5", color: "#4e4e4e" },
  "Intermediate": { bg: "#eff6ff", color: "#1d4ed8" },
  "Advanced": { bg: "#faf5ff", color: "#7e22ce" },
};

const philosophy = [
  {
    title: "Projects before lectures",
    body: "You see what you're building before we explain how. Motivation follows application.",
  },
  {
    title: "Bilingual from day one",
    body: "English and Urdu — not subtitles, not translations after the fact. Fully produced in both languages.",
  },
  {
    title: "Real tools, real constraints",
    body: "Every tool in the courses is something we use on client projects. Nothing hypothetical.",
  },
  {
    title: "Practical over theoretical",
    body: "Every concept must answer: when will I use this? If we can't answer clearly, it doesn't make the cut.",
  },
];

export default function SeekhoAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/learning"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
            >
              Academy
            </Link>
            <span style={{ color: "#e5e5e5" }}>/</span>
            <span className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}>
              Courses
            </span>
          </div>

          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            Saad Ahmed · Udemy Instructor
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "40rem",
            }}
          >
            AI education without the gatekeeping.
          </h1>
          <p
            className="mt-6 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
          >
            Eight courses built on a decade of AI work in finance, consulting, and product development. In English and Urdu. Available on Udemy. Learn at your pace.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { label: "Udemy Rating", value: "4.6★" },
              { label: "Student Reviews", value: "4,610+" },
              { label: "Learners Reached", value: "35,000+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.75rem",
                    color: "#000000",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course catalog */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              color: "#000000",
              letterSpacing: "-0.02em",
            }}
          >
            The courses
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => {
              const levelStyle = levelColors[course.level] ?? { bg: "#f5f5f5", color: "#4e4e4e" };
              return (
                <div
                  key={course.title}
                  className="flex flex-col p-8"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: levelStyle.bg,
                        color: levelStyle.color,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {course.level}
                    </span>
                    <div className="flex items-center gap-2">
                      {course.badge && (
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
                        >
                          {course.badge}
                        </span>
                      )}
                      <span className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}>
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      fontSize: "1.25rem",
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                      color: "#000000",
                    }}
                  >
                    {course.title}
                  </h3>

                  <p
                    className="mb-5 flex-1 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "#4e4e4e" }}
                  >
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#f5f5f5", color: "#777169", fontFamily: "Inter, sans-serif" }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://www.udemy.com/user/saad-ahmed-434/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Enroll on Udemy
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>

          <div
            className="mt-12 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              borderRadius: "16px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: "1.25rem",
                  color: "#000000",
                  letterSpacing: "-0.01em",
                }}
              >
                Browse all courses on Udemy
              </p>
              <p className="mt-1 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}>
                Preview lessons are free. No credit card required to browse.
              </p>
            </div>
            <a
              href="https://www.udemy.com/user/saad-ahmed-434/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              View on Udemy
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              color: "#000000",
              letterSpacing: "-0.02em",
            }}
          >
            How these courses are built
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="p-8"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                }}
              >
                <h3
                  className="mb-2 text-base font-medium"
                  style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilingual note */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-10"
            style={{
              borderRadius: "20px",
              backgroundColor: "#f5f2ef",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#777169" }}
            >
              Urdu & English
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              "Seekho" means learn in Urdu.
            </h2>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
            >
              These courses started with the belief that world-class AI education shouldn't require English fluency or a Western address. The bilingual content isn't a subtitle track or a translation after the fact — it's produced that way from the start. For learners in South Asia, North America, and beyond who are tired of AI education that treats their language as an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#f5f2ef" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Start learning today.
          </h2>
          <p
            className="mb-8"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
          >
            Preview lessons are free. All courses available on Udemy.
          </p>
          <a
            href="https://www.udemy.com/user/saad-ahmed-434/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
          >
            Browse on Udemy
          </a>
        </div>
      </section>
    </>
  );
}
