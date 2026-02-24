# Tasks — Issue #18: refactor: centralize siteUrl constant

## Architecture Context

Single constant extraction. Create `src/lib/constants.ts`, replace 3 hardcoded values with import.
Import alias: `@/lib/constants` (existing `@/` alias in tsconfig).

---

- [x] **Task 1: Create `src/lib/constants.ts`**
  - Create new file `src/lib/constants.ts`
  - Content:
    ```ts
    export const SITE_URL = "https://shiftclawco.com";
    ```
  - Pattern: follows existing `src/lib/utils.ts` — simple named export
  - Criterion: `cat src/lib/constants.ts` contains `export const SITE_URL = "https://shiftclawco.com"`

- [x] **Task 2: Replace hardcoded siteUrl in `src/app/layout.tsx`**
  - Add import: `import { SITE_URL } from "@/lib/constants";`
  - Remove line 18: `const siteUrl = "https://shiftclawco.com";`
  - Replace all `siteUrl` references with `SITE_URL` (lines 25, 36, 56, 57)
  - Before:
    ```ts
    const siteUrl = "https://shiftclawco.com";
    // ...
    metadataBase: new URL(siteUrl),
    ```
  - After:
    ```ts
    import { SITE_URL } from "@/lib/constants";
    // ...
    metadataBase: new URL(SITE_URL),
    ```
  - Criterion: `grep 'shiftclawco.com' src/app/layout.tsx` returns 0 matches; `grep 'SITE_URL' src/app/layout.tsx` returns ≥1 match

- [x] **Task 3: Replace hardcoded siteUrl in `src/app/sitemap.ts`**
  - Add import: `import { SITE_URL } from "@/lib/constants";`
  - Remove line 4: `const siteUrl = "https://shiftclawco.com";`
  - Replace `siteUrl` with `SITE_URL` (line 8)
  - Before:
    ```ts
    const siteUrl = "https://shiftclawco.com";
    return [{ url: siteUrl, ... }];
    ```
  - After:
    ```ts
    import { SITE_URL } from "@/lib/constants";
    return [{ url: SITE_URL, ... }];
    ```
  - Criterion: `grep 'shiftclawco.com' src/app/sitemap.ts` returns 0 matches

- [x] **Task 4: Replace hardcoded siteUrl in `src/app/robots.ts`**
  - Add import: `import { SITE_URL } from "@/lib/constants";`
  - Remove line 4: `const siteUrl = "https://shiftclawco.com";`
  - Replace `siteUrl` with `SITE_URL` (line 11)
  - Before:
    ```ts
    const siteUrl = "https://shiftclawco.com";
    sitemap: `${siteUrl}/sitemap.xml`,
    ```
  - After:
    ```ts
    import { SITE_URL } from "@/lib/constants";
    sitemap: `${SITE_URL}/sitemap.xml`,
    ```
  - Criterion: `grep 'shiftclawco.com' src/app/robots.ts` returns 0 matches
