import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Our Process | DeepLearnHQ – How We Ship AI Products",
  description:
    "Six-step framework for turning AI ideas into shipped products. Discover how we move from challenge to outcome without the bloat.",
  keywords:
    "software development process, AI development methodology, agile software development, product development, design thinking",
};

const steps = [
  {
    number: "01",
    title: "Discover",
    tagline: "What are we actually solving?",
    description:
      "We start by listening. We interview your stakeholders, map your constraints, and get specific about success. This phase is critical because 80% of project failures aren't technical—they're due to misaligned expectations.",
    whatHappens: [
      "Problem mapping and stakeholder interviews",
      "Current state assessment (existing systems, data, workflows)",
      "Success metrics defined in writing",
      "Competitive landscape review (if applicable)",
    ],
    output: "A clear problem statement and project charter",
  },
  {
    number: "02",
    title: "Design",
    tagline: "How will this work?",
    description:
      "After we understand the problem, we sketch solutions. We wireframe flows, map data architecture, and prototype the AI components. We've learned the hard way that bad design kills good technology. You'll see multiple options, not one pretty mockup.",
    whatHappens: [
      "User flow and data architecture design",
      "AI/ML approach evaluation (what model, what training data, deployment strategy)",
      "Interactive prototypes (not final design)",
      "Design review with your team (iterate until aligned)",
    ],
    output: "Approved design spec and technical architecture",
  },
  {
    number: "03",
    title: "Build",
    tagline: "Let's make it real.",
    description:
      "Now we code. We pair experienced engineers with the domain experts on your team (your people learn alongside ours). We work in two-week sprints, ship working software every sprint, and keep the technical debt low.",
    whatHappens: [
      "Agile development in two-week sprints",
      "Daily standups with your team",
      "Code review and CI/CD pipeline (nothing ships without testing)",
      "Integration with your systems (APIs, databases, authentication)",
    ],
    output: "Functioning software, demoed every sprint",
  },
  {
    number: "04",
    title: "Test",
    tagline: "Does it actually work?",
    description:
      "Testing isn't the final step. It's continuous. While engineers build, QA tests. We load-test, security-test, and run real data against the AI models. We catch edge cases before users do.",
    whatHappens: [
      "Functional testing against requirements",
      "Performance and load testing",
      "Security audit and penetration testing (if applicable)",
      "Real-world data validation",
      "User acceptance testing with your stakeholders",
    ],
    output: "Test report and sign-off",
  },
  {
    number: "05",
    title: "Launch",
    tagline: "Go live, carefully.",
    description:
      "We've learned that launches fail not because the software is broken, but because people aren't ready. We plan the rollout, train your team, set up monitoring, and have a rollback plan. We don't disappear on day one.",
    whatHappens: [
      "Phased rollout planning (not a big bang, unless you're sure)",
      "Team training and documentation",
      "Production environment setup and monitoring",
      "Go-live coordination",
      "24/7 support during the first week",
    ],
    output: "Live system, trained team, documented handoff",
  },
  {
    number: "06",
    title: "Evolve",
    tagline: "What did we learn?",
    description:
      "After launch, we measure. Did it hit the success metrics we defined in month one? What's being used? What isn't? We gather data and we iterate. Your software gets smarter because it learns from reality.",
    whatHappens: [
      "Weekly check-ins for the first month",
      "Usage analytics and performance monitoring",
      "User feedback collection",
      "Roadmap for next improvements",
      "Long-term support retainer (optional but recommended)",
    ],
    output: "Data-driven roadmap for version 2.0",
  },
];

const tools = [
  {
    name: "Agile/Scrum",
    detail:
      "Two-week sprints, daily standups, weekly demos. You always know what's happening.",
  },
  {
    name: "CI/CD",
    detail:
      "Code is tested and deployed automatically. No manual errors, no \"works on my machine.\"",
  },
  {
    name: "Design thinking",
    detail: "We ask \"why\" five times before jumping to solutions.",
  },
  {
    name: "Infrastructure as code",
    detail:
      "Your environment is version-controlled and reproducible. Not fragile.",
  },
  {
    name: "Documentation",
    detail:
      "Every system is documented. You won't be stuck on tribal knowledge when we hand it off.",
  },
  {
    name: "AI-first architecture",
    detail:
      "We design for model governance, A/B testing, and continuous improvement from day one.",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects ship in 12–16 weeks. Smaller projects (product features, single-service builds) take 8 weeks. Larger platform rebuilds take 20+ weeks. We'll give you a timeline after the Discover phase.",
  },
  {
    q: "What if we need changes mid-project?",
    a: "Expected and normal. Agile methodology means you can adjust priorities every sprint. We'll re-baseline the timeline and budget if scope shifts. No surprises.",
  },
  {
    q: "Do we need to dedicate our team full-time to this?",
    a: "You'll need one person (ideally technical) embedded with our team. They approve decisions, provide feedback, and learn the system deeply. Your broader team shows up for demos and major reviews.",
  },
  {
    q: "What happens after launch?",
    a: "We transition from \"project team\" to \"support and evolution.\" Most clients keep us on a retainer for monitoring, updates, and feature development. Some teams take it solo. Either way, the code is yours.",
  },
  {
    q: "How much does this cost?",
    a: "Price depends on scope, complexity, and team size. A small feature: $50K–$100K. A mid-sized product: $200K–$400K. A platform rebuild: $500K+. We'll give you a fixed bid after the Discover phase based on the problem statement.",
  },
  {
    q: "Can you work with our existing stack?",
    a: "Almost always. We've integrated with legacy systems, modern SaaS platforms, on-premise infrastructure, cloud, and hybrid setups. If it exists, we can likely connect to it. Tell us what you're running and we'll assess.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#fdf8f6] pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/about"
              className="hover:text-[#1E6FD9] transition-colors"
            >
              About
            </Link>
            <span>/</span>
            <span className="text-gray-900">Process</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Our Process
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-4">
              From zero to shipped. Here&apos;s how.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We&apos;ve shipped 50+ products across healthcare, fintech,
              education, and enterprise. The process isn&apos;t magic. It&apos;s
              disciplined, iterative, and designed to catch problems early
              rather than expensive ones late.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            6-Step Process
          </h2>
          <p className="text-gray-600 text-lg mb-16">
            We start here. Every project, every time.
          </p>

          <div className="space-y-20">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step number + title */}
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-[#1E6FD9]/20 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                      {step.title}
                    </h3>
                    <p className="text-[#1E6FD9] font-semibold mt-1">
                      {step.tagline}
                    </p>
                  </div>
                </div>

                {/* Description + details */}
                <div className="pl-0 md:pl-20 mt-6">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    What happens:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {step.whatHappens.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-[#1E6FD9] font-bold mt-0.5">
                          –
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 rounded-lg px-5 py-3 inline-block">
                    <span className="text-sm font-semibold text-gray-700">
                      Output:{" "}
                    </span>
                    <span className="text-sm text-gray-600">{step.output}</span>
                  </div>
                </div>

                {/* Divider (except last) */}
                {step.number !== "06" && (
                  <div className="mt-16 border-b border-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Methodologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Tools &amp; Methodologies
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            How we keep things clean:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-16">
            FAQ
          </h2>

          <div className="space-y-10">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's schedule your Discover phase."
        description="It's free, it takes 4 hours across two sessions, and you'll know exactly what's possible—and what it costs."
        primaryCTA={{ label: "Book a Discovery Call", href: "/contact" }}
        secondaryCTA={{ label: "View Our Work", href: "/work" }}
      />
    </>
  );
}
