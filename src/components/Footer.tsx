import Link from "next/link";
import Logo from "./Logo";

const cols = [
  {
    heading: "Services",
    links: ["Pricing consulting", "Strategy consulting", "AI pricing", "Advanced analytics"],
  },
  {
    heading: "Resources",
    links: ["Pricing playbook", "Benchmarks", "Case studies", "Blog", "Podcast"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-[var(--color-ink)] text-white">
      <div className="container-x py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="#" aria-label="Valueships home" className="inline-block">
              <Logo invert height={72} />
            </Link>
            <p className="mt-6 max-w-sm text-white/65">
              Pricing strategy consulting for SaaS, AI, and e-commerce. We make pricing pay for itself — guaranteed.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {["LinkedIn", "X", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:border-[var(--color-pink-500)] hover:text-[var(--color-pink-500)]"
                >
                  <Social name={s} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {cols.map((col) => (
              <div key={col.heading}>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {col.heading}
                </div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-white/85 transition-colors hover:text-[var(--color-pink-500)]">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Valueships. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </div>

      {/* big watermark */}
      <div className="overflow-hidden">
        <div className="text-display select-none whitespace-nowrap pb-2 text-center text-[18vw] font-black leading-none text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}>
          Valueships.
        </div>
      </div>
    </footer>
  );
}

function Social({ name }: { name: string }) {
  if (name === "LinkedIn") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 .04 5 2.5 2.5 0 0 1-.04-5zM3 9h4v12H3zM10 9h3.6v1.7h.1a4 4 0 0 1 3.6-2c3.85 0 4.7 2.5 4.7 5.7V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8h-4z" />
      </svg>
    );
  }
  if (name === "X") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2H21l-6.51 7.43L22 22h-6.93l-4.85-6.36L4.7 22H2l6.97-7.96L2 2h7.07l4.4 5.83L18.24 2zm-2.43 18h1.92L7.27 4H5.27z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
    </svg>
  );
}
