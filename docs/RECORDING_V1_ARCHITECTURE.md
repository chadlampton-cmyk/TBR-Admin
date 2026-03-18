# Recording v1 Architecture (On-Air Control Room)

Last updated: 2026-03-07

## Goal
Implement production-style recording for Doggfather Studio where:
- Recording captures camera + audio only (not UI/screen grab).
- Recording visual uses a custom background/scene, not the control-room interface.
- Host controls recording lifecycle.
- Downloads support:
  - video + audio
  - audio-only MP3
- Completed recordings are retained so users can download again later.

## Current Baseline (Already Built)
- On-Air control room overlay UI
- Single-host claim/transfer/release model
- Host-only gating for Record/Playback controls
- Download button visibility for all users, gated until stop/completion
- Realtime signaling path for recording state (`host-record-state`)

## Product Requirements
1. Recording source
- Do not use `getDisplayMedia` for screen capture.
- Use participant camera streams and mic/audio streams directly.

2. Visual output
- Compose final video in hidden/offscreen canvas.
- Apply branded background and participant layout in canvas scene.
- Export canvas as video track (`canvas.captureStream()`).

3. Audio output
- Mix all required audio sources into one master track (Web Audio API).
- Merge mixed audio with canvas video into one recording stream.

4. On-Air behavior
- Only active host can use:
  - Record/Stop Recording toggle
  - Playback
- Download button:
  - visible to all users
  - disabled until recording is stopped/completed

5. Download options after completion
- `Download Video + Audio`
- `Download Audio MP3`
- Optional name field before download/export

6. Retention/cache
- Save completed recording metadata and file references to backend storage.
- Users can re-open prior sessions and re-download later.

## Technical Plan
1. Browser capture service
- Build `RecordingSceneService` in frontend:
  - input: local/remote video elements, audio tracks
  - output: combined media stream

2. Browser record
- Use `MediaRecorder` to record combined stream (master format: WebM/Opus).
- On stop, upload master blob to backend.

3. Backend processing
- Use FFmpeg worker/service to generate derivatives:
  - video+audio delivery file
  - MP3 audio-only file

4. Storage + catalog
- Store master + derivatives in object storage (R2/B2/S3-compatible).
- Save recording rows in database:
  - `id`, `title`, `createdBy`, `createdAt`, `durationSec`
  - `masterUrl`, `videoUrl`, `audioMp3Url`, `status`

5. Retrieval UX
- Add recordings list page/panel:
  - status (`processing`, `ready`, `failed`)
  - download buttons for ready assets

## Recommended Stack (Budget-Friendly)
- Realtime: Railway (existing service)
- Media processing: Railway worker/container running FFmpeg
- Storage: Cloudflare R2 or Backblaze B2
- DB: SQLite/Postgres on Railway

## Non-Goals for v1
- Live streaming to external platforms
- Multitrack stem exports
- Full post-production timeline editor

## Notes for Background/Branding
When branded background assets are ready:
- Provide target resolution(s), e.g. 1920x1080 and 1080x1920.
- Provide safe-area guidance so faces are not blocked by overlays.
- Provide PNG/WebP assets for lower thirds/logo lockups if needed.

## Current Status Summary
- On-Air UX is functional for collaboration flow.
- Recording/export is currently UI/workflow state only.
- Media capture/upload/transcode/persistent library remain pending implementation.
