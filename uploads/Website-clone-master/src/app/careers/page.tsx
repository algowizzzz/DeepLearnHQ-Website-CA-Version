import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Careers at DeepLearnHQ | Join Our Team",
  description:
    "Join the DeepLearnHQ team. Build AI-native products, teach what you know, and grow with people who care about the craft. Open positions in engineering, design, and DevOps.",
};

const whyUs = [
  {
    title: "Engineering-first culture",
    description:
      "We don't hire around process. We hire people who ship. You'll work with engineers, designers, and product folks who care about the craft. Your code gets reviewed, your ideas get heard, and your mistakes become learning moments.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "AI-native from day one",
    description:
      "You're not bolting AI onto legacy systems. We're building intelligent products from the ground up. Whether you're working on agentic systems, ML pipelines, or cloud infrastructure, you're working with modern stacks and real AI problems—not hype.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "We teach, because we believe it compounds",
    description:
      "We built SeekhoAI for 35K+ learners. That's not just a side project—it's how we think. You get unlimited access to learning resources, Friday learning hours, and teammates who generously share what they know. Growing here isn't optional. It's expected.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Global. Remote-friendly. Human.",
    description:
      "Our team spans Madison, WI (headquarters) and Toronto, ON. We work async-first because we value focus time. But we also gather quarterly and have real rituals that keep us connected. You'll know your teammates, not just their Slack avatars.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Competitive pay",
    description:
      "We pay market rates because we value you. Salary is based on experience, not negotiation skill.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible work",
    description:
      "Work the hours that work for you. We measure output, not seat time. Full remote or in our Madison office—your choice.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Learning budget",
    description:
      "Access to SeekhoAI, conferences, courses, books. We give you $2,500 annually and the time to use it.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Real impact",
    description:
      "Your code ships to real users. Your decisions shape how 35K+ learners discover skills. Your designs prevent urgent care bottlenecks. You'll see the work land.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Equity",
    description:
      "We're building something, and we want you to own part of it.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Health and sanity",
    description:
      "Health insurance, dental, vision, mental health support. Parental leave. Time off that you actually take.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Madison or remote",
    type: "Full-time",
    description:
      "Build agentic systems and ML pipelines at scale. You've shipped models to production, you know the gaps between research and reality, and you can mentor engineers who are just learning how. We need someone who can set direction and ship simultaneously.",
    highlights: ["Agentic systems & ML pipelines", "Production model deployment", "Mentorship of junior engineers", "Architecture direction"],
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Madison or remote",
    type: "Full-time",
    description:
      "Build the infrastructure and interfaces that power our products. You're comfortable moving between backend services and frontend experiences. You care about user experience and system reliability. We use modern stacks (TypeScript, React, Python, Postgres).",
    highlights: ["TypeScript, React, Python, Postgres", "Backend services & frontend", "User experience focus", "System reliability"],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Madison or remote",
    type: "Full-time",
    description:
      "Design products that users actually understand and love. You can move from whiteboard to prototype to shipped feature. You'll work closely with engineers and product leads, and your thinking shapes what we build.",
    highlights: ["Whiteboard to shipped feature", "Close collaboration with engineering", "User research & testing", "Shape product direction"],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Madison or remote",
    type: "Full-time",
    description:
      "Keep our systems fast, secure, and reliable. You've set up CI/CD pipelines, managed infrastructure as code, and debugged production incidents at 3 AM. We need someone who cares about developer experience as much as system stability.",
    highlights: ["CI/CD pipelines & IaC", "Production incident response", "Developer experience", "Security & reliability"],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Build what matters. With people who care."
        description="We're an AI-native software studio building products that solve real problems. We ship fast, ship well, and invest in each other's growth. If you're looking for a place where your work has genuine impact and your learning never stops, you're in the right place."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      {/* Team Photo Placeholder */}
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
            <p className="text-gray-500 text-lg font-medium">Our Team</p>
          </div>
        </div>
      </section>

      {/* Why DeepLearnHQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Why DeepLearnHQ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Four things that set us apart from every other studio.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-[#fdf8f6] hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#1E6FD9]/20"
              >
                <div className="w-14 h-14 bg-[#1E6FD9]/10 rounded-xl flex items-center justify-center text-[#1E6FD9] mb-5 group-hover:bg-[#1E6FD9] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We invest in the people who build with us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-[#1E6FD9]"
              >
                <div className="w-14 h-14 bg-[#1E6FD9]/10 rounded-xl flex items-center justify-center text-[#1E6FD9] mb-5 group-hover:bg-[#1E6FD9] group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Four roles. Real problems. Genuine impact.
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0B0C0D] mb-3">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-gray-500 text-sm flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {position.department}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {position.location}
                        </span>
                        <span className="bg-[#1E6FD9]/10 text-[#1E6FD9] text-xs font-semibold px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@deeplearnhq.com?subject=Application: ${position.title}`}
                      className="bg-[#1E6FD9] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#1859B3] transition-colors whitespace-nowrap text-center flex-shrink-0"
                    >
                      Apply Now
                    </a>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {position.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {position.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FD9] flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at DeepLearnHQ teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-10 md:p-16 border border-gray-200 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
                Curious what it's actually like?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                See how we work, what our rituals are, and what a typical week looks like — from Monday async standups to Friday demos and learning hours.
              </p>
              <Link
                href="/careers/life"
                className="inline-flex items-center gap-2 text-[#1E6FD9] font-semibold text-lg hover:underline"
              >
                Life at DeepLearnHQ
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 text-center">
              <div className="bg-[#fdf8f6] rounded-xl p-6">
                <div className="text-3xl font-bold text-[#1E6FD9]">3</div>
                <div className="text-sm text-gray-600 mt-1">Offices</div>
              </div>
              <div className="bg-[#fdf8f6] rounded-xl p-6">
                <div className="text-3xl font-bold text-[#1E6FD9]">Async</div>
                <div className="text-sm text-gray-600 mt-1">First culture</div>
              </div>
              <div className="bg-[#fdf8f6] rounded-xl p-6">
                <div className="text-3xl font-bold text-[#1E6FD9]">Friday</div>
                <div className="text-sm text-gray-600 mt-1">Learning hours</div>
              </div>
              <div className="bg-[#fdf8f6] rounded-xl p-6">
                <div className="text-3xl font-bold text-[#1E6FD9]">35K+</div>
                <div className="text-sm text-gray-600 mt-1">Learners we serve</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection
        title="Don't see your role? Reach out anyway."
        description="We're always looking for strong people. If you think you fit our culture and you want to work on real problems, send us a note. Tell us what you do, what you've built, and why you think DeepLearnHQ is next."
        primaryCTA={{ label: "Send Us a Note", href: "mailto:careers@deeplearnhq.com" }}
        secondaryCTA={{ label: "Life at DeepLearnHQ", href: "/careers/life" }}
      />
    </>
  );
}
