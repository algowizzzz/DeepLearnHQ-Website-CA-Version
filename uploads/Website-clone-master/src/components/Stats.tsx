"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  end: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { end: 35, suffix: ",000+", label: "Learners on SeekhoAI" },
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 8, suffix: "", label: "Service Pillars" },
  { end: 3, suffix: "", label: "Operating Continents" },
];

function useCountUp(end: number, shouldStart: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, shouldStart, duration]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const count = useCountUp(stat.end, isVisible);

  return (
    <div className="text-center">
      <div
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 300,
          fontSize: "clamp(3rem, 6vw, 5rem)",
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          color: "#000000",
          marginBottom: "8px",
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "0.875rem",
          letterSpacing: "0.18px",
          lineHeight: 1.6,
          color: "#777169",
          textTransform: "uppercase",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Our Scale
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
