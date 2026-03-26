# DFS Refactor Protection Plan

Last updated: 2026-03-26

## Purpose
Protect the current DFS prototype while the codebase is gradually split into safer modules.

This is not a rewrite plan.

It is the working outline for how to reduce risk around `landing/hello.js` and `realtime/server.js` without breaking the live studio, recording flow, or Review Cut workflow that already exists.

## Why This Exists
The current product is real enough that uncontrolled cleanup would be dangerous.

Current code reality:
- `landing/hello.js` owns too many unrelated runtime concerns
- `realtime/server.js` owns too many unrelated backend concerns
- the product now has enough working behavior that regressions would cost more than the cleanup helps

This plan exists to preserve:
- live studio flow
- recording reliability
- Review Cut behavior
- shared library save/export flow
- chat/presence/host controls

## Current Constraint
Do not pause product progress for an architecture rewrite.

The current primary product work remains:
1. validate the storage-backed editorial workflow live
2. clean up control-room/export redundancy
3. decide draft versioning / overwrite semantics

Refactor work should only proceed when it directly improves change safety around those active areas.

## Refactor Rules
1. Keep `landing/hello.js` as the composition root until replacements are proven stable.
2. Keep `realtime/server.js` as the single runtime entrypoint until route extraction is proven stable.
3. Extract by feature seam, not by arbitrary line count.
4. Move pure helpers before moving event-driven orchestration.
5. Do not rewrite working UX just to make extraction easier.
6. Every extraction must preserve existing DOM ids, request shapes, and library/storage naming unless the task explicitly changes product behavior.
7. After each extraction, verify the specific user workflow that module can break.
8. `node --check` is not enough. Browser-verify immediately after each frontend extraction.
9. If the page appears globally dead, look for the first startup exception before debugging individual controls.

## Protection Baseline
Before any meaningful extraction, treat these as mandatory manual checks:

### Frontend safety checks
- lounge loads without auth/runtime crashes
- camera and mic preflight still initialize
- chat still sends and receives
- host claim/release still works
- recording countdown still starts
- stop recording still produces a local review asset
- Review Cut still opens from control room
- Review Cut still opens from `Post-Production`
- `Save Draft` still targets `Post-Production`
- `Save to Episodes` still targets `Episodes`
- `Export Audio` still works from `Episodes`
- `Library` and `Audio Controls` still remain mutually exclusive drawers

### Backend safety checks
- `/health` still reports expected providers
- auth session validation still works
- presence heartbeat/list still works
- host claim/release/transfer still works
- chat send/stream/since still works
- Twilio token route still works when configured
- library list/upload/download/delete still works

## Frontend Split Plan

### Keep in `landing/hello.js`
- DOM lookup/bootstrap
- page startup order
- cross-feature orchestration
- feature initialization calls
- temporary compatibility wrappers while migration is in progress

### Extract first
These are the safest high-value seams because they already cluster logically and are current work areas.

#### Phase F1: shared library workflow
Target files:
- `landing/onair-library-controller.js`
- `landing/onair-library-storage.js`
- `landing/onair-library-render.js`

Move responsibilities:
- `music` / `post-production` / `episodes` tab loading
- row rendering and row actions
- shared upload/download/delete helpers
- save-refresh-open-tab behavior after recording/review actions

Protects:
- storage-backed workflow work
- control-room/export cleanup
- draft/episode semantics work

#### Phase F2: recording workflow
Target files:
- `landing/recording-controller.js`
- `landing/recording-capture.js`
- `landing/recording-review-bridge.js`

Move responsibilities:
- countdown/start/stop flow
- MediaRecorder setup and shutdown
- recording blob lifecycle
- handoff from stop-recording into review/post-production save path

Protects:
- the most expensive live regression surface

#### Phase F3: realtime/chat/presence coordination
Target files:
- `landing/realtime-controller.js`
- `landing/chat-controller.js`
- `landing/host-controller.js`

Move responsibilities:
- realtime bootstrap/reconnect
- presence polling/heartbeat
- SSE chat stream and chat sync
- host claim/release/transfer helpers
- signal polling ownership

