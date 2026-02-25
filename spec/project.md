# ShiftClaw Landing — Project Constitution

## 1. Mission

Marketing landing page for ShiftClaw, an AI-first indie studio. Showcases products (RetroShift, MeetingZero), tells the human+AI story, and drives signups. Single-page site optimized for SEO and fast loading.

## 2. Architecture Overview

Static-first Next.js 16 App Router site. Server Components exclusively — no client-side state or API calls except the theme toggle. Sections: Hero (brand positioning), Products (SaaS showcase), About (studio story), Contact. No database, no auth, no payments. Dark/light mode via next-themes. Deployed on Vercel with dev=preview, main=production.

## 3. Tech Decisions

| Decision | Choice | Rationale | Date |
|---|---|---|---|
| Framework | Next.js 16 (App Router) | Consistent with project stack; SSG for performance | 2025-Q4 |
| Styling | Tailwind v4 + shadcn/ui (New York) | Utility-first with accessible components; dark mode via next-themes | 2025-Q4 |
| Icons | Lucide | Consistent with other ShiftClaw projects | 2025-Q4 |
| Font | Geist (Next.js default) | Clean, modern, no extra font loading | 2025-Q4 |
| UI library | Radix UI | Accessible primitives underlying shadcn/ui components | 2025-Q4 |
| Database | None | Static site — no DB, no Convex, no API routes | 2025-Q4 |

## 4. Patterns & Conventions

Server Components by default — the only Client Component is the theme toggle. All components in `src/components/`; UI primitives in `src/components/ui/`. `cn()` helper from `src/lib/utils.ts` for conditional class merging. Responsive mobile-first design. Feature branches from `dev`. Conventional commits.

## 5. Security Baseline

No auth, no user data, no API routes — minimal attack surface. Content Security Policy headers recommended for production. No secrets required beyond Vercel deployment tokens (managed in KeePassXC). Dependencies audited before release.

## 6. Performance Targets

Lighthouse scores: 95+ on all four metrics (Performance, Accessibility, Best Practices, SEO). First Contentful Paint under 1 second. Total page weight under 200KB gzipped. No client-side JavaScript beyond the theme toggle and Next.js runtime.

## 7. i18n Strategy

Not yet implemented. Planned: next-intl with EN primary and IT secondary. Currently English-only.
