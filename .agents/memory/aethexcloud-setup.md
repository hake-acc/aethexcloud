---
name: AethexCloud project setup
description: Key facts about the project structure, workflow config, and Next.js 16 quirks.
---

The Next.js app lives in `/home/runner/workspace/aethexcloud/` — not the workspace root.
All dev/build commands must `cd aethexcloud` first.

Workflow command: `cd aethexcloud && pnpm next dev --port 5000 --hostname 0.0.0.0`
Port: 5000 (webview), mapped in .replit as localPort=5000 → externalPort=80.

**Why:** The .replit at the workspace root originally mapped port 3000. Had to update it to 5000 for webview detection to work.

`next.config.ts` must include explicit allowedDevOrigins including `127.0.0.1` and the Replit dev domain.
Wildcard `"*"` does NOT work in Next.js 16 — list origins explicitly.

**How to apply:** Any time the dev server is reconfigured or a new Replit domain is assigned, update `allowedDevOrigins` in `aethexcloud/next.config.ts`.
