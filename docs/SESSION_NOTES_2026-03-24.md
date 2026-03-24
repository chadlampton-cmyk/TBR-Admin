# Session Notes - 2026-03-24

Last updated: 2026-03-24 (late)

## Purpose
This is the current restart note after the Review Cut stabilization pass.

Use this as the newest implementation handoff.

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
