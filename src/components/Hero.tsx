"use client";

import { motion } from "motion/react";
import { fadeUp, heroLine, stagger } from "@/lib/motion";
import PricingChart from "./PricingChart";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-canvas)] pt-32 pb-24 md:pt-40 md:pb-32 noise">
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,#ffd0e0_0%,transparent_70%)] blob" />
        <div className="absolute top-1/3 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,#ffe4ee_0%,transparent_70%)] blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="container-x">
        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div variants={fadeUp} className="mb-6 flex justify-center">
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-pink-500)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-pink-500)]" />
              </span>
              Pricing strategy that pays for itself
            </span>
          </motion.div>

          {/* Animated headline — line-by-line stagger */}
          <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[var(--color-ink)]">
            <span className="block overflow-hidden pb-[0.18em] -mb-[0.06em]">
              <motion.span variants={heroLine} className="inline-block">
                Outdated pricing
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.18em] -mb-[0.06em]">
              <motion.span variants={heroLine} className="inline-block">
                is costing you
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.18em] -mb-[0.06em]">
              <motion.span variants={heroLine} className="inline-block text-grad-pink">
                revenue.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-balance text-lg text-[var(--color-ink-muted)] md:text-xl"
          >
            We help SaaS, AI products, and e-commerce companies unlock <span className="font-semibold text-[var(--color-ink)]">10%+ guaranteed revenue uplift</span> through smarter, evidence-based pricing strategy.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-500)] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_40px_rgba(255,0,94,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(255,0,94,0.55)] button-shine"
            >
              Let&apos;s talk
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-7 py-4 text-base font-semibold text-[var(--color-ink)] transition-all hover:border-[var(--color-pink-500)] hover:text-[var(--color-pink-500)]"
            >
              See the results
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          <Stat label="Projects delivered" value={<><StatCounter to={150} />+</>} />
          <Stat label="Client revenue impacted" value={<>$<StatCounter to={500} />M+</>} />
          <Stat label="Average ROI" value={<><StatCounter to={15} />×</>} highlight />
        </motion.div>

        {/* Animated pricing chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <PricingChart />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value, highlight = false }: { label: string; value: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`relative rounded-3xl border p-6 transition-all ${
        highlight
          ? "border-[var(--color-pink-500)]/30 bg-[var(--color-tint)]"
          : "border-[var(--color-line)] bg-white"
      }`}
    >
      <div className={`text-display text-5xl md:text-6xl ${highlight ? "text-grad-pink" : "text-[var(--color-ink)]"}`}>
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-[var(--color-ink-muted)]">{label}</div>
    </div>
  );
}
