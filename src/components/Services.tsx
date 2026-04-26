"use client";

import { motion } from "motion/react";
import { fadeUp, stagger } from "@/lib/motion";
import { useState } from "react";

const services = [
  {
    eyebrow: "01 / Pricing consulting",
    title: "End-to-end pricing strategy",
    body: "Diagnose, design, and ship a pricing system that compounds revenue without breaking trust. From willingness-to-pay research to packaging and rollout.",
    bullets: ["Value-based price ladder", "Tier & packaging audit", "Win-loss + churn analysis"],
    accent: "pink",
  },
  {
    eyebrow: "02 / Strategy consulting",
    title: "Go-to-market & monetization",
    body: "Frame the strategic moves that unlock the next stage of growth — segmentation, positioning, and how price fits the broader story.",
    bullets: ["ICP & segmentation work", "Discounting playbooks", "Expansion motion design"],
    accent: "ink",
  },
  {
    eyebrow: "03 / AI pricing",
    title: "Pricing for AI-native products",
    body: "Token-cost economics, usage vs. seat-based models, and the new playbook for products where compute is a real COGS line.",
    bullets: ["Cost-to-serve modeling", "Outcome-based pricing", "Margin-safe usage tiers"],
    accent: "lime",
  },
  {
    eyebrow: "04 / Advanced analytics",
    title: "Research & experimentation",
    body: "Monadic conjoint, Van Westendorp, A/B price testing — the empirical engine behind every recommendation. No hand-waving, just evidence.",
    bullets: ["Conjoint & Gabor-Granger", "Live price experiments", "Cohorted ARPU tracking"],
    accent: "lavender",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[var(--color-canvas-2)]">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="mx-auto max-w-3xl"
        >
          <motion.span variants={fadeUp} className="chip">What we do</motion.span>
          <motion.h2 variants={fadeUp} className="text-display mt-5 text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink)]">
            Four ways we move the <span className="text-grad-pink">revenue line</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-[var(--color-ink-muted)] md:text-xl">
            Every engagement is grounded in research, sized to your stage, and shipped with the team that owns the outcome.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const accentColors: Record<string, string> = {
    pink: "var(--color-pink-500)",
    ink: "var(--color-ink)",
    lime: "#9bc13c",
    lavender: "#7c83d3",
  };
  const accent = accentColors[service.accent];

  return (
    <motion.article
      variants={fadeUp}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos(null)}
      className="group relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-7 md:p-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-3)]"
    >
      {/* mouse-follow spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: pos
            ? `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, rgba(255,0,94,0.10), transparent 50%)`
            : undefined,
        }}
      />

      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
            {service.eyebrow}
          </div>
          <h3 className="text-display mt-4 text-2xl md:text-3xl text-[var(--color-ink)]">
            {service.title}
          </h3>
          <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
            {service.body}
          </p>

          <ul className="mt-6 space-y-2.5">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-[var(--color-ink-2)]">
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: accent }}
                />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] transition-all group-hover:text-[var(--color-pink-500)] group-hover:gap-3">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* big number watermark */}
        <div
          aria-hidden
          className="text-display select-none text-[120px] leading-none text-[var(--color-canvas-3)] transition-all duration-500 group-hover:text-[var(--color-tint)]"
        >
          0{index + 1}
        </div>
      </div>

      {/* bottom accent bar that grows in on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: accent }}
      />
    </motion.article>
  );
}
