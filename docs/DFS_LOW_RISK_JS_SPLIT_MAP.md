# DFS Low-Risk JS Split Map

Last updated: 2026-03-27

## Purpose
Map the next `landing/hello.js` split into the safest remaining module candidates.

This is not a rewrite list.

It is the concrete move order for low-risk extractions after the earlier library, recording, and realtime/chat work.

## Current Principle
Keep `landing/hello.js` as the composition root.

New files should be created only when they represent a real behavioral seam with a stable input/output contract.

Do not start by moving all DOM event listeners.

Move pure helpers first, then stateful controllers, then UI-heavy bindings last.

## Lowest-Risk Remaining Files

### 1. `landing/onair-audio-state.js`
Risk:
- lowest

Why first:
- mostly helper/state-shaping logic
- very little direct DOM coupling
- easiest place to reduce `hello.js` size without changing flow

Move first:
- `getOnAirCueVolumeMultiplier`
- `getOnAirCueEffectiveVolume`
- `getActiveOnAirMusicCueTargets`
- `createExplicitOnAirMusicCueTarget`
- `createPrimaryOnAirMusicCueTarget`
- `getOnAirCueDisplayName`
- `clearOnAirMusicAutoFadeTimers`
- `hasOnAirPrimaryCue`

Keep in `hello.js` for now:
- top-level state variables
- direct references to `onAirMusicPrimaryCue`, `onAirAuxMusicCues`, and DOM elements

Expected contract:
- getters/setters and state references passed in from `hello.js`

### 2. `landing/onair-audio-mix-controller.js`
Risk:
- low

Why second:
- coherent live-mix domain
- already bounded around volume/fade behavior
- important, but less dangerous than recording bootstrap or startup code

Move next:
- `handleOnAirVolumeSliderInput`
- `setOnAirMusicVolumeNormalized`
- `setOnAirMusicPlaybackAndRecordingVolume`
- `applyOnAirMusicOutputVolume`
- `queueOnAirCueVolumeApply`
- `startOnAirMusicFade`

Protects:
- master music volume
- fade behavior
- ducking/mix responsiveness

Expected contract:
- pass in current mixer/cue state
- pass in helper callbacks like `getOnAirMixerCurrentTime`, `queueOnAirAudioControlsRefresh`, and `getOnAirMusicDuckMultiplier`

### 3. `landing/onair-active-cues-controller.js`
Risk:
- low to moderate

Why third:
- UI-heavy, but bounded to `Audio Controls`
- does not own library, recording, or Review Cut flow

Move next:
- `updateOnAirAudioControlsUI`
- `queueOnAirAudioControlsRefresh`
- `renderOnAirActiveCueControls`
- `updateOnAirGuestAudioUI`
- `applyOnAirGuestVolume`

Protects:
- active cue rack
- guest slider shell
- host-only live mix controls

Expected contract:
- pass all DOM refs explicitly
- keep event binding in `hello.js` initially

### 4. `landing/onair-cue-playback-controller.js`
Risk:
- moderate

Why after mix/state:
- touches live cue lifecycle
- still a good seam, but more likely to affect recording and live playback if done too early

Move next:
- `createOnAirAuxMusicCue`
- `scheduleOnAirCueAutoFades`
- `disconnectOnAirMusicRecordingStream`
- `connectOnAirMusicToRecordingMix`
- `stopSingleOnAirMusicCue`
- `stopPrimaryOnAirMusicCue`
- `stopOnAirMusicCue`
- `playOnAirMusicCue`
- `playNextQueuedOnAirMusicCue`
- `startQueuedOnAirMusicForRecording`
- `primeOnAirMusicCueForRecordingStart`

Protects:
- current cue / next up / layer behavior
- recording-start cue promotion
- live cue cleanup

Important caution:
- this file should be extracted only after `onair-audio-state.js` and `onair-audio-mix-controller.js` exist
- otherwise too much cue state remains implicit

### 5. `landing/onair-music-panel-controller.js`
Risk:
- moderate

Why later:
- UI semantics recently changed
- this area should settle before extraction

Move later:
- `getSelectedOnAirMusicTrackLabel`
- `getSelectedOnAirNextTrack`
- `getSelectedOnAirNextTrackLabel`
- `peekNextOnAirMusicCue`
- `updateOnAirMusicCuesUI`

Protects:
- control-room music panel behavior
- button enable/disable rules
- current/next status copy

Important caution:
- do not extract this until the `Current Cue` / `Next Up` / `Layer` model has been browser-validated on the live site

## Do Not Split Yet

### Avoid right now
- startup/bootstrap order
- controller construction order
- large host/participant rendering blocks
- signal/media coupling inside remaining realtime paths
- all event listener registration in one pass

Reason:
- these are the highest-risk areas for another full-page startup failure

## Safe Build Order
1. `onair-audio-state.js`
2. `onair-audio-mix-controller.js`
3. `onair-active-cues-controller.js`
4. browser verification
5. `onair-cue-playback-controller.js`
6. browser verification
7. `onair-music-panel-controller.js`
8. browser verification

## Minimum Verification After Each File
- page boot still completes
- `Host Controls` still respond
- `Audio Controls` opens
- active cue volume slider still works
- `Start Current` still works
- `Stage Next` still promotes
- `Add Layer` still creates simultaneous playback
- recording start still works with current/next cues
- `Stop All` and `Fade Out` still work

## Definition Of Done
This map is successful only if:
- new files reduce `hello.js` without moving startup risk upward
- behavior remains identical after each step
- the next extraction can begin from this doc instead of memory
