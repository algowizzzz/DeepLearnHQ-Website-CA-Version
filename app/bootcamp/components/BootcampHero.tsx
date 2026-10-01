"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/* The single highest-value animation on the site (per plan): chaotic
   "watching AI" tool cards collapse into a 4-stage "building with AI"
   sequence (Workflow -> Product -> Agent -> Launch). GSAP, not Framer
   Motion, because this is a scripted timeline sequence rather than a
   scroll/viewport-triggered reveal — Framer Motion's strengths don't apply
   here the way they do everywhere else on this page.

   The CTA is present and clickable from first paint — the animation plays
   around it, it never gates the CTA's visibility or clickability. On
   prefers-reduced-motion, the whole sequence is skipped and the end state
   renders immediately. */
export default function BootcampHero() {
  const chaosRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const chaosCards = gsap.utils.toArray<HTMLElement>(".chaos-card");
      const stageEls = gsap.utils.toArray<HTMLElement>(".stage-card");

      if (reduceMotion) {
        gsap.set(chaosCards, { opacity: 0 });
        gsap.set(stageEls, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(chaosCards, { opacity: 0, scale: 0.6 });
      gsap.set(stageEls, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(chaosCards, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
      })
        .to(chaosCards, {
          x: (i) => (i % 2 === 0 ? 14 : -14),
          y: (i) => (i % 2 === 0 ? -10 : 10),
          rotation: (i) => (i % 2 === 0 ? 4 : -4),
          duration: 0.9,
          ease: "sine.inOut",
          repeat: 1,
          yoyo: true,
        })
        .to(chaosCards, {
          opacity: 0,
          scale: 0.4,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.in",
        })
        .to(
          stageEls,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", height: 220, maxWidth: 520, margin: "0 auto" }}>
      <div ref={chaosRef} style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
        {["ChatGPT", "Claude", "Gemini"].map((label) => (
          <span
            key={label}
            className="chaos-card"
            style={{
              padding: "10px 18px",
              borderRadius: 12,
              background: "#fff",
              border: "1px solid var(--line)",
              boxShadow: "0 8px 24px -8px rgba(0,0,0,.15)",
              fontFamily: "var(--f-mono)",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {label}
          </span>
        ))}
      </div>
      <div ref={stagesRef} style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
        {["Workflow", "Product", "Agent", "Launch"].map((label) => (
          <span
            key={label}
            className="stage-card"
            style={{
              padding: "12px 20px",
              borderRadius: 12,
              background: "var(--grad)",
              color: "#fff",
              fontFamily: "var(--f-display)",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
