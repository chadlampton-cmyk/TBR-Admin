# Session Notes - 2026-03-07

## Summary
Consolidated notes of the current TBR Admin + Doggfather Studio prototype decisions and implementation state.

## Major Decisions Captured
- Keep GoDaddy/WordPress for admin frontend and use separate realtime service.
- Use Railway as low-cost realtime host instead of local-only service for shared sessions.
- Split UX into:
  - Lounge (preflight/chat/meeting)
  - On-Air Control Room (live controls, host tools, media actions)
- Keep settings-heavy options in Settings page; keep Lounge focused on preflight.

## Implemented Experience
1. Identity and access (prototype)
- Local user register/login for testing
- Remember-me support
- Lockout UX on repeated failed login attempts

2. Branding and UI
- Doggfather Studio heading style aligned with title effect direction
- DFS logo added across non-login pages
- Liquid-glass, pill-style control language applied broadly

3. Lounge behavior
- Presence list with online users
- Shared chat across users
- Quick-note chat pills
- Camera and mic preflight controls
- Mic level/diagnostic features
- On-Air status indicator and roster

4. On-Air control room behavior
- Overlay enters/exits from lounge
- Larger participant camera area
- Shared recording state visibility (`REC` / `IDLE`) for everyone in control room
- Host controls scoped to On-Air area
- Single host ownership model + transfer
- Record/Stop, Playback, Download gating behavior defined in UI

5. Realtime foundations
- Presence, chat, WebRTC signaling
- Host ownership endpoints added and wired
- Recording state broadcast signals wired

## Known Issues / Caveats
- Camera blur remains experimental and currently not quality/perf acceptable.
- Recording pipeline is not complete yet:
  - no persistent capture upload
  - no transcode pipeline
  - no recording library
- Production auth/SSO not yet integrated.

## Local Run Reference
1. Realtime server:
```bash
cd /Users/chadlampton/Documents/Websites/TBR-Admin
node realtime/server.js
```
2. Frontend:
```bash
cd /Users/chadlampton/Documents/Websites/TBR-Admin/landing
python3 -m http.server 8080
```
3. Open:
- `http://localhost:8080/index.html`
- `http://localhost:8080/hello.html`

## Next Build Focus
1. Implement true recording pipeline (camera+audio composition and saved outputs).
2. Add shared show notes panel.
3. Add session timer + scheduled start time.
4. Harden realtime service for Railway + production security.
5. Wire production authentication (Entra SSO or secure backend auth).
