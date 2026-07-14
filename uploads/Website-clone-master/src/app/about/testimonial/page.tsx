import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Client Testimonials | DeepLearnHQ",
  description:
    "What our clients say about building with DeepLearnHQ. Real feedback from founders, CTOs, and executives.",
  keywords: "client testimonials, case studies, reviews, Clutch, success stories",
};

const testimonials = [
  {
    quote:
      "DeepLearnHQ understood my vision from the beginning of the project, collaborated and gave feedback on goal objectives, was consistent with scheduled meetings and punctual despite time zone differences. The team truly cared about the success of the app build.",
    name: "Kimberly A. Dalius",
    role: "Founder & CEO",
    company: "Pauseitive LLC",
    industry: "Mental Wellness",
    rating: 5,
  },
  {
    quote:
      "Working with DeepLearnHQ felt like having a co-founder who happened to be an entire engineering team. They challenged our assumptions and delivered a product that exceeded our vision.",
    name: "Jason Rivera",
    role: "Founder",
    company: "PartyShark LLC",
    industry: "Entertainment",
    rating: 5,
  },
  {
    quote:
      "DeepLearnHQ understood the complexity of fuel logistics from day one. Their solution handles everything from safety compliance to customer delight, and it scales beautifully across our markets.",
    name: "Ahmed Al-Rashidi",
    role: "Chief Digital Officer",
    company: "OOMCO Petroleum",
    industry: "Energy & Logistics",
    rating: 5,
  },
  {
    quote:
      "DeepLearnHQ gave us the technical edge we needed to compete with the big players. Their architecture handles our growth without breaking a sweat.",
    name: "Priya Sharma",
    role: "CTO",
    company: "Foodly Technologies",
    industry: "FoodTech",
    rating: 5,
  },
  {
    quote:
      "DeepLearnHQ turned our vision of a connected forest into reality. Their engineering team tackled the hardest geospatial and IoT challenges we threw at them.",
    name: "Dr. Elena Vasquez",
    role: "Executive Director",
    company: "Forest Fusion Foundation",
    industry: "Environmental Tech",
    rating: 5,
  },
  {
    quote:
      "The experience far exceeded our expectations. DeepLearnHQ was professional, knowledgeable, and very accommodating to our timeline and goals.",
    name: "Product Manager",
    role: "Product Manager",
    company: "Swatch Group",
    industry: "Luxury & Gaming",
    rating: 5,
  },
];

const clutchStats = [
  { value: "4.9/5", label: "Clutch Rating" },
  { value: "55+", label: "Verified Reviews" },
  { value: "98%", label: "Would Recommend" },
  { value: "#1", label: "Top App Developer" },
];

const videoTestimonials = [
  {
    name: "Pauseitive",
    person: "Kimberly Dalius",
    role: "Founder & CEO",
  },
  {
    name: "OOMCO",
    person: "Client Representative",
    role: "Product Director",
  },
  {
    name: "Swatch Group",
    person: "Product Manager",
    role: "Gaming Division",
  },
];

export default function TestimonialPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="What our clients say."
        description="Don't take our word for it. Hear from founders, CTOs, and executives who've built with us."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Testimonials" },
        ]}
      />

      {/* Clutch Stats */}
      <section className="py-16 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clutchStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E6FD9] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Client Testimonials
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Trusted Across Industries
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              55+ verified client reviews on Clutch. Companies like yours trust
              us with their toughest technical challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B0C0D] to-[#1E6FD9]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {t.name[0]}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#0B0C0D]">{t.name}</p>
                    <p className="text-gray-500 text-sm">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <span className="ml-auto flex-shrink-0 bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                    {t.industry}
                  </span>
                </div>

                {/* Read Case Study link */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/work"
                    className="text-[#1E6FD9] text-sm font-semibold hover:underline"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Clutch CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              <strong>4.9 out of 5 stars</strong> — 55+ verified client reviews
              on Clutch.
            </p>
            <a
              href="https://clutch.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1E6FD9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1859B3] transition-colors"
            >
              View All Reviews on Clutch
            </a>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Video Stories
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Watch Their Stories
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real clients, real results, in their own words. Coming soon.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div
                key={video.name}
                className="group bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20] rounded-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#1E6FD9] transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1E6FD9]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1E6FD9]/30 transition-colors">
                    <svg
                      className="w-8 h-8 text-[#1E6FD9] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold">{video.name}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {video.person} &middot; {video.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection
        title="Ready to share your story?"
        description="Build something great with us. Your success is our success."
        primaryCTA={{ label: "Start a Project", href: "/contact" }}
        secondaryCTA={{ label: "View Case Studies", href: "/work" }}
      />
    </>
  );
}
