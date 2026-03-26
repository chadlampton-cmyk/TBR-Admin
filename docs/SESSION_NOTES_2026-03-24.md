# Session Notes - 2026-03-24

Last updated: 2026-03-26

## Purpose
This is the current restart note after the Review Cut stabilization pass.

Use this as the newest implementation handoff.

## Current Refactor Pause State
The project is intentionally paused in a stable state after the first `hello.js` extraction passes.

What was extracted:
- shared library/editorial workflow into:
  - `landing/onair-library-storage.js`
  - `landing/onair-library-render.js`
  - `landing/onair-library-controller.js`
  - `landing/onair-library-bridge.js`
- recording workflow into:
  - `landing/recording-controller.js`
  - `landing/recording-capture.js`
- realtime/chat bootstrap transport into:
  - `landing/realtime-controller.js`
  - `landing/chat-controller.js`

What still remains in `landing/hello.js`:
- chat UI rendering and popover-heavy message UI
- participant rendering and some host/spotlight UI coupling
- signal handling details that are still tightly coupled to media/runtime state
- on-air audio/mixer/cue behavior

This means the extraction order is still valid, but the next pass should not begin from memory. Start from the protection plan and browser-verify immediately after every seam change.

## Regression Recorded During Refactor
One full-page startup regression was introduced during the extraction work.

Observed behavior:
- top-right profile/settings button stopped responding
- chat drawer stopped opening
- `Go On-Air` stopped responding
- readiness/preflight stopped updating
- session UI looked stale or wrong because page startup aborted early

Root cause:
- `landing/hello.js` constructed `recordingController` before `RECORDING_DEMO_MODE` had been initialized
- this caused:
  - `Uncaught ReferenceError: Cannot access 'RECORDING_DEMO_MODE' before initialization`
- because that exception happened during startup, the rest of `hello.js` never finished binding the page

Fix:
- move `RECORDING_DEMO_MODE` earlier in `landing/hello.js` so it exists before controller construction

Important lesson:
- syntax checks were not enough
- the app must be browser-verified after each extraction pass before continuing

