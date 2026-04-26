"use client";

import { motion } from "motion/react";
import { fadeUp, stagger } from "@/lib/motion";

const resources = [
  {
    type: "Guide",
    title: "The 2026 SaaS Pricing Playbook",
    desc: "84 pages of frameworks, benchmarks, and the experiments that moved the needle for our top portfolio companies.",
    duration: "12 min read",
    accent: "pink",
  },
  {
    type: "Report",
    title: "AI Pricing Benchmarks Q2",
    desc: "Token economics, outcome-based vs. seat-based: where the market is actually landing — with median ARPUs.",
    duration: "Data-driven",
    accent: "lime",
  },
  {
    type: "Case study",
    title: "Brand24 → 41% ARPU lift",
    desc: "Inside the eight-week engagement: research design, ladder reshape, and the discount policy that didn't backfire.",
    duration: "8 min read",
    accent: "lavender",
  },
  {
    type: "Podcast",
    title: "Pricing for AI-native products",
    desc: "Why 'per-seat' is dying for AI tools, what's replacing it, and how to price compute as a real margin lever.",
    duration: "47 min listen",
    accent: "ink",
  },
  {
    type: "Webinar",
    title: "How to run a Van Westendorp study",
    desc: "Live walkthrough of a willingness-to-pay study from sample design to actionable price points — with template.",
    duration: "On demand",
    accent: "pink",
  },
  {
    type: "Article",
    title: "The discount policy that doubled trials",
    desc: "Counter-intuitive lessons from 11 SaaS pricing experiments — and the framework we now use with every client.",
    duration: "6 min read",
    accent: "lime",
  },
];

const accentMap: Record<string, { bg: string; text: string; tag: string }> = {
  pink: { bg: "bg-[var(--color-tint)]", text: "text-[var(--color-pink-600)]", tag: "bg-[var(--color-pink-500)] text-white" },
  lime: { bg: "bg-[#f5ffe0]", text: "text-[#5a7d1c]", tag: "bg-[#9bc13c] text-white" },
  lavender: { bg: "bg-[#eef0ff]", text: "text-[#4a52a8]", tag: "bg-[#7c83d3] text-white" },
  ink: { bg: "bg-[var(--color-ink)]", text: "text-white", tag: "bg-white text-[var(--color-ink)]" },
};

export default function Resources() {
  return (
    <section id="resources" className="relative py-24 md:py-32 bg-[var(--color-canvas-2)]">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <motion.span variants={fadeUp} className="chip">Resource hub</motion.span>
            <motion.h2 variants={fadeUp} className="text-display mt-5 text-4xl md:text-5xl text-[var(--color-ink)]">
              The pricing brain trust, on the house.
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-sm font-semibold transition-all hover:border-[var(--color-pink-500)] hover:text-[var(--color-pink-500)]"
          >
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          variants={stagger(0.06, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {resources.map((r) => (
            <ResourceCard key={r.title} r={r} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ResourceCard({ r }: { r: typeof resources[number] }) {
  const a = accentMap[r.accent];
  const isDark = r.accent === "ink";
  return (
    <motion.a
      variants={fadeUp}
      href="#"
      className={`group relative block overflow-hidden rounded-[var(--radius-xl)] p-7 transition-all duration-500 hover:-translate-y-1 ${
        isDark ? `${a.bg} text-white` : "bg-white border border-[var(--color-line)] hover:shadow-[var(--shadow-3)]"
      }`}
    >
      {/* type tag */}
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${a.tag}`}>
        {r.type}
      </span>

      <h3 className={`text-display mt-5 text-xl md:text-2xl ${isDark ? "text-white" : "text-[var(--color-ink)]"}`}>
        {r.title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-white/70" : "text-[var(--color-ink-muted)]"}`}>
        {r.desc}
      </p>

      <div className={`mt-7 flex items-center justify-between text-sm ${isDark ? "text-white/70" : "text-[var(--color-ink-muted)]"}`}>
        <span>{r.duration}</span>
        <span className={`grid h-9 w-9 place-items-center rounded-full transition-all duration-500 group-hover:translate-x-1 ${
          isDark ? "bg-white text-[var(--color-ink)]" : "bg-[var(--color-tint)] text-[var(--color-pink-500)]"
        }`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}
