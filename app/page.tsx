"use client";

import Link from "next/link";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import AnimatedCounter from "./components/AnimatedCounter";
import { captureTouch } from "./lib/attribution";
import { track } from "./lib/track";

export default function HomePage() {
  useEffect(() => {
    captureTouch();
  }, []);

  return (
    <>
      <Nav />

      {/* HERO — proof line visible immediately, no animation gating it */}
      <section style={{ padding: "72px 0 48px", textAlign: "center" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h1
            style={{
              fontFamily: "var(--f-display)",
              fontWeight: 700,
              fontSize: "clamp(32px, 6vw, 60px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 18px",
            }}
          >
            Learn AI by building with it.
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "var(--muted)", maxWidth: 620, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Practical AI education for people who want to use modern tools at work, build useful things, and stay
            relevant — without becoming machine-learning engineers.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
            <a
              href="/free-course"
              className="btn btn-grad"
              onClick={() => track("free_cta_click", { location: "homepage_hero" })}
            >
              Start Free — 3-Hour AI Course
            </a>
            <Link href="/bootcamp" className="btn btn-ghost" onClick={() => track("bootcamp_cta_click", { location: "homepage_hero" })}>
              Explore the 8-Week Program
            </Link>
          </div>
          <p style={{ fontFamily: "var(--f-mono)", fontSize: 13, letterSpacing: ".03em", color: "var(--muted)", textTransform: "uppercase" }}>
            40K+ learners &middot; 13K+ reviews &middot; 4.5★
          </p>
        </div>
      </section>

      {/* CHOOSE WHERE YOU ARE — the actual job of this page */}
      <section style={{ padding: "32px 0 80px" }}>
        <div className="wrap">
          <Reveal>
            <h2 style={{ textAlign: "center", fontFamily: "var(--f-display)", fontSize: "clamp(24px,3vw,34px)", marginBottom: 36 }}>
              Choose where you are.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 920, margin: "0 auto" }}>
            <Reveal delay={0.05}>
              <div style={{ border: "1px solid var(--line)", borderRadius: 20, padding: 36, height: "100%" }}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: ".06em", color: "var(--blue-deep)", textTransform: "uppercase" }}>
                  I&apos;m starting with AI
                </span>
                <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, margin: "12px 0" }}>Free 3-Hour AI Course</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.6, marginBottom: 24 }}>
                  Learn the essential tools and build a practical foundation — no coding, no cost.
                </p>
                <a href="/free-course" className="btn btn-grad" style={{ width: "100%" }} onClick={() => track("free_cta_click", { location: "homepage_card" })}>
                  Start Free
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ border: "1px solid var(--line)", borderRadius: 20, padding: 36, height: "100%", background: "var(--paper-2)" }}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: ".06em", color: "var(--blue-deep)", textTransform: "uppercase" }}>
                  I already use AI
                </span>
                <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, margin: "12px 0" }}>8-Week Build With AI Program</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.6, marginBottom: 24 }}>
                  Turn AI knowledge into workflows, products and agents — $99, lifetime access.
                </p>
                <Link href="/bootcamp" className="btn btn-ghost" style={{ width: "100%" }} onClick={() => track("bootcamp_cta_click", { location: "homepage_card" })}>
                  Explore Program
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LEARN / APPLY / BUILD */}
      <section style={{ padding: "60px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 32, textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            {[
              ["Learn", "Understand the tools that matter."],
              ["Apply", "Use them on real work."],
              ["Build", "Create something useful."],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div>
                  <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, marginBottom: 8 }}>{title}</h3>
                  <p style={{ color: "var(--muted)" }}>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section style={{ padding: "64px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "center", gap: "48px 64px", flexWrap: "wrap", textAlign: "center" }}>
          {[
            [40000, "+", "Learners Taught"],
            [13000, "+", "Reviews"],
          ].map(([value, suffix, label]) => (
            <div key={label as string}>
              <div style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 40 }}>
                <AnimatedCounter value={value as number} suffix={suffix as string} />
              </div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: ".05em", color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>
                {label}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 40 }}>4.5★</div>
            <div style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: ".05em", color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>
              Average Rating
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "80px 0", textAlign: "center", background: "var(--grad)" }}>
        <div className="wrap">
          <Reveal>
            <h2 style={{ fontFamily: "var(--f-display)", color: "#fff", fontSize: "clamp(24px,3.4vw,36px)", marginBottom: 24 }}>
              Ready to stop just watching AI?
            </h2>
            <a href="/free-course" className="btn" style={{ background: "#fff", color: "var(--blue-deep)" }} onClick={() => track("free_cta_click", { location: "homepage_final" })}>
              Start the Free Course →
            </a>
          </Reveal>
        </div>
      </section>

      <footer style={{ padding: "32px 0", textAlign: "center", fontSize: 13, color: "var(--muted)" }}>
        <div className="wrap">
          © 2026 DeepLearnHQ Corp. ·{" "}
          <a href="/privacy.html" style={{ color: "inherit" }}>
            Privacy
          </a>{" "}
          ·{" "}
          <a href="/terms.html" style={{ color: "inherit" }}>
            Terms
          </a>
        </div>
      </footer>
    </>
  );
}
