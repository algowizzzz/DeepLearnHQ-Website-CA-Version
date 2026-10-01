"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WEEKS = [
  ["01", "AI Foundations", "Know what modern generative AI can and cannot do."],
  ["02", "Prompting That Works", "Create repeatable prompt systems rather than random prompts."],
  ["03", "ChatGPT Deep Dive", "Use advanced capabilities for work and analysis."],
  ["04", "Claude, Gemini, Perplexity & More", "Know which model to use for which task."],
  ["05", "AI Visuals & Content", "Create professional visual and content assets."],
  ["06", "AI Data Analysis", "Turn datasets into insights and decisions."],
  ["07", "AI Agents", "Build multi-step AI workflows."],
  ["08", "Ship Your Project", "Complete and present your capstone."],
] as const;

/* Scroll-driven vertical progress through the 8 weeks — the one place GSAP
   ScrollTrigger is justified over Framer Motion's scroll utilities, per the
   plan (a pinned, sequential 8-step scrub is a weak fit for whileInView).
   Progress bar fills as the visitor scrolls past each week; no scroll-
   jacking (the page scrolls normally, nothing is pinned/hijacked), only the
   fill animation is scroll-linked. */
export default function CurriculumTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !trackRef.current || !fillRef.current) return;

    const st = gsap.to(fillRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: trackRef.current,
        start: "top 70%",
        end: "bottom 60%",
        scrub: 0.5,
      },
    });

    return () => {
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, []);

  return (
    <div ref={trackRef} style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
      <div style={{ position: "absolute", left: 15, top: 0, bottom: 0, width: 2, background: "var(--line)" }}>
        <div
          ref={fillRef}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "var(--grad)",
            transform: "scaleY(0)",
            transformOrigin: "top",
          }}
        />
      </div>
      {WEEKS.map(([num, title, outcome]) => (
        <div key={num} style={{ position: "relative", paddingLeft: 48, marginBottom: 36 }}>
          <div
            style={{
              position: "absolute",
              left: 6,
              top: 2,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#fff",
              border: "2px solid var(--blue)",
            }}
          />
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--muted)", letterSpacing: ".05em" }}>
            WEEK {num}
          </span>
          <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, margin: "4px 0 6px" }}>{title}</h3>
          <p style={{ color: "var(--muted)" }}>
            <strong>Outcome:</strong> {outcome}
          </p>
        </div>
      ))}
      <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 14 }}>
        14.5 hours &middot; 179 lessons &middot; lifetime access
      </p>
    </div>
  );
}
