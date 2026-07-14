import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Our Manifesto | DeepLearnHQ",
  description:
    "What we believe. AI should serve people. Software should think. Education should be accessible. We ship fast. We build together.",
  keywords:
    "company values, AI ethics, software development philosophy, engineering culture",
};

const principles = [
  {
    number: "01",
    title: "We believe AI should serve people, not replace them.",
    body: [
      "The fear narrative is wrong. AI isn't coming to take your job. It's coming to change what your job is.",
      "The best futures are built by people who understand AI and know how to work alongside it. Not people afraid of it. Not people blind to it. People who see it clearly and use it as a tool.",
      "We build AI systems that amplify human capability. That give people more time for the work that matters. That make decisions explainable, reversible, and ultimately answerable to humans.",
      "We won't build black boxes. We won't build systems designed to manipulate or deceive. We won't automate the human out of the equation.",
    ],
  },
  {
    number: "02",
    title: "We believe software should think, adapt, and improve.",
    body: [
      "Static software is dead software.",
      "The best systems learn from use. They adapt to new data. They get smarter over time. They handle edge cases that no one anticipated because they were designed to handle unknowns, not just specifications.",
      "We build systems that think. Code that gets better the more it's used. Data pipelines that catch their own failures. ML systems that drift less and adapt more. Architecture that bends without breaking.",
      "We believe in living systems, not monuments.",
    ],
  },
  {
    number: "03",
    title: "We believe knowledge should be accessible to everyone.",
    body: [
      "Gatekeeping is a business model, not a principle.",
      "The people who understand AI will shape the next decade. Not the companies that charge $10,000 for courses. Not the people who keep knowledge in private Slack channels. Not the engineers who only share sanitized case studies.",
      "We teach what we build. We publish what we learn. We share open-source tools we've created. We make courses accessible in multiple languages because language shouldn't be a barrier to opportunity.",
      "SeekhoAI isn't a side project. It's not a marketing funnel. It's core to who we are. 35,000+ learners. Two languages. One mission.",
      "We believe the future belongs to people who understand AI. All of them. Not just the ones who could afford Stanford or San Francisco.",
    ],
  },
  {
    number: "04",
    title: "We believe in shipping fast and learning faster.",
    body: [
      "Perfection is the enemy of learning.",
      "The best way to understand a problem is to build something, ship it, watch people use it, and iterate. You can't sit in a room and theorize your way to product-market fit.",
      "Our process: Write the spec in a week, not a month. Build an MVP in a sprint, not a quarter. Ship to real users, not a testing lab. Measure what actually matters, not what's easy to measure. Change direction when data says change.",
      "This doesn't mean shipping garbage. It means shipping the minimum useful thing. Fast. Learning from it. Making it better.",
      "We'd rather ship good enough today and great tomorrow than perfect next year.",
    ],
  },
  {
    number: "05",
    title:
      "We believe small teams with big ambitions move faster than large hierarchies.",
    body: [
      "Process scales worse than problems.",
      "A 5-person team that talks every day outweighs a 50-person team with org charts and approval chains. Decision-making is faster. Communication is clearer. Accountability is real.",
      "Our teams are small. Senior. Autonomous. You tell us what to build, we figure out how. We don't need to ask permission for architectural decisions or technical direction.",
      "This doesn't mean chaos. It means clarity. We have strong opinions, backed by experience. We listen to pushback. We change our minds when we're wrong. We move fast because we don't have to ask seventeen people before we build something.",
    ],
  },
  {
    number: "06",
    title: "We believe global talent changes the game.",
    body: [
      "The best engineer for your problem might live in Toronto, Madison, or São Paulo. Geography doesn't determine capability.",
      "We work across time zones. We hire for skill, not proximity. We build diverse teams because diversity isn't nice — it's competitive advantage.",
      "Language barriers? We overcome them. Cultural differences? They make us better, not worse. We're not a regional studio that hired selectively. We're a global studio that happens to have offices in Madison and Toronto.",
      "Your problem doesn't care where your engineer was born. Neither do we.",
    ],
  },
  {
    number: "07",
    title: "We believe partnerships trump vendor relationships.",
    body: [
      "If we're interchangeable with another vendor, we've failed.",
      "We don't want clients. We want partners. That means: we share risk when possible, not just price. We care about your long-term success, not the next quarterly contract. We say no when a project isn't a good fit. We challenge you when we think you're making a mistake. We invest in your growth, even when it costs us.",
      "A vendor relationship is transactional. A partnership is aligned. We choose the latter, even when it's harder.",
      "We've turned down lucrative contracts because they felt predatory. We've built long-term relationships that started as one-month engagements. We've helped clients we worked with 2 years ago, without invoicing them, because it was the right thing.",
      "That's how partnerships work.",
    ],
  },
  {
    number: "08",
    title: "We believe in building, not talking.",
    body: [
      "Manifestos are easy. Following through is hard.",
      "This document doesn't matter. What matters is what you see when you work with us.",
      "Do we actually ship fast? Check our portfolio. Talk to our clients. You'll see launched products, not vaporware.",
      "Do we actually teach? Visit SeekhoAI. 35,000 learners. Bilingual courses. Real projects. Not a marketing site.",
      "Do we actually value partnerships? Talk to someone who worked with us 3 years ago. See if we're still in their corner.",
      "Do we actually think globally? Look at our team. Listen to how we talk. Watch how we work across time zones.",
      "Words are cheap. Work is expensive. We prefer expensive.",
    ],
  },
];

export default function ManifestoPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Manifesto"
        description="This is what we believe. AI should serve people. Software should think. Education should be accessible."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Manifesto" },
        ]}
      />

      {/* Team Collaboration Photo Placeholder */}
      <section className="w-full">
        <div className="w-full h-[300px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-gray-500 text-lg font-medium">
              Team Collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              This is who we are.
            </h2>
          </div>

          <div className="space-y-20">
            {principles.map((p) => (
              <div key={p.number} className="flex gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-6xl font-bold text-[#1E6FD9]/15 leading-none">
                    {p.number}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0B0C0D] mb-5">
                    {p.title}
                  </h3>
                  <div className="space-y-4">
                    {p.body.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 leading-relaxed text-base md:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#0B0C0D] mb-6">
            This is who we are.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We&apos;re not a growth-at-all-costs startup. Not a corporate
            consulting firm. Not a freelance marketplace.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We&apos;re a studio of senior engineers who think software should be
            built well, shipped fast, and built with intention. Who believe AI
            should serve people. Who think education is too important to
            gatekeep. Who work with partners, not clients.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We&apos;re the people who ship. Who learn. Who teach. Who build
            things that matter.
          </p>
          <p className="text-xl font-semibold text-[#0B0C0D]">
            If that&apos;s what you&apos;re looking for, let&apos;s talk.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#1E6FD9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1859B3] transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/work"
              className="bg-white text-[#1a1a1a] px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:border-[#1E6FD9] hover:text-[#1E6FD9] transition-colors"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection
        title="Partner With a Team That Cares"
        description="Experience what it means to work with a company that puts principles before profit."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ label: "View Our Process", href: "/about/process" }}
      />
    </>
  );
}
