# DFS Phase Status

Last updated: 2026-03-23

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

### Recording / Review / Export
Status:
- working prototype baseline with active Review Cut rewrite

Implemented:
- countdown
- browser-side record/stop flow
- review player
- export/download actions
- music bus inclusion in recording mix
- recording mix refresh when music starts after recording has already begun
- modular Review Cut editor core
- multitrack insert/move/split/overlap behavior
- clip-scoped gain behavior
- empty-state Review Cut open + insert flow

Current caveats:
- browser-side pipeline
- not backend-mastered
- recording path is still effectively local + one remote stream path
- Review Cut still needs more track-head/zoom polish
- modal accessibility and keyboard ownership are still below product standard

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
1. finish Review Cut zoomed track-head drag/playhead polish
2. harden Review Cut accessibility and keyboard ownership
3. stabilize Audio Controls behavior
4. finish active cue UI polish
5. validate guest audio behavior against the real mix path
6. validate recording output against live behavior
7. remove or isolate legacy page dependencies from `hello`

## Current Biggest Gaps
- Review Cut track-head drag/zoom behavior still needs final smoothing
- Review Cut modal accessibility is not enterprise-ready yet
- guest slider behavior still needs full live/recording validation
- recording/compositor still centers on one remote stream
- live UI capabilities are ahead of recording fidelity in some areas
