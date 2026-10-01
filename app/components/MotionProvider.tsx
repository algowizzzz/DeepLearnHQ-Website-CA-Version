"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/* reducedMotion="user" makes every Framer Motion component in the app
   automatically respect prefers-reduced-motion by disabling
   transform/layout animation (opacity still transitions, per Framer's own
   accessible default) — one place to set this instead of a manual
   matchMedia check in every component. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
