"use client";

/* The mid-page "Start Free →" button: scrolls up to the hero email field
   and focuses it, so the primary conversion point is always one tap away. */
export default function ScrollToForm({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#fcEmail"
      onClick={(e) => {
        const target = document.getElementById("fcEmail");
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => target.focus(), 350);
      }}
    >
      {children}
    </a>
  );
}
