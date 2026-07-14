import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Resources — DeepLearnHQ",
  description:
    "Free AI resources from DeepLearnHQ. Blog articles on AI implementation, engineering decisions, and production lessons. No signup required.",
};

const resourceCards = [
  {
    title: "Blog",
    description:
      "Practical articles on AI implementation, engineering decisions, tool comparisons, and what actually works in production. Written by the team building the products.",
    href: "/blog",
    internal: true,
    topics: [
      "AI implementation patterns",
      "Stack comparisons and tradeoffs",
      "Production lessons from real projects",
      "Business decisions around AI",
    ],
  },
  {
    title: "YouTube",
    description:
      "Tutorials, walkthroughs, and case studies. Learn by watching us build. Playlists on AI fundamentals, LLM development, and data science.",
    href: "https://youtube.com/@deeplearnhq",
    internal: false,
    topics: [
      "Step-by-step tutorials",
      "AI fundamentals series",
      "Technical deep dives",
      "Real-world case studies",
    ],
  },
  {
    title: "GitHub",
    description:
      "Open source tools we've built and released. Use them, fork them, contribute back. Everything here is tested in production first.",
    href: "https://github.com/deeplearnhq",
    internal: false,
    topics: [
      "AI development utilities",
      "Data processing libraries",
      "Prompt management tools",
      "Evaluation frameworks",
    ],
  },
];

const blogHighlights = [
  {
    title: "Why Your AI Project Will Fail",
    excerpt: "Most AI initiatives don't fail because of bad models — they fail because of bad data, bad scope, and bad expectations. Here's what to watch for.",
    category: "AI & Machine Learning",
    slug: "why-your-ai-project-will-fail",
  },
  {
    title: "How AI Consulting Actually Works",
    excerpt: "What you should expect from an AI consulting engagement, and the questions to ask before signing anything.",
    category: "Business",
    slug: "how-ai-consulting-actually-works",
  },
  {
    title: "Build vs Buy vs Partner: The Software Decision",
    excerpt: "The framework we use with every client when they ask whether to build from scratch, buy off-the-shelf, or partner with a studio.",
    category: "Technology",
    slug: "build-vs-buy-vs-partner-software-decision",
  },
  {
    title: "Custom AI Chatbot vs Off-the-Shelf",
    excerpt: "When a custom chatbot is worth the investment, and when you're overengineering a problem a $20/month SaaS tool solves fine.",
    category: "AI & Machine Learning",
    slug: "custom-ai-chatbot-vs-off-the-shelf",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#f5f5f5" }}>
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
              Free Resources
            </span>
          </div>

          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            Always Free
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "36rem",
            }}
          >
            We publish what we know.
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
          >
            Free resources from the team building AI products. No signup, no gating, no marketing disguised as education.
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {resourceCards.map((card) => (
              card.internal ? (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col p-8 transition-shadow hover:shadow-md"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                  }}
                >
                  <h3
                    className="mb-3 group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      fontSize: "1.5rem",
                      letterSpacing: "-0.01em",
                      color: "#000000",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mb-5 text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                  >
                    {card.description}
                  </p>
                  <ul className="mb-6 space-y-1.5">
                    {card.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-xs"
                        style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                      >
                        — {topic}
                      </li>
                    ))}
                  </ul>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}
                  >
                    Read the blog
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ) : (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-8 transition-shadow hover:shadow-md"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                  }}
                >
                  <h3
                    className="mb-3 group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      fontSize: "1.5rem",
                      letterSpacing: "-0.01em",
                      color: "#000000",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mb-5 text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                  >
                    {card.description}
                  </p>
                  <ul className="mb-6 space-y-1.5">
                    {card.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-xs"
                        style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                      >
                        — {topic}
                      </li>
                    ))}
                  </ul>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}
                  >
                    Open
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Blog highlights */}
      <section className="py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              Recent from the blog
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium transition-opacity hover:opacity-70 hidden sm:block"
              style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
            >
              All articles →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {blogHighlights.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-8"
                style={{
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                }}
              >
                <span
                  className="inline-block self-start mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "#f5f5f5", color: "#777169" }}
                >
                  {post.category}
                </span>
                <h3
                  className="mb-2 group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.25rem",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                >
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid #e5e5e5", backgroundColor: "#ffffff", color: "#4e4e4e", fontFamily: "Inter, sans-serif" }}
            >
              All articles
            </Link>
          </div>
        </div>
      </section>

      {/* Why we share */}
      <section className="py-20" style={{ backgroundColor: "#f5f2ef" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Why we share all of this for free.
          </h2>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: "#4e4e4e",
              maxWidth: "34rem",
              margin: "0 auto",
            }}
          >
            We're a product studio, not a content business. We don't need you to subscribe or follow us. We share because AI is moving fast and most of the coverage is shallow. We'd rather put something useful out there. If it helps you build something — that's enough.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              Read the blog
            </Link>
            <Link
              href="/learning/courses"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid #c5c0b8", backgroundColor: "transparent", color: "#4e4e4e", fontFamily: "Inter, sans-serif" }}
            >
              Explore courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