## Current Active Files
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`
- `landing/review-cut-state.js`
- `landing/review-cut-render.js`
- `landing/review-cut-playback.js`
- `landing/review-cut-playback-controller.js`
- `landing/review-cut-playhead-controller.js`
- `landing/review-cut-viewport-controller.js`
- `landing/review-cut-interaction-controller.js`
- `landing/review-cut-media-controller.js`
- `landing/review-cut-session-controller.js`
- `landing/auth.js`
- `realtime/server.js`
- `docs/DFS_PHASE_STATUS.md`

## What Was Completed

### Review Cut stabilization pass
- selection-mode freeze was traced to a real stack overflow and fixed
- drag cancellation became more reliable during pointer capture
- playhead/zoom follow became materially tighter during playback
- stale viewport focus was cleared correctly when transport starts
- empty-state insert flow now works for library-only timelines
- library-only playback/gain/remove flows were hardened
- whole-clip gain behavior was improved for selected full clips
- imported audio can seed and extend timelines without requiring a recording first

### Timeline and track behavior
- repeated inserts now follow track occupancy instead of always falling back to `T1`
- recording preservation/append behavior was improved so authored timelines are less likely to be rebuilt destructively
- playhead overlay geometry was corrected against the actual timeline canvas
- stage edit controls were moved above the tracks where they are easier to discover

### Review Cut UX and safety
- modal semantics were improved with dialog role, focus entry, focus trap, and `Escape` handling
- `Load Recording` was relabeled to `Import Source`
- status and error messaging were improved for play/import/export failures
- audio import behavior is more non-destructive inside an existing draft
- file-input reset now happens even after import failure

### Storage-backed workflow wiring
- stopped recordings now attempt to auto-save into shared `Post-Production`
- `Post-Production` rows now show `Review Cut` and `Delete`
- Review Cut can open a shared `Post-Production` asset directly from the library drawer
- Review Cut now has `Save Draft` and `Save to Episodes`
- saved `Episodes` rows now expose `Export Audio` and `Delete`
- save actions now auto-open the destination library tab after save
- library rows are tagged by `libraryKind` so `Music` can stay compact while `Post-Production` / `Episodes` use a different action layout

### Naming and cache behavior
- `hello.html` cache-buster for `hello.js` was bumped so newer Review Cut/storage changes can break browser cache cleanly
- storage-backed titles and export names were aligned to the configured recording naming base instead of the older hardcoded timestamp label
- current naming shape is:
  - raw take: `showname-YYYY-MM-DD`
  - draft: `showname-YYYY-MM-DD-draft`
  - episode: `showname-YYYY-MM-DD-episode`
  - audio export: `showname-YYYY-MM-DD-audio.wav`

## Current Verified Behavior
- Review Cut feels materially smoother than the earlier rewrite handoff
- zoom/play follow is much tighter and more usable in real editing
- selection operations no longer freeze the editor
- inserted audio can build a multitrack draft without an initial recording
- edit controls above the timeline feel more natural
- edited audio export still works from the browser-side Review Cut render
- only one of the `Library` / `Audio Controls` drawers can be open at a time
- `Post-Production` / `Episodes` action rows are no longer generic placeholders
- after the `RECORDING_DEMO_MODE` init-order fix, page startup is functional again and core click paths respond normally

## Current Wiring State
What is wired now:
1. `Stop Recording` finalizes a local audio blob
2. client attempts shared upload into `post-production`
3. `Post-Production` drawer row can open Review Cut
4. Review Cut can save rendered audio into:
   - `post-production` via `Save Draft`
   - `episodes` via `Save to Episodes`
5. `Episodes` drawer row can:
   - export audio
   - delete the saved episode

What this depends on:
- Railway realtime service must have working R2 write credentials
- `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` must come from an R2 credential with `Object Read & Write`
- that credential must cover:
  - `doggfather-media`
  - `doggfather-recordings`

Observed failure during implementation:
- saves initially failed with `Access Denied`
- realtime logs confirmed the upload path was reaching R2 and being rejected
- root cause was R2 credentials/permissions, not the Review Cut save wiring

## Current Product Workflow Decision
Audio comes first.

The intended workflow is now:
1. record in Control Room
2. when stop is pressed, auto-save the take into `Post-Production`
3. open that take in Review Cut
4. either `Save Draft` back into `Post-Production` or `Save to Episodes`
5. export from `Episodes`

This means:
- `Post-Production` = raw takes and in-progress drafts
- `Episodes` = approved/published saves
- `Music` = reusable cue tracks

Current practical behavior:
- `Post-Production` is now partially real
- `Episodes` is now partially real
- export should move toward `Episodes` as the primary shelf
- the old control-room export surface still exists and is now partially redundant

## Live Music Control Decision
The Control Room music section needs explicit playback roles instead of label-driven cue categories.

Decision:
1. retire `Cue Slot` as a product concept unless it gains real behavior
2. define three distinct cue roles:
   - `Current Cue`
   - `Next Up`
   - `Layer`

Meaning:
- `Current Cue` = the primary cue currently playing live
- `Next Up` = the next staged primary cue that should take over when `Current Cue` ends
- `Layer` = an intentionally additional cue started while another cue is already active

Behavior rules:
- selecting a track still does nothing by itself
- if nothing is playing, `Start Current` creates the `Current Cue`
- if a `Current Cue` is playing and the host stages another primary cue, that cue belongs in `Next Up`
- when `Current Cue` ends, `Next Up` should promote into the new `Current Cue`
- if the host intentionally uses `Add Layer` while something is already active, that action should create a `Layer`
- layered playback is still allowed and should not be lost during this cleanup

What this avoids:
- fake categorization through `Intro` / `Ad Break` / `Outro`
- mixing sequential transition logic with simultaneous layered playback
- a UI that implies control without actually changing runtime behavior

## Audio Controls Rule Confirmation
The current code already supports the intended `Audio Controls` ownership and that split should be preserved during the next UI pass.

What `Audio Controls` currently controls in code:
- manual `Fade In`
- manual `Fade Out`
- `Auto Fade In`
- `Auto Fade Out`
- `Duck Voice`
- `Reset Mix`
- `Stop All`
- main music volume slider
- active cue rack updates for currently playing cues

What this means for the upcoming music UI cleanup:
- the `Library` side should be responsible for cue choice and staging
- the `Audio Controls` drawer should remain responsible for how live cues behave after they start
- replacing `Cue Slot` with `Current Cue` / `Next Up` / `Layer` should not move fade or mix controls out of `Audio Controls`

This keeps the workflow coherent:
1. choose/stage music in Control Room
2. manage live behavior in `Audio Controls`
3. preserve layered playback without hiding mix controls inside the staging UI

## Show Library Build Direction
Show organization should be added on top of the current storage model, not by replacing it.

Decision:
- keep `music`, `post-production`, and `episodes` as the real library buckets
- add a user-managed show-library layer that tags assets and filters views

Target user flow:
1. create a show library once
2. pick that show in Control Room as the active target
3. record/upload/save as normal
4. assets land in the existing buckets with show-library metadata attached
5. Library drawer filters those buckets by show when needed

Build path:
1. add persistent `studio_show_libraries`
2. expose `GET /show-libraries` and `POST /show-libraries`
3. add `showLibraryId` filtering to `GET /library/assets`
4. add `Active show library` selector in Control Room
5. add `Show Filter` selector in the Library drawer
6. attach active show-library metadata to:
   - shared music uploads
   - browser-local music metadata sync
   - recording saves to `Post-Production`
   - Review Cut saves to `Post-Production` / `Episodes`
7. later, add management polish:
   - rename/archive show libraries
   - better create/edit UI than prompt-based creation

## Storage Direction
Use Railway Postgres plus the existing shared media storage path.

Current backend already supports:
- library asset metadata in Postgres via `studio_library_assets`
- object-storage upload/download tickets
- listing/deleting library assets by `libraryKind`

Planned library kinds:
- `music`
- `post-production`
- `episodes`

Planned asset roles:
- `raw-recording`
- `post-draft-audio`
- `episode-audio`
- `episode-video` later

Recommended metadata:
- `episodeKey`
- `sourceTakeId`
- `savedFromReviewCut`
- `reviewKind`
- `hasAudio`
- `hasVideo`
- `draftVersion`

Current implementation note:
- storage is still asset-row based, not grouped episode objects yet
- `Episodes` and `Post-Production` currently save as individual library assets
- audio/video sibling grouping is still future work

## What Still Needs To Be Done

### Reliability / validation
- verify the full live path after the RW R2 credential swap:
  - stop recording -> `Post-Production`
  - `Review Cut`
  - `Save Draft`
  - `Save to Episodes`
  - `Export Audio`
- confirm library refresh is reliable after save on the live site
- confirm status messaging is clear enough during slow saves

### Workflow cleanup
- decide whether `Save Draft` should create a new asset every time or conceptually update/version an existing draft
- decide whether old top-level control-room `Playback` / `Download` affordances should be removed or relabeled now that `Episodes` owns export better
- decide whether Review Cut should keep a direct export button once episode-based export is trusted

### Library polish
- tighten row metadata and labels for `Post-Production` and `Episodes`
- consider adding rename support for drafts/episodes
- consider `Archive` later for episodes if they become less disposable than drafts

### Video later
- video Review Cut is still not implemented
- `Audio + Video` save/export path is still future work
- episode grouping for audio/video siblings is still future work

## Next Build Checklist
Completed:
1. Auto-save stopped recordings into `Post-Production`
2. Render meaningful `Post-Production` rows with `Review Cut` and `Delete`
3. Open Review Cut directly from a `Post-Production` asset
4. Add `Save Draft` in Review Cut
5. Add `Save to Episodes` in Review Cut
6. Render meaningful `Episodes` rows
7. Add `Export Audio` to episode rows

Still next:
1. verify save reliability live after RW R2 credential update
2. confirm the final naming flow against Settings expectations
3. clean up control-room/export redundancy
4. decide draft versioning behavior
5. add video/export pairing later when video Review Cut exists

## Current Biggest Open Questions
- whether `Save Draft` should create a new draft asset every time or update/version an existing one
- how episode audio/video siblings should be grouped under one visible episode row
- whether the Control Room still needs a top-level export affordance after episode-based export is live

## Handoff Summary
Review Cut is no longer the main unstable area.

The next implementation center is no longer inventing the workflow.

It is:
- validate the storage-backed editorial workflow live
- clean the remaining UI/control-room redundancy around it
- then move on to video later

Current handoff-ready caution:
- do not resume extraction by guessing
- reopen the browser and verify the page after every refactor slice
- if the page feels globally dead, check Console first for a startup exception before assuming individual controls are broken

To protect the current build while that work continues:
- use [DFS_REFACTOR_PROTECTION_PLAN.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_REFACTOR_PROTECTION_PLAN.md) for the safe extraction order around `hello.js` and `server.js`
- do not start with a broad rewrite
