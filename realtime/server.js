const http = require("http");
const { URL } = require("url");
const crypto = require("crypto");
let PgPool = null;
try {
  ({ Pool: PgPool } = require("pg"));
} catch (error) {
  PgPool = null;
}
let TwilioSdk = null;
try {
  TwilioSdk = require("twilio");
} catch (error) {
  TwilioSdk = null;
}
let S3Client = null;
let PutObjectCommand = null;
let GetObjectCommand = null;
let HeadObjectCommand = null;
let getSignedUrl = null;
try {
  ({ S3Client, PutObjectCommand, GetObjectCommand, HeadObjectCommand } = require("@aws-sdk/client-s3"));
  ({ getSignedUrl } = require("@aws-sdk/s3-request-presigner"));
} catch (error) {
  S3Client = null;
  PutObjectCommand = null;
  GetObjectCommand = null;
  HeadObjectCommand = null;
  getSignedUrl = null;
}

const PORT = Number(process.env.PORT || 8787);
const PRESENCE_TTL_MS = 15000;
const MAX_CHAT_MESSAGES = 500;
const CHAT_POLL_WINDOW = 80;
const MAX_CHAT_EVENTS = 2000;
const MAX_SIGNALS = 1000;
const MAX_BODY_BYTES = 40 * 1024 * 1024;
const MAX_ATTACHMENT_DATA_URL_BYTES = 35 * 1024 * 1024;
const CHAT_EDIT_WINDOW_MS = 60 * 1000;
const TYPING_TTL_MS = 5000;
const SSE_KEEPALIVE_MS = 15000;
const AUTH_LOCKOUT_MINUTES = 30;
const AUTH_MAX_FAILED_ATTEMPTS = 5;
const AUTH_MAX_PRIMARY_USERS = Math.max(1, Number(process.env.AUTH_MAX_PRIMARY_USERS || 3));
const GUEST_USERNAME = String(process.env.GUEST_USERNAME || "guest")
  .trim()
  .toLowerCase();
const GUEST_INVITE_EXPIRES_MINUTES = Math.max(5, Number(process.env.GUEST_INVITE_EXPIRES_MINUTES || 120));
const GUEST_PASSWORD_LENGTH = 10;
const AUTH_TOKEN_BYTES = 32;
const AUTH_REMEMBER_HOURS = 24 * 30;
const AUTH_SESSION_HOURS = 24;
const DEFAULT_ADMIN_USERNAME = "clampton19";
const DATABASE_URL = String(process.env.DATABASE_URL || "").trim();
const DATABASE_SSL_MODE = String(process.env.DATABASE_SSL_MODE || "").trim().toLowerCase();
const TWILIO_ACCOUNT_SID = String(process.env.TWILIO_ACCOUNT_SID || "").trim();
const TWILIO_AUTH_TOKEN = String(process.env.TWILIO_AUTH_TOKEN || "").trim();
const TWILIO_VERIFY_SERVICE_SID = String(process.env.TWILIO_VERIFY_SERVICE_SID || "").trim();
const TWILIO_TOKEN_TTL_SECONDS = Math.max(60, Number(process.env.TWILIO_TOKEN_TTL_SECONDS || 3600));
const TWILIO_VIDEO_API_KEY_SID = String(process.env.TWILIO_VIDEO_API_KEY_SID || "").trim();
const TWILIO_VIDEO_API_KEY_SECRET = String(process.env.TWILIO_VIDEO_API_KEY_SECRET || "").trim();
const TWILIO_VIDEO_ROOM_NAME = String(process.env.TWILIO_VIDEO_ROOM_NAME || "doggfather-studio-lounge").trim();
const TWILIO_VIDEO_TOKEN_TTL_SECONDS = Math.max(300, Number(process.env.TWILIO_VIDEO_TOKEN_TTL_SECONDS || 3600));
const R2_ACCOUNT_ID = String(process.env.R2_ACCOUNT_ID || "").trim();
const R2_ACCESS_KEY_ID = String(process.env.R2_ACCESS_KEY_ID || "").trim();
const R2_SECRET_ACCESS_KEY = String(process.env.R2_SECRET_ACCESS_KEY || "").trim();
const R2_ENDPOINT = String(process.env.R2_ENDPOINT || "").trim();
const R2_BUCKET_MEDIA = String(process.env.R2_BUCKET_MEDIA || "").trim();
const R2_BUCKET_RECORDINGS = String(process.env.R2_BUCKET_RECORDINGS || "").trim();
const R2_PRESIGN_TTL_SECONDS = Math.max(60, Number(process.env.R2_PRESIGN_TTL_SECONDS || 900));
const TURNSTILE_SITE_KEY = String(process.env.TURNSTILE_SITE_KEY || "").trim();
const TURNSTILE_SECRET_KEY = String(process.env.TURNSTILE_SECRET_KEY || "").trim();
const TURNSTILE_EXPECTED_HOSTNAME = String(process.env.TURNSTILE_EXPECTED_HOSTNAME || "").trim();
const AUTH_CAPTCHA_REVERIFY_DAYS = Math.max(1, Number(process.env.AUTH_CAPTCHA_REVERIFY_DAYS || 30));
const ALLOW_LOGIN_WHEN_CAPTCHA_UNAVAILABLE =
  String(process.env.ALLOW_LOGIN_WHEN_CAPTCHA_UNAVAILABLE || "true").trim().toLowerCase() !== "false";
const ALLOW_DEV_AUTH_BYPASS =
  String(process.env.ALLOW_DEV_AUTH_BYPASS || "false").trim().toLowerCase() === "true";
const FRONTEND_BASE_URL = String(process.env.FRONTEND_BASE_URL || "http://localhost:8080").trim();
const OAUTH_STATE_SECRET = String(process.env.OAUTH_STATE_SECRET || process.env.TWILIO_AUTH_TOKEN || "oauth-state-secret");
const GOOGLE_CLIENT_ID = String(process.env.GOOGLE_CLIENT_ID || "").trim();
const GOOGLE_CLIENT_SECRET = String(process.env.GOOGLE_CLIENT_SECRET || "").trim();
const GOOGLE_REDIRECT_URI = String(process.env.GOOGLE_REDIRECT_URI || "").trim();
const FACEBOOK_APP_ID = String(process.env.FACEBOOK_APP_ID || "").trim();
const FACEBOOK_APP_SECRET = String(process.env.FACEBOOK_APP_SECRET || "").trim();
const FACEBOOK_REDIRECT_URI = String(process.env.FACEBOOK_REDIRECT_URI || "").trim();
const AUTH_TWO_FA_CHALLENGE_MINUTES = 10;
const AUTH_TRUSTED_DEVICE_DAYS = 14;
const FALLBACK_ICE_SERVERS = [{ urls: "stun:stun.l.google.com:19302" }];
const INSTANCE_ID = "inst_" + Math.random().toString(36).slice(2, 10);
const SERVER_BUILD = "DFS-Beta Build 1.1.2";

const GUEST_INVITE_EXPIRY_OPTIONS = [20, 30, 40, 50, 60, 90, 120, 150, 180];
const GUEST_SESSION_MINUTES_OPTIONS = [20, 30, 40, 50, 60, 90, 120, 150, 180];
const RECORDING_RETENTION_OPTIONS = [7, 14, 30, 60, 90];
const RECORDING_MAX_MINUTES_OPTIONS = [20, 30, 40, 50, 60, 90, 120, 150, 180];
const CHAT_IMAGE_MAX_MB_OPTIONS = [2, 4, 8, 12, 16, 20];
const CHAT_VIDEO_MAX_MB_OPTIONS = [5, 10, 20, 30, 40];
const CHAT_EXPORT_LIMIT = 1000;
const MAX_MEDIA_DEBUG_LOGS_PER_USER = 400;
const MEDIA_DEBUG_LOG_TTL_MS = 60 * 60 * 1000;
const LIBRARY_KINDS = ["music", "episodes", "post-production"];
const LIBRARY_ASSET_STATUSES = ["draft", "uploaded", "processing", "review", "export-ready", "archived"];

const presence = new Map();
const chatMessages = [];
const chatEvents = [];
const signals = [];
const mediaDebugLogs = new Map();
const sseClients = new Map();
const typingState = new Map();
const onlineUsers = new Map();
let messageSeq = 0;
let chatEventSeq = 0;
let signalSeq = 0;
let hostUsername = "";
let hostUpdatedAt = 0;
let dbPool = null;
let dbReady = false;
let dbInitInFlight = false;
let lastDbHydrateAt = 0;
let twilioIceCache = null;
let twilioIceCacheUntil = 0;
let sseClientSeq = 0;
let adminSettings = null;
let mediaStorageClient = null;
const studioControlState = {
  muteAllVersion: 0,
  forceOffAirVersion: 0,
  clearHostVersion: 0,
  clearSpotlightVersion: 0,
  lastActionAt: 0,
  lastActionBy: "",
  lastActionType: ""
};

function isPersistentDbConfigured() {
  return !!DATABASE_URL;
}

function hasDb() {
  return !!dbPool && dbReady;
}

function hasMediaStorageConfig() {
  return !!(
    S3Client &&
    PutObjectCommand &&
    GetObjectCommand &&
    typeof getSignedUrl === "function" &&
    R2_ACCESS_KEY_ID &&
    R2_SECRET_ACCESS_KEY &&
    R2_ENDPOINT &&
    R2_BUCKET_MEDIA &&
    R2_BUCKET_RECORDINGS
  );
}

function getMediaStorageProvider() {
  return hasMediaStorageConfig() ? "cloudflare-r2" : "unconfigured";
}

function getMediaStorageClient() {
  if (!hasMediaStorageConfig()) {
    return null;
  }
  if (!mediaStorageClient) {
    mediaStorageClient = new S3Client({
      region: "auto",
      endpoint: R2_ENDPOINT,
      forcePathStyle: false,
      credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY
      }
    });
  }
  return mediaStorageClient;
}

function getBucketForLibraryKind(libraryKind) {
  return libraryKind === "music" ? R2_BUCKET_MEDIA : R2_BUCKET_RECORDINGS;
}

