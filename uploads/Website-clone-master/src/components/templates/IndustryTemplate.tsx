'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import type { IndustryPageData } from '@/data/types';
import TechStack from '@/components/shared/TechStack';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTASection from '@/components/shared/CTASection';

interface IndustryTemplateProps {
  data: IndustryPageData;
}

const elevenlabsCardShadow =
  'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px';

export default function IndustryTemplate({ data }: IndustryTemplateProps) {
  /* ------------------------------------------------------------------ */
  /*  Sticky sub-nav state                                               */
  /* ------------------------------------------------------------------ */
  const [activeAnchor, setActiveAnchor] = useState<string>('#solutions');
  const subNavRef = useRef<HTMLDivElement>(null);

  const subNavItems = [
    { label: 'Solutions', anchor: '#solutions' },
    ...(data.caseStudies.length > 0
      ? [{ label: 'Case Studies', anchor: '#case-studies' }]
      : []),
    { label: 'Staff Aug', anchor: '#staff-augmentation' },
    ...(data.technologies.length > 0
      ? [{ label: 'Tech Stack', anchor: '#tech-stack' }]
      : []),
    { label: 'Contact', anchor: '#contact' },
  ];

  useEffect(() => {
    const ids = subNavItems.map((i) => i.anchor.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveAnchor(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Case-studies carousel state                                        */
  /* ------------------------------------------------------------------ */
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.offsetWidth * 0.7;
    carouselRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  return (
    <>
      {/* ============================================================= */}
      {/* SECTION 1 : Hero  (white bg)                                   */}
      {/* ============================================================= */}
      <section
        className="relative px-4 pb-20 pt-28 md:px-8 lg:px-16"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse items-start justify-between gap-10 lg:flex-row lg:items-center">
            {/* Left: text */}
            <div className="max-w-3xl">
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
                  className="leading-relaxed"
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
            </div>

            {/* Right: badge placeholder */}
            <div className="hidden flex-shrink-0 lg:block" />
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 2 : Sticky sub-navigation                             */}
      {/* ============================================================= */}
      <div
        ref={subNavRef}
        className="sticky top-[72px] z-40 hidden lg:block"
        style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: '#ffffff' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-10 text-sm font-medium">
            {subNavItems.map((item) => {
              const isActive = activeAnchor === item.anchor;
              return (
                <a
                  key={item.anchor}
                  href={item.anchor}
                  className="relative whitespace-nowrap py-4 transition-colors"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    color: isActive ? '#000000' : '#4e4e4e',
                    letterSpacing: '0.16px',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] w-full"
                      style={{ backgroundColor: '#000000' }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SECTION 3 : Solutions (services grid)                          */}
      {/* ============================================================= */}
      <section id="solutions" className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                color: '#000000',
                letterSpacing: '-0.02em',
              }}
            >
              Our{' '}
              <em style={{ fontStyle: 'italic' }}>{data.title}</em>{' '}
              Solutions
            </h2>
            <p
              className="mt-4 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e', letterSpacing: '0.16px' }}
            >
              We offer specialized technology services tailored to the unique
              needs of the {data.title.toLowerCase()} industry.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {data.services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 transition-all duration-300"
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  boxShadow: elevenlabsCardShadow,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-sm font-medium"
                    style={{
                      borderRadius: '10px',
                      backgroundColor: '#f5f5f5',
                      color: '#777169',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-base font-medium"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        color: '#000000',
                        letterSpacing: '0.16px',
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        color: '#4e4e4e',
                        letterSpacing: '0.16px',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 4 : CTA warm stone banner                              */}
      {/* ============================================================= */}
      <section
        className="px-4 py-16 md:px-8 lg:px-16"
        style={{ backgroundColor: '#f5f2ef' }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Left: decorative placeholder */}
          <div className="hidden w-60 flex-shrink-0 lg:block">
            <div
              className="aspect-square flex items-center justify-center"
              style={{ borderRadius: '16px', backgroundColor: 'rgba(245,242,239,0.8)' }}
            >
              <div
                className="h-20 w-20 flex items-center justify-center"
                style={{ borderRadius: '50%', backgroundColor: '#ffffff' }}
              >
                <span
                  className="text-3xl font-light"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: '#000000',
                  }}
                >
                  {data.title[0]}
                </span>
              </div>
            </div>
          </div>

          {/* Center: heading */}
          <div className="flex-1 text-center lg:text-left">
            <h2
              className="leading-snug"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: '#000000',
                letterSpacing: '-0.02em',
              }}
            >
              our team is ready to help you with{' '}
              <em style={{ fontStyle: 'italic' }}>
                {data.title.toLowerCase()}
              </em>{' '}
              solutions.
            </h2>
          </div>

          {/* Right: CTA button + arrow */}
          <div className="flex flex-shrink-0 items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{
                fontFamily: '"Inter", sans-serif',
                backgroundColor: '#000000',
                borderRadius: '9999px',
              }}
            >
              Request Consultation
            </Link>
            {/* Decorative arrow */}
            <svg
              className="hidden h-8 w-8 lg:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: '#777169' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 5 : Case Studies carousel                              */}
      {/* ============================================================= */}
      {data.caseStudies.length > 0 && (
        <section id="case-studies" className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading row */}
            <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    color: '#000000',
                    letterSpacing: '-0.02em',
                  }}
                >
                  <em style={{ fontStyle: 'italic' }}>case</em>{' '}
                  studies
                </h2>
                <p
                  className="mt-3 max-w-xl leading-relaxed"
                  style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e', letterSpacing: '0.16px' }}
                >
                  See how we have helped {data.title.toLowerCase()} companies
                  deliver successful digital solutions.
                </p>
              </div>

              {/* Carousel arrows */}
              <div className="flex gap-3">
                <button
                  onClick={() => scrollCarousel('left')}
                  aria-label="Scroll case studies left"
                  className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-60"
                  style={{
                    borderRadius: '50%',
                    border: '1px solid #e5e5e5',
                    backgroundColor: '#ffffff',
                    color: '#4e4e4e',
                  }}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  aria-label="Scroll case studies right"
                  className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-60"
                  style={{
                    borderRadius: '50%',
                    border: '1px solid #e5e5e5',
                    backgroundColor: '#ffffff',
                    color: '#4e4e4e',
                  }}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Horizontal scroll carousel */}
            <div
              ref={carouselRef}
              className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {data.caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="group w-[340px] flex-shrink-0 snap-start overflow-hidden transition-shadow hover:shadow-md sm:w-[380px]"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#ffffff',
                    boxShadow: elevenlabsCardShadow,
                  }}
                >
                  {/* Card image */}
                  {study.image ? (
                    <div className="aspect-video overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex aspect-video items-center justify-center"
                      style={{ backgroundColor: '#f5f2ef' }}
                    >
                      <span
                        className="text-2xl font-light"
                        style={{ fontFamily: '"Cormorant Garamond", serif', color: '#777169' }}
                      >
                        {study.title[0]}
                      </span>
                    </div>
                  )}

                  {/* Card body */}
                  <div className="p-6">
                    <h3
                      className="mb-2 text-base font-medium"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        color: '#000000',
                        letterSpacing: '0.16px',
                      }}
                    >
                      {study.title}
                    </h3>
                    <p
                      className="mb-4 text-sm leading-relaxed line-clamp-3"
                      style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e' }}
                    >
                      {study.description}
                    </p>
                    {study.slug && (
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium transition-all hover:gap-2"
                        style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                      >
                        View More
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* Staff Augmentation anchor (for sub-nav)                        */}
      {/* ============================================================= */}
      <section id="staff-augmentation" className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  color: '#000000',
                  letterSpacing: '-0.02em',
                }}
              >
                <em style={{ fontStyle: 'italic' }}>Staff</em> Augmentation
              </h2>
              <p
                className="mt-4 leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e', letterSpacing: '0.16px' }}
              >
                Scale your {data.title.toLowerCase()} development team with our
                pre-vetted engineers. Get dedicated professionals who integrate
                seamlessly with your existing workflows and start delivering
                results from day one.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  backgroundColor: '#000000',
                  borderRadius: '9999px',
                }}
              >
                Hire Developers
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '150+', label: 'Engineers' },
                { stat: '98%', label: 'Retention Rate' },
                { stat: '48h', label: 'Avg. Onboarding' },
                { stat: '10+', label: 'Years Experience' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 text-center"
                  style={{
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    boxShadow: elevenlabsCardShadow,
                  }}
                >
                  <p
                    className="text-2xl font-medium"
                    style={{ fontFamily: '"Inter", sans-serif', color: '#000000' }}
                  >
                    {item.stat}
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ fontFamily: '"Inter", sans-serif', color: '#777169' }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* Tech Stack                                                     */}
      {/* ============================================================= */}
      {data.technologies.length > 0 && (
        <section id="tech-stack" className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  color: '#000000',
                  letterSpacing: '-0.02em',
                }}
              >
                <em style={{ fontStyle: 'italic' }}>Tech</em> Stack
              </h2>
              <p
                className="mt-4 leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif', color: '#4e4e4e', letterSpacing: '0.16px' }}
              >
                Industry-leading technologies powering our{' '}
                {data.title.toLowerCase()} solutions.
              </p>
            </div>
            <TechStack technologies={data.technologies} />
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* FAQs                                                           */}
      {/* ============================================================= */}
      {data.faqs.length > 0 && <FAQAccordion faqs={data.faqs} />}

      {/* ============================================================= */}
      {/* SECTION : Footer CTA                                           */}
      {/* ============================================================= */}
      <div id="contact">
        <CTASection
          title="Let's bring your vision to life"
          description={`Partner with DeepLearnHQ to build transformative ${data.title.toLowerCase()} solutions that drive real results.`}
          primaryCTA={{ label: 'Get Started', href: '/contact' }}
        />
      </div>
    </>
  );
}