Protects:
- session continuity
- collaboration/runtime stability

#### Phase F4: on-air audio controls
Target files:
- `landing/onair-audio-controller.js`
- `landing/onair-mixer-engine.js`
- `landing/onair-cues-controller.js`

Move responsibilities:
- mixer bus state
- cue playback/fades
- active cue rendering
- guest channel UI and validation hooks

Protects:
- the part of the build most likely to suffer hidden regressions from unrelated changes

### Delay until later
- broad stylistic cleanup in `hello.js`
- moving every DOM event binding at once
- large naming changes
- reformat-only churn

## Backend Split Plan

### Keep in `realtime/server.js`
- server startup
- top-level request dispatch
- shared context wiring
- final route registration

### Extract first

#### Phase B1: shared backend infrastructure
Target files:
- `realtime/lib/http.js`
- `realtime/lib/auth.js`
- `realtime/lib/db.js`
- `realtime/lib/storage.js`
- `realtime/lib/audit.js`

Move responsibilities:
- JSON/response helpers
- auth/session gate helpers
- db access wrappers
- storage provider helpers
- audit log helpers

#### Phase B2: library/media routes
Target files:
- `realtime/routes/library.js`

Move responsibilities:
- `/library/assets`
- `/media/presign-upload`
- `/media/complete-upload`
- `/media/upload-bytes`
- `/media/presign-download`
- `/media/download`
- asset metadata/rename/delete routes

Protects:
- the current active product workflow

#### Phase B3: chat/presence/host routes
Target files:
- `realtime/routes/chat.js`
- `realtime/routes/presence.js`
- `realtime/routes/host.js`

Move responsibilities:
- chat send/edit/delete/react/seen/stream/since
- presence heartbeat/leave/list
- host state/claim/release/transfer

#### Phase B4: auth/admin/webrtc routes
Target files:
- `realtime/routes/auth.js`
- `realtime/routes/admin.js`
- `realtime/routes/webrtc.js`

Move responsibilities:
- auth/login/session/logout/profile/password
- guest invite/access
- admin settings/audit/studio actions
- Twilio token and WebRTC signal/ICE routes

## Working Method
For each extraction:
1. identify a feature seam already grouped in the file
2. move only helpers and handlers for that seam
3. keep old call signatures stable
4. leave compatibility wrappers in place if needed
5. run the matching manual workflow check immediately in the browser
6. only then remove dead wrapper code

## Regression Lesson Logged
Observed during the March 26 extraction pass:
- a startup regression made the whole page appear dead even though syntax checks passed
- root cause was controller construction order in `landing/hello.js`
- `recordingController` referenced `RECORDING_DEMO_MODE` before that constant was initialized

Required takeaway:
- controller setup order is now a protected concern
- when extracting from `hello.js`, do not move controller construction ahead of constants/settings they depend on

## First Recommended Extraction
Start with the storage-backed library/editorial workflow, not chat and not global startup.

Reason:
- it is the current product priority
- it already has a clear domain vocabulary: `music`, `post-production`, `episodes`
- it has a concentrated set of save/load/render actions
- it reduces the risk of breaking the workflow that now matters most

Candidate source areas today:
- `landing/hello.js` library/save/export region
- `realtime/server.js` library/media route region

## Stop Conditions
Pause extraction work and return to product stabilization if:
- recording start/stop becomes unreliable
- Review Cut open/play/save behavior regresses
- chat/presence/host state becomes flaky
- shared upload/download behavior becomes unclear
- the refactor starts changing UX copy or workflow semantics unintentionally

## Definition Of Success
This plan is working if:
- current product work can continue without fear of touching `hello.js`
- regressions become easier to isolate by feature area
- the storage-backed workflow becomes easier to change safely
- `hello.js` and `server.js` shrink through controlled extraction, not a rewrite freeze

## Near-Term Execution Order
1. validate live save/export reliability first
2. clean control-room/export redundancy second
3. decide draft overwrite/version behavior third
4. begin Phase F1 and Phase B2 extraction around the storage-backed workflow
5. continue other extractions only after the workflow above is trusted