function sanitizeStorageFilename(filename) {
  const raw = String(filename || "").trim().toLowerCase();
  const cleaned = raw.replace(/[^a-z0-9._-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  return cleaned.slice(0, 120) || "asset.bin";
}

function buildLibraryObjectKey(libraryKind, assetId, filename) {
  const now = new Date();
  const year = String(now.getUTCFullYear());
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  return [
    normalizeLibraryKind(libraryKind),
    year,
    month,
    String(assetId || "").trim(),
    sanitizeStorageFilename(filename)
  ].join("/");
}

function requireChatStorage(res) {
  if (hasDb()) {
    return true;
  }
  if (!isPersistentDbConfigured()) {
    return true;
  }
  json(res, 503, {
    ok: false,
    error: "Chat storage is reconnecting. Please retry in a few seconds.",
    code: "CHAT_STORAGE_UNAVAILABLE"
  });
  return false;
}

function pruneMediaDebugLogs(now) {
  const cutoff = Number(now || Date.now()) - MEDIA_DEBUG_LOG_TTL_MS;
  for (const [username, entries] of mediaDebugLogs.entries()) {
    const nextEntries = Array.isArray(entries) ? entries.filter((entry) => Number(entry.serverTimestamp || 0) >= cutoff) : [];
    if (!nextEntries.length) {
      mediaDebugLogs.delete(username);
      continue;
    }
    mediaDebugLogs.set(username, nextEntries.slice(-MAX_MEDIA_DEBUG_LOGS_PER_USER));
  }
}

function appendMediaDebugLogs(username, entries, meta) {
  const safeUsername = normalizeUsername(username);
  if (!safeUsername || !Array.isArray(entries) || !entries.length) {
    return 0;
  }
  pruneMediaDebugLogs(Date.now());
  const existing = mediaDebugLogs.get(safeUsername) || [];
  const nextEntries = [];
  entries.forEach((entry) => {
    if (!entry || typeof entry !== "object") {
      return;
    }
    const message = String(entry.message || "").trim();
    if (!message) {
      return;
    }
    nextEntries.push({
      id: "mdl_" + crypto.randomBytes(6).toString("hex"),
      message: message.slice(0, 500),
      clientTimestamp: String(entry.clientTimestamp || "").slice(0, 32),
      serverTimestamp: Date.now(),
      sessionId: String((meta && meta.sessionId) || entry.sessionId || "").slice(0, 64),
      source: String((meta && meta.source) || entry.source || "browser").slice(0, 32)
    });
  });
  if (!nextEntries.length) {
    return 0;
  }
  mediaDebugLogs.set(safeUsername, existing.concat(nextEntries).slice(-MAX_MEDIA_DEBUG_LOGS_PER_USER));
  return nextEntries.length;
}

function shouldUseDbSsl() {
  if (!DATABASE_URL) {
    return false;
  }
  if (["disable", "off", "false", "0"].includes(DATABASE_SSL_MODE)) {
    return false;
  }
  if (["require", "on", "true", "1"].includes(DATABASE_SSL_MODE)) {
    return true;
  }
  const lower = DATABASE_URL.toLowerCase();
  if (lower.includes("sslmode=disable")) {
    return false;
  }
  if (lower.includes("railway.internal")) {
    return false;
  }
  if (lower.includes("localhost") || lower.includes("127.0.0.1")) {
    return false;
  }
  return true;
}

function createDbPool(useSsl) {
  return new PgPool({
    connectionString: DATABASE_URL,
    ssl: useSsl ? { rejectUnauthorized: false } : false
  });
}

function attachDbPoolHandlers(pool) {
  if (!pool || typeof pool.on !== "function") {
    return;
  }
  pool.on("error", (error) => {
    process.stderr.write(
      "[realtime] Postgres pool error; marking DB unavailable and retrying: " +
        String(error && error.message ? error.message : error) +
        "\n"
    );
    dbReady = false;
    if (dbPool === pool) {
      dbPool = null;
    }
    scheduleDatabaseReconnect();
  });
}

function getDatabaseLabel() {
  if (!DATABASE_URL) {
    return "";
  }
  try {
    const parsed = new URL(DATABASE_URL);
    const host = String(parsed.hostname || "");
    const dbName = String(parsed.pathname || "").replace(/^\//, "");
    return host + (dbName ? "/" + dbName : "");
  } catch (error) {
    return "";
  }
}

function normalizeUsername(raw) {
  return String(raw || "").trim().toLowerCase();
}

function normalizeRole(raw) {
  const value = String(raw || "").trim().toLowerCase();
  if (value === "admin") {
    return "admin";
  }
  if (value === "guest") {
    return "guest";
  }
  return "user";
}

function normalizeLibraryKind(raw) {
  const value = String(raw || "").trim().toLowerCase();
  return LIBRARY_KINDS.includes(value) ? value : "music";
}

function normalizeLibraryStatus(raw) {
  const value = String(raw || "").trim().toLowerCase();
  return LIBRARY_ASSET_STATUSES.includes(value) ? value : "uploaded";
}

function normalizePhoneE164(raw) {
  const input = String(raw || "").trim();
  if (!input) {
    return "";
  }
  const digits = input.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) {
    const normalized = "+" + digits.slice(1).replace(/\D/g, "");
    if (/^\+\d{10,15}$/.test(normalized)) {
      return normalized;
    }
    return "";
  }
  const onlyDigits = digits.replace(/\D/g, "");
  if (onlyDigits.length === 10) {
    return "+1" + onlyDigits;
  }
  if (onlyDigits.length === 11 && onlyDigits.startsWith("1")) {
    return "+" + onlyDigits;
  }
  return "";
}

function maskPhoneE164(phoneE164) {
  const value = String(phoneE164 || "").trim();
  if (!value) {
    return "";
  }
  const digits = value.replace(/\D/g, "");
  if (digits.length < 4) {
    return "••••";
  }
  const last4 = digits.slice(-4);
  return "•••-•••-" + last4;
}

function trimAlias(raw) {
  return String(raw || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 32);
}

function sanitizeProfile(profile, username) {
  const safeUsername = normalizeUsername(username);
  const source = profile && typeof profile === "object" ? profile : {};
  const alias = trimAlias(source.alias || "");
  const useAlias = !!source.useAlias && !!alias;
  const avatarDataUrl =
    typeof source.avatarDataUrl === "string" && source.avatarDataUrl.startsWith("data:image/")
      ? source.avatarDataUrl
      : "";
  return {
    alias,
    useAlias,
    avatarDataUrl,
    updatedAt: String(source.updatedAt || ""),
    username: safeUsername
  };
}

function getDisplayNameFromProfile(username, profile) {
  const safeUsername = normalizeUsername(username);
  const safeProfile = sanitizeProfile(profile, safeUsername);
  if (safeProfile.useAlias && safeProfile.alias) {
    return safeProfile.alias;
  }
  return safeUsername;
}

function hashPassword(password, salt) {
  return crypto.scryptSync(String(password || ""), String(salt || ""), 64).toString("hex");
}

function createSalt() {
  return crypto.randomBytes(16).toString("base64url");
}

function createSessionToken() {
  return crypto.randomBytes(AUTH_TOKEN_BYTES).toString("base64url");
}

function getDefaultAdminSettings() {
  return {
    guestInviteExpiryMinutes: GUEST_INVITE_EXPIRES_MINUTES,
    guestMaxSessionMinutes: 120,
    guestDisplayName: "Guest",
    allowUserHostControl: true,
    allowUserRecordingControl: true,
    recordingMaxMinutes: 180,
    recordingRetentionDays: 30,
    recordingDownloadAccess: "host-admin",
    recordingLibraryVisibility: "admin-only",
    chatAttachmentsEnabled: true,
    chatVideoAttachmentsEnabled: true,
    chatImageMaxMb: 8,
    chatVideoMaxMb: 20,
    chatReactionsEnabled: true,
    forceTwoFaAllUsers: false,
    captchaReverifyDays: AUTH_CAPTCHA_REVERIFY_DAYS,
    googleLoginEnabled: true,
    facebookLoginEnabled: true,
    maintenanceModeEnabled: false,
    maintenanceMessage: "",
    supportContactEmail: "admin@turnbucklereport.com"
  };
}

function sanitizeAdminSettings(input) {
  const source = input && typeof input === "object" ? input : {};
  const defaults = getDefaultAdminSettings();
  const inviteExpiry = Number(source.guestInviteExpiryMinutes || defaults.guestInviteExpiryMinutes);
  const guestSessionMinutes = Number(source.guestMaxSessionMinutes || defaults.guestMaxSessionMinutes);
  const recordingMaxMinutes = Number(source.recordingMaxMinutes || defaults.recordingMaxMinutes);
  const recordingRetentionDays = Number(source.recordingRetentionDays || defaults.recordingRetentionDays);
  const chatImageMaxMb = Number(source.chatImageMaxMb || defaults.chatImageMaxMb);
  const chatVideoMaxMb = Number(source.chatVideoMaxMb || defaults.chatVideoMaxMb);
  const downloadAccess = String(source.recordingDownloadAccess || defaults.recordingDownloadAccess).trim().toLowerCase();
  const libraryVisibility = String(source.recordingLibraryVisibility || defaults.recordingLibraryVisibility).trim().toLowerCase();
  return {
    guestInviteExpiryMinutes: GUEST_INVITE_EXPIRY_OPTIONS.includes(inviteExpiry)
      ? inviteExpiry
      : defaults.guestInviteExpiryMinutes,
    guestMaxSessionMinutes: GUEST_SESSION_MINUTES_OPTIONS.includes(guestSessionMinutes)
      ? guestSessionMinutes
      : defaults.guestMaxSessionMinutes,
    guestDisplayName: trimAlias(source.guestDisplayName || defaults.guestDisplayName) || "Guest",
    allowUserHostControl: source.allowUserHostControl !== false,
    allowUserRecordingControl: source.allowUserRecordingControl !== false,
    recordingMaxMinutes: RECORDING_MAX_MINUTES_OPTIONS.includes(recordingMaxMinutes)
      ? recordingMaxMinutes
      : defaults.recordingMaxMinutes,
    recordingRetentionDays: RECORDING_RETENTION_OPTIONS.includes(recordingRetentionDays)
      ? recordingRetentionDays
      : defaults.recordingRetentionDays,
    recordingDownloadAccess: ["all", "host-admin", "admin-only"].includes(downloadAccess)
      ? downloadAccess
      : defaults.recordingDownloadAccess,
    recordingLibraryVisibility: ["all-users", "host-admin", "admin-only"].includes(libraryVisibility)
      ? libraryVisibility
      : defaults.recordingLibraryVisibility,
    chatAttachmentsEnabled: source.chatAttachmentsEnabled !== false,
    chatVideoAttachmentsEnabled: source.chatVideoAttachmentsEnabled !== false,
    chatImageMaxMb: CHAT_IMAGE_MAX_MB_OPTIONS.includes(chatImageMaxMb)
      ? chatImageMaxMb
      : defaults.chatImageMaxMb,
    chatVideoMaxMb: CHAT_VIDEO_MAX_MB_OPTIONS.includes(chatVideoMaxMb)
      ? chatVideoMaxMb
      : defaults.chatVideoMaxMb,
    chatReactionsEnabled: source.chatReactionsEnabled !== false,
    forceTwoFaAllUsers: !!source.forceTwoFaAllUsers,
    captchaReverifyDays: Math.max(7, Math.min(90, Number(source.captchaReverifyDays || defaults.captchaReverifyDays) || defaults.captchaReverifyDays)),
    googleLoginEnabled: source.googleLoginEnabled !== false,
    facebookLoginEnabled: source.facebookLoginEnabled !== false,
    maintenanceModeEnabled: !!source.maintenanceModeEnabled,
    maintenanceMessage: String(source.maintenanceMessage || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180),
    supportContactEmail: normalizeEmail(source.supportContactEmail || defaults.supportContactEmail) || defaults.supportContactEmail
  };
}

function getAdminSettings() {
  if (!adminSettings) {
    adminSettings = getDefaultAdminSettings();
  }
  return adminSettings;
}

function getPublicAdminSettings() {
  const settings = getAdminSettings();
  return {
    guestDisplayName: settings.guestDisplayName,
    allowUserHostControl: settings.allowUserHostControl,
    allowUserRecordingControl: settings.allowUserRecordingControl,
    recordingMaxMinutes: settings.recordingMaxMinutes,
    recordingDownloadAccess: settings.recordingDownloadAccess,
    recordingLibraryVisibility: settings.recordingLibraryVisibility,
    chatAttachmentsEnabled: settings.chatAttachmentsEnabled,
    chatVideoAttachmentsEnabled: settings.chatVideoAttachmentsEnabled,
    chatImageMaxMb: settings.chatImageMaxMb,
    chatVideoMaxMb: settings.chatVideoMaxMb,
    chatReactionsEnabled: settings.chatReactionsEnabled,
    maintenanceModeEnabled: settings.maintenanceModeEnabled,
    maintenanceMessage: settings.maintenanceMessage,
    supportContactEmail: settings.supportContactEmail
  };
}

function getDefaultPermissionsForRole(role) {
  const normalizedRole = normalizeRole(role);
  if (normalizedRole === "admin") {
    return {
      hostControl: true,
      recordingControl: true,
      chatModeration: true,
      guestManagement: true,
      siteSettings: true
    };
  }
  if (normalizedRole === "guest") {
    return {
      hostControl: false,
      recordingControl: false,
      chatModeration: false,
      guestManagement: false,
      siteSettings: false
    };
  }
  return {
    hostControl: true,
    recordingControl: true,
    chatModeration: false,
    guestManagement: false,
    siteSettings: false
  };
}

function sanitizeUserPermissions(input, role) {
  const defaults = getDefaultPermissionsForRole(role);
  const source = input && typeof input === "object" ? input : {};
  return {
    hostControl: source.hostControl !== undefined ? !!source.hostControl : defaults.hostControl,
    recordingControl: source.recordingControl !== undefined ? !!source.recordingControl : defaults.recordingControl,
    chatModeration: source.chatModeration !== undefined ? !!source.chatModeration : defaults.chatModeration,
    guestManagement: source.guestManagement !== undefined ? !!source.guestManagement : defaults.guestManagement,
    siteSettings: source.siteSettings !== undefined ? !!source.siteSettings : defaults.siteSettings
  };
}

function createStrongGuestPassword(length) {
  const safeLength = Math.max(10, Number(length || GUEST_PASSWORD_LENGTH));
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%*+-_";
  const bytes = crypto.randomBytes(safeLength);
  let out = "";
  for (let i = 0; i < safeLength; i += 1) {
    out += alphabet[bytes[i] % alphabet.length];
  }
  return out;
}

function createAppError(code, message) {
  const error = new Error(String(message || "Operation failed."));
  error.code = String(code || "APP_ERROR");
  return error;
}

function buildUserLimitResult() {
  return {
    ok: false,
    code: "USER_LIMIT_REACHED",
    limit: AUTH_MAX_PRIMARY_USERS,
    error: "Max user count is used."
  };
}

function hashSessionToken(token) {
  return crypto.createHash("sha256").update(String(token || "")).digest("hex");
}

function parseAuthBearer(req) {
  const raw = String(req.headers && req.headers.authorization ? req.headers.authorization : "");
  if (!raw.toLowerCase().startsWith("bearer ")) {
    return "";
  }
  return raw.slice(7).trim();
}

async function runDbBootstrap(pool) {
  await pool.query(`
    create table if not exists chat_messages (
      id bigserial primary key,
      kind text not null default 'chat',
      username text not null,
      display_name text not null,
      text text not null default '',
      attachment jsonb,
      reply_to jsonb,
      edited_at bigint not null default 0,
      deleted boolean not null default false,
      created_at timestamptz not null default now()
    );
  `);
  await pool.query(`
    create table if not exists chat_reactions (
      message_id bigint not null references chat_messages(id) on delete cascade,
      emoji text not null,
      username text not null,
      created_at timestamptz not null default now(),
      primary key (message_id, emoji, username)
    );
  `);
  await pool.query(`
    create table if not exists chat_seen (
      username text primary key,
      seen_up_to bigint not null default 0,
      updated_at timestamptz not null default now()
    );
  `);
  await pool.query("create index if not exists idx_chat_messages_created_at on chat_messages(created_at)");
  await pool.query("create index if not exists idx_chat_messages_id on chat_messages(id)");
  await pool.query(`
    create table if not exists studio_users (
      username text primary key,
      password_salt text not null,
      password_hash text not null,
      role text not null default 'user',
      failed_attempts integer not null default 0,
      locked_until timestamptz,
      email text,
      phone_e164 text,
      guest_account boolean not null default false,
      guest_enabled boolean not null default false,
      twofa_enabled boolean not null default false,
      twofa_enforced boolean not null default false,
      captcha_verified_at timestamptz,
      last_login_at timestamptz,
      permissions jsonb not null default '{}'::jsonb,
      profile jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      constraint studio_users_role_check check (role in ('admin','user','guest'))
    );
  `);
  await pool.query("alter table studio_users add column if not exists phone_e164 text");
  await pool.query("alter table studio_users add column if not exists email text");
  await pool.query("alter table studio_users add column if not exists guest_account boolean not null default false");
  await pool.query("alter table studio_users add column if not exists guest_enabled boolean not null default false");
  await pool.query("alter table studio_users add column if not exists twofa_enabled boolean not null default false");
  await pool.query("alter table studio_users add column if not exists twofa_enforced boolean not null default false");
  await pool.query("alter table studio_users add column if not exists captcha_verified_at timestamptz");
  await pool.query("alter table studio_users add column if not exists last_login_at timestamptz");
  await pool.query("alter table studio_users add column if not exists permissions jsonb not null default '{}'::jsonb");
  await pool.query("alter table studio_users drop constraint if exists studio_users_role_check");
  await pool.query("alter table studio_users add constraint studio_users_role_check check (role in ('admin','user','guest'))");
  await pool.query("create unique index if not exists idx_studio_users_email_unique on studio_users (lower(email)) where email is not null");
  await pool.query(`
    create table if not exists studio_oauth_identities (
      provider text not null,
      provider_user_id text not null,
      username text not null references studio_users(username) on delete cascade,
      email text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      primary key (provider, provider_user_id)
    );
  `);
  await pool.query("create index if not exists idx_studio_oauth_username on studio_oauth_identities(username)");
  await pool.query(`
    create table if not exists studio_sessions (
      token_hash text primary key,
      username text not null references studio_users(username) on delete cascade,
      expires_at timestamptz not null,
      created_at timestamptz not null default now(),
      last_seen_at timestamptz not null default now()
    );
  `);
  await pool.query(`
    create table if not exists studio_login_challenges (
      token_hash text primary key,
      username text not null references studio_users(username) on delete cascade,
      remember boolean not null default false,
      twofa_phone_e164 text,
      expires_at timestamptz not null,
      created_at timestamptz not null default now()
    );
  `);
  await pool.query("alter table studio_login_challenges add column if not exists twofa_phone_e164 text");
  await pool.query("create index if not exists idx_studio_sessions_username on studio_sessions(username)");
  await pool.query("create index if not exists idx_studio_sessions_expires on studio_sessions(expires_at)");
  await pool.query("create index if not exists idx_studio_login_challenges_username on studio_login_challenges(username)");
  await pool.query("create index if not exists idx_studio_login_challenges_expires on studio_login_challenges(expires_at)");
  await pool.query(`
    create table if not exists studio_password_reset_challenges (
      token_hash text primary key,
      username text,
      phone_e164 text,
      verified_at timestamptz,
      expires_at timestamptz not null,
      created_at timestamptz not null default now()
    );
  `);
  await pool.query("create index if not exists idx_studio_password_reset_username on studio_password_reset_challenges(username)");
  await pool.query("create index if not exists idx_studio_password_reset_expires on studio_password_reset_challenges(expires_at)");
  await pool.query(`
    create table if not exists studio_guest_invites (
      token_hash text primary key,
      username text not null references studio_users(username) on delete cascade,
      expires_at timestamptz not null,
      consumed_at timestamptz,
      revoked_at timestamptz,
      created_by text references studio_users(username) on delete set null,
      created_at timestamptz not null default now()
    );
  `);
  await pool.query("create index if not exists idx_studio_guest_invites_user on studio_guest_invites(username)");
  await pool.query("create index if not exists idx_studio_guest_invites_exp on studio_guest_invites(expires_at)");
  await pool.query(`
    create table if not exists studio_admin_settings (
      id integer primary key,
      settings jsonb not null default '{}'::jsonb,
      updated_by text references studio_users(username) on delete set null,
      updated_at timestamptz not null default now()
    );
  `);
  await pool.query(`
    create table if not exists studio_audit_log (
      id bigserial primary key,
      event_type text not null,
      actor_username text,
      target_username text,
      details jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    );
  `);
  await pool.query("create index if not exists idx_studio_audit_created_at on studio_audit_log(created_at desc)");
  await pool.query(`
    create table if not exists studio_show_libraries (
      id text primary key,
      title text not null,
      slug text not null unique,
      created_by text references studio_users(username) on delete set null,
      updated_by text references studio_users(username) on delete set null,
      archived boolean not null default false,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
  `);
  await pool.query("create index if not exists idx_studio_show_libraries_active on studio_show_libraries(archived, title asc)");
  await pool.query(`
    create table if not exists studio_library_assets (
      id text primary key,
      library_kind text not null,
      asset_role text not null default '',
      title text not null,
      original_filename text,
      mime_type text,
      byte_size bigint not null default 0,
      duration_seconds numeric(10,2),
      status text not null default 'uploaded',
      storage_provider text not null default 'unconfigured',
      storage_key text,
      storage_url text,
      created_by text references studio_users(username) on delete set null,
      updated_by text references studio_users(username) on delete set null,
      metadata jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      constraint studio_library_assets_library_kind_check check (library_kind in ('music','episodes','post-production')),
      constraint studio_library_assets_status_check check (status in ('draft','uploaded','processing','review','export-ready','archived'))
    );
  `);
  await pool.query("create index if not exists idx_studio_library_assets_kind on studio_library_assets(library_kind, created_at desc)");
  await pool.query("create index if not exists idx_studio_library_assets_status on studio_library_assets(status, created_at desc)");
  await pool.query("update studio_users set guest_account = false where username <> $1 and guest_account = true", [GUEST_USERNAME]);
  await pool.query("update studio_users set role = 'admin' where username = $1", [DEFAULT_ADMIN_USERNAME]);
  await pool.query("update studio_users set twofa_enforced = true where username = $1", [DEFAULT_ADMIN_USERNAME]);
  await pool.query("insert into studio_admin_settings (id, settings, updated_at) values (1, $1::jsonb, now()) on conflict (id) do nothing", [
    JSON.stringify(sanitizeAdminSettings(getDefaultAdminSettings()))
  ]);
  await pool.query("update studio_users set permissions = $2::jsonb where username = $1 and (permissions is null or permissions = '{}'::jsonb)", [
    DEFAULT_ADMIN_USERNAME,
    JSON.stringify(getDefaultPermissionsForRole("admin"))
  ]);
  await pool.query(`
    with first_user as (
      select username
      from studio_users
      order by created_at asc, username asc
      limit 1
    )
    update studio_users
    set role = 'admin'
    where username = (select username from first_user)
      and not exists (select 1 from studio_users where role = 'admin')
  `);
  await pool.query(`
    update studio_users
    set permissions = case
      when role = 'admin' then $1::jsonb
      when role = 'guest' or username = $3 then $2::jsonb
      else coalesce(permissions, '{}'::jsonb)
    end
    where permissions is null
       or permissions = '{}'::jsonb
       or role = 'admin'
       or role = 'guest'
       or username = $3
  `, [
    JSON.stringify(getDefaultPermissionsForRole("admin")),
    JSON.stringify(getDefaultPermissionsForRole("guest")),
    normalizeUsername(GUEST_USERNAME)
  ]);
}

async function dbQuery(text, params) {
  if (!hasDb()) {
    return null;
  }
  return dbPool.query(text, params);
}

async function loadAdminSettingsFromDb() {
  if (!hasDb()) {
    adminSettings = sanitizeAdminSettings(getDefaultAdminSettings());
    return adminSettings;
  }
  const result = await dbQuery("select settings from studio_admin_settings where id = 1 limit 1", []);
  const row = result && result.rows && result.rows[0] ? result.rows[0] : null;
  adminSettings = sanitizeAdminSettings(row && row.settings ? row.settings : getDefaultAdminSettings());
  return adminSettings;
}

async function saveAdminSettingsToDb(nextSettings, updatedBy) {
  const sanitized = sanitizeAdminSettings(nextSettings);
  if (!hasDb()) {
    adminSettings = sanitized;
    return sanitized;
  }
  await dbQuery(
    `
      insert into studio_admin_settings (id, settings, updated_by, updated_at)
      values (1, $1::jsonb, $2, now())
      on conflict (id)
      do update set
        settings = excluded.settings,
        updated_by = excluded.updated_by,
        updated_at = now()
    `,
    [JSON.stringify(sanitized), normalizeUsername(updatedBy || "") || null]
  );
  adminSettings = sanitized;
  return sanitized;
}

async function writeAuditLog(eventType, actorUsername, targetUsername, details) {
  if (!hasDb()) {
    return;
  }
  await dbQuery(
    `
      insert into studio_audit_log (event_type, actor_username, target_username, details, created_at)
      values ($1, $2, $3, $4::jsonb, now())
    `,
    [
      String(eventType || "").trim().slice(0, 80),
      normalizeUsername(actorUsername || "") || null,
      normalizeUsername(targetUsername || "") || null,
      JSON.stringify(details && typeof details === "object" ? details : {})
    ]
  );
}

async function listAuditLog(limit) {
  const safeLimit = Math.max(10, Math.min(200, Number(limit || 50) || 50));
  if (!hasDb()) {
    return [];
  }
  const result = await dbQuery(
    `
      select
        id,
        event_type,
        actor_username,
        target_username,
        details,
        created_at
      from studio_audit_log
      order by created_at desc, id desc
      limit $1
    `,
    [safeLimit]
  );
  return Array.isArray(result && result.rows) ? result.rows : [];
}

async function listLibraryAssetsDb(options) {
  const libraryKind = normalizeLibraryKind(options && options.libraryKind);
  const safeLimit = Math.max(10, Math.min(250, Number((options && options.limit) || 50) || 50));
  const showLibraryId = String((options && options.showLibraryId) || "").trim();
  if (!hasDb()) {
    return [];
  }
  const result = await dbQuery(
    `
      select
        id,
        library_kind as "libraryKind",
        asset_role as "assetRole",
        title,
        original_filename as "originalFilename",
        mime_type as "mimeType",
        byte_size as "byteSize",
        duration_seconds as "durationSeconds",
        status,
        storage_provider as "storageProvider",
        storage_key as "storageKey",
        storage_url as "storageUrl",
        created_by as "createdBy",
        updated_by as "updatedBy",
        metadata,
        created_at as "createdAt",
        updated_at as "updatedAt"
      from studio_library_assets
      where library_kind = $1
        and status = 'uploaded'
        and ($3::text = '' or coalesce(metadata->>'showLibraryId', '') = $3)
      order by created_at desc
      limit $2
    `,
    [libraryKind, safeLimit, showLibraryId]
  );
  return Array.isArray(result && result.rows) ? result.rows : [];
}

function sanitizeShowLibraryTitle(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 120);
}

function createShowLibrarySlug(value) {
  const normalized = sanitizeShowLibraryTitle(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || "show-library";
}

async function listShowLibrariesDb() {
  if (!hasDb()) {
    return [];
  }
  const result = await dbQuery(
    `
      select
        id,
        title,
        slug,
        created_by as "createdBy",
        updated_by as "updatedBy",
        archived,
        created_at as "createdAt",
        updated_at as "updatedAt"
      from studio_show_libraries
      where archived = false
      order by title asc, created_at asc
    `,
    []
  );
  return Array.isArray(result && result.rows) ? result.rows : [];
}

async function createShowLibraryDb(actorUsername, payload) {
  if (!hasDb()) {
    return { ok: false, error: "Show library storage is unavailable right now." };
  }
  const title = sanitizeShowLibraryTitle(payload && payload.title);
  if (!title) {
    return { ok: false, error: "Show library name is required." };
  }
  const slugBase = createShowLibrarySlug(title);
  let slug = slugBase;
  let attempt = 1;
  // Keep the collision logic local and deterministic.
  while (attempt < 50) {
    const existing = await dbQuery(
      "select id, title, slug from studio_show_libraries where lower(slug) = lower($1) limit 1",
      [slug]
    );
    const row = existing && existing.rows && existing.rows[0] ? existing.rows[0] : null;
    if (!row) {
      break;
    }
    if (String(row.title || "").trim().toLowerCase() === title.toLowerCase()) {
      return { ok: true, showLibrary: row };
    }
    attempt += 1;
    slug = slugBase + "-" + String(attempt);
  }
  const showLibrary = {
    id: "show_" + crypto.randomBytes(8).toString("hex"),
    title,
    slug
  };
  await dbQuery(
    `
      insert into studio_show_libraries (
        id,
        title,
        slug,
        created_by,
        updated_by,
        archived,
        created_at,
        updated_at
      )
      values ($1,$2,$3,$4,$4,false,now(),now())
    `,
    [showLibrary.id, showLibrary.title, showLibrary.slug, normalizeUsername(actorUsername || "") || null]
  );
  return { ok: true, showLibrary };
}

async function createLibraryAssetMetadataDb(actorUsername, payload) {
  if (!hasDb()) {
    return { ok: false, error: "Library storage is unavailable right now." };
  }
  const libraryKind = normalizeLibraryKind(payload && payload.libraryKind);
  const title = String((payload && payload.title) || "").trim().slice(0, 180);
  if (!title) {
    return { ok: false, error: "Title is required." };
  }
  const asset = {
    id: "asset_" + crypto.randomBytes(8).toString("hex"),
    libraryKind,
    assetRole: String((payload && payload.assetRole) || "").trim().slice(0, 80),
    title,
    originalFilename: String((payload && payload.originalFilename) || "").trim().slice(0, 220) || null,
    mimeType: String((payload && payload.mimeType) || "").trim().slice(0, 120) || null,
    byteSize: Math.max(0, Number((payload && payload.byteSize) || 0) || 0),
    durationSeconds: Number.isFinite(Number(payload && payload.durationSeconds)) ? Number(payload.durationSeconds) : null,
    status: normalizeLibraryStatus(payload && payload.status),
    storageProvider: String((payload && payload.storageProvider) || "unconfigured").trim().slice(0, 80) || "unconfigured",
    storageKey: String((payload && payload.storageKey) || "").trim().slice(0, 255) || null,
    storageUrl: String((payload && payload.storageUrl) || "").trim().slice(0, 500) || null,
    metadata: payload && typeof payload.metadata === "object" && payload.metadata ? payload.metadata : {}
  };
  await dbQuery(
    `
      insert into studio_library_assets (
        id,
        library_kind,
        asset_role,
        title,
        original_filename,
        mime_type,
        byte_size,
        duration_seconds,
        status,
        storage_provider,
        storage_key,
        storage_url,
        created_by,
        updated_by,
        metadata,
        created_at,
        updated_at
      )
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$13,$14::jsonb,now(),now())
    `,
    [
      asset.id,
      asset.libraryKind,
      asset.assetRole,
      asset.title,
      asset.originalFilename,
      asset.mimeType,
      asset.byteSize,
      asset.durationSeconds,
      asset.status,
      asset.storageProvider,
      asset.storageKey,
      asset.storageUrl,
      normalizeUsername(actorUsername || "") || null,
      JSON.stringify(asset.metadata)
    ]
  );
  return { ok: true, asset };
}

async function renameLibraryAssetDb(actorUsername, assetId, nextTitle) {
  if (!hasDb()) {
    return { ok: false, error: "Library storage is unavailable right now." };
  }
  const normalizedId = String(assetId || "").trim();
  const title = String(nextTitle || "").trim().slice(0, 180);
  if (!normalizedId || !title) {
    return { ok: false, error: "Asset id and title are required." };
  }
  const result = await dbQuery(
    `
      update studio_library_assets
      set title = $2, updated_by = $3, updated_at = now()
      where id = $1
      returning
        id,
        library_kind as "libraryKind",
        asset_role as "assetRole",
        title,
        original_filename as "originalFilename",
        mime_type as "mimeType",
        byte_size as "byteSize",
        duration_seconds as "durationSeconds",
        status,
        storage_provider as "storageProvider",
        storage_key as "storageKey",
        storage_url as "storageUrl",
        created_by as "createdBy",
        updated_by as "updatedBy",
        metadata,
        created_at as "createdAt",
        updated_at as "updatedAt"
    `,
    [normalizedId, title, normalizeUsername(actorUsername || "") || null]
  );
  const row = result && result.rows && result.rows[0] ? result.rows[0] : null;
  if (!row) {
    return { ok: false, error: "Library asset not found." };
  }
  return { ok: true, asset: row };
}

async function deleteLibraryAssetDb(actorUsername, assetId) {
  if (!hasDb()) {
    return { ok: false, error: "Library storage is unavailable right now." };
  }
  const normalizedId = String(assetId || "").trim();
  if (!normalizedId) {
    return { ok: false, error: "Asset id is required." };
  }
  const existing = await getLibraryAssetByIdDb(normalizedId);
  if (!existing) {
    return { ok: false, error: "Library asset not found." };
  }
  await dbQuery(
    `
      delete from studio_library_assets
      where id = $1
    `,
    [normalizedId]
  );
  return { ok: true, asset: existing };
}

async function getLibraryAssetByIdDb(assetId) {
  if (!hasDb()) {
    return null;
  }
  const normalizedId = String(assetId || "").trim();
  if (!normalizedId) {
    return null;
  }
  const result = await dbQuery(
    `
      select
        id,
        library_kind as "libraryKind",
        asset_role as "assetRole",
        title,
        original_filename as "originalFilename",
        mime_type as "mimeType",
        byte_size as "byteSize",
        duration_seconds as "durationSeconds",
        status,
        storage_provider as "storageProvider",
        storage_key as "storageKey",
        storage_url as "storageUrl",
        created_by as "createdBy",
        updated_by as "updatedBy",
        metadata,
        created_at as "createdAt",
        updated_at as "updatedAt"
      from studio_library_assets
      where id = $1
      limit 1
    `,
    [normalizedId]
  );
  return result && result.rows && result.rows[0] ? result.rows[0] : null;
}

async function finalizeLibraryAssetUploadDb(actorUsername, assetId, updates) {
  if (!hasDb()) {
    return { ok: false, error: "Library storage is unavailable right now." };
  }
  const normalizedId = String(assetId || "").trim();
  if (!normalizedId) {
    return { ok: false, error: "Asset id is required." };
  }
  const nextTitle = String((updates && updates.title) || "").trim().slice(0, 180) || null;
  const result = await dbQuery(
    `
      update studio_library_assets
      set
        title = coalesce($2, title),
        byte_size = $3,
        duration_seconds = $4,
        status = 'uploaded',
        updated_by = $5,
        updated_at = now(),
        metadata = coalesce(metadata, '{}'::jsonb) || $6::jsonb
      where id = $1
      returning
        id,
        library_kind as "libraryKind",
        asset_role as "assetRole",
        title,
        original_filename as "originalFilename",
        mime_type as "mimeType",
        byte_size as "byteSize",
        duration_seconds as "durationSeconds",
        status,
        storage_provider as "storageProvider",
        storage_key as "storageKey",
        storage_url as "storageUrl",
        created_by as "createdBy",
        updated_by as "updatedBy",
        metadata,
        created_at as "createdAt",
        updated_at as "updatedAt"
    `,
    [
      normalizedId,
      nextTitle,
      Math.max(0, Number((updates && updates.byteSize) || 0) || 0),
      Number.isFinite(Number(updates && updates.durationSeconds)) ? Number(updates.durationSeconds) : null,
      normalizeUsername(actorUsername || "") || null,
      JSON.stringify((updates && updates.metadata && typeof updates.metadata === "object") ? updates.metadata : {})
    ]
  );
  const row = result && result.rows && result.rows[0] ? result.rows[0] : null;
  if (!row) {
    return { ok: false, error: "Library asset not found." };
  }
  return { ok: true, asset: row };
}

async function verifyLibraryAssetObjectExists(asset) {
  if (!asset || !asset.storageKey || !hasMediaStorageConfig()) {
    return false;
  }
  const client = getMediaStorageClient();
  const bucket = getBucketForLibraryKind(asset.libraryKind);
  if (!client || !bucket) {
    return false;
  }
  if (HeadObjectCommand) {
    await client.send(
      new HeadObjectCommand({
        Bucket: bucket,
        Key: asset.storageKey
      })
    );
    return true;
  }
  await client.send(
    new GetObjectCommand({
      Bucket: bucket,
      Key: asset.storageKey
    })
  );
  return true;
}

async function createLibraryUploadTicket(actorUsername, payload) {
  if (!hasMediaStorageConfig()) {
    return { ok: false, error: "Shared media storage is not configured right now." };
  }
  const libraryKind = normalizeLibraryKind(payload && payload.libraryKind);
  const filename = String((payload && payload.filename) || "").trim();
  const mimeType = String((payload && payload.mimeType) || "application/octet-stream").trim().slice(0, 120);
  const byteSize = Math.max(0, Number((payload && payload.byteSize) || 0) || 0);
  const title =
    String((payload && payload.title) || "").trim().slice(0, 180) ||
    filename.replace(/\.[^.]+$/, "").slice(0, 180) ||
    "Untitled Asset";
  if (!filename) {
    return { ok: false, error: "Filename is required." };
  }
  const created = await createLibraryAssetMetadataDb(actorUsername, {
    libraryKind,
    assetRole: payload && payload.assetRole ? payload.assetRole : "",
    title,
    originalFilename: filename,
    mimeType,
    byteSize,
    status: "draft",
    storageProvider: getMediaStorageProvider(),
    storageKey: buildLibraryObjectKey(libraryKind, "asset_" + crypto.randomBytes(8).toString("hex"), filename),
    metadata: {
      source: "presigned-upload"
    }
  });
  if (!created.ok) {
    return created;
  }
  const storageKey = buildLibraryObjectKey(libraryKind, created.asset.id, filename);
  await dbQuery(
    `
      update studio_library_assets
      set storage_key = $2, updated_by = $3, updated_at = now()
      where id = $1
    `,
    [created.asset.id, storageKey, normalizeUsername(actorUsername || "") || null]
  );
  const client = getMediaStorageClient();
  const bucket = getBucketForLibraryKind(libraryKind);
  const uploadCommand = new PutObjectCommand({
    Bucket: bucket,
    Key: storageKey,
    ContentType: mimeType || "application/octet-stream"
  });
  const uploadUrl = await getSignedUrl(client, uploadCommand, { expiresIn: R2_PRESIGN_TTL_SECONDS });
  const asset = await getLibraryAssetByIdDb(created.asset.id);
  return {
    ok: true,
    uploadUrl,
    uploadMethod: "PUT",
    uploadHeaders: {
      "Content-Type": mimeType || "application/octet-stream"
    },
    asset,
    storage: {
      provider: getMediaStorageProvider(),
      bucket,
      key: storageKey
    }
  };
}

async function createLibraryDownloadTicket(assetId) {
  if (!hasMediaStorageConfig()) {
    return { ok: false, error: "Shared media storage is not configured right now." };
  }
  const asset = await getLibraryAssetByIdDb(assetId);
  if (!asset || !asset.storageKey) {
    return { ok: false, error: "Library asset not found." };
  }
  const client = getMediaStorageClient();
  const bucket = getBucketForLibraryKind(asset.libraryKind);
  const downloadCommand = new GetObjectCommand({
    Bucket: bucket,
    Key: asset.storageKey
  });
  const downloadUrl = await getSignedUrl(client, downloadCommand, { expiresIn: R2_PRESIGN_TTL_SECONDS });
  return {
    ok: true,
    asset,
    downloadUrl,
    storage: {
      provider: getMediaStorageProvider(),
      bucket,
      key: asset.storageKey
    }
  };
}

async function streamLibraryAssetToResponse(res, assetId) {
  try {
    if (!hasMediaStorageConfig()) {
      json(res, 503, { ok: false, error: "Shared media storage is not configured right now." });
      return;
    }
    const asset = await getLibraryAssetByIdDb(assetId);
    if (!asset || !asset.storageKey) {
      json(res, 404, { ok: false, error: "Library asset not found." });
      return;
    }
    const client = getMediaStorageClient();
    const bucket = getBucketForLibraryKind(asset.libraryKind);
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: asset.storageKey
    });
    const response = await client.send(command);
    const contentType = String(response && response.ContentType ? response.ContentType : asset.mimeType || "application/octet-stream");
    const contentLength = Number(response && response.ContentLength ? response.ContentLength : asset.byteSize || 0);
    const headers = {
      "Content-Type": contentType,
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };
    if (contentLength > 0) {
      headers["Content-Length"] = String(contentLength);
    }
    res.writeHead(200, headers);
    const body = response && response.Body ? response.Body : null;
    if (!body) {
      res.end();
      return;
    }
    if (typeof body.pipe === "function") {
      body.on("error", (error) => {
        process.stdout.write("[realtime] media download stream error: " + String(error && error.message ? error.message : error) + "\n");
        try {
          res.end();
        } catch (closeError) {
          // Ignore response close errors.
        }
      });
      body.pipe(res);
      return;
    }
    if (typeof body.transformToByteArray === "function") {
      const bytes = await body.transformToByteArray();
      res.end(Buffer.from(bytes));
      return;
    }
    const chunks = [];
    for await (const chunk of body) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    res.end(Buffer.concat(chunks));
  } catch (error) {
    process.stdout.write(
      "[realtime] media download failed for " +
        String(assetId || "") +
        ": " +
        String(error && error.message ? error.message : error) +
        "\n"
    );
    json(res, 500, { ok: false, error: "Shared media download failed." });
  }
}

