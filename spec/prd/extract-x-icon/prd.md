# PRD: Extract X/Twitter Icon to Component

## 1. Problem Statement

Inline SVG for X/Twitter icon in `page.tsx` footer while other social icons use Lucide components. This creates inconsistency and prevents reuse.

## 2. Goals

- Extract X/Twitter SVG into a reusable React component
- Match Lucide icon API (`size`, `className`, spread props)
- Zero visual regression

## 3. Non-Goals

- Other icon extractions
- Lucide dependency changes
- Footer layout redesign

## 4. Solution Overview

Create `src/components/icons/x-icon.tsx` wrapping the existing SVG path with Lucide-compatible props API. Replace inline SVG in footer with the new component import.

## 5. Scope

- **Files**: `src/components/icons/x-icon.tsx` (new), `src/app/page.tsx` (modify footer)
- **Effort**: XS (~5 min)

## 6. Success Criteria

- Component exists and exports correctly
- Inline SVG count in `page.tsx` decreases by 1
- `npm run build` passes
- Visual output identical
