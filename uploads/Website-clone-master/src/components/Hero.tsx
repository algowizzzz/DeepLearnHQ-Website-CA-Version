"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const services = [
  "software that\nthinks.",
  "software that\nlearns.",
  "software that\nadapts.",
  "software that\nships.",
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      const next = currentWord.slice(0, displayText.length + 1);
      setDisplayText(next);

      if (next === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      const next = currentWord.slice(0, displayText.length - 1);
      setDisplayText(next);

      if (next === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}

const clientLogos = [
  { name: "Tissot", src: null },
  { name: "Converse", src: null },
  { name: "Ray-Ban", src: null },
  { name: "WFMU", src: null },
  { name: "Michaels", src: "/images/logos/michaels.svg" },
  { name: "Walmart", src: null },
  { name: "Politico", src: null },
  { name: "DreamWorks", src: "/images/logos/dreamworks.svg" },
  { name: "Samsung", src: null },
  { name: "Canon", src: null },
  { name: "Emirates", src: null },
  { name: "Careem", src: null },
];

export default function Hero() {
  const typedText = useTypewriter(services, 80, 40, 2000);
  const lines = typedText.split("\n");

  return (
    <section
      className="relative w-full flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}
    >
      {/* Main content */}
      <div
        className="relative flex-1 flex items-center w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12"
        style={{ zIndex: 10 }}
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Eyebrow text */}
          <div className="mb-4 inline-block">
            <span
              style={{
                color: "#777169",
                fontSize: "0.875rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.18px",
                textTransform: "uppercase",
              }}
            >
              AI-Native Software Studio
            </span>
          </div>

          {/* Heading with typewriter animation */}
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              minHeight: "clamp(10rem, 25vw, 20rem)",
              color: "#000000",
            }}
          >
            <span>We build </span>
            {lines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                <span style={{ color: "#000000", fontStyle: "italic" }}>{line}</span>
              </span>
            ))}
            <span
              className="animate-blink"
              style={{
                color: "#000000",
                fontStyle: "normal",
                fontWeight: 300,
                marginLeft: "2px",
              }}
            >
              |
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              letterSpacing: "0.18px",
              color: "#4e4e4e",
              maxWidth: "600px",
            }}
          >
            End-to-end AI solutions, from strategy to scale. We engineer intelligent products. We modernize legacy systems. We teach what we build.
          </p>
        </div>

        {/* Black circle CTA - positioned on the right, vertically centered */}
        <Link
          href="/contact"
          className="hidden md:flex absolute right-8 md:right-16 lg:right-24 xl:right-32 top-[55%] -translate-y-1/2 group"
          style={{
            zIndex: 20,
            transition: "opacity 1s ease 0.5s, transform 1s ease 0.5s",
          }}
          aria-label="Get started"
        >
          <div
            className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-full flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: "#000000",
              boxShadow: "rgba(0,0,0,0.15) 0px 8px 24px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#ffffff",
                textAlign: "center",
                lineHeight: 1.4,
                padding: "0 8px",
              }}
            >
              Get<br />Started
            </span>
          </div>
        </Link>
      </div>

      {/* Scrolling logo marquee */}
      <div
        className="relative z-10 w-full overflow-hidden py-6 sm:py-8"
        style={{
          borderTop: "1px solid rgba(0,0,0,0.05)",
          opacity: 1,
          transition: "opacity 1s ease 0.7s",
        }}
      >
        {/* Gradient fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {/* First set of logos */}
          {clientLogos.map((logo, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-10 md:mx-12"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 sm:h-8 w-auto"
                  style={{
                    filter: "brightness(0)",
                    opacity: 0.35,
                  }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#777169",
                    opacity: 0.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}

          {/* Duplicate set for seamless infinite scroll */}
          {clientLogos.map((logo, i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-10 md:mx-12"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 sm:h-8 w-auto"
                  style={{
                    filter: "brightness(0)",
                    opacity: 0.35,
                  }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#777169",
                    opacity: 0.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
