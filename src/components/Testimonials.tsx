"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import StatCounter from "./StatCounter";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: { value: number; suffix: string; label: string };
  initials: string;
  bg: string;
};

const items: Testimonial[] = [
  {
    quote:
      "Valueships rebuilt our entire pricing architecture in eight weeks. The new ladder closed deals we'd been losing for a year.",
    author: "Greg Zakowicz",
    role: "Sr. Email Marketing Strategist",
    company: "Omnisend",
    metric: { value: 12, suffix: "%", label: "conversion uplift" },
    initials: "GZ",
    bg: "from-pink-200 to-pink-400",
  },
  {
    quote:
      "Their willingness-to-pay research was the most rigorous we've ever seen. ARPU jumped within a quarter of rollout.",
    author: "Michał Sadowski",
    role: "Founder & CEO",
    company: "Brand24",
    metric: { value: 41, suffix: "%", label: "ARPU increase" },
    initials: "MS",
    bg: "from-pink-300 to-pink-500",
  },
  {
    quote:
      "Pricing is the most leveraged thing in a SaaS — and most companies wing it. Valueships didn't. They brought data.",
    author: "Rasmus Holst",
    role: "VP of Growth",
    company: "Survicate",
    metric: { value: 29, suffix: "%", label: "MRR growth" },
    initials: "RH",
    bg: "from-pink-200 to-pink-300",
  },
  {
    quote:
      "We resisted raising prices for two years. Valueships gave us the courage and the math. Best decision of the year.",
    author: "Anna Kovács",
    role: "Head of Product",
    company: "KlickTipp",
    metric: { value: 23, suffix: "%", label: "expansion revenue" },
    initials: "AK",
    bg: "from-pink-300 to-pink-400",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // subtle parallax on the rotating headline behind the cards
  const ghostY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="results" ref={ref} className="relative py-24 md:py-32 bg-[var(--color-canvas)] overflow-hidden">
      {/* huge ghost word — moves with scroll */}
      <motion.div
        aria-hidden
        style={{ y: ghostY }}
        className="pointer-events-none absolute inset-x-0 top-10 select-none text-center text-display text-[20vw] leading-none text-[var(--color-tint)] opacity-70"
      >
        results.
      </motion.div>

      <div className="container-x relative">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="mx-auto max-w-3xl"
        >
          <motion.span variants={fadeUp} className="chip">Proof, not promises</motion.span>
          <motion.h2 variants={fadeUp} className="text-display mt-5 text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink)]">
            The numbers speak <span className="text-grad-pink">louder</span> than we do.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {items.map((t, i) => (
            <Card key={t.author} t={t} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ t, index }: { t: Testimonial; index: number }) {
  const isFeatured = index === 0;
  return (
    <motion.figure
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-2xl)] border p-7 md:p-9 ${
        isFeatured
          ? "border-[var(--color-pink-500)]/20 bg-gradient-to-br from-[var(--color-tint)] to-white md:row-span-1"
          : "border-[var(--color-line)] bg-white"
      }`}
    >
      {/* metric chip */}
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-pink-500)] text-white shadow-[0_8px_20px_rgba(255,0,94,0.3)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        </div>
        <div className="leading-tight">
          <div className="text-display text-3xl text-[var(--color-pink-500)]">
            <StatCounter to={t.metric.value} />{t.metric.suffix}
          </div>
          <div className="text-xs font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
            {t.metric.label}
          </div>
        </div>
      </div>

      <blockquote className="text-display text-2xl leading-tight text-[var(--color-ink)] md:text-3xl">
        <span className="text-[var(--color-pink-500)]">&ldquo;</span>
        {t.quote}
        <span className="text-[var(--color-pink-500)]">&rdquo;</span>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4">
        <div className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${t.bg} font-display font-bold text-white`}>
          {t.initials}
        </div>
        <div>
          <div className="font-semibold text-[var(--color-ink)]">{t.author}</div>
          <div className="text-sm text-[var(--color-ink-muted)]">
            {t.role} · <span className="font-medium text-[var(--color-ink-2)]">{t.company}</span>
          </div>
        </div>
      </figcaption>

      {/* corner sparkle on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,rgba(255,0,94,0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.figure>
  );
}
