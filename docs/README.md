# DFS Docs Index

Last updated: 2026-03-30

## Purpose
This folder is the current handoff layer for the live DFS build.

It should answer:
- what file path is active
- what is implemented now
- what is unfinished
- what is locked
- where work should resume

Canonical rule:
- this file is the only docs entry point
- the newest session restart note is [SESSION_NOTES_2026-03-24.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-24.md)
- older session notes are archive context only

## Read First
For a clean restart, read these in order:

1. [DFS_SITE_MAP.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_SITE_MAP.md)
2. [DFS_ARCHITECTURE.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_ARCHITECTURE.md)
3. [DFS_PHASE_STATUS.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_PHASE_STATUS.md)
4. [DFS_LOCKED_DECISIONS.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_LOCKED_DECISIONS.md)
5. [REVIEW_CUT_EDITOR_HANDOFF.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/REVIEW_CUT_EDITOR_HANDOFF.md)
6. [SESSION_NOTES_2026-03-24.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-24.md)
7. [DFS_REFACTOR_PROTECTION_PLAN.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_REFACTOR_PROTECTION_PLAN.md)

## Canonical Active Files
- [hello.html](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.html)
- [hello.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js)
- [styles.css](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css)
- [auth.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/auth.js)
- [recording-controller.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/recording-controller.js)
- [recording-capture.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/recording-capture.js)
- [onair-library-bridge.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/onair-library-bridge.js)
- [review-cut-state.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-state.js)
- [review-cut-render.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-render.js)
- [review-cut-playback.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-playback.js)
- [review-cut-playback-controller.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-playback-controller.js)
- [review-cut-playhead-controller.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-playhead-controller.js)
- [review-cut-viewport-controller.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-viewport-controller.js)
- [review-cut-interaction-controller.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-interaction-controller.js)
- [review-cut-media-controller.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-media-controller.js)
- [review-cut-session-controller.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-session-controller.js)
- [review-cut-noise-tools.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/review-cut-noise-tools.js)

## Current Resume Snapshot
What is done:
- GitHub backup is in place
- Railway deploy root is understood
- live music routes to recording and remote listeners
- recording can pick up music added after recording starts
- `Review Cut` core has been split into dedicated controller modules instead of living only in `hello.js`
- `Review Cut` is a working browser editor with multitrack lanes, playback, zoom, scrubbing, insert/import flows, split/delete/ripple, overlap playback, fades, cleanup preview, markers, gain tools, and edited audio export
- empty `Review Cut` can now open without a recording and be seeded with inserted audio starting on `T1`

What is next:
- validate fresh audio-only takes after the new WAV-master recording path
- validate Railway-backed `MP3` / `M4A` / `MP4` export after `ffmpeg` deploy
- validate the show-library save/filter path live on newly created assets
- decide draft overwrite/version semantics for `Post-Production`
- continue `Active Cues` fit and polish
- validate guest audio behavior against live and recorded output

## Legacy Warning
Do not restart from the old standalone pages.

- [settings.html](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/settings.html) is no longer a standalone product page; it only survives as the embedded iframe-backed Settings surface launched from `hello.html`
- [profile.html](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/profile.html) is archive / legacy only
- [help.html](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/help.html) is archive / legacy only
- active work belongs in `hello.*` and the extracted modules, not by reviving those old page flows

## Locked Reference
- [AUDIO_CONTROLS_WIREFRAME.html](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/AUDIO_CONTROLS_WIREFRAME.html)

## Supporting Docs
- [RAILWAY_GODADDY_SETUP.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/RAILWAY_GODADDY_SETUP.md)
- [CLOUDFLARE_R2_SETUP.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/CLOUDFLARE_R2_SETUP.md)
- [REVIEW_CUT_EDITOR_HANDOFF.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/REVIEW_CUT_EDITOR_HANDOFF.md)
- [SESSION_NOTES_2026-03-24.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-24.md)
- [DFS_REFACTOR_PROTECTION_PLAN.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_REFACTOR_PROTECTION_PLAN.md)
- [STUDIO_V1_PLAN.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/STUDIO_V1_PLAN.md)

## Archived Session Notes
These are archived context only.

Do not use them as the main restart path unless a current doc explicitly sends you there:
- [SESSION_NOTES_2026-03-07.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-07.md)
- [SESSION_NOTES_2026-03-08.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-08.md)
- [SESSION_NOTES_2026-03-09.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-09.md)
- [SESSION_NOTES_2026-03-18.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-18.md)
- [SESSION_NOTES_2026-03-23.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-23.md)
