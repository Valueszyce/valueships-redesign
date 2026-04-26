"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

/**
 * Animated SVG pricing chart — the signature visual.
 * Shows a "current pricing" baseline (gray) and the "optimized pricing" curve (pink) drawing in.
 * The pink line ends ~14% higher to visualize the 10%+ revenue uplift story.
 */
export default function PricingChart() {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Two paths over the same x-domain. Y inverted for SVG (lower y = higher revenue).
  const baseline = "M 30 170 C 90 168, 150 162, 210 158 S 330 150, 390 145 S 510 138, 570 134";
  const optimized = "M 30 170 C 90 165, 150 152, 210 138 S 330 110, 390 92 S 510 70, 570 56";
  const optimizedArea = `${optimized} L 570 220 L 30 220 Z`;

  return (
    <div className="relative w-full overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-3)] md:p-7">
      {/* header strip */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-[var(--color-ink-muted)]">
          <span className="rounded-md bg-[var(--color-canvas-3)] px-2 py-1">revenue.live</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-[var(--color-ink-muted)]">
            <span className="h-2 w-3 rounded-full bg-[var(--color-ink-soft)]" />
            Current
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-[var(--color-pink-500)]">
            <span className="h-2 w-3 rounded-full bg-[var(--color-pink-500)]" />
            Optimized
          </span>
        </div>
      </div>

      {/* chart */}
      <div className="relative">
        <svg
          ref={ref}
          viewBox="0 0 600 240"
          className="block w-full h-auto"
          aria-label="Pricing optimization revenue projection"
        >
          <defs>
            <linearGradient id="pinkArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff005e" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#ff005e" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="pinkLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff337e" />
              <stop offset="50%" stopColor="#ff005e" />
              <stop offset="100%" stopColor="#f0004b" />
            </linearGradient>
          </defs>

          {/* horizontal grid */}
          {[40, 80, 120, 160, 200].map((y) => (
            <line
              key={y}
              x1="20"
              x2="580"
              y1={y}
              y2={y}
              stroke="rgba(12,12,16,0.06)"
              strokeDasharray="4 6"
            />
          ))}

          {/* y-axis labels */}
          {[
            { y: 44, label: "$1.4M" },
            { y: 124, label: "$1.0M" },
            { y: 204, label: "$600K" },
          ].map((t) => (
            <text
              key={t.label}
              x="0"
              y={t.y}
              fontSize="10"
              fill="#9aa5b1"
              fontFamily="ui-monospace, Menlo"
            >
              {t.label}
            </text>
          ))}

          {/* baseline (gray) */}
          <motion.path
            d={baseline}
            fill="none"
            stroke="#9aa5b1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.8 } : {}}
            transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          />

          {/* optimized area fill */}
          <motion.path
            d={optimizedArea}
            fill="url(#pinkArea)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.6 }}
          />

          {/* optimized (pink) line */}
          <motion.path
            d={optimized}
            fill="none"
            stroke="url(#pinkLine)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          />

          {/* end-of-line marker on the optimized curve */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 2.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "570px 56px" }}
          >
            <circle cx="570" cy="56" r="14" fill="#ff005e" opacity="0.18" />
            <circle cx="570" cy="56" r="6" fill="#ff005e" />
            <circle cx="570" cy="56" r="2.5" fill="white" />
          </motion.g>

          {/* delta label arrow between curves */}
          <motion.g
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.9 }}
          >
            <line x1="570" y1="56" x2="570" y2="134" stroke="#ff005e" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="500" y="78" width="56" height="24" rx="12" fill="#ff005e" />
            <text
              x="528"
              y="94"
              fontSize="11"
              fontWeight="700"
              fill="white"
              textAnchor="middle"
              fontFamily="var(--font-display)"
            >
              +14.2%
            </text>
          </motion.g>
        </svg>

        {/* floating chip — pricing experiment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute -bottom-3 left-2 sm:left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white/95 px-3.5 py-2.5 shadow-[var(--shadow-2)] backdrop-blur"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-tint)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff005e" strokeWidth="2.5" strokeLinecap="round">
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M14 7h7v7" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">Pricing experiment</div>
            <div className="text-sm font-bold text-[var(--color-ink)]">Tier restructure · ARPU +18%</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
