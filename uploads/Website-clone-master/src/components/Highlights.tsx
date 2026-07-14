"use client";

import { useState, useEffect, useRef } from "react";

const highlights = [
  {
    title: "SeekhoAI Platform Demo - Learn AI in your native language",
    image: "/images/highlights/seekhoai-demo.webp",
  },
  {
    title: "How DeepLearnHQ Scaled 35,000+ Learners on SeekhoAI",
    image: "/images/highlights/seekhoai-scale.webp",
  },
  {
    title: "Building Intelligent Systems - DeepLearnHQ Engineering Insights",
    image: "/images/highlights/engineering-insights.webp",
  },
];

export default function Highlights() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
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
            FEATURED
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
            Watch Our Impact
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              letterSpacing: "0.18px",
              color: "#4e4e4e",
              marginTop: "16px",
            }}
          >
            See how we build intelligent solutions that matter
          </p>
        </div>

        {/* Video thumbnail grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Thumbnail with play button */}
              <div
                className="relative rounded-xl overflow-hidden aspect-video group-hover:scale-[1.03] transition-all duration-300"
                style={{
                  backgroundColor: "#f5f5f5",
                  boxShadow:
                    "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      boxShadow:
                        "rgba(0,0,0,0.1) 0px 4px 12px, rgba(0,0,0,0.06) 0px 1px 4px",
                    }}
                  >
                    <svg
                      className="w-6 h-6 ml-1"
                      style={{ color: "#000000" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <p
                className="mt-4 transition-colors duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  letterSpacing: "0.18px",
                  color: isVisible ? "#4e4e4e" : "#777169",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
