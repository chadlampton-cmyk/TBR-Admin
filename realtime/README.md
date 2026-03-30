# Realtime Server

Last updated: 2026-03-18

## Purpose
This service supports the DFS frontend, but it is not the main build center.

Primary implementation work is currently happening in:
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`

This backend exists to support that frontend.

## Current Responsibilities
- auth/session support
- presence
- chat
- host state
- WebRTC signaling and ICE
- guest invite flow
- OAuth callback flow
- media/storage support endpoints

## Run Locally
From the repo root:

```bash
node realtime/server.js
```

Default local URL:
- `http://localhost:8787`

Requires:
- Node 18+
- FFmpeg for MP3/M4A/MP4 episode export transcoding

## Railway Deploy
Deploy this service from inside `realtime/`, or explicitly set that folder as the root:

```bash
cd realtime
railway up . --path-as-root
```

`realtime/Dockerfile` installs `ffmpeg` for Railway builds. Redeploy after backend media-export changes so the export route can transcode MP3, M4A, and MP4.

Do not deploy the repo root to Railway. The root does not contain the backend `package.json` Railpack expects.

## Important
- Treat this README as operational context, not the main handoff doc.
- The main restart path is documented in:
  - `/README.md`
  - `/docs/README.md`
