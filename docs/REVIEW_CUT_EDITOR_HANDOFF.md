# Review Cut Editor Handoff

Last updated: 2026-03-23

## Purpose
This doc captures the actual current state of `Review Cut` in the active `landing/hello.*` build.

This is the restart note for the browser-based post-record editor.

## Active Files
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

## Current Product Position
`Review Cut` is a browser-based multitrack editing surface inside the active `hello` flow.

It is not a full DAW, but it is no longer a simple review widget.

## Current Verified Product State

### Core editor shell
- `Review Cut` opens as a near full-screen editor over the control room
- can open anytime from the control room
- can open before any recording exists
- can load a saved local audio or video file with `Load Recording`
- transport, timeline, library, and inspector are all inside the editor shell

### Playback and timeline
- play / pause
- mute
- orange playhead
- draggable playhead overlay
- click-to-seek
- drag scrub
- zoom in / out / fit
- horizontal pan control
- edge auto-pan while zoomed for scrub/selection
- adaptive time ruler above the tracks
- timeline height grows as tracks are added

### Selection and looping
- selection mode
- drag-to-select
- `All`
- `Clr`
- persistent selection
- stretchable selection edges
- selection auto-pan while zoomed
- selected range loops automatically on play

### Editing tools
- delete to gap
- ripple delete
- move mode
- overlap clip placement
- overlap playback
- overlap modes:
  - `Blend`
  - `Front`
  - `Back`
- split at playhead
- split at selection edges
- undo / redo

### Level and cleanup tools
- selection gain down / up
- reset selection gain
- normalize selection
- per-insert gain for library clips
- clip-targeted gain no longer behaves like cross-track ducking
- noise-floor overlay
- cleanup on selection
- cleanup on full cut
- cleanup clear
- cleanup preview:
  - `Auto`
  - `Original`
  - `Cleaned`

### Clip polish tools
- fade in / fade out controls
- fade reset
- fade visualization inside clip blocks
- inserted library clips can be previewed, inserted at playhead, or used to replace a selected range

### Track model
- multitrack lanes exist in the editor
- original recording defaults to `T1`
- empty editor inserts start on `T1`
- inserted library/imported clips default to a secondary lane when a recording already occupies `T1`
- imported audio files insert as timeline clips instead of replacing the current review asset when Review Cut already has content
- clips can be moved between tracks with `Track−` and `Track+`
- current lane ceiling is capped at `T1-T5`

### Marker tools
- point markers
- range markers
- marker clear
- markers render on the timeline and shift with ripple edits

## What Changed In The 2026-03-23 Rewrite Pass

### Core rewrite
- Review Cut behavior was split out of `landing/hello.js` into dedicated controller modules
- transport, playhead, viewport, media binding, interaction binding, state, render, and session visual-loop logic now have separate files
- `hello.js` still owns shell/bootstrap behavior, but Review Cut no longer depends on one giant inline editor block

### Playback / playhead stability
- second-pass playback and clip-session restart are working again
- the visual loop now survives start correctly
- playhead rendering is direct and module-owned instead of piggybacking on waveform redraw timing
- zoomed playback follows the viewport so the track head does not falsely appear stopped at the right edge

### Editing behavior corrections
- imported audio while Review Cut already has content now inserts as a clip instead of replacing the current review asset
- empty Review Cut can be seeded with audio inserts and starts on `T1`
- clip gain behavior was corrected so clip-targeted gain changes no longer act like accidental cross-track ducking
- moving a clip no longer drags unrelated gain state away from its intended target

### Interaction corrections
- play button, transport startup, and visual loop ownership were repaired during the rewrite
- playhead overlay now has its own hit area and pointer path
- zoomed scrubbing can auto-pan at the edges

### UI polish
- Review Cut window shell, cards, topbar, buttons, and timeline shell received a visual polish pass
- the current look is materially better than the old flat shell, but still not final

## Current Interaction Notes
- Review Cut is still audio-first in behavior even though it can load video files
- overlap playback is isolated to the Review Cut audio engine so it does not disturb live recording/music paths
- the main remaining Review Cut pain point is track-head drag polish while zoomed
- current desired movement model:
  - grab the playhead directly
  - scrub smoothly left or right while zoomed
  - let viewport auto-pan continuously near edges
  - keep motion readable before and during playback

## Critical Known Issues

### Product / behavior risks
1. Track-head drag while zoomed is still not fully premium.
   It is functional, but the last layer of smoothness and confidence is still missing.

2. Edited export is only solved for audio.
   `Download Audio Only` renders the edited Review Cut timeline, but `Download Video Show` still exports the source video, not an edited rendered video.

3. `Load Recording` still replaces the active local review source.
   Imported insert behavior is improved, but full project/session safety is not done.

### Editor / enterprise gaps
4. The modal is not a proper dialog yet.
   It still needs `role="dialog"`, `aria-modal="true"`, and focus trapping.

5. Keyboard ownership is not editor-grade yet.
   Spacebar push-to-talk still exists globally and Review Cut does not fully own transport shortcuts while open.

6. Clip identity in the timeline is improving but still not yet at mature DAW quality.
   Track blocks need stronger labels and source identity to read more like a serious editor.

7. Review Cut still depends on `hello.js` wrappers.
   The architecture is much better, but it is not yet a fully independent editor subsystem.

## Priority Order
1. Finish track-head drag smoothing and zoom-follow behavior
2. Make import/session behavior non-destructive
3. Bring Review Cut modal/accessibility up to enterprise standards
4. Finish timeline visual identity and inspector polish
5. Add project persistence
6. Add a true past recordings/archive system
7. Add edited video render path if Review Cut is expected to be the final video editor too

## Recommended Next Steps
1. Finish playhead drag so it feels smooth before and during playback at any zoom level.
2. Keep zoomed viewport auto-pan smooth and predictable during manual scrub.
3. Make Review Cut file import/session handling non-destructive.
4. Add dialog/focus/keyboard ownership so Review Cut behaves like a true editor workspace.
5. Continue visual polish with typography/spacing refinement after interaction trust is locked.

## Enterprise Standards Still Missing
- fully hardened track-head drag behavior
- edited video output
- project save/load for edit state
- proper dialog accessibility
- keyboard shortcut ownership while editor is open
- stronger clip metadata and labeling
- more intentional track targeting
- duplicate clip and similar clip-level actions

## Non-Destructive Rule
Keep this editor non-destructive.

Do not rewrite source blobs on each edit.

Preferred architecture remains:
- original/imported source intact
- timeline edits stored as operations/state
- final render/export generated from the edited timeline

## Performance Guardrails
- do not re-decode media on every edit
- keep waveform/noise data cached
- keep redraws on `requestAnimationFrame`
- avoid rebuilding library/sidebar UI during hot interactions
- keep Review Cut engine changes isolated from live recording/music paths
- do not let timeline-duration recalculation silently rewrite clip source windows
- preserve clip source audio first, then resolve timeline duration/pan behavior around it

## Resume Target
Resume with the highest-value product gap, not another speculative feature.

Recommended order:
1. finish track-head drag smoothness while zoomed
2. verify zoomed scrubbing left/right is equally reliable
3. dialog/accessibility hardening
4. import/session safety
5. further visual polish after interaction trust is stable
