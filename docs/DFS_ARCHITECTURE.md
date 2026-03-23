# DFS Architecture

Last updated: 2026-03-23

## Purpose
This doc explains the current implementation shape of DFS, with emphasis on the active `hello` build.

## Current Architecture Summary

### Frontend
Directory:
- `landing/`

Current implementation center:
- `hello.html`
- `hello.js`
- `styles.css`
- `review-cut-*.js`

Frontend responsibilities:
- lounge and preflight UI
- on-air control room UI
- chat drawer
- WebRTC/Twilio room client behavior
- local camera/mic handling
- music library interaction
- Web Audio cue engine and live controls
- browser-side recording, review, and export
- modular Review Cut editor orchestration

### Realtime Backend
Directory:
- `realtime/`

Backend responsibilities:
- auth/session support
- presence
- chat
- host coordination
- WebRTC signaling / ICE
- guest invite flow
- OAuth callbacks
- media metadata/storage support

### Recording Model
Current model:
- browser-side capture
- browser-side review/export
- recording stream built from:
  - local mic path
  - one remote media stream path
  - live music bus

Current practical behavior:
- music bus can now be attached into the recording path even if recording started first
- Review Cut edits are non-destructive timeline operations over decoded media
- edited audio export is rendered from the Review Cut timeline

Important practical note:
- the UI can represent more participants than the current recording mix/compositor fully handles
- recording is not yet a true multi-guest mixed console
- edited video export is not implemented

## Active Frontend File Roles

### `landing/hello.html`
Owns:
- all active DFS page structure
- lounge
- on-air overlay
- audio controls drawer
- library drawer
- review/export sections
- Review Cut shell DOM

### `landing/hello.js`
Owns:
- page controller logic
- realtime/presence/chat integration
- host state
- mic/camera/device handling
- Twilio room integration
- Web Audio music engine
- active cue controls
- recording lifecycle
- Review Cut shell/bootstrap and remaining editor orchestration

### `landing/review-cut-*.js`
Owns:
- state helpers
- timeline render helpers
- playback/session state
- playhead rendering
- viewport policy
- UI interaction binding
- native media binding
- session visual-loop logic

### `landing/styles.css`
Owns:
- lounge layout
- on-air layout
- drawers
- mixer layout
- Review Cut/editor styling
- responsive behavior for the active page

## Audio Architecture

### Current Direction
The live cue engine is moving through a Web Audio mixer path rather than relying on DOM `<audio>` playback for production mixing.

Implemented direction:
- decoded cue playback
- shared music bus
- per-cue gain handling
- master music volume
- fade in/out controls
- ducking control shell
- recording mix includes the music bus
- live outbound host audio includes the music bus so remote listeners can hear program music

### Current Caveat
The `Guest Channels` UI is ahead of the actual mix wiring.

Current practical behavior:
- guest channel shell exists
- guest validation remains incomplete against the full live/recording mix
- guest gain should still be treated as a follow-up validation area, not a fully closed mixer feature

## Historical Pages
These pages remain in the repo, but they are not the current implementation center:
- `landing/settings.html`
- `landing/profile.html`
- `landing/help.html`

They should be treated as historical-only pages/code.

Current code reality:
- `hello.*` still contains leftover links and modal handlers that reference them
- removing those references remains cleanup work, not feature work

## Resume Guidance
For continued build work, treat the current architecture as:
1. one active page shell
2. one main stylesheet
3. one large page controller plus modular Review Cut controllers

Resume in the active `hello` flow and Review Cut modules first, not in the older standalone pages.

Current immediate product task:
- finish Review Cut track-head drag and zoom-follow polish without regressing transport behavior
