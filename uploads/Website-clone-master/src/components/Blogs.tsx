"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Why Your AI Project Will Fail (And How to Fix It Before It Does)",
    category: "AI",
    date: "2 Apr 2026",
    slug: "why-your-ai-project-will-fail",
    image: "/images/blog/ai-failure.webp",
  },
  {
    title: "Building for Scale: How We Trained 35,000 Learners Without Breaking SeekhoAI",
    category: "Engineering",
    date: "28 Mar 2026",
    slug: "scaling-seekhoai-35k-learners",
    image: "/images/blog/scaling-seekhoai.webp",
  },
  {
    title: "The Real Cost of Legacy Systems (And Why Modernization Pays for Itself)",
    category: "Strategy",
    date: "20 Mar 2026",
    slug: "cost-of-legacy-systems",
    image: "/images/blog/legacy-systems.webp",
  },
];

const cardShadow =
  "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px";

export default function Blogs() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "100px" }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
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
              Latest Thinking
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
              Ideas, Insights, and What We&apos;re Learning
            </h2>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:opacity-70"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "0.9375rem",
              color: "#000000",
              whiteSpace: "nowrap",
            }}
          >
            View All
            <svg
              className="w-4 h-4"
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

        {/* Blog grid: 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className="group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <Link href={`/blog/${post.slug}/`} className="block">
                {/* Image */}
                <div
                  className="relative w-full h-56 overflow-hidden mb-5"
                  style={{
                    borderRadius: "20px",
                    boxShadow: cardShadow,
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Category + Date */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.8125rem",
                      letterSpacing: "0.18px",
                      color: "#777169",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#e5e5e5" }}
                  />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "0.8125rem",
                      letterSpacing: "0.18px",
                      color: "#777169",
                    }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="transition-opacity duration-300 group-hover:opacity-70"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.25rem",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                  }}
                >
                  {post.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
