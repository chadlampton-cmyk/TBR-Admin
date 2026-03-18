# DFS Site Map

Last updated: 2026-03-18

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

## Canonical Frontend Path
Primary page:
- `landing/hello.html`

Primary logic:
- `landing/hello.js`

Primary styling:
- `landing/styles.css`

## Current User Flow
1. User lands in `landing/hello.html`
2. User prepares camera, mic, headphones, and permissions in the lounge
3. User enters On-Air mode
4. Host claims control
5. Host uses recording, music, and audio controls
6. Recording stops
7. Review and export become available in the same page flow

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
- export actions
- chat drawer

## What Is Still Present But Historical
These files still exist, but they are no longer the main product path:
- `landing/settings.html`
- `landing/profile.html`
- `landing/help.html`

Important:
- `landing/hello.js` still contains some modal/embed hooks that reference those pages.
- Those references should be treated as legacy cleanup work, not as the active build center.

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
- The live UI can show extra participant tiles.
- The recording/composite path is still effectively centered on local video plus one remote participant.
- Guest channel UI exists, but guest gain is not yet fully wired into the real recorded/live mix path.

## Current Restart Point
If resuming implementation, start in:
1. `landing/hello.js`
2. `landing/styles.css`

Immediate work area:
- compact REC strip visual redesign
- active cue controls
- audio drawer behavior
- guest audio validation
- recording fidelity and validation
