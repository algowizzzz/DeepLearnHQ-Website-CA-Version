import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Enterprise AI Training | Custom Corporate Programs | DeepLearnHQ",
  description:
    "Custom AI training programs for enterprises and universities. Board-level workshops, hands-on bootcamps, and university partnerships from DeepLearnHQ.",
};

const trainingOfferings = [
  {
    title: "Customized Bootcamps",
    duration: "6-16 weeks",
    description:
      "AI fundamentals tailored to your team. Role-specific deep dives. Industry-specific applications. Real project work with real outcomes.",
    includes: [
      "Curriculum design for your context",
      "Real-world project work",
      "Hands-on labs and coding",
      "Real-time mentorship",
      "Certification upon completion",
    ],
  },
  {
    title: "Leadership Workshops",
    duration: "1-3 days",
    description:
      "For executives and decision-makers. AI strategy and planning. Managing technical teams. Risk and governance frameworks. Stakeholder alignment.",
    includes: [
      "Board-ready presentations",
      "Strategic roadmapping",
      "AI risk assessment",
      "Team building strategies",
      "ROI frameworks",
    ],
  },
  {
    title: "Technical Deep Dives",
    duration: "2-5 days",
    description:
      "Intensive training for technical teams. Machine learning for your use cases. Generative AI applications. Data engineering fundamentals. Advanced topics.",
    includes: [
      "Hands-on coding workshops",
      "Real-world architectures",
      "Best practices for production",
      "Tool and library selection",
      "Troubleshooting and optimization",
    ],
  },
  {
    title: "Assessment & Planning",
    duration: "1-2 days",
    description:
      "Evaluate your AI readiness. Identify opportunities and risks. Create implementation roadmaps. Build governance frameworks. Design organizational change strategy.",
    includes: [
      "AI maturity assessment",
      "Gap analysis",
      "Opportunity identification",
      "Risk evaluation",
      "Implementation roadmap",
    ],
  },
];

const whyChoose = [
  {
    title: "Expert Instructor",
    description:
      "Saad Ahmed spent a decade at Fortune 500 companies: Deloitte, PwC, BMO, Microsoft. He knows what works. He knows what fails. He knows your context.",
  },
  {
    title: "Custom Content",
    description:
      "We don't teach generic AI. We teach your AI. Your tools. Your data. Your problems. Your team learns what they'll immediately apply.",
  },
  {
    title: "Flexible Delivery",
    description:
      "Virtual or on-site. Part-time or immersive. By department or across the organization. We fit your schedule and constraints.",
  },
  {
    title: "Real Projects",
    description:
      "Your team works on real problems. By the end, you have solutions, not just certificates. Measurable impact. Lasting results.",
  },
  {
    title: "Measurable Outcomes",
    description:
      "We track adoption. We track impact. We track ROI. You see concrete results, not just completion rates.",
  },
  {
    title: "Ongoing Support",
    description:
      "Training doesn't end when the program does. We provide coaching, support, and follow-up to ensure sustained capability building.",
  },
];

const successStories = [
  {
    industry: "Financial Services",
    challenge: "Need to upskill 150 analysts on AI and machine learning",
    solution: "12-week bootcamp with role-specific tracks and real project work",
    result: "85% of participants moved to AI-integrated workflows. 3 new products launched.",
  },
  {
    industry: "Technology",
    challenge: "Leadership didn't understand AI capabilities and limitations",
    solution: "2-day executive workshop on AI strategy and governance",
    result: "Approved $5M AI investment. Clear 12-month roadmap. Board alignment.",
  },
  {
    industry: "Healthcare",
    challenge: "Data team needed to work with generative AI for clinical documentation",
    solution: "5-day technical deep dive on prompt engineering and LLM integration",
    result: "Deployed AI system reducing documentation time by 40%. Compliance maintained.",
  },
];

