"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "DeepLearnHQ understood my vision from the beginning and translated it into a product our customers love. They didn't just execute, they problem-solved alongside us.",
    name: "Kimberly A. Dalius",
    title: "Founder",
    company: "Pauseitive LLC",
    rating: 5,
    logo: "/images/testimonials/pauseitive.svg",
  },
  {
    quote:
      "Working with DeepLearnHQ felt like having a co-founder who understood both technology and business. They shipped faster than any team we've worked with.",
    name: "Jason Rivera",
    title: "Co-Founder",
    company: "PartyShark",
    rating: 5,
    logo: "/images/testimonials/partyshark.svg",
  },
  {
    quote:
      "DeepLearnHQ gave us the technical edge we needed to scale. Their AI expertise took our platform from good to exceptional. Real partners, not just vendors.",
    name: "Priya Sharma",
    title: "CEO",
    company: "Foodly Technologies",
    rating: 5,
    logo: "/images/testimonials/foodly.svg",
  },
  {
    quote:
      "The professionalism, responsiveness, and quality of work from DeepLearnHQ exceeded our expectations. They delivered on every commitment and then some.",
    name: "Michael Chen",
    title: "Product Director",
    company: "TechFlow",
    rating: 5,
    logo: "/images/testimonials/techflow.svg",
  },
];

const cardShadow =
  "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5"
          style={{ color: i < rating ? "#f59e0b" : "#e5e5e5" }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            testimonials
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
            Words from Clients
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
            What the people we work with have to say.
          </p>

          {/* Review badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            {/* Clutch badge */}
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#000000",
                  letterSpacing: "0.05em",
                }}
              >
                CLUTCH
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  color: "#777169",
                }}
              >
                52 REVIEWS
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            {/* GoodFirms badge */}
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#000000",
                  letterSpacing: "0.05em",
                }}
              >
                GoodFirms
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  color: "#777169",
                }}
              >
                32 REVIEWS
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div
                    className="rounded-2xl p-8 sm:p-12 text-center"
                    style={{
                      backgroundColor: "#ffffff",
                      boxShadow: cardShadow,
                    }}
                  >
                    {/* Quote icon */}
                    <div className="flex justify-center mb-6">
                      <svg
                        className="w-12 h-12"
                        style={{ color: "rgba(0,0,0,0.08)" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                      </svg>
                    </div>

                    {/* Quote */}
                    <p
                      style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 300,
                        fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                        lineHeight: 1.5,
                        letterSpacing: "-0.01em",
                        color: "#000000",
                        fontStyle: "italic",
                        marginBottom: "32px",
                      }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      {/* Black circle avatar with initials */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                        style={{ backgroundColor: "#000000" }}
                      >
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            color: "#ffffff",
                          }}
                        >
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: "#000000",
                        }}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          fontSize: "0.875rem",
                          letterSpacing: "0.18px",
                          color: "#777169",
                          marginTop: "4px",
                        }}
                      >
                        {testimonial.title} &middot; {testimonial.company}
                      </p>
                      <div className="flex justify-center mt-3">
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical progress indicator on the right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center -mr-10">
            <div
              className="w-1 h-32 rounded-full overflow-hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
            >
              <div
                className="w-full rounded-full transition-all duration-700"
                style={{
                  height: `${((current + 1) / testimonials.length) * 100}%`,
                  backgroundColor: "#000000",
                }}
              />
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: current === index ? "40px" : "12px",
                  height: "12px",
                  backgroundColor:
                    current === index ? "#000000" : "rgba(0,0,0,0.15)",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
