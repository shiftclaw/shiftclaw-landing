---
paths:
  - "src/**/*.{ts,tsx}"
---

# Frontend Rules — ShiftClaw Landing

## Visual Identity

- **Font sans**: Geist (variable `--font-geist-sans`, loaded via `next/font/google` with `display: "swap"`)
- **Font mono**: Geist Mono (variable `--font-geist-mono`)
- **Primary color (light)**: `oklch(0.205 0 0)` — neutral gray, pure achromatic (0 hue)
- **Dark mode**: system preference (`defaultTheme="system"`)
- **Radius**: `0.625rem`
- **Color space**: OKLch — all tokens in `globals.css`

## Component Rules

- Server Components by default — Client Components (`"use client"`) only when interactivity is needed
- shadcn/ui for all UI components — check `src/components/ui/`
- Lucide React for icons — NEVER use emoji in UI
- Animations via `tw-animate-css`
- Use `next/link` for navigation, `next/image` for optimized images

## Scope

- Marketing site — no Convex, no auth, no i18n
- Focus on performance and SEO (structured data, meta tags, OG images)
- Static content, minimal client-side JS