export default function EnterpriseTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f5f7fa] via-[#eef2f7] to-[#e8edf5] pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/learning" className="hover:text-[#1E6FD9] transition-colors">
              Learning
            </Link>
            <span>/</span>
            <span className="text-gray-900">Enterprise Training</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B0C0D] mb-4 leading-tight">
              Build AI Capability Within Your Organization
            </h1>
            <p className="text-2xl text-[#1E6FD9] font-semibold mb-6">
              Custom programs. Your team. Your timeline.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Not every company needs to hire. Some need to upskill. We design and deliver custom AI training programs that transform how your organization works with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Why Enterprise Training Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0C0D] mb-8 text-center">
            Why DeepLearnHQ for Enterprise Training?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((reason, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#1E6FD9] transition-all"
              >
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0C0D] mb-16 text-center">
            What We Offer
          </h2>

          <div className="space-y-8">
            {trainingOfferings.map((offering, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 hover:border-[#1E6FD9] transition-all"
              >
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B0C0D] mb-2">
                      {offering.title}
                    </h3>
                    <div className="text-[#1E6FD9] font-semibold text-sm mb-4">
                      {offering.duration}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#0B0C0D] mb-4">What's Included</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {offering.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-[#1E6FD9] font-bold text-lg">✓</span>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0C0D] mb-16 text-center">
            Real Outcomes from Real Organizations
          </h2>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-1 bg-[#1E6FD9] rounded-full"></div>
                  <span className="font-bold text-[#0B0C0D] text-lg">
                    {story.industry}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#0B0C0D] mb-2 text-lg">
                      The Challenge
                    </h4>
                    <p className="text-gray-600">{story.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0B0C0D] mb-2 text-lg">
                      Our Solution
                    </h4>
                    <p className="text-gray-600">{story.solution}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-[#1E6FD9]/20">
                    <h4 className="font-bold text-[#1E6FD9] mb-2">The Result</h4>
                    <p className="text-gray-700 font-medium">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0C0D] mb-16 text-center">
            How We Work Together
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Discovery & Assessment",
                description:
                  "We understand your organization, challenges, goals, and constraints. What's your current AI maturity? Where are the biggest opportunities? What's your timeline?",
              },
              {
                step: "2",
                title: "Program Design",
                description:
                  "We design a custom program. Curriculum. Delivery method. Timeline. Success metrics. We align with your goals and organization.",
              },
              {
                step: "3",
                title: "Delivery",
                description:
                  "We execute. Whether it's a 2-day workshop for leadership or a 16-week bootcamp for technical teams, we show up, teach, and drive results.",
              },
              {
                step: "4",
                title: "Measurement & Support",
                description:
                  "We measure impact. We track adoption. We provide ongoing coaching and support to ensure your team keeps growing long after the program ends.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E6FD9] text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 flex-grow">
                  <h3 className="text-xl font-bold text-[#0B0C0D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0C0D] mb-8">
            We've Worked with Organizations in:
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              "Financial Services",
              "Technology",
              "Healthcare",
              "E-commerce",
              "Manufacturing",
              "Government",
              "Higher Education",
              "Professional Services",
              "Insurance",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-medium text-gray-700"
              >
                {industry}
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're in finance, tech, healthcare, or any other sector—we design programs that respect your industry, your constraints, and your goals.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0C0D] mb-16 text-center">
            Common Questions About Enterprise Training
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical program take?",
                answer:
                  "Depends on your goals. Leadership workshops can be 1-3 days. Technical bootcamps are typically 6-16 weeks. Assessment and planning programs are 1-2 days. We work with your timeline.",
              },
              {
                question: "Can the program be virtual or on-site?",
                answer:
                  "Both. We deliver virtual, on-site, or hybrid. Whatever works best for your organization and team.",
              },
              {
                question: "How much does enterprise training cost?",
                answer:
                  "Pricing depends on scope, duration, team size, and customization. We provide a custom quote after understanding your needs. Typical programs range from $10K to $250K+.",
              },
              {
                question: "Can you work with universities?",
                answer:
                  "Yes. We have university partnerships for student cohorts, faculty training, and curriculum design. These programs bridge academia and industry.",
              },
              {
                question: "What happens after the program ends?",
                answer:
                  "We don't just hand off a certificate. We provide ongoing coaching, support resources, and follow-up workshops to ensure your team's capability continues to grow.",
              },
              {
                question: "What if our team has mixed skill levels?",
                answer:
                  "We design tracks based on existing skill levels. Beginners and advanced participants both get value. Customization is core to what we do.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-[#0B0C0D] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Request Consultation */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Let's talk about your challenges, your goals, and how we can help your team master AI. No pitch. Just a conversation about what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@deeplearnhq.com?subject=Enterprise%20Training%20Inquiry"
              className="inline-block bg-[#1E6FD9] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1859B3] transition-colors text-lg"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+1234567890"
              className="inline-block border-2 border-[#1E6FD9] text-[#1E6FD9] px-8 py-4 rounded-lg font-bold hover:bg-[#1E6FD9]/10 transition-colors text-lg"
            >
              Call Us
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            We'll connect within 24 hours to discuss your organization's needs and design a custom program.
          </p>
        </div>
      </section>
    </>
  );
}
