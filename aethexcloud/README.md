# AethexCloud

AethexCloud is a static Astro site for cloud hosting services, powered by React
islands for GSAP, Lenis, accordions, pricing tabs, navigation and the contact
form.

## Getting Started

```bash
pnpm install
pnpm dev
```

The Replit preview runs on port 5000. The same static output is compatible with
Vercel.

## Commands

```bash
pnpm dev       # Astro dev server on port 5000
pnpm build     # Static production build
pnpm preview   # Preview the production build on port 5000
pnpm check     # Astro/TypeScript diagnostics
```

## Routes

- `/`
- `/services`
- `/pricing`
- `/contact`

The existing `public/` assets and Switzer font loading are preserved. React is
retained only for components that need browser state or animation libraries.