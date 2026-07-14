"use client";

import { useRef } from "react";

interface Award {
  platform: string;
  platformStyle: string;
  rating: number;
  description: string;
}

const awards: Award[] = [
  {
    platform: "Clutch",
    platformStyle: "clutch",
    rating: 5.0,
    description:
      "Recognized as a top AI software development company by industry leaders",
  },
  {
    platform: "35,000+",
    platformStyle: "large",
    rating: 5.0,
    description:
      "Learners on SeekhoAI across 8+ countries learning AI in their native language",
  },
  {
    platform: "50+",
    platformStyle: "large",
    rating: 5.0,
    description:
      "Production AI solutions and software systems shipped for clients globally",
  },
  {
    platform: "8",
    platformStyle: "large",
    rating: 5.0,
    description:
      "Service pillars covering strategy, engineering, innovation, and more",
  },
  {
    platform: "3",
    platformStyle: "large",
    rating: 5.0,
    description:
      "Operating continents with teams in Madison (US) and Pakistan",
  },
];

const cardShadow =
  "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px";

export default function Awards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Our Impact by The Numbers
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
              maxWidth: "40rem",
            }}
          >
            AI-native engineering at scale. Building intelligent solutions that matter.
          </p>
        </div>

        {/* Horizontal scrolling carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start"
              style={{
                width: "300px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: cardShadow,
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* Top row: Platform name + rating */}
              <div className="flex items-start justify-between mb-6">
                <span
                  style={{
                    fontFamily:
                      award.platformStyle === "clutch"
                        ? '"Cormorant Garamond", serif'
                        : '"Cormorant Garamond", serif',
                    fontWeight: award.platformStyle === "clutch" ? 300 : 300,
                    fontSize:
                      award.platformStyle === "large" ? "2rem" : "1.5rem",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: "#000000",
                  }}
                >
                  {award.platform}
                </span>
                <div className="flex items-center gap-1.5" style={{ color: "#f59e0b" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "#000000",
                    }}
                  >
                    {award.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  letterSpacing: "0.18px",
                  color: "#4e4e4e",
                }}
              >
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
