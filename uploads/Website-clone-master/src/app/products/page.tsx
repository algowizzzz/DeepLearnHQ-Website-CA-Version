import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | DeepLearnHQ",
  description:
    "Explore our suite of AI-native products. From HR to e-commerce to supply chain—we dogfood everything we build.",
};

const products = [
  {
    id: 1,
    name: "HappyForce",
    tagline: "Your team's competitive advantage.",
    description:
      "Keep your best people. HappyForce combines social engagement, training, performance tracking, and shift management in one platform. Real-time data shows you what's working and where people are struggling.",
    features: [
      "Social engagement feeds and recognition systems",
      "Built-in training and skill development modules",
      "Performance tracking with clear goal alignment",
      "Shift management and scheduling",
      "Data-driven reporting dashboards",
    ],
    benefit: "Attract and retain top performers. ROI in 6 months.",
    color: "from-blue-50 to-blue-100",
    accentColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Hero",
    tagline: "12 years of gaming expertise in your toolkit.",
    description:
      "Build immersive RPG experiences without writing code. Drag-and-drop visual game editors, avatar creation tools, and customizable reward systems. Used in gaming studios and corporate training programs.",
    features: [
      "Visual game editor with no-code drag-and-drop",
      "Advanced avatar and character customization",
      "Flexible reward system architecture",
      "Real-time multiplayer foundations",
    ],
    benefit: "Ship gamified experiences faster. Engage learners and players at scale.",
    color: "from-purple-50 to-purple-100",
    accentColor: "text-purple-600",
  },
  {
    id: 3,
    name: "Shop",
    tagline: "E-commerce that grows with you.",
    description:
      "Headless architecture means you sell everywhere—web, mobile, marketplace, physical. AI recommendations drive conversion. One-click checkout reduces friction. Inventory stays in sync.",
    features: [
      "AI-powered product recommendations",
      "Multi-channel selling (web, mobile, marketplace, storefronts)",
      "One-click checkout and saved payment methods",
      "Real-time inventory management and sync",
    ],
    benefit: "High-growth retailers do 2x the volume. Lower abandoned carts. Inventory never goes wrong.",
    color: "from-green-50 to-green-100",
    accentColor: "text-green-600",
  },
  {
    id: 4,
    name: "Messenger",
    tagline: "Enterprise messaging that stays yours.",
    description:
      "End-to-end encryption (AES-256) on every message. Voice and video calls. Channels for teams. File sharing without the cloud headaches. Your data never leaves your infrastructure.",
    features: [
      "Military-grade end-to-end encryption (AES-256)",
      "Voice and video calling integrated",
      "Organized channels and direct messaging",
      "Secure file sharing and storage",
    ],
    benefit: "Keep sensitive business data in-house. HIPAA and compliance-ready.",
    color: "from-red-50 to-red-100",
    accentColor: "text-red-600",
  },
  {
    id: 5,
    name: "On-Demand Delivery",
    tagline: "Logistics software that actually works.",
    description:
      "Real-time GPS tracking. AI route optimization cuts delivery times by 25%. Smart driver management. Customers get accurate ETAs. Control every touchpoint.",
    features: [
      "Real-time GPS tracking for drivers and orders",
      "AI-powered route optimization",
      "Driver assignment and performance management",
      "Customer-facing app with order tracking",
      "Dispatch console with live insights",
    ],
    benefit: "Scale food, packages, or services nationwide. Cut delivery costs. Keep customers happy.",
    color: "from-orange-50 to-orange-100",
    accentColor: "text-orange-600",
  },
  {
    id: 6,
    name: "ChatBot",
    tagline: "Handle 80% of inquiries without hiring.",
    description:
      "Natural language understanding meets visual flow builder. Deploy across web, WhatsApp, Messenger, and SMS. When things get complex, hand off to a live agent seamlessly.",
    features: [
      "Natural language understanding (NLU) for intent recognition",
      "Multi-channel deployment (web, WhatsApp, Messenger, SMS)",
      "Visual flow builder for non-technical setup",
      "Live agent handoff for complex conversations",
    ],
    benefit: "Automate routine questions. Your team focuses on problems that matter. Customers get instant answers.",
    color: "from-cyan-50 to-cyan-100",
    accentColor: "text-cyan-600",
  },
  {
    id: 7,
    name: "Chain",
    tagline: "Blockchain supply chain that eliminates counterfeits.",
    description:
      "Immutable ledger. Smart contracts. Full provenance tracking. Tokenized assets. Every product's origin and journey is verified and transparent.",
    features: [
      "Immutable transaction ledger",
      "Smart contract automation",
      "Complete provenance and origin tracking",
      "Tokenized asset representation",
      "Counterfeit detection",
    ],
    benefit: "Authentic products. Customer trust. Regulatory compliance. Luxury and pharma businesses eliminate fraud.",
    color: "from-yellow-50 to-yellow-100",
    accentColor: "text-yellow-600",
  },
  {
    id: 8,
    name: "Social Platform",
    tagline: "A social network that's actually yours.",
    description:
      "White-label, fully customizable. Profiles, feeds, groups, live streaming. AI moderation keeps things safe. Built-in monetization engine. Own your audience, own your data.",
    features: [
      "Customizable profiles and user profiles",
      "Real-time feeds and group communities",
      "Live streaming with interactive features",
      "AI-powered content moderation",
      "Built-in monetization and revenue tools",
    ],
    benefit: "Community platforms that scale. Creator economy ready. Your rules, your revenue.",
    color: "from-pink-50 to-pink-100",
    accentColor: "text-pink-600",
  },
  {
    id: 9,
    name: "Insight Machine",
    tagline: "Analytics that actually answers questions.",
    description:
      "Real-time dashboards. Predictive analytics. 50+ chart types. Natural language queries mean no SQL needed. Reports generate themselves.",
    features: [
      "Real-time executive dashboards",
      "Predictive analytics and forecasting",
      "50+ chart and visualization types",
      "Natural language query interface",
      "Automated report generation and scheduling",
    ],
    benefit: "See what's happening now and what's coming next. Every stakeholder understands the data.",
    color: "from-indigo-50 to-indigo-100",
    accentColor: "text-indigo-600",
  },
  {
    id: 10,
    name: "Event Management",
    tagline: "Virtual, hybrid, or in-person. One platform.",
    description:
      "Registration, ticketing, live streaming all built in. AI-powered networking connects the right people. Sponsor management is simple. Analytics show what worked.",
    features: [
      "Event registration and ticketing",
      "Live streaming for virtual and hybrid events",
      "AI-powered attendee matching and networking",
      "Sponsor management and activation",
      "Comprehensive event analytics",
    ],
    benefit: "Sell more tickets. Create better connections. Sponsors see real ROI.",
    color: "from-violet-50 to-violet-100",
    accentColor: "text-violet-600",
  },
];