async function initDatabase() {
  if (dbInitInFlight) {
    return;
  }
  dbInitInFlight = true;
  if (!PgPool || !DATABASE_URL) {
    process.stdout.write("[realtime] Postgres not configured; using in-memory chat store.\n");
    dbInitInFlight = false;
    return;
  }
  try {
    const preferredSsl = shouldUseDbSsl();
    let connectedSsl = preferredSsl;
    let pool = createDbPool(preferredSsl);
    try {
      await runDbBootstrap(pool);
    } catch (primaryError) {
      await pool.end().catch(() => {});
      pool = createDbPool(!preferredSsl);
      await runDbBootstrap(pool);
      connectedSsl = !preferredSsl;
      process.stdout.write(
        "[realtime] Postgres connected after SSL mode fallback (" + (connectedSsl ? "ssl-on" : "ssl-off") + ").\n"
      );
    }
    dbPool = pool;
    attachDbPoolHandlers(pool);
    dbReady = true;
    await loadAdminSettingsFromDb();
    await hydrateChatFromDatabase();
    process.stdout.write(
      "[realtime] Postgres connected; chat persistence enabled (" + (connectedSsl ? "ssl-on" : "ssl-off") + ").\n"
    );
  } finally {
    dbInitInFlight = false;
  }
}

function scheduleDatabaseReconnect() {
  if (dbReady || !DATABASE_URL) {
    return;
  }
  setTimeout(() => {
    if (dbReady || dbInitInFlight) {
      return;
    }
    initDatabase()
      .catch((error) => {
        process.stderr.write(
          "[realtime] Postgres reconnect failed, retrying in 10s: " +
            String(error && error.message ? error.message : error) +
            "\n"
        );
        scheduleDatabaseReconnect();
      });
  }, 10000);
}

async function loadReactionsForMessageIds(messageIds) {
  const ids = Array.isArray(messageIds) ? messageIds.filter((id) => Number(id) > 0).map((id) => Number(id)) : [];
  if (!ids.length || !hasDb()) {
    return new Map();
  }
  const rows = await dbQuery(
    "select message_id, username, emoji from chat_reactions where message_id = any($1::bigint[])",
    [ids]
  );
  const out = new Map();
  rows.rows.forEach((row) => {
    const messageId = Number(row.message_id || 0);
    if (!messageId) {
      return;
    }
    const byUser = out.get(messageId) || {};
    byUser[String(row.username || "").trim().toLowerCase()] = String(row.emoji || "");
    out.set(messageId, byUser);
  });
  return out;
}

async function loadSeenSnapshot(minMessageId) {
  if (!hasDb()) {
    return [];
  }
  const minId = Number(minMessageId || 0);
  const rows = await dbQuery(
    `
      select username, seen_up_to, (extract(epoch from updated_at) * 1000)::bigint as updated_at
      from chat_seen
      where seen_up_to >= $1
    `,
    [minId]
  );
  return Array.isArray(rows && rows.rows) ? rows.rows : [];
}

async function hydrateChatFromDatabase() {
  if (!hasDb()) {
    return;
  }
  const result = await dbQuery(
    `
      select
        id,
        kind,
        username,
        display_name,
        text,
        attachment,
        reply_to,
        edited_at,
        deleted,
        (extract(epoch from created_at) * 1000)::bigint as timestamp
      from chat_messages
      order by id desc
      limit $1
    `,
    [MAX_CHAT_MESSAGES]
  );
  const rows = Array.isArray(result && result.rows) ? [...result.rows].reverse() : [];
  chatMessages.length = 0;
  let maxId = 0;
  const ids = [];
  rows.forEach((row) => {
    const id = Number(row.id || 0);
    if (!id) {
      return;
    }
    maxId = Math.max(maxId, id);
    ids.push(id);
    chatMessages.push({
      id,
      kind: String(row.kind || "chat"),
      username: String(row.username || "").trim().toLowerCase(),
      displayName: String(row.display_name || row.username || "").trim(),
      text: String(row.text || ""),
      timestamp: Number(row.timestamp || Date.now()),
      reactions: {},
      attachment: row.attachment && typeof row.attachment === "object" ? row.attachment : null,
      replyTo: row.reply_to && typeof row.reply_to === "object" ? row.reply_to : null,
      editedAt: Number(row.edited_at || 0),
      deleted: !!row.deleted,
      seenBy: {}
    });
  });
  messageSeq = Math.max(messageSeq, maxId);
  if (!ids.length) {
    return;
  }
  const minId = Math.min(...ids);
  const reactionsByMessage = await loadReactionsForMessageIds(ids);
  const seenRows = await loadSeenSnapshot(minId);
  const seenByUser = new Map();
  seenRows.forEach((row) => {
    const username = String(row.username || "").trim().toLowerCase();
    if (!username) {
      return;
    }
    seenByUser.set(username, {
      seenUpTo: Number(row.seen_up_to || 0),
      updatedAt: Number(row.updated_at || Date.now())
    });
  });
  chatMessages.forEach((message) => {
    message.reactions = reactionsByMessage.get(message.id) || {};
    message.seenBy = {
      [message.username]: Number(message.timestamp || Date.now())
    };
    seenByUser.forEach((seen, username) => {
      if (username !== message.username && seen.seenUpTo >= message.id) {
        message.seenBy[username] = seen.updatedAt;
      }
    });
  });
}

async function refreshChatStateFromDb(force) {
  if (!hasDb()) {
    return;
  }
  const now = Date.now();
  if (!force && now - lastDbHydrateAt < 800) {
    return;
  }
  await hydrateChatFromDatabase();
  lastDbHydrateAt = now;
}

async function getChatDebugSnapshot() {
  const memoryCount = chatMessages.length;
  const memoryMaxId = memoryCount ? Math.max(...chatMessages.map((m) => Number(m.id || 0))) : 0;
  const memoryRecent = chatMessages
    .slice(-5)
    .map((m) => ({ id: Number(m.id || 0), user: String(m.username || ""), text: String(m.text || "").slice(0, 80) }));

  const snapshot = {
    dbReady: hasDb(),
    dbConfigured: isPersistentDbConfigured(),
    dbLabel: getDatabaseLabel(),
    memory: {
      count: memoryCount,
      maxId: memoryMaxId,
      recent: memoryRecent
    },
    database: null
  };

  if (!hasDb()) {
    return snapshot;
  }

  const statsResult = await dbQuery("select count(*)::int as total, coalesce(max(id), 0)::bigint as max_id from chat_messages", []);
  const recentResult = await dbQuery(
    `
      select id, username, text
      from chat_messages
      order by id desc
      limit 5
    `,
    []
  );
  const dbRecent = Array.isArray(recentResult && recentResult.rows)
    ? [...recentResult.rows]
        .reverse()
        .map((row) => ({
          id: Number(row.id || 0),
          user: String(row.username || ""),
          text: String(row.text || "").slice(0, 80)
        }))
    : [];

  snapshot.database = {
    count: Number(statsResult && statsResult.rows && statsResult.rows[0] ? statsResult.rows[0].total : 0),
    maxId: Number(statsResult && statsResult.rows && statsResult.rows[0] ? statsResult.rows[0].max_id : 0),
    recent: dbRecent
  };
  return snapshot;
}

function normalizeIceServers(servers) {
  const list = Array.isArray(servers) ? servers : [];
  const out = [];
  list.forEach((item) => {
    if (!item || typeof item !== "object") {
      return;
    }
    const urls = item.urls || item.url;
    if (!urls) {
      return;
    }
    const normalized = { urls };
    if (item.username) {
      normalized.username = String(item.username);
    }
    if (item.credential) {
      normalized.credential = String(item.credential);
    }
    out.push(normalized);
  });
  return out.length ? out : FALLBACK_ICE_SERVERS;
}

function hasTwilioConfig() {
  return !!TWILIO_ACCOUNT_SID && !!TWILIO_AUTH_TOKEN;
}

function hasTwilioVerifyConfig() {
  return hasTwilioConfig() && !!TWILIO_VERIFY_SERVICE_SID;
}

function hasTwilioVideoConfig() {
  return !!TwilioSdk && !!TWILIO_ACCOUNT_SID && !!TWILIO_VIDEO_API_KEY_SID && !!TWILIO_VIDEO_API_KEY_SECRET;
}

function createTwilioVideoAccessToken(identity, roomName) {
  if (!hasTwilioVideoConfig()) {
    return null;
  }
  const AccessToken = TwilioSdk.jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;
  const token = new AccessToken(TWILIO_ACCOUNT_SID, TWILIO_VIDEO_API_KEY_SID, TWILIO_VIDEO_API_KEY_SECRET, {
    ttl: TWILIO_VIDEO_TOKEN_TTL_SECONDS,
    identity: String(identity || "").trim()
  });
  token.addGrant(new VideoGrant({ room: String(roomName || TWILIO_VIDEO_ROOM_NAME).trim() || TWILIO_VIDEO_ROOM_NAME }));
  return token.toJwt();
}

function hasTurnstileConfig() {
  return !!TURNSTILE_SITE_KEY && !!TURNSTILE_SECRET_KEY;
}

function getExpectedTurnstileHostnames() {
  return String(TURNSTILE_EXPECTED_HOSTNAME || "")
    .split(",")
    .map((item) => String(item || "").trim().toLowerCase())
    .filter(Boolean);
}

function isCaptchaReverifyRequired(userRow) {
  if (!hasTurnstileConfig()) {
    return false;
  }
  const settings = getAdminSettings();
  const verifiedAtMs = Number(userRow && userRow.captcha_verified_at_ms ? userRow.captcha_verified_at_ms : 0);
  if (!verifiedAtMs) {
    return true;
  }
  const maxAgeMs = Math.max(7, Number(settings.captchaReverifyDays || AUTH_CAPTCHA_REVERIFY_DAYS)) * 24 * 60 * 60 * 1000;
  return Date.now() - verifiedAtMs >= maxAgeMs;
}

function parseRequestIp(req) {
  const forwarded = String((req.headers && req.headers["x-forwarded-for"]) || "").trim();
  if (forwarded) {
    const first = forwarded.split(",")[0];
    return String(first || "").trim();
  }
  const socketIp = req && req.socket ? String(req.socket.remoteAddress || "").trim() : "";
  return socketIp;
}

async function verifyTurnstileToken(token, remoteIp) {
  if (!hasTurnstileConfig()) {
    return { ok: true };
  }
  const responseToken = String(token || "").trim();
  if (!responseToken) {
    return { ok: false, code: "CAPTCHA_REQUIRED", error: "Complete the security check to continue." };
  }
  const body = new URLSearchParams();
  body.set("secret", TURNSTILE_SECRET_KEY);
  body.set("response", responseToken);
  if (remoteIp) {
    body.set("remoteip", String(remoteIp));
  }
  let response;
  try {
    response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body.toString()
    });
  } catch (error) {
    return { ok: false, code: "CAPTCHA_UNAVAILABLE", error: "Security check unavailable. Try again." };
  }
  if (!response.ok) {
    return { ok: false, code: "CAPTCHA_UNAVAILABLE", error: "Security check unavailable. Try again." };
  }
  let payload = null;
  try {
    payload = await response.json();
  } catch (error) {
    payload = null;
  }
  const success = !!(payload && payload.success);
  if (!success) {
    return { ok: false, code: "CAPTCHA_INVALID", error: "Security check failed. Please retry." };
  }
  const expectedHostnames = getExpectedTurnstileHostnames();
  if (expectedHostnames.length) {
    const hostname = String((payload && payload.hostname) || "").trim().toLowerCase();
    if (!hostname || !expectedHostnames.includes(hostname)) {
      return { ok: false, code: "CAPTCHA_HOSTNAME_INVALID", error: "Invalid security check origin." };
    }
  }
  return { ok: true };
}

function hasGoogleOauthConfig() {
  return getAdminSettings().googleLoginEnabled !== false && !!GOOGLE_CLIENT_ID && !!GOOGLE_CLIENT_SECRET && !!GOOGLE_REDIRECT_URI;
}

function hasFacebookOauthConfig() {
  return getAdminSettings().facebookLoginEnabled !== false && !!FACEBOOK_APP_ID && !!FACEBOOK_APP_SECRET && !!FACEBOOK_REDIRECT_URI;
}

function isLocalDevFrontend() {
  return /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(FRONTEND_BASE_URL);
}

function canUseDevAuthBypass() {
  return ALLOW_DEV_AUTH_BYPASS && isLocalDevFrontend();
}

function normalizeEmail(raw) {
  const value = String(raw || "").trim().toLowerCase();
  if (!value || !value.includes("@")) {
    return "";
  }
  return value;
}

function sanitizeUsernameCandidate(raw) {
  const base = String(raw || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "")
    .replace(/^[._-]+|[._-]+$/g, "");
  return base.slice(0, 24) || "user";
}

function getFrontendRedirectUrl(fragmentParams) {
  let base = String(FRONTEND_BASE_URL || "").trim();
  if (!base) {
    base = "http://localhost:8080";
  }
  base = base.replace(/\/+$/, "");
  const query = new URLSearchParams(fragmentParams || {}).toString();
  return base + "/index.html" + (query ? "#" + query : "");
}

function redirect(res, location) {
  res.writeHead(302, {
    Location: String(location || "/"),
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0"
  });
  res.end();
}

