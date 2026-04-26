"use client";

import { motion } from "motion/react";
import { fadeUp, stagger } from "@/lib/motion";
import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="cta" className="relative py-24 md:py-32 bg-[var(--color-canvas)]">
      <div className="container-x">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-ink)] p-10 md:p-16 lg:p-20 text-white"
        >
          {/* animated mesh background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -top-40 -left-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(255,0,94,0.55)_0%,transparent_70%)] blob" />
            <div className="absolute -bottom-32 -right-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(255,51,126,0.35)_0%,transparent_70%)] blob" style={{ animationDelay: "-8s" }} />
            <div className="absolute inset-0 bg-grid-pink opacity-20" />
          </div>

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.span variants={fadeUp} className="chip" style={{ background: "rgba(255,255,255,0.08)", color: "white", borderColor: "rgba(255,255,255,0.16)" }}>
                Get in touch
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-display mt-6 text-4xl md:text-5xl lg:text-6xl">
                Let&apos;s find the <span className="text-grad-pink">10%</span> hiding in your pricing.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg text-white/70">
                A 30-minute consult, free. We&apos;ll review your current pricing, flag the biggest leak, and tell you whether we&apos;re even the right partner.
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-8 space-y-3">
                {[
                  "No-obligation pricing audit",
                  "Senior consultant in the call (not a SDR)",
                  "Walk away with at least one concrete idea",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/85">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-pink-500)]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* form */}
            <motion.form
              variants={fadeUp}
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-[var(--radius-xl)] bg-white p-7 md:p-8 text-[var(--color-ink)] shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
            >
              {!submitted ? (
                <>
                  <div className="mb-5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">Your name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Pricing"
                      className="mt-2 block w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas-2)] px-4 py-3.5 text-base outline-none transition-all focus:border-[var(--color-pink-500)] focus:bg-white"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">Work email</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="mt-2 block w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas-2)] px-4 py-3.5 text-base outline-none transition-all focus:border-[var(--color-pink-500)] focus:bg-white"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">What&apos;s the pricing question?</label>
                    <textarea
                      rows={3}
                      placeholder="We're rolling out a new tier and unsure on price points..."
                      className="mt-2 block w-full resize-none rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas-2)] px-4 py-3.5 text-base outline-none transition-all focus:border-[var(--color-pink-500)] focus:bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-pink-500)] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_40px_rgba(255,0,94,0.4)] transition-all hover:-translate-y-0.5 button-shine"
                  >
                    Book my free consult
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
                  <p className="mt-4 text-center text-xs text-[var(--color-ink-muted)]">
                    We typically reply within 4 business hours.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--color-tint)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff005e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <h3 className="text-display mt-5 text-2xl">You&apos;re on the list.</h3>
                  <p className="mt-2 text-[var(--color-ink-muted)]">
                    Expect a real reply, not a drip. Talk soon.
                  </p>
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
