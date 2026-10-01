"use client";

import { useState } from "react";

const TABS = [
  {
    label: "Professional",
    points: ["Save hours on repetitive work.", "Build tools your team can actually use.", "Develop an AI skill that differentiates you internally."],
  },
  {
    label: "Student",
    points: ["Build four portfolio projects.", "Learn practical AI beyond classroom theory.", "Demonstrate real capability to employers."],
  },
  {
    label: "Freelancer",
    points: ["Deliver faster.", "Productize AI-enabled services.", "Build tools for clients."],
  },
  {
    label: "Founder",
    points: ["Prototype without hiring a large technical team.", "Automate operations.", "Test AI product ideas."],
  },
];

export default function WhoThisIsFor() {
  const [active, setActive] = useState(0);
  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
        {TABS.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid var(--line)",
              background: active === i ? "var(--ink)" : "transparent",
              color: active === i ? "#fff" : "var(--ink)",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {TABS[active].points.map((pt) => (
          <li key={pt} style={{ padding: "10px 0", borderTop: "1px solid var(--line)", color: "var(--muted)" }}>
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}
