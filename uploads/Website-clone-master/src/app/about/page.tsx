import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | DeepLearnHQ – AI-Native Software Studio",
  description:
    "Built AI-first from day one. Our story, our founder, what we believe, and the team behind 50+ projects across 3 continents.",
  keywords:
    "AI software development, AI-native studio, software engineering, AI solutions, enterprise AI, DeepLearnHQ",
};

const principles = [
  {
    number: "01",
    title: "We believe AI should serve people, not replace them.",
    body: "The fear narrative is wrong. AI isn't coming to take your job — it's coming to change what your job is. We build AI systems that amplify human capability and make decisions explainable, reversible, and answerable to humans.",
  },
  {
    number: "02",
    title: "We believe software should think, adapt, and improve.",
    body: "Static software is dead software. The best systems learn from use, adapt to new data, and get smarter over time. We build living systems, not monuments.",
  },
  {
    number: "03",
    title: "We believe knowledge should be accessible to everyone.",
    body: "Gatekeeping is a business model, not a principle. We teach what we build, publish what we learn, and make bilingual courses because language shouldn't be a barrier to opportunity.",
  },
  {
    number: "04",
    title: "We believe in shipping fast and learning faster.",
    body: "Perfection is the enemy of learning. Build an MVP in a sprint, ship to real users, measure what matters, change when data says change. We'd rather ship good enough today and great tomorrow.",
  },
  {
    number: "05",
    title: "Small teams with big ambitions move faster than large hierarchies.",
    body: "A 5-person team that talks every day outweighs a 50-person team with org charts and approval chains. Our teams are small, senior, and autonomous.",
  },
  {
    number: "06",
    title: "We believe global talent changes the game.",
    body: "The best engineer for your problem might live in Toronto, Madison, or São Paulo. Geography doesn't determine capability. We hire for skill, not proximity.",
  },
  {
    number: "07",
    title: "We believe partnerships trump vendor relationships.",
    body: "We don't want clients — we want partners. We share risk, care about your long-term success, and say no when a project isn't a good fit. A vendor relationship is transactional. A partnership is aligned.",
  },
  {
    number: "08",
    title: "We believe in building, not talking.",
    body: "Manifestos are easy. Following through is hard. This document doesn't matter. What matters is what you see when you work with us — launched products, real learners, genuine partnerships.",
  },
];

const teamStructure = [
  {
    id: "engineering",
    title: "Engineering",
    description:
      "Full-stack builders. AI/ML specialists. Mobile engineers. DevOps that actually works. We write code that scales and stays maintainable.",
  },
  {
    id: "design",
    title: "Design",
    description:
      "UI/UX designers who test their assumptions. Brand designers who understand strategy. We design for clarity and delight.",
  },
  {
    id: "strategy",
    title: "Strategy",
    description:
      "Product thinkers. Business strategists. We connect what clients need to what's technically possible.",
  },
  {
    id: "education",
    title: "Education",
    description:
      "Online educators. Course creators. We teach what we learn on Udemy and through enterprise programs.",
  },
];

const values = ["Ship fast.", "Teach generously.", "Stay curious.", "Own your work."];

