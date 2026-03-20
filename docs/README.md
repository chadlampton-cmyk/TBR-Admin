# DFS Docs Index

Last updated: 2026-03-20

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
- `Review Cut` is now a working editor surface with multitrack lanes, playback, zoom, persistent selection, clip-scoped select-all, looped selection playback, delete-to-gap, ripple delete, move mode, overlap playback, split tools, undo/redo, gain tools, cleanup preview, markers, fades, library insert/replace, edited audio export, and `T1-T5` track support
- recording start can now auto-start the selected music track if nothing is queued

What is next:
- finish smoothing Review Cut clip movement, especially when dragging right past the visible edge
- make Review Cut file import/session behavior non-destructive
- bring Review Cut modal/accessibility and keyboard ownership up to editor standards
- continue Review Cut visual polish only after movement/selection trust is stable
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
