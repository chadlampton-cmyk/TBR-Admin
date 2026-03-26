# DFS Locked Decisions

Last updated: 2026-03-26

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
- staging `Current Cue` / `Next Up` / `Layer` intent

`Audio Controls` owns:
- live mix behavior
- active cue handling
- fade controls
- ducking
- stop all
- master music volume
- per-active-cue adjustment
- auto-fade toggles
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
- `Start Current` means immediate primary playback
- `Stage Next` means one explicit next-up cue waiting to promote when current ends
- `Add Layer` means intentional simultaneous playback on top of what is already live
- selected-only tracks should not silently auto-play

## Live Music Control Model
- `Cue Slot` is not a meaningful product control in its current form and should not be treated as a stable concept.
- The live music UI should move toward three explicit cue roles:
  - `Current Cue`
  - `Next Up`
  - `Layer`
- `Current Cue` means the primary live cue the host is focused on.
- `Next Up` means the next primary cue staged to take over when `Current Cue` ends.
- `Layer` means an intentionally additional cue started while another cue is already active.
- `Next Up` and `Layer` are different intents and should not share one vague control path.
- When `Current Cue` ends, `Next Up` should promote into the new `Current Cue`.
- Starting another cue while `Current Cue` is already active should preserve layered playback instead of overwriting the primary cue model.
- UI changes should favor explicit staging and transition control over label-driven categorization like `Intro` / `Outro`.

## Live Music Ownership Rule
- `Library` decides what cue should play and in what role.
- `Audio Controls` decides how active cues sound once they are live.
- `Library` should not own fade, duck, master volume, or stop-all mix behavior.
- `Audio Controls` should not be the place where hosts browse for the next asset to stage.
- `Current Cue`, `Next Up`, and `Layer` are playback-role concepts.
- `Fade In`, `Fade Out`, `Auto Fade In`, `Auto Fade Out`, `Duck Voice`, `Main Music Volume`, and active-cue balancing remain `Audio Controls` concepts.

## Show Library Direction
- keep the existing fixed asset buckets:
  - `music`
  - `post-production`
  - `episodes`
- do not replace `libraryKind` with user-created dynamic libraries
- user-created show organization should live as metadata and filtering, not as new storage buckets
- each asset may carry:
  - `showLibraryId`
  - `showLibraryTitle`
  - `showLibrarySlug`
- Control Room should expose an `Active show library` selector before recording/upload actions
- the Library drawer should expose a `Show Filter` above the existing `Music / Episodes / Post-Production` tabs
- Review Cut and save flows should continue using the same buckets while preserving show-library metadata

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