const impactItems = [
  {
    heading: "Udemy courses",
    detail: "8 courses. 4.6★ rating. 4,610+ reviews across prompt engineering, AI agents, data science, and more.",
  },
  {
    heading: "Enterprise training",
    detail: "Custom AI bootcamps and workshops for teams at Fortune 500s, banks, and government agencies.",
  },
  {
    heading: "35,000+ learners",
    detail: "Reached across 70+ countries through bilingual instruction in English and Urdu.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            DeepLearnHQ
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "44rem",
            }}
          >
            We&apos;re a human-centered, AI-native studio.
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
          >
            Founded on the belief that AI belongs in everyday software — not as a feature, but as
            the core material. 50+ projects. 3 continents. One mission.
          </p>

          {/* Stats inline */}
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {[
              { value: "50+", label: "Projects" },
              { value: "3", label: "Continents" },
              { value: "35,000+", label: "Learners" },
              { value: "8", label: "Service Pillars" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: "#000000",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. OUR STORY ─── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            {/* Left */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
              >
                The Story
              </p>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "#000000",
                }}
              >
                Built for AI from day one.
              </h2>
            </div>

            {/* Right */}
            <div
              className="space-y-6"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e", lineHeight: 1.7 }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#777169" }}>
                  The Founding Belief
                </p>
                <p>
                  We started with a simple observation: AI wasn&apos;t a buzzword in our office — it was a
                  tool. Our founders knew the future of software wasn&apos;t about adding AI features; it was
                  about building with AI as a core material, the way you&apos;d build with steel or code.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#777169" }}>
                  AI-Native From Day One
                </p>
                <p>
                  There&apos;s a difference between a company that uses AI and one built for it. We&apos;ve
                  never known anything else. Our culture, hiring, and process are all shaped around the principle
                  that intelligence amplifies human judgment — we don&apos;t replace engineers with algorithms,
                  we make engineers smarter.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#777169" }}>
                  Education Is Our Commitment
                </p>
                <p>
                  Technology doesn&apos;t matter if people don&apos;t understand it. That&apos;s why we
                  published 8 AI courses on Udemy. Over 35,000 learners globally now learn through our bilingual
                  content. It&apos;s not a side project — it&apos;s core to who we are.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#777169" }}>
                  Where We Are Today
                </p>
                <p>
                  A founder-led, engineering-driven studio with 50+ shipped projects and teams across Madison
                  and Toronto. We&apos;re not the largest agency — we&apos;re the one that stays
                  hands-on, ships things that work, and genuinely cares about outcomes, not hours billed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. FOUNDER ─── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-8"
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            The Founder
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — name + bio */}
            <div>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: "clamp(2.25rem, 4vw, 3rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "#000000",
                }}
              >
                Saad Ahmed
              </h2>
              <p
                className="mt-2 mb-6 text-sm"
                style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
              >
                Founder &amp; CEO — Data Scientist, Educator, Builder
              </p>

              <div
                className="space-y-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e", lineHeight: 1.7 }}
              >
                <p>
                  Saad spent a decade at Fortune 500 companies — Deloitte, PwC, BMO, Microsoft — learning how
                  enterprises think and how technology scales. He saw a gap: expensive consulting that
                  didn&apos;t teach, and education that didn&apos;t deliver real products.
                </p>
                <p>
                  He founded DeepLearnHQ to bridge that gap. Every product we build and every client we work
                  with feeds back into accessible AI education.
                </p>
                <p>
                  He&apos;s also one of Udemy&apos;s top-rated AI instructors, with 8 courses and 35,000+ learners
                  across 70+ countries. Because the best ideas don&apos;t wait for geography.
                </p>
              </div>
            </div>

            {/* Right — credential pills */}
            <div className="flex flex-col gap-3 md:pt-16">
              {[
                "Deloitte · PwC · BMO · Microsoft",
                "Udemy 4.6★ · 4,610+ Reviews",
                "Madison, WI · Toronto, ON",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-block px-5 py-3 rounded-full text-sm w-fit"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    backgroundColor: "#ffffff",
                    color: "#4e4e4e",
                    boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT WE BELIEVE ─── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            Our Principles
          </p>
          <h2
            className="mb-10"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Eight things we stand for.
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p) => (
              <div
                key={p.number}
                className="p-6"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                }}
              >
                <p
                  className="text-xs mb-2"
                  style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                >
                  {p.number}
                </p>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 400,
                    fontSize: "1.125rem",
                    lineHeight: 1.3,
                    color: "#000000",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TEAM & CULTURE ─── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            The Team
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Organized around outcomes.
          </h2>

          {/* 2×2 team grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {teamStructure.map((team) => (
              <div
                key={team.id}
                className="p-6"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 400,
                    fontSize: "1.125rem",
                    color: "#000000",
                  }}
                >
                  {team.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                >
                  {team.description}
                </p>
              </div>
            ))}
          </div>

          {/* Values pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {values.map((v) => (
              <span
                key={v}
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  fontFamily: "Inter, sans-serif",
                  backgroundColor: "#ffffff",
                  color: "#4e4e4e",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                }}
              >
                {v}
              </span>
            ))}
          </div>

          {/* Location cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div
              className="p-6"
              style={{
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
              }}
            >
              <h3
                className="mb-1"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  fontSize: "1.25rem",
                  color: "#000000",
                }}
              >
                Madison, Wisconsin
              </h3>
              <p
                className="text-xs mb-2"
                style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
              >
                US Headquarters
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
              >
                Where the cold weather and open startup culture collide.
              </p>
            </div>

            <div
              className="p-6"
              style={{
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
              }}
            >
              <h3
                className="mb-1"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  fontSize: "1.25rem",
                  color: "#000000",
                }}
              >
                Toronto, Ontario, Canada
              </h3>
              <p
                className="text-xs mb-2"
                style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
              >
                Canada Office
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
              >
                Where most of our engineering happens. Where we invest in local AI talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. ACADEMY ─── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f5f2ef" }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            DeepLearnHQ Academy
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            We teach what we build.
          </h2>

          <p
            className="max-w-2xl mb-7 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
          >
            Every pattern we ship into production becomes a course. Saad Ahmed is one of Udemy&apos;s
            top-rated AI instructors — teaching prompt engineering, AI agents, data science, and financial
            analytics to practitioners who want skills that actually work in the real world.
          </p>

          <div className="space-y-3 mb-7">
            {impactItems.map((item) => (
              <div key={item.heading} className="flex items-start gap-3">
                <span
                  className="text-xs mt-0.5"
                  style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                >
                  →
                </span>
                <p
                  className="text-sm"
                  style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                >
                  <span style={{ color: "#000000" }}>{item.heading}:</span>{" "}
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.udemy.com/user/saad-ahmed-434/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              View courses on Udemy
            </a>
            <Link
              href="/learning/enterprise-training"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid #c5c0b8", backgroundColor: "transparent", color: "#4e4e4e", fontFamily: "Inter, sans-serif" }}
            >
              Enterprise Training
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 7. CTA ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Ready to build something together?
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "30rem",
              margin: "0 auto 2rem",
            }}
          >
            We&apos;re good at understanding what you need before you fully know it yourself.
            Let&apos;s talk about your challenge.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#ffffff", color: "#000000", fontFamily: "Inter, sans-serif" }}
            >
              Start a Conversation
            </Link>
            <Link
              href="/work"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
