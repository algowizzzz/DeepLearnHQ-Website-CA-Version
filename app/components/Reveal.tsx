"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* Shared scroll reveal — whileInView fade/slide-up, used across both new
   pages instead of each section hand-rolling its own variant. Framer Motion
   itself no-ops translate/opacity transitions under prefers-reduced-motion
   when MotionConfig reducedMotion="user" is set at the root (see providers),
   so this component doesn't need its own media-query check. */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
