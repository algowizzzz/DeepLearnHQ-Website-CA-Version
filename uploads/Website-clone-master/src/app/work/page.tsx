"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { caseStudies } from "@/data/case-studies";

const ALL = "All";

const industryFilters = [
  ALL,
  "Financial Services & FinTech",
  "AI & Machine Learning",
  "Healthcare & MedTech",
  "E-Commerce & Retail",
  "Education & EdTech",
  "Energy & Sustainability",
  "Manufacturing & Logistics",
  "Legal & RegTech",
  "Real Estate & PropTech",
  "Marketing & Analytics",
  "Government & Public Sector",
];

export default function WorkPage() {
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () =>
      active === ALL
        ? caseStudies
        : caseStudies.filter((cs) => cs.category === active),
    [active]
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            Work
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "36rem",
            }}
          >
            Projects that ship.
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.0625rem",
              color: "#4e4e4e",
            }}
          >
            AI products, data platforms, and full-stack systems — built from
            first principles and deployed to production. We build our own
            tools and contribute to the open-source projects shaping each
            industry.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Projects", value: `${caseStudies.length}` },
              { label: "Industries", value: "10" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.25rem",
                    color: "#000000",
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: "12px", color: "#777169" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section
        className="py-6"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {industryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  backgroundColor: active === f ? "#000000" : "#f5f5f5",
                  color: active === f ? "#ffffff" : "#4e4e4e",
                  border: active === f ? "none" : "1px solid #e5e5e5",
                  cursor: "pointer",
                }}
              >
                {f === ALL ? "All Projects" : f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p
              className="text-center py-20"
              style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
            >
              No projects in this category yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                  className="group"
                >
                  <article
                    className="flex flex-col h-full p-7 transition-shadow hover:shadow-md"
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "20px",
                      boxShadow:
                        "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                    }}
                  >
                    {/* Category */}
                    <span
                      className="inline-block self-start mb-4 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: "#f5f2ef",
                        color: "#777169",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {project.category}
                    </span>

                    {/* Title */}
                    <h2
                      className="mb-3 group-hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 300,
                        fontSize: "1.375rem",
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                        color: "#000000",
                      }}
                    >
                      {project.title}
                    </h2>

                    {/* Overview */}
                    <p
                      className="flex-1 mb-5 leading-relaxed text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#4e4e4e",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.overview}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: "#f5f5f5",
                            color: "#777169",
                            fontFamily: "Inter, sans-serif",
                            border: "1px solid rgba(0,0,0,0.05)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span
                          className="text-[11px] px-2 py-0.5"
                          style={{
                            color: "#aaa",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Key results */}
                    <div
                      className="flex gap-6 pt-4"
                      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      {project.results.slice(0, 2).map((r) => (
                        <div key={r.metric}>
                          <p
                            style={{
                              fontFamily: '"Cormorant Garamond", serif',
                              fontWeight: 300,
                              fontSize: "1.5rem",
                              color: "#000000",
                              lineHeight: 1,
                              margin: "0 0 3px 0",
                            }}
                          >
                            {r.value}
                          </p>
                          <p
                            className="text-[11px]"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              color: "#777169",
                              margin: 0,
                            }}
                          >
                            {r.metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#f5f2ef" }}>
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Let&apos;s build something together.
          </h2>
          <p
            className="mb-8 max-w-lg mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: "#4e4e4e",
            }}
          >
            Have a hard problem in your industry? We work with teams who want
            to ship real AI products — not slide decks.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
