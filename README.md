# TBR Admin / Doggfather Studio

Last updated: 2026-03-18

## Current Build Focus
This repo is currently centered on the live Doggfather Studio prototype.

The active implementation is:
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`

These files currently own:
- lounge
- on-air control room
- chat drawer
- music library
- audio controls drawer
- recording review/export flow

## What Is Current
- The live product path is inside `landing/hello.*`.
- The audio-controls and recording workflow are the active build areas.
- `settings`, `help`, and `profile` pages still exist in the repo, but they are historical and should not drive new implementation work unless explicitly revived or removed.

## Start Here
Read these in order for a restart or handoff:

1. `docs/README.md`
2. `docs/DFS_SITE_MAP.md`
3. `docs/DFS_ARCHITECTURE.md`
4. `docs/DFS_PHASE_STATUS.md`
5. `docs/DFS_LOCKED_DECISIONS.md`
6. `docs/SESSION_NOTES_2026-03-10.md`

## Current Resume Point
Resume work in:
- `landing/hello.js`
- `landing/styles.css`

Primary current themes:
- Audio Controls drawer polish and behavior
- active cue layout/stability
- guest audio control wiring
- recording fidelity against the live mix

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

## Important
- Do not treat local browser auth as production auth.
- Use the docs in `docs/` as the handoff layer.
- Treat older planning docs as background context, not canonical implementation truth.
