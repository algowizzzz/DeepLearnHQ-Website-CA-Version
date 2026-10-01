"use client";

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import AnimatedCounter from "../components/AnimatedCounter";
import BootcampHero from "./components/BootcampHero";
import FourProjects from "./components/FourProjects";
import WhoThisIsFor from "./components/WhoThisIsFor";
import CurriculumTimeline from "./components/CurriculumTimeline";
import FAQAccordion from "./components/FAQAccordion";
import { captureFbclid, captureRef, bootcampCheckoutUrl } from "../lib/attribution";

export default function BootcampPage() {
  const [checkoutUrl, setCheckoutUrl] = useState("https://buy.stripe.com/8x23cw8NA7p76o56skejK0b");

  useEffect(() => {
    captureFbclid();
    captureRef();
    setCheckoutUrl(bootcampCheckoutUrl());
    window.gtag?.("event", "bootcamp_lp_view", {});
    window.fbq?.("track", "ViewContent", { content_name: "The Generative AI 8-Week Bootcamp", value: 99, currency: "USD" });
  }, []);

  function onCheckoutClick() {
    window.gtag?.("event", "checkout_start", {});
    window.fbq?.("track", "InitiateCheckout", { value: 99, currency: "USD" });
  }

  function onCtaClick() {
    window.gtag?.("event", "bootcamp_cta_click", {});
  }

  return (
    <>
      <Nav ctaLabel="Join for $99" ctaHref={checkoutUrl} />

      {/* 1. HERO */}
      <section style={{ padding: "64px 0 40px", textAlign: "center" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: ".08em", color: "var(--blue-deep)", textTransform: "uppercase" }}>
            The 8-Week Build With AI Program
          </span>
          <h1 style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: "clamp(30px,5.4vw,54px)", lineHeight: 1.12, margin: "16px 0" }}>
            Stop learning about AI. Start building with it.
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.6 }}>
            A self-paced, no-code program that takes you from using AI tools to building real AI workflows, products
            and agents — with weekly live help when you get stuck.
          </p>

          <BootcampHero />

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", margin: "32px 0 16px" }}>
            <a href={checkoutUrl} onClick={onCheckoutClick} className="btn btn-grad">
              Join the Program — $99 →
            </a>
          </div>
          <p style={{ fontFamily: "var(--f-mono)", fontSize: 13, color: "var(--muted)" }}>
            One payment &middot; Lifetime access &middot; Weekly live Q&amp;A &middot; 30-day guarantee
          </p>
          <p style={{ marginTop: 10, fontFamily: "var(--f-mono)", fontSize: 13, color: "var(--muted)" }}>
            40K+ learners &middot; 13K+ reviews &middot; 4.5★
          </p>
        </div>
      </section>

      {/* 2. THE BUILD GAP — strongest existing asset, kept verbatim */}
      <section style={{ padding: "56px 0", background: "var(--paper-2)" }}>
        <div className="wrap" style={{ maxWidth: 760, textAlign: "center" }}>
          <Reveal>
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: ".06em", color: "var(--blue-deep)", textTransform: "uppercase" }}>
              The real problem
            </span>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(24px,3.4vw,36px)", margin: "14px 0 20px" }}>
              It isn&apos;t a knowledge gap. It&apos;s a build gap.
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 17 }}>
              You can watch hundreds of AI tutorials and still have nothing to show for it. The difference comes when
              you take AI from a browser tab and make it solve something real.
            </p>
          </Reveal>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginTop: 36, textAlign: "left" }}>
            <Reveal delay={0.1}>
              <div style={{ border: "1px solid var(--line)", borderRadius: 16, padding: 24, background: "#fff", minWidth: 220 }}>
                <strong>Before</strong>
                <ul style={{ color: "var(--muted)", marginTop: 10, paddingLeft: 18 }}>
                  <li>Watching tutorials</li>
                  <li>Saving prompts</li>
                  <li>Trying random tools</li>
                  <li>Following AI news</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ border: "1px solid var(--blue)", borderRadius: 16, padding: 24, background: "#fff", minWidth: 220 }}>
                <strong>After</strong>
                <ul style={{ color: "var(--muted)", marginTop: 10, paddingLeft: 18 }}>
                  <li>Working automation</li>
                  <li>AI product</li>
                  <li>AI agent</li>
                  <li>Portfolio / business project</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. THE FOUR PROJECTS — the central sales mechanism */}
      <section style={{ padding: "64px 0" }}>
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
              <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(24px,3.4vw,36px)", marginBottom: 12 }}>
                At the end, you will have:
              </h2>
              <p style={{ color: "var(--muted)" }}>Lessons are the mechanism. Projects are what you&apos;re building.</p>
            </div>
          </Reveal>
          <FourProjects />
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href={checkoutUrl} onClick={onCheckoutClick} className="btn btn-grad">
              I Want to Build These →
            </a>
          </div>
        </div>
      </section>

      {/* 4. WHO THIS IS FOR */}
      <section style={{ padding: "64px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <Reveal>
            <h2 style={{ textAlign: "center", fontFamily: "var(--f-display)", fontSize: "clamp(22px,3vw,30px)", marginBottom: 32 }}>
              Built for people like you.
            </h2>
          </Reveal>
          <WhoThisIsFor />
        </div>
      </section>

      {/* 5. CURRICULUM — scroll-driven progress */}
      <section style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Reveal>
            <h2 style={{ textAlign: "center", fontFamily: "var(--f-display)", fontSize: "clamp(24px,3.4vw,36px)", marginBottom: 48 }}>
              Eight weeks. A practical AI foundation.
            </h2>
          </Reveal>
          <CurriculumTimeline />
        </div>
      </section>

      {/* 6. WEEKLY LIVE Q&A — real, non-fake scarcity mechanism */}
      <section style={{ padding: "64px 0", background: "var(--paper-2)" }}>
        <div className="wrap" style={{ maxWidth: 680, textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(22px,3vw,30px)", marginBottom: 16 }}>
              Get stuck? Bring it to me on Saturday.
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              The program is self-paced, but you don&apos;t have to solve everything alone. Every Saturday, there&apos;s a
              live Q&amp;A where you can bring your project, workflow, prompt or problem and get direct help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. PROOF + INSTRUCTOR */}
      <section style={{ padding: "72px 0" }}>
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px 56px", flexWrap: "wrap", marginBottom: 48 }}>
              <div>
                <div style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 36 }}>
                  <AnimatedCounter value={40000} suffix="+" />
                </div>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase" }}>Learners</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 36 }}>
                  <AnimatedCounter value={13000} suffix="+" />
                </div>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase" }}>Reviews</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 36 }}>4.5★</div>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase" }}>Rating</div>
              </div>
            </div>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(22px,3vw,30px)", marginBottom: 16 }}>
              Built from the way I actually use AI at work.
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              I&apos;ve spent more than a decade working across data, technology, business and finance, including work
              involving Deloitte, PwC, BMO and Microsoft. I&apos;ve also taught tens of thousands of people how to use
              AI. This program combines those two experiences: practical systems from the workplace, taught for
              people who don&apos;t need a computer-science degree.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. WHY $99 */}
      <section style={{ padding: "56px 0", background: "var(--paper-2)" }}>
        <div className="wrap" style={{ maxWidth: 680, textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(22px,3vw,30px)", marginBottom: 16 }}>Why $99?</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              One payment. No expensive cohort model. No recurring membership required. Lifetime access, weekly live
              Q&amp;A, four real projects, and future updates — all included. The price is intentionally accessible,
              not cheap.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. VALUE STACK + PRICE */}
      <section style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="wrap" style={{ maxWidth: 560 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(22px,3vw,30px)", marginBottom: 28 }}>
              Everything you need to go from user to builder.
            </h2>
            <ul style={{ listStyle: "none", padding: 0, textAlign: "left", display: "grid", gap: 10, marginBottom: 32 }}>
              {[
                "Full 8-week curriculum",
                "14.5 hours / 179 lessons",
                "Four guided projects",
                "Weekly live Q&A",
                "Lifetime access",
                "Future course updates",
                "Certificate",
                "Direct support pathway",
              ].map((item) => (
                <li key={item} style={{ color: "var(--muted)" }}>
                  ✓ {item}
                </li>
              ))}
            </ul>
            <div style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 48, marginBottom: 20 }}>$99</div>
            <a href={checkoutUrl} onClick={onCheckoutClick} className="btn btn-grad">
              Start Building →
            </a>
          </Reveal>
        </div>
      </section>

      {/* 10. GUARANTEE — legal language ported as-is, not rewritten */}
      <section style={{ padding: "56px 0", background: "var(--paper-2)" }}>
        <div className="wrap" style={{ maxWidth: 640, textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(22px,3vw,30px)", marginBottom: 16 }}>
              Build something or ask for your money back.
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              You have 30 days to decide whether the program is useful for you. If it isn&apos;t, email us for a refund
              — unconditional, any reason.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 11. OBJECTION HANDLING */}
      <section style={{ padding: "64px 0" }}>
        <div className="wrap">
          <Reveal>
            <h2 style={{ textAlign: "center", fontFamily: "var(--f-display)", fontSize: "clamp(22px,3vw,30px)", marginBottom: 36 }}>
              Questions, answered honestly.
            </h2>
          </Reveal>
          <FAQAccordion />
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section style={{ padding: "80px 0", textAlign: "center", background: "var(--grad)" }}>
        <div className="wrap" style={{ maxWidth: 620 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--f-display)", color: "#fff", fontSize: "clamp(24px,3.4vw,36px)", marginBottom: 12 }}>
              Eight weeks from now, you can have four things you actually built with AI.
            </h2>
            <p style={{ color: "rgba(255,255,255,.85)", marginBottom: 28 }}>
              Or you can have eight more weeks of saved AI videos.
            </p>
            <a href={checkoutUrl} onClick={onCheckoutClick} className="btn" style={{ background: "#fff", color: "var(--blue-deep)" }}>
              Join the 8-Week Program — $99 →
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
          </a>{" "}
          ·{" "}
          <a href="/refund.html" style={{ color: "inherit" }}>
            Refund Policy
          </a>
        </div>
      </footer>

      {/* Sticky mobile CTA, per spec */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "10px 14px",
          background: "rgba(255,255,255,.96)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid var(--line)",
          display: "none",
          zIndex: 40,
        }}
        className="mobile-sticky-cta"
      >
        <a href={checkoutUrl} onClick={onCheckoutClick} className="btn btn-grad" style={{ width: "100%" }}>
          Join for $99
        </a>
      </div>
      <style>{`
        @media (max-width: 780px) {
          .mobile-sticky-cta { display: block !important; }
          body { padding-bottom: 76px; }
        }
      `}</style>
    </>
  );
}
