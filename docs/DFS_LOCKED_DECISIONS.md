# DFS Locked Decisions

Last updated: 2026-03-23

## Purpose
These are the current product decisions that should be treated as stable unless explicitly changed.

## Product Direction
- DFS is a live production studio first.
- DFS is not trying to become a full DAW or a full Adobe Audition replacement.
- Post-production is secondary to the live operating experience.
- `Review Cut` should behave like a serious editor inside DFS, but not a separate standalone product.

## Active Build Focus
- The main product path is the single `hello` page flow.
- New implementation work should center on `hello.html`, `hello.js`, `styles.css`, and the modular `review-cut-*.js` files.
- Historical standalone pages are not the current product center.

## Audio Controls
- The `Audio Controls` drawer design is locked to:
  - [AUDIO_CONTROLS_WIREFRAME.html](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/AUDIO_CONTROLS_WIREFRAME.html)
- The drawer shell and section model stay as currently implemented.
- Fit/polish changes are allowed.
- Full redesign is not the current task.

Locked sections:
- `Music Master`
- `Active Cues`
- `Guest Channels`
- `Output`

## Ownership Split
`Library` owns:
- browse
- preview
- upload/delete
- select/use track

`Audio Controls` owns:
- live mix behavior
- active cue handling
- fade controls
- ducking
- stop all
- guest-channel shell
- output confidence/metering

`Review Cut` owns:
- browser-side review/edit workflow
- multitrack timeline edits
- cleanup preview
- markers, fades, overlap behavior
- edited audio export

## Queue / Playback Semantics
- selecting a track does nothing by itself
- `Queue Next` means timed playback
- `Play Now` means immediate playback
- selected-only tracks should not silently auto-play

## Audio Engine Direction
- live music behavior should use the Web Audio path
- DOM-audio-first mixing is not the target direction
- recording mix should continue to route from the shared music bus
- remote listeners should hear the same host program music that the host hears locally

## Review Cut Direction
- keep Review Cut non-destructive
- preserve original/imported sources
- store edits as timeline/editor state
- render edited exports from the timeline state
- empty Review Cut is allowed and should support building a cut from inserted audio
- if a base recording occupies `T1`, inserted clips should prefer higher tracks

## UI Discipline
- avoid cosmetic churn outside active problem areas
- keep controls inside their containers
- avoid overlapping controls/text
- keep drawer behavior coherent before adding more features
- Review Cut polish should follow interaction correctness, not lead it

## Practical Constraint To Remember
- UI shells can exist ahead of final mix/recording fidelity
- do not mistake placeholder or partial guest-channel UI for completed mixer wiring
- do not let Review Cut regress live recording/music paths while improving editor behavior
