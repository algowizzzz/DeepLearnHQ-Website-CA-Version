"use client";

import { useState } from "react";

/* Objection-handling FAQ, per spec section 11. One answer is a placeholder
   (clearly marked) rather than a guess: "what's different from your Udemy
   content" is a factual claim about the relationship between this program
   and existing Udemy content, which only Saad can answer honestly — the
   plan explicitly flags this as something to confirm before shipping,
   same policy already applied to the free-course email's course-link and
   coupon placeholders earlier this project. */
const FAQS: [string, string][] = [
  ["I can learn this for free on YouTube.", "You can — the difference is structure, four real projects, and live weekly support instead of a pile of disconnected videos."],
  ["Is this a coding course?", "No. No programming required at any point."],
  ["Is this beginner friendly?", "Yes. Assume no prior technical AI knowledge."],
  ["Is this a live cohort?", "No. Self-paced curriculum, plus a live weekly Q&A every Saturday."],
  ["Do I need paid AI tools?", "No — the course is built around free-tier access wherever practical."],
  ["How much time do I need per week?", "The 8 weeks are a suggested pace, not a deadline — you have lifetime access and can move faster or slower."],
  [
    "What's different from your Udemy content?",
    "[[PLACEHOLDER — Saad to confirm exact relationship between this program and the Udemy course before this FAQ ships. Don't guess at this one; it's a factual claim about your own product.]]",
  ],
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {FAQS.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} style={{ borderTop: "1px solid var(--line)" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "18px 4px",
                background: "none",
                border: 0,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                font: "inherit",
                fontFamily: "var(--f-display)",
                fontSize: 16,
                color: "inherit",
              }}
            >
              {q}
              <span style={{ opacity: 0.5 }}>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <p style={{ color: "var(--muted)", padding: "0 4px 18px", lineHeight: 1.6 }}>{a}</p>}
          </div>
        );
      })}
    </div>
  );
}
