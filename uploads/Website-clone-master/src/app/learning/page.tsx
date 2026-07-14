import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeepLearnHQ Academy — AI Courses & Learning by Saad Ahmed",
  description:
    "Learn AI from the team that builds it. Saad Ahmed — Udemy top instructor, 4.6★, 4,610+ reviews. Courses in prompt engineering, AI agents, data science, and full-stack AI development. Free resources, premium courses, and enterprise training.",
  keywords:
    "AI courses, Saad Ahmed Udemy, prompt engineering, AI agents, ChatGPT, LangChain, data science, AI bootcamp, DeepLearnHQ Academy, machine learning",
  openGraph: {
    title: "DeepLearnHQ Academy — Learn AI the Way It's Actually Built",
    description:
      "Saad Ahmed — Udemy 4.6★, 4,610+ reviews. Premium AI courses + free resources from the team that ships real AI products.",
    url: "https://deeplearnhq.tech/learning",
    type: "website",
  },
};

const paths = [
  {
    title: "Courses & Workshops",
    description:
      "Seven courses on Udemy: prompt engineering, ChatGPT, generative AI, Python, Midjourney, data analysis, and more. Enroll directly with free previews.",
    href: "/learning/courses",
    tag: "Udemy · 4.6★",
  },
  {
    title: "Enterprise Training",
    description:
      "Custom AI training programs for teams and organizations. Board-level workshops to hands-on engineering bootcamps.",
    href: "/learning/enterprise-training",
    tag: "Custom programs",
  },
];

const instructorHighlights = [
  { label: "Udemy Rating", value: "4.6★" },
  { label: "Student Reviews", value: "4,610+" },
  { label: "Learners Reached", value: "35,000+" },
  { label: "Courses Published", value: "7" },
];

const courseTopics = [
  "Prompt Engineering",
  "AI Agents & LangChain",
  "ChatGPT & GPT-4",
  "Data Science with Python",
  "Machine Learning",
  "Financial Analytics",
  "Business Intelligence",
  "AI for Leaders",
  "Generative AI",
  "Full-Stack AI Apps",
];

export default function LearningPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            DeepLearnHQ Academy
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
            Learn AI the way it's actually built.
          </h1>
          <p
            className="mt-6 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
          >
            DeepLearnHQ builds AI products for clients around the world. Everything we teach comes directly from production — the patterns that work, the shortcuts that break, and the decisions you'll actually face.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/learning/courses"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              Browse Courses
            </Link>
            <Link
              href="/learning/enterprise-training"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid #e5e5e5", backgroundColor: "#ffffff", color: "#4e4e4e", fontFamily: "Inter, sans-serif" }}
            >
              Enterprise Training
            </Link>
          </div>
        </div>
      </section>

      {/* Instructor credentials */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#777169" }}
              >
                The Instructor
              </p>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#000000",
                }}
              >
                Saad Ahmed
              </h2>
              <p
                className="mt-4 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
              >
                Founder of DeepLearnHQ. A decade in data science and AI at Deloitte, PwC, BMO, and Microsoft before building this studio. Now one of Udemy's top-rated AI instructors — with courses that teach what he's actually done in the field, not what textbooks say you should.
              </p>
              <p
                className="mt-3 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
              >
                Courses are available in English and Urdu — not as subtitles, but as fully produced bilingual content. Built for learners in South Asia and beyond who are tired of AI education that assumes a certain ZIP code.
              </p>
              <a
                href="https://www.udemy.com/user/saad-ahmed-434/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}
              >
                View Udemy instructor profile
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {instructorHighlights.map((item) => (
                <div
                  key={item.label}
                  className="p-6 text-center"
                  style={{
                    borderRadius: "16px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      fontSize: "2rem",
                      color: "#000000",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="mt-1 text-xs"
                    style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning paths */}
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
            Choose your path
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {paths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group flex flex-col p-8 transition-shadow hover:shadow-md"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                }}
              >
                <span
                  className="inline-block self-start mb-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: "#f5f5f5", color: "#777169", fontFamily: "Inter, sans-serif" }}
                >
                  {path.tag}
                </span>
                <h3
                  className="mb-3 group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.5rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                  }}
                >
                  {path.title}
                </h3>
                <p
                  className="flex-1 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "#4e4e4e" }}
                >
                  {path.description}
                </p>
                <div
                  className="mt-6 flex items-center gap-1 text-sm font-medium"
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

      {/* Topics we cover */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#777169" }}
              >
                Topics
              </p>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#000000",
                }}
              >
                What we teach
              </h2>
              <p
                className="mt-4 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
              >
                Every topic is something we use on client projects. No speculative curriculum. If we teach it, we've shipped it.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {courseTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    border: "1px solid #e5e5e5",
                    backgroundColor: "#f5f5f5",
                    color: "#4e4e4e",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
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
            We teach what we build.
          </h2>
          <p
            className="leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e", maxWidth: "32rem", margin: "0 auto" }}
          >
            DeepLearnHQ isn't a training company that happens to do consulting. We're a product studio that happens to teach. The only reason the courses are good is because they're written by people actively building AI systems — not people who read about them.
          </p>
          <Link
            href="/learning/courses"
            className="inline-block mt-8 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
          >
            See the courses
          </Link>
        </div>
      </section>
    </>
  );
}
