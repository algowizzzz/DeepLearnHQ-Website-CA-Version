import Link from 'next/link';
import type { CaseStudyPageData } from '@/data/types';

interface CaseStudyTemplateProps {
  data: CaseStudyPageData;
}

const elevenlabsCardShadow =
  'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px';

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <>
      {/* Hero — warm stone background */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f5f2ef' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Project logo placeholder */}
          {data.heroImage ? (
            <img
              src={data.heroImage}
              alt={`${data.client} logo`}
              className="h-16 md:h-20 mx-auto mb-8 object-contain"
            />
          ) : (
            <div
              className="w-20 h-20 mx-auto mb-8 flex items-center justify-center"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: elevenlabsCardShadow,
              }}
            >
              <span
                className="text-2xl font-light"
                style={{ fontFamily: '"Cormorant Garamond", serif', color: '#777169' }}
              >
                {data.client?.charAt(0) || 'P'}
              </span>
            </div>
          )}

          {/* Title */}
          <h1
            className="mb-6 leading-[1.08]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
              letterSpacing: '-0.96px',
              color: '#000000',
            }}
          >
            {data.title}
          </h1>

          {/* Category tag */}
          <span
            className="inline-block text-sm font-medium px-5 py-2"
            style={{
              fontFamily: '"Inter", sans-serif',
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '9999px',
              letterSpacing: '0.16px',
            }}
          >
            {data.category}
          </span>
        </div>
      </section>


      {/* Project Details — Overview, Challenge, Solution */}
      {(data.overview || data.challenge || data.solution) && (
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Overview */}
            {data.overview && (
              <div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                    color: '#000000',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Overview
                </h2>
                <p
                  className="leading-relaxed text-lg"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e', letterSpacing: '0.16px' }}
                >
                  {data.overview}
                </p>
              </div>
            )}

            {/* Challenge */}
            {data.challenge && (
              <div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                    color: '#000000',
                    letterSpacing: '-0.02em',
                  }}
                >
                  The Challenge
                </h2>
                <p
                  className="leading-relaxed text-lg"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e', letterSpacing: '0.16px' }}
                >
                  {data.challenge}
                </p>
              </div>
            )}

            {/* Solution */}
            {data.solution && (
              <div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                    color: '#000000',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Our Solution
                </h2>
                <p
                  className="leading-relaxed text-lg"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e', letterSpacing: '0.16px' }}
                >
                  {data.solution}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Results Metrics Cards */}
      {data.results.length > 0 && (
        <section className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-center mb-12"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                color: '#000000',
                letterSpacing: '-0.02em',
              }}
            >
              Results
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.results.map((result, index) => (
                <div
                  key={index}
                  className="p-8 text-center"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#ffffff',
                    boxShadow: elevenlabsCardShadow,
                  }}
                >
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                      color: '#000000',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.08,
                    }}
                  >
                    {result.value}
                  </p>
                  <p
                    className="font-medium text-base mb-1"
                    style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                  >
                    {result.metric}
                  </p>
                  {result.description && (
                    <p
                      className="text-sm"
                      style={{ fontFamily: '"Inter", sans-serif', color: '#777169' }}
                    >
                      {result.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Used */}
      {data.technologies.length > 0 && (
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-center mb-10"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                color: '#000000',
                letterSpacing: '-0.02em',
              }}
            >
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    backgroundColor: '#ffffff',
                    color: '#4e4e4e',
                    borderRadius: '9999px',
                    letterSpacing: '0.16px',
                    boxShadow: elevenlabsCardShadow,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {data.testimonial && (
        <section className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <svg
              className="w-10 h-10 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'rgba(119,113,105,0.3)' }}
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                color: '#000000',
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
              }}
            >
              &ldquo;{data.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p
                className="font-medium text-base"
                style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
              >
                {data.testimonial.name}
              </p>
              <p
                className="text-sm mt-1"
                style={{ fontFamily: '"Inter", sans-serif', color: '#777169' }}
              >
                {data.testimonial.role}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-24" style={{ backgroundColor: '#f5f2ef' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest"
            style={{ fontFamily: '"Inter", sans-serif', color: '#777169' }}
          >
            Get in touch
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#000000',
              letterSpacing: '-0.96px',
              lineHeight: 1.08,
            }}
          >
            Let&apos;s bring your vision to life
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e', letterSpacing: '0.16px' }}
          >
            Ready to build something remarkable together?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{
              fontFamily: '"Inter", sans-serif',
              backgroundColor: '#000000',
              borderRadius: '9999px',
            }}
          >
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
