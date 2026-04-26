"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import Logo from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-x pt-4 md:pt-5">
        <motion.nav
          animate={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0)",
            borderColor: scrolled ? "rgba(12,12,16,0.08)" : "rgba(12,12,16,0)",
            paddingTop: scrolled ? 10 : 14,
            paddingBottom: scrolled ? 10 : 14,
            backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
            boxShadow: scrolled
              ? "0 12px 30px rgba(12,12,16,0.06), 0 4px 10px rgba(12,12,16,0.04)"
              : "none",
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-between rounded-full border px-4 md:px-6"
        >
          <a href="#" className="group" aria-label="Valueships home">
            <Logo height={72} />
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-pink-500)]"
                >
                  <span className="link-underline">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-pink-500)] button-shine"
            >
              Let&apos;s talk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden rounded-full p-2 hover:bg-[var(--color-tint)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d={mobileOpen ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
              </svg>
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 rounded-3xl border border-[var(--color-line)] bg-white/95 backdrop-blur p-4 shadow-2xl"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium hover:bg-[var(--color-tint)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#cta"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 block rounded-full bg-[var(--color-ink)] px-4 py-3 text-center text-base font-semibold text-white"
                  >
                    Let&apos;s talk
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