function signOauthState(payload) {
  const jsonPayload = JSON.stringify(payload || {});
  const encodedPayload = Buffer.from(jsonPayload).toString("base64url");
  const signature = crypto.createHmac("sha256", OAUTH_STATE_SECRET).update(encodedPayload).digest("base64url");
  return encodedPayload + "." + signature;
}

function verifyOauthState(token) {
  const raw = String(token || "").trim();
  if (!raw || !raw.includes(".")) {
    return null;
  }
  const [encodedPayload, signature] = raw.split(".", 2);
  const expected = crypto.createHmac("sha256", OAUTH_STATE_SECRET).update(encodedPayload).digest("base64url");
  if (expected !== signature) {
    return null;
  }
  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8"));
    return payload && typeof payload === "object" ? payload : null;
  } catch (error) {
    return null;
  }
}

function buildOauthState(provider) {
  return signOauthState({
    provider: String(provider || ""),
    iat: Date.now()
  });
}

function getTrustedDeviceFingerprint(userRow) {
  const base = String(userRow && userRow.password_hash ? userRow.password_hash : "").trim();
  if (!base) {
    return "";
  }
  return crypto.createHash("sha256").update(base).digest("hex").slice(0, 24);
}

function createTrustedDeviceToken(userRow) {
  const username = normalizeUsername(userRow && userRow.username ? userRow.username : "");
  if (!username) {
    return "";
  }
  return signOauthState({
    type: "trusted-device",
    username,
    role: normalizeRole(userRow && userRow.role),
    fp: getTrustedDeviceFingerprint(userRow),
    exp: Date.now() + AUTH_TRUSTED_DEVICE_DAYS * 24 * 60 * 60 * 1000
  });
}

function isTrustedDeviceTokenValid(token, userRow) {
  const payload = verifyOauthState(token);
  if (!payload || payload.type !== "trusted-device") {
    return false;
  }
  if (normalizeUsername(payload.username || "") !== normalizeUsername(userRow && userRow.username ? userRow.username : "")) {
    return false;
  }
  if (normalizeRole(payload.role || "") !== "user") {
    return false;
  }
  const exp = Number(payload.exp || 0);
  if (!Number.isFinite(exp) || exp <= Date.now()) {
    return false;
  }
  return String(payload.fp || "") === getTrustedDeviceFingerprint(userRow);
}

function isOauthStateValidForProvider(state, provider) {
  const payload = verifyOauthState(state);
  if (!payload) {
    return false;
  }
  if (String(payload.provider || "") !== String(provider || "")) {
    return false;
  }
  const iat = Number(payload.iat || 0);
  if (!iat || Date.now() - iat > 15 * 60 * 1000) {
    return false;
  }
  return true;
}

async function getOAuthIdentity(provider, providerUserId) {
  if (!hasDb()) {
    return null;
  }
  const result = await dbQuery(
    `
      select provider, provider_user_id, username, email
      from studio_oauth_identities
      where provider = $1 and provider_user_id = $2
      limit 1
    `,
    [String(provider || "").trim().toLowerCase(), String(providerUserId || "").trim()]
  );
  return result && result.rows && result.rows[0] ? result.rows[0] : null;
}

async function getUserByEmail(email) {
  if (!hasDb()) {
    return null;
  }
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) {
    return null;
  }
  const result = await dbQuery(
    `
      select username
      from studio_users
      where lower(email) = $1
      limit 1
    `,
    [normalizedEmail]
  );
  return result && result.rows && result.rows[0] ? normalizeUsername(result.rows[0].username) : null;
}

async function upsertOAuthIdentity(provider, providerUserId, username, email) {
  await dbQuery(
    `
      insert into studio_oauth_identities (provider, provider_user_id, username, email, created_at, updated_at)
      values ($1, $2, $3, $4, now(), now())
      on conflict (provider, provider_user_id)
      do update set
        username = excluded.username,
        email = excluded.email,
        updated_at = now()
    `,
    [
      String(provider || "").trim().toLowerCase(),
      String(providerUserId || "").trim(),
      normalizeUsername(username),
      normalizeEmail(email) || null
    ]
  );
}

async function findAvailableUsername(baseCandidate) {
  const base = sanitizeUsernameCandidate(baseCandidate);
  if (!hasDb()) {
    return base;
  }
  const direct = await getUserRow(base);
  if (!direct) {
    return base;
  }
  for (let i = 1; i <= 9999; i += 1) {
    const candidate = (base + i).slice(0, 24);
    const exists = await getUserRow(candidate);
    if (!exists) {
      return candidate;
    }
  }
  return "user" + Math.floor(Date.now() / 1000);
}

async function createOauthUser(email, displayName) {
  const normalizedEmail = normalizeEmail(email);
  const localPart = normalizedEmail ? normalizedEmail.split("@")[0] : "";
  const usernameCandidate = localPart || sanitizeUsernameCandidate(displayName || "user");
  const username = await findAvailableUsername(usernameCandidate);
  const salt = createSalt();
  const passwordHash = hashPassword(createSessionToken(), salt);
  const permissions = sanitizeUserPermissions({}, "user");
  const profile = sanitizeProfile(
    {
      alias: trimAlias(String(displayName || "").trim()),
      useAlias: false
    },
    username
  );
  await dbQuery(
    `
      insert into studio_users (
        username, password_salt, password_hash, role, failed_attempts, locked_until,
        email, phone_e164, twofa_enabled, twofa_enforced, captcha_verified_at, permissions, profile, created_at, updated_at
      )
      values ($1,$2,$3,'user',0,null,$4,null,false,false,now(),$5::jsonb,$6::jsonb,now(),now())
    `,
    [username, salt, passwordHash, normalizedEmail || null, JSON.stringify(permissions), JSON.stringify(profile)]
  );
  return username;
}

async function resolveOrCreateOauthUser(provider, providerUserId, email, displayName) {
  const existingIdentity = await getOAuthIdentity(provider, providerUserId);
  if (existingIdentity && existingIdentity.username) {
    return normalizeUsername(existingIdentity.username);
  }
  let username = await getUserByEmail(email);
  if (!username) {
    const totalUsers = await countPrimaryUsersDb();
    if (totalUsers >= AUTH_MAX_PRIMARY_USERS) {
      throw createAppError("USER_LIMIT_REACHED", "Max user count is used.");
    }
    username = await createOauthUser(email, displayName);
  }
  await upsertOAuthIdentity(provider, providerUserId, username, email);
  return normalizeUsername(username);
}

async function startTwilioVerifySms(phoneE164) {
  if (!hasTwilioVerifyConfig()) {
    throw new Error("Twilio Verify is not configured.");
  }
  const auth = Buffer.from(TWILIO_ACCOUNT_SID + ":" + TWILIO_AUTH_TOKEN).toString("base64");
  const body = new URLSearchParams();
  body.set("To", String(phoneE164 || ""));
  body.set("Channel", "sms");
  const response = await fetch(
    "https://verify.twilio.com/v2/Services/" + encodeURIComponent(TWILIO_VERIFY_SERVICE_SID) + "/Verifications",
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + auth,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body.toString()
    }
  );
  if (!response.ok) {
    if (response.status === 429) {
      throw createAppError("VERIFY_RATE_LIMITED", "Too many verification texts were requested. Please wait a few minutes and try again.");
    }
    throw new Error("Twilio Verify start failed with status " + response.status);
  }
}

async function checkTwilioVerifySms(phoneE164, code) {
  if (!hasTwilioVerifyConfig()) {
    throw new Error("Twilio Verify is not configured.");
  }
  const auth = Buffer.from(TWILIO_ACCOUNT_SID + ":" + TWILIO_AUTH_TOKEN).toString("base64");
  const body = new URLSearchParams();
  body.set("To", String(phoneE164 || ""));
  body.set("Code", String(code || ""));
  const response = await fetch(
    "https://verify.twilio.com/v2/Services/" + encodeURIComponent(TWILIO_VERIFY_SERVICE_SID) + "/VerificationCheck",
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + auth,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body.toString()
    }
  );
  if (!response.ok) {
    throw new Error("Twilio Verify check failed with status " + response.status);
  }
  const payload = await response.json();
  return payload && String(payload.status || "").toLowerCase() === "approved";
}

async function fetchTwilioIceServers() {
  if (!hasTwilioConfig()) {
    return FALLBACK_ICE_SERVERS;
  }
  const now = Date.now();
  if (twilioIceCache && twilioIceCacheUntil > now) {
    return twilioIceCache;
  }
  const auth = Buffer.from(TWILIO_ACCOUNT_SID + ":" + TWILIO_AUTH_TOKEN).toString("base64");
  const response = await fetch(
    "https://api.twilio.com/2010-04-01/Accounts/" +
      encodeURIComponent(TWILIO_ACCOUNT_SID) +
      "/Tokens.json",
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + auth,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "Ttl=" + encodeURIComponent(String(TWILIO_TOKEN_TTL_SECONDS))
    }
  );
  if (!response.ok) {
    throw new Error("Twilio token request failed with status " + response.status);
  }
  const payload = await response.json();
  const servers = normalizeIceServers(payload && payload.ice_servers);
  const ttl = Math.max(60, Math.min(TWILIO_TOKEN_TTL_SECONDS, 3600));
  twilioIceCache = servers;
  twilioIceCacheUntil = now + (ttl - 30) * 1000;
  return servers;
}

function getMessageById(messageId) {
  return chatMessages.find((item) => item.id === messageId);
}

async function insertChatMessageDb(message) {
  if (!hasDb()) {
    return null;
  }
  const result = await dbQuery(
    `
      insert into chat_messages (
        kind, username, display_name, text, attachment, reply_to, edited_at, deleted, created_at
      )
      values ($1,$2,$3,$4,$5::jsonb,$6::jsonb,$7,$8,to_timestamp($9 / 1000.0))
      returning id, (extract(epoch from created_at) * 1000)::bigint as timestamp
    `,
    [
      String(message.kind || "chat"),
      String(message.username || "").trim().toLowerCase(),
      String(message.displayName || message.username || "").trim(),
      String(message.text || ""),
      message.attachment ? JSON.stringify(message.attachment) : null,
      message.replyTo ? JSON.stringify(message.replyTo) : null,
      Number(message.editedAt || 0),
      !!message.deleted,
      Number(message.timestamp || Date.now())
    ]
  );
  if (!result || !result.rows || !result.rows.length) {
    return null;
  }
  return {
    id: Number(result.rows[0].id || 0),
    timestamp: Number(result.rows[0].timestamp || message.timestamp || Date.now())
  };
}

async function upsertSeenDb(username, seenUpTo) {
  if (!hasDb()) {
    return;
  }
  await dbQuery(
    `
      insert into chat_seen (username, seen_up_to, updated_at)
      values ($1, $2, now())
      on conflict (username)
      do update set
        seen_up_to = greatest(chat_seen.seen_up_to, excluded.seen_up_to),
        updated_at = now()
    `,
    [String(username || "").trim().toLowerCase(), Number(seenUpTo || 0)]
  );
}

async function getUserRow(username) {
  if (!hasDb()) {
    return null;
  }
  const normalized = normalizeUsername(username);
  if (!normalized) {
    return null;
  }
  const result = await dbQuery(
    `
      select
        username,
        password_salt,
        password_hash,
        role,
        guest_account,
      guest_enabled,
      failed_attempts,
      (extract(epoch from locked_until) * 1000)::bigint as locked_until_ms,
      (extract(epoch from captcha_verified_at) * 1000)::bigint as captcha_verified_at_ms,
      phone_e164,
      twofa_enabled,
      twofa_enforced,
      permissions,
      profile,
      created_at,
      updated_at
      from studio_users
      where username = $1
      limit 1
    `,
    [normalized]
  );
  if (!result || !result.rows || !result.rows.length) {
    return null;
  }
  return result.rows[0];
}

async function countUsersDb() {
  if (!hasDb()) {
    return 0;
  }
  const result = await dbQuery("select count(*)::int as total from studio_users", []);
  return Number(result && result.rows && result.rows[0] ? result.rows[0].total : 0);
}

async function countPrimaryUsersDb() {
  if (!hasDb()) {
    return 0;
  }
  const result = await dbQuery(
    "select count(*)::int as total from studio_users where guest_account = false",
    []
  );
  return Number(result && result.rows && result.rows[0] ? result.rows[0].total : 0);
}

async function createUserDb(username, password, phoneRaw) {
  const normalized = normalizeUsername(username);
  const plainPassword = String(password || "");
  const phoneE164 = normalizePhoneE164(phoneRaw || "");
  if (!normalized || !plainPassword) {
    return { ok: false, error: "Username and password are required." };
  }
  if (normalized === normalizeUsername(GUEST_USERNAME)) {
    return { ok: false, error: "This username is reserved." };
  }
  if (!phoneE164) {
    return { ok: false, error: "A valid mobile number is required for SMS verification." };
  }
  if (plainPassword.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters." };
  }
  const existing = await getUserRow(normalized);
  if (existing) {
    return { ok: false, error: "User already exists." };
  }
  const totalUsers = await countPrimaryUsersDb();
  if (totalUsers >= AUTH_MAX_PRIMARY_USERS) {
    return buildUserLimitResult();
  }
  const role = normalized === DEFAULT_ADMIN_USERNAME || totalUsers === 0 ? "admin" : "user";
  const salt = createSalt();
  const passwordHash = hashPassword(plainPassword, salt);
  const permissions = sanitizeUserPermissions({}, role);
  const profile = sanitizeProfile({}, normalized);
  await dbQuery(
    `
      insert into studio_users (
        username, password_salt, password_hash, role, failed_attempts, locked_until,
        phone_e164, twofa_enabled, twofa_enforced, permissions, profile, created_at, updated_at
      )
      values ($1,$2,$3,$4,0,null,$5,true,true,$6::jsonb,$7::jsonb,now(),now())
    `,
    [normalized, salt, passwordHash, role, phoneE164, JSON.stringify(permissions), JSON.stringify(profile)]
  );
  return { ok: true, username: normalized, role, profile, permissions, phoneHint: maskPhoneE164(phoneE164) };
}

async function setUserFailedAttempt(username, failedAttempts, lockUntilMs) {
  await dbQuery(
    `
      update studio_users
      set
        failed_attempts = $2,
        locked_until = case when $3::bigint > 0 then to_timestamp($3 / 1000.0) else null end,
        updated_at = now()
      where username = $1
    `,
    [normalizeUsername(username), Number(failedAttempts || 0), Number(lockUntilMs || 0)]
  );
}

async function setUserCaptchaVerifiedNow(username) {
  await dbQuery("update studio_users set captcha_verified_at = now(), updated_at = now() where username = $1", [
    normalizeUsername(username)
  ]);
}

async function createSessionForUser(username, remember) {
  const normalized = normalizeUsername(username);
  const user = await getUserRow(normalized);
  const isGuestUser =
    !!(user && user.guest_account) || normalizeRole(user && user.role) === "guest" || normalized === normalizeUsername(GUEST_USERNAME);
  const token = createSessionToken();
  const tokenHash = hashSessionToken(token);
  const settings = getAdminSettings();
  const durationHours = isGuestUser
    ? Math.max(20, Number(settings.guestMaxSessionMinutes || 120)) / 60
    : (remember ? AUTH_REMEMBER_HOURS : AUTH_SESSION_HOURS);
  await dbQuery(
    `
      insert into studio_sessions (token_hash, username, expires_at, created_at, last_seen_at)
      values ($1, $2, now() + ($3 || ' hours')::interval, now(), now())
    `,
    [tokenHash, normalized, String(durationHours)]
  );
  return token;
}

async function ensureGuestUserWithPassword(password) {
  const normalizedGuest = normalizeUsername(GUEST_USERNAME);
  const salt = createSalt();
  const passwordHash = hashPassword(String(password || ""), salt);
  const settings = getAdminSettings();
  const permissions = sanitizeUserPermissions({}, "guest");
  const profile = sanitizeProfile({ alias: settings.guestDisplayName || "Guest", useAlias: true }, normalizedGuest);
  await dbQuery(
    `
      insert into studio_users (
        username, password_salt, password_hash, role, failed_attempts, locked_until,
        email, phone_e164, guest_account, guest_enabled, twofa_enabled, twofa_enforced, captcha_verified_at, permissions, profile, created_at, updated_at
      )
      values ($1,$2,$3,'guest',0,null,null,null,true,false,false,false,now(),$4::jsonb,$5::jsonb,now(),now())
      on conflict (username)
      do update set
        password_salt = excluded.password_salt,
        password_hash = excluded.password_hash,
        role = 'guest',
        guest_account = true,
        guest_enabled = studio_users.guest_enabled,
        twofa_enabled = false,
        twofa_enforced = false,
        failed_attempts = 0,
        locked_until = null,
        permissions = excluded.permissions,
        profile = excluded.profile,
        updated_at = now()
    `,
    [normalizedGuest, salt, passwordHash, JSON.stringify(permissions), JSON.stringify(profile)]
  );
  await dbQuery("delete from studio_sessions where username = $1", [normalizedGuest]);
}

async function revokeActiveGuestInvites() {
  await dbQuery(
    `
      update studio_guest_invites
      set revoked_at = now()
      where username = $1
        and consumed_at is null
        and revoked_at is null
        and expires_at > now()
    `,
    [normalizeUsername(GUEST_USERNAME)]
  );
}

async function createGuestInvite(createdBy) {
  const settings = getAdminSettings();
  const password = createStrongGuestPassword(GUEST_PASSWORD_LENGTH);
  const rawToken = createSessionToken();
  const tokenHash = hashSessionToken(rawToken);
  await ensureGuestUserWithPassword(password);
  await revokeActiveGuestInvites();
  await dbQuery(
    `
      insert into studio_guest_invites (token_hash, username, expires_at, consumed_at, revoked_at, created_by, created_at)
      values ($1, $2, now() + ($3 || ' minutes')::interval, null, null, $4, now())
    `,
    [
      tokenHash,
      normalizeUsername(GUEST_USERNAME),
      String(settings.guestInviteExpiryMinutes || GUEST_INVITE_EXPIRES_MINUTES),
      normalizeUsername(createdBy || "")
    ]
  );
  const base = String(FRONTEND_BASE_URL || "").replace(/\/+$/, "");
  const inviteUrl =
    (base || "http://localhost:8080") +
    "/index.html?guest=1&u=" +
    encodeURIComponent(normalizeUsername(GUEST_USERNAME)) +
    "&p=" +
    encodeURIComponent(password) +
    "&t=" +
    encodeURIComponent(rawToken);
  return {
    ok: true,
    username: normalizeUsername(GUEST_USERNAME),
    password,
    token: rawToken,
    expiresMinutes: settings.guestInviteExpiryMinutes || GUEST_INVITE_EXPIRES_MINUTES,
    inviteUrl
  };
}

async function getValidGuestInvite(rawToken, username) {
  const token = String(rawToken || "").trim();
  if (!token) {
    return null;
  }
  const tokenHash = hashSessionToken(token);
  const normalizedUser = normalizeUsername(username || "");
  const result = await dbQuery(
    `
      select token_hash, username, expires_at, consumed_at, revoked_at
      from studio_guest_invites
      where token_hash = $1
      limit 1
    `,
    [tokenHash]
  );
  const row = result && result.rows && result.rows[0] ? result.rows[0] : null;
  if (!row) {
    return null;
  }
  const rowUser = normalizeUsername(row.username || "");
  if (!rowUser || rowUser !== normalizedUser) {
    return null;
  }
  if (row.consumed_at || row.revoked_at) {
    return null;
  }
  const expMs = new Date(row.expires_at).getTime();
  if (!Number.isFinite(expMs) || expMs <= Date.now()) {
    return null;
  }
  return { tokenHash, username: rowUser };
}

async function consumeGuestInvite(rawToken) {
  const tokenHash = hashSessionToken(String(rawToken || ""));
  await dbQuery("update studio_guest_invites set consumed_at = now() where token_hash = $1", [tokenHash]);
}

async function disableGuestUser() {
  const guest = normalizeUsername(GUEST_USERNAME);
  await dbQuery(
    `
      update studio_users
      set guest_account = true, role = 'guest', guest_enabled = false, failed_attempts = 0, locked_until = null, updated_at = now()
      where username = $1
    `,
    [guest]
  );
  await dbQuery("delete from studio_sessions where username = $1", [guest]);
  cleanupPresenceForDeletedUser(guest);
}

async function enableGuestUser() {
  const guest = normalizeUsername(GUEST_USERNAME);
  await dbQuery(
    `
      update studio_users
      set guest_account = true, role = 'guest', guest_enabled = true, failed_attempts = 0, locked_until = null, updated_at = now()
      where username = $1
    `,
    [guest]
  );
}

async function revokeSessionByToken(token) {
  const hash = hashSessionToken(token);
  await dbQuery("delete from studio_sessions where token_hash = $1", [hash]);
}

async function createLoginChallenge(username, remember) {
  const normalized = normalizeUsername(username);
  const token = createSessionToken();
  const tokenHash = hashSessionToken(token);
  await dbQuery("delete from studio_login_challenges where username = $1", [normalized]);
  await dbQuery(
    `
      insert into studio_login_challenges (token_hash, username, remember, twofa_phone_e164, expires_at, created_at)
      values ($1, $2, $3, null, now() + ($4 || ' minutes')::interval, now())
    `,
    [tokenHash, normalized, !!remember, String(AUTH_TWO_FA_CHALLENGE_MINUTES)]
  );
  return token;
}

