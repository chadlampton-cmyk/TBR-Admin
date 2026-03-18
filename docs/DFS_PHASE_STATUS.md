# DFS Phase Status

Last updated: 2026-03-18

## Purpose
Track the current build state of the active DFS prototype.

## Active Implementation Baseline
Current product baseline lives in:
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`

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
- working prototype baseline

Implemented:
- countdown
- browser-side record/stop flow
- review player
- export/download actions
- music bus inclusion in recording mix

Current caveats:
- browser-side pipeline
- not backend-mastered
- recording path is still effectively local + one remote stream path

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

Still in progress:
- active cue row polish and stability
- guest channel wiring into the real mix path
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
- `hello.js` still has some legacy dependencies on them

## Current Priority Order
1. stabilize Audio Controls behavior
2. finish active cue UI polish
3. wire guest audio controls into the real mix path
4. validate recording output against live behavior
5. remove or isolate legacy page dependencies from `hello`

## Current Biggest Gaps
- guest slider is not yet a true authoritative mixer control
- recording/compositor still centers on one remote stream
- live UI capabilities are ahead of recording fidelity in some areas
