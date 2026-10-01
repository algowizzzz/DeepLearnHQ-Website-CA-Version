/* Free course vs the $99 program — makes the next step obvious without
   disparaging the free course. Core message: the free course teaches you
   how to USE AI; the 8-week program teaches you how to BUILD with it. */

const ROWS: [string, string][] = [
  ["Learn the major AI tools", "Build real AI systems"],
  ["AI fundamentals", "Structured 8-week roadmap"],
  ["Prompting and practical usage", "Build an automation"],
  ["Beginner foundation", "Build an AI product"],
  ["Self-paced", "Build an AI agent"],
  ["Free", "Four guided projects"],
  ["—", "Weekly live Q&A"],
  ["—", "Lifetime access"],
];

export default function FreeVsProgram({ checkoutUrl, onCheckout }: { checkoutUrl: string; onCheckout: () => void }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ border: "1px solid var(--line)", borderRadius: 16, padding: "18px 18px 8px", background: "#fff" }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
            Free 3-Hour Course
          </div>
          {ROWS.map(([free], i) => (
            <div key={i} style={{ padding: "9px 0", borderTop: "1px solid var(--line)", fontSize: 14, color: free === "—" ? "var(--line)" : "var(--ink)" }}>
              {free}
            </div>
          ))}
        </div>
        <div style={{ border: "1px solid var(--blue)", borderRadius: 16, padding: "18px 18px 8px", background: "#fff" }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--blue-deep)", marginBottom: 10 }}>
            $99 Build With AI
          </div>
          {ROWS.map(([, paid], i) => (
            <div key={i} style={{ padding: "9px 0", borderTop: "1px solid var(--line)", fontSize: 14, color: "var(--ink)", fontWeight: 600 }}>
              {paid}
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <a href={checkoutUrl} onClick={onCheckout} className="btn btn-grad">
          Start Building — $99 →
        </a>
      </div>
      <style>{`
        @media (max-width: 640px) {
          /* Two columns kept on purpose — stacking loses the side-by-side
             contrast that is the whole point of this section. */
          .wrap div[style*="grid-template-columns: 1fr 1fr"] > div { padding: 14px 12px 6px !important; }
          .wrap div[style*="grid-template-columns: 1fr 1fr"] > div > div { font-size: 13px !important; }
        }
      `}</style>
    </div>
  );
}
