import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team | DeepLearnHQ",
  description:
    "Meet the team behind DeepLearnHQ. Engineers, designers, and strategists building AI-native products.",
  keywords: "team, careers, engineering, design, AI, Canada, Wisconsin",
};

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
      "Course creators. Content specialists. SeekhoAI builders. We teach what we learn.",
  },
];

const values = [
  {
    title: "Ship fast.",
    description: "We'd rather iterate than perfect.",
  },
  {
    title: "Teach generously.",
    description:
      "Every client project becomes a learning opportunity. We blog, we open-source, we mentor.",
  },
  {
    title: "Stay curious.",
    description: "We're paid to solve hard problems. We ask why a lot.",
  },
  {
    title: "Own your work.",
    description:
      "You build it, you support it. We don't hide behind titles or handoffs.",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Remote-first culture (though we love meeting in person)",
  "Access to real clients and real problems",
  "Time to contribute to SeekhoAI and open-source",
  "Continuous learning budget",
  "Health insurance and all the basics",
];

export default function PeoplePage() {
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
            <span className="text-gray-900">People</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              The people behind the products.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Small enough to care. Big enough to deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-16">
            Founder &amp; CEO
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo placeholder */}
              <div className="w-full h-80 bg-gray-300 rounded-xl flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium">
                  Saad Ahmed
                </span>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
                  Saad Ahmed
                </h3>
                <p className="text-[#1E6FD9] font-semibold mb-6">
                  Data Science. Business. Enterprise AI.
                </p>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Saad spent a decade at Fortune 500 companies—Deloitte, PwC,
                    BMO, Microsoft—learning how enterprises think and how
                    technology scales. He saw a gap: expensive consulting that
                    didn&apos;t teach, and education that didn&apos;t deliver
                    real products.
                  </p>
                  <p>
                    He founded DeepLearnHQ to bridge that gap. Every product we
                    build, every client we work with, feeds back into accessible
                    AI education.
                  </p>
                  <p>
                    He&apos;s also creator of{" "}
                    <span className="font-semibold">SeekhoAI</span>, making AI
                    education accessible across North America and beyond. Because the
                    best ideas don&apos;t wait for geography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="py-20 bg-gray-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Our Team Structure
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-3xl">
            We&apos;re organized around outcomes, not titles.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {teamStructure.map((team) => (
              <div
                key={team.id}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {team.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-16">
            Our Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fdf8f6] rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                Madison, Wisconsin
              </h3>
              <p className="text-[#1E6FD9] font-semibold text-sm mb-4">
                US Headquarters
              </p>
              <p className="text-gray-600 leading-relaxed">
                Where the cold weather and open startup culture collide.
              </p>
            </div>

            <div className="bg-[#fdf8f6] rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                Toronto, Ontario, Canada
              </h3>
              <p className="text-[#1E6FD9] font-semibold text-sm mb-4">
                Canada Office
              </p>
              <p className="text-gray-600 leading-relaxed">
                Where most of our engineering happens. Where we invest in local
                AI talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-16">
            Our Values
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Join Us
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            We&apos;re always looking for great engineers, designers, and
            thinkers.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
              We offer:
            </h3>

            <ul className="space-y-4 mb-8">
              {benefits.map((item, idx) => (
                <li key={idx} className="text-gray-600 flex items-start gap-3">
                  <span className="text-[#25a858] font-bold text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              If you want to build products that matter, work across continents,
              and teach as you learn—let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/careers"
                className="bg-[#1E6FD9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1859B3] transition-colors text-center"
              >
                View Open Positions
              </Link>
              <Link
                href="mailto:hello@deeplearnhq.com"
                className="bg-white text-[#1E6FD9] px-8 py-3 rounded-lg font-semibold border border-[#1E6FD9] hover:bg-[#1E6FD9] hover:text-white transition-colors text-center"
              >
                hello@deeplearnhq.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B0C0D] px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a client, a partner, or someone who wants to
            join the team—we&apos;re here to build great things.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#1E6FD9] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1859B3] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
