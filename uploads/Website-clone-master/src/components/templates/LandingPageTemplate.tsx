'use client';

import Link from 'next/link';
import type { LandingPageData } from '@/data/landing-pages';

interface LandingPageTemplateProps {
  data: LandingPageData;
}

const elevenlabsCardShadow =
  'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px';

export default function LandingPageTemplate({ data }: LandingPageTemplateProps) {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════════ */}
      <section className="relative px-4 pb-16 pt-28 md:px-8 lg:px-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="mb-3 text-xs font-medium uppercase tracking-widest"
                style={{ color: '#777169', letterSpacing: '0.18px' }}
              >
                {data.heroSubheading}
              </p>
              <h1
                className="mb-6 leading-[1.08]"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: 'clamp(2.75rem, 5vw, 3.5rem)',
                  letterSpacing: '-0.96px',
                  color: '#000000',
                }}
              >
                {data.heroHeading}
              </h1>
              <p
                className="mb-8 leading-relaxed"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '18px',
                  color: '#4e4e4e',
                  letterSpacing: '0.16px',
                }}
              >
                {data.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    backgroundColor: '#000000',
                    borderRadius: '9999px',
                  }}
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="#case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-shadow hover:shadow-md"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    backgroundColor: 'rgba(245,242,239,0.8)',
                    borderRadius: '30px',
                    color: '#000000',
                    boxShadow: 'rgba(78,50,23,0.04) 0px 6px 16px',
                  }}
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div
                  className="absolute inset-0 transform rotate-6"
                  style={{ borderRadius: '24px', backgroundColor: '#f5f5f5' }}
                />
                <div
                  className="absolute inset-0 transform -rotate-3"
                  style={{ borderRadius: '24px', backgroundColor: '#f5f2ef' }}
                />
                <div
                  className="relative flex flex-col items-center justify-center h-full"
                  style={{ borderRadius: '24px', backgroundColor: '#ffffff', boxShadow: elevenlabsCardShadow }}
                >
                  <div className="text-6xl mb-4" style={{ color: '#000000' }}>✦</div>
                  <p
                    className="text-center px-8 text-sm"
                    style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e' }}
                  >
                    Trusted by startups &amp; SMBs across the USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PAIN POINTS
          ════════════════════════════════════════════════════════════ */}
      <section className="px-4 py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#f5f2ef' }}>
        <div className="mx-auto max-w-7xl">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest text-center"
            style={{ color: '#777169' }}
          >
            The problem
          </p>
          <h2
            className="mb-12 text-center text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.08]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-0.96px',
              color: '#000000',
            }}
          >
            Sound familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.painPoints.map((point, i) => (
              <div
                key={i}
                className="p-6"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: elevenlabsCardShadow,
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center text-sm font-semibold"
                  style={{
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    borderRadius: '12px',
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                >
                  {point.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e' }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SOLUTION
          ════════════════════════════════════════════════════════════ */}
      <section className="px-4 py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest text-center"
            style={{ color: '#777169' }}
          >
            Our approach
          </p>
          <h2
            className="mb-12 text-center text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.08]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-0.96px',
              color: '#000000',
            }}
          >
            How we solve it
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.solution.map((item, i) => (
              <div
                key={i}
                className="p-6"
                style={{
                  borderRadius: '16px',
                  border: '1px solid #e5e5e5',
                }}
              >
                <div
                  className="mb-4 text-xs font-medium uppercase tracking-widest"
                  style={{ color: '#777169' }}
                >
                  Step {i + 1}
                </div>
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          INDUSTRY CASE STUDIES (from internet research)
          ════════════════════════════════════════════════════════════ */}
      <section id="case-studies" className="px-4 py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="mx-auto max-w-7xl">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest text-center"
            style={{ color: '#777169' }}
          >
            Industry proof
          </p>
          <h2
            className="mb-4 text-center text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.08]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-0.96px',
              color: '#000000',
            }}
          >
            Real companies, real results
          </h2>
          <p
            className="mb-12 text-center text-base leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e' }}
          >
            See how businesses across industries are achieving measurable outcomes with this approach.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {data.industryCaseStudies.map((cs, i) => (
              <div
                key={i}
                className="p-8"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: elevenlabsCardShadow,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center text-lg font-bold"
                    style={{
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      borderRadius: '12px',
                    }}
                  >
                    {cs.company.charAt(0)}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                    >
                      {cs.company}
                    </h3>
                    <p className="text-xs" style={{ color: '#777169' }}>{cs.industry}</p>
                  </div>
                </div>
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e' }}
                >
                  {cs.what}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {cs.results.map((r, j) => (
                    <div key={j}>
                      <p
                        className="text-lg font-bold"
                        style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                      >
                        {r.value}
                      </p>
                      <p
                        className="text-xs"
                        style={{ fontFamily: '"Inter", sans-serif', color: '#777169' }}
                      >
                        {r.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          OUR CASE STUDY (internal DeepLearnHQ project)
          ════════════════════════════════════════════════════════════ */}
      <section className="px-4 py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#000000' }}>
        <div className="mx-auto max-w-7xl">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest text-center"
            style={{ color: '#777169' }}
          >
            Our work
          </p>
          <h2
            className="mb-4 text-center text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.08]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-0.96px',
              color: '#ffffff',
            }}
          >
            {data.internalCaseStudy.title}
          </h2>
          <p
            className="mb-12 text-center text-base leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif', color: 'rgba(255,255,255,0.7)' }}
          >
            {data.internalCaseStudy.description}
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mb-10">
            {data.internalCaseStudy.results.map((r, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: '#ffffff' }}
                >
                  {r.value}
                </p>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ fontFamily: '"Inter", sans-serif', color: 'rgba(255,255,255,0.5)' }}
                >
                  {r.metric}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={`/work/${data.internalCaseStudy.slug}`}
              className="inline-flex items-center px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                fontFamily: '"Inter", sans-serif',
                backgroundColor: '#ffffff',
                color: '#000000',
                borderRadius: '9999px',
              }}
            >
              Read Full Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TECHNOLOGIES
          ════════════════════════════════════════════════════════════ */}
      <section className="px-4 py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest text-center"
            style={{ color: '#777169' }}
          >
            Tech stack
          </p>
          <h2
            className="mb-12 text-center text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.08]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-0.96px',
              color: '#000000',
            }}
          >
            Built with the best tools
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '9999px',
                  color: '#000000',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FAQs
          ════════════════════════════════════════════════════════════ */}
      <section className="px-4 py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#f5f2ef' }}>
        <div className="mx-auto max-w-3xl">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest text-center"
            style={{ color: '#777169' }}
          >
            FAQs
          </p>
          <h2
            className="mb-12 text-center text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.08]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-0.96px',
              color: '#000000',
            }}
          >
            Common questions
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className="group"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: elevenlabsCardShadow,
                }}
              >
                <summary
                  className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                >
                  {faq.question}
                  <span className="ml-4 text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════════════ */}
      <section className="px-4 py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#000000' }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-4 text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.08]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-0.96px',
              color: '#ffffff',
            }}
          >
            {data.ctaHeading}
          </h2>
          <p
            className="mb-8 text-lg leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif', color: 'rgba(255,255,255,0.7)' }}
          >
            {data.ctaDescription}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                fontFamily: '"Inter", sans-serif',
                backgroundColor: '#ffffff',
                color: '#000000',
                borderRadius: '9999px',
              }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center px-8 py-4 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                fontFamily: '"Inter", sans-serif',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                borderRadius: '9999px',
              }}
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
