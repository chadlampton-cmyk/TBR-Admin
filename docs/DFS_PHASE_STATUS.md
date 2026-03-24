# DFS Phase Status

Last updated: 2026-03-24 (late)

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

### Recording / Review / Export
Status:
- stable browser-side audio editing baseline with storage-backed workflow partially wired

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
- `Episodes` row `Export Audio`
- `Episodes` row `Delete`
- naming aligned closer to the configured recording-name pattern

Current caveats:
- browser-side pipeline
- not backend-mastered
- recording path is still effectively local + one remote stream path
- control-room/export wording still trails the intended workflow
- storage-backed saves depend on working R2 RW credentials and need live validation after credential updates
- `Post-Production` / `Episodes` still behave as asset rows, not richer grouped editorial objects
- edited video export is still not implemented

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
- retained only for history / legacy support

Files:
- `landing/settings.*`
- `landing/profile.*`
- `landing/help.*`

Note:
- these should not be treated as the current implementation center
- product direction treats them as historical-only pages/code
- `hello.*` still has some legacy dependencies on them, so cleanup is not fully complete

## Current Priority Order
1. validate end-to-end save/export reliability live after R2 RW credential fix
2. clean up control-room/export redundancy now that `Episodes` owns export better
3. decide draft versioning / overwrite semantics for `Post-Production`
4. stabilize Audio Controls behavior
5. finish active cue UI polish
6. validate guest audio behavior against the real mix path
7. validate recording output against live behavior
8. remove or isolate legacy page dependencies from `hello`
9. add video Review Cut / audio+video episode workflow later

## Current Biggest Gaps
- save/export workflow now exists but still needs live validation with working shared-storage credentials
- `Episodes` and `Post-Production` are meaningful now, but still shallow editorial shelves
- Review Cut still needs final finish polish, but it is no longer the main blocker
- guest slider behavior still needs full live/recording validation
- recording/compositor still centers on one remote stream
- live UI capabilities are ahead of recording fidelity in some areas
