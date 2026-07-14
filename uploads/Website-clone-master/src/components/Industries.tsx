"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Industry {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    title: "Finance",
    description:
      "AI compliance. Fraud detection. Automated trading systems. Fintech that's fast and fair.",
    slug: "finance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "Telehealth. EHR optimization. Diagnostic AI. Care that scales with intelligence.",
    slug: "healthcare",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Education",
    description:
      "Learning platforms. AI tutoring. Predictive student success. Teaching machines that learn.",
    slug: "education",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    description:
      "Property matching. Valuation automation. Market intelligence. Real estate, AI-powered.",
    slug: "real-estate",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Technology",
    description:
      "DevOps automation. Cloud migration. SaaS product innovation. Building for builders.",
    slug: "technology",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
  },
  {
    title: "Retail",
    description:
      "Demand forecasting. Inventory optimization. Personalization engines. Retail that understands customers.",
    slug: "retail",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

const cardShadow =
  "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px";

export default function Industries() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
            observer.disconnect();
          }
        },
        { threshold: 0.01, rootMargin: "100px" }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 400,
              letterSpacing: "0.18px",
              color: "#777169",
              textTransform: "uppercase",
            }}
          >
            Industries We Serve
          </span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              marginTop: "12px",
            }}
          >
            Industries We Serve
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              letterSpacing: "0.18px",
              color: "#4e4e4e",
              marginTop: "20px",
            }}
          >
            Every industry needs smarter software. We work with these the most.
          </p>
        </div>

        {/* Industry cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group relative overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: cardShadow,
                padding: "32px",
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index) ? "none" : "translateY(40px)",
                transition:
                  "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.4s ease",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Black top accent bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: "#000000" }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(0,0,0,0.04)",
                  color: "#4e4e4e",
                }}
              >
                {industry.icon}
              </div>

              {/* Content */}
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: "1.375rem",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "#000000",
                  marginBottom: "12px",
                }}
              >
                {industry.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  letterSpacing: "0.18px",
                  color: "#4e4e4e",
                  marginBottom: "20px",
                }}
              >
                {industry.description}
              </p>

              {/* Link */}
              <Link
                href={`/industries/${industry.slug}/`}
                className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: "#000000",
                }}
              >
                Learn More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
