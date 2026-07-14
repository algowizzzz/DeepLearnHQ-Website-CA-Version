import Link from "next/link";

/* 8 Service Pillars */
const servicePillars = [
  {
    title: "Strategy Consulting",
    description: "Strategy that leads to software. Not just slide decks.",
    subItems: [
      "Product strategy & roadmapping",
      "Technology assessment & selection",
    ],
    href: "/services/strategy-consulting",
  },
  {
    title: "AI Services",
    description: "AI that ships. Not AI that demos.",
    subItems: [
      "AI product development",
      "Generative AI applications",
    ],
    href: "/services/ai-services",
  },
  {
    title: "Innovation Services",
    description: "De-risk product decisions. Ship what matters.",
    subItems: [
      "Design thinking & discovery",
      "MVP & agile development",
    ],
    href: "/services/innovation",
  },
  {
    title: "Custom Software Development",
    description: "Custom software. Built right. Shipped fast.",
    subItems: [
      "Web, mobile, & enterprise apps",
      "Nearshore & offshore teams",
    ],
    href: "/services/software-development",
  },
  {
    title: "Data Services",
    description: "Turn data into decisions.",
    subItems: [
      "Data engineering & analytics",
      "Data science & ML models",
    ],
    href: "/services/data-services",
  },
  {
    title: "Cloud Services",
    description: "Cloud infrastructure that just works.",
    subItems: [
      "Cloud-native engineering",
      "AWS, Azure, GCP expertise",
    ],
    href: "/services/cloud-services",
  },
  {
    title: "QA & Testing",
    description: "We don't ship bugs. We ship confidence.",
    subItems: [
      "Functional & automation testing",
      "Performance & security testing",
    ],
    href: "/services/qa-services",
  },
  {
    title: "Modernization Services",
    description: "Legacy systems don't have to hold you back.",
    subItems: [
      "Platform refactoring",
      "Enterprise architecture redesign",
    ],
    href: "/services/modernization",
  },
];

/* 4 Meta Categories */
const metaCategories = [
  {
    title: "Innovation",
    subtitle: "Ship faster. Launch smarter.",
    description:
      "When you don't know what works, guessing costs. We use design thinking, product discovery, and MVP development to de-risk decisions. You move from 'what if' to market in weeks, not quarters.",
  },
  {
    title: "Modernization",
    subtitle: "Stop carrying technical debt.",
    description:
      "Legacy systems drain resources. We refactor platforms, redesign UX, and rebuild architecture. You get speed back. New talent actually wants to work here.",
  },
  {
    title: "Digitalization",
    subtitle: "Turn analog into automated.",
    description:
      "Digital transformation isn't a project—it's a reboot. We assess your tech, design new flows, and migrate systems. What took hours takes minutes. What took days happens in real time.",
  },
  {
    title: "Augmentation",
    subtitle: "Your team. Amplified by AI.",
    description:
      "AI isn't a replacement. It's a force multiplier. We build products that earn revenue, systems that reduce manual work 60%, and solutions that scale without hiring. Your people do better work.",
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    quote:
      "DeepLearnHQ delivered a world-class product that exceeded our expectations. Their team was responsive, professional, and deeply committed to our success.",
    author: "Sarah Mitchell",
    role: "CTO, TechVentures Inc.",
  },
  {
    quote:
      "The team understood our vision from day one. They transformed a complex idea into an intuitive, powerful platform that our users love.",
    author: "James Carter",
    role: "Founder, HealthBridge",
  },
  {
    quote:
      "Working with DeepLearnHQ felt like having an extension of our own team. Their expertise in AI and mobile development is truly remarkable.",
    author: "Priya Sharma",
    role: "VP of Product, FinEdge",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f7fa] via-[#eef2f7] to-[#e8edf5] pt-28 pb-20">
        {/* Decorative gradient blobs */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#1E6FD9]/15 to-[#1E6FD9]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-gradient-to-tr from-purple-300/15 to-indigo-200/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-orange-200/20 to-yellow-100/10 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start gap-6">
            {/* Content */}
            <div className="flex-1 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0B0C0D] mb-6 leading-[1.15]">
                Software Development & AI Consulting Services
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
                We help companies build products, ship AI, and modernize systems. Not with buzzwords. With working code. Since 2015, we've shipped 50+ projects across 3 continents. Our track record speaks louder than our pitch decks.
              </p>

              <Link
                href="#pillars"
                className="inline-block bg-[#1E6FD9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1859B3] transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 Meta Categories ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Four ways we help you move forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metaCategories.map((category) => (
              <div
                key={category.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#1E6FD9] transition-all"
              >
                <h3 className="text-2xl font-bold text-[#0B0C0D] mb-2">
                  {category.title}
                </h3>
                <p className="text-[#1E6FD9] font-semibold mb-4">
                  {category.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8 Service Pillars Grid ─── */}
      <section className="py-20 bg-white" id="pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Our Service Pillars
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePillars.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-[#0B0C0D] mb-2 group-hover:text-[#1E6FD9] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.subItems.map((item) => (
                    <li key={item} className="text-gray-500 text-xs flex items-start gap-2">
                      <span className="text-[#1E6FD9] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E6FD9] group-hover:translate-x-1 transition-transform">
                  Learn More
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ─── CTA Section ─── */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to move forward?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Talk to our team. Let's understand your challenge, not pitch our solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1E6FD9] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1859B3] transition-colors text-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