async function getLoginChallenge(token) {
  if (!hasDb()) {
    return null;
  }
  const hash = hashSessionToken(token);
  const result = await dbQuery(
    `
      select token_hash, username, remember, twofa_phone_e164, expires_at
      from studio_login_challenges
      where token_hash = $1
      limit 1
    `,
    [hash]
  );
  if (!result || !result.rows || !result.rows.length) {
    return null;
  }
  const row = result.rows[0];
  const expiresAt = new Date(row.expires_at).getTime();
  if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    await dbQuery("delete from studio_login_challenges where token_hash = $1", [hash]);
    return null;
  }
  return {
    tokenHash: String(row.token_hash || ""),
    username: normalizeUsername(row.username),
    remember: !!row.remember,
    twofaPhoneE164: normalizePhoneE164(row.twofa_phone_e164 || "")
  };
}

async function consumeLoginChallenge(token) {
  const hash = hashSessionToken(token);
  await dbQuery("delete from studio_login_challenges where token_hash = $1", [hash]);
}

async function setLoginChallengePhone(token, phoneE164) {
  const hash = hashSessionToken(token);
  await dbQuery("update studio_login_challenges set twofa_phone_e164 = $2 where token_hash = $1", [
    hash,
    normalizePhoneE164(phoneE164 || "")
  ]);
}

async function createPasswordResetChallenge(userRow) {
  const token = createSessionToken();
  const tokenHash = hashSessionToken(token);
  const username = normalizeUsername(userRow && userRow.username ? userRow.username : "");
  const phoneE164 = normalizePhoneE164(userRow && userRow.phone_e164 ? userRow.phone_e164 : "");
  if (username) {
    await dbQuery("delete from studio_password_reset_challenges where username = $1", [username]);
  }
  await dbQuery(
    `
      insert into studio_password_reset_challenges (token_hash, username, phone_e164, verified_at, expires_at, created_at)
      values ($1, $2, $3, null, now() + interval '10 minutes', now())
    `,
    [tokenHash, username || null, phoneE164 || null]
  );
  return token;
}

async function getPasswordResetChallenge(token) {
  if (!hasDb()) {
    return null;
  }
  const hash = hashSessionToken(token);
  const result = await dbQuery(
    `
      select token_hash, username, phone_e164, verified_at, expires_at
      from studio_password_reset_challenges
      where token_hash = $1
      limit 1
    `,
    [hash]
  );
  const row = result && result.rows && result.rows[0] ? result.rows[0] : null;
  if (!row) {
    return null;
  }
  const expiresAt = new Date(row.expires_at).getTime();
  if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    await dbQuery("delete from studio_password_reset_challenges where token_hash = $1", [hash]);
    return null;
  }
  return {
    tokenHash: String(row.token_hash || ""),
    username: normalizeUsername(row.username || ""),
    phoneE164: normalizePhoneE164(row.phone_e164 || ""),
    verifiedAt: row.verified_at ? new Date(row.verified_at).toISOString() : "",
    expiresAt: new Date(row.expires_at).toISOString()
  };
}

async function markPasswordResetChallengeVerified(token) {
  const hash = hashSessionToken(token);
  await dbQuery("update studio_password_reset_challenges set verified_at = now() where token_hash = $1", [hash]);
}

async function consumePasswordResetChallenge(token) {
  const hash = hashSessionToken(token);
  await dbQuery("delete from studio_password_reset_challenges where token_hash = $1", [hash]);
}

async function saveUserTwoFaEnrollment(username, phoneE164) {
  await dbQuery(
    `
      update studio_users
      set
        phone_e164 = $2,
        twofa_enabled = true,
        twofa_enforced = true,
        updated_at = now()
      where username = $1
    `,
    [normalizeUsername(username), normalizePhoneE164(phoneE164 || "")]
  );
}

async function markUserLoggedIn(username) {
  if (!hasDb()) {
    return;
  }
  await dbQuery("update studio_users set last_login_at = now(), updated_at = now() where username = $1", [
    normalizeUsername(username)
  ]);
}

async function safeFinalizeLogin(username, details) {
  try {
    await markUserLoggedIn(username);
  } catch (error) {
    process.stderr.write(
      "[auth/login] Non-fatal last_login update failed for " +
        normalizeUsername(username) +
        ": " +
        String(error && error.message ? error.message : error) +
        "\n"
    );
  }
  try {
    await writeAuditLog("auth.login", username, username, details);
  } catch (error) {
    process.stderr.write(
      "[auth/login] Non-fatal audit log write failed for " +
        normalizeUsername(username) +
        ": " +
        String(error && error.message ? error.message : error) +
        "\n"
    );
  }
}

async function getSessionUserByToken(token) {
  if (!hasDb()) {
    return null;
  }
  const hash = hashSessionToken(token);
  const result = await dbQuery(
    `
      select
        u.username,
        u.role,
        u.guest_account,
        u.guest_enabled,
        u.permissions,
        u.profile,
        u.created_at,
        s.expires_at
      from studio_sessions s
      join studio_users u on u.username = s.username
      where s.token_hash = $1
      limit 1
    `,
    [hash]
  );
  if (!result || !result.rows || !result.rows.length) {
    return null;
  }
  const row = result.rows[0];
  const expiresAt = new Date(row.expires_at).getTime();
  if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    await dbQuery("delete from studio_sessions where token_hash = $1", [hash]);
    return null;
  }
  await dbQuery("update studio_sessions set last_seen_at = now() where token_hash = $1", [hash]);
  const username = normalizeUsername(row.username);
  const isGuestUser =
    !!row.guest_account || normalizeRole(row.role) === "guest" || username === normalizeUsername(GUEST_USERNAME);
  return {
    username,
    role: isGuestUser ? "guest" : normalizeRole(row.role),
    guest: isGuestUser,
    permissions: sanitizeUserPermissions(row.permissions, isGuestUser ? "guest" : normalizeRole(row.role)),
    profile: sanitizeProfile(row.profile, username),
    createdAt: row.created_at
  };
}

async function listUsersForAdminDb(options) {
  const guestOnly = !!(options && options.guestOnly);
  const result = await dbQuery(
    `
      select
        username,
        role,
        guest_account,
        guest_enabled,
        permissions,
        profile,
        created_at,
        last_login_at
      from studio_users
      ${guestOnly ? "where guest_account = true or role = 'guest' or username = $1" : ""}
      order by username asc
    `,
    guestOnly ? [normalizeUsername(GUEST_USERNAME)] : []
  );
  const rows = Array.isArray(result && result.rows) ? result.rows : [];
  return rows.map((row) => {
    const username = normalizeUsername(row.username);
    const profile = sanitizeProfile(row.profile, username);
    const isGuestUser =
      !!row.guest_account || normalizeRole(row.role) === "guest" || username === normalizeUsername(GUEST_USERNAME);
    return {
      username,
      role: isGuestUser ? "guest" : normalizeRole(row.role),
      guest: isGuestUser,
      guestEnabled: !!row.guest_enabled,
      permissions: sanitizeUserPermissions(row.permissions, isGuestUser ? "guest" : normalizeRole(row.role)),
      alias: profile.alias,
      useAlias: !!profile.useAlias,
      createdAt: row.created_at,
      lastLoginAt: row.last_login_at
    };
  });
}

async function updateUserRoleDb(targetUsername, nextRole) {
  const normalizedTarget = normalizeUsername(targetUsername);
  const role = normalizeRole(nextRole);
  if (!normalizedTarget) {
    return { ok: false, error: "Target username required." };
  }
  const target = await getUserRow(normalizedTarget);
  if (!target) {
    return { ok: false, error: "User not found." };
  }
  if (!!target.guest_account) {
    return { ok: false, error: "Guest role is managed by invite flow." };
  }
  if (role === "guest") {
    return { ok: false, error: "Role must be admin or user." };
  }
  if (normalizeRole(target.role) === "admin" && role === "user") {
    const count = await dbQuery("select count(*)::int as total from studio_users where role = 'admin'", []);
    const totalAdmins = Number(count && count.rows && count.rows[0] ? count.rows[0].total : 0);
    if (totalAdmins <= 1) {
      return { ok: false, error: "At least one admin is required." };
    }
  }
  const nextPermissions = sanitizeUserPermissions(target.permissions, role);
  await dbQuery("update studio_users set role = $2, permissions = $3::jsonb, updated_at = now() where username = $1", [
    normalizedTarget,
    role,
    JSON.stringify(nextPermissions)
  ]);
  return { ok: true, username: normalizedTarget, role };
}

async function updateUserPermissionsDb(targetUsername, nextPermissions) {
  const normalizedTarget = normalizeUsername(targetUsername);
  if (!normalizedTarget) {
    return { ok: false, error: "Target username required." };
  }
  const target = await getUserRow(normalizedTarget);
  if (!target) {
    return { ok: false, error: "User not found." };
  }
  const targetRole =
    !!target.guest_account || normalizeRole(target.role) === "guest" || normalizedTarget === normalizeUsername(GUEST_USERNAME)
      ? "guest"
      : normalizeRole(target.role);
  const permissions = sanitizeUserPermissions(nextPermissions, targetRole);
  if (targetRole === "admin") {
    permissions.chatModeration = true;
    permissions.guestManagement = true;
    permissions.siteSettings = true;
  }
  await dbQuery("update studio_users set permissions = $2::jsonb, updated_at = now() where username = $1", [
    normalizedTarget,
    JSON.stringify(permissions)
  ]);
  return { ok: true, username: normalizedTarget, permissions };
}

async function resetUserPasswordDb(targetUsername, nextPassword) {
  const normalizedTarget = normalizeUsername(targetUsername);
  const password = String(nextPassword || "");
  if (!normalizedTarget) {
    return { ok: false, error: "Target username required." };
  }
  if (!password || password.length < 8) {
    return { ok: false, error: "New password must be at least 8 characters." };
  }
  const user = await getUserRow(normalizedTarget);
  if (!user) {
    return { ok: false, error: "User not found." };
  }
  if (!!user.guest_account) {
    return { ok: false, error: "Use Invite Guest to rotate the guest password." };
  }
  if (!!user.guest_account) {
    return { ok: false, error: "Use disable guest for guest access." };
  }
  const salt = createSalt();
  const hash = hashPassword(password, salt);
  await dbQuery(
    `
      update studio_users
      set
        password_salt = $2,
        password_hash = $3,
        failed_attempts = 0,
        locked_until = null,
        updated_at = now()
      where username = $1
    `,
    [normalizedTarget, salt, hash]
  );
  await dbQuery("delete from studio_sessions where username = $1", [normalizedTarget]);
  return { ok: true, username: normalizedTarget };
}

function cleanupPresenceForDeletedUser(username) {
  const normalized = normalizeUsername(username);
  if (!normalized) {
    return;
  }
  const removedSessionIds = [];
  for (const [sid, row] of presence.entries()) {
    if (row && row.username === normalized) {
      removedSessionIds.push(sid);
    }
  }
  removedSessionIds.forEach((sid) => {
    presence.delete(sid);
  });
  typingState.delete(normalized);
  onlineUsers.delete(normalized);
  if (hostUsername === normalized) {
    hostUsername = "";
    hostUpdatedAt = Date.now();
  }
}

async function deleteUserDb(targetUsername) {
  const normalizedTarget = normalizeUsername(targetUsername);
  if (!normalizedTarget) {
    return { ok: false, error: "Target username required." };
  }
  const user = await getUserRow(normalizedTarget);
  if (!user) {
    return { ok: false, error: "User not found." };
  }
  if (normalizeRole(user.role) === "admin") {
    const count = await dbQuery("select count(*)::int as total from studio_users where role = 'admin'", []);
    const totalAdmins = Number(count && count.rows && count.rows[0] ? count.rows[0].total : 0);
    if (totalAdmins <= 1) {
      return { ok: false, error: "At least one admin is required." };
    }
  }
  await dbQuery("delete from studio_users where username = $1", [normalizedTarget]);
  cleanupPresenceForDeletedUser(normalizedTarget);
  return { ok: true, username: normalizedTarget };
}

function pushChatEvent(type, payload) {
  const event = {
    id: ++chatEventSeq,
    type,
    payload,
    timestamp: Date.now()
  };
  chatEvents.push(event);
  if (chatEvents.length > MAX_CHAT_EVENTS) {
    chatEvents.splice(0, chatEvents.length - MAX_CHAT_EVENTS);
  }
  broadcastSseEvent(event);
  return event;
}

function writeSseFrame(res, eventName, payload) {
  const body = typeof payload === "string" ? payload : JSON.stringify(payload || {});
  if (eventName) {
    res.write("event: " + eventName + "\n");
  }
  res.write("data: " + body + "\n\n");
}

function broadcastSseEvent(event) {
  if (!event || !sseClients.size) {
    return;
  }
  const payload = {
    event,
    typingUsers: getTypingUsers()
  };
  for (const [id, client] of sseClients.entries()) {
    try {
      writeSseFrame(client.res, "chat", payload);
      client.lastSentAt = Date.now();
    } catch (error) {
      sseClients.delete(id);
      try {
        client.res.end();
      } catch (endError) {
        // Ignore close races.
      }
    }
  }
}

function registerSseClient(req, res, since) {
  const safeSince = Number(since || 0);
  const clientId = ++sseClientSeq;
  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  });
  res.write(": connected\n\n");
  const initialEvents = chatEvents.filter((item) => item.id > safeSince);
  writeSseFrame(res, "init", {
    events: initialEvents,
    typingUsers: getTypingUsers(),
    lastEventId: chatEventSeq
  });
  sseClients.set(clientId, {
    id: clientId,
    res,
    lastSentAt: Date.now()
  });
  const cleanup = () => {
    sseClients.delete(clientId);
  };
  req.on("close", cleanup);
  req.on("aborted", cleanup);
}

function pushSystemChatMessage(text) {
  const message = {
    id: ++messageSeq,
    kind: "system",
    username: "system",
    displayName: "System",
    text: String(text || "").trim(),
    timestamp: Date.now(),
    reactions: {},
    attachment: null,
    replyTo: null,
    editedAt: 0,
    deleted: false,
    seenBy: {}
  };
  chatMessages.push(message);
  if (chatMessages.length > MAX_CHAT_MESSAGES) {
    chatMessages.splice(0, chatMessages.length - MAX_CHAT_MESSAGES);
  }
  pushChatEvent("message", { message });
  if (hasDb()) {
    insertChatMessageDb(message)
      .then((saved) => {
        if (!saved || !saved.id) {
          return;
        }
        message.id = saved.id;
        message.timestamp = saved.timestamp;
        messageSeq = Math.max(messageSeq, message.id);
      })
      .catch((error) => {
        process.stderr.write("[realtime] failed to persist system message: " + String(error && error.message) + "\n");
      });
  }
}

function hasActivePresenceForUser(username) {
  const normalized = String(username || "").trim().toLowerCase();
  if (!normalized) {
    return false;
  }
  for (const row of presence.values()) {
    if (row && row.username === normalized) {
      return true;
    }
  }
  return false;
}

function markUserOnline(username, displayNameHint) {
  const normalized = String(username || "").trim().toLowerCase();
  if (!normalized) {
    return;
  }
  const label = String(displayNameHint || normalized).trim() || normalized;
  if (!onlineUsers.has(normalized)) {
    pushSystemChatMessage(label + " logged in.");
  }
  onlineUsers.set(normalized, label);
}

function json(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  });
  res.end(JSON.stringify(payload));
}

function finalizeUserOffline(username, displayNameHint) {
  const normalized = String(username || "").trim().toLowerCase();
  if (!normalized) {
    return;
  }
  if (hasActivePresenceForUser(normalized)) {
    return;
  }
  typingState.delete(normalized);
  if (onlineUsers.has(normalized)) {
    const label = String(displayNameHint || onlineUsers.get(normalized) || normalized).trim() || normalized;
    onlineUsers.delete(normalized);
    pushSystemChatMessage(label + " logged off.");
  }
}

function cleanupPresence() {
  const cutoff = Date.now() - PRESENCE_TTL_MS;
  const removedByUser = new Map();
  for (const [sessionId, row] of presence.entries()) {
    if (!row || row.lastSeenAt < cutoff) {
      if (row && row.username) {
        const username = String(row.username || "").trim().toLowerCase();
        const label = String(row.displayName || row.username || username).trim();
        if (username && !removedByUser.has(username)) {
          removedByUser.set(username, label || username);
        }
      }
      presence.delete(sessionId);
    }
  }
  for (const [username, label] of removedByUser.entries()) {
    finalizeUserOffline(username, label);
  }
}

function listActiveUsernames() {
  cleanupPresence();
  const users = new Set();
  for (const item of presence.values()) {
    users.add(item.username);
  }
  return users;
}

function getPresenceAggregate() {
  cleanupPresence();
  const aggregate = new Map();
  for (const item of presence.values()) {
    if (!aggregate.has(item.username)) {
      aggregate.set(item.username, {
        username: item.username,
        displayName: item.displayName || item.username,
        onAir: Boolean(item.onAir),
        lastSeenAt: item.lastSeenAt
      });
    } else {
      const row = aggregate.get(item.username);
      row.displayName = item.displayName || row.displayName || item.username;
      row.onAir = row.onAir || Boolean(item.onAir);
      row.lastSeenAt = Math.max(row.lastSeenAt, item.lastSeenAt);
      aggregate.set(item.username, row);
    }
  }
  return aggregate;
}

function clearHostIfOffline() {
  if (!hostUsername) {
    return;
  }
  const aggregate = getPresenceAggregate();
  const hostRow = aggregate.get(hostUsername);
  if (!hostRow || !hostRow.onAir) {
    hostUsername = "";
    hostUpdatedAt = Date.now();
  }
}

function clearExpiredTyping() {
  const cutoff = Date.now() - TYPING_TTL_MS;
  for (const [username, row] of typingState.entries()) {
    if (!row || row.lastTypedAt < cutoff) {
      typingState.delete(username);
    }
  }
}

function getTypingUsers() {
  clearExpiredTyping();
  return Array.from(typingState.values()).map((row) => ({
    username: row.username,
    displayName: row.displayName || row.username,
    lastTypedAt: row.lastTypedAt
  }));
}

setInterval(() => {
  if (!sseClients.size) {
    return;
  }
  const now = Date.now();
  for (const [id, client] of sseClients.entries()) {
    try {
      if (now - Number(client.lastSentAt || 0) >= SSE_KEEPALIVE_MS) {
        client.res.write(": ping\n\n");
        client.lastSentAt = now;
      }
    } catch (error) {
      sseClients.delete(id);
      try {
        client.res.end();
      } catch (endError) {
        // Ignore close races.
      }
    }
  }
}, 5000);

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > MAX_BODY_BYTES) {
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function parseRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let totalBytes = 0;
    req.on("data", (chunk) => {
      const bufferChunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      totalBytes += bufferChunk.length;
      if (totalBytes > MAX_BODY_BYTES) {
        reject(new Error("Body too large"));
        try {
          req.destroy();
        } catch (error) {
          // Ignore destroy races.
        }
        return;
      }
      chunks.push(bufferChunk);
    });
    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    req.on("error", reject);
  });
}

async function requireAuth(req, res, adminOnly) {
  if (!hasDb()) {
    json(res, 503, { ok: false, error: "Auth database unavailable." });
    return null;
  }
  const token = parseAuthBearer(req);
  if (!token) {
    json(res, 401, { ok: false, error: "Missing auth token." });
    return null;
  }
  const authUser = await getSessionUserByToken(token);
  if (!authUser) {
    json(res, 401, { ok: false, error: "Invalid or expired session." });
    return null;
  }
  if (adminOnly && authUser.role !== "admin") {
    json(res, 403, { ok: false, error: "Admin access required." });
    return null;
  }
  return authUser;
}

function hasUserPermission(authUser, permissionKey) {
  if (!authUser) {
    return false;
  }
  if (normalizeRole(authUser.role) === "admin") {
    return true;
  }
  const permissions = authUser.permissions && typeof authUser.permissions === "object" ? authUser.permissions : {};
  return !!permissions[permissionKey];
}

function markStudioControlAction(actionType, actorUsername) {
  const key = String(actionType || "").trim();
  if (!key || !Object.prototype.hasOwnProperty.call(studioControlState, key + "Version")) {
    return;
  }
  studioControlState[key + "Version"] += 1;
  studioControlState.lastActionAt = Date.now();
  studioControlState.lastActionBy = normalizeUsername(actorUsername || "");
  studioControlState.lastActionType = key;
}

function canAccessAdminSettings(authUser) {
  return (
    hasUserPermission(authUser, "siteSettings") ||
    hasUserPermission(authUser, "chatModeration") ||
    hasUserPermission(authUser, "guestManagement")
  );
}

function canAccessSiteSettings(authUser) {
  return hasUserPermission(authUser, "siteSettings");
}

function canAccessChatModeration(authUser) {
  return hasUserPermission(authUser, "chatModeration");
}

function isVerifyRateLimitedError(error) {
  return String(error && error.code ? error.code : "") === "VERIFY_RATE_LIMITED";
}

