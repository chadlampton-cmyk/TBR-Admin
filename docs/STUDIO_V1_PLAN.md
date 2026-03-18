# Studio v1 Plan

Last updated: 2026-03-08

## Purpose
Define the current and near-term plan for Doggfather Studio.

## Product Structure
1. Lounge Mode (current)
- Default area after login
- Team chat and participant presence
- Camera and microphone preflight checks
- Meeting/prep workflow

2. On-Air Control Room (current shell)
- Entered from Lounge (`Go On-Air`)
- Overlay with larger camera tiles
- Host-only controls + media actions area
- Exit returns user to Lounge state

3. Recording Pipeline (next)
- Actual media capture of camera + audio (not screen grab)
- Playback + download backed by stored assets

## Lounge v1 (Implemented)
- Realtime participant presence with improved normalization/deduping
- Realtime chat + quick notes + timestamps
- Camera preflight (single `Camera On` toggle, default off on login)
- Mic preflight (start/stop/mute)
- Mic level meter
- Headphone check + echo warning
- Push-to-talk
- Local mic loopback test (`Test My Mic`)
- Device permission status (cam/mic allowed/blocked)
- On-Air status indicator (`Off-Air` / `On-Air`) and on-air roster with count
- Per-user connection quality badge (`Good / Fair / Poor`)
- Reactions with popup UX and message-level emoji chips
- Edit message in composer with 60-second edit window
- Hard-delete message for all users
- Attachments: images and short videos
- Audio Rack controls in lounge:
  - Mic gain
  - Limiter toggle
  - Noise reduction toggle

## On-Air v1 Shell (Implemented)
- Overlay opens/closes cleanly from lounge
- Host claim/release/transfer model (single active host)
- Single host button behavior (`Become Host` <-> `Release Host`)
- Media actions:
  - Record/Stop toggle (host only)
  - Playback (host only, state-gated)
  - Download (all users, enabled only after recording stop)
- Shared recording HUD:
  - Header `REC` pill
  - `REC` dot + timer + waveform strip
  - Media state line
- Chat remains available while in On-Air mode
- Chat alert audio auto-suppressed during active recording
- Audio Rack controls mirrored in control room

## Settings/Personalization (Implemented)
- Chat bubble color theme (self messages)
- UI Light/Dark mode for containers (wallpaper unchanged)
- Camera auto-start
- PTT/headphones defaults
- Mic processing defaults (echo/noise/agc)
- Preferred camera/mic defaults
- Notifications tab in Settings for chat alerts:
  - Disable-all toggle
  - Pulse toggle
  - Sound toggle
  - Badge toggle
  - Locked visual state when disable-all is enabled

## Current Gaps
- Record/Stop does not yet create final saved media assets
- Playback is placeholder behavior
- Download is workflow-gated UI only until recording backend lands
- Background blur is experimental and not quality/perf stable
- Production auth and server-side permissions still pending

## Out of Scope (Current)
- Cloud production storage integration
- Multitrack post-production tools
- Transcript generation
- External live-stream distribution

## Tech Notes
- Browser media: `getUserMedia` + Web Audio graph for live mic processing
- Realtime signaling/presence/chat: `realtime/server.js`
- WebRTC signaling endpoints implemented for prototype
- Host state endpoints implemented in realtime service

## Next Build Steps (Priority)
1. Implement recording media pipeline (capture + export + persistent storage).
2. Add shared show notes panel.
3. Add session timer + scheduled start time.
4. Harden realtime service for Railway deployment and production auth.

## Competitive Upgrade Roadmap (Added 2026-03-08)
1. Reliability and recovery first
- Local recording per participant (separate audio/video tracks).
- Progressive/chunked upload during session.
- Auto-recovery when browser/network drops.
- Per-user upload progress + retry UX.

2. Production recording pipeline
- Real `Record/Stop` capture path for audio + video (not screen capture).
- Export options:
  - mixed show file
  - isolated speaker tracks
  - audio-only output
  - video+audio output
- Recording library with re-download/history.

3. Host-led premium live workflow
- Keep Lounge vs On-Air model as product differentiator.
- Add host cues, segment markers, countdown, and private host notes.
- Keep controls role-based to avoid UI clutter.

4. Fast post-production workflow
- One-click audio cleanup chain (noise/loudness/silence trim).
- Transcript + chapter markers + clip extraction.
- Cloud export handoff (Dropbox target integration planned).

5. Trust and operations
- Session audit logs and role event history.
- Retention policy controls.
- Deployment hardening/monitoring for Railway production service.

## Recording Capture Phase 1 (Scaffolded 2026-03-08)
Goal: move from record-state UI to real host-triggered capture with reliable local output.

Implemented code prep:
- Host `Record` now starts real local capture using `MediaRecorder`.
- Capture is composed from:
  - local camera video
  - remote participant video (when available)
  - mixed audio (local mic + remote audio when available)
- Host `Stop Recording` finalizes a real file blob and marks recording ready.
- `Playback` opens the recorded file in a new tab (host/local file only in this phase).
- `Download` saves the finalized file to disk (`.webm`) after stop.
- Existing light/dark mode UI themes are unchanged.

Current limitation (expected in Phase 1):
- Local file exists only on the host browser that recorded.
- Non-host users see synced recording state, but do not have the file yet.

Phase 2 target:
- Server-side upload/storage so all users can re-download completed recordings.
