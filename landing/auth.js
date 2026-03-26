(function () {
  const SESSION_KEY = "tbr_auth_session_v2";
  const STUDIO_SETTINGS_KEY = "tbr_studio_settings";
  const REALTIME_URL_KEY = "tbr_realtime_url";
  const ADMIN_SETTINGS_KEY = "tbr_admin_settings";
  const TRUSTED_DEVICE_KEY = "tbr_trusted_device_tokens";
  const DEFAULT_LOCAL_REALTIME_URL = "http://localhost:8787";
  const DEFAULT_PROD_REALTIME_URL = "https://realtime.turnbucklereport.com";

  function normalizeUsername(username) {
    return String(username || "").trim().toLowerCase();
  }

  function trimAlias(alias) {
    return String(alias || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 32);
  }

  function defaultProfile(username) {
    return {
      alias: "",
      useAlias: false,
      avatarDataUrl: "",
      updatedAt: "",
      username: normalizeUsername(username || "")
    };
  }

  function sanitizeProfile(profile, username) {
    const fallback = defaultProfile(username);
    const next = profile && typeof profile === "object" ? profile : {};
    const alias = trimAlias(next.alias || "");
    const useAlias = !!next.useAlias && !!alias;
    const avatarDataUrl =
      typeof next.avatarDataUrl === "string" && next.avatarDataUrl.startsWith("data:image/")
        ? next.avatarDataUrl
        : "";
    return {
      ...fallback,
      alias,
      useAlias,
      avatarDataUrl,
      updatedAt: String(next.updatedAt || "")
    };
  }

  function defaultPermissions(role) {
    const normalizedRole = String(role || "user").toLowerCase();
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

  function sanitizePermissions(permissions, role) {
    const defaults = defaultPermissions(role);
    const next = permissions && typeof permissions === "object" ? permissions : {};
    return {
      hostControl: next.hostControl !== undefined ? !!next.hostControl : defaults.hostControl,
      recordingControl: next.recordingControl !== undefined ? !!next.recordingControl : defaults.recordingControl,
      chatModeration: next.chatModeration !== undefined ? !!next.chatModeration : defaults.chatModeration,
      guestManagement: next.guestManagement !== undefined ? !!next.guestManagement : defaults.guestManagement,
      siteSettings: next.siteSettings !== undefined ? !!next.siteSettings : defaults.siteSettings
    };
  }

  function isLocalRuntimeHost() {
    const host = String((window.location && window.location.hostname) || "").toLowerCase();
    return host === "localhost" || host === "127.0.0.1" || host === "::1" || host.endsWith(".local");
  }

  function normalizeRealtimeBaseUrl(rawValue) {
    let value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }
    if (!/^https?:\/\//i.test(value)) {
      if (/^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(?:\/|$)/i.test(value)) {
        value = "http://" + value;
      } else {
        value = "https://" + value;
      }
    }
    try {
      const parsed = new URL(value);
      let path = String(parsed.pathname || "");
      if (path.toLowerCase() === "/health") {
        path = "";
      }
      const normalizedPath = path && path !== "/" ? path.replace(/\/+$/, "") : "";
      return parsed.origin + normalizedPath;
    } catch (error) {
      return "";
    }
  }

  function getDefaultRealtimeBaseUrl() {
    return isLocalRuntimeHost() ? DEFAULT_LOCAL_REALTIME_URL : DEFAULT_PROD_REALTIME_URL;
  }

  function isLocalRealtimeUrl(url) {
    return /^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(String(url || "").trim());
  }

  function getRealtimeBaseUrl() {
    const fallbackUrl = getDefaultRealtimeBaseUrl();
    const stored = normalizeRealtimeBaseUrl(localStorage.getItem(REALTIME_URL_KEY) || "");
    const activeUrl = isLocalRuntimeHost()
      ? (isLocalRealtimeUrl(stored) ? stored : fallbackUrl)
      : fallbackUrl;
    try {
      localStorage.setItem(REALTIME_URL_KEY, activeUrl);
    } catch (error) {
      // Ignore storage failures.
    }
    return activeUrl;
  }

  function readSessionRaw() {
    const fromSession = sessionStorage.getItem(SESSION_KEY);
    const fromLocal = localStorage.getItem(SESSION_KEY);
    return fromSession || fromLocal || "";
  }

  function getSession() {
    const raw = readSessionRaw();
    if (!raw) {
      return null;
    }
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return null;
      }
      const username = normalizeUsername(parsed.username || "");
      const token = String(parsed.token || "").trim();
      if (!username || !token) {
        return null;
      }
      return {
        username,
        token,
        role: (() => {
          const role = String(parsed.role || "user").toLowerCase();
          return role === "admin" || role === "guest" ? role : "user";
        })(),
        guest: !!parsed.guest,
        permissions: sanitizePermissions(parsed.permissions, parsed.role),
        remember: !!parsed.remember,
        signedInAt: String(parsed.signedInAt || ""),
        createdAt: String(parsed.createdAt || ""),
        profile: sanitizeProfile(parsed.profile, username)
      };
    } catch (error) {
      return null;
    }
  }

  function persistSession(session, remember) {
    const payload = {
      username: normalizeUsername(session.username || ""),
      token: String(session.token || ""),
      role: (() => {
        const role = String(session.role || "user").toLowerCase();
        return role === "admin" || role === "guest" ? role : "user";
      })(),
      guest: !!session.guest,
      permissions: sanitizePermissions(session.permissions, session.role),
      remember: !!remember,
      signedInAt: session.signedInAt || new Date().toISOString(),
      createdAt: String(session.createdAt || ""),
      profile: sanitizeProfile(session.profile, session.username)
    };
    const raw = JSON.stringify(payload);
    localStorage.setItem(SESSION_KEY, raw);
    if (remember) {
      sessionStorage.removeItem(SESSION_KEY);
    } else {
      sessionStorage.setItem(SESSION_KEY, raw);
    }
  }

  function getTrustedDeviceMap() {
    const raw = localStorage.getItem(TRUSTED_DEVICE_KEY);
    if (!raw) {
      return {};
    }
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
      return {};
    }
  }

  function getTrustedDeviceToken(username) {
    const normalized = normalizeUsername(username || "");
    if (!normalized) {
      return "";
    }
    const map = getTrustedDeviceMap();
    return String(map[normalized] || "");
  }

  function setTrustedDeviceToken(username, token) {
    const normalized = normalizeUsername(username || "");
    if (!normalized) {
      return;
    }
    const map = getTrustedDeviceMap();
    if (token) {
      map[normalized] = String(token);
    } else {
      delete map[normalized];
    }
    localStorage.setItem(TRUSTED_DEVICE_KEY, JSON.stringify(map));
  }

  async function apiRequest(path, options) {
    const session = getSession();
    const baseUrl = getRealtimeBaseUrl();
    const headers = {
      "Content-Type": "application/json"
    };
    if (session && session.token) {
      headers.Authorization = "Bearer " + session.token;
    }
    const requestOptions = {
      method: options && options.method ? options.method : "GET",
      headers,
      body: options && options.body ? JSON.stringify(options.body) : undefined
    };
    const fallbackUrl = getDefaultRealtimeBaseUrl();
    const canFallbackToDefault = baseUrl !== fallbackUrl;
    let response;
    try {
      response = await fetch(baseUrl + path, requestOptions);
    } catch (networkError) {
      if (!canFallbackToDefault) {
        throw networkError;
      }
      response = await fetch(fallbackUrl + path, requestOptions);
      try {
        localStorage.setItem(REALTIME_URL_KEY, fallbackUrl);
      } catch (error) {
        // Ignore storage write failures.
      }
    }
    if (!response.ok && canFallbackToDefault) {
      response = await fetch(fallbackUrl + path, requestOptions);
      try {
        localStorage.setItem(REALTIME_URL_KEY, fallbackUrl);
      } catch (error) {
        // Ignore storage write failures.
      }
    }
    let payload = null;
    try {
      payload = await response.json();
    } catch (error) {
      payload = null;
    }
    if (!response.ok) {
      const message =
        payload && typeof payload.error === "string"
          ? payload.error
          : "Request failed with status " + response.status;
      const out = new Error(message);
      out.status = response.status;
      out.payload = payload;
      throw out;
    }
    return payload || {};
  }

  function clearSession() {
    const session = getSession();
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    if (session && session.token) {
      fetch(getRealtimeBaseUrl() + "/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.token
        }
      }).catch(() => {
        // Ignore logout network errors.
      });
    }
  }

  async function createUser(username, password, phone) {
    try {
      const payload = await apiRequest("/auth/register", {
        method: "POST",
        body: {
          username: normalizeUsername(username),
          password: String(password || ""),
          phone: String(phone || "")
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to create user." };
      }
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to create user."
      };
    }
  }

  async function login(username, password, remember, turnstileToken, guestInviteToken) {
    try {
      const normalizedUsername = normalizeUsername(username);
      const payload = await apiRequest("/auth/login", {
        method: "POST",
        body: {
          username: normalizedUsername,
          password: String(password || ""),
          remember: !!remember,
          turnstileToken: String(turnstileToken || ""),
          guestInviteToken: String(guestInviteToken || ""),
          trustedDeviceToken: getTrustedDeviceToken(normalizedUsername)
        }
      });
      if (payload && payload.code === "TWO_FA_REQUIRED") {
        return {
          ok: false,
          code: "TWO_FA_REQUIRED",
          challengeToken: String(payload.challengeToken || ""),
          phoneHint: String(payload.phoneHint || "")
        };
      }
      if (payload && payload.code === "TWO_FA_ENROLL_REQUIRED") {
        return {
          ok: false,
          code: "TWO_FA_ENROLL_REQUIRED",
          challengeToken: String(payload.challengeToken || "")
        };
      }
      if (!payload || !payload.ok || !payload.session) {
        return { ok: false, code: "INVALID_CREDENTIALS", failedAttempts: 0 };
      }
      const remoteSession = payload.session;
      const usernameNormalized = normalizeUsername(remoteSession.username || username);
      persistSession(
        {
          username: usernameNormalized,
          token: String(remoteSession.token || ""),
          role: String(remoteSession.role || "user"),
          guest: !!remoteSession.guest,
          permissions: sanitizePermissions(remoteSession.permissions, remoteSession.role),
          signedInAt: new Date().toISOString(),
          createdAt: String(remoteSession.createdAt || ""),
          profile: sanitizeProfile(remoteSession.profile, usernameNormalized)
        },
        !!remember
      );
      return { ok: true, username: usernameNormalized };
    } catch (error) {
      const payload = error && error.payload ? error.payload : null;
      if (payload && payload.code === "LOCKED") {
        return { ok: false, code: "LOCKED", lockedUntil: Number(payload.lockedUntil || 0) || null };
      }
      if (payload && payload.code === "INVALID_CREDENTIALS") {
        return {
          ok: false,
          code: "INVALID_CREDENTIALS",
          failedAttempts: Number(payload.failedAttempts || 0)
        };
      }
      if (payload && (payload.code === "GUEST_INVITE_REQUIRED" || payload.code === "GUEST_DISABLED")) {
        return {
          ok: false,
          code: String(payload.code || "GUEST_INVITE_REQUIRED"),
          error: String(payload.error || "Guest invite is invalid or expired.")
        };
      }
      if (payload && payload.code === "MAINTENANCE_MODE") {
        return {
          ok: false,
          code: "MAINTENANCE_MODE",
          error: String(payload.error || "Studio maintenance is active.")
        };
      }
      if (payload && payload.code === "VERIFY_RATE_LIMITED") {
        return {
          ok: false,
          code: "VERIFY_RATE_LIMITED",
          error: String(payload.error || "Too many verification texts were requested. Please wait a few minutes and try again.")
        };
      }
      if (error && (error.status === 404 || error.status === 503 || error.status === 502 || error.status === 0)) {
        return {
          ok: false,
          code: "SERVICE_UNAVAILABLE",
          error: "Auth service is unavailable. Check realtime URL/deploy."
        };
      }
      if (payload && String(payload.code || "").startsWith("CAPTCHA_")) {
        return {
          ok: false,
          code: String(payload.code || "CAPTCHA_INVALID"),
          error: (payload && payload.error) || "Complete the security check."
        };
      }
      return {
        ok: false,
        code: "INVALID_CREDENTIALS",
        failedAttempts: 0,
        error: (payload && payload.error) || (error && error.message) || "Invalid credentials."
      };
    }
  }

  async function getAuthConfig() {
    try {
      const payload = await apiRequest("/auth/config", { method: "GET" });
      if (!payload || !payload.ok) {
        return { ok: true, turnstile: { enabled: false, siteKey: "" } };
      }
      const turnstile = payload.turnstile && typeof payload.turnstile === "object" ? payload.turnstile : {};
      return {
        ok: true,
        turnstile: {
          enabled: !!turnstile.enabled,
          siteKey: String(turnstile.siteKey || "")
        }
      };
    } catch (error) {
      return { ok: true, turnstile: { enabled: false, siteKey: "" } };
    }
  }

  function buildOauthStartUrl(provider) {
    const normalizedProvider = String(provider || "").trim().toLowerCase();
    if (!normalizedProvider) {
      return "";
    }
    const baseUrl = getRealtimeBaseUrl();
    const returnTo = window.location.origin + "/";
    return (
      baseUrl +
      "/auth/oauth/" +
      encodeURIComponent(normalizedProvider) +
      "/start?returnTo=" +
      encodeURIComponent(returnTo)
    );
  }

  function startGoogleSso() {
    const url = buildOauthStartUrl("google");
    if (!url) {
      return false;
    }
    window.location.href = url;
    return true;
  }

  function startFacebookSso() {
    const url = buildOauthStartUrl("facebook");
    if (!url) {
      return false;
    }
    window.location.href = url;
    return true;
  }

  async function completeOAuthRedirectIfPresent() {
    const hashRaw = String(window.location.hash || "");
    if (!hashRaw || hashRaw.length <= 1) {
      return { handled: false };
    }
    const hash = hashRaw.startsWith("#") ? hashRaw.slice(1) : hashRaw;
    const params = new URLSearchParams(hash);
    const oauthToken = String(params.get("oauth_token") || "").trim();
    const oauthError = String(params.get("oauth_error") || "").trim();
    const oauthErrorCode = String(params.get("oauth_code") || "").trim();
    if (!oauthToken && !oauthError) {
      return { handled: false };
    }
    if (window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    } else {
      window.location.hash = "";
    }
    if (oauthError) {
      return {
        handled: true,
        ok: false,
        code: oauthErrorCode || "OAUTH_FAILED",
        error: oauthError
      };
    }
    const baseUrl = getRealtimeBaseUrl();
    const response = await fetch(baseUrl + "/auth/session", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + oauthToken
      }
    });
    let payload = null;
    try {
      payload = await response.json();
    } catch (error) {
      payload = null;
    }
    if (!response.ok || !payload || !payload.ok || !payload.user) {
      return {
        handled: true,
        ok: false,
        code: "OAUTH_SESSION_INVALID",
        error: (payload && payload.error) || "Unable to restore social sign-in session."
      };
    }
    const user = payload.user;
    const usernameNormalized = normalizeUsername(user.username || "");
    persistSession(
      {
          username: usernameNormalized,
          token: oauthToken,
          role: String(user.role || "user"),
          guest: !!user.guest,
          permissions: sanitizePermissions(user.permissions, user.role),
          signedInAt: new Date().toISOString(),
        createdAt: String(user.createdAt || ""),
        profile: sanitizeProfile(user.profile, usernameNormalized)
      },
      true
    );
    return { handled: true, ok: true, username: usernameNormalized };
  }

  async function verifyTwoFactorLogin(challengeToken, code) {
    try {
      const payload = await apiRequest("/auth/login/2fa", {
        method: "POST",
        body: {
          challengeToken: String(challengeToken || ""),
          code: String(code || "")
        }
      });
      if (!payload || !payload.ok || !payload.session) {
        return { ok: false, code: "INVALID_2FA_CODE", error: "Invalid verification code." };
      }
      const remoteSession = payload.session;
      const usernameNormalized = normalizeUsername(remoteSession.username || "");
      const remember = !!remoteSession.remember;
      persistSession(
        {
          username: usernameNormalized,
          token: String(remoteSession.token || ""),
          role: String(remoteSession.role || "user"),
          guest: !!remoteSession.guest,
          permissions: sanitizePermissions(remoteSession.permissions, remoteSession.role),
          signedInAt: new Date().toISOString(),
          createdAt: String(remoteSession.createdAt || ""),
          profile: sanitizeProfile(remoteSession.profile, usernameNormalized)
        },
        remember
      );
      if (remoteSession.trustedDeviceToken) {
        setTrustedDeviceToken(usernameNormalized, String(remoteSession.trustedDeviceToken || ""));
      }
      return { ok: true, username: usernameNormalized };
    } catch (error) {
      const payload = error && error.payload ? error.payload : null;
      return {
        ok: false,
        code: (payload && payload.code) || "INVALID_2FA_CODE",
        error: (payload && payload.error) || error.message || "Unable to verify code."
      };
    }
  }

  async function startTwoFactorEnrollment(challengeToken, phone) {
    try {
      const payload = await apiRequest("/auth/login/2fa/enroll/start", {
        method: "POST",
        body: {
          challengeToken: String(challengeToken || ""),
          phone: String(phone || "")
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, code: "INVALID_PHONE", error: "Unable to start phone verification." };
      }
      return { ok: true, phoneHint: String(payload.phoneHint || "") };
    } catch (error) {
      const payload = error && error.payload ? error.payload : null;
      return {
        ok: false,
        code: (payload && payload.code) || "INVALID_PHONE",
        error: (payload && payload.error) || error.message || "Unable to start phone verification."
      };
    }
  }

  function requireSession() {
    return getSession();
  }

  async function refreshSessionFromServer() {
    const session = getSession();
    if (!session || !session.token) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const payload = await apiRequest("/auth/session", { method: "GET" });
      if (!payload || !payload.ok || !payload.user) {
        return { ok: false, error: "Session invalid." };
      }
      persistSession(
        {
          ...session,
          username: normalizeUsername(payload.user.username || session.username),
          role: String(payload.user.role || session.role || "user"),
          guest: !!payload.user.guest,
          permissions: sanitizePermissions(payload.user.permissions, payload.user.role || session.role),
          createdAt: String(payload.user.createdAt || session.createdAt || ""),
          profile: sanitizeProfile(payload.user.profile, payload.user.username || session.username)
        },
        session.remember
      );
      return { ok: true, session: getSession() };
    } catch (error) {
      const status = Number(error && error.status ? error.status : 0);
      if (status === 401 || status === 403) {
        clearSession();
        return { ok: false, invalid: true, error: "Session expired." };
      }
      return { ok: false, transient: true, error: "Session sync unavailable." };
    }
  }

  function getProfile(username) {
    const session = getSession();
    const normalized = normalizeUsername(username || "");
    if (!session || !session.username || normalized !== session.username) {
      return defaultProfile(normalized);
    }
    return sanitizeProfile(session.profile, session.username);
  }

  function getCurrentUserProfile() {
    const session = getSession();
    if (!session || !session.username) {
      return defaultProfile("");
    }
    return sanitizeProfile(session.profile, session.username);
  }

  async function saveCurrentUserProfile(nextProfile) {
    const session = getSession();
    if (!session || !session.username || !session.token) {
      return { ok: false, error: "Not signed in." };
    }
    const current = sanitizeProfile(session.profile, session.username);
    const merged = sanitizeProfile(
      {
        ...current,
        ...(nextProfile && typeof nextProfile === "object" ? nextProfile : {}),
        updatedAt: new Date().toISOString()
      },
      session.username
    );
    try {
      const payload = await apiRequest("/auth/profile", {
        method: "POST",
        body: {
          profile: merged
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to save profile." };
      }
      persistSession(
        {
          ...session,
          profile: sanitizeProfile(payload.profile, session.username)
        },
        session.remember
      );
      return { ok: true, profile: sanitizeProfile(payload.profile, session.username) };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to save profile."
      };
    }
  }

  function getDisplayName(username) {
    const normalized = normalizeUsername(username || "");
    if (!normalized) {
      return "";
    }
    const session = getSession();
    if (session && session.username === normalized) {
      const profile = sanitizeProfile(session.profile, normalized);
      if (profile.useAlias && profile.alias) {
        return profile.alias;
      }
    }
    return normalized;
  }

  function getIdentity(username) {
    const normalized = normalizeUsername(username || "");
    const session = getSession();
    const profile =
      session && session.username === normalized
        ? sanitizeProfile(session.profile, normalized)
        : defaultProfile(normalized);
    const displayName = profile.useAlias && profile.alias ? profile.alias : normalized;
    const initial = String(displayName || normalized || "U").trim().charAt(0).toUpperCase() || "U";
    return {
      username: normalized,
      displayName,
      alias: profile.alias,
      useAlias: profile.useAlias,
      avatarDataUrl: profile.avatarDataUrl || "",
      initial
    };
  }

  function getCurrentUserMeta() {
    const session = getSession();
    if (!session || !session.username) {
      return null;
    }
    return {
      username: session.username,
      createdAt: String(session.createdAt || ""),
      failedAttempts: 0,
      lockedUntil: null,
      role: session.role === "admin" ? "admin" : session.role === "guest" || session.guest ? "guest" : "user",
      guest: !!session.guest,
      permissions: sanitizePermissions(session.permissions, session.role)
    };
  }

  function getCurrentUserPermissions() {
    const session = getSession();
    if (!session) {
      return sanitizePermissions({}, "user");
    }
    return sanitizePermissions(session.permissions, session.role);
  }

  function hasPermission(permissionKey) {
    const session = getSession();
    if (!session) {
      return false;
    }
    if (session.role === "admin") {
      return true;
    }
    const permissions = sanitizePermissions(session.permissions, session.role);
    return !!permissions[String(permissionKey || "").trim()];
  }

  async function changePassword(currentPassword, nextPassword) {
    const session = getSession();
    if (!session || !session.username || !session.token) {
      return { ok: false, error: "Not signed in." };
    }
    const current = String(currentPassword || "");
    const next = String(nextPassword || "");
    if (!current || !next) {
      return { ok: false, error: "Current and new password are required." };
    }
    if (next.length < 8) {
      return { ok: false, error: "New password must be at least 8 characters." };
    }
    try {
      const payload = await apiRequest("/auth/password", {
        method: "POST",
        body: {
          currentPassword: current,
          nextPassword: next
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to change password." };
      }
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to change password."
      };
    }
  }

  function getUserRole(username) {
    const normalized = normalizeUsername(username || "");
    const session = getSession();
    if (!session || session.username !== normalized) {
      return "user";
    }
    if (session.role === "admin") {
      return "admin";
    }
    if (session.role === "guest" || session.guest) {
      return "guest";
    }
    return "user";
  }

  function isCurrentUserAdmin() {
    const session = getSession();
    return !!(session && session.role === "admin");
  }

  function isCurrentUserGuest() {
    const session = getSession();
    return !!(session && (session.role === "guest" || session.guest));
  }

  async function listUsersForAdmin() {
    const session = getSession();
    if (!session || (session.role !== "admin" && !hasPermission("guestManagement"))) {
      return { ok: false, error: "User management access required." };
    }
    try {
      const payload = await apiRequest("/auth/users", { method: "GET" });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to load users." };
      }
      const users = Array.isArray(payload.users) ? payload.users : [];
      return {
        ok: true,
        users: users.map((row) => ({
          username: normalizeUsername(row.username || ""),
          role: (() => {
            const role = String(row.role || "user").toLowerCase();
            return role === "admin" || role === "guest" ? role : "user";
          })(),
          guest: !!row.guest,
          guestEnabled: !!row.guestEnabled,
          permissions: sanitizePermissions(row.permissions, row.role),
          alias: String(row.alias || ""),
          useAlias: !!row.useAlias,
          createdAt: String(row.createdAt || ""),
          lastLoginAt: String(row.lastLoginAt || "")
        }))
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to load users."
      };
    }
  }

  async function updateUserRole(targetUsername, nextRole) {
    const session = getSession();
    if (!session || session.role !== "admin") {
      return { ok: false, error: "Admin access required." };
    }
    try {
      const payload = await apiRequest("/auth/users/role", {
        method: "POST",
        body: {
          username: normalizeUsername(targetUsername),
          role: String(nextRole || "user").toLowerCase() === "admin" ? "admin" : "user"
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Role update failed." };
      }
      if (normalizeUsername(targetUsername) === session.username) {
        persistSession({ ...session, role: payload.role || session.role }, session.remember);
      }
      return { ok: true, username: normalizeUsername(payload.username || targetUsername), role: payload.role || "user" };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Role update failed."
      };
    }
  }

  async function updateUserPermissions(targetUsername, permissions) {
    const session = getSession();
    if (!session || session.role !== "admin") {
      return { ok: false, error: "Admin access required." };
    }
    try {
      const payload = await apiRequest("/auth/users/permissions", {
        method: "POST",
        body: {
          username: normalizeUsername(targetUsername),
          permissions: sanitizePermissions(permissions, "user")
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Permission update failed." };
      }
      if (normalizeUsername(targetUsername) === session.username) {
        persistSession({ ...session, permissions: sanitizePermissions(payload.permissions, session.role) }, session.remember);
      }
      return {
        ok: true,
        username: normalizeUsername(payload.username || targetUsername),
        permissions: sanitizePermissions(payload.permissions, "user")
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Permission update failed."
      };
    }
  }

  async function adminResetUserPassword(targetUsername, newPassword) {
    const session = getSession();
    if (!session || session.role !== "admin") {
      return { ok: false, error: "Admin access required." };
    }
    const password = String(newPassword || "");
    if (!password || password.length < 8) {
      return { ok: false, error: "New password must be at least 8 characters." };
    }
    try {
      const payload = await apiRequest("/auth/users/password-reset", {
        method: "POST",
        body: {
          username: normalizeUsername(targetUsername),
          newPassword: password
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Password reset failed." };
      }
      return { ok: true, username: normalizeUsername(payload.username || targetUsername) };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Password reset failed."
      };
    }
  }

  async function adminDeleteUser(targetUsername) {
    const session = getSession();
    if (!session || session.role !== "admin") {
      return { ok: false, error: "Admin access required." };
    }
    const username = normalizeUsername(targetUsername || "");
    if (!username) {
      return { ok: false, error: "Username is required." };
    }
    try {
      const payload = await apiRequest("/auth/users/delete", {
        method: "POST",
        body: {
          username
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to delete user." };
      }
      if (username === session.username) {
        clearSession();
      }
      return { ok: true, username };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to delete user."
      };
    }
  }

  async function deleteCurrentUser() {
    const session = getSession();
    if (!session || !session.token) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const payload = await apiRequest("/auth/user/delete", {
        method: "POST",
        body: {}
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to delete account." };
      }
      clearSession();
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to delete account."
      };
    }
  }

  async function clearChatHistoryForAdmin() {
    const session = getSession();
    if (!session || session.role !== "admin") {
      return { ok: false, error: "Admin access required." };
    }
    try {
      const payload = await apiRequest("/chat/admin/clear", {
        method: "POST",
        body: {}
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to clear chat history." };
      }
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to clear chat history."
      };
    }
  }

  async function adminCreateGuestInvite() {
    const session = getSession();
    if (!session || (session.role !== "admin" && !hasPermission("guestManagement"))) {
      return { ok: false, error: "Guest management access required." };
    }
    try {
      const payload = await apiRequest("/auth/guest/invite", {
        method: "POST",
        body: {}
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to create guest invite." };
      }
      return {
        ok: true,
        username: normalizeUsername(payload.username || "guest"),
        inviteUrl: String(payload.inviteUrl || ""),
        password: String(payload.password || ""),
        expiresMinutes: Number(payload.expiresMinutes || 0)
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to create guest invite."
      };
    }
  }

  async function adminDisableGuest() {
    const session = getSession();
    if (!session || (session.role !== "admin" && !hasPermission("guestManagement"))) {
      return { ok: false, error: "Guest management access required." };
    }
    try {
      const payload = await apiRequest("/auth/guest/access", {
        method: "POST",
        body: { enabled: false }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to disable guest." };
      }
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to disable guest."
      };
    }
  }

  async function adminEnableGuest() {
    const session = getSession();
    if (!session || (session.role !== "admin" && !hasPermission("guestManagement"))) {
      return { ok: false, error: "Guest management access required." };
    }
    try {
      const payload = await apiRequest("/auth/guest/access", {
        method: "POST",
        body: { enabled: true }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to enable guest." };
      }
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to enable guest."
      };
    }
  }

  function getStoredAdminSettings() {
    const raw = localStorage.getItem(ADMIN_SETTINGS_KEY);
    const defaults = {
      guestInviteExpiryMinutes: 120,
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
      captchaReverifyDays: 30,
      googleLoginEnabled: true,
      facebookLoginEnabled: true,
      maintenanceModeEnabled: false,
      maintenanceMessage: "",
      supportContactEmail: "admin@turnbucklereport.com"
    };
    if (!raw) {
      return defaults;
    }
    try {
      return {
        ...defaults,
        ...JSON.parse(raw)
      };
    } catch (error) {
      return defaults;
    }
  }

  function cacheAdminSettings(settings) {
    const next = {
      ...getStoredAdminSettings(),
      ...(settings && typeof settings === "object" ? settings : {})
    };
    localStorage.setItem(ADMIN_SETTINGS_KEY, JSON.stringify(next));
    return next;
  }

  async function getAdminSettings() {
    const session = getSession();
    if (
      !session ||
      (session.role !== "admin" &&
        !hasPermission("siteSettings") &&
        !hasPermission("chatModeration") &&
        !hasPermission("guestManagement"))
    ) {
      return { ok: false, error: "Admin settings access required.", settings: getStoredAdminSettings() };
    }
    try {
      const payload = await apiRequest("/admin/settings", { method: "GET" });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to load admin settings.", settings: getStoredAdminSettings() };
      }
      return {
        ok: true,
        settings: cacheAdminSettings(payload.settings || {}),
        publicSettings: payload.publicSettings || {},
        options: {
          guestInviteExpiryOptions: Array.isArray(payload.guestInviteExpiryOptions) ? payload.guestInviteExpiryOptions : [],
          guestSessionMinutesOptions: Array.isArray(payload.guestSessionMinutesOptions) ? payload.guestSessionMinutesOptions : [],
          recordingMaxMinutesOptions: Array.isArray(payload.recordingMaxMinutesOptions) ? payload.recordingMaxMinutesOptions : [],
          recordingRetentionOptions: Array.isArray(payload.recordingRetentionOptions) ? payload.recordingRetentionOptions : [],
          chatImageMaxMbOptions: Array.isArray(payload.chatImageMaxMbOptions) ? payload.chatImageMaxMbOptions : [],
          chatVideoMaxMbOptions: Array.isArray(payload.chatVideoMaxMbOptions) ? payload.chatVideoMaxMbOptions : []
        }
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to load admin settings.",
        settings: getStoredAdminSettings()
      };
    }
  }

  async function saveAdminSettings(nextSettings) {
    const session = getSession();
    if (
      !session ||
      (session.role !== "admin" &&
        !hasPermission("siteSettings") &&
        !hasPermission("chatModeration") &&
        !hasPermission("guestManagement"))
    ) {
      return { ok: false, error: "Admin settings access required." };
    }
    try {
      const payload = await apiRequest("/admin/settings", {
        method: "POST",
        body: {
          settings: {
            ...getStoredAdminSettings(),
            ...(nextSettings && typeof nextSettings === "object" ? nextSettings : {})
          }
        }
      });
      if (!payload || !payload.ok) {
        return { ok: false, error: (payload && payload.error) || "Unable to save admin settings." };
      }
      return { ok: true, settings: cacheAdminSettings(payload.settings || {}) };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to save admin settings."
      };
    }
  }

  async function listAuditEvents(limit) {
    const session = getSession();
    if (!session || session.role !== "admin") {
      return { ok: false, error: "Admin access required.", events: [] };
    }
    try {
      const payload = await apiRequest("/admin/audit?limit=" + encodeURIComponent(String(limit || 50)), { method: "GET" });
      return {
        ok: !!(payload && payload.ok),
        events: Array.isArray(payload && payload.events) ? payload.events : []
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to load audit log.",
        events: []
      };
    }
  }

  async function exportChatForAdmin() {
    const session = getSession();
    if (!session || (session.role !== "admin" && !hasPermission("chatModeration"))) {
      return { ok: false, error: "Chat moderation access required." };
    }
    try {
      const payload = await apiRequest("/admin/chat/export", { method: "GET" });
      return {
        ok: !!(payload && payload.ok),
        messages: Array.isArray(payload && payload.messages) ? payload.messages : [],
        exportedAt: String((payload && payload.exportedAt) || "")
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to export chat."
      };
    }
  }

  async function runStudioAdminAction(action) {
    const session = getSession();
    if (!session || (session.role !== "admin" && !hasPermission("siteSettings"))) {
      return { ok: false, error: "Site settings access required." };
    }
    try {
      const payload = await apiRequest("/admin/studio/action", {
        method: "POST",
        body: {
          action: String(action || "")
        }
      });
      return {
        ok: !!(payload && payload.ok),
        action: String((payload && payload.action) || ""),
        state: payload && payload.state ? payload.state : null
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to run studio action."
      };
    }
  }

  async function listLibraryAssets(libraryKind, limit, showLibraryId) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in.", assets: [] };
    }
    try {
      const kind = String(libraryKind || "music").trim().toLowerCase() || "music";
      const safeLimit = Math.max(10, Math.min(250, Number(limit || 100) || 100));
      const showFilter = String(showLibraryId || "").trim();
      const params = new URLSearchParams();
      params.set("library", kind);
      params.set("limit", String(safeLimit));
      if (showFilter) {
        params.set("showLibraryId", showFilter);
      }
      const payload = await apiRequest(
        "/library/assets?" + params.toString(),
        { method: "GET" }
      );
      return {
        ok: !!(payload && payload.ok),
        libraryKind: String((payload && payload.libraryKind) || kind),
        showLibraryId: String((payload && payload.showLibraryId) || showFilter),
        assets: Array.isArray(payload && payload.assets) ? payload.assets : []
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to load library assets.",
        assets: []
      };
    }
  }

  async function listShowLibraries() {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in.", showLibraries: [] };
    }
    try {
      const payload = await apiRequest("/show-libraries", { method: "GET" });
      return {
        ok: !!(payload && payload.ok),
        showLibraries: Array.isArray(payload && payload.showLibraries) ? payload.showLibraries : []
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to load show libraries.",
        showLibraries: []
      };
    }
  }

  async function createShowLibrary(title) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const payload = await apiRequest("/show-libraries", {
        method: "POST",
        body: {
          title: String(title || "").trim()
        }
      });
      return {
        ok: !!(payload && payload.ok),
        showLibrary: payload && payload.showLibrary ? payload.showLibrary : null
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to create show library."
      };
    }
  }

  async function createLibraryAssetMeta(asset) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const payload = await apiRequest("/library/assets/meta", {
        method: "POST",
        body: asset && typeof asset === "object" ? asset : {}
      });
      return {
        ok: !!(payload && payload.ok),
        asset: payload && payload.asset ? payload.asset : null
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to save library metadata."
      };
    }
  }

  async function renameLibraryAsset(assetId, title) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const payload = await apiRequest("/library/assets/rename", {
        method: "POST",
        body: {
          assetId: String(assetId || "").trim(),
          title: String(title || "").trim()
        }
      });
      return {
        ok: !!(payload && payload.ok),
        asset: payload && payload.asset ? payload.asset : null
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to rename library asset."
      };
    }
  }

  async function deleteLibraryAsset(assetId) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const payload = await apiRequest("/library/assets/delete", {
        method: "POST",
        body: {
          assetId: String(assetId || "").trim()
        }
      });
      return {
        ok: !!(payload && payload.ok),
        asset: payload && payload.asset ? payload.asset : null
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to delete library asset."
      };
    }
  }

  async function requestMediaUpload(payload) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const response = await apiRequest("/media/presign-upload", {
        method: "POST",
        body: payload && typeof payload === "object" ? payload : {}
      });
      return {
        ok: !!(response && response.ok),
        uploadUrl: String((response && response.uploadUrl) || ""),
        uploadMethod: String((response && response.uploadMethod) || "PUT"),
        uploadHeaders: response && response.uploadHeaders ? response.uploadHeaders : {},
        asset: response && response.asset ? response.asset : null,
        storage: response && response.storage ? response.storage : null
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to start upload."
      };
    }
  }

  async function completeMediaUpload(assetId, updates) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const response = await apiRequest("/media/complete-upload", {
        method: "POST",
        body: {
          assetId: String(assetId || "").trim(),
          ...(updates && typeof updates === "object" ? updates : {})
        }
      });
      return {
        ok: !!(response && response.ok),
        asset: response && response.asset ? response.asset : null
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to complete upload."
      };
    }
  }

  async function uploadMediaBytes(assetId, file) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in." };
    }
    if (!assetId || !file) {
      return { ok: false, error: "Asset id and file are required." };
    }
    const baseUrl = getRealtimeBaseUrl();
    const fallbackUrl = getDefaultRealtimeBaseUrl();
    const canFallbackToDefault = baseUrl !== fallbackUrl;
    const buildRequest = (targetBaseUrl, signal) =>
      fetch(targetBaseUrl + "/media/upload-bytes?assetId=" + encodeURIComponent(String(assetId || "").trim()), {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.token,
          "Content-Type": file.type || "application/octet-stream"
        },
        body: file,
        signal
      });
    try {
      const controller = typeof AbortController === "function" ? new AbortController() : null;
      const timeoutId = controller
        ? window.setTimeout(() => {
            controller.abort();
          }, 12000)
        : 0;
      let response;
      try {
        response = await buildRequest(baseUrl, controller ? controller.signal : undefined);
      } catch (networkError) {
        if (!canFallbackToDefault) {
          throw networkError;
        }
        response = await buildRequest(fallbackUrl, controller ? controller.signal : undefined);
        try {
          localStorage.setItem(REALTIME_URL_KEY, fallbackUrl);
        } catch (error) {
          // Ignore storage write failures.
        }
      }
      if (!response.ok && canFallbackToDefault) {
        response = await buildRequest(fallbackUrl, controller ? controller.signal : undefined);
        try {
          localStorage.setItem(REALTIME_URL_KEY, fallbackUrl);
        } catch (error) {
          // Ignore storage write failures.
        }
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        return {
          ok: false,
          error: (payload && payload.error) || "Shared upload failed."
        };
      }
      return {
        ok: !!(payload && payload.ok),
        bytes: Number((payload && payload.bytes) || 0) || 0
      };
    } catch (error) {
      if (error && error.name === "AbortError") {
        return {
          ok: false,
          error: "Shared upload timed out."
        };
      }
      return {
        ok: false,
        error: error && error.message ? error.message : "Shared upload failed."
      };
    }
  }

  async function requestMediaDownload(assetId) {
    const session = getSession();
    if (!session) {
      return { ok: false, error: "Not signed in." };
    }
    try {
      const response = await apiRequest("/media/presign-download", {
        method: "POST",
        body: {
          assetId: String(assetId || "").trim()
        }
      });
      return {
        ok: !!(response && response.ok),
        downloadUrl: String((response && response.downloadUrl) || ""),
        asset: response && response.asset ? response.asset : null
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to load media asset."
      };
    }
  }

  async function startForgotPassword(username) {
    try {
      const payload = await apiRequest("/auth/forgot-password/start", {
        method: "POST",
        body: { username: normalizeUsername(username) }
      });
      return {
        ok: !!(payload && payload.ok),
        challengeToken: String((payload && payload.challengeToken) || ""),
        message: String((payload && payload.message) || "If this account is eligible, a verification code has been sent.")
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to start password reset.",
        code: (error && error.payload && error.payload.code) || ""
      };
    }
  }

  async function verifyForgotPasswordCode(challengeToken, code) {
    try {
      const payload = await apiRequest("/auth/forgot-password/verify", {
        method: "POST",
        body: {
          challengeToken: String(challengeToken || "").trim(),
          code: String(code || "").trim()
        }
      });
      return {
        ok: !!(payload && payload.ok),
        resetToken: String((payload && payload.resetToken) || "")
      };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Invalid verification code.",
        code: (error && error.payload && error.payload.code) || ""
      };
    }
  }

  async function resetForgotPassword(resetToken, newPassword) {
    try {
      const payload = await apiRequest("/auth/forgot-password/reset", {
        method: "POST",
        body: {
          resetToken: String(resetToken || "").trim(),
          newPassword: String(newPassword || "")
        }
      });
      return { ok: !!(payload && payload.ok) };
    } catch (error) {
      return {
        ok: false,
        error: (error && error.payload && error.payload.error) || error.message || "Unable to reset password.",
        code: (error && error.payload && error.payload.code) || ""
      };
    }
  }

  function getStudioSettings() {
    const raw = localStorage.getItem(STUDIO_SETTINGS_KEY);
    const defaults = {
      chatSoundEnabled: true,
      chatPulseEnabled: true,
      chatBadgeEnabled: true,
      chatAlertsDisabledAll: false,
      chatReadReceiptsEnabled: true,
      presenceVisible: true,
      reactionsEnabled: true,
      chatSelfBubbleTheme: "blue",
      recordingDefaultFormat: "video",
      recordingDefaultQuality: "standard",
      recordingNamePattern: "show-date",
      recordingDefaultCountdownSeconds: 3,
      recordingSafetyAutoStopMinutes: 0,
      recordingAutoSplitMinutes: 0,
      uiContainerMode: "dark",
      cameraAutoStart: false,
      cameraBackgroundBlurEnabled: false,
      cameraBackgroundMode: "off",
      cameraBackgroundImageDataUrl: "",
      cameraBackgroundImageName: "",
      preferredCameraId: "",
      preferredMicId: "",
      preferredSpeakerId: "",
      micEchoCancellation: true,
      micNoiseSuppression: true,
      micAutoGainControl: true,
      micPreset: "studio-safe",
      micInputMonitoringEnabled: false,
      micNoiseGateThresholdDb: -45,
      micLoudnessTargetPreset: "podcast-standard",
      micLimiterEnabled: true,
      micInputGainPercent: 100,
      usingHeadphones: false,
      pushToTalkEnabled: false
    };
    if (!raw) {
      return defaults;
    }
    try {
      const parsed = JSON.parse(raw);
      return {
        ...defaults,
        ...parsed
      };
    } catch (error) {
      return defaults;
    }
  }

  function saveStudioSettings(nextSettings) {
    const merged = {
      ...getStudioSettings(),
      ...(nextSettings && typeof nextSettings === "object" ? nextSettings : {})
    };
    if (!merged.cameraBackgroundMode) {
      merged.cameraBackgroundMode = merged.cameraBackgroundBlurEnabled ? "blur" : "off";
    }
    if (merged.cameraBackgroundMode === "blur") {
      merged.cameraBackgroundBlurEnabled = true;
    } else {
      merged.cameraBackgroundBlurEnabled = false;
    }
    if (!merged.cameraBackgroundImageDataUrl) {
      merged.cameraBackgroundImageName = "";
      if (merged.cameraBackgroundMode === "image") {
        merged.cameraBackgroundMode = "off";
      }
    }
    localStorage.setItem(STUDIO_SETTINGS_KEY, JSON.stringify(merged));
    return merged;
  }

  window.TBRAuth = {
    createUser,
    login,
    getAuthConfig,
    startGoogleSso,
    startFacebookSso,
    completeOAuthRedirectIfPresent,
    startTwoFactorEnrollment,
    verifyTwoFactorLogin,
    getSession,
    clearSession,
    requireSession,
    refreshSessionFromServer,
    getProfile,
    getCurrentUserProfile,
    saveCurrentUserProfile,
    getDisplayName,
    getIdentity,
    getCurrentUserMeta,
    getUserRole,
    isCurrentUserAdmin,
    isCurrentUserGuest,
    hasPermission,
    getCurrentUserPermissions,
    listUsersForAdmin,
    updateUserRole,
    updateUserPermissions,
    adminResetUserPassword,
    adminDeleteUser,
    adminCreateGuestInvite,
    adminEnableGuest,
    adminDisableGuest,
    startForgotPassword,
    verifyForgotPasswordCode,
    resetForgotPassword,
    getStoredAdminSettings,
    getAdminSettings,
    saveAdminSettings,
    listAuditEvents,
    exportChatForAdmin,
    runStudioAdminAction,
    listShowLibraries,
    createShowLibrary,
    listLibraryAssets,
    createLibraryAssetMeta,
    renameLibraryAsset,
    deleteLibraryAsset,
    requestMediaUpload,
    uploadMediaBytes,
    completeMediaUpload,
    requestMediaDownload,
    deleteCurrentUser,
    clearChatHistoryForAdmin,
    changePassword,
    getStudioSettings,
    saveStudioSettings
  };
})();
