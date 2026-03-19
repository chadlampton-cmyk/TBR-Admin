# Review Cut Editor Handoff

Last updated: 2026-03-19

## Purpose
This doc captures the actual current state of the `Review Cut` editor in the active `hello` build, plus the next feature queue.

This is the restart note for the current browser-based editing surface.

## Current Product Position
`Review Cut` is now an active post-record editing window, not just a playback widget.

Current intent remains:
- keep the original recording untouched
- let users review, select, cut, loop, and adjust level on the show
- grow this into the future cleanup and post-production surface
- keep the browser responsive while features are added one at a time

## Active Files
Primary implementation area:
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`

## What Is Implemented Now

### Review window shell
- `Review Cut` button sits below Music Library
- button stays disabled until a recording exists
- review opens in a foreground modal over the control room
- export/review status stays in the existing control-room review panel

### Playback and waveform
- play / pause works
- mute works
- click-to-seek works
- drag scrub works
- waveform is rendered in a larger Audition-inspired review strip
- orange playhead tracks the current position
- review prefers the dedicated audio review asset first, then falls back to video

### Zoom
- zoom in
- zoom out
- fit whole show
- waveform viewport follows the edited timeline, not only the raw source duration

### Selection
- selection mode toggle
- drag-to-select
- select all
- clear selection
- selection stays active after release
- existing selection edges can be grabbed and stretched
- visible selection handles are drawn at both edges
- when zoomed in, dragging a selection to the left or right edge auto-pans the viewport so the selection can extend beyond currently visible audio

### Loop
- if a selection exists, pressing play loops the selected range automatically
- transport shows `Loop On` when a selection exists
- loop playback now replays audible audio on every pass, not just the first pass
- live gain changes during loop playback are now heard immediately instead of waiting for the next pass

### Cut behavior
- delete works on the edited timeline
- ripple delete works on the edited timeline
- `Delete` now leaves a gap for manual pacing edits
- `Ripple` removes the selected section and closes the gap
- clips can be manually moved after a gap delete
- moved clips can overlap instead of being hard-blocked

### Gain editing
- `Vol−` lowers the selected range by `3 dB`
- `Vol+` raises the selected range by `3 dB`
- `Reset` clears gain edits from the current selection
- `Norm` normalizes the current selection toward a `-3 dB` peak target
- current gain amount is shown in the toolbar readout
- gain-edited regions are tinted in the waveform
- playback honors selection gain edits during review
- gain edits shift correctly when earlier sections are cut out

### Undo / redo
- undo is built
- redo is built
- undo/redo restores review timeline, gain edits, selection, zoom, playhead position, and related review draft state

### Clip editing
- `Move` mode is built
- clips can be dragged manually across gaps
- clips can overlap on the timeline
- overlapping clips are now heard together during audio review playback
- `Split` is built
- `Split` cuts the clip under the orange playhead into two separate clips
- `Split Sel` is built
- `Split Sel` isolates the current highlighted range as its own clip block
- overlap behavior modes are built:
  - `Blend`
  - `Front`
  - `Back`
- split/source-window playback has been hardened after recent regressions where post-split clips could duplicate the same source half or go silent

### Review toolbar
- review toolbar has been regrouped into compact sections so controls wrap inside the modal instead of falling outside the container
- current groups are transport, edit history, edit modes, edit actions, gain, overlap, and zoom

### Visual polish
- overlap regions now render with a softer orange blend treatment instead of a harsher stacked-card look
- overlap animation was slowed and flattened so the merge reads more like a controlled crossfade
- only true overlap regions receive the layered merge treatment; ordinary split clips should not read like duplicate stacked audio

## Current Interaction Notes
- selection behavior was slowed down and stabilized after the viewport was previously re-centering too aggressively during drag
- auto-pan is intentionally slower now so the editor does not “run away” while extending a selection
- loop playback is tied to active selection, not a separate toggle
- overlap playback is isolated to audio review mode so video review, recording, export, and live music remain on their existing paths
- `All` selection now works regardless of where the orange playhead is sitting
- if playback has completed, pressing play again restarts from the beginning automatically
- selection-edge dragging was revised so the handle follows the original grab point instead of snapping too far on first move

## Known Constraints / Current Gaps
- there is no marker system yet
- there is no noise-floor overlay yet
- there is no white-noise cleanup pass yet
- there is no library insert/edit path inside the review window yet
- there is no visible marker/range-marker lane yet
- there is no dedicated fade-handle UI yet for overlap regions
- there is no clip insert/edit path from the library yet
- there is no quick debug/open helper yet for opening `Review Cut` without first making a recording
- overlap visuals are improved, but overlap UX still needs dedicated fade-length/crossfade controls if transitions are meant to be tuned precisely

## Important Audio / Logging Notes
- review playback now prefers the dedicated audio review asset because some browsers can produce a video file whose audio is less reliable than the separate audio review file
- the review gain path uses a guarded Web Audio graph with fallback to native media playback if the graph cannot initialize
- overlap audio playback in `Review Cut` now uses scheduled Web Audio clip playback against a decoded audio buffer
- music-at-record-start behavior was expanded:
  - queued cue still takes priority
  - if nothing is queued, the currently selected music track now auto-starts when recording begins

Relevant runtime diagnostics to inspect in browser if needed:
- `music.recording_selected_play_ok`
- `music.recording_selected_play_failed`
- `music.recording_queue_play_skipped`
- `music.recording_start_cue_failed`
- `recording.build_stream`
- `recording.audio_start`
- `recording.audio_stop`
- `recording.review_audio_graph_unavailable`
- `recording.review_audio_graph_failed`
- `recording.review_audio_graph_resume_failed`

## Non-Destructive Editing Rule
This must remain non-destructive.

Do not rewrite the source blob for each edit.

Current architecture direction:
- original recording asset remains intact
- editor works from an edited timeline model
- gain edits are stored as range adjustments against edited time
- future cleanup and library insert work should follow the same pattern

Recommended edit operation types going forward:
- `cutRange`
- `rippleDeleteRange`
- `muteRange`
- `gainRange`
- `normalizeRange`
- `denoiseRange`
- `denoiseFull`
- `insertLibraryClip`
- `clipFade`
- `markerAdd`
- `splitAtPlayhead`
- `splitAtSelectionEdges`
- `overlapModeChange`

## Performance Guardrails
- do not re-decode large media blobs on every edit
- reuse waveform peak data once built
- keep redraws on `requestAnimationFrame`
- avoid DOM-heavy interaction during drag, scrub, zoom, and loop playback
- keep cleanup analysis on-demand and chunked
- keep new features isolated so review-window work does not break live music or recording again

## Remaining Feature Queue
Highest-value next work:

1. markers / range markers
2. noise-floor overlay
3. auto white-noise cleanup on selection / full show
4. preview original vs cleaned
5. library drawer integration inside review window
6. insert library audio at playhead / replace selection
7. clip fades and per-insert gain
8. dedicated crossfade-length / fade-shape controls for overlap regions
9. debug helper to open `Review Cut` without recording, for UI review and styling passes

## Tomorrow Resume Target
Resume with marker support unless a fresh split/overlap regression appears during testing.

Recommended restart order:
1. verify split still preserves the original source correctly after upload
2. if stable, build markers / range markers next
3. after markers, move to noise-floor overlay before attempting cleanup processing

## Resume Guidance
If restarting this work:
1. treat `Review Cut` as the active edit surface, not a simple player
2. do not regress live music during recording while changing review features
3. keep edits non-destructive
4. keep selection interaction stable before adding more tools
5. build one feature at a time and test after each step
