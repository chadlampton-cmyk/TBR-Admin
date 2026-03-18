# Railway + GoDaddy Setup Notes

Last updated: 2026-03-18

## Purpose
This is a condensed deployment/ops note for the DFS prototype.

It is not the primary handoff doc for active frontend work.

## Current Target Split
- frontend/admin host: `https://admin.turnbucklereport.com`
- realtime backend: `https://realtime.turnbucklereport.com`

## Current Code Reality
Frontend production defaults already use:
- `https://realtime.turnbucklereport.com`

Local development defaults still use:
- `http://localhost:8787`

Backend still depends on environment configuration for:
- `FRONTEND_BASE_URL`
- OAuth client variables
- Turnstile variables
- Twilio variables
- Postgres variables
- optional R2 variables

## Railway Service Notes
Current backend supports:
- auth/session support
- presence
- chat
- host coordination
- WebRTC signaling / ICE
- guest invite flow
- OAuth callbacks
- media/storage support

Current deployment command from the backend folder:

```bash
cd realtime
railway up . --path-as-root
```

Why:
- the repo root is not a deployable Node app root for Railpack
- `realtime/` contains the backend `package.json`

## Minimum Deployment Checks
1. Confirm realtime health endpoint works.
2. Confirm `FRONTEND_BASE_URL` matches the live frontend domain.
3. Confirm OAuth callback variables match the realtime domain callbacks.
4. Confirm Turnstile expected hostname matches the frontend domain.
5. Confirm Twilio/Postgres variables are present.

## Frontend Reminder
The active frontend build is in:
- `landing/hello.html`
- `landing/hello.js`
- `landing/styles.css`

Older standalone pages still exist, but they are not the current implementation center.

## Current Risk Notes
- settings/help/profile are historical-only pages/code, but `hello.*` still contains some leftover legacy hooks into them.
- The frontend is already pointed at the final realtime custom domain, so old “swap temporary Railway URL” instructions are no longer current.
- Deployment validation should focus on auth, realtime, and active `hello` behavior rather than the older multi-page flow.
- media upload/storage should be validated separately after deploy if uploads fail with access errors.
