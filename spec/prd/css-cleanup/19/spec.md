# Issue #19 — Remove unused CSS variables (sidebar + chart)

## Summary
Remove ~34 unused CSS custom properties from `globals.css`: 24 `--sidebar-*` variables and 10 `--chart-*` variables. No sidebar or chart components exist in the landing site.

## Architecture Analysis

### Affected Files
- `src/app/globals.css` — sole file to modify

### Variables to Remove
**Sidebar** (in `@theme`, `:root`, `.dark`):
`--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`, and any `--color-sidebar-*` references.

**Chart** (in `:root` and `.dark`):
`--chart-1` through `--chart-5`, and any `--color-chart-*` references.

### Risk Assessment
- **Risk**: None — these variables are unused scaffold defaults from shadcn/ui init
- **Regression**: Zero — no component references these variables
- **Rollback**: Trivial — revert single commit

## Acceptance Criteria
- `grep -c 'sidebar' src/app/globals.css` returns 0
- `grep -c 'chart' src/app/globals.css` returns 0
- `npx next build` passes without errors
- No visual regression

## Testable Elements
None — CSS-only change with no UI components affected.
