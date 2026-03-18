# Review Cut Editor Handoff

Last updated: 2026-03-18

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

### Cut behavior
- delete works on the edited timeline
- ripple delete works on the edited timeline
- current delete behavior closes the gap immediately
- there is currently no dead-air-preserving delete mode; `Delete` and `Ripple` both effectively close the cut

### Gain editing
- `Vol−` lowers the selected range by `3 dB`
- `Vol+` raises the selected range by `3 dB`
- current gain amount is shown in the toolbar readout
- gain-edited regions are tinted in the waveform
- playback honors selection gain edits during review
- gain edits shift correctly when earlier sections are cut out

## Current Interaction Notes
- selection behavior was slowed down and stabilized after the viewport was previously re-centering too aggressively during drag
- auto-pan is intentionally slower now so the editor does not “run away” while extending a selection
- loop playback is tied to active selection, not a separate toggle

## Known Constraints / Current Gaps
- undo / redo is not built yet
- there is no `reset gain` action yet
- there is no `normalize selection` action yet
- there is no split-at-playhead or split-at-selection-edge action yet
- there is no marker system yet
- there is no noise-floor overlay yet
- there is no white-noise cleanup pass yet
- there is no library insert/edit path inside the review window yet
- there is no multi-lane clip timeline yet
- current delete and ripple behavior are effectively the same user outcome because both close the gap

## Important Audio / Logging Notes
- review playback now prefers the dedicated audio review asset because some browsers can produce a video file whose audio is less reliable than the separate audio review file
- the review gain path uses a guarded Web Audio graph with fallback to native media playback if the graph cannot initialize
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

## Performance Guardrails
- do not re-decode large media blobs on every edit
- reuse waveform peak data once built
- keep redraws on `requestAnimationFrame`
- avoid DOM-heavy interaction during drag, scrub, zoom, and loop playback
- keep cleanup analysis on-demand and chunked
- keep new features isolated so review-window work does not break live music or recording again

## Remaining Feature Queue
Highest-value next work:

1. undo / redo
2. reset gain
3. normalize selection
4. split at playhead
5. split at selection edges
6. markers / range markers
7. noise-floor overlay
8. auto white-noise cleanup on selection / full show
9. preview original vs cleaned
10. library drawer integration inside review window
11. insert library audio at playhead / replace selection
12. clip fades and per-insert gain

## Resume Guidance
If restarting this work:
1. treat `Review Cut` as the active edit surface, not a simple player
2. do not regress live music during recording while changing review features
3. keep edits non-destructive
4. keep selection interaction stable before adding more tools
5. build one feature at a time and test after each step
