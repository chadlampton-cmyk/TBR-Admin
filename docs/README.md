# DFS Docs Index

Last updated: 2026-03-18

## Purpose
This folder is the current handoff layer for the live DFS build.

It should answer:
- what file path is active
- what is implemented now
- what is unfinished
- what is locked
- where work should resume

## Read First
For a clean restart, read these in order:

1. [DFS_SITE_MAP.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_SITE_MAP.md)
2. [DFS_ARCHITECTURE.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_ARCHITECTURE.md)
3. [DFS_PHASE_STATUS.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_PHASE_STATUS.md)
4. [DFS_LOCKED_DECISIONS.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_LOCKED_DECISIONS.md)
5. [SESSION_NOTES_2026-03-18.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-18.md)
6. [SESSION_NOTES_2026-03-10.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-10.md)

## Canonical Active Files
- [hello.html](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.html)
- [hello.js](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js)
- [styles.css](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css)

## Current Resume Snapshot
What is done:
- GitHub backup is in place
- Railway deploy root is understood
- live music now routes to recording and remote listeners
- recording can pick up music added after recording starts
- `Review Cut` is now a working editor shell with playback, zoom, persistent selection, looped selection playback, cut/splice behavior, and section gain editing
- recording start can now auto-start the selected music track if nothing is queued

What is next:
- add undo / redo to `Review Cut`
- add gain reset / normalize tools
- add split / markers / cleanup overlay work to `Review Cut`
- continue `Active Cues` fit and polish
- validate guest audio behavior against live and recorded output

## Locked Reference
- [AUDIO_CONTROLS_WIREFRAME.html](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/AUDIO_CONTROLS_WIREFRAME.html)

## Supporting Docs
- [RAILWAY_GODADDY_SETUP.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/RAILWAY_GODADDY_SETUP.md)
- [CLOUDFLARE_R2_SETUP.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/CLOUDFLARE_R2_SETUP.md)
- [REVIEW_CUT_EDITOR_HANDOFF.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/REVIEW_CUT_EDITOR_HANDOFF.md)
- [STUDIO_V1_PLAN.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/STUDIO_V1_PLAN.md)
- [RECORDING_V1_ARCHITECTURE.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/RECORDING_V1_ARCHITECTURE.md)

## Historical Notes
These are historical context, not the main restart path:
- [SESSION_NOTES_2026-03-07.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-07.md)
- [SESSION_NOTES_2026-03-08.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-08.md)
- [SESSION_NOTES_2026-03-09.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/SESSION_NOTES_2026-03-09.md)
