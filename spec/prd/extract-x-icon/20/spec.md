# Issue #20: Extract X/Twitter Icon to Component

## Summary

Extract inline X/Twitter SVG from `page.tsx` footer into a reusable `XIcon` component matching Lucide icon API.

## Architecture Analysis

### Component Design
- New file: `src/components/icons/x-icon.tsx`
- Props: `size` (default 24), `className`, spread `SVGProps<SVGSVGElement>`
- Named export: `XIcon`
- Follows Lucide pattern: accepts size prop that maps to width/height

### Integration Point
- `src/app/page.tsx` footer section: replace inline `<svg>` with `<XIcon />` import
- Pass existing className/size props from the inline usage

### Zero Dependencies
- No new packages needed
- Pure React component wrapping existing SVG path data
