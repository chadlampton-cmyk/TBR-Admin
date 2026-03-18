# DFS Architecture

Last updated: 2026-03-18

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

Frontend responsibilities:
- lounge and preflight UI
- on-air control room UI
- chat drawer
- WebRTC/Twilio room client behavior
- local camera/mic handling
- music library interaction
- Web Audio cue engine and live controls
- browser-side recording, review, and export

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

Important practical note:
- The UI can represent more participants than the current recording mix/compositor fully handles.
- Recording is not yet a true multi-guest mixed console.

## Active Frontend File Roles

### `landing/hello.html`
Owns:
- all active DFS page structure
- lounge
- on-air overlay
- audio controls drawer
- library drawer
- review/export sections

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
- review playback behavior

### `landing/styles.css`
Owns:
- lounge layout
- on-air layout
- drawers
- mixer layout
- review player styling
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

### Current Caveat
The `Guest Channels` UI is ahead of the actual mix wiring.

Current practical behavior:
- guest channel shell exists
- guest slider affects local playback behavior
- guest gain is not yet a fully authoritative mixer control for the real recording path

## Video / Participant Architecture
Current live layout:
- local tile
- primary remote tile
- extra participant placeholders/tiles in the UI

Current recording layout:
- local tile plus one remote tile in the recording composite path

Implication:
- multi-participant live presence is ahead of multi-participant recording fidelity

## Historical Pages
These pages remain in the repo, but they are not the current implementation center:
- `landing/settings.html`
- `landing/profile.html`
- `landing/help.html`

There are still legacy hooks from `hello.js` into those pages.

## Resume Guidance
For continued build work, treat the current architecture as:
1. one active page shell
2. one large controller file
3. one main stylesheet

Resume in the on-air audio/recording path first, not in the older standalone pages.
