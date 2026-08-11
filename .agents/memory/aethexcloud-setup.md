---
name: AethexCloud project setup
description: Key facts about the project structure, workflow config, and Astro development setup.
---

The Astro app lives in `/home/runner/workspace/aethexcloud/` — not the workspace root.
All dev/build commands must `cd aethexcloud` first.

Workflow command: `cd aethexcloud && pnpm dev`
Port: 5000 (webview), mapped in .replit as localPort=5000 → externalPort=80.

**Why:** The .replit at the workspace root originally mapped port 3000. Had to update it to 5000 for webview detection to work.

**How to apply:** Run package commands from `aethexcloud/`; the configured `Start application` workflow is the canonical preview workflow.
