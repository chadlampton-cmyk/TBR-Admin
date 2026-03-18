# Session Notes - Current Handoff Summary

Last updated: 2026-03-18

## Purpose
This file is an older condensed handoff summary for the DFS prototype.

For the latest restart note, use:
- `docs/SESSION_NOTES_2026-03-18.md`

## Where The Build Really Lives
Active files:
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`

These files are the real implementation center now.

## Current Product State
- Lounge and On-Air work in one main page flow.
- The Audio Controls drawer is the active feature area.
- Recording, review, and export are working in a browser-side prototype model.
- The Web Audio cue path is in place for live music behavior.

## What Was Finished Most Recently
- Audio Controls drawer was rebuilt around the locked mixer structure:
  - `Music Master`
  - `Active Cues`
  - `Guest Channels`
  - `Output`
- Queue/play semantics were tightened:
  - `Queue Next` is timed playback
  - `Play Now` is immediate playback
- Recording review flow was kept working with the newer audio path.
- Active cue interaction was partially smoothed so slider movement does not force full rerenders during drag.

## Current Known Truth
- The active build is not the old multi-page settings/profile/help workflow.
- Those pages still exist, but they are historical and should not drive new work.
- `hello.js` still contains legacy modal/embed hooks into those pages.

## Current Known Gaps

### Audio Controls
- `Active Cues` still needs final layout/behavior polish.
- Auto-fade states need clearer user-facing feedback.

### Guest Audio
- Guest channel UI exists.
- Guest gain is not yet fully wired as a true authoritative live/recording mixer control.

### Recording Fidelity
- Recording currently captures the live browser-side mix path.
- In practice, the recording/composite path is still centered on local media plus one remote participant path.
- The UI can represent more participants than the current recording logic fully captures.

## Practical Resume Point
Resume in:
1. `landing/hello.js`
2. `landing/styles.css`

Primary next work:
1. finish `Active Cues` polish and stability
2. wire guest audio control into the real mix path
3. validate recording output against live behavior
4. remove or isolate old settings/help/profile dependencies from the active page

## What Not To Do On Restart
- Do not treat `settings`, `help`, or `profile` as the active product center.
- Do not assume multi-guest UI means multi-guest recording is already complete.
- Do not use older planning docs as implementation truth when they conflict with `hello.*`.
