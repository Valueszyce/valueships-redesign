"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

// Wordmark-style logos rendered as SVG text — ensures crispness without raster assets.
const logos = [
  { name: "Omnisend", style: "tracking-tight" },
  { name: "Brand24", style: "tracking-tight font-extrabold" },
  { name: "KlickTipp", style: "tracking-tight" },
  { name: "Survicate", style: "tracking-tight font-light italic" },
  { name: "Userpilot", style: "tracking-tight" },
  { name: "ChartMogul", style: "tracking-tight font-extrabold" },
  { name: "Channable", style: "tracking-tight" },
  { name: "Landingi", style: "tracking-tight" },
  { name: "RightMessage", style: "tracking-tight font-light" },
  { name: "Outfunnel", style: "tracking-tight font-extrabold" },
  { name: "Bonjoro", style: "tracking-tight" },
  { name: "Botpress", style: "tracking-tight font-light" },
];

export default function LogoWall() {
  const row = [...logos, ...logos]; // duplicate for seamless loop
  return (
    <section className="relative py-20 md:py-24 bg-[var(--color-canvas)] border-y border-[var(--color-line-2)]">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
            Trusted by 150+ teams shipping smarter pricing
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee — full bleed, fades on edges */}
      <div className="relative mt-10 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--color-canvas)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--color-canvas)] to-transparent" />

        <div className="marquee-track flex w-max gap-12 md:gap-16">
          {row.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className={`text-display text-2xl md:text-3xl text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)] whitespace-nowrap ${logo.style}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