function mergeAuthorizedAdminSettings(currentSettings, proposedSettings, authUser) {
  const current = sanitizeAdminSettings(currentSettings || getAdminSettings());
  const proposed = proposedSettings && typeof proposedSettings === "object" ? proposedSettings : {};
  if (normalizeRole(authUser && authUser.role) === "admin") {
    return sanitizeAdminSettings(proposed);
  }
  const next = { ...current };
  if (hasUserPermission(authUser, "guestManagement")) {
    ["guestInviteExpiryMinutes", "guestMaxSessionMinutes", "guestDisplayName"].forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(proposed, key)) {
        next[key] = proposed[key];
      }
    });
  }
  if (canAccessSiteSettings(authUser)) {
    [
      "allowUserHostControl",
      "allowUserRecordingControl",
      "recordingMaxMinutes",
      "recordingRetentionDays",
      "recordingDownloadAccess",
      "recordingLibraryVisibility",
      "forceTwoFaAllUsers",
      "captchaReverifyDays",
      "googleLoginEnabled",
      "facebookLoginEnabled",
      "maintenanceModeEnabled",
      "maintenanceMessage",
      "supportContactEmail"
    ].forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(proposed, key)) {
        next[key] = proposed[key];
      }
    });
  }
  if (canAccessChatModeration(authUser)) {
    [
      "chatAttachmentsEnabled",
      "chatVideoAttachmentsEnabled",
      "chatImageMaxMb",
      "chatVideoMaxMb",
      "chatReactionsEnabled"
    ].forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(proposed, key)) {
        next[key] = proposed[key];
      }
    });
  }
  return sanitizeAdminSettings(next);
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    json(res, 400, { ok: false, error: "Missing URL" });
    return;
  }

  if (req.method === "OPTIONS") {
    json(res, 204, {});
    return;
  }

  const url = new URL(req.url, "http://localhost");
  const { pathname } = url;

  try {
    if (req.method === "GET" && pathname === "/health") {
      const settings = getAdminSettings();
      json(res, 200, {
        ok: true,
        service: "tbr-realtime",
        build: SERVER_BUILD,
        chatDebugRoute: true,
        dbReady: hasDb(),
        dbConfigured: isPersistentDbConfigured(),
        storageMode: hasDb() ? "db" : "memory",
        turnProvider: hasTwilioConfig() ? "twilio" : "stun-fallback",
        verifyProvider: hasTwilioVerifyConfig() ? "twilio-verify" : "unconfigured",
        videoProvider: hasTwilioVideoConfig() ? "twilio-video" : "custom-webrtc",
        mediaStorageProvider: getMediaStorageProvider(),
        captchaProvider: hasTurnstileConfig() ? "cloudflare-turnstile" : "unconfigured",
        instanceId: INSTANCE_ID,
        dbLabel: getDatabaseLabel(),
        maintenanceModeEnabled: !!settings.maintenanceModeEnabled,
        devAuthBypassEnabled: canUseDevAuthBypass()
      });
      return;
    }

    if (req.method === "POST" && pathname === "/twilio-video/token") {
      if (!hasTwilioVideoConfig()) {
        json(res, 503, { ok: false, error: "Twilio Video is not configured.", code: "VIDEO_UNAVAILABLE" });
        return;
      }
      const body = await parseBody(req);
      const username = normalizeUsername(body.username || "");
      if (!username) {
        json(res, 400, { ok: false, error: "username required", code: "INVALID_REQUEST" });
        return;
      }
      const roomName = String(body.roomName || TWILIO_VIDEO_ROOM_NAME).trim() || TWILIO_VIDEO_ROOM_NAME;
      const token = createTwilioVideoAccessToken(username, roomName);
      if (!token) {
        json(res, 503, { ok: false, error: "Twilio Video token could not be created.", code: "VIDEO_UNAVAILABLE" });
        return;
      }
      json(res, 200, {
        ok: true,
        provider: "twilio-video",
        roomName,
        identity: username,
        token,
        ttlSeconds: TWILIO_VIDEO_TOKEN_TTL_SECONDS
      });
      return;
    }

    if (req.method === "GET" && pathname === "/auth/config") {
      const settings = getAdminSettings();
      json(res, 200, {
        ok: true,
        users: {
          maxPrimaryUsers: AUTH_MAX_PRIMARY_USERS
        },
        guest: {
          username: normalizeUsername(GUEST_USERNAME),
          inviteExpiryMinutes: settings.guestInviteExpiryMinutes || GUEST_INVITE_EXPIRES_MINUTES,
          maxSessionMinutes: settings.guestMaxSessionMinutes || 120,
          displayName: settings.guestDisplayName || "Guest"
        },
        turnstile: {
          enabled: hasTurnstileConfig(),
          siteKey: TURNSTILE_SITE_KEY || "",
          reverifyDays: settings.captchaReverifyDays || AUTH_CAPTCHA_REVERIFY_DAYS,
          allowWhenUnavailable: ALLOW_LOGIN_WHEN_CAPTCHA_UNAVAILABLE
        },
        oauth: {
          googleEnabled: hasGoogleOauthConfig(),
          facebookEnabled: hasFacebookOauthConfig()
        },
        maintenance: {
          enabled: !!settings.maintenanceModeEnabled,
          message: settings.maintenanceMessage || ""
        },
        adminSettingsPublic: getPublicAdminSettings()
      });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/guest/invite") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!hasUserPermission(authUser, "guestManagement")) {
        json(res, 403, { ok: false, error: "Guest management access required." });
        return;
      }
      const invite = await createGuestInvite(authUser.username);
      await writeAuditLog("admin.guest.invite", authUser.username, invite.username, {
        expiresMinutes: invite.expiresMinutes
      });
      json(res, 200, invite);
      return;
    }

    if (req.method === "POST" && pathname === "/auth/guest/disable") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!hasUserPermission(authUser, "guestManagement")) {
        json(res, 403, { ok: false, error: "Guest management access required." });
        return;
      }
      await disableGuestUser();
      await writeAuditLog("admin.guest.disable", authUser.username, normalizeUsername(GUEST_USERNAME), {});
      json(res, 200, { ok: true, username: normalizeUsername(GUEST_USERNAME), guestEnabled: false });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/guest/enable") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!hasUserPermission(authUser, "guestManagement")) {
        json(res, 403, { ok: false, error: "Guest management access required." });
        return;
      }
      await enableGuestUser();
      await writeAuditLog("admin.guest.enable", authUser.username, normalizeUsername(GUEST_USERNAME), {});
      json(res, 200, { ok: true, username: normalizeUsername(GUEST_USERNAME), guestEnabled: true });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/guest/access") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!hasUserPermission(authUser, "guestManagement")) {
        json(res, 403, { ok: false, error: "Guest management access required." });
        return;
      }
      const body = await parseBody(req);
      const enabled = !!(body && body.enabled);
      if (enabled) {
        await enableGuestUser();
      } else {
        await disableGuestUser();
      }
      await writeAuditLog(enabled ? "admin.guest.enable" : "admin.guest.disable", authUser.username, normalizeUsername(GUEST_USERNAME), {});
      json(res, 200, { ok: true, username: normalizeUsername(GUEST_USERNAME), guestEnabled: enabled });
      return;
    }

    if (req.method === "GET" && pathname === "/auth/oauth/google/start") {
      if (!hasGoogleOauthConfig()) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Google sign-in is not configured.",
            oauth_code: "GOOGLE_OAUTH_UNAVAILABLE"
          })
        );
        return;
      }
      const state = buildOauthState("google");
      const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
      authUrl.searchParams.set("client_id", GOOGLE_CLIENT_ID);
      authUrl.searchParams.set("redirect_uri", GOOGLE_REDIRECT_URI);
      authUrl.searchParams.set("response_type", "code");
      authUrl.searchParams.set("scope", "openid email profile");
      authUrl.searchParams.set("prompt", "select_account");
      authUrl.searchParams.set("state", state);
      redirect(res, authUrl.toString());
      return;
    }

    if (req.method === "GET" && pathname === "/auth/oauth/google/callback") {
      if (!hasGoogleOauthConfig()) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Google sign-in is not configured.",
            oauth_code: "GOOGLE_OAUTH_UNAVAILABLE"
          })
        );
        return;
      }
      const state = String(url.searchParams.get("state") || "");
      const error = String(url.searchParams.get("error") || "");
      const code = String(url.searchParams.get("code") || "");
      if (!isOauthStateValidForProvider(state, "google")) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Google sign-in state is invalid or expired.",
            oauth_code: "GOOGLE_OAUTH_STATE_INVALID"
          })
        );
        return;
      }
      if (error) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Google sign-in was cancelled.",
            oauth_code: "GOOGLE_OAUTH_CANCELLED"
          })
        );
        return;
      }
      if (!code) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Missing Google authorization code.",
            oauth_code: "GOOGLE_OAUTH_CODE_MISSING"
          })
        );
        return;
      }
      try {
        const tokenBody = new URLSearchParams();
        tokenBody.set("code", code);
        tokenBody.set("client_id", GOOGLE_CLIENT_ID);
        tokenBody.set("client_secret", GOOGLE_CLIENT_SECRET);
        tokenBody.set("redirect_uri", GOOGLE_REDIRECT_URI);
        tokenBody.set("grant_type", "authorization_code");
        const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: tokenBody.toString()
        });
        if (!tokenResponse.ok) {
          throw new Error("Google token exchange failed.");
        }
        const tokenPayload = await tokenResponse.json();
        const accessToken = String(tokenPayload.access_token || "");
        if (!accessToken) {
          throw new Error("Google access token missing.");
        }
        const profileResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
          headers: { Authorization: "Bearer " + accessToken }
        });
        if (!profileResponse.ok) {
          throw new Error("Google profile fetch failed.");
        }
        const profilePayload = await profileResponse.json();
        const providerUserId = String(profilePayload.sub || "").trim();
        const email = normalizeEmail(profilePayload.email || "");
        const displayName = String(profilePayload.name || "").trim();
        if (!providerUserId || !email) {
          throw new Error("Google account is missing required profile data.");
        }
        const username = await resolveOrCreateOauthUser("google", providerUserId, email, displayName);
        await setUserCaptchaVerifiedNow(username);
        const token = await createSessionForUser(username, true);
        await safeFinalizeLogin(username, { role: "user", guest: false, method: "google" });
        redirect(res, getFrontendRedirectUrl({ oauth_token: token }));
      } catch (error) {
        const code = String(error && error.code ? error.code : "");
        if (code === "USER_LIMIT_REACHED") {
          redirect(
            res,
            getFrontendRedirectUrl({
              oauth_error: "Max user count is used.",
              oauth_code: "USER_LIMIT_REACHED"
            })
          );
          return;
        }
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Google sign-in failed. Please try again.",
            oauth_code: "GOOGLE_OAUTH_FAILED"
          })
        );
      }
      return;
    }

    if (req.method === "GET" && pathname === "/auth/oauth/facebook/start") {
      if (!hasFacebookOauthConfig()) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Facebook sign-in is not configured.",
            oauth_code: "FACEBOOK_OAUTH_UNAVAILABLE"
          })
        );
        return;
      }
      const state = buildOauthState("facebook");
      const authUrl = new URL("https://www.facebook.com/v23.0/dialog/oauth");
      authUrl.searchParams.set("client_id", FACEBOOK_APP_ID);
      authUrl.searchParams.set("redirect_uri", FACEBOOK_REDIRECT_URI);
      authUrl.searchParams.set("state", state);
      authUrl.searchParams.set("response_type", "code");
      authUrl.searchParams.set("scope", "email,public_profile");
      redirect(res, authUrl.toString());
      return;
    }

    if (req.method === "GET" && pathname === "/auth/oauth/facebook/callback") {
      if (!hasFacebookOauthConfig()) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Facebook sign-in is not configured.",
            oauth_code: "FACEBOOK_OAUTH_UNAVAILABLE"
          })
        );
        return;
      }
      const state = String(url.searchParams.get("state") || "");
      const error = String(url.searchParams.get("error") || "");
      const code = String(url.searchParams.get("code") || "");
      if (!isOauthStateValidForProvider(state, "facebook")) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Facebook sign-in state is invalid or expired.",
            oauth_code: "FACEBOOK_OAUTH_STATE_INVALID"
          })
        );
        return;
      }
      if (error) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Facebook sign-in was cancelled.",
            oauth_code: "FACEBOOK_OAUTH_CANCELLED"
          })
        );
        return;
      }
      if (!code) {
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Missing Facebook authorization code.",
            oauth_code: "FACEBOOK_OAUTH_CODE_MISSING"
          })
        );
        return;
      }
      try {
        const tokenUrl = new URL("https://graph.facebook.com/v23.0/oauth/access_token");
        tokenUrl.searchParams.set("client_id", FACEBOOK_APP_ID);
        tokenUrl.searchParams.set("client_secret", FACEBOOK_APP_SECRET);
        tokenUrl.searchParams.set("redirect_uri", FACEBOOK_REDIRECT_URI);
        tokenUrl.searchParams.set("code", code);
        const tokenResponse = await fetch(tokenUrl.toString());
        if (!tokenResponse.ok) {
          throw new Error("Facebook token exchange failed.");
        }
        const tokenPayload = await tokenResponse.json();
        const accessToken = String(tokenPayload.access_token || "");
        if (!accessToken) {
          throw new Error("Facebook access token missing.");
        }
        const profileUrl = new URL("https://graph.facebook.com/me");
        profileUrl.searchParams.set("fields", "id,name,email");
        profileUrl.searchParams.set("access_token", accessToken);
        const profileResponse = await fetch(profileUrl.toString());
        if (!profileResponse.ok) {
          throw new Error("Facebook profile fetch failed.");
        }
        const profilePayload = await profileResponse.json();
        const providerUserId = String(profilePayload.id || "").trim();
        const email = normalizeEmail(profilePayload.email || "");
        const displayName = String(profilePayload.name || "").trim();
        if (!providerUserId || !email) {
          throw new Error("Facebook account is missing required email permission.");
        }
        const username = await resolveOrCreateOauthUser("facebook", providerUserId, email, displayName);
        await setUserCaptchaVerifiedNow(username);
        const token = await createSessionForUser(username, true);
        await safeFinalizeLogin(username, { role: "user", guest: false, method: "facebook" });
        redirect(res, getFrontendRedirectUrl({ oauth_token: token }));
      } catch (error) {
        const code = String(error && error.code ? error.code : "");
        if (code === "USER_LIMIT_REACHED") {
          redirect(
            res,
            getFrontendRedirectUrl({
              oauth_error: "Max user count is used.",
              oauth_code: "USER_LIMIT_REACHED"
            })
          );
          return;
        }
        redirect(
          res,
          getFrontendRedirectUrl({
            oauth_error: "Facebook sign-in failed. Please try again.",
            oauth_code: "FACEBOOK_OAUTH_FAILED"
          })
        );
      }
      return;
    }

    if (req.method === "GET" && pathname === "/chat/debug") {
      const debug = await getChatDebugSnapshot();
      json(res, 200, {
        ok: true,
        service: "tbr-realtime",
        build: SERVER_BUILD,
        instanceId: INSTANCE_ID,
        ...debug
      });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/register") {
      if (!hasDb()) {
        json(res, 503, { ok: false, error: "Auth database unavailable." });
        return;
      }
      const body = await parseBody(req);
      const username = normalizeUsername(body.username || "");
      const password = String(body.password || "");
      const phone = String(body.phone || "");
      const created = await createUserDb(username, password, phone);
      if (!created.ok) {
        json(res, 400, created);
        return;
      }
      json(res, 200, {
        ok: true,
        username: created.username,
        role: created.role,
        phoneHint: created.phoneHint || ""
      });
      await writeAuditLog("auth.register", created.username, created.username, { role: created.role });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/login") {
      if (!hasDb()) {
        json(res, 503, { ok: false, error: "Auth database unavailable." });
        return;
      }
      const body = await parseBody(req);
      const captchaToken = String(body.turnstileToken || "").trim();
      const requestIp = parseRequestIp(req);
      const username = normalizeUsername(body.username || "");
      const password = String(body.password || "");
      const guestInviteToken = String(body.guestInviteToken || "").trim();
      const trustedDeviceToken = String(body.trustedDeviceToken || "").trim();
      const remember = !!body.remember;
      if (!username || !password) {
        json(res, 400, { ok: false, code: "INVALID_REQUEST", error: "username and password required" });
        return;
      }
      const user = await getUserRow(username);
      if (!user) {
        json(res, 401, { ok: false, code: "INVALID_CREDENTIALS", failedAttempts: 0 });
        return;
      }
      const currentSettings = getAdminSettings();
      const isGuestAccount =
        !!user.guest_account || normalizeRole(user.role) === "guest" || username === normalizeUsername(GUEST_USERNAME);
      const isAdminAccount = normalizeRole(user.role) === "admin";
      if (currentSettings.maintenanceModeEnabled && !isAdminAccount) {
        json(res, 403, {
          ok: false,
          code: "MAINTENANCE_MODE",
          error: currentSettings.maintenanceMessage || "Studio maintenance is active right now."
        });
        return;
      }
      if (isGuestAccount && !user.guest_enabled) {
        json(res, 403, { ok: false, code: "GUEST_DISABLED", error: "Guest access is disabled right now." });
        return;
      }
      const lockedUntilMs = Number(user.locked_until_ms || 0);
      if (lockedUntilMs > Date.now()) {
        json(res, 423, { ok: false, code: "LOCKED", lockedUntil: lockedUntilMs });
        return;
      }
      const computed = hashPassword(password, user.password_salt);
      if (computed !== String(user.password_hash || "")) {
        const currentFailed = Number(user.failed_attempts || 0) + 1;
        if (currentFailed >= AUTH_MAX_FAILED_ATTEMPTS) {
          const lockUntil = Date.now() + AUTH_LOCKOUT_MINUTES * 60 * 1000;
          await setUserFailedAttempt(username, 0, lockUntil);
          json(res, 423, { ok: false, code: "LOCKED", lockedUntil: lockUntil });
          return;
        }
        await setUserFailedAttempt(username, currentFailed, 0);
        json(res, 401, { ok: false, code: "INVALID_CREDENTIALS", failedAttempts: currentFailed });
        return;
      }
      if (isGuestAccount) {
        const invite = await getValidGuestInvite(guestInviteToken, username);
        if (!invite) {
          json(res, 403, {
            ok: false,
            code: "GUEST_INVITE_REQUIRED",
            error: "Guest invite is invalid or expired."
          });
          return;
        }
      }
      const captchaRequired = isGuestAccount ? false : isCaptchaReverifyRequired(user);
      if (captchaRequired) {
        const captchaCheck = await verifyTurnstileToken(captchaToken, requestIp);
        if (!captchaCheck.ok) {
          const isOutage = String(captchaCheck.code || "") === "CAPTCHA_UNAVAILABLE";
          if (!(isOutage && ALLOW_LOGIN_WHEN_CAPTCHA_UNAVAILABLE)) {
            json(res, 400, {
              ok: false,
              code: captchaCheck.code || "CAPTCHA_INVALID",
              error: captchaCheck.error || "Security check failed."
            });
            return;
          }
          process.stderr.write("[auth/login] CAPTCHA unavailable; allowing login via configured bypass.\n");
        } else {
          await setUserCaptchaVerifiedNow(username);
        }
      }
      await setUserFailedAttempt(username, 0, 0);
      const profile = sanitizeProfile(user.profile, username);
      const role = normalizeRole(user.role);
      const permissions = sanitizeUserPermissions(user.permissions, isGuestAccount ? "guest" : role);
      const phoneE164 = normalizePhoneE164(user.phone_e164 || "");
      const forceTwoFaForDefaultAdmin = username === DEFAULT_ADMIN_USERNAME;
      const twofaEnabled = forceTwoFaForDefaultAdmin || !!user.twofa_enabled || !!user.twofa_enforced || !!getAdminSettings().forceTwoFaAllUsers;
      const trustedDeviceValid = role === "user" && isTrustedDeviceTokenValid(trustedDeviceToken, user);
      if (twofaEnabled && !isGuestAccount && !trustedDeviceValid) {
        if (canUseDevAuthBypass()) {
          process.stdout.write("[auth/login] Dev auth bypass used for " + username + ".\n");
        } else if (!hasTwilioVerifyConfig()) {
          json(res, 503, {
            ok: false,
            code: "TWO_FA_UNAVAILABLE",
            error: "SMS verification is not configured right now."
          });
          return;
        } else {
          const challengeToken = await createLoginChallenge(username, remember);
          if (!phoneE164) {
            json(res, 200, {
              ok: false,
              code: "TWO_FA_ENROLL_REQUIRED",
              challengeToken,
              error: "2FA enrollment is required."
            });
            return;
          }
          try {
            await startTwilioVerifySms(phoneE164);
          } catch (error) {
            if (isVerifyRateLimitedError(error)) {
              json(res, 429, { ok: false, code: "VERIFY_RATE_LIMITED", error: error.message });
              return;
            }
            throw error;
          }
          await setLoginChallengePhone(challengeToken, phoneE164);
          json(res, 200, {
            ok: false,
            code: "TWO_FA_REQUIRED",
            challengeToken,
            phoneHint: maskPhoneE164(phoneE164)
          });
          return;
        }
      }
      const token = await createSessionForUser(username, remember);
      await safeFinalizeLogin(username, { role, guest: isGuestAccount, method: "password" });
      if (isGuestAccount) {
        await consumeGuestInvite(guestInviteToken);
      }
      json(res, 200, {
        ok: true,
        session: {
          token,
          username,
          role,
          guest: isGuestAccount,
          permissions,
          profile,
          createdAt: user.created_at
        }
      });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/login/2fa/enroll/start") {
      if (!hasDb()) {
        json(res, 503, { ok: false, error: "Auth database unavailable." });
        return;
      }
      const body = await parseBody(req);
      const challengeToken = String(body.challengeToken || "").trim();
      const phoneRaw = String(body.phone || "");
      if (!challengeToken || !phoneRaw) {
        json(res, 400, { ok: false, code: "INVALID_REQUEST", error: "challengeToken and phone required" });
        return;
      }
      const challenge = await getLoginChallenge(challengeToken);
      if (!challenge) {
        json(res, 400, { ok: false, code: "CHALLENGE_EXPIRED", error: "Verification session expired. Sign in again." });
        return;
      }
      if (!hasTwilioVerifyConfig()) {
        json(res, 503, {
          ok: false,
          code: "TWO_FA_UNAVAILABLE",
          error: "SMS verification is not configured right now."
        });
        return;
      }
      const phoneE164 = normalizePhoneE164(phoneRaw);
      if (!phoneE164) {
        json(res, 400, { ok: false, code: "INVALID_PHONE", error: "Enter a valid mobile number." });
        return;
      }
      await setLoginChallengePhone(challengeToken, phoneE164);
      try {
        await startTwilioVerifySms(phoneE164);
      } catch (error) {
        if (isVerifyRateLimitedError(error)) {
          json(res, 429, { ok: false, code: "VERIFY_RATE_LIMITED", error: error.message });
          return;
        }
        throw error;
      }
      json(res, 200, { ok: true, phoneHint: maskPhoneE164(phoneE164) });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/login/2fa") {
      if (!hasDb()) {
        json(res, 503, { ok: false, error: "Auth database unavailable." });
        return;
      }
      const body = await parseBody(req);
      const challengeToken = String(body.challengeToken || "").trim();
      const code = String(body.code || "").trim();
      if (!challengeToken || !code) {
        json(res, 400, { ok: false, code: "INVALID_REQUEST", error: "challengeToken and code required" });
        return;
      }
      const challenge = await getLoginChallenge(challengeToken);
      if (!challenge) {
        json(res, 400, { ok: false, code: "CHALLENGE_EXPIRED", error: "Verification session expired. Sign in again." });
        return;
      }
      const user = await getUserRow(challenge.username);
      if (!user) {
        await consumeLoginChallenge(challengeToken);
        json(res, 404, { ok: false, code: "INVALID_CREDENTIALS", error: "User not found." });
        return;
      }
      const challengePhoneE164 = normalizePhoneE164(challenge.twofaPhoneE164 || "");
      const userPhoneE164 = normalizePhoneE164(user.phone_e164 || "");
      const phoneE164 = userPhoneE164 || challengePhoneE164;
      if (!phoneE164) {
        await consumeLoginChallenge(challengeToken);
        json(res, 400, { ok: false, code: "TWO_FA_PHONE_MISSING", error: "2FA phone number is missing." });
        return;
      }
      if (!hasTwilioVerifyConfig()) {
        json(res, 503, {
          ok: false,
          code: "TWO_FA_UNAVAILABLE",
          error: "SMS verification is not configured right now."
        });
        return;
      }
      const approved = await checkTwilioVerifySms(phoneE164, code);
      if (!approved) {
        json(res, 401, { ok: false, code: "INVALID_2FA_CODE", error: "Invalid verification code." });
        return;
      }
      if (!userPhoneE164 || !user.twofa_enabled || !user.twofa_enforced) {
        await saveUserTwoFaEnrollment(challenge.username, phoneE164);
      }
      await consumeLoginChallenge(challengeToken);
      const token = await createSessionForUser(challenge.username, challenge.remember);
      await safeFinalizeLogin(challenge.username, { role: normalizeRole(user.role), guest: !!user.guest_account, method: "2fa" });
      const profile = sanitizeProfile(user.profile, challenge.username);
      const role = normalizeRole(user.role);
      const permissions = sanitizeUserPermissions(user.permissions, !!user.guest_account ? "guest" : role);
      const trustedDeviceToken = role === "user" ? createTrustedDeviceToken(user) : "";
      json(res, 200, {
        ok: true,
        session: {
          token,
          username: challenge.username,
          role,
          guest: !!user.guest_account,
          remember: challenge.remember,
          permissions,
          profile,
          createdAt: user.created_at,
          trustedDeviceToken
        }
      });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/forgot-password/start") {
      if (!hasDb()) {
        json(res, 503, { ok: false, error: "Auth database unavailable.", code: "SERVICE_UNAVAILABLE" });
        return;
      }
      if (!hasTwilioVerifyConfig()) {
        json(res, 503, { ok: false, error: "SMS verification is not configured right now.", code: "TWO_FA_UNAVAILABLE" });
        return;
      }
      const body = await parseBody(req);
      const username = normalizeUsername(body.username || "");
      if (!username) {
        json(res, 400, { ok: false, error: "Username is required.", code: "INVALID_REQUEST" });
        return;
      }
      const user = await getUserRow(username);
      const phoneE164 = normalizePhoneE164(user && user.phone_e164 ? user.phone_e164 : "");
      const eligible = !!user && !user.guest_account && normalizeRole(user.role) !== "guest" && !!phoneE164;
      const challengeToken = await createPasswordResetChallenge(eligible ? user : { username: "", phone_e164: "" });
      if (eligible) {
        try {
          await startTwilioVerifySms(phoneE164);
        } catch (error) {
          if (isVerifyRateLimitedError(error)) {
            json(res, 429, { ok: false, code: "VERIFY_RATE_LIMITED", error: error.message });
            return;
          }
          throw error;
        }
      }
      json(res, 200, {
        ok: true,
        challengeToken,
        message: "If this account is eligible, a verification code has been sent."
      });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/forgot-password/verify") {
      if (!hasDb()) {
        json(res, 503, { ok: false, error: "Auth database unavailable.", code: "SERVICE_UNAVAILABLE" });
        return;
      }
      if (!hasTwilioVerifyConfig()) {
        json(res, 503, { ok: false, error: "SMS verification is not configured right now.", code: "TWO_FA_UNAVAILABLE" });
        return;
      }
      const body = await parseBody(req);
      const challengeToken = String(body.challengeToken || "").trim();
      const code = String(body.code || "").trim();
      if (!challengeToken || !code) {
        json(res, 400, { ok: false, error: "Verification code is required.", code: "INVALID_REQUEST" });
        return;
      }
      const challenge = await getPasswordResetChallenge(challengeToken);
      if (!challenge) {
        json(res, 400, { ok: false, error: "Password reset session expired. Start again.", code: "CHALLENGE_EXPIRED" });
        return;
      }
      if (!challenge.username || !challenge.phoneE164) {
        json(res, 401, { ok: false, error: "Invalid verification code.", code: "INVALID_RESET_CODE" });
        return;
      }
      const approved = await checkTwilioVerifySms(challenge.phoneE164, code);
      if (!approved) {
        json(res, 401, { ok: false, error: "Invalid verification code.", code: "INVALID_RESET_CODE" });
        return;
      }
      await markPasswordResetChallengeVerified(challengeToken);
      json(res, 200, { ok: true, resetToken: challengeToken });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/forgot-password/reset") {
      if (!hasDb()) {
        json(res, 503, { ok: false, error: "Auth database unavailable.", code: "SERVICE_UNAVAILABLE" });
        return;
      }
      const body = await parseBody(req);
      const resetToken = String(body.resetToken || "").trim();
      const newPassword = String(body.newPassword || "");
      if (!resetToken || !newPassword) {
        json(res, 400, { ok: false, error: "Reset token and new password are required.", code: "INVALID_REQUEST" });
        return;
      }
      const challenge = await getPasswordResetChallenge(resetToken);
      if (!challenge || !challenge.verifiedAt || !challenge.username) {
        json(res, 400, { ok: false, error: "Password reset session expired. Start again.", code: "CHALLENGE_EXPIRED" });
        return;
      }
      const updated = await resetUserPasswordDb(challenge.username, newPassword);
      if (!updated.ok) {
        json(res, 400, updated);
        return;
      }
      await consumePasswordResetChallenge(resetToken);
      await writeAuditLog("auth.password_reset", challenge.username, challenge.username, { method: "sms" });
      json(res, 200, { ok: true });
      return;
    }

    if (req.method === "GET" && pathname === "/auth/session") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      json(res, 200, {
        ok: true,
        user: {
          username: authUser.username,
          role: normalizeRole(authUser.role),
          guest: !!authUser.guest,
          permissions: sanitizeUserPermissions(authUser.permissions, authUser.guest ? "guest" : authUser.role),
          profile: sanitizeProfile(authUser.profile, authUser.username),
          createdAt: authUser.createdAt
        }
      });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/logout") {
      if (!hasDb()) {
        json(res, 200, { ok: true });
        return;
      }
      const token = parseAuthBearer(req);
      let currentUser = null;
      if (token) {
        currentUser = await getSessionUserByToken(token);
      }
      if (token) {
        await revokeSessionByToken(token);
      }
      if (currentUser && currentUser.guest) {
        await disableGuestUser();
      }
      if (currentUser) {
        await writeAuditLog("auth.logout", currentUser.username, currentUser.username, { guest: !!currentUser.guest });
      }
      json(res, 200, { ok: true });
      return;
    }

    if (req.method === "GET" && pathname === "/auth/users") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!hasUserPermission(authUser, "guestManagement")) {
        json(res, 403, { ok: false, error: "User management access required." });
        return;
      }
      const users = await listUsersForAdminDb({ guestOnly: normalizeRole(authUser.role) !== "admin" });
      json(res, 200, { ok: true, users });
      return;
    }

    if (req.method === "GET" && pathname === "/library/assets") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const libraryKind = normalizeLibraryKind(url.searchParams.get("library") || "");
      const limit = Number(url.searchParams.get("limit") || 100);
      const showLibraryId = String(url.searchParams.get("showLibraryId") || "").trim();
      const assets = await listLibraryAssetsDb({ libraryKind, limit, showLibraryId });
      json(res, 200, { ok: true, libraryKind, showLibraryId, assets });
      return;
    }

    if (req.method === "GET" && pathname === "/show-libraries") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const showLibraries = await listShowLibrariesDb();
      json(res, 200, { ok: true, showLibraries });
      return;
    }

    if (req.method === "POST" && pathname === "/show-libraries") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const created = await createShowLibraryDb(authUser.username, body);
      if (!created.ok) {
        json(res, 400, created);
        return;
      }
      await writeAuditLog("show_library.create", authUser.username, "", {
        showLibraryId: created.showLibrary.id,
        title: created.showLibrary.title,
        slug: created.showLibrary.slug
      });
      json(res, 200, created);
      return;
    }

    if (req.method === "POST" && pathname === "/media/presign-upload") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const ticket = await createLibraryUploadTicket(authUser.username, body);
      if (!ticket.ok) {
        json(res, 400, ticket);
        return;
      }
      await writeAuditLog("library.asset.upload_ticket", authUser.username, "", {
        libraryKind: ticket.asset.libraryKind,
        assetId: ticket.asset.id,
        storageProvider: ticket.storage.provider
      });
      json(res, 200, ticket);
      return;
    }

    if (req.method === "POST" && pathname === "/media/complete-upload") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const existingAsset = await getLibraryAssetByIdDb(body.assetId);
      if (!existingAsset) {
        json(res, 404, { ok: false, error: "Library asset not found." });
        return;
      }
      try {
        await verifyLibraryAssetObjectExists(existingAsset);
      } catch (error) {
        json(res, 400, { ok: false, error: "Uploaded file was not found in shared storage yet." });
        return;
      }
      const finalized = await finalizeLibraryAssetUploadDb(authUser.username, body.assetId, {
        title: body.title,
        byteSize: body.byteSize,
        durationSeconds: body.durationSeconds,
        metadata: {
          completedVia: "browser-upload",
          completedAt: new Date().toISOString()
        }
      });
      if (!finalized.ok) {
        json(res, 400, finalized);
        return;
      }
      await writeAuditLog("library.asset.upload_complete", authUser.username, "", {
        libraryKind: finalized.asset.libraryKind,
        assetId: finalized.asset.id
      });
      json(res, 200, finalized);
      return;
    }

    if (req.method === "POST" && pathname === "/media/upload-bytes") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const assetId = String(url.searchParams.get("assetId") || "").trim();
      if (!assetId) {
        json(res, 400, { ok: false, error: "Asset id is required." });
        return;
      }
      const asset = await getLibraryAssetByIdDb(assetId);
      if (!asset || !asset.storageKey) {
        json(res, 404, { ok: false, error: "Library asset not found." });
        return;
      }
      if (!hasMediaStorageConfig()) {
        json(res, 503, { ok: false, error: "Shared media storage is not configured right now." });
        return;
      }
      try {
        const body = await parseRawBody(req);
        if (!body || !body.length) {
          json(res, 400, { ok: false, error: "Upload body is empty." });
          return;
        }
        const client = getMediaStorageClient();
        const bucket = getBucketForLibraryKind(asset.libraryKind);
        await client.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: asset.storageKey,
            Body: body,
            ContentType: String(req.headers["content-type"] || asset.mimeType || "application/octet-stream")
          })
        );
        await writeAuditLog("library.asset.upload_bytes", authUser.username, "", {
          libraryKind: asset.libraryKind,
          assetId: asset.id,
          bytes: body.length
        });
        json(res, 200, { ok: true, assetId: asset.id, bytes: body.length });
      } catch (error) {
        process.stdout.write(
          "[realtime] media upload failed for " +
            assetId +
            ": " +
            String(error && error.message ? error.message : error) +
            "\n"
        );
        json(res, 500, { ok: false, error: "Shared upload failed." });
      }
      return;
    }

    if (req.method === "POST" && pathname === "/media/presign-download") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const ticket = await createLibraryDownloadTicket(body.assetId);
      if (!ticket.ok) {
        json(res, 400, ticket);
        return;
      }
      await writeAuditLog("library.asset.download_ticket", authUser.username, "", {
        libraryKind: ticket.asset.libraryKind,
        assetId: ticket.asset.id,
        storageProvider: ticket.storage.provider
      });
      json(res, 200, ticket);
      return;
    }

    if (req.method === "GET" && pathname === "/media/download") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const assetId = String(url.searchParams.get("assetId") || "").trim();
      if (!assetId) {
        json(res, 400, { ok: false, error: "Asset id is required." });
        return;
      }
      await writeAuditLog("library.asset.download_stream", authUser.username, "", {
        assetId
      });
      await streamLibraryAssetToResponse(res, assetId);
      return;
    }

    if (req.method === "POST" && pathname === "/library/assets/meta") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const created = await createLibraryAssetMetadataDb(authUser.username, body);
      if (!created.ok) {
        json(res, 400, created);
        return;
      }
      await writeAuditLog("library.asset.create", authUser.username, "", {
        libraryKind: created.asset.libraryKind,
        assetId: created.asset.id,
        assetRole: created.asset.assetRole || "",
        title: created.asset.title
      });
      json(res, 200, created);
      return;
    }

    if (req.method === "POST" && pathname === "/library/assets/rename") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const updated = await renameLibraryAssetDb(authUser.username, body.assetId, body.title);
      if (!updated.ok) {
        json(res, 400, updated);
        return;
      }
      await writeAuditLog("library.asset.rename", authUser.username, "", {
        libraryKind: updated.asset.libraryKind,
        assetId: updated.asset.id,
        title: updated.asset.title
      });
      json(res, 200, updated);
      return;
    }

    if (req.method === "POST" && pathname === "/library/assets/delete") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const deleted = await deleteLibraryAssetDb(authUser.username, body.assetId);
      if (!deleted.ok) {
        json(res, 400, deleted);
        return;
      }
      await writeAuditLog("library.asset.delete", authUser.username, "", {
        libraryKind: deleted.asset.libraryKind,
        assetId: deleted.asset.id,
        title: deleted.asset.title
      });
      json(res, 200, deleted);
      return;
    }

    if (req.method === "POST" && pathname === "/auth/users/permissions") {
      const authUser = await requireAuth(req, res, true);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const targetUsername = normalizeUsername(body.username || "");
      const updated = await updateUserPermissionsDb(targetUsername, body.permissions);
      if (!updated.ok) {
        json(res, 400, updated);
        return;
      }
      await writeAuditLog("admin.user.permissions", authUser.username, targetUsername, {
        permissions: updated.permissions
      });
      json(res, 200, updated);
      return;
    }

    if (req.method === "GET" && pathname === "/admin/settings") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!canAccessAdminSettings(authUser)) {
        json(res, 403, { ok: false, error: "Admin settings access required." });
        return;
      }
      json(res, 200, {
        ok: true,
        settings: getAdminSettings(),
        publicSettings: getPublicAdminSettings(),
        guestInviteExpiryOptions: GUEST_INVITE_EXPIRY_OPTIONS,
        guestSessionMinutesOptions: GUEST_SESSION_MINUTES_OPTIONS,
        recordingMaxMinutesOptions: RECORDING_MAX_MINUTES_OPTIONS,
        recordingRetentionOptions: RECORDING_RETENTION_OPTIONS,
        chatImageMaxMbOptions: CHAT_IMAGE_MAX_MB_OPTIONS,
        chatVideoMaxMbOptions: CHAT_VIDEO_MAX_MB_OPTIONS
      });
      return;
    }

    if (req.method === "POST" && pathname === "/admin/settings") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!canAccessAdminSettings(authUser)) {
        json(res, 403, { ok: false, error: "Admin settings access required." });
        return;
      }
      const body = await parseBody(req);
      const savedSettings = await saveAdminSettingsToDb(
        mergeAuthorizedAdminSettings(getAdminSettings(), body.settings, authUser),
        authUser.username
      );
      await writeAuditLog("admin.settings.update", authUser.username, "", { settings: savedSettings });
      json(res, 200, {
        ok: true,
        settings: savedSettings,
        publicSettings: getPublicAdminSettings()
      });
      return;
    }

    if (req.method === "GET" && pathname === "/admin/audit") {
      const authUser = await requireAuth(req, res, true);
      if (!authUser) {
        return;
      }
      const rows = await listAuditLog(Number(url.searchParams.get("limit") || 50));
      json(res, 200, { ok: true, events: rows });
      return;
    }

    if (req.method === "GET" && pathname === "/admin/chat/export") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!canAccessChatModeration(authUser)) {
        json(res, 403, { ok: false, error: "Chat moderation access required." });
        return;
      }
      await refreshChatStateFromDb(true);
      const exportRows = chatMessages.slice(-CHAT_EXPORT_LIMIT).map((message) => ({
        id: message.id,
        kind: message.kind,
        username: message.username,
        displayName: message.displayName,
        text: message.text,
        timestamp: message.timestamp,
        deleted: !!message.deleted,
        editedAt: Number(message.editedAt || 0),
        reactions: message.reactions || {},
        seenBy: message.seenBy || {},
        attachment: message.attachment || null,
        replyTo: message.replyTo || null
      }));
      await writeAuditLog("admin.chat.export", authUser.username, "", { count: exportRows.length });
      json(res, 200, { ok: true, messages: exportRows, exportedAt: new Date().toISOString() });
      return;
    }

    if (req.method === "POST" && pathname === "/admin/studio/action") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!canAccessSiteSettings(authUser)) {
        json(res, 403, { ok: false, error: "Site settings access required." });
        return;
      }
      const body = await parseBody(req);
      const action = String(body.action || "").trim();
      if (!["muteAll", "forceOffAir", "clearHost", "clearSpotlight"].includes(action)) {
        json(res, 400, { ok: false, error: "Unsupported action." });
        return;
      }
      if (action === "clearHost") {
        hostUsername = "";
        hostUpdatedAt = Date.now();
      }
      markStudioControlAction(action, authUser.username);
      await writeAuditLog("admin.studio.action", authUser.username, "", { action });
      json(res, 200, { ok: true, action, state: studioControlState });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/users/role") {
      const authUser = await requireAuth(req, res, true);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const targetUsername = normalizeUsername(body.username || "");
      const role = normalizeRole(body.role || "user");
      const updated = await updateUserRoleDb(targetUsername, role);
      if (!updated.ok) {
        json(res, 400, updated);
        return;
      }
      await writeAuditLog("admin.user.role", authUser.username, targetUsername, { role: updated.role });
      json(res, 200, updated);
      return;
    }

    if (req.method === "POST" && pathname === "/auth/users/password-reset") {
      const authUser = await requireAuth(req, res, true);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const targetUsername = normalizeUsername(body.username || "");
      const newPassword = String(body.newPassword || "");
      const updated = await resetUserPasswordDb(targetUsername, newPassword);
      if (!updated.ok) {
        json(res, 400, updated);
        return;
      }
      await writeAuditLog("admin.user.password_reset", authUser.username, targetUsername, {});
      json(res, 200, updated);
      return;
    }

    if (req.method === "POST" && pathname === "/auth/users/delete") {
      const authUser = await requireAuth(req, res, true);
      if (!authUser) {
        return;
      }
      const body = await parseBody(req);
      const targetUsername = normalizeUsername(body.username || "");
      const deleted = await deleteUserDb(targetUsername);
      if (!deleted.ok) {
        json(res, 400, deleted);
        return;
      }
      await writeAuditLog("admin.user.delete", authUser.username, targetUsername, {});
      json(res, 200, deleted);
      return;
    }

    if (req.method === "POST" && pathname === "/auth/profile") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (authUser.guest) {
        json(res, 403, { ok: false, error: "Guest profile editing is disabled." });
        return;
      }
      const body = await parseBody(req);
      const profile = sanitizeProfile(body.profile, authUser.username);
      profile.updatedAt = new Date().toISOString();
      await dbQuery("update studio_users set profile = $2::jsonb, updated_at = now() where username = $1", [
        authUser.username,
        JSON.stringify(profile)
      ]);
      await writeAuditLog("profile.update", authUser.username, authUser.username, {});
      json(res, 200, { ok: true, profile });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/password") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (authUser.guest) {
        json(res, 403, { ok: false, error: "Guest password changes are disabled." });
        return;
      }
      const body = await parseBody(req);
      const currentPassword = String(body.currentPassword || "");
      const nextPassword = String(body.nextPassword || "");
      if (!currentPassword || !nextPassword) {
        json(res, 400, { ok: false, error: "Current and new password are required." });
        return;
      }
      if (nextPassword.length < 8) {
        json(res, 400, { ok: false, error: "New password must be at least 8 characters." });
        return;
      }
      const user = await getUserRow(authUser.username);
      if (!user) {
        json(res, 404, { ok: false, error: "User not found." });
        return;
      }
      const currentHash = hashPassword(currentPassword, user.password_salt);
      if (currentHash !== String(user.password_hash || "")) {
        json(res, 400, { ok: false, error: "Current password is incorrect." });
        return;
      }
      const salt = createSalt();
      const nextHash = hashPassword(nextPassword, salt);
      await dbQuery(
        `
          update studio_users
          set
            password_salt = $2,
            password_hash = $3,
            failed_attempts = 0,
            locked_until = null,
            updated_at = now()
          where username = $1
        `,
        [authUser.username, salt, nextHash]
      );
      await writeAuditLog("profile.password_change", authUser.username, authUser.username, {});
      json(res, 200, { ok: true });
      return;
    }

    if (req.method === "POST" && pathname === "/auth/user/delete") {
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (authUser.guest) {
        json(res, 403, { ok: false, error: "Guest account deletion is disabled." });
        return;
      }
      const deleted = await deleteUserDb(authUser.username);
      if (!deleted.ok) {
        json(res, 400, deleted);
        return;
      }
      json(res, 200, { ok: true, username: authUser.username });
      return;
    }

    if (req.method === "POST" && pathname === "/presence/heartbeat") {
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      const displayName = String(body.displayName || "").trim();
      const sessionId = String(body.sessionId || "").trim();
      const onAir = Boolean(body.onAir);
      if (!username || !sessionId) {
        json(res, 400, { ok: false, error: "username and sessionId required" });
        return;
      }
      presence.set(sessionId, {
        username,
        displayName: displayName || username,
        sessionId,
        onAir,
        lastSeenAt: Date.now()
      });
      cleanupPresence();
      markUserOnline(username, displayName || username);
      json(res, 200, { ok: true });
      return;
    }

    if (req.method === "POST" && pathname === "/presence/leave") {
      const body = await parseBody(req);
      const sessionId = String(body.sessionId || "").trim();
      const username = String(body.username || "").trim().toLowerCase();
      const displayName = String(body.displayName || "").trim();
      const removedRows = [];
      if (sessionId) {
        const row = presence.get(sessionId);
        if (row) {
          removedRows.push(row);
          presence.delete(sessionId);
        }
      }
      if (!removedRows.length && username) {
        for (const [sid, row] of presence.entries()) {
          if (row && row.username === username) {
            removedRows.push(row);
            presence.delete(sid);
          }
        }
      }
      let leavingUsername = "";
      let leavingDisplayName = "";
      if (removedRows.length) {
        const row = removedRows[0];
        leavingUsername = row && row.username ? row.username : "";
        leavingDisplayName = row && row.displayName ? row.displayName : leavingUsername;
      } else if (username) {
        leavingUsername = username;
        leavingDisplayName = displayName || username;
      }
      if (leavingUsername) {
        finalizeUserOffline(leavingUsername, leavingDisplayName || leavingUsername);
      }
      cleanupPresence();
      json(res, 200, { ok: true });
      return;
    }

    if (req.method === "GET" && pathname === "/presence/list") {
      const aggregate = getPresenceAggregate();
      const participants = Array.from(aggregate.values()).sort((a, b) =>
        a.username.localeCompare(b.username)
      );
      clearHostIfOffline();
      const users = participants.map((p) => p.username);
      json(res, 200, {
        ok: true,
        users,
        participants,
        hostUsername,
        hostUpdatedAt,
        adminSettings: getPublicAdminSettings(),
        studioControlState
      });
      return;
    }

    if (req.method === "GET" && pathname === "/host/state") {
      clearHostIfOffline();
      json(res, 200, { ok: true, hostUsername, hostUpdatedAt });
      return;
    }

    if (req.method === "POST" && pathname === "/host/claim") {
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      if (!username) {
        json(res, 400, { ok: false, error: "username required" });
        return;
      }
      const claimantUser = await getUserRow(username);
      const claimantRole =
        claimantUser && (!!claimantUser.guest_account || normalizeRole(claimantUser.role) === "guest")
          ? "guest"
          : normalizeRole(claimantUser && claimantUser.role);
      const claimantPermissions = sanitizeUserPermissions(claimantUser && claimantUser.permissions, claimantRole);
      const settings = getAdminSettings();
      const canHost = claimantRole === "admin" || (settings.allowUserHostControl !== false && claimantPermissions.hostControl);
      if (!canHost) {
        json(res, 403, { ok: false, error: "This account cannot claim host control." });
        return;
      }
      clearHostIfOffline();
      const aggregate = getPresenceAggregate();
      const claimant = aggregate.get(username);
      if (!claimant || !claimant.onAir) {
        json(res, 400, { ok: false, error: "Go On-Air first before claiming host." });
        return;
      }
      if (hostUsername && hostUsername !== username) {
        json(res, 409, { ok: false, error: "Host already assigned", hostUsername });
        return;
      }
      hostUsername = username;
      hostUpdatedAt = Date.now();
      json(res, 200, { ok: true, hostUsername, hostUpdatedAt });
      return;
    }

    if (req.method === "POST" && pathname === "/host/release") {
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      if (!username) {
        json(res, 400, { ok: false, error: "username required" });
        return;
      }
      if (hostUsername === username) {
        hostUsername = "";
        hostUpdatedAt = Date.now();
      }
      json(res, 200, { ok: true, hostUsername, hostUpdatedAt });
      return;
    }

    if (req.method === "POST" && pathname === "/host/transfer") {
      const body = await parseBody(req);
      const from = String(body.from || "").trim().toLowerCase();
      const to = String(body.to || "").trim().toLowerCase();
      if (!from || !to) {
        json(res, 400, { ok: false, error: "from and to required" });
        return;
      }
      clearHostIfOffline();
      if (hostUsername !== from) {
        json(res, 403, { ok: false, error: "Only current host can transfer", hostUsername });
        return;
      }
      const users = listActiveUsernames();
      if (!users.has(to)) {
        json(res, 400, { ok: false, error: "Target user is not online" });
        return;
      }
      hostUsername = to;
      hostUpdatedAt = Date.now();
      json(res, 200, { ok: true, hostUsername, hostUpdatedAt });
      return;
    }

    if (req.method === "POST" && pathname === "/chat/send") {
      if (!requireChatStorage(res)) {
        return;
      }
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      const displayName = String(body.displayName || "").trim();
      const text = String(body.text || "").trim();
      const incomingReplyTo = body.replyTo && typeof body.replyTo === "object" ? body.replyTo : null;
      const incomingAttachment = body.attachment && typeof body.attachment === "object" ? body.attachment : null;
      if (!username || (!text && !incomingAttachment)) {
        json(res, 400, { ok: false, error: "username and text or attachment required" });
        return;
      }
      let attachment = null;
      typingState.delete(username);
      const settings = getAdminSettings();
      if (incomingAttachment) {
        if (!settings.chatAttachmentsEnabled) {
          json(res, 403, { ok: false, error: "Attachments are disabled by admin." });
          return;
        }
        const kind = String(incomingAttachment.kind || "").trim().toLowerCase();
        const mime = String(incomingAttachment.mime || "").trim().toLowerCase();
        const name = String(incomingAttachment.name || "upload").slice(0, 120);
        const dataUrl = String(incomingAttachment.dataUrl || "");
        const durationSeconds = Number(incomingAttachment.durationSeconds || 0);
        if (!["image", "video"].includes(kind) || !dataUrl.startsWith("data:") || dataUrl.length > MAX_ATTACHMENT_DATA_URL_BYTES) {
          json(res, 400, { ok: false, error: "Invalid attachment" });
          return;
        }
        if (kind === "video" && !settings.chatVideoAttachmentsEnabled) {
          json(res, 403, { ok: false, error: "Video attachments are disabled by admin." });
          return;
        }
        const sizeMb = Number(incomingAttachment.size || 0) / (1024 * 1024);
        if (kind === "image" && sizeMb > Number(settings.chatImageMaxMb || 8)) {
          json(res, 400, { ok: false, error: "Image exceeds admin size limit." });
          return;
        }
        if (kind === "video" && sizeMb > Number(settings.chatVideoMaxMb || 20)) {
          json(res, 400, { ok: false, error: "Video exceeds admin size limit." });
          return;
        }
        attachment = {
          kind,
          mime,
          name,
          size: Number(incomingAttachment.size || 0),
          durationSeconds: Number.isFinite(durationSeconds) ? durationSeconds : 0,
          dataUrl
        };
      }
      let replyTo = null;
      if (incomingReplyTo) {
        const replyId = Number(incomingReplyTo.id || 0);
        const replyUsername = String(incomingReplyTo.username || "").trim().toLowerCase();
        const replyDisplayName = String(incomingReplyTo.displayName || "").trim();
        const replyText = String(incomingReplyTo.text || "").trim().slice(0, 160);
        if (replyId > 0 && replyUsername && replyText) {
          replyTo = {
            id: replyId,
            username: replyUsername,
            displayName: replyDisplayName || replyUsername,
            text: replyText
          };
        }
      }
      const message = {
        id: ++messageSeq,
        kind: "chat",
        username,
        displayName: displayName || username,
        text,
        timestamp: Date.now(),
        reactions: {},
        attachment,
        replyTo,
        editedAt: 0,
        deleted: false,
        seenBy: {
          [username]: Date.now()
        }
      };
      if (isPersistentDbConfigured()) {
        if (!hasDb()) {
          json(res, 503, {
            ok: false,
            error: "Chat storage is reconnecting. Please retry in a few seconds.",
            code: "CHAT_STORAGE_UNAVAILABLE"
          });
          return;
        }
        const saved = await insertChatMessageDb(message);
        if (!saved || !saved.id) {
          json(res, 503, {
            ok: false,
            error: "Message was not persisted. Please retry.",
            code: "CHAT_PERSIST_FAILED"
          });
          return;
        }
        message.id = saved.id;
        message.timestamp = saved.timestamp;
        messageSeq = Math.max(messageSeq, message.id);
        await upsertSeenDb(username, message.id);
      }
      chatMessages.push(message);
      if (chatMessages.length > MAX_CHAT_MESSAGES) {
        chatMessages.splice(0, chatMessages.length - MAX_CHAT_MESSAGES);
      }
      pushChatEvent("message", { message });
      json(res, 200, { ok: true, message });
      return;
    }

    if (req.method === "POST" && pathname === "/chat/admin/clear") {
      if (!requireChatStorage(res)) {
        return;
      }
      const authUser = await requireAuth(req, res, false);
      if (!authUser) {
        return;
      }
      if (!canAccessChatModeration(authUser)) {
        json(res, 403, { ok: false, error: "Chat moderation access required." });
        return;
      }
      chatMessages.length = 0;
      chatEvents.length = 0;
      chatEventSeq = 0;
      typingState.clear();
      if (hasDb()) {
        await dbQuery("delete from chat_reactions", []);
        await dbQuery("delete from chat_seen", []);
        await dbQuery("delete from chat_messages", []);
      }
      pushChatEvent("clear", {
        clearedBy: authUser.username,
        timestamp: Date.now()
      });
      await writeAuditLog("admin.chat.clear", authUser.username, "", {});
      json(res, 200, { ok: true, cleared: true, by: authUser.username });
      return;
    }

    if (req.method === "POST" && pathname === "/chat/typing") {
      if (!requireChatStorage(res)) {
        return;
      }
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      const displayName = String(body.displayName || "").trim();
      const typing = Boolean(body.typing);
      if (!username) {
        json(res, 400, { ok: false, error: "username required" });
        return;
      }
      if (!typing) {
        typingState.delete(username);
      } else {
        typingState.set(username, {
          username,
          displayName: displayName || username,
          lastTypedAt: Date.now()
        });
      }
      const typingUsers = getTypingUsers();
      pushChatEvent("typing", { typingUsers });
      json(res, 200, { ok: true, typingUsers });
      return;
    }

    if (req.method === "POST" && pathname === "/chat/react") {
      if (!requireChatStorage(res)) {
        return;
      }
      if (getAdminSettings().chatReactionsEnabled === false) {
        json(res, 403, { ok: false, error: "Reactions are disabled by admin." });
        return;
      }
      await refreshChatStateFromDb(false);
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      const messageId = Number(body.messageId || 0);
      const emoji = String(body.emoji || "").trim();
      console.log("[chat/react]", { username, messageId, emoji });
      if (!username || !messageId) {
        json(res, 400, { ok: false, error: "username and messageId required" });
        return;
      }
      if (emoji.length > 16) {
        json(res, 400, { ok: false, error: "Invalid reaction payload" });
        return;
      }
      const message = chatMessages.find((item) => item.id === messageId);
      if (!message) {
        json(res, 404, { ok: false, error: "Message not found" });
        return;
      }
      if (!message.reactions || typeof message.reactions !== "object") {
        message.reactions = {};
      }
      if (message.deleted) {
        json(res, 400, { ok: false, error: "Message was removed" });
        return;
      }
      const current = String(message.reactions[username] || "");
      if (hasDb()) {
        await dbQuery("delete from chat_reactions where message_id = $1 and username = $2", [message.id, username]);
      }
      if (!emoji || emoji === current) {
        delete message.reactions[username];
      } else {
        message.reactions[username] = emoji;
        if (hasDb()) {
          await dbQuery(
            "insert into chat_reactions (message_id, emoji, username) values ($1, $2, $3)",
            [message.id, emoji, username]
          );
        }
      }
      if (hasDb()) {
        const refreshed = await loadReactionsForMessageIds([message.id]);
        message.reactions = refreshed.get(message.id) || {};
      }
      const reactionsSnapshot = { ...message.reactions };
      pushChatEvent("reaction", {
        messageId: message.id,
        reactions: reactionsSnapshot
      });
      json(res, 200, { ok: true, messageId: message.id, reactions: reactionsSnapshot });
      return;
    }

    if (req.method === "POST" && pathname === "/chat/edit") {
      if (!requireChatStorage(res)) {
        return;
      }
      await refreshChatStateFromDb(false);
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      const messageId = Number(body.messageId || 0);
      const text = String(body.text || "").trim();
      if (!username || !messageId || !text) {
        json(res, 400, { ok: false, error: "username, messageId, and text required" });
        return;
      }
      const message = getMessageById(messageId);
      if (!message) {
        json(res, 404, { ok: false, error: "Message not found" });
        return;
      }
      if (message.username !== username) {
        json(res, 403, { ok: false, error: "Only sender can edit message" });
        return;
      }
      if (message.deleted) {
        json(res, 400, { ok: false, error: "Message was removed" });
        return;
      }
      if (Date.now() - Number(message.timestamp || 0) > CHAT_EDIT_WINDOW_MS) {
        json(res, 409, { ok: false, error: "Edit window expired (60 seconds)." });
        return;
      }
      message.text = text;
      message.editedAt = Date.now();
      if (hasDb()) {
        await dbQuery(
          "update chat_messages set text = $1, edited_at = $2 where id = $3",
          [message.text, message.editedAt, message.id]
        );
      }
      pushChatEvent("edit", {
        messageId: message.id,
        text: message.text,
        editedAt: message.editedAt
      });
      json(res, 200, { ok: true, messageId: message.id, text: message.text, editedAt: message.editedAt });
      return;
    }

    if (req.method === "POST" && pathname === "/chat/delete") {
      if (!requireChatStorage(res)) {
        return;
      }
      await refreshChatStateFromDb(false);
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      const messageId = Number(body.messageId || 0);
      const asHost = Boolean(body.asHost);
      if (!username || !messageId) {
        json(res, 400, { ok: false, error: "username and messageId required" });
        return;
      }
      const message = getMessageById(messageId);
      if (!message) {
        json(res, 404, { ok: false, error: "Message not found" });
        return;
      }
      const canDeleteOwn = message.username === username;
      const canDeleteAsHost = asHost && hostUsername === username;
      if (!canDeleteOwn && !canDeleteAsHost) {
        json(res, 403, { ok: false, error: "Not authorized to delete message" });
        return;
      }
      message.deleted = true;
      message.text = "";
      message.attachment = null;
      message.reactions = {};
      message.replyTo = null;
      message.editedAt = Date.now();
      if (hasDb()) {
        await dbQuery(
          `
            update chat_messages
            set deleted = true, text = '', attachment = null, reply_to = null, edited_at = $1
            where id = $2
          `,
          [message.editedAt, message.id]
        );
        await dbQuery("delete from chat_reactions where message_id = $1", [message.id]);
      }
      pushChatEvent("delete", {
        messageId: message.id,
        deletedBy: username,
        asHost: canDeleteAsHost
      });
      json(res, 200, { ok: true, messageId: message.id, deleted: true, message });
      return;
    }

    if (req.method === "POST" && pathname === "/chat/seen") {
      if (!requireChatStorage(res)) {
        return;
      }
      await refreshChatStateFromDb(false);
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      const seenUpTo = Number(body.seenUpTo || 0);
      if (!username || !seenUpTo) {
        json(res, 400, { ok: false, error: "username and seenUpTo required" });
        return;
      }
      const now = Date.now();
      chatMessages.forEach((message) => {
        if (message.id > seenUpTo || message.username === username) {
          return;
        }
        if (!message.seenBy || typeof message.seenBy !== "object") {
          message.seenBy = {};
        }
        message.seenBy[username] = now;
      });
      await upsertSeenDb(username, seenUpTo);
      pushChatEvent("seen", { username, seenUpTo, at: now });
      json(res, 200, { ok: true });
      return;
    }

    if (req.method === "GET" && pathname === "/chat/stream") {
      if (!requireChatStorage(res)) {
        return;
      }
      await refreshChatStateFromDb(false);
      const since = Number(url.searchParams.get("since") || 0);
      registerSseClient(req, res, since);
      return;
    }

    if (req.method === "GET" && pathname === "/chat/since") {
      if (!requireChatStorage(res)) {
        return;
      }
      await refreshChatStateFromDb(true);
      const since = Number(url.searchParams.get("since") || 0);
      // When DB is active, source chat stream from DB-hydrated messages only.
      // This avoids cross-instance in-memory event drift during rolling deploys.
      // Return the latest hydrated message state so read receipts/reactions/edits
      // are consistent even when requests hit different instances.
      if (hasDb()) {
        const events = chatEvents.filter((item) => item.id > since);
        // Always include a recent DB-backed snapshot so clients can recover
        // immediately after instance restarts (event cursor resets).
        const messages = chatMessages.slice(-200);
        json(res, 200, {
          ok: true,
          events,
          messages,
          lastEventId: chatEventSeq,
          typingUsers: getTypingUsers(),
          instanceId: INSTANCE_ID,
          syncMode: "events"
        });
        return;
      }
      const events = chatEvents.filter((item) => item.id > since);
      const messages = events.length
        ? events
            .filter((item) => item.type === "message" && item.payload && item.payload.message)
            .map((item) => item.payload.message)
        : chatMessages.filter((item) => item.id > since);
      json(res, 200, {
        ok: true,
        events,
        messages,
        lastEventId: chatEventSeq,
        typingUsers: getTypingUsers(),
        instanceId: INSTANCE_ID,
        syncMode: "events"
      });
      return;
    }

    if (req.method === "POST" && pathname === "/webrtc/signal") {
      const body = await parseBody(req);
      const from = String(body.from || "").trim().toLowerCase();
      const to = String(body.to || "").trim().toLowerCase();
      const type = String(body.type || "").trim().toLowerCase();
      const payload = body.payload;
      if (!from || !to || !type) {
        json(res, 400, { ok: false, error: "from, to, and type are required" });
        return;
      }
      const signal = {
        id: ++signalSeq,
        from,
        to,
        type,
        payload,
        timestamp: Date.now()
      };
      signals.push(signal);
      if (signals.length > MAX_SIGNALS) {
        signals.splice(0, signals.length - MAX_SIGNALS);
      }
      json(res, 200, { ok: true, id: signal.id });
      return;
    }

    if (req.method === "GET" && pathname === "/webrtc/signals") {
      const forUser = String(url.searchParams.get("for") || "").trim().toLowerCase();
      const since = Number(url.searchParams.get("since") || 0);
      if (!forUser) {
        json(res, 400, { ok: false, error: "for query param is required" });
        return;
      }
      const out = signals.filter((signal) => signal.id > since && signal.to === forUser);
      json(res, 200, { ok: true, signals: out });
      return;
    }

    if (req.method === "GET" && pathname === "/webrtc/ice") {
      try {
        const iceServers = await fetchTwilioIceServers();
        json(res, 200, { ok: true, provider: hasTwilioConfig() ? "twilio" : "stun-fallback", iceServers });
      } catch (error) {
        process.stderr.write(
          "[realtime] ICE config fetch failed, using fallback STUN: " +
            String(error && error.message ? error.message : error) +
            "\n"
        );
        json(res, 200, { ok: true, provider: "stun-fallback", iceServers: FALLBACK_ICE_SERVERS });
      }
      return;
    }

    if (req.method === "POST" && pathname === "/debug/media-log") {
      const body = await parseBody(req);
      const username = String(body.username || "").trim().toLowerCase();
      const entries = Array.isArray(body.entries) ? body.entries : [];
      const appended = appendMediaDebugLogs(username, entries, {
        sessionId: body.sessionId,
        source: body.source
      });
      json(res, 200, { ok: true, appended });
      return;
    }

    if (req.method === "GET" && pathname === "/debug/media-log") {
      pruneMediaDebugLogs(Date.now());
      const username = String(url.searchParams.get("username") || "").trim().toLowerCase();
      if (!username) {
        const users = Array.from(mediaDebugLogs.keys()).sort();
        json(res, 200, { ok: true, users });
        return;
      }
      const entries = mediaDebugLogs.get(username) || [];
      json(res, 200, { ok: true, username, count: entries.length, entries });
      return;
    }

    json(res, 404, { ok: false, error: "Not found" });
  } catch (error) {
    console.error("[realtime] request failed", {
      method: req.method,
      pathname,
      message: error && error.message ? error.message : String(error)
    });
    json(res, 500, { ok: false, error: "Server error" });
  }
});

server.listen(PORT, () => {
  process.stdout.write("TBR realtime server listening on http://localhost:" + PORT + "\n");
});

initDatabase().catch((error) => {
  process.stderr.write(
    "[realtime] Postgres init failed, using in-memory chat store: " +
      String(error && error.message ? error.message : error) +
      "\n"
  );
  scheduleDatabaseReconnect();
});
