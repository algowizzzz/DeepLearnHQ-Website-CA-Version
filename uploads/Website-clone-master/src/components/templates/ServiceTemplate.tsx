'use client';

import Link from 'next/link';
import type { ServicePageData } from '@/data/types';
import { serviceRichContent } from '@/data/services/richContent';

interface ServiceTemplateProps {
  data: ServicePageData;
}

const INDUSTRIES = [
  { label: 'Financial Services', href: '/industries/financial-services' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'E-Commerce & Retail', href: '/industries/ecommerce-retail' },
  { label: 'Marketing & Professional Services', href: '/industries/marketing-professional-services' },
  { label: 'Energy, Telecom & Media', href: '/industries/energy-telecom-media' },
  { label: 'Manufacturing & Logistics', href: '/industries/manufacturing-logistics' },
  { label: 'Education, Real Estate & Gov', href: '/industries/education-real-estate-government' },
];

const elevenlabsCardShadow =
  'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px';

export default function ServiceTemplate({ data }: ServiceTemplateProps) {
  const titleLower = data.title.toLowerCase();
  const richContent = serviceRichContent[data.slug] ?? null;

  /* Sub-nav items */
  const subNavItems = [
    { label: `${data.title} Services`, anchor: '#services' },
    { label: 'Deep Dive', anchor: '#deep-dive' },
    { label: 'Case Studies', anchor: '#case-studies' },
    { label: 'Industries', anchor: '#industries' },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          STICKY SUB-NAV
          ════════════════════════════════════════════════════════════ */}
      <div
        className="sticky top-[72px] z-40 hidden lg:block"
        style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-8 py-3 text-sm font-medium">
            {subNavItems.map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className="transition-colors whitespace-nowrap"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  color: '#4e4e4e',
                  letterSpacing: '0.16px',
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = '#000000')
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = '#4e4e4e')
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — HERO  (white bg)
          ════════════════════════════════════════════════════════════ */}
      <section className="relative px-4 pb-16 pt-28 md:px-8 lg:px-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
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
              {data.heroDescription && (
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
              )}
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  backgroundColor: '#000000',
                  borderRadius: '9999px',
                }}
              >
                Talk to the Team
              </Link>
            </div>

            {/* Right — hero image / mockup placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div
                  className="absolute inset-0 transform rotate-6"
                  style={{ borderRadius: '24px', backgroundColor: '#f5f5f5' }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    borderRadius: '24px',
                    backgroundColor: '#ffffff',
                    boxShadow: elevenlabsCardShadow,
                  }}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto mb-4 flex h-16 w-16 items-center justify-center"
                      style={{ borderRadius: '16px', backgroundColor: '#f5f5f5' }}
                    >
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        style={{ color: '#777169' }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p
                      className="text-sm font-medium"
                      style={{ fontFamily: '"Inter", sans-serif', color: '#777169' }}
                    >
                      {data.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2 — SERVICES GRID  (white bg, rounded cards)
          ════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: '#000000',
              letterSpacing: '-0.02em',
            }}
          >
            our <em style={{ fontStyle: 'italic' }}>{titleLower}</em> services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8"
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  boxShadow: elevenlabsCardShadow,
                }}
              >
                <h3
                  className="mb-3 text-base font-medium"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    color: '#000000',
                    letterSpacing: '0.16px',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    color: '#4e4e4e',
                    letterSpacing: '0.16px',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 3 — DEEP DIVE CONTENT  (#f5f5f5 bg)
          ════════════════════════════════════════════════════════════ */}
      {richContent && (
        <section id="deep-dive" className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rich-content"
              dangerouslySetInnerHTML={{ __html: richContent }}
              style={{
                fontFamily: '"Inter", sans-serif',
                color: '#4e4e4e',
                lineHeight: 1.75,
                letterSpacing: '0.16px',
              }}
            />
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════
          SECTION 4 — MID-PAGE CTA  (warm stone bg #f5f2ef)
          ════════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: '#f5f2ef' }}>
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest"
            style={{ fontFamily: '"Inter", sans-serif', color: '#777169' }}
          >
            Let&apos;s work together
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: '#000000',
              letterSpacing: '-0.02em',
            }}
          >
            ready for game-changing{' '}
            <em style={{ fontStyle: 'italic' }}>{titleLower}</em>?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{
              fontFamily: '"Inter", sans-serif',
              backgroundColor: '#000000',
              borderRadius: '9999px',
            }}
          >
            Request Consultation
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 5 — INDUSTRIES SERVED  (white bg)
          ════════════════════════════════════════════════════════════ */}
      <section id="industries" className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: '#000000',
              letterSpacing: '-0.02em',
            }}
          >
            Industries we serve
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group flex items-center gap-4 p-6 transition-shadow hover:shadow-md"
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  boxShadow: elevenlabsCardShadow,
                }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center"
                  style={{ borderRadius: '12px', backgroundColor: '#f5f5f5' }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    style={{ color: '#777169' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <p
                  className="text-sm font-medium group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                >
                  {industry.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 6 — FOOTER CTA  (warm stone #f5f2ef)
          ════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: '#f5f2ef' }}>
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest"
            style={{ fontFamily: '"Inter", sans-serif', color: '#777169' }}
          >
            Get in touch
          </p>
          <h2
            className="mb-8"
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
          </Link>
        </div>
      </section>
    </>
  );
}
