# Spec — Issue #18: refactor: centralize siteUrl constant

| Field | Value |
|-------|-------|
| Issue | #18 |
| Labels | ink, P3, tech-debt |
| Branch | feature/18 |

## Context

Tech debt scan 2026-02-20 found `siteUrl` duplicated as a hardcoded string across 3 files. If the domain changes, all 3 need updating — easy to miss one and break SEO metadata.

## Spec

1. Create `src/lib/constants.ts` with `export const SITE_URL = "https://shiftclawco.com"`
2. Replace hardcoded `siteUrl` in all 3 files with the import

Files currently containing the duplication:
- `src/app/layout.tsx:18` — `const siteUrl = "https://shiftclawco.com"`
- `src/app/sitemap.ts:4` — `const siteUrl = "https://shiftclawco.com"`
- `src/app/robots.ts:4` — `const siteUrl = "https://shiftclawco.com"`

## AC

- [ ] `grep -r 'https://shiftclawco.com' src/` returns exactly 1 match (in `src/lib/constants.ts`)
- [ ] `grep -r 'SITE_URL' src/app/layout.tsx src/app/sitemap.ts src/app/robots.ts` returns 3 matches (one per file)
- [ ] `npx next build` passes without errors
- [ ] `cat src/lib/constants.ts` contains `export const SITE_URL`

## Out of Scope

- No env var (`NEXT_PUBLIC_SITE_URL`) — keep it simple as a constant for now
- No other constants to centralize in this issue

---

### Architecture Analysis

#### Files to Create
- `src/lib/constants.ts` — shared constants module

#### Files to Modify
- `src/app/layout.tsx` — remove local `siteUrl`, import `SITE_URL`
- `src/app/sitemap.ts` — remove local `siteUrl`, import `SITE_URL`
- `src/app/robots.ts` — remove local `siteUrl`, import `SITE_URL`

#### Interfaces & Signatures
```ts
// src/lib/constants.ts
export const SITE_URL = "https://shiftclawco.com";
```

#### Import Map
All 3 consumer files: `import { SITE_URL } from "@/lib/constants";`

#### Data Flow
Constants file → imported by layout.tsx, sitemap.ts, robots.ts → used in metadata generation

#### Error Handling
N/A — pure constant, no runtime errors possible

#### Test Requirements
Build must pass. Grep verification per AC.
