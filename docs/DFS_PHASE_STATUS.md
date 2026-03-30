# DFS Phase Status

Last updated: 2026-03-30

## Purpose
Track the current build state of the active DFS prototype.

## Active Implementation Baseline
Current product baseline lives in:
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`
- `landing/review-cut-*.js`

## Current State By Area

### Lounge / Preflight
Status:
- usable baseline

Implemented:
- camera and mic preflight
- device selection
- permission status
- participant presence
- readiness/preflight summary
- chat access from active page

Current caution:
- a recent `hello.js` extraction caused a full-page startup regression before being fixed
- browser verification is now required after each refactor pass, not just syntax checks

### On-Air Control Room
Status:
- usable baseline

Implemented:
- on-air overlay
- host claim/release/transfer
- recording state strip
- media action controls
- music library drawer
- audio controls drawer
- library/audio drawers now behave as mutually exclusive panels
- active show-library selector shell
- recording save-target selector
- library show filter shell

Current caveats:
- show-library flow now has a real backend field path in progress, but still needs end-to-end live validation
- show creation now uses an in-app modal rather than browser prompt
- recording -> save -> Review Cut flow was tightened this session, but still needs repeated live validation to confirm it feels deterministic

### Recording / Review / Export
Status:
- usable audio-first workflow with backend export path now in progress

Implemented:
- countdown
- browser-side record/stop flow
- review player / Review Cut launch
- browser-side edited audio export
- music bus inclusion in recording mix
- recording mix refresh when music starts after recording has already begun
- modular Review Cut editor core
- multitrack insert/move/split/overlap behavior
- clip-scoped gain behavior
- empty-state Review Cut open + insert flow
- improved selection stability and drag reliability
- tighter playhead/zoom follow
- improved Review Cut modal accessibility baseline
- improved import/error/status handling
- auto-save attempt from stop-recording into shared `Post-Production`
- `Post-Production` rows with `Review Cut` and `Delete`
- Review Cut `Save Draft`
- Review Cut `Save to Episodes`
- Review Cut explicit save-target selector for show assignment
- `Episodes` row `Export Audio`
- `Episodes` row `Delete`
- naming aligned closer to the configured recording-name pattern
- Review Cut split/delete clip targeting and clip drag behavior improved
- recording stop/save flow now waits for Post-Production save completion before advancing workflow
- recording defaults now include:
  - format
  - quality
  - channel mode
  - sample rate
- export defaults now include:
  - format
  - quality preset
  - bitrate
  - sample rate
  - channel mode
- `Episodes` export now routes through a backend transcode endpoint instead of only downloading the raw shelf asset
- backend export route now targets:
  - `MP3`
  - `M4A`
  - `MP4`
- audio-only recording path now captures a WAV master from the mixed recording bus instead of relying only on lossy browser audio chunks
- staged Mic Check now exists in both Settings and preflight:
  - room noise
  - normal voice
  - louder voice / clip check
  - short playback sample

Current caveats:
- recording path is still effectively local + one remote stream path
- control-room/export wording still trails the intended workflow
- storage-backed saves depend on working R2 RW credentials and need live validation after credential updates
- show-library save/filter workflow now depends on the new first-class `show_library_id` backend path and still needs live validation after deploy
- `Post-Production` / `Episodes` still behave as asset rows, not richer grouped editorial objects
- edited video export is still not implemented
- backend export requires Railway to run with `ffmpeg`
- MP3 quality was improved this session, but fresh validation is still required on newly recorded audio-only takes after the WAV-master capture change

### Audio Controls / Live Mix
Status:
- in progress

Implemented:
- locked Audio Controls drawer structure
- Web Audio cue path
- main music volume
- fade in/out controls
- stop all
- auto-fade toggles
- duck voice toggle shell
- active cue rack
- output meter UI
- smoother `Active Cues` slider interaction
- music bus metering wired into the live music bus
- outbound host program audio includes music for remote listeners

Still in progress:
- active cue row polish and stability
- guest channel validation against the real mix path
- clearer auto-fade state feedback
- long-session validation

### Historical Standalone Pages
Status:
- retained only for legacy support and embedded compatibility

Files:
- `landing/settings.*`
- `landing/profile.*`
- `landing/help.*`

Note:
- `landing/profile.*` and `landing/help.*` are archive-only legacy pages
- `landing/settings.*` should not be treated as a standalone app page; it currently survives only as the embedded iframe-backed Settings surface launched from `landing/hello.html`
- future work should treat these as legacy dependencies to reduce later, not as new feature centers

## Current Priority Order
1. validate fresh audio-only recording quality after the WAV-master capture change
2. validate Railway-backed `Episodes` export for `MP3`, `M4A`, and `MP4`
3. validate the first-class `show_library_id` save/filter flow live
4. decide whether to add `Move to Show` for reassignment of existing assets
5. decide draft versioning / overwrite semantics for `Post-Production`
6. stabilize Audio Controls behavior
7. finish active cue UI polish
8. validate guest audio behavior against the real mix path
9. remove or isolate legacy page dependencies from `hello`
10. add video Review Cut / audio+video episode workflow later

## Current Biggest Gaps
- save/export workflow now exists but still needs live validation with working shared-storage credentials and working Railway transcode support
- show-library organization now has the correct backend direction, but still needs live proof on fresh saves
- `Episodes` and `Post-Production` are meaningful now, but still shallow editorial shelves
- Review Cut still needs final finish polish, but it is no longer the main blocker
- guest slider behavior still needs full live/recording validation
- recording/compositor still centers on one remote stream
- live UI capabilities are still slightly ahead of recording fidelity validation

## Codebase Protection Direction
- do not attempt a broad rewrite of `landing/hello.js` or `realtime/server.js`
- use gradual feature extraction around active workflows instead
- treat [DFS_REFACTOR_PROTECTION_PLAN.md](/Users/chadlampton/Documents/Websites/TBR-Admin/docs/DFS_REFACTOR_PROTECTION_PLAN.md) as the working outline for safe modularization

## Current Refactor State
Completed enough to count as active:
- `onair-library-*`
- `recording-*`
- early `realtime/chat-*` transport extraction

Still pending:
- remaining chat UI-side helpers
- remaining host/participant UI-side helpers
- `onair-audio-*`
- final cleanup in `landing/hello.js`

Pause rule:
- if a refactor causes the page to feel globally dead, treat it as a startup failure first
- check browser Console for the first runtime exception before continuing extraction
