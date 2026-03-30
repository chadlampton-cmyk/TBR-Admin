# DFS Site Map

Last updated: 2026-03-30

## Purpose
This is the fast orientation doc for the active DFS build.

Use this first when restarting work.

## Active Product Model
DFS is currently a browser-based live podcast studio prototype.

The active experience is:
- lounge and preflight
- on-air control room
- chat
- music library
- audio controls
- recording review/export
- Review Cut editor

## Canonical Frontend Path
Primary page:
- `landing/hello.html`

Primary logic:
- `landing/hello.js`

Primary styling:
- `landing/styles.css`

Review Cut modules:
- `landing/review-cut-state.js`
- `landing/review-cut-render.js`
- `landing/review-cut-playback.js`
- `landing/review-cut-playback-controller.js`
- `landing/review-cut-playhead-controller.js`
- `landing/review-cut-viewport-controller.js`
- `landing/review-cut-interaction-controller.js`
- `landing/review-cut-media-controller.js`
- `landing/review-cut-session-controller.js`
- `landing/review-cut-noise-tools.js`

Extracted support modules now active:
- `landing/onair-library-storage.js`
- `landing/onair-library-render.js`
- `landing/onair-library-controller.js`
- `landing/onair-library-bridge.js`
- `landing/recording-controller.js`
- `landing/recording-capture.js`
- `landing/realtime-controller.js`
- `landing/chat-controller.js`
- `landing/onair-audio-state.js`

## Current User Flow
1. User lands in `landing/hello.html`
2. User prepares camera, mic, headphones, and permissions in the lounge
3. User enters On-Air mode
4. Host claims control
5. Host uses recording, music, and audio controls
6. Recording stops
7. Review and export become available in the same page flow
8. Review Cut can open empty or from a completed recording
9. User can insert imported/library audio into the Review Cut timeline

## What `landing/hello.html` Owns
- studio lounge
- participant list
- preflight/readiness area
- on-air overlay
- host controls
- media actions
- music library
- audio controls drawer
- review player
- Review Cut editor shell
- export actions
- chat drawer

## Legacy Page Reality
These files still exist, but they are not primary product pages and should not be treated as the implementation center:
- `landing/settings.html`
- `landing/profile.html`
- `landing/help.html`

Important:
- `landing/profile.html` and `landing/help.html` are archive / legacy files
- `landing/settings.html` is no longer a standalone product page, but it still backs the embedded Settings iframe opened from `landing/hello.html`
- future work should happen in `landing/hello.html`, `landing/hello.js`, and the extracted modules, not by reviving the old standalone pages

## On-Air Ownership Split
`Library` owns:
- asset browsing
- preview
- upload/delete
- track selection

`Audio Controls` owns:
- live mix behavior
- active cue control
- fades
- ducking
- stop all
- guest channel shell
- output confidence/metering

## Current Practical Limits
- the live UI can show extra participant tiles
- the recording/composite path is still effectively centered on local video plus one remote participant
- guest channel UI exists, but guest gain is not yet fully wired into the real recorded/live mix path
- Review Cut edited video export does not exist yet
- the new backend episode export path depends on Railway having `ffmpeg`
- audio-only quality is now moving toward WAV master capture, but that still needs live validation on freshly recorded takes

## Current Restart Point
If resuming implementation, start in:
1. `landing/hello.js`
2. `landing/review-cut-*.js`
3. `landing/styles.css`

Immediate work area:
- validate fresh audio-only recordings after the new WAV-master capture path
- validate `Episodes` export for `MP3`, `M4A`, and `MP4` after Railway deploy with `ffmpeg`
- stabilize recording -> Post-Production -> Review Cut flow under repeated real use
- validate guest audio behavior against the real live and recorded mix
