"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function TextUsButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/contact"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(-50%)' : 'translateY(-50%) translateX(-100%)',
      }}
    >
      <div
        className="bg-[#1E6FD9] hover:bg-[#1859B3] text-white font-bold text-sm px-2 py-4 rounded-r-xl transition-all duration-200 hover:translate-x-1 cursor-pointer shadow-lg"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        Get Started
      </div>
    </Link>
  );
}
