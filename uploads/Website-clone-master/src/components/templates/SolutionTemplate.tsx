'use client';

import type { SolutionPageData } from '@/data/types';
import Link from 'next/link';
import { useRef } from 'react';

interface SolutionTemplateProps {
  data: SolutionPageData;
}

/* ---------- helpers ---------- */

/** Split "DeepLearnHQ HappyForce" into brandName ("HappyForce") and org ("DeepLearnHQ") */
function extractProductName(title: string) {
  const parts = title.split(' ');
  if (parts.length > 1 && parts[0].toLowerCase().includes('deeplearn')) {
    return { brand: parts[0], product: parts.slice(1).join(' ') };
  }
  return { brand: '', product: title };
}

/** Render heading with the product name highlighted in blue */
function renderHeroHeading(heading: string, product: string) {
  if (!product) return <>{heading}</>;
  const idx = heading.indexOf(product);
  if (idx === -1) return <>{heading}</>;
  return (
    <>
      {heading.slice(0, idx)}
      <span className="text-[#1E6FD9]">{product}</span>
      {heading.slice(idx + product.length)}
    </>
  );
}

/* ---------- icons ---------- */

function PlayIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ChevronLeft({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURE ICON placeholder — returns a simple abstract icon per idx */
/* ------------------------------------------------------------------ */
function FeatureIcon({ index }: { index: number }) {
  const icons = [
    // calendar / time-off
    <svg key="0" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5}/><path strokeWidth={1.5} d="M16 2v4M8 2v4M3 10h18"/></svg>,
    // chart / reports
    <svg key="1" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d="M3 3v18h18"/><path strokeWidth={1.5} d="M7 17V13m4 4V9m4 8v-6m4 6V7"/></svg>,
    // people / recruitment
    <svg key="2" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4" strokeWidth={1.5}/><path strokeWidth={1.5} d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"/><path strokeWidth={1.5} d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87"/></svg>,
    // user / employees
    <svg key="3" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" strokeWidth={1.5}/><path strokeWidth={1.5} d="M5 21v-2a7 7 0 0114 0v2"/></svg>,
    // star / performance
    <svg key="4" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>,
    // megaphone / announcements
    <svg key="5" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path strokeWidth={1.5} d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
    // cog / settings
    <svg key="6" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" strokeWidth={1.5}/><path strokeWidth={1.5} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001.08 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z"/></svg>,
    // shield / access
    <svg key="7" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    // clipboard / task
    <svg key="8" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1" strokeWidth={1.5}/></svg>,
    // zap / automation
    <svg key="9" className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  ];
  return icons[index % icons.length];
}

/* ================================================================== */
/*                        MAIN COMPONENT                               */
/* ================================================================== */

export default function SolutionTemplate({ data }: SolutionTemplateProps) {
  const { product } = extractProductName(data.title);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 320;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  /* derive a "type" word from the tagline for the features heading */
  const solutionType = data.tagline.toLowerCase().includes('hr')
    ? 'HR'
    : data.tagline.toLowerCase().includes('rpg')
      ? 'gaming'
      : data.tagline.toLowerCase().includes('e-commerce') || data.tagline.toLowerCase().includes('commerce')
        ? 'e-commerce'
        : data.tagline.toLowerCase().includes('messaging') || data.tagline.toLowerCase().includes('communication')
          ? 'communication'
          : data.tagline.toLowerCase().includes('delivery') || data.tagline.toLowerCase().includes('logistics')
            ? 'logistics'
            : data.tagline.toLowerCase().includes('blockchain') || data.tagline.toLowerCase().includes('supply chain')
              ? 'supply chain'
              : data.tagline.toLowerCase().includes('analytics') || data.tagline.toLowerCase().includes('intelligence')
                ? 'analytics'
                : data.tagline.toLowerCase().includes('social')
                  ? 'social'
                  : data.tagline.toLowerCase().includes('event')
                    ? 'event management'
                    : data.tagline.toLowerCase().includes('chatbot') || data.tagline.toLowerCase().includes('conversational')
                      ? 'conversational AI'
                      : 'business';

  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — HERO                                            */}
      {/* ============================================================ */}
      <section className="bg-[#fdf8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column — text */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/solutions" className="hover:text-[#1E6FD9] transition-colors">
                  Solutions
                </Link>
                <span>/</span>
                <span className="text-gray-800 font-medium">{data.title}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight text-[#0B0C0D] mb-6">
                {renderHeroHeading(data.heroHeading, product)}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
                {data.heroDescription}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#0B0C0D] text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#1E6FD9] transition-colors duration-300"
                >
                  Get in Touch
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B0C0D] hover:text-[#1E6FD9] transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0B0C0D] hover:border-[#1E6FD9] transition-colors">
                    <PlayIcon className="w-4 h-4" />
                  </span>
                  Play Now
                </button>
              </div>
            </div>

            {/* Right column — hero image placeholder */}
            <div className="relative flex items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1E6FD9]/10 via-[#1E6FD9]/5 to-transparent border border-[#1E6FD9]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-[#1E6FD9]/10 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#1E6FD9]/60 font-medium">{data.title} Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 — FEATURE CAROUSEL                                */}
      {/* ============================================================ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Carousel header with nav arrows */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C0D]">
              Explore <span className="text-[#1E6FD9]">{product || data.title}</span> Features
            </h2>
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#1E6FD9] hover:text-[#1E6FD9] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#1E6FD9] hover:text-[#1E6FD9] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Horizontal scrolling cards */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.features.map((feature, i) => (
              <article
                key={i}
                className="flex-shrink-0 w-[280px] snap-start bg-gray-50 rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#1E6FD9]/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E6FD9]/10 flex items-center justify-center mb-4 group-hover:bg-[#1E6FD9]/20 transition-colors">
                  <FeatureIcon index={i} />
                </div>
                <h3 className="text-base font-bold text-[#0B0C0D] mb-2 group-hover:text-[#1E6FD9] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — FEATURES DETAIL GRID                           */}
      {/* ============================================================ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading — lowercase style with blue accent */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] leading-tight mb-5">
              comprehensive{' '}
              <span className="text-[#1E6FD9]">{product || data.title}</span>{' '}
              solution for your end-to-end{' '}
              <span className="text-[#1E6FD9]">{solutionType}</span>{' '}
              needs
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {data.tagline}
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border border-gray-100 hover:border-[#1E6FD9]/30 hover:shadow-md transition-all duration-300"
              >
                {/* Icon placeholder */}
                <div className="w-14 h-14 rounded-xl bg-[#1E6FD9]/10 flex items-center justify-center mb-5 group-hover:bg-[#1E6FD9]/15 transition-colors">
                  <FeatureIcon index={i} />
                </div>

                <h3 className="text-lg font-bold text-[#0B0C0D] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — FOOTER CTA (dark bg)                           */}
      {/* ============================================================ */}
      <section className="bg-[#0B0C0D] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Pull the Trigger!
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with{' '}
            <span className="text-[#1E6FD9]">{product || data.title}</span>.
            Our team is ready to help you get started.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#1E6FD9] text-white text-sm font-semibold px-10 py-4 rounded-full hover:bg-[#1858b0] transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
