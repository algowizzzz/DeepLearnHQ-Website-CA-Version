"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Reframed as the central sales mechanism, not a lecture-count footnote
   (30-item list #5): "lessons are the mechanism, projects are what they're
   buying." Static expand/collapse this phase — full interactive before/
   after mini-demos (30-item #6) need real workflow examples authored first,
   deferred to Phase 2+ per the plan. */
const PROJECTS = [
  {
    n: "01",
    title: "Automate something that wastes your time",
    body: "Take a repetitive task from your job, studies or business and turn it into an AI-assisted workflow.",
    outcome: "Hours → minutes",
  },
  {
    n: "02",
    title: "Build a useful AI product",
    body: "Create a functioning no-code AI application or internal tool around your own use case.",
    outcome: "Idea → working product",
  },
  {
    n: "03",
    title: "Build an AI agent",
    body: "Create an agent capable of handling a multi-step workflow while keeping human oversight.",
    outcome: "Prompting → delegation",
  },
  {
    n: "04",
    title: "Ship something people can use",
    body: "Turn your skills into a portfolio project, service, internal business tool or product you can put in front of real people.",
    outcome: "Learning → proof",
  },
];

export default function FourProjects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 20, maxWidth: 980, margin: "0 auto" }}>
      {PROJECTS.map((p, i) => {
        const isOpen = open === i;
        return (
          <button
            key={p.n}
            onClick={() => setOpen(isOpen ? null : i)}
            style={{
              textAlign: "left",
              border: "1px solid var(--line)",
              borderRadius: 18,
              padding: 24,
              background: isOpen ? "var(--paper-2)" : "#fff",
              cursor: "pointer",
              font: "inherit",
              color: "inherit",
            }}
          >
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, opacity: 0.5, letterSpacing: ".08em" }}>{p.n}</span>
            <h3 style={{ fontFamily: "var(--f-display)", fontSize: 18, margin: "10px 0" }}>{p.title}</h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <p style={{ color: "var(--muted)", lineHeight: 1.55, marginBottom: 10 }}>{p.body}</p>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--blue-deep)", textTransform: "uppercase", letterSpacing: ".04em" }}>
                    {p.outcome}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
}
