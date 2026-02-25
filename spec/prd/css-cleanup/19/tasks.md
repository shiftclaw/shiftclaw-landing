# Tasks — Issue #19

- [x] Remove all `--sidebar-*` and `--color-sidebar-*` variables from `@theme` inline block in globals.css
- [x] Remove all `--sidebar-*` variables from `:root` block in globals.css
- [x] Remove all `--sidebar-*` variables from `.dark` block in globals.css
- [x] Remove all `--chart-*` and `--color-chart-*` variables from `:root` block in globals.css
- [x] Remove all `--chart-*` and `--color-chart-*` variables from `.dark` block in globals.css
- [x] Verify: `grep -c 'sidebar' src/app/globals.css` returns 0
- [x] Verify: `grep -c 'chart' src/app/globals.css` returns 0
- [x] Build passes: `npm run build`
