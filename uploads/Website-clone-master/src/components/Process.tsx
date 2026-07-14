"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Step {
  number: string;
  total: string;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    number: "01",
    total: "06",
    title: "Discover",
    description:
      "We listen. We dig into your challenge. We align on what success actually looks like.",
    image: "/images/process/discover.webp",
  },
  {
    number: "02",
    total: "06",
    title: "Design",
    description:
      "We map systems. We prototype solutions. We validate with your team before building.",
    image: "/images/process/design.webp",
  },
  {
    number: "03",
    total: "06",
    title: "Build",
    description:
      "Engineers ship. We code with intention. Modular. Testable. Built for evolution.",
    image: "/images/process/build.webp",
  },
  {
    number: "04",
    total: "06",
    title: "Test",
    description:
      "We break your software on purpose. QA rigor + AI-powered validation = confidence.",
    image: "/images/process/test.webp",
  },
  {
    number: "05",
    total: "06",
    title: "Launch",
    description:
      "It ships. Monitoring live. Support ready. We own the outcome from day one.",
    image: "/images/process/launch.webp",
  },
  {
    number: "06",
    total: "06",
    title: "Evolve",
    description:
      "Software isn't finished. We optimize, scale, and adapt based on real usage and feedback.",
    image: "/images/process/evolve.webp",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const sectionRect = sectionEl.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.4;

      let currentActive = 0;
      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          currentActive = index;
        }
      });

      if (sectionRect.top > triggerPoint) {
        currentActive = 0;
      }

      setActiveStep(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
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
            How We Work
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              letterSpacing: "0.18px",
              color: "#4e4e4e",
              marginTop: "12px",
            }}
          >
            Six phases. Clear thinking at every step.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT: Vertical timeline */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep > index;

                return (
                  <div
                    key={step.number}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="relative pl-8 lg:pl-10"
                  >
                    {/* Vertical timeline line */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-500"
                      style={{
                        backgroundColor: isActive
                          ? "#000000"
                          : isPast
                          ? "rgba(0,0,0,0.2)"
                          : "#e5e5e5",
                      }}
                    />

                    {/* Timeline dot */}
                    <div
                      className="absolute left-[-5px] top-6 w-3 h-3 rounded-full border-2 transition-all duration-500"
                      style={{
                        backgroundColor: isActive
                          ? "#000000"
                          : isPast
                          ? "rgba(0,0,0,0.2)"
                          : "transparent",
                        borderColor: isActive
                          ? "#000000"
                          : isPast
                          ? "rgba(0,0,0,0.2)"
                          : "#e5e5e5",
                        boxShadow: isActive ? "0 0 10px rgba(0,0,0,0.2)" : "none",
                      }}
                    />

                    <div
                      className="pb-12 lg:pb-16"
                      style={{
                        opacity: isActive ? 1 : 0.45,
                        transition: "opacity 0.5s ease",
                      }}
                    >
                      {/* Step counter */}
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.8125rem",
                          fontWeight: 400,
                          letterSpacing: "0.1em",
                          color: "#777169",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {step.number}/{step.total}
                      </span>

                      {/* Step title */}
                      <h3
                        style={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 300,
                          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                          lineHeight: 1.08,
                          letterSpacing: "-0.02em",
                          fontStyle: "italic",
                          color: isActive ? "#000000" : "#777169",
                          marginTop: "8px",
                          marginBottom: "12px",
                          transition: "color 0.5s ease",
                        }}
                      >
                        {step.title}
                      </h3>

                      {/* Step description */}
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                          letterSpacing: "0.18px",
                          color: "#4e4e4e",
                          maxWidth: "28rem",
                          transition: "color 0.5s ease",
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Mobile image */}
                      <div className="lg:hidden mt-6">
                        <div
                          className="relative w-full aspect-square max-w-[320px] rounded-2xl overflow-hidden"
                          style={{
                            opacity: isActive ? 1 : 0.3,
                            transform: isActive ? "scale(1)" : "scale(0.95)",
                            transition: "opacity 0.5s ease, transform 0.5s ease",
                          }}
                        >
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-contain"
                            sizes="320px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Sticky illustration image (desktop only) */}
          <div className="hidden lg:block w-1/2">
            <div className="sticky top-32">
              <div className="relative w-full aspect-square max-w-[540px] ml-auto">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="absolute inset-0"
                    style={{
                      opacity: activeStep === index ? 1 : 0,
                      transform: activeStep === index ? "scale(1)" : "scale(0.95)",
                      transition: "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain drop-shadow-xl"
                      sizes="(max-width: 1024px) 0px, 540px"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
