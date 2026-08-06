---
name: Switzer font limitation in Replit preview
description: Fontshare CDN is blocked in Replit's preview iframe; system font fallback is used in dev.
---

The PRD specifies Switzer from Fontshare (`https://api.fontshare.com`).
In the Replit preview environment, external font CDN requests return 403 — the font does not load in dev preview.

Current implementation: `<link>` tag in layout.tsx `<head>`. Font loads correctly on Vercel production.
System-ui fallback is defined so the site looks acceptable in dev.

**Why:** Replit's iframe proxy blocks third-party CDN requests from the preview pane.

**How to apply:** Do not spend time "fixing" the 403 on Fontshare in dev — it is an environment constraint, not a code bug. The font works in Vercel deployment.
