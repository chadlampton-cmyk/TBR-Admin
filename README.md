# TBR Admin / Doggfather Studio

Last updated: 2026-03-26

## Current Build
This repo is currently centered on the Doggfather Studio live prototype.

Active implementation:
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`

## What Is Current
- The live product path is inside `landing/hello.*`.
- The current workflow focus is storage-backed recording/review/export validation.
- `settings`, `help`, and `profile` pages are historical-only pages and code.
- Treat older planning and session docs as archive context unless `docs/README.md` points to them directly.

## Start Here
Use the docs folder as the single handoff layer.

Read these in order:

1. `docs/README.md`
2. `docs/DFS_SITE_MAP.md`
3. `docs/DFS_ARCHITECTURE.md`
4. `docs/DFS_PHASE_STATUS.md`
5. `docs/SESSION_NOTES_2026-03-24.md`

## Local Run
Terminal 1:
```bash
cd /Users/chadlampton/Documents/Websites/TBR-Admin
node realtime/server.js
```

Terminal 2:
```bash
cd /Users/chadlampton/Documents/Websites/TBR-Admin/landing
python3 -m http.server 8080
```

Open:
- `http://localhost:8080/hello.html`

For local testing, the realtime URL is:
- `http://localhost:8787`

For hosted testing, frontend defaults already point to:
- `https://realtime.turnbucklereport.com`

## GitHub Pages Preview
A GitHub Pages workflow is configured in `.github/workflows/deploy-pages.yml`.

What it does:
- deploys the `landing/` folder to GitHub Pages on pushes to `main`
- makes the Pages root redirect to `hello.html` so the preview opens the active build

Important:
- this does not affect GoDaddy
- GitHub Pages is a preview/published repo view only
- if Pages is not enabled yet in the repo settings, GitHub may ask you to approve the Pages deployment the first time

## Important
- Do not treat local browser auth as production auth.
- Use `docs/README.md` as the canonical docs entry point.
- Treat older planning and session docs as archive context, not canonical implementation truth.
