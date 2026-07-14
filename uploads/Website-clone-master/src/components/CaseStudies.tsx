"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "SeekhoAI",
    subtitle: "AI Education at Scale",
    description:
      "We built a bilingual AI education platform in English and Urdu. Practical. Affordable. Accessible. Students from Pakistan to North America are leveling up their skills.",
    image: "/images/casestudies/seekhoai.webp",
    slug: "seekhoai",
  },
  {
    title: "DoHuub",
    subtitle: "Intelligent Workflow Management",
    description:
      "An AI-powered collaboration platform that understands your workflow. Smart routing. Predictive task assignment. No more email chaos.",
    image: "/images/casestudies/dohuub.webp",
    slug: "dohuub",
  },
  {
    title: "BehaveBridge",
    subtitle: "Behavioral Health at Your Fingertips",
    description:
      "Telehealth meets AI. We engineered a platform that matches patients to providers, predicts no-shows, and delivers care that scales.",
    image: "/images/casestudies/behavebridge.webp",
    slug: "behavebridge",
  },
  {
    title: "UrgentCareX",
    subtitle: "Emergency Care, Optimized",
    description:
      "AI-driven urgent care management. Triage intelligence. Patient flow optimization. Reducing wait times and improving outcomes in real time.",
    image: "/images/casestudies/urgentcarex.webp",
    slug: "urgentcarex",
  },
];

const cardShadow =
  "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px";

export default function CaseStudies() {
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
        {/* Section header */}
        <div className="mb-14">
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
            built with purpose
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
            Real projects. Real impact.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: cardShadow,
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index) ? "none" : "translateY(40px)",
                transition:
                  "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.5s ease",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Image area */}
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.5rem",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: "#000000",
                    marginBottom: "4px",
                  }}
                >
                  {study.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.8125rem",
                    letterSpacing: "0.18px",
                    color: "#777169",
                    marginBottom: "12px",
                  }}
                >
                  {study.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    letterSpacing: "0.18px",
                    color: "#4e4e4e",
                    marginBottom: "20px",
                  }}
                >
                  {study.description}
                </p>
                <Link
                  href={`/work/${study.slug}/`}
                  className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    color: "#000000",
                  }}
                >
                  View Case Study
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
            </div>
          ))}
        </div>

        {/* More link */}
        <div className="mt-14 text-center">
          <Link
            href="/work/"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:opacity-70"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
              color: "#000000",
              borderBottom: "1px solid #000000",
              paddingBottom: "4px",
            }}
          >
            More case studies
            <svg
              className="w-5 h-5"
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
      </div>
    </section>
  );
}