export default function ProductsPage() {
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
            <span className="text-gray-900">Products</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              We don't just build for clients. We build our own.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We're practitioners, not just consultants. Every product below solves a real problem because we live with these problems every day.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#1E6FD9] transition-all duration-300"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${product.color} p-8`}>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                    {product.name}
                  </h3>
                  <p className={`${product.accentColor} font-semibold text-sm`}>
                    {product.tagline}
                  </p>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-start gap-2">
                          <span className={`${product.accentColor} font-bold mt-0.5`}>
                            •
                          </span>
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-gray-500 text-xs italic">
                          +{product.features.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefit */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm font-semibold text-[#1a1a1a] mb-4">
                      Primary Benefit
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.benefit}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-6">
                    <Link
                      href={`/products/${product.id}`}
                      className="text-[#1E6FD9] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Build Products Section */}
      <section className="py-20 bg-gray-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-16 text-center">
            Why We Build Products
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Building Makes Us Better
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Building products makes us better consultants. We understand the full lifecycle—architecture decisions, scaling challenges, user feedback, legacy code. When we help clients, we're not theorizing. We're drawing from real experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our products also let us give back. Every line of code we write, every challenge we solve, feeds back into our training programs and open-source contributions. We learn in public and teach generously.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "10", label: "Products" },
                { num: "35K+", label: "Users" },
                { num: "50+", label: "Features" },
                { num: "24/7", label: "Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#1E6FD9] mb-2">
                    {stat.num}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B0C0D] px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Want us to build yours? We're always open to new challenges, big ideas, and teams that care about execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#1E6FD9] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1859B3] transition-colors text-center"
            >
              Start a Project
            </Link>
            <Link
              href="mailto:hello@deeplearnhq.com"
              className="bg-white text-[#0B0C0D] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>

          <p className="text-gray-400 mt-8 text-sm">
            hello@deeplearnhq.com
          </p>
        </div>
      </section>
    </>
  );
}
