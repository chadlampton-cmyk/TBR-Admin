# Cloudflare R2 Setup (Studio Recording Storage)

Last updated: 2026-03-10

## Goal
Set up Cloudflare R2 so Doggfather Studio can:
- store intro/outro/ad MP3 assets
- cache finished recordings for later download
- keep Railway as backend compute (not long-term media storage)

## Official Docs Used
- R2 get started: https://developers.cloudflare.com/r2/get-started/
- Create buckets: https://developers.cloudflare.com/r2/buckets/create-buckets/
- R2 auth tokens: https://developers.cloudflare.com/r2/api/tokens/
- S3-compatible access: https://developers.cloudflare.com/r2/get-started/s3/
- Presigned URLs: https://developers.cloudflare.com/r2/api/s3/presigned-urls/
- CORS setup: https://developers.cloudflare.com/r2/buckets/cors/
- Object lifecycles: https://developers.cloudflare.com/r2/buckets/object-lifecycles/
- Pricing: https://developers.cloudflare.com/r2/pricing/

## Architecture (Budget-Friendly)
- GoDaddy: site frontend
- Railway: app/realtime backend + upload signing endpoints
- Cloudflare R2: media storage (MP3 assets + recorded files)
- Postgres: metadata only (episode title, object key, duration, etc.)

## Step-by-Step (Cloudflare UI)

### 1) Enable R2 subscription
1. Log in to Cloudflare dashboard.
2. Go to `Storage & databases` -> `R2` -> `Overview`.
3. Complete R2 checkout/subscription flow (required before API tokens).

### 2) Create bucket(s)
Recommended buckets:
- `doggfather-media` (intro/outro/music beds)
- `doggfather-recordings` (show exports)

Steps:
1. In R2 Overview, select `Create bucket`.
2. Enter bucket name (lowercase + hyphens only).
3. Choose region/jurisdiction as needed.
4. Create bucket.

### 3) Create R2 API token (S3-compatible)
1. In R2 Overview, select `Manage API tokens`.
2. Select `Create Account API token` (or `Create User API token`).
3. Permission: `Object Read & Write`.
4. Scope: apply only to required buckets.
5. Create token.
6. Copy and save:
   - `Access Key ID`
   - `Secret Access Key` (shown once)
   - S3 endpoint: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`

### 4) Add env vars to Railway (`clever-happiness`)
Add these variables:
- `R2_ACCOUNT_ID=<cloudflare account id>`
- `R2_ACCESS_KEY_ID=<access key id>`
- `R2_SECRET_ACCESS_KEY=<secret access key>`
- `R2_ENDPOINT=https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
- `R2_BUCKET_MEDIA=doggfather-media`
- `R2_BUCKET_RECORDINGS=doggfather-recordings`

Optional:
- `R2_PRESIGN_TTL_SECONDS=900`

### 5) Configure CORS on each bucket
Needed for browser uploads/downloads with presigned URLs.

In each bucket:
1. Open bucket -> `Settings` -> `CORS Policy` -> `Add CORS policy`.
2. Paste JSON (adjust domains):

```json
[
  {
    "AllowedOrigins": [
      "https://admin.turnbucklereport.com",
      "http://localhost:8080"
    ],
    "AllowedMethods": ["GET", "PUT", "HEAD", "DELETE"],
    "AllowedHeaders": ["Content-Type"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

### 6) Keep bucket access private
- Do not enable public `r2.dev` for recordings.
- Use presigned URLs from backend for controlled access.

### 7) Add lifecycle policy (recordings bucket)
Set automatic retention to control cost:
- Example: delete temporary/old recordings after 30/60/90 days.

In bucket `Settings` -> lifecycle/object lifecycle rules:
- add expiry rule by prefix/date strategy used by app.

## What We Build Next in Code
1. `POST /media/presign-upload` (backend returns PUT presigned URL + object key)
2. `POST /media/presign-download` (returns GET presigned URL)
3. `GET /media/list` (list media for Control Room picker)
4. `POST /recordings/finalize` (store metadata in Postgres)

## Verification Checklist
1. Upload test MP3 via presigned URL.
2. List object in R2 bucket.
3. Generate presigned GET and play it in browser.
4. Confirm CORS passes from `admin.turnbucklereport.com`.
5. Confirm lifecycle rule appears and simulates expected retention.

## Cost Notes
- R2 Standard storage: `$0.015/GB-month` with free tier usage.
- No egress fee for R2.
- Request charges apply (Class A/B operations).
- See pricing doc for latest rates.

