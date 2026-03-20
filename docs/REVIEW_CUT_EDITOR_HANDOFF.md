# Review Cut Editor Handoff

Last updated: 2026-03-20

## Purpose
This doc captures the actual current state of `Review Cut` in the active `landing/hello.*` build.

This is the restart note for the browser-based post-record editor.

## Active Files
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`

## Current Product Position
`Review Cut` is no longer a playback widget.

It is now a real browser-based editing surface with:
- multitrack timeline lanes
- clip movement
- overlap playback
- cut/split tools
- gain and fade tools
- cleanup preview
- library insert/replace
- markers

It is still in the `strong prototype becoming product` stage, not a hardened production editor yet.

## What Was Built Before Today

### Core editor shell
- `Review Cut` opens as a near full-screen editor over the control room
- can open anytime from the control room
- can load a saved local audio or video file with `Load Recording`
- transport, timeline, library, and inspector are all inside the editor shell

### Playback and timeline
- play / pause
- mute
- orange playhead
- click-to-seek
- drag scrub
- zoom in / out / fit
- horizontal pan control
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
- multitrack lanes now exist in the editor
- original recording defaults to `T1`
- inserted library clips default to a secondary lane
- clips can be moved between tracks with `Track−` and `Track+`
- current lane ceiling is now intentionally capped at `T1-T5`

### Marker tools
- point markers
- range markers
- marker clear
- markers render on the timeline and shift with ripple edits

## What Was Fixed Today

### Structural stabilization
- playhead, viewport, and selection coupling was reduced
- viewport focus now has a real unset state instead of overloading `0` as both left edge and fallback state
- clip-playback end now resets the orange playhead back to the left cleanly
- clicks in the left track-header gutter no longer behave like timeline clicks
- selection no longer forces viewport focus on pointer-down
- pointer-up / pointer-cancel no longer snap the viewport back to the playhead
- a shared Review Cut UI update path now handles time/scrub/pan/render updates more consistently

### Timeline and movement corrections
- clip rebuilds now protect against silent truncation when moved
- Review Cut timeline duration is now based on the edited timeline state once the editor exists, not the original source duration
- delete-to-gap / ripple behavior now lets edited time change instead of preserving stale original time
- moving clips left after cuts no longer stretches the waveform
- moving clips right no longer condenses the waveform due to automatic fit-style refitting
- drag now tracks pointer delta in pixels-to-seconds space instead of recomputing from a shifting viewport on every move
- snap during active clip drag was reduced so movement feels less sticky

### Waveform and visual trust work
- clip waveform drawing now samples actual visible source ranges instead of relying only on coarse cached peaks
- waveform flattening after deletes was reduced by using higher-resolution / more truthful clip-local sampling
- track rendering was pushed further toward clip-local visuals instead of lane-wide wash
- clip labels moved to the top-right tag area to keep wave detail readable
- zoom context improved with visible start/end times and zoom badge

### Fade integrity and polish
- fade actions now snapshot history before any selection-isolation split
- `Undo` can now restore the true pre-fade timeline state
- fade controls now reject ambiguous selections that are not fully inside one clip
- fade readout now distinguishes clip-level vs selection-level fades
- fade wedges now render at their real relative width instead of being capped at `45%`
- fade visuals were cleaned up to look more deliberate and less noisy
- fade playback now uses a softer shaped curve instead of a plain linear ramp ratio

### Review library hot-path cleanup
- removed the full Review Library rerender from selection updates
- replace buttons now update in place instead of rebuilding the list on hot interaction paths

### Track ceiling
- Review Cut now uses a hard cap of `5` tracks total
- lane reassignment and lane clamping now consistently use `T1-T5`
- timeline height growth was tightened so added tracks get room without blowing up the editor vertically

## Current Interaction Notes
- selection is much better than earlier passes, but still not yet at mature DAW precision
- fade behavior is now substantially safer, but still needs one more polish pass around usability
- Review Cut is still audio-first in behavior even though it can load video files
- overlap playback is isolated to the Review Cut audio engine so it does not disturb live recording/music paths
- the main remaining pain point is clip drag smoothness and timeline-follow behavior when moving clips right past the current visible edge
- current desired movement model:
  - preserve the clip waveform shape
  - moving left or right changes only clip location
  - moving right should extend the edited timeline and allow pan/scroll, not compress the clip
  - moving left after a cut should not preserve stale dead time

## Critical Known Issues

### Product / behavior risks
1. Move mode is still not fully smooth.
   Dragging right can still feel mechanical instead of gliding, especially near the right wall of the visible viewport. This is now the top active Review Cut issue.

2. Edited export is only solved for audio.
   `Download Audio Only` renders the edited Review Cut timeline, but `Download Video Show` still exports the source video, not an edited rendered video.

3. `Load Recording` still replaces the active local review source.
   That is risky because opening a past file can overwrite the current browser-held review/export source instead of behaving like a separate project/session.

### Editor / enterprise gaps
4. The modal is not a proper dialog yet.
   It still needs `role="dialog"`, `aria-modal="true"`, and focus trapping.

5. Keyboard ownership is not editor-grade yet.
   Spacebar push-to-talk still exists globally and Review Cut does not fully own transport shortcuts while open.

6. Clip identity in the timeline is improving but still not yet at mature DAW quality.
   Track blocks need stronger labels and source identity to read more like a serious editor.

7. Review Cut state is still heavy and shared.
   The renderer and editor state still live in one large controller, which is why regressions can still appear in movement/selection/playhead interactions.

## Priority Order
1. Finish move-mode smoothing and right-edge timeline-follow behavior
2. Make import/session behavior non-destructive
3. Bring Review Cut modal/accessibility up to enterprise standards
4. Finish timeline visual identity and inspector polish
5. Add project persistence
6. Add a true past recordings/archive system
7. Add edited video render path if Review Cut is expected to be the final video editor too

## Recommended Next Steps
1. Finish clip drag so it behaves like a smooth slide across a fixed timescale.
2. Keep clip shape stable when moving beyond the visible right edge and rely on pan/follow instead of any visual rescaling.
3. Make Review Cut file import/session handling non-destructive.
4. Add dialog/focus/keyboard ownership so Review Cut behaves like a true editor workspace.
5. Continue visual polish only after move/selection behavior is trustworthy.

## Enterprise Standards Still Missing
- fully hardened movement/selection behavior
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

## Tomorrow Resume Target
Resume with the highest-value product gap, not another cosmetic feature.

Recommended order:
1. finish move drag smoothing at the right edge
2. verify clip shape remains stable under left/right movement
3. import/session safety
4. dialog/accessibility hardening
5. further visual polish only after movement feels correct

## Resume Guidance
If restarting this work:
1. treat Review Cut as a serious editor, not a modal helper
2. prioritize correctness and deliverable output over more feature count
3. do not regress live recording/music paths while changing Review Cut
4. keep edits non-destructive
5. prefer product hardening over new experimental features
