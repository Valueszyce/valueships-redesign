"use client";

import type { Variants } from "motion/react";

/* ----------------------------------------------------------------
   Shared motion variants — all animations use the same easing rhythm
   for a consistent, premium feel.
   Easing references Apple HIG-style spring curves.
   ---------------------------------------------------------------- */

export const ease = [0.25, 0.1, 0.25, 1] as const; // smooth, expressive

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
});

/* Hero text reveal — splits into stacked stagger */
export const heroLine: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease },
  },
};
