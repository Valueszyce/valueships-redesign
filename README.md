# Valueships — Landing Page Redesign

A maximalist, animation-rich rebuild of [valueships.com](https://www.valueships.com) — built as a design exploration with the brand's official palette and typography.

Live preview: deploy to Vercel with one click after import.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (CSS-based theme tokens)
- **Motion** (formerly Framer Motion) — component-level animations
- **GSAP** — installed for advanced scroll-driven sequences
- **TypeScript**

## Design system

Brand palette extracted directly from the production CSS at valueships.com:

- Primary hot pink `#ff005e` with full pink scale
- Pink-tinted whites (`#fff4f8`) and neutral surfaces
- Body gray `#6d7e8c`, headings `#222`
- Subtle lime + lavender accents

Typography: **Montserrat** (display) + **Lato** (body), loaded via `next/font`.

All design tokens live in [`src/app/globals.css`](./src/app/globals.css) under `@theme inline`.

## Sections

| Section | File | Notable |
|---|---|---|
| Navbar | [`Navbar.tsx`](./src/components/Navbar.tsx) | Floating capsule that morphs to glass on scroll |
| Hero | [`Hero.tsx`](./src/components/Hero.tsx) | Stagger-revealed headline, count-up stats |
| Pricing chart | [`PricingChart.tsx`](./src/components/PricingChart.tsx) | Animated SVG with line-draw, area fill, +14.2% delta callout |
| Logo wall | [`LogoWall.tsx`](./src/components/LogoWall.tsx) | Infinite marquee with edge fades |
| Services | [`Services.tsx`](./src/components/Services.tsx) | Mouse-follow spotlight, accent bar reveal |
| Testimonials | [`Testimonials.tsx`](./src/components/Testimonials.tsx) | Scroll-driven parallax word, animated metric counters |
| Resources | [`Resources.tsx`](./src/components/Resources.tsx) | Color-coded type tags, hover-translate arrow |
| CTA | [`CTA.tsx`](./src/components/CTA.tsx) | Animated mesh background, working contact form |
| Footer | [`Footer.tsx`](./src/components/Footer.tsx) | Stroked watermark, social links |

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deployment

The repo is Vercel-ready out of the box:

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. No environment variables required — deploy

## Credits

Original site, brand identity, and copy © Valueships. This is a design study and is not affiliated with or endorsed by Valueships.
