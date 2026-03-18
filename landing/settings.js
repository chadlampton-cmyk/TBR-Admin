const chatReadReceiptsToggle = document.getElementById("chat-read-receipts-toggle");
const presenceVisibleToggle = document.getElementById("presence-visible-toggle");
const reactionsVisibleToggle = document.getElementById("reactions-visible-toggle");
const chatBubbleThemeSelect = document.getElementById("chat-bubble-theme-select");
const recordingFormatSelect = document.getElementById("recording-format-select");
const recordingQualitySelect = document.getElementById("recording-quality-select");
const recordingNamePatternSelect = document.getElementById("recording-name-pattern-select");
const recordingCountdownSecondsSelect = document.getElementById("recording-countdown-seconds-select");
const recordingAutoStopMinutesSelect = document.getElementById("recording-auto-stop-minutes-select");
const recordingAutoSplitMinutesSelect = document.getElementById("recording-auto-split-minutes-select");
const recordingFadeInDurationSecondsSelect = document.getElementById("recording-fade-in-duration-seconds-select");
const recordingFadeOutDurationSecondsSelect = document.getElementById("recording-fade-out-duration-seconds-select");
const recordingAutoFadeInStartSecondsSelect = document.getElementById("recording-auto-fade-in-start-seconds-select");
const recordingAutoFadeInDurationSecondsSelect = document.getElementById("recording-auto-fade-in-duration-seconds-select");
const recordingAutoFadeOutStartSecondsSelect = document.getElementById("recording-auto-fade-out-start-seconds-select");
const recordingAutoFadeOutDurationSecondsSelect = document.getElementById("recording-auto-fade-out-duration-seconds-select");
const containersLightToggle = document.getElementById("containers-light-toggle");
const containersModeLabel = document.getElementById("containers-mode-label");
const profileMenuEl = document.getElementById("profile-menu");
const profileMenuBtn = document.getElementById("profile-menu-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const profileAvatarEl = document.getElementById("profile-avatar");
const profileAvatarImgEl = document.getElementById("profile-avatar-img");
const profileUserEl = document.getElementById("profile-user");
const profileLogoutBtn = document.getElementById("profile-logout-btn");
const settingsBackLink = document.getElementById("settings-back-link");
const cameraAutoStartToggle = document.getElementById("camera-autostart-toggle");
const cameraBackgroundImageInput = document.getElementById("camera-background-image-input");
const cameraBackgroundImageClearBtn = document.getElementById("camera-background-image-clear-btn");
const cameraBackgroundImageStatus = document.getElementById("camera-background-image-status");
const cameraBackgroundImagePreviewWrap = document.getElementById("camera-background-image-preview-wrap");
const cameraBackgroundImagePreview = document.getElementById("camera-background-image-preview");
const cameraBackgroundImagePreviewName = document.getElementById("camera-background-image-preview-name");
const pushToTalkDefaultToggle = document.getElementById("push-to-talk-default-toggle");
const headphonesDefaultToggle = document.getElementById("headphones-default-toggle");
const micEchoDefaultToggle = document.getElementById("mic-echo-default-toggle");
const micNoiseDefaultToggle = document.getElementById("mic-noise-default-toggle");
const micAgcDefaultToggle = document.getElementById("mic-agc-default-toggle");
const micPresetSelect = document.getElementById("mic-preset-select");
const micAutoLevelingToggle = document.getElementById("mic-auto-leveling-toggle");
const micClipGuardToggle = document.getElementById("mic-clip-guard-toggle");
const micNoiseProfileSelect = document.getElementById("mic-noise-profile-select");
const micCheckWizardBtn = document.getElementById("mic-check-wizard-btn");
const micResetRecommendedBtn = document.getElementById("mic-reset-recommended-btn");
const micCheckWizardStatus = document.getElementById("mic-check-wizard-status");
const micInputMonitoringToggle = document.getElementById("mic-input-monitoring-toggle");
const micNoiseGateThresholdSelect = document.getElementById("mic-noise-gate-threshold-select");
const micLoudnessTargetSelect = document.getElementById("mic-loudness-target-select");
const cameraDefaultSelect = document.getElementById("camera-default-select");
const micDefaultSelect = document.getElementById("mic-default-select");
const speakerDefaultSelect = document.getElementById("speaker-default-select");
const detectDevicesBtn = document.getElementById("detect-devices-btn");
const refreshDevicesBtn = document.getElementById("refresh-devices-btn");
const deviceStatusMessage = document.getElementById("device-status-message");
const settingsMessage = document.getElementById("settings-message");
const realtimeUrlInput = document.getElementById("realtime-url-input");
const useLocalhostBtn = document.getElementById("use-localhost-btn");
const chatAlertsDisableAllToggle = document.getElementById("chat-alerts-disable-all-toggle");
const chatPulseToggle = document.getElementById("chat-pulse-toggle");
const chatSoundToggle = document.getElementById("chat-sound-toggle");
const chatBadgeToggle = document.getElementById("chat-badge-toggle");
const saveSettingsBtn = document.getElementById("save-settings-btn");
const clearChatHistoryBtn = document.getElementById("clear-chat-history-btn");
const settingsConfirmModal = document.getElementById("settings-confirm-modal");
const settingsConfirmBackdrop = document.getElementById("settings-confirm-backdrop");
const settingsConfirmTitle = document.getElementById("settings-confirm-title");
const settingsConfirmText = document.getElementById("settings-confirm-text");
const settingsConfirmCancelBtn = document.getElementById("settings-confirm-cancel-btn");
const settingsConfirmDeleteBtn = document.getElementById("settings-confirm-delete-btn");
const settingsPasswordModal = document.getElementById("settings-password-modal");
const settingsPasswordBackdrop = document.getElementById("settings-password-backdrop");
const settingsPasswordTitle = document.getElementById("settings-password-title");
const settingsPasswordText = document.getElementById("settings-password-text");
const settingsPasswordNewInput = document.getElementById("settings-password-new-input");
const settingsPasswordConfirmInput = document.getElementById("settings-password-confirm-input");
const settingsPasswordError = document.getElementById("settings-password-error");
const settingsPasswordCancelBtn = document.getElementById("settings-password-cancel-btn");
const settingsPasswordSaveBtn = document.getElementById("settings-password-save-btn");
const settingsTabButtons = Array.from(document.querySelectorAll("[data-settings-tab]"));
const settingsPanels = Array.from(document.querySelectorAll("[data-settings-panel]"));
const usersAdminList = document.getElementById("users-admin-list");
const adminOnlyNodes = Array.from(document.querySelectorAll("[data-admin-only='true']"));
const guestManageNodes = Array.from(document.querySelectorAll("[data-guest-manage='true']"));
const permissionNodes = Array.from(document.querySelectorAll("[data-permission]"));
const guestInviteBtn = document.getElementById("guest-invite-btn");
const guestDisableBtn = document.getElementById("guest-disable-btn");
const guestInviteStatus = document.getElementById("guest-invite-status");
const settingsIsEmbedded = new URLSearchParams(window.location.search).get("embed") === "1" || window.self !== window.top;

if (settingsIsEmbedded) {
  document.body.classList.add("settings-embed");
}

function closeEmbeddedSettings() {
  if (!settingsIsEmbedded) {
    return;
  }
  try {
    window.parent.postMessage({ type: "dfs-close-settings-modal" }, window.location.origin);
  } catch (error) {
    // Ignore cross-window messaging issues.
  }
}

if (settingsBackLink && settingsIsEmbedded) {
  settingsBackLink.textContent = "Close";
  settingsBackLink.addEventListener("click", (event) => {
    event.preventDefault();
    closeEmbeddedSettings();
  });
}
const guestInviteModal = document.getElementById("guest-invite-modal");
const guestInviteBackdrop = document.getElementById("guest-invite-backdrop");
const guestInviteLinkInput = document.getElementById("guest-invite-link-input");
const guestInviteCloseBtn = document.getElementById("guest-invite-close-btn");
const guestInviteCopyBtn = document.getElementById("guest-invite-copy-btn");
const guestAdminModal = document.getElementById("guest-admin-modal");
const guestAdminBackdrop = document.getElementById("guest-admin-backdrop");
const guestAdminCloseBtn = document.getElementById("guest-admin-close-btn");
const guestAdminCancelBtn = document.getElementById("guest-admin-cancel-btn");
const guestAdminSaveBtn = document.getElementById("guest-admin-save-btn");
const guestAdminName = document.getElementById("guest-admin-name");
const guestAdminAlias = document.getElementById("guest-admin-alias");
const guestAdminStatus = document.getElementById("guest-admin-status");
const guestAdminDisplayNameInput = document.getElementById("guest-admin-display-name-input");
const guestAdminInviteExpirySelect = document.getElementById("guest-admin-invite-expiry-select");
const guestAdminSessionMaxSelect = document.getElementById("guest-admin-session-max-select");
const userAdminModal = document.getElementById("user-admin-modal");
const userAdminBackdrop = document.getElementById("user-admin-backdrop");
const userAdminCloseBtn = document.getElementById("user-admin-close-btn");
const userAdminCancelBtn = document.getElementById("user-admin-cancel-btn");
const userAdminSaveBtn = document.getElementById("user-admin-save-btn");
const userAdminResetPasswordBtn = document.getElementById("user-admin-reset-password-btn");
const userAdminDeleteUserBtn = document.getElementById("user-admin-delete-user-btn");
const userAdminName = document.getElementById("user-admin-name");
const userAdminAlias = document.getElementById("user-admin-alias");
const userAdminCreated = document.getElementById("user-admin-created");
const userAdminLastLogin = document.getElementById("user-admin-last-login");
const userAdminRoleSelect = document.getElementById("user-admin-role-select");
const userAdminRoleHelp = document.getElementById("user-admin-role-help");
const userAdminToggleStack = document.querySelector(".user-admin-toggle-stack");
const userAdminPermissionInputs = Array.from(document.querySelectorAll("[data-user-admin-permission]"));
const adminAllowUserHostToggle = document.getElementById("admin-allow-user-host-toggle");
const adminAllowUserRecordingToggle = document.getElementById("admin-allow-user-recording-toggle");
const adminMuteAllBtn = document.getElementById("admin-mute-all-btn");
const adminForceOffAirBtn = document.getElementById("admin-force-offair-btn");
const adminClearHostBtn = document.getElementById("admin-clear-host-btn");
const adminClearSpotlightBtn = document.getElementById("admin-clear-spotlight-btn");
const adminRecordingMaxMinutesSelect = document.getElementById("admin-recording-max-minutes-select");
const adminRecordingRetentionSelect = document.getElementById("admin-recording-retention-select");
const adminRecordingDownloadAccessSelect = document.getElementById("admin-recording-download-access-select");
const adminRecordingLibraryVisibilitySelect = document.getElementById("admin-recording-library-visibility-select");
const adminChatAttachmentsToggle = document.getElementById("admin-chat-attachments-toggle");
const adminChatVideoAttachmentsToggle = document.getElementById("admin-chat-video-attachments-toggle");
const adminChatReactionsToggle = document.getElementById("admin-chat-reactions-toggle");
const adminChatImageMaxSelect = document.getElementById("admin-chat-image-max-select");
const adminChatVideoMaxSelect = document.getElementById("admin-chat-video-max-select");
const adminExportChatBtn = document.getElementById("admin-export-chat-btn");
const adminForceTwoFaToggle = document.getElementById("admin-force-2fa-toggle");
const adminCaptchaReverifyDaysSelect = document.getElementById("admin-captcha-reverify-days-select");
const adminGoogleLoginToggle = document.getElementById("admin-google-login-toggle");
const adminFacebookLoginToggle = document.getElementById("admin-facebook-login-toggle");
const adminMaintenanceModeToggle = document.getElementById("admin-maintenance-mode-toggle");
const adminMaintenanceMessageInput = document.getElementById("admin-maintenance-message-input");
const adminSupportContactInput = document.getElementById("admin-support-contact-input");
const adminRefreshHealthBtn = document.getElementById("admin-refresh-health-btn");
const adminHealthOutput = document.getElementById("admin-health-output");
const adminRefreshAuditBtn = document.getElementById("admin-refresh-audit-btn");
const adminAuditList = document.getElementById("admin-audit-list");
const aboutBuildNumber = document.getElementById("about-build-number");
const aboutBuildStatus = document.getElementById("about-build-status");
const aboutTermsBtn = document.getElementById("about-terms-btn");
const aboutCookiesBtn = document.getElementById("about-cookies-btn");
const aboutPrivacyBtn = document.getElementById("about-privacy-btn");
const aboutTermsModal = document.getElementById("about-terms-modal");
const aboutCookiesModal = document.getElementById("about-cookies-modal");
const aboutPrivacyModal = document.getElementById("about-privacy-modal");
const aboutTermsBackdrop = document.getElementById("about-terms-backdrop");
const aboutCookiesBackdrop = document.getElementById("about-cookies-backdrop");
const aboutPrivacyBackdrop = document.getElementById("about-privacy-backdrop");
const aboutTermsCloseBtn = document.getElementById("about-terms-close-btn");
const aboutCookiesCloseBtn = document.getElementById("about-cookies-close-btn");
const aboutPrivacyCloseBtn = document.getElementById("about-privacy-close-btn");

const REALTIME_URL_KEY = "tbr_realtime_url";
const LOCAL_REALTIME_URL = "http://localhost:8787";
const PRODUCTION_REALTIME_URL = "https://realtime.turnbucklereport.com";
const DEFAULT_REALTIME_URL = PRODUCTION_REALTIME_URL;
const NOISE_PROFILE_TO_VALUES = {
  off: { micNoiseSuppression: false, micNoiseGateThresholdDb: -100 },
  low: { micNoiseSuppression: true, micNoiseGateThresholdDb: -55 },
  medium: { micNoiseSuppression: true, micNoiseGateThresholdDb: -45 },
  high: { micNoiseSuppression: true, micNoiseGateThresholdDb: -35 }
};
const MIC_PRESET_MAP = {
  "studio-safe": {
    micPreset: "studio-safe",
    micAutoGainControl: true,
    micLimiterEnabled: true,
    micEchoCancellation: true,
    micInputMonitoringEnabled: false,
    micLoudnessTargetPreset: "podcast-standard",
    ...NOISE_PROFILE_TO_VALUES.medium
  },
  "noisy-room": {
    micPreset: "noisy-room",
    micAutoGainControl: true,
    micLimiterEnabled: true,
    micEchoCancellation: true,
    micInputMonitoringEnabled: false,
    micLoudnessTargetPreset: "podcast-standard",
    ...NOISE_PROFILE_TO_VALUES.high
  },
  "broadcast-punch": {
    micPreset: "broadcast-punch",
    micAutoGainControl: false,
    micLimiterEnabled: true,
    micEchoCancellation: true,
    micInputMonitoringEnabled: false,
    micLoudnessTargetPreset: "broadcast-loud",
    ...NOISE_PROFILE_TO_VALUES.low
  },
  "natural-voice": {
    micPreset: "natural-voice",
    micAutoGainControl: false,
    micLimiterEnabled: true,
    micEchoCancellation: true,
    micInputMonitoringEnabled: false,
    micLoudnessTargetPreset: "natural",
    ...NOISE_PROFILE_TO_VALUES.low
  }
};

function populateNumericSettingsSelect(select, min, max, suffix) {
  if (!select) {
    return;
  }
  const labelSuffix = String(suffix || "").trim();
  select.innerHTML = "";
  for (let value = min; value <= max; value += 1) {
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = String(value) + (labelSuffix ? " " + labelSuffix : "");
    select.appendChild(option);
  }
}

function getClampedSettingsSelectValue(select, min, max, fallback) {
  const parsed = Number(select && select.value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, Math.round(parsed)));
}

function normalizeRealtimeBaseUrl(rawValue) {
  let value = String(rawValue || "").trim();
  if (!value) {
    return DEFAULT_REALTIME_URL;
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
    return DEFAULT_REALTIME_URL;
  }
}

async function sendPresenceLeaveOnLogout() {
  const baseUrl = normalizeRealtimeBaseUrl(localStorage.getItem(REALTIME_URL_KEY) || getDefaultRealtimeBaseUrl());
  const payload = {
    username: session.username,
    displayName: sessionIdentity.displayName || session.username
  };
  try {
    await fetch(baseUrl + "/presence/leave", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true
    });
  } catch (error) {
    // Ignore network errors during logout.
  }
}

function getDefaultRealtimeBaseUrl() {
  return isLocalHostRuntime() ? LOCAL_REALTIME_URL : PRODUCTION_REALTIME_URL;
}

function isLocalHostRuntime() {
  const host = String(window.location.hostname || "").toLowerCase();
  return host === "localhost" || host === "127.0.0.1" || host === "::1" || host.endsWith(".local");
}

function isLocalRealtimeUrl(url) {
  return /^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(String(url || "").trim());
}

function shouldPromoteToDefaultUrl(currentUrl) {
  const normalized = normalizeRealtimeBaseUrl(currentUrl || "");
  if (isLocalHostRuntime()) {
    return !isLocalRealtimeUrl(normalized);
  }
  return normalized !== PRODUCTION_REALTIME_URL;
}

function getActiveRealtimeBaseUrl() {
  const storedRealtime = localStorage.getItem(REALTIME_URL_KEY);
  return shouldPromoteToDefaultUrl(storedRealtime)
    ? getDefaultRealtimeBaseUrl()
    : normalizeRealtimeBaseUrl(storedRealtime || getDefaultRealtimeBaseUrl());
}

function setAboutModalOpen(modal, open) {
  if (!modal) {
    return;
  }
  const isOpen = !!open;
  modal.classList.toggle("hidden", !isOpen);
  modal.setAttribute("aria-hidden", isOpen ? "false" : "true");
}

function closeAllAboutModals() {
  setAboutModalOpen(aboutTermsModal, false);
  setAboutModalOpen(aboutCookiesModal, false);
  setAboutModalOpen(aboutPrivacyModal, false);
}

const session = window.TBRAuth.requireSession();
if (!session) {
  window.location.replace("./");
}
const isAdminUser = typeof window.TBRAuth.isCurrentUserAdmin === "function" && window.TBRAuth.isCurrentUserAdmin();
const isGuestUser = typeof window.TBRAuth.isCurrentUserGuest === "function" && window.TBRAuth.isCurrentUserGuest();
const initialSessionRole =
  session && session.role === "admin" ? "admin" : session && session.role === "guest" ? "guest" : "user";
const SESSION_SYNC_MS = 5000;
let sessionSyncTimer = null;
let sessionSyncInFlight = false;
let adminUsersState = [];
let activeUserAdminUsername = "";

const realGetStudioSettings = window.TBRAuth.getStudioSettings.bind(window.TBRAuth);
const realSaveStudioSettings = window.TBRAuth.saveStudioSettings.bind(window.TBRAuth);
let draftStudioSettings = { ...realGetStudioSettings() };
if (!draftStudioSettings.uiContainerMode) {
  draftStudioSettings.uiContainerMode = "dark";
}

window.TBRAuth.getStudioSettings = function getDraftStudioSettings() {
  return { ...draftStudioSettings };
};

window.TBRAuth.saveStudioSettings = function saveDraftStudioSettings(nextSettings) {
  draftStudioSettings = {
    ...draftStudioSettings,
    ...(nextSettings && typeof nextSettings === "object" ? nextSettings : {})
  };
  return { ...draftStudioSettings };
};

const sessionIdentity = window.TBRAuth.getIdentity(session.username);
profileUserEl.textContent =
  sessionIdentity.displayName !== sessionIdentity.username
    ? sessionIdentity.displayName + " (@" + sessionIdentity.username + ")"
    : sessionIdentity.username;
if (isGuestUser && profileDropdown) {
  const profileLinks = Array.from(profileDropdown.querySelectorAll('a[href*="profile"]'));
  profileLinks.forEach((link) => link.classList.add("hidden"));
}
if (sessionIdentity.avatarDataUrl) {
  profileAvatarEl.textContent = "";
  if (profileAvatarImgEl) {
    profileAvatarImgEl.src = sessionIdentity.avatarDataUrl;
    profileAvatarImgEl.classList.remove("hidden");
  }
} else {
  if (profileAvatarImgEl) {
    profileAvatarImgEl.removeAttribute("src");
    profileAvatarImgEl.classList.add("hidden");
  }
  profileAvatarEl.textContent = sessionIdentity.initial || "U";
}

function setMenuOpen(open) {
  profileDropdown.classList.toggle("hidden", !open);
  profileMenuBtn.setAttribute("aria-expanded", open ? "true" : "false");
}

function stopSessionSyncLoop() {
  if (sessionSyncTimer) {
    window.clearInterval(sessionSyncTimer);
    sessionSyncTimer = null;
  }
}

async function syncSessionState() {
  if (sessionSyncInFlight) {
    return;
  }
  if (typeof window.TBRAuth.refreshSessionFromServer !== "function") {
    return;
  }
  sessionSyncInFlight = true;
  try {
    const result = await window.TBRAuth.refreshSessionFromServer();
    if (!result || result.invalid || (!result.ok && !result.transient) || (result.ok && !result.session)) {
      stopSessionSyncLoop();
      window.location.replace("./");
      return;
    }
    const latestRole =
      result.session.role === "admin" ? "admin" : result.session.role === "guest" ? "guest" : "user";
    if (latestRole !== initialSessionRole) {
      stopSessionSyncLoop();
      window.location.reload();
    }
  } finally {
    sessionSyncInFlight = false;
  }
}

function startSessionSyncLoop() {
  stopSessionSyncLoop();
  sessionSyncTimer = window.setInterval(() => {
    syncSessionState().catch(() => {
      // Ignore transient sync errors.
    });
  }, SESSION_SYNC_MS);
}

function setMessage(text) {
  settingsMessage.textContent = text;
  settingsMessage.classList.remove("hidden");
  settingsMessage.classList.remove("error");
  settingsMessage.classList.add("success");
}

function setErrorMessage(text) {
  settingsMessage.textContent = text;
  settingsMessage.classList.remove("hidden");
  settingsMessage.classList.remove("success");
  settingsMessage.classList.add("error");
}

function clearSettingsMessage() {
  settingsMessage.textContent = "";
  settingsMessage.classList.add("hidden");
  settingsMessage.classList.remove("success", "error");
}

function getFallbackAdminSettings() {
  return typeof window.TBRAuth.getStoredAdminSettings === "function"
    ? window.TBRAuth.getStoredAdminSettings()
    : {
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
}

document.addEventListener(
  "click",
  (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target || settingsMessage.classList.contains("hidden")) {
      return;
    }
    if (target.closest("#save-settings-btn")) {
      return;
    }
    if (target.closest("#settings-message")) {
      return;
    }
    clearSettingsMessage();
  },
  true
);

document.addEventListener(
  "focusin",
  (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target || settingsMessage.classList.contains("hidden")) {
      return;
    }
    if (target.closest("#save-settings-btn") || target.closest("#settings-message")) {
      return;
    }
    clearSettingsMessage();
  },
  true
);

function getAdminSettingsDraft() {
  if (!adminSettingsState) {
    adminSettingsState = { ...getFallbackAdminSettings() };
  }
  return { ...adminSettingsState };
}

function updateAdminSettingsDraft(partial) {
  adminSettingsState = {
    ...getAdminSettingsDraft(),
    ...(partial && typeof partial === "object" ? partial : {})
  };
  return getAdminSettingsDraft();
}

function applyAdminSettingsToControls(settings) {
  const next = settings || getAdminSettingsDraft();
  adminSettingsState = { ...next };
  if (guestAdminInviteExpirySelect) guestAdminInviteExpirySelect.value = String(next.guestInviteExpiryMinutes || 120);
  if (guestAdminSessionMaxSelect) guestAdminSessionMaxSelect.value = String(next.guestMaxSessionMinutes || 120);
  if (guestAdminDisplayNameInput) guestAdminDisplayNameInput.value = String(next.guestDisplayName || "Guest");
  if (guestAdminAlias) guestAdminAlias.textContent = "Display name: " + String(next.guestDisplayName || "Guest");
  if (guestAdminStatus) guestAdminStatus.textContent = "Guest access: " + (guestEnabledState ? "Enabled" : "Disabled");
  if (adminAllowUserHostToggle) adminAllowUserHostToggle.checked = next.allowUserHostControl !== false;
  if (adminAllowUserRecordingToggle) adminAllowUserRecordingToggle.checked = next.allowUserRecordingControl !== false;
  if (adminRecordingMaxMinutesSelect) adminRecordingMaxMinutesSelect.value = String(next.recordingMaxMinutes || 180);
  if (adminRecordingRetentionSelect) adminRecordingRetentionSelect.value = String(next.recordingRetentionDays || 30);
  if (adminRecordingDownloadAccessSelect) adminRecordingDownloadAccessSelect.value = String(next.recordingDownloadAccess || "host-admin");
  if (adminRecordingLibraryVisibilitySelect) adminRecordingLibraryVisibilitySelect.value = String(next.recordingLibraryVisibility || "admin-only");
  if (adminChatAttachmentsToggle) adminChatAttachmentsToggle.checked = next.chatAttachmentsEnabled !== false;
  if (adminChatVideoAttachmentsToggle) adminChatVideoAttachmentsToggle.checked = next.chatVideoAttachmentsEnabled !== false;
  if (adminChatReactionsToggle) adminChatReactionsToggle.checked = next.chatReactionsEnabled !== false;
  if (adminChatImageMaxSelect) adminChatImageMaxSelect.value = String(next.chatImageMaxMb || 8);
  if (adminChatVideoMaxSelect) adminChatVideoMaxSelect.value = String(next.chatVideoMaxMb || 20);
  if (adminForceTwoFaToggle) adminForceTwoFaToggle.checked = !!next.forceTwoFaAllUsers;
  if (adminCaptchaReverifyDaysSelect) adminCaptchaReverifyDaysSelect.value = String(next.captchaReverifyDays || 30);
  if (adminGoogleLoginToggle) adminGoogleLoginToggle.checked = next.googleLoginEnabled !== false;
  if (adminFacebookLoginToggle) adminFacebookLoginToggle.checked = next.facebookLoginEnabled !== false;
  if (adminMaintenanceModeToggle) adminMaintenanceModeToggle.checked = !!next.maintenanceModeEnabled;
  if (adminMaintenanceMessageInput) adminMaintenanceMessageInput.value = String(next.maintenanceMessage || "");
  if (adminSupportContactInput) adminSupportContactInput.value = String(next.supportContactEmail || "");
}

function collectAdminSettingsFromControls() {
  return {
    allowUserHostControl: !!(adminAllowUserHostToggle && adminAllowUserHostToggle.checked),
    allowUserRecordingControl: !!(adminAllowUserRecordingToggle && adminAllowUserRecordingToggle.checked),
    recordingMaxMinutes: Number(adminRecordingMaxMinutesSelect && adminRecordingMaxMinutesSelect.value ? adminRecordingMaxMinutesSelect.value : 180),
    recordingRetentionDays: Number(adminRecordingRetentionSelect && adminRecordingRetentionSelect.value ? adminRecordingRetentionSelect.value : 30),
    recordingDownloadAccess: String(adminRecordingDownloadAccessSelect && adminRecordingDownloadAccessSelect.value ? adminRecordingDownloadAccessSelect.value : "host-admin"),
    recordingLibraryVisibility: String(adminRecordingLibraryVisibilitySelect && adminRecordingLibraryVisibilitySelect.value ? adminRecordingLibraryVisibilitySelect.value : "admin-only"),
    chatAttachmentsEnabled: !!(adminChatAttachmentsToggle && adminChatAttachmentsToggle.checked),
    chatVideoAttachmentsEnabled: !!(adminChatVideoAttachmentsToggle && adminChatVideoAttachmentsToggle.checked),
    chatImageMaxMb: Number(adminChatImageMaxSelect && adminChatImageMaxSelect.value ? adminChatImageMaxSelect.value : 8),
    chatVideoMaxMb: Number(adminChatVideoMaxSelect && adminChatVideoMaxSelect.value ? adminChatVideoMaxSelect.value : 20),
    chatReactionsEnabled: !!(adminChatReactionsToggle && adminChatReactionsToggle.checked),
    forceTwoFaAllUsers: !!(adminForceTwoFaToggle && adminForceTwoFaToggle.checked),
    captchaReverifyDays: Number(adminCaptchaReverifyDaysSelect && adminCaptchaReverifyDaysSelect.value ? adminCaptchaReverifyDaysSelect.value : 30),
    googleLoginEnabled: !!(adminGoogleLoginToggle && adminGoogleLoginToggle.checked),
    facebookLoginEnabled: !!(adminFacebookLoginToggle && adminFacebookLoginToggle.checked),
    maintenanceModeEnabled: !!(adminMaintenanceModeToggle && adminMaintenanceModeToggle.checked),
    maintenanceMessage: String(adminMaintenanceMessageInput && adminMaintenanceMessageInput.value ? adminMaintenanceMessageInput.value : "").trim(),
    supportContactEmail: String(adminSupportContactInput && adminSupportContactInput.value ? adminSupportContactInput.value : "").trim()
  };
}

function collectGuestSettingsFromControls() {
  return {
    guestInviteExpiryMinutes: Number(
      guestAdminInviteExpirySelect && guestAdminInviteExpirySelect.value ? guestAdminInviteExpirySelect.value : 120
    ),
    guestMaxSessionMinutes: Number(
      guestAdminSessionMaxSelect && guestAdminSessionMaxSelect.value ? guestAdminSessionMaxSelect.value : 120
    ),
    guestDisplayName: String(
      guestAdminDisplayNameInput && guestAdminDisplayNameInput.value ? guestAdminDisplayNameInput.value : "Guest"
    ).trim()
  };
}

async function loadAdminSettingsState() {
  if (
    (!isAdminUser && !canCurrentUserManageSite() && !canCurrentUserModerateChat() && !canCurrentUserManageGuests()) ||
    typeof window.TBRAuth.getAdminSettings !== "function"
  ) {
    return;
  }
  const result = await window.TBRAuth.getAdminSettings();
  adminSettingsState = { ...(result.settings || getFallbackAdminSettings()) };
  if (result.options) {
    adminSettingsOptions = {
      ...adminSettingsOptions,
      ...result.options
    };
  }
  applyAdminSettingsToControls(adminSettingsState);
}

async function refreshDiagnostics() {
  if ((!isAdminUser && !canCurrentUserManageSite()) || !adminHealthOutput) {
    return;
  }
  adminHealthOutput.innerHTML = "<p class='settings-help'>Loading diagnostics...</p>";
  try {
    const response = await fetch(getActiveRealtimeBaseUrl() + "/health", { cache: "no-store" });
    const payload = await response.json();
    const serviceOnline = !!(payload && payload.ok);
    const databaseOnline = !!(payload && payload.dbConfigured && payload.dbReady);
    const maintenanceEnabled = !!(payload && payload.maintenanceModeEnabled);
    const storageMode = String((payload && payload.storageMode) || "unknown");
    const turnProvider = String((payload && payload.turnProvider) || "unconfigured");
    const verifyProvider = String((payload && payload.verifyProvider) || "unconfigured");
    const captchaProvider = String((payload && payload.captchaProvider) || "unconfigured");
    const buildLabel = String((payload && payload.build) || "Unknown");
    const instanceLabel = String((payload && payload.instanceId) || "Unknown");
    const dbLabel = String((payload && payload.dbLabel) || "Unknown");
    const healthCards = [
      {
        label: "Backend",
        value: serviceOnline ? "Online" : "Offline",
        tone: serviceOnline ? "online" : "offline",
        detail: serviceOnline ? "Realtime service is responding normally." : "Realtime service is not responding."
      },
      {
        label: "Database",
        value: databaseOnline ? "Connected" : payload && payload.dbConfigured ? "Disconnected" : "Not Configured",
        tone: databaseOnline ? "online" : payload && payload.dbConfigured ? "offline" : "neutral",
        detail: databaseOnline ? "Primary database is available." : "Chat persistence may be unavailable."
      },
      {
        label: "Storage",
        value: storageMode === "db" ? "Postgres" : storageMode === "memory" ? "Memory Only" : storageMode,
        tone: storageMode === "db" ? "online" : storageMode === "memory" ? "warning" : "neutral",
        detail: storageMode === "db" ? "Messages are stored persistently." : "Messages are not using full database persistence."
      },
      {
        label: "TURN Service",
        value: turnProvider === "twilio" ? "Twilio Active" : "Fallback",
        tone: turnProvider === "twilio" ? "online" : "warning",
        detail: turnProvider === "twilio" ? "Relay service is ready for tougher network conditions." : "Fallback networking only."
      },
      {
        label: "SMS Verify",
        value: verifyProvider === "twilio-verify" ? "Active" : "Unavailable",
        tone: verifyProvider === "twilio-verify" ? "online" : "offline",
        detail: verifyProvider === "twilio-verify" ? "Login verification texts are available." : "SMS verification is not configured."
      },
      {
        label: "Captcha",
        value: captchaProvider === "cloudflare-turnstile" ? "Active" : "Unavailable",
        tone: captchaProvider === "cloudflare-turnstile" ? "online" : "offline",
        detail: captchaProvider === "cloudflare-turnstile" ? "Bot protection is enabled." : "Captcha protection is not configured."
      },
      {
        label: "Maintenance",
        value: maintenanceEnabled ? "Enabled" : "Off",
        tone: maintenanceEnabled ? "warning" : "online",
        detail: maintenanceEnabled ? "Non-admin users may be blocked from login." : "Normal access is allowed."
      }
    ];
    adminHealthOutput.innerHTML =
      "<div class='admin-health-grid'>" +
      healthCards
        .map((card) => {
          return (
            "<article class='admin-health-card'>" +
            "<div class='admin-health-card-top'>" +
            "<p class='admin-health-label'>" +
            escapeHtml(card.label) +
            "</p>" +
            "<span class='admin-health-pill " +
            escapeHtml(card.tone) +
            "'>" +
            escapeHtml(card.value) +
            "</span>" +
            "</div>" +
            "<p class='admin-health-detail'>" +
            escapeHtml(card.detail) +
            "</p>" +
            "</article>"
          );
        })
        .join("") +
      "</div>" +
      "<div class='admin-health-meta'>" +
      "<div class='admin-health-meta-row'><span class='admin-health-meta-label'>Build</span><span class='admin-health-meta-value'>" +
      escapeHtml(buildLabel) +
      "</span></div>" +
      "<div class='admin-health-meta-row'><span class='admin-health-meta-label'>Instance</span><span class='admin-health-meta-value'>" +
      escapeHtml(instanceLabel) +
      "</span></div>" +
      "<div class='admin-health-meta-row'><span class='admin-health-meta-label'>Database Target</span><span class='admin-health-meta-value'>" +
      escapeHtml(dbLabel) +
      "</span></div>" +
      "</div>";
  } catch (error) {
    adminHealthOutput.innerHTML =
      "<div class='admin-health-empty'>" +
      "<p class='admin-health-empty-title'>Diagnostics unavailable</p>" +
      "<p class='admin-health-empty-detail'>The health panel could not reach the realtime service right now.</p>" +
      "</div>";
  }
}

async function refreshAboutInfo() {
  if (!aboutBuildNumber || !aboutBuildStatus) {
    return;
  }
  aboutBuildStatus.textContent = "Checking active service build...";
  try {
    const response = await fetch(getActiveRealtimeBaseUrl() + "/health", { cache: "no-store" });
    const payload = await response.json();
    const buildLabel = String((payload && payload.build) || "Unknown");
    aboutBuildNumber.textContent = buildLabel;
    aboutBuildStatus.textContent = "Build information is synced from the active realtime service.";
  } catch (error) {
    aboutBuildStatus.textContent = "Build information is currently unavailable.";
  }
}

function formatAuditTime(value) {
  const date = new Date(String(value || ""));
  if (Number.isNaN(date.getTime())) {
    return "--";
  }
  return date.toLocaleString();
}

async function refreshAuditLog() {
  if (!isAdminUser || !adminAuditList || typeof window.TBRAuth.listAuditEvents !== "function") {
    return;
  }
  adminAuditList.innerHTML = "<p class='settings-help'>Loading audit log...</p>";
  const result = await window.TBRAuth.listAuditEvents(60);
  if (!result.ok) {
    adminAuditList.innerHTML = "<p class='settings-help'>Unable to load audit log right now.</p>";
    return;
  }
  const rows = Array.isArray(result.events) ? result.events : [];
  if (!rows.length) {
    adminAuditList.innerHTML = "<p class='settings-help'>No audit events yet.</p>";
    return;
  }
  adminAuditList.innerHTML = rows
    .map((row) => {
      const details = row.details && typeof row.details === "object" ? JSON.stringify(row.details) : "{}";
      return (
        "<article class='admin-audit-item'>" +
        "<p class='admin-audit-title'>" + escapeHtml(String(row.event_type || "event")) + "</p>" +
        "<p class='admin-audit-meta'>" +
        escapeHtml(String(row.actor_username || "system")) +
        (row.target_username ? " -> " + escapeHtml(String(row.target_username || "")) : "") +
        " • " +
        escapeHtml(formatAuditTime(row.created_at)) +
        "</p>" +
        "<p class='admin-audit-detail'>" + escapeHtml(details) + "</p>" +
        "</article>"
      );
    })
    .join("");
}

function setGuestInviteStatus(text, isError) {
  if (!guestInviteStatus) {
    return;
  }
  guestInviteStatus.textContent = String(text || "");
  guestInviteStatus.classList.remove("error", "success");
  guestInviteStatus.classList.add(isError ? "error" : "success");
}

function setGuestInviteModalOpen(open) {
  if (!guestInviteModal) {
    return;
  }
  const isOpen = !!open;
  guestInviteModal.classList.toggle("hidden", !isOpen);
  guestInviteModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
}

let pendingSettingsConfirmResolver = null;
let pendingPasswordUsername = "";
let guestEnabledState = false;
let activeGuestAdminUsername = "";
let adminSettingsState = null;
let adminSettingsOptions = {
  guestInviteExpiryOptions: [],
  guestSessionMinutesOptions: [],
  recordingMaxMinutesOptions: [],
  recordingRetentionOptions: [],
  chatImageMaxMbOptions: [],
  chatVideoMaxMbOptions: []
};

function closeSettingsConfirmDialog(result) {
  if (!settingsConfirmModal) {
    return;
  }
  settingsConfirmModal.classList.add("hidden");
  settingsConfirmModal.setAttribute("aria-hidden", "true");
  const resolver = pendingSettingsConfirmResolver;
  pendingSettingsConfirmResolver = null;
  if (typeof resolver === "function") {
    resolver(!!result);
  }
}

function openSettingsConfirmDialog(text, title, confirmLabel, dangerAction) {
  if (!settingsConfirmModal) {
    return Promise.resolve(false);
  }
  if (settingsConfirmTitle) {
    settingsConfirmTitle.textContent = title || "Are you sure?";
  }
  if (settingsConfirmText) {
    settingsConfirmText.textContent = text || "This action cannot be undone.";
  }
  if (settingsConfirmDeleteBtn) {
    settingsConfirmDeleteBtn.textContent = String(confirmLabel || "Delete");
    settingsConfirmDeleteBtn.classList.toggle("danger", dangerAction !== false);
  }
  settingsConfirmModal.classList.remove("hidden");
  settingsConfirmModal.setAttribute("aria-hidden", "false");
  return new Promise((resolve) => {
    pendingSettingsConfirmResolver = resolve;
  });
}

function setSettingsPasswordError(text) {
  if (!settingsPasswordError) {
    return;
  }
  const msg = String(text || "").trim();
  settingsPasswordError.textContent = msg;
  settingsPasswordError.classList.toggle("hidden", !msg);
}

function closeSettingsPasswordModal() {
  if (!settingsPasswordModal) {
    return;
  }
  settingsPasswordModal.classList.add("hidden");
  settingsPasswordModal.setAttribute("aria-hidden", "true");
  pendingPasswordUsername = "";
  if (settingsPasswordNewInput) {
    settingsPasswordNewInput.value = "";
  }
  if (settingsPasswordConfirmInput) {
    settingsPasswordConfirmInput.value = "";
  }
  setSettingsPasswordError("");
}

function openSettingsPasswordModal(username) {
  if (!settingsPasswordModal) {
    return;
  }
  pendingPasswordUsername = String(username || "").trim().toLowerCase();
  if (settingsPasswordTitle) {
    settingsPasswordTitle.textContent = "Reset Password for @" + pendingPasswordUsername;
  }
  if (settingsPasswordText) {
    settingsPasswordText.textContent = "Set a new password for this user. They will need to sign in again.";
  }
  if (settingsPasswordNewInput) {
    settingsPasswordNewInput.value = "";
  }
  if (settingsPasswordConfirmInput) {
    settingsPasswordConfirmInput.value = "";
  }
  setSettingsPasswordError("");
  settingsPasswordModal.classList.remove("hidden");
  settingsPasswordModal.setAttribute("aria-hidden", "false");
  if (settingsPasswordNewInput) {
    settingsPasswordNewInput.focus();
  }
}

function setDeviceStatus(text) {
  deviceStatusMessage.textContent = text;
}

function setMicWizardStatus(text) {
  if (micCheckWizardStatus) {
    micCheckWizardStatus.textContent = text;
  }
}

function getNoiseProfileFromSettings(settings) {
  if (settings.micNoiseSuppression === false || Number(settings.micNoiseGateThresholdDb) <= -100) {
    return "off";
  }
  const gate = Number(settings.micNoiseGateThresholdDb);
  if (gate <= -50) {
    return "low";
  }
  if (gate <= -40) {
    return "medium";
  }
  return "high";
}

function inferPreset(settings) {
  const selected = String(settings.micPreset || "").trim();
  if (selected && selected !== "custom" && MIC_PRESET_MAP[selected]) {
    return selected;
  }
  const gate = Number(settings.micNoiseGateThresholdDb);
  const profile = getNoiseProfileFromSettings(settings);
  if (
    settings.micAutoGainControl !== false &&
    settings.micLimiterEnabled !== false &&
    settings.micEchoCancellation !== false &&
    settings.micLoudnessTargetPreset === "podcast-standard" &&
    profile === "medium" &&
    gate === -45
  ) {
    return "studio-safe";
  }
  return "custom";
}

function syncSimpleMicControls(settings) {
  const preset = inferPreset(settings);
  micPresetSelect.value = MIC_PRESET_MAP[preset] ? preset : "custom";
  micAutoLevelingToggle.checked = settings.micAutoGainControl !== false;
  micClipGuardToggle.checked = settings.micLimiterEnabled !== false;
  micNoiseProfileSelect.value = getNoiseProfileFromSettings(settings);
}

function syncAdvancedMicControls(settings) {
  micEchoDefaultToggle.checked = settings.micEchoCancellation !== false;
  micNoiseDefaultToggle.checked = settings.micNoiseSuppression !== false;
  micAgcDefaultToggle.checked = settings.micAutoGainControl !== false;
  micInputMonitoringToggle.checked = !!settings.micInputMonitoringEnabled;
  const gateAllowed = new Set(["-100", "-55", "-50", "-45", "-40", "-35", "-30"]);
  const gateValue = String(settings.micNoiseGateThresholdDb ?? -45);
  micNoiseGateThresholdSelect.value = gateAllowed.has(gateValue) ? gateValue : "-45";
  const loudnessAllowed = new Set(["podcast-standard", "natural", "broadcast-loud"]);
  const loudnessValue = String(settings.micLoudnessTargetPreset || "podcast-standard");
  micLoudnessTargetSelect.value = loudnessAllowed.has(loudnessValue) ? loudnessValue : "podcast-standard";
}

function saveMicSettingsAndSync(partial, messageText) {
  const next = window.TBRAuth.saveStudioSettings({
    micPreset: "custom",
    ...partial
  });
  syncSimpleMicControls(next);
  syncAdvancedMicControls(next);
  if (messageText) {
    setMessage(messageText);
  }
  return next;
}

function applyMicPreset(presetKey, announce) {
  const preset = MIC_PRESET_MAP[presetKey] || MIC_PRESET_MAP["studio-safe"];
  const next = window.TBRAuth.saveStudioSettings(preset);
  syncSimpleMicControls(next);
  syncAdvancedMicControls(next);
  if (announce) {
    setMessage("Mic preset applied: " + (preset.micPreset || "studio-safe") + ".");
  }
  return next;
}

function applyDisableAllState(disabledAll, forceReset) {
  const nextDisabled = !!disabledAll;
  if (nextDisabled && forceReset) {
    chatPulseToggle.checked = false;
    chatSoundToggle.checked = false;
    chatBadgeToggle.checked = false;
  } else if (!nextDisabled && forceReset) {
    chatPulseToggle.checked = true;
    chatSoundToggle.checked = true;
    chatBadgeToggle.checked = true;
  }
  [chatPulseToggle, chatSoundToggle, chatBadgeToggle].forEach((toggle) => {
    toggle.disabled = nextDisabled;
    const row = toggle.closest(".settings-toggle");
    if (row) {
      row.classList.toggle("locked", nextDisabled);
      row.setAttribute("aria-disabled", nextDisabled ? "true" : "false");
    }
  });
}

function applyContainerModeToBody(isLight) {
  document.body.classList.toggle("ui-light", !!isLight);
}

function updateContainerModeLabel(isLight) {
  containersModeLabel.textContent = isLight ? "Dark Mode" : "Light Mode";
}

function canCurrentUserManageGuests() {
  return typeof window.TBRAuth.hasPermission === "function" && window.TBRAuth.hasPermission("guestManagement");
}

function canCurrentUserModerateChat() {
  return typeof window.TBRAuth.hasPermission === "function" && window.TBRAuth.hasPermission("chatModeration");
}

function canCurrentUserManageSite() {
  return typeof window.TBRAuth.hasPermission === "function" && window.TBRAuth.hasPermission("siteSettings");
}

function setActiveSettingsTab(tabKey) {
  const nextKey = String(tabKey || "").trim();
  const activeButton = settingsTabButtons.find((button) => {
    if (button.classList.contains("hidden")) {
      return false;
    }
    return button.getAttribute("data-settings-tab") === nextKey;
  });
  const safeKey = activeButton ? nextKey : "devices";
  settingsTabButtons.forEach((button) => {
    const isActive = button.getAttribute("data-settings-tab") === safeKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  settingsPanels.forEach((panel) => {
    const isActive = panel.getAttribute("data-settings-panel") === safeKey;
    panel.classList.toggle("hidden", !isActive);
    panel.classList.toggle("active", isActive);
  });
}

function formatCreatedDate(iso) {
  const value = String(iso || "").trim();
  if (!value) {
    return "Unknown";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function formatLastLoginDate(iso) {
  const value = String(iso || "").trim();
  if (!value) {
    return "Never";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function getUserAdminRowData(username) {
  const target = String(username || "").trim().toLowerCase();
  if (!target) {
    return null;
  }
  return adminUsersState.find((row) => String(row && row.username ? row.username : "").trim().toLowerCase() === target) || null;
}

function syncUserAdminRolePresentation() {
  const isAdminRole = !!(userAdminRoleSelect && userAdminRoleSelect.value === "admin");
  if (userAdminToggleStack) {
    userAdminToggleStack.classList.toggle("hidden", isAdminRole);
  }
  if (userAdminRoleHelp) {
    userAdminRoleHelp.textContent = isAdminRole
      ? "Admins always receive full control across the site. Custom permissions are not used for this role."
      : "Custom permissions apply to this user role. Toggle only the access this user should receive.";
  }
}

function closeUserAdminModal() {
  activeUserAdminUsername = "";
  if (!userAdminModal) {
    return;
  }
  userAdminModal.classList.add("hidden");
  userAdminModal.setAttribute("aria-hidden", "true");
}

function openUserAdminModal(row) {
  if (!row || !userAdminModal) {
    return;
  }
  const username = String(row.username || "").trim();
  const role = row.role === "admin" ? "admin" : "user";
  const permissions = row.permissions && typeof row.permissions === "object" ? row.permissions : {};
  const aliasLabel = row.useAlias && row.alias ? "Alias: " + String(row.alias) : "Alias: Not set";
  activeUserAdminUsername = username;
  if (userAdminName) {
    userAdminName.textContent = "@" + username;
  }
  if (userAdminAlias) {
    userAdminAlias.textContent = aliasLabel;
  }
  if (userAdminCreated) {
    userAdminCreated.textContent = "Created: " + formatCreatedDate(row.createdAt);
  }
  if (userAdminLastLogin) {
    userAdminLastLogin.textContent = "Last login: " + formatLastLoginDate(row.lastLoginAt || row.lastLogin || row.updatedAt);
  }
  if (userAdminRoleSelect) {
    userAdminRoleSelect.value = role;
    userAdminRoleSelect.disabled = false;
  }
  userAdminPermissionInputs.forEach((input) => {
    const key = String(input.getAttribute("data-user-admin-permission") || "");
    input.checked = !!permissions[key];
    input.disabled = false;
  });
  if (userAdminResetPasswordBtn) {
    userAdminResetPasswordBtn.classList.toggle("hidden", !username);
    userAdminResetPasswordBtn.disabled = false;
  }
  if (userAdminDeleteUserBtn) {
    userAdminDeleteUserBtn.classList.toggle("hidden", !username);
    userAdminDeleteUserBtn.disabled = false;
  }
  if (userAdminSaveBtn) {
    userAdminSaveBtn.disabled = false;
  }
  syncUserAdminRolePresentation();
  userAdminModal.classList.remove("hidden");
  userAdminModal.setAttribute("aria-hidden", "false");
  if (userAdminRoleSelect) {
    userAdminRoleSelect.focus();
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function renderAdminUsers() {
  if (!usersAdminList) {
    return;
  }
  const canManageGuests = canCurrentUserManageGuests();
  if (!isAdminUser && !canManageGuests) {
    usersAdminList.innerHTML = "";
    return;
  }
  if (typeof window.TBRAuth.listUsersForAdmin !== "function") {
    usersAdminList.innerHTML = isAdminUser
      ? "<p class='settings-help'>User management API is unavailable.</p>"
      : "<p class='settings-help'>Guest management is unavailable right now.</p>";
    return;
  }
  const result = await window.TBRAuth.listUsersForAdmin();
  if (!result.ok) {
    usersAdminList.innerHTML = isAdminUser ? "<p class='settings-help'>Unable to load users right now.</p>" : "";
    return;
  }
  const rows = result.users || [];
  adminUsersState = rows.map((row) => ({ ...(row && typeof row === "object" ? row : {}) }));
  const guestRow = rows.find((row) => !!row.guest || String(row.role || "").toLowerCase() === "guest");
  guestEnabledState = !!(guestRow && guestRow.guestEnabled);
  updateGuestAccessButtonState();
  if (!rows.length) {
    usersAdminList.innerHTML = isAdminUser
      ? "<p class='settings-help'>No users found.</p>"
      : "<p class='settings-help'>Guest user is not available right now.</p>";
    return;
  }
  usersAdminList.innerHTML = rows
    .map((row, index) => {
      const username = String(row.username || "").trim();
      const safeUsername = escapeHtml(username);
      const encodedUsername = encodeURIComponent(username);
      const role = row.role === "admin" ? "admin" : row.role === "guest" ? "guest" : "user";
      const isGuestRow = !!row.guest || role === "guest";
      const guestAccess = isGuestRow ? (row.guestEnabled ? "Guest access: Enabled" : "Guest access: Disabled") : "";
      const aliasValue = row.useAlias && row.alias ? String(row.alias) : "Not set";
      const aliasMeta = guestAccess ? aliasValue + " • " + guestAccess : aliasValue;
      const safeAlias = escapeHtml(aliasMeta);
      const roleLabel = role === "admin" ? "Admin" : role === "guest" ? "Guest" : "User";
      const usernameControl = isGuestRow
        ? "<p class='users-admin-name'>@" + safeUsername + "</p>"
        : "<button type='button' class='users-admin-name users-admin-link' data-open-user-admin='true'>@" + safeUsername + "</button>";
      const manageAction = isGuestRow
        ? "<button type='button' class='btn sso users-admin-manage-btn' data-open-guest-admin='true'>Guest Controls</button>"
        : "<button type='button' class='btn sso users-admin-manage-btn' data-open-user-admin='true'>Manage User</button>";
      return (
        "<article class='users-admin-row' data-username='" +
        encodedUsername +
        "'>" +
        "<div class='users-admin-main'>" +
        "<div class='users-admin-identity-block'>" +
        usernameControl +
        "<p class='users-admin-alias-inline'>" +
        safeAlias +
        "</p>" +
        "</div>" +
        "<div class='users-admin-detail-list'>" +
        "<p class='users-admin-detail-item users-admin-detail-item-compact'><span class='users-admin-detail-label'>Role</span><span class='users-admin-detail-value users-admin-role-value'>" +
        escapeHtml(roleLabel) +
        "</span></p>" +
        "</div>" +
        "<div class='users-admin-row-actions'>" +
        manageAction +
        "</div>" +
        "</div>" +
        "</article>"
      );
    })
    .join("");
}

function applyAdminAccessControl() {
  const canManageGuests = canCurrentUserManageGuests();
  const canModerateChat = canCurrentUserModerateChat();
  const canManageSite = canCurrentUserManageSite();
  adminOnlyNodes.forEach((node) => {
    node.classList.toggle("hidden", !isAdminUser);
  });
  guestManageNodes.forEach((node) => {
    node.classList.toggle("hidden", !isAdminUser && !canManageGuests);
  });
  permissionNodes.forEach((node) => {
    const permission = String(node.getAttribute("data-permission") || "").trim();
    const allowed =
      isAdminUser ||
      (permission === "guestManagement" && canManageGuests) ||
      (permission === "chatModeration" && canModerateChat) ||
      (permission === "siteSettings" && canManageSite);
    node.classList.toggle("hidden", !allowed);
  });
}

function updateGuestAccessButtonState() {
  if (!guestDisableBtn) {
    return;
  }
  const enabled = !!guestEnabledState;
  guestDisableBtn.textContent = enabled ? "Disable Guest" : "Enable Guest";
  guestDisableBtn.classList.toggle("danger", enabled);
  if (guestAdminStatus) {
    guestAdminStatus.textContent = "Guest access: " + (enabled ? "Enabled" : "Disabled");
  }
}

function closeGuestAdminModal() {
  activeGuestAdminUsername = "";
  if (!guestAdminModal) {
    return;
  }
  guestAdminModal.classList.add("hidden");
  guestAdminModal.setAttribute("aria-hidden", "true");
}

function openGuestAdminModal(row) {
  if (!row || !guestAdminModal) {
    return;
  }
  const username = String(row.username || "guest").trim() || "guest";
  const next = getAdminSettingsDraft();
  activeGuestAdminUsername = username;
  if (guestAdminName) {
    guestAdminName.textContent = "@" + username;
  }
  if (guestAdminAlias) {
    guestAdminAlias.textContent = "Display name: " + String(next.guestDisplayName || "Guest");
  }
  if (guestAdminStatus) {
    guestAdminStatus.textContent = "Guest access: " + (guestEnabledState ? "Enabled" : "Disabled");
  }
  if (guestAdminDisplayNameInput) {
    guestAdminDisplayNameInput.value = String(next.guestDisplayName || "Guest");
    guestAdminDisplayNameInput.disabled = false;
  }
  if (guestAdminInviteExpirySelect) {
    guestAdminInviteExpirySelect.value = String(next.guestInviteExpiryMinutes || 120);
    guestAdminInviteExpirySelect.disabled = false;
  }
  if (guestAdminSessionMaxSelect) {
    guestAdminSessionMaxSelect.value = String(next.guestMaxSessionMinutes || 120);
    guestAdminSessionMaxSelect.disabled = false;
  }
  if (guestAdminSaveBtn) {
    guestAdminSaveBtn.disabled = false;
  }
  if (guestInviteBtn) {
    guestInviteBtn.disabled = false;
  }
  if (guestDisableBtn) {
    guestDisableBtn.disabled = false;
  }
  setGuestInviteStatus("Guest invite link is one-time use and expires automatically.", false);
  guestAdminModal.classList.remove("hidden");
  guestAdminModal.setAttribute("aria-hidden", "false");
  if (guestAdminDisplayNameInput) {
    guestAdminDisplayNameInput.focus();
  }
}

function closeAllRoleMenus(exceptPicker) {
  if (!usersAdminList) {
    return;
  }
  const pickers = Array.from(usersAdminList.querySelectorAll("[data-role-picker='true']"));
  pickers.forEach((picker) => {
    if (exceptPicker && picker === exceptPicker) {
      return;
    }
    const menu = picker.querySelector("[data-role-menu='true']");
    const trigger = picker.querySelector("[data-role-trigger='true']");
    if (menu) {
      menu.classList.remove("is-open");
    }
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function fillDeviceSelect(selectEl, devices, typeLabel, preferredId) {
  selectEl.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Use system default " + typeLabel;
  selectEl.appendChild(defaultOption);

  if (!devices.length) {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "No " + typeLabel + " detected";
    selectEl.appendChild(emptyOption);
  }

  devices.forEach((device, index) => {
    const option = document.createElement("option");
    option.value = device.deviceId;
    option.textContent = device.label || (typeLabel + " " + (index + 1));
    selectEl.appendChild(option);
  });

  if (preferredId && devices.some((device) => device.deviceId === preferredId)) {
    selectEl.value = preferredId;
  } else {
    selectEl.value = "";
  }
}

async function loadDeviceDefaults() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    fillDeviceSelect(cameraDefaultSelect, [], "camera", "");
    fillDeviceSelect(micDefaultSelect, [], "microphone", "");
    if (speakerDefaultSelect) {
      fillDeviceSelect(speakerDefaultSelect, [], "speaker", "");
    }
    setDeviceStatus("Device detection is not supported in this browser.");
    return;
  }

  const settings = window.TBRAuth.getStudioSettings();
  const devices = await navigator.mediaDevices.enumerateDevices();
  const cameras = devices.filter((device) => device.kind === "videoinput");
  const mics = devices.filter((device) => device.kind === "audioinput");
  const speakers = devices.filter((device) => device.kind === "audiooutput");
  fillDeviceSelect(cameraDefaultSelect, cameras, "camera", settings.preferredCameraId || "");
  fillDeviceSelect(micDefaultSelect, mics, "microphone", settings.preferredMicId || "");
  if (speakerDefaultSelect) {
    fillDeviceSelect(speakerDefaultSelect, speakers, "speaker", settings.preferredSpeakerId || "");
  }
  const unlabeled = [...cameras, ...mics, ...speakers].some((device) => !device.label);
  if (!cameras.length && !mics.length && !speakers.length) {
    setDeviceStatus("No camera, microphone, or speaker devices detected on this device.");
  } else if (unlabeled) {
    setDeviceStatus("Some device names are hidden until you grant browser media permission.");
  } else {
    setDeviceStatus("Device list loaded.");
  }
}

async function detectDevicesWithPermission() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setDeviceStatus("Device permission request is not supported in this browser.");
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    stream.getTracks().forEach((track) => track.stop());
    await loadDeviceDefaults();
    setDeviceStatus("Device access granted and list refreshed.");
  } catch (error) {
    if (error && error.name === "NotAllowedError") {
      setDeviceStatus("Permission blocked. Allow camera/mic in browser site settings.");
      return;
    }
    setDeviceStatus("Unable to detect devices right now.");
  }
}

function loadSettings() {
  const settings = window.TBRAuth.getStudioSettings();
  chatReadReceiptsToggle.checked = settings.chatReadReceiptsEnabled !== false;
  presenceVisibleToggle.checked = settings.presenceVisible !== false;
  reactionsVisibleToggle.checked = settings.reactionsEnabled !== false;
  chatBubbleThemeSelect.value = String(settings.chatSelfBubbleTheme || "blue");
  recordingFormatSelect.value = String(settings.recordingDefaultFormat || "video");
  recordingQualitySelect.value = String(settings.recordingDefaultQuality || "standard");
  recordingNamePatternSelect.value = String(settings.recordingNamePattern || "show-date");
  const countdownValue = Number(settings.recordingDefaultCountdownSeconds || 3);
  if (countdownValue === 3 || countdownValue === 5 || countdownValue === 10) {
    recordingCountdownSecondsSelect.value = String(countdownValue);
  } else {
    recordingCountdownSecondsSelect.value = "3";
  }
  recordingAutoStopMinutesSelect.value = String(settings.recordingSafetyAutoStopMinutes || 0);
  recordingAutoSplitMinutesSelect.value = String(settings.recordingAutoSplitMinutes || 0);
  recordingFadeInDurationSecondsSelect.value = String(Math.max(1, Math.min(20, Number(settings.recordingMusicFadeInDurationSeconds) || 2)));
  recordingFadeOutDurationSecondsSelect.value = String(Math.max(1, Math.min(20, Number(settings.recordingMusicFadeOutDurationSeconds) || 5)));
  recordingAutoFadeInStartSecondsSelect.value = String(Math.max(1, Math.min(30, Number(settings.recordingMusicAutoFadeInStartSeconds) || 1)));
  recordingAutoFadeInDurationSecondsSelect.value = String(Math.max(1, Math.min(20, Number(settings.recordingMusicAutoFadeInDurationSeconds) || 2)));
  recordingAutoFadeOutStartSecondsSelect.value = String(Math.max(1, Math.min(30, Number(settings.recordingMusicAutoFadeOutStartSeconds) || 5)));
  recordingAutoFadeOutDurationSecondsSelect.value = String(Math.max(1, Math.min(20, Number(settings.recordingMusicAutoFadeOutDurationSeconds) || 5)));
  containersLightToggle.checked = settings.uiContainerMode === "light";
  applyContainerModeToBody(containersLightToggle.checked);
  updateContainerModeLabel(containersLightToggle.checked);
  chatAlertsDisableAllToggle.checked = !!settings.chatAlertsDisabledAll;
  chatPulseToggle.checked = settings.chatPulseEnabled !== false;
  chatSoundToggle.checked = settings.chatSoundEnabled !== false;
  chatBadgeToggle.checked = settings.chatBadgeEnabled !== false;
  applyDisableAllState(chatAlertsDisableAllToggle.checked, false);
  cameraAutoStartToggle.checked = !!settings.cameraAutoStart;
  renderCameraBackgroundImageState(settings);
  pushToTalkDefaultToggle.checked = !!settings.pushToTalkEnabled;
  headphonesDefaultToggle.checked = !!settings.usingHeadphones;
  syncSimpleMicControls(settings);
  syncAdvancedMicControls(settings);
  setMicWizardStatus("Use Studio Safe for most rooms, then run Mic Check for automatic fine-tuning.");
  const storedRealtime = localStorage.getItem(REALTIME_URL_KEY);
  const savedRealtime = shouldPromoteToDefaultUrl(storedRealtime)
    ? getDefaultRealtimeBaseUrl()
    : normalizeRealtimeBaseUrl(storedRealtime || getDefaultRealtimeBaseUrl());
  realtimeUrlInput.value = savedRealtime;
  localStorage.setItem(REALTIME_URL_KEY, savedRealtime);
  realtimeUrlInput.disabled = true;
  realtimeUrlInput.title = isLocalHostRuntime() ? "Local development uses localhost." : "Locked to Railway.";
  useLocalhostBtn.disabled = !isLocalHostRuntime();
  useLocalhostBtn.title = isLocalHostRuntime()
    ? "Use local realtime service."
    : "Localhost override is only available on localhost.";
}

function renderCameraBackgroundImageState(settings) {
  const imageDataUrl = String((settings && settings.cameraBackgroundImageDataUrl) || "").trim();
  const imageName = String((settings && settings.cameraBackgroundImageName) || "").trim();
  const hasImage = !!imageDataUrl;
  if (cameraBackgroundImagePreviewWrap) {
    cameraBackgroundImagePreviewWrap.classList.toggle("hidden", !hasImage);
  }
  if (cameraBackgroundImagePreview) {
    cameraBackgroundImagePreview.style.backgroundImage = hasImage ? 'url("' + imageDataUrl.replace(/"/g, '\\"') + '")' : "";
  }
  if (cameraBackgroundImagePreviewName) {
    cameraBackgroundImagePreviewName.textContent = hasImage ? imageName || "Saved background image" : "No image selected.";
  }
  if (cameraBackgroundImageStatus) {
    cameraBackgroundImageStatus.textContent = hasImage
      ? "Saved image ready. Turn on Background Image in the lounge when you want to use it."
      : "Upload a background image once, then turn on Background Image in the lounge when you want to use it.";
  }
}

chatReadReceiptsToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    chatReadReceiptsEnabled: chatReadReceiptsToggle.checked
  });
  const stateText = next.chatReadReceiptsEnabled !== false ? "enabled" : "disabled";
  setMessage("Read receipts " + stateText + ".");
});

presenceVisibleToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    presenceVisible: presenceVisibleToggle.checked
  });
  setMessage("Presence visibility " + (next.presenceVisible !== false ? "enabled." : "disabled."));
});

reactionsVisibleToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    reactionsEnabled: reactionsVisibleToggle.checked
  });
  setMessage("Message reactions " + (next.reactionsEnabled !== false ? "enabled." : "disabled."));
});

chatBubbleThemeSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    chatSelfBubbleTheme: chatBubbleThemeSelect.value || "blue"
  });
  setMessage("Chat bubble theme set to " + String(next.chatSelfBubbleTheme || "blue") + ".");
});

recordingFormatSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingDefaultFormat: recordingFormatSelect.value || "video"
  });
  setMessage("Recording format set to " + String(next.recordingDefaultFormat || "video") + ".");
});

recordingQualitySelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingDefaultQuality: recordingQualitySelect.value || "standard"
  });
  setMessage("Recording quality set to " + String(next.recordingDefaultQuality || "standard") + ".");
});

recordingNamePatternSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingNamePattern: recordingNamePatternSelect.value || "show-date"
  });
  setMessage("Recording naming updated.");
});

recordingCountdownSecondsSelect.addEventListener("change", () => {
  const parsed = Number(recordingCountdownSecondsSelect.value);
  const next = window.TBRAuth.saveStudioSettings({
    recordingDefaultCountdownSeconds: parsed === 3 || parsed === 5 || parsed === 10 ? parsed : 3
  });
  setMessage("Recording countdown set to " + String(next.recordingDefaultCountdownSeconds || 3) + " seconds.");
});

recordingAutoStopMinutesSelect.addEventListener("change", () => {
  const parsed = Number(recordingAutoStopMinutesSelect.value);
  const minutes = Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  const next = window.TBRAuth.saveStudioSettings({
    recordingSafetyAutoStopMinutes: minutes
  });
  setMessage(minutes > 0 ? "Auto-stop set to " + minutes + " minutes." : "Auto-stop disabled.");
});

recordingAutoSplitMinutesSelect.addEventListener("change", () => {
  const parsed = Number(recordingAutoSplitMinutesSelect.value);
  const minutes = Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  const next = window.TBRAuth.saveStudioSettings({
    recordingAutoSplitMinutes: minutes
  });
  setMessage(minutes > 0 ? "Auto-split set to every " + minutes + " minutes." : "Auto-split disabled.");
});

recordingFadeInDurationSecondsSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingMusicFadeInDurationSeconds: getClampedSettingsSelectValue(recordingFadeInDurationSecondsSelect, 1, 20, 2)
  });
  setMessage("Fade In duration set to " + String(next.recordingMusicFadeInDurationSeconds || 2) + " seconds.");
});

recordingFadeOutDurationSecondsSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingMusicFadeOutDurationSeconds: getClampedSettingsSelectValue(recordingFadeOutDurationSecondsSelect, 1, 20, 5)
  });
  setMessage("Fade Out duration set to " + String(next.recordingMusicFadeOutDurationSeconds || 5) + " seconds.");
});

recordingAutoFadeInStartSecondsSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingMusicAutoFadeInStartSeconds: getClampedSettingsSelectValue(recordingAutoFadeInStartSecondsSelect, 1, 30, 1)
  });
  setMessage("Auto Fade In start set to " + String(next.recordingMusicAutoFadeInStartSeconds || 1) + " seconds.");
});

recordingAutoFadeInDurationSecondsSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingMusicAutoFadeInDurationSeconds: getClampedSettingsSelectValue(recordingAutoFadeInDurationSecondsSelect, 1, 20, 2)
  });
  setMessage("Auto Fade In duration set to " + String(next.recordingMusicAutoFadeInDurationSeconds || 2) + " seconds.");
});

recordingAutoFadeOutStartSecondsSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingMusicAutoFadeOutStartSeconds: getClampedSettingsSelectValue(recordingAutoFadeOutStartSecondsSelect, 1, 30, 5)
  });
  setMessage("Auto Fade Out start set to " + String(next.recordingMusicAutoFadeOutStartSeconds || 5) + " seconds.");
});

recordingAutoFadeOutDurationSecondsSelect.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    recordingMusicAutoFadeOutDurationSeconds: getClampedSettingsSelectValue(recordingAutoFadeOutDurationSecondsSelect, 1, 20, 5)
  });
  setMessage("Auto Fade Out duration set to " + String(next.recordingMusicAutoFadeOutDurationSeconds || 5) + " seconds.");
});

containersLightToggle.addEventListener("change", () => {
  const isLight = !!containersLightToggle.checked;
  const next = window.TBRAuth.saveStudioSettings({
    uiContainerMode: isLight ? "light" : "dark"
  });
  applyContainerModeToBody(next.uiContainerMode === "light");
  updateContainerModeLabel(next.uiContainerMode === "light");
  setMessage("Container mode set to " + (next.uiContainerMode === "light" ? "light." : "dark."));
});

cameraAutoStartToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    cameraAutoStart: cameraAutoStartToggle.checked
  });
  const stateText = next.cameraAutoStart ? "enabled" : "disabled";
  setMessage("Camera auto-start " + stateText + ".");
});

if (cameraBackgroundImageInput) {
  cameraBackgroundImageInput.addEventListener("change", async () => {
    const file = cameraBackgroundImageInput.files && cameraBackgroundImageInput.files[0];
    if (!file) {
      return;
    }
    if (!file.type || !file.type.startsWith("image/")) {
      setErrorMessage("Choose an image file for the background.");
      cameraBackgroundImageInput.value = "";
      return;
    }
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
      reader.onerror = () => reject(new Error("read failed"));
      reader.readAsDataURL(file);
    }).catch(() => "");
    if (!dataUrl) {
      setErrorMessage("Background image could not be read.");
      cameraBackgroundImageInput.value = "";
      return;
    }
    const next = window.TBRAuth.saveStudioSettings({
      cameraBackgroundImageDataUrl: dataUrl,
      cameraBackgroundImageName: file.name || "Background image"
    });
    draftStudioSettings = { ...next };
    renderCameraBackgroundImageState(next);
    cameraBackgroundImageInput.value = "";
    setMessage("Background image saved.");
  });
}

if (cameraBackgroundImageClearBtn) {
  cameraBackgroundImageClearBtn.addEventListener("click", () => {
    const next = window.TBRAuth.saveStudioSettings({
      cameraBackgroundImageDataUrl: "",
      cameraBackgroundImageName: "",
      cameraBackgroundMode: draftStudioSettings.cameraBackgroundMode === "image" ? "off" : draftStudioSettings.cameraBackgroundMode
    });
    draftStudioSettings = { ...next };
    renderCameraBackgroundImageState(next);
    setMessage("Background image cleared.");
  });
}

pushToTalkDefaultToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    pushToTalkEnabled: pushToTalkDefaultToggle.checked
  });
  setMessage("Default push-to-talk " + (next.pushToTalkEnabled ? "enabled." : "disabled."));
});

headphonesDefaultToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    usingHeadphones: headphonesDefaultToggle.checked
  });
  setMessage("Default headphone mode " + (next.usingHeadphones ? "enabled." : "disabled."));
});

micPresetSelect.addEventListener("change", () => {
  const key = String(micPresetSelect.value || "studio-safe");
  if (key === "custom") {
    setMessage("Custom mic mode active. Your current advanced settings are retained.");
    return;
  }
  applyMicPreset(key, true);
  setMicWizardStatus("Preset applied. Run Mic Check to fine-tune for this room.");
});

micAutoLevelingToggle.addEventListener("change", () => {
  saveMicSettingsAndSync({ micAutoGainControl: micAutoLevelingToggle.checked }, "Auto leveling updated.");
});

micClipGuardToggle.addEventListener("change", () => {
  saveMicSettingsAndSync({ micLimiterEnabled: micClipGuardToggle.checked }, "Clip guard updated.");
});

micNoiseProfileSelect.addEventListener("change", () => {
  const key = String(micNoiseProfileSelect.value || "medium");
  const profile = NOISE_PROFILE_TO_VALUES[key] || NOISE_PROFILE_TO_VALUES.medium;
  saveMicSettingsAndSync(
    {
      micNoiseSuppression: profile.micNoiseSuppression,
      micNoiseGateThresholdDb: profile.micNoiseGateThresholdDb
    },
    "Noise profile updated."
  );
});

micResetRecommendedBtn.addEventListener("click", () => {
  applyMicPreset("studio-safe", true);
  setMicWizardStatus("Reset complete. Studio Safe preset is active.");
});

[micEchoDefaultToggle, micNoiseDefaultToggle, micAgcDefaultToggle].forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const next = saveMicSettingsAndSync({
      micEchoCancellation: micEchoDefaultToggle.checked,
      micNoiseSuppression: micNoiseDefaultToggle.checked,
      micAutoGainControl: micAgcDefaultToggle.checked
    });
    const count = [next.micEchoCancellation, next.micNoiseSuppression, next.micAutoGainControl].filter(Boolean).length;
    setMessage("Mic processing defaults updated (" + count + "/3 enabled).");
  });
});

micInputMonitoringToggle.addEventListener("change", () => {
  saveMicSettingsAndSync(
    {
      micInputMonitoringEnabled: micInputMonitoringToggle.checked
    },
    "Input monitoring " + (micInputMonitoringToggle.checked ? "enabled." : "disabled.")
  );
});

micNoiseGateThresholdSelect.addEventListener("change", () => {
  const parsed = Number(micNoiseGateThresholdSelect.value);
  const allowed = new Set([-100, -55, -50, -45, -40, -35, -30]);
  const value = allowed.has(parsed) ? parsed : -45;
  const next = saveMicSettingsAndSync({
    micNoiseGateThresholdDb: value
  });
  if (next.micNoiseGateThresholdDb <= -100) {
    setMessage("Noise gate disabled.");
  } else {
    setMessage("Noise gate threshold set to " + String(next.micNoiseGateThresholdDb) + " dB.");
  }
});

micLoudnessTargetSelect.addEventListener("change", () => {
  const allowed = new Set(["podcast-standard", "natural", "broadcast-loud"]);
  const value = allowed.has(micLoudnessTargetSelect.value) ? micLoudnessTargetSelect.value : "podcast-standard";
  const next = saveMicSettingsAndSync({
    micLoudnessTargetPreset: value
  });
  setMessage("Loudness target set to " + String(next.micLoudnessTargetPreset || "podcast-standard") + ".");
});

cameraDefaultSelect.addEventListener("change", () => {
  window.TBRAuth.saveStudioSettings({
    preferredCameraId: cameraDefaultSelect.value || ""
  });
  setMessage("Default camera updated.");
});

micDefaultSelect.addEventListener("change", () => {
  window.TBRAuth.saveStudioSettings({
    preferredMicId: micDefaultSelect.value || ""
  });
  setMessage("Default microphone updated.");
});

if (speakerDefaultSelect) {
  speakerDefaultSelect.addEventListener("change", () => {
    window.TBRAuth.saveStudioSettings({
      preferredSpeakerId: speakerDefaultSelect.value || ""
    });
    setMessage("Default speaker updated.");
  });
}

detectDevicesBtn.addEventListener("click", async () => {
  await detectDevicesWithPermission();
});

refreshDevicesBtn.addEventListener("click", async () => {
  await loadDeviceDefaults();
});

useLocalhostBtn.addEventListener("click", () => {
  if (!isLocalHostRuntime()) {
    setMessage("Localhost override is only available on localhost.");
    return;
  }
  realtimeUrlInput.value = LOCAL_REALTIME_URL;
  localStorage.setItem(REALTIME_URL_KEY, LOCAL_REALTIME_URL);
  setMessage("Realtime URL set to localhost for local testing.");
});

async function runMicCheckWizard() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setMicWizardStatus("Mic check is not supported in this browser.");
    return;
  }
  micCheckWizardBtn.disabled = true;
  setMicWizardStatus("Listening... speak normally for 6 seconds.");
  let stream = null;
  let audioContext = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.82;
    source.connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    const startedAt = performance.now();
    const frames = [];
    const noiseFrames = [];
    while (performance.now() - startedAt < 6000) {
      analyser.getByteTimeDomainData(data);
      let sum = 0;
      let peak = 0;
      for (let i = 0; i < data.length; i += 1) {
        const sample = (data[i] - 128) / 128;
        sum += sample * sample;
        const abs = Math.abs(sample);
        if (abs > peak) {
          peak = abs;
        }
      }
      const rms = Math.sqrt(sum / data.length);
      frames.push({ rms, peak });
      if (performance.now() - startedAt < 1500) {
        noiseFrames.push(rms);
      }
      await new Promise((resolve) => window.setTimeout(resolve, 60));
    }

    const avgRms = frames.reduce((total, frame) => total + frame.rms, 0) / Math.max(1, frames.length);
    const maxPeak = frames.reduce((max, frame) => Math.max(max, frame.peak), 0);
    const noiseFloor = noiseFrames.reduce((total, value) => total + value, 0) / Math.max(1, noiseFrames.length);

    let gain = 100;
    if (avgRms < 0.03) {
      gain = 125;
    } else if (maxPeak > 0.85) {
      gain = 85;
    }

    const noiseProfile = noiseFloor > 0.03 ? "high" : noiseFloor > 0.018 ? "medium" : "low";
    const profile = NOISE_PROFILE_TO_VALUES[noiseProfile];
    const tuned = window.TBRAuth.saveStudioSettings({
      micPreset: "custom",
      micInputGainPercent: gain,
      micLimiterEnabled: true,
      micAutoGainControl: true,
      micNoiseSuppression: profile.micNoiseSuppression,
      micNoiseGateThresholdDb: profile.micNoiseGateThresholdDb,
      micLoudnessTargetPreset: "podcast-standard",
      micEchoCancellation: true
    });
    syncSimpleMicControls(tuned);
    syncAdvancedMicControls(tuned);
    setMicWizardStatus(
      "Mic check complete: gain " +
        gain +
        "%, noise profile " +
        noiseProfile +
        ", loudness Podcast Standard."
    );
    setMessage("Mic check complete. Suggested defaults applied.");
  } catch (error) {
    setMicWizardStatus("Mic check failed. Allow microphone access and try again.");
  } finally {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    if (audioContext) {
      audioContext.close().catch(() => {
        // Ignore close races.
      });
    }
    micCheckWizardBtn.disabled = false;
  }
}

micCheckWizardBtn.addEventListener("click", () => {
  runMicCheckWizard().catch(() => {
    setMicWizardStatus("Mic check failed. Try again.");
    micCheckWizardBtn.disabled = false;
  });
});

chatAlertsDisableAllToggle.addEventListener("change", () => {
  const disableAll = !!chatAlertsDisableAllToggle.checked;
  applyDisableAllState(disableAll, true);
  const next = window.TBRAuth.saveStudioSettings({
    chatAlertsDisabledAll: disableAll,
    chatPulseEnabled: chatPulseToggle.checked,
    chatSoundEnabled: chatSoundToggle.checked,
    chatBadgeEnabled: chatBadgeToggle.checked
  });
  applyDisableAllState(!!next.chatAlertsDisabledAll, false);
  setMessage(next.chatAlertsDisabledAll ? "All chat alerts disabled." : "All chat alerts enabled.");
});

chatPulseToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    chatPulseEnabled: chatPulseToggle.checked
  });
  setMessage("Chat pulse " + (next.chatPulseEnabled !== false ? "enabled." : "disabled."));
});

chatSoundToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    chatSoundEnabled: chatSoundToggle.checked
  });
  setMessage("Chat sound " + (next.chatSoundEnabled !== false ? "enabled." : "disabled."));
});

chatBadgeToggle.addEventListener("change", () => {
  const next = window.TBRAuth.saveStudioSettings({
    chatBadgeEnabled: chatBadgeToggle.checked
  });
  setMessage("Chat badge " + (next.chatBadgeEnabled !== false ? "enabled." : "disabled."));
});

saveSettingsBtn.addEventListener("click", async () => {
  const url = getDefaultRealtimeBaseUrl();
  if (isAdminUser) {
    realtimeUrlInput.value = url;
    localStorage.setItem(REALTIME_URL_KEY, url);
  }
  const saved = realSaveStudioSettings({
    chatAlertsDisabledAll: chatAlertsDisableAllToggle.checked,
    chatPulseEnabled: chatPulseToggle.checked,
    chatSoundEnabled: chatSoundToggle.checked,
    chatBadgeEnabled: chatBadgeToggle.checked,
    chatReadReceiptsEnabled: chatReadReceiptsToggle.checked,
    presenceVisible: presenceVisibleToggle.checked,
    reactionsEnabled: reactionsVisibleToggle.checked,
    chatSelfBubbleTheme: chatBubbleThemeSelect.value || "blue",
    recordingDefaultFormat: recordingFormatSelect.value || "video",
    recordingDefaultQuality: recordingQualitySelect.value || "standard",
    recordingNamePattern: recordingNamePatternSelect.value || "show-date",
    recordingDefaultCountdownSeconds: (() => {
      const value = Number(recordingCountdownSecondsSelect.value);
      return value === 3 || value === 5 || value === 10 ? value : 3;
    })(),
    recordingSafetyAutoStopMinutes: Math.max(0, Number(recordingAutoStopMinutesSelect.value) || 0),
    recordingAutoSplitMinutes: Math.max(0, Number(recordingAutoSplitMinutesSelect.value) || 0),
    recordingMusicFadeInDurationSeconds: getClampedSettingsSelectValue(recordingFadeInDurationSecondsSelect, 1, 20, 2),
    recordingMusicFadeOutDurationSeconds: getClampedSettingsSelectValue(recordingFadeOutDurationSecondsSelect, 1, 20, 5),
    recordingMusicAutoFadeInStartSeconds: getClampedSettingsSelectValue(recordingAutoFadeInStartSecondsSelect, 1, 30, 1),
    recordingMusicAutoFadeInDurationSeconds: getClampedSettingsSelectValue(recordingAutoFadeInDurationSecondsSelect, 1, 20, 2),
    recordingMusicAutoFadeOutStartSeconds: getClampedSettingsSelectValue(recordingAutoFadeOutStartSecondsSelect, 1, 30, 5),
    recordingMusicAutoFadeOutDurationSeconds: getClampedSettingsSelectValue(recordingAutoFadeOutDurationSecondsSelect, 1, 20, 5),
    uiContainerMode: containersLightToggle.checked ? "light" : "dark",
    cameraAutoStart: cameraAutoStartToggle.checked,
    cameraBackgroundMode: draftStudioSettings.cameraBackgroundMode || "off",
    cameraBackgroundImageDataUrl: draftStudioSettings.cameraBackgroundImageDataUrl || "",
    cameraBackgroundImageName: draftStudioSettings.cameraBackgroundImageName || "",
    pushToTalkEnabled: pushToTalkDefaultToggle.checked,
    usingHeadphones: headphonesDefaultToggle.checked,
    micPreset: micPresetSelect.value || "custom",
    micLimiterEnabled: micClipGuardToggle.checked,
    micEchoCancellation: micEchoDefaultToggle.checked,
    micNoiseSuppression: micNoiseDefaultToggle.checked,
    micAutoGainControl: micAgcDefaultToggle.checked,
    micInputMonitoringEnabled: micInputMonitoringToggle.checked,
    micNoiseGateThresholdDb: (() => {
      const parsed = Number(micNoiseGateThresholdSelect.value);
      const allowed = new Set([-100, -55, -50, -45, -40, -35, -30]);
      return allowed.has(parsed) ? parsed : -45;
    })(),
    micLoudnessTargetPreset: (() => {
      const allowed = new Set(["podcast-standard", "natural", "broadcast-loud"]);
      return allowed.has(micLoudnessTargetSelect.value) ? micLoudnessTargetSelect.value : "podcast-standard";
    })(),
    preferredCameraId: cameraDefaultSelect.value || "",
    preferredMicId: micDefaultSelect.value || "",
    preferredSpeakerId: speakerDefaultSelect ? speakerDefaultSelect.value || "" : draftStudioSettings.preferredSpeakerId || ""
  });
  draftStudioSettings = { ...saved };
  if ((isAdminUser || canCurrentUserManageSite() || canCurrentUserModerateChat()) && typeof window.TBRAuth.saveAdminSettings === "function") {
    const adminResult = await window.TBRAuth.saveAdminSettings(collectAdminSettingsFromControls());
    if (!adminResult.ok) {
      setErrorMessage(adminResult.error || "Admin settings save failed.");
      return;
    }
    adminSettingsState = { ...(adminResult.settings || getAdminSettingsDraft()) };
    applyAdminSettingsToControls(adminSettingsState);
  }
  setMessage("Settings saved.");
});

if (clearChatHistoryBtn) {
  clearChatHistoryBtn.addEventListener("click", async () => {
    if (!isAdminUser && !canCurrentUserModerateChat()) {
      return;
    }
    const confirmed = await openSettingsConfirmDialog(
      "This permanently deletes all chat messages and reactions for everyone. This action cannot be undone. Are you sure you want to continue?",
      "Delete Chat History?"
    );
    if (!confirmed) {
      return;
    }
    if (typeof window.TBRAuth.clearChatHistoryForAdmin !== "function") {
      setMessage("Chat admin API is unavailable.");
      settingsMessage.classList.remove("success");
      settingsMessage.classList.add("error");
      return;
    }
    clearChatHistoryBtn.disabled = true;
    try {
      const result = await window.TBRAuth.clearChatHistoryForAdmin();
      if (!result.ok) {
        setMessage(result.error || "Unable to clear chat history.");
        settingsMessage.classList.remove("success");
        settingsMessage.classList.add("error");
        return;
      }
      setMessage("Chat history cleared for all users.");
      settingsMessage.classList.remove("error");
      settingsMessage.classList.add("success");
    } finally {
      clearChatHistoryBtn.disabled = false;
    }
  });
}

if (guestInviteBtn) {
  guestInviteBtn.addEventListener("click", async () => {
    if ((!isAdminUser && !canCurrentUserManageGuests()) || typeof window.TBRAuth.adminCreateGuestInvite !== "function") {
      return;
    }
    guestInviteBtn.disabled = true;
    try {
      const result = await window.TBRAuth.adminCreateGuestInvite();
      if (!result.ok) {
        setGuestInviteStatus(result.error || "Unable to create guest invite.", true);
        return;
      }
      if (guestInviteLinkInput) {
        guestInviteLinkInput.value = String(result.inviteUrl || "");
      }
      setGuestInviteModalOpen(true);
      if (guestInviteLinkInput) {
        guestInviteLinkInput.focus();
        guestInviteLinkInput.select();
      }
      setGuestInviteStatus("Guest invite ready (" + String(result.expiresMinutes || 0) + " min).", false);
      setMessage("Guest invite generated.");
      renderAdminUsers().catch(() => {});
    } finally {
      guestInviteBtn.disabled = false;
    }
  });
}

if (guestInviteCloseBtn) {
  guestInviteCloseBtn.addEventListener("click", () => {
    setGuestInviteModalOpen(false);
  });
}

if (guestInviteBackdrop) {
  guestInviteBackdrop.addEventListener("click", () => {
    setGuestInviteModalOpen(false);
  });
}

if (guestInviteCopyBtn) {
  guestInviteCopyBtn.addEventListener("click", async () => {
    const link = String((guestInviteLinkInput && guestInviteLinkInput.value) || "").trim();
    if (!link) {
      setGuestInviteStatus("No invite link is available to copy.", true);
      return;
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(link);
      } else if (guestInviteLinkInput) {
        guestInviteLinkInput.focus();
        guestInviteLinkInput.select();
        document.execCommand("copy");
      }
      setGuestInviteStatus("Invite link copied. Ready to share.", false);
    } catch (error) {
      setGuestInviteStatus("Copy failed. Select and copy the link manually.", true);
    }
  });
}

if (guestAdminCloseBtn) {
  guestAdminCloseBtn.addEventListener("click", () => {
    closeGuestAdminModal();
  });
}

if (guestAdminCancelBtn) {
  guestAdminCancelBtn.addEventListener("click", () => {
    closeGuestAdminModal();
  });
}

if (guestAdminBackdrop) {
  guestAdminBackdrop.addEventListener("click", () => {
    closeGuestAdminModal();
  });
}

if (userAdminCloseBtn) {
  userAdminCloseBtn.addEventListener("click", () => {
    closeUserAdminModal();
  });
}

if (userAdminCancelBtn) {
  userAdminCancelBtn.addEventListener("click", () => {
    closeUserAdminModal();
  });
}

if (userAdminBackdrop) {
  userAdminBackdrop.addEventListener("click", () => {
    closeUserAdminModal();
  });
}

if (userAdminRoleSelect) {
  userAdminRoleSelect.addEventListener("change", () => {
    syncUserAdminRolePresentation();
  });
}

if (userAdminResetPasswordBtn) {
  userAdminResetPasswordBtn.addEventListener("click", () => {
    if (!activeUserAdminUsername) {
      return;
    }
    closeUserAdminModal();
    openSettingsPasswordModal(activeUserAdminUsername);
  });
}

if (userAdminDeleteUserBtn) {
  userAdminDeleteUserBtn.addEventListener("click", async () => {
    const username = String(activeUserAdminUsername || "").trim();
    if (!username) {
      return;
    }
    const confirmed = await openSettingsConfirmDialog(
      "This permanently deletes @" + username + " and cannot be undone. Are you sure you want to continue?",
      "Delete User?"
    );
    if (!confirmed) {
      return;
    }
    if (typeof window.TBRAuth.adminDeleteUser !== "function") {
      setErrorMessage("Delete user API is unavailable.");
      return;
    }
    userAdminDeleteUserBtn.disabled = true;
    try {
      const result = await window.TBRAuth.adminDeleteUser(username);
      if (!result.ok) {
        setErrorMessage(result.error || "Unable to delete user.");
        return;
      }
      closeUserAdminModal();
      setMessage("Deleted @" + username + ".");
      renderAdminUsers().catch(() => {
        // Ignore refresh errors.
      });
    } finally {
      userAdminDeleteUserBtn.disabled = false;
    }
  });
}

if (userAdminSaveBtn) {
  userAdminSaveBtn.addEventListener("click", async () => {
    const username = String(activeUserAdminUsername || "").trim();
    if (!username) {
      return;
    }
    const rowData = getUserAdminRowData(username);
    if (!rowData) {
      setErrorMessage("Unable to load selected user.");
      return;
    }
    const nextRole = userAdminRoleSelect && userAdminRoleSelect.value === "admin" ? "admin" : "user";
    const currentRole = rowData.role === "admin" ? "admin" : rowData.role === "guest" ? "guest" : "user";
    const nextPermissions = {};
    userAdminPermissionInputs.forEach((input) => {
      const key = String(input.getAttribute("data-user-admin-permission") || "");
      nextPermissions[key] = !!input.checked;
    });
    const currentPermissions = rowData.permissions && typeof rowData.permissions === "object" ? rowData.permissions : {};
    const useCustomPermissions = nextRole !== "admin";
    const roleChanged = currentRole !== "guest" && nextRole !== currentRole;
    const permissionsChanged =
      useCustomPermissions &&
      ["hostControl", "recordingControl", "chatModeration", "guestManagement", "siteSettings"].some(
        (key) => !!currentPermissions[key] !== !!nextPermissions[key]
      );
    if (!roleChanged && !permissionsChanged) {
      closeUserAdminModal();
      return;
    }
    if (roleChanged && typeof window.TBRAuth.updateUserRole !== "function") {
      setErrorMessage("Role update API is unavailable.");
      return;
    }
    if (permissionsChanged && typeof window.TBRAuth.updateUserPermissions !== "function") {
      setErrorMessage("Permission update API is unavailable.");
      return;
    }
    userAdminSaveBtn.disabled = true;
    if (userAdminRoleSelect) {
      userAdminRoleSelect.disabled = true;
    }
    userAdminPermissionInputs.forEach((input) => {
      input.disabled = true;
    });
    try {
      if (roleChanged) {
        const roleResult = await window.TBRAuth.updateUserRole(username, nextRole);
        if (!roleResult.ok) {
          setErrorMessage(roleResult.error || "Role update failed.");
          return;
        }
      }
      if (permissionsChanged) {
        const permissionsResult = await window.TBRAuth.updateUserPermissions(username, nextPermissions);
        if (!permissionsResult.ok) {
          setErrorMessage(permissionsResult.error || "Permission update failed.");
          return;
        }
      }
      closeUserAdminModal();
      setMessage("Updated access for @" + username + ".");
      renderAdminUsers().catch(() => {
        // Ignore refresh errors.
      });
    } finally {
      userAdminSaveBtn.disabled = false;
      if (userAdminRoleSelect) {
        userAdminRoleSelect.disabled = false;
      }
      userAdminPermissionInputs.forEach((input) => {
        input.disabled = false;
      });
    }
  });
}

if (guestDisableBtn) {
  guestDisableBtn.addEventListener("click", async () => {
    if (!isAdminUser && !canCurrentUserManageGuests()) {
      return;
    }
    const enabling = !guestEnabledState;
    const canRun = enabling
      ? typeof window.TBRAuth.adminEnableGuest === "function"
      : typeof window.TBRAuth.adminDisableGuest === "function";
    if (!canRun) {
      setGuestInviteStatus("Guest access API is unavailable.", true);
      return;
    }
    const confirmed = await openSettingsConfirmDialog(
      enabling
        ? "Enable guest access now? Existing valid invite links will be allowed to sign in."
        : "Disable guest access now? Existing invite links can still be generated, but sign-in remains blocked until enabled.",
      enabling ? "Enable Guest?" : "Disable Guest?",
      enabling ? "Enable" : "Disable",
      !enabling
    );
    if (!confirmed) {
      return;
    }
    guestDisableBtn.disabled = true;
    try {
      const result = enabling ? await window.TBRAuth.adminEnableGuest() : await window.TBRAuth.adminDisableGuest();
      if (!result.ok) {
        setGuestInviteStatus(result.error || "Unable to update guest access.", true);
        return;
      }
      setGuestInviteStatus(enabling ? "Guest access enabled." : "Guest access disabled.", false);
      setMessage(enabling ? "Guest access enabled." : "Guest access disabled.");
      guestEnabledState = enabling;
      updateGuestAccessButtonState();
      renderAdminUsers().catch(() => {});
    } finally {
      guestDisableBtn.disabled = false;
    }
  });
}

if (guestAdminSaveBtn) {
  guestAdminSaveBtn.addEventListener("click", async () => {
    if ((!isAdminUser && !canCurrentUserManageGuests()) || !activeGuestAdminUsername) {
      closeGuestAdminModal();
      return;
    }
    if (typeof window.TBRAuth.saveAdminSettings !== "function") {
      setErrorMessage("Guest settings API is unavailable.");
      return;
    }
    const current = getAdminSettingsDraft();
    const nextGuestSettings = collectGuestSettingsFromControls();
    const changed =
      Number(current.guestInviteExpiryMinutes || 120) !== Number(nextGuestSettings.guestInviteExpiryMinutes || 120) ||
      Number(current.guestMaxSessionMinutes || 120) !== Number(nextGuestSettings.guestMaxSessionMinutes || 120) ||
      String(current.guestDisplayName || "Guest") !== String(nextGuestSettings.guestDisplayName || "Guest");
    if (!changed) {
      closeGuestAdminModal();
      return;
    }
    guestAdminSaveBtn.disabled = true;
    if (guestAdminDisplayNameInput) guestAdminDisplayNameInput.disabled = true;
    if (guestAdminInviteExpirySelect) guestAdminInviteExpirySelect.disabled = true;
    if (guestAdminSessionMaxSelect) guestAdminSessionMaxSelect.disabled = true;
    try {
      const result = await window.TBRAuth.saveAdminSettings(nextGuestSettings);
      if (!result.ok) {
        setErrorMessage(result.error || "Unable to save guest settings.");
        return;
      }
      adminSettingsState = { ...(result.settings || getAdminSettingsDraft()) };
      applyAdminSettingsToControls(adminSettingsState);
      closeGuestAdminModal();
      setMessage("Guest controls updated.");
      renderAdminUsers().catch(() => {});
    } finally {
      guestAdminSaveBtn.disabled = false;
      if (guestAdminDisplayNameInput) guestAdminDisplayNameInput.disabled = false;
      if (guestAdminInviteExpirySelect) guestAdminInviteExpirySelect.disabled = false;
      if (guestAdminSessionMaxSelect) guestAdminSessionMaxSelect.disabled = false;
    }
  });
}

[
  adminAllowUserHostToggle,
  adminAllowUserRecordingToggle,
  adminRecordingMaxMinutesSelect,
  adminRecordingRetentionSelect,
  adminRecordingDownloadAccessSelect,
  adminRecordingLibraryVisibilitySelect,
  adminChatAttachmentsToggle,
  adminChatVideoAttachmentsToggle,
  adminChatReactionsToggle,
  adminChatImageMaxSelect,
  adminChatVideoMaxSelect,
  adminForceTwoFaToggle,
  adminCaptchaReverifyDaysSelect,
  adminGoogleLoginToggle,
  adminFacebookLoginToggle,
  adminMaintenanceModeToggle,
  adminMaintenanceMessageInput,
  adminSupportContactInput
].forEach((el) => {
  if (!el) {
    return;
  }
  const eventName = el.tagName === "INPUT" && el.type !== "checkbox" ? "input" : "change";
  el.addEventListener(eventName, () => {
    if (!isAdminUser && !canCurrentUserManageSite() && !canCurrentUserModerateChat()) {
      return;
    }
    updateAdminSettingsDraft(collectAdminSettingsFromControls());
  });
});

async function runAdminStudioAction(action, successText) {
  if ((!isAdminUser && !canCurrentUserManageSite()) || typeof window.TBRAuth.runStudioAdminAction !== "function") {
    return;
  }
  const result = await window.TBRAuth.runStudioAdminAction(action);
  if (!result.ok) {
    setErrorMessage(result.error || "Studio action failed.");
    return;
  }
  setMessage(successText);
  refreshAuditLog().catch(() => {});
}

if (adminMuteAllBtn) {
  adminMuteAllBtn.addEventListener("click", async () => {
    await runAdminStudioAction("muteAll", "Mute-all command sent.");
  });
}

if (adminForceOffAirBtn) {
  adminForceOffAirBtn.addEventListener("click", async () => {
    await runAdminStudioAction("forceOffAir", "Force Off-Air command sent.");
  });
}

if (adminClearHostBtn) {
  adminClearHostBtn.addEventListener("click", async () => {
    await runAdminStudioAction("clearHost", "Host cleared.");
  });
}

if (adminClearSpotlightBtn) {
  adminClearSpotlightBtn.addEventListener("click", async () => {
    await runAdminStudioAction("clearSpotlight", "Spotlight cleared.");
  });
}

if (adminExportChatBtn) {
  adminExportChatBtn.addEventListener("click", async () => {
    if ((!isAdminUser && !canCurrentUserModerateChat()) || typeof window.TBRAuth.exportChatForAdmin !== "function") {
      return;
    }
    const result = await window.TBRAuth.exportChatForAdmin();
    if (!result.ok) {
      setErrorMessage(result.error || "Chat export failed.");
      return;
    }
    const blob = new Blob([JSON.stringify({ exportedAt: result.exportedAt, messages: result.messages }, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "tbr-chat-export-" + new Date().toISOString().replace(/[:.]/g, "-") + ".json";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setMessage("Chat export downloaded.");
  });
}

if (adminRefreshHealthBtn) {
  adminRefreshHealthBtn.addEventListener("click", () => {
    refreshDiagnostics().catch(() => {});
  });
}

if (adminRefreshAuditBtn) {
  adminRefreshAuditBtn.addEventListener("click", () => {
    refreshAuditLog().catch(() => {});
  });
}

if (aboutTermsBtn) {
  aboutTermsBtn.addEventListener("click", () => {
    closeAllAboutModals();
    setAboutModalOpen(aboutTermsModal, true);
  });
}

if (aboutCookiesBtn) {
  aboutCookiesBtn.addEventListener("click", () => {
    closeAllAboutModals();
    setAboutModalOpen(aboutCookiesModal, true);
  });
}

if (aboutPrivacyBtn) {
  aboutPrivacyBtn.addEventListener("click", () => {
    closeAllAboutModals();
    setAboutModalOpen(aboutPrivacyModal, true);
  });
}

if (aboutTermsCloseBtn) {
  aboutTermsCloseBtn.addEventListener("click", () => {
    setAboutModalOpen(aboutTermsModal, false);
  });
}

if (aboutCookiesCloseBtn) {
  aboutCookiesCloseBtn.addEventListener("click", () => {
    setAboutModalOpen(aboutCookiesModal, false);
  });
}

if (aboutPrivacyCloseBtn) {
  aboutPrivacyCloseBtn.addEventListener("click", () => {
    setAboutModalOpen(aboutPrivacyModal, false);
  });
}

if (aboutTermsBackdrop) {
  aboutTermsBackdrop.addEventListener("click", () => {
    setAboutModalOpen(aboutTermsModal, false);
  });
}

if (aboutCookiesBackdrop) {
  aboutCookiesBackdrop.addEventListener("click", () => {
    setAboutModalOpen(aboutCookiesModal, false);
  });
}

if (aboutPrivacyBackdrop) {
  aboutPrivacyBackdrop.addEventListener("click", () => {
    setAboutModalOpen(aboutPrivacyModal, false);
  });
}

if (settingsConfirmCancelBtn) {
  settingsConfirmCancelBtn.addEventListener("click", () => {
    closeSettingsConfirmDialog(false);
  });
}

if (settingsConfirmDeleteBtn) {
  settingsConfirmDeleteBtn.addEventListener("click", () => {
    closeSettingsConfirmDialog(true);
  });
}

if (settingsConfirmBackdrop) {
  settingsConfirmBackdrop.addEventListener("click", () => {
    closeSettingsConfirmDialog(false);
  });
}

if (settingsPasswordCancelBtn) {
  settingsPasswordCancelBtn.addEventListener("click", () => {
    closeSettingsPasswordModal();
  });
}

if (settingsPasswordBackdrop) {
  settingsPasswordBackdrop.addEventListener("click", () => {
    closeSettingsPasswordModal();
  });
}

if (settingsPasswordSaveBtn) {
  settingsPasswordSaveBtn.addEventListener("click", async () => {
    const targetUsername = pendingPasswordUsername;
    if (!isAdminUser || !targetUsername) {
      closeSettingsPasswordModal();
      return;
    }
    const newPassword = String(settingsPasswordNewInput && settingsPasswordNewInput.value ? settingsPasswordNewInput.value : "");
    const confirmPassword = String(
      settingsPasswordConfirmInput && settingsPasswordConfirmInput.value ? settingsPasswordConfirmInput.value : ""
    );
    if (!newPassword || newPassword.length < 8) {
      setSettingsPasswordError("Password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setSettingsPasswordError("Passwords do not match.");
      return;
    }
    if (typeof window.TBRAuth.adminResetUserPassword !== "function") {
      setSettingsPasswordError("Password reset API is unavailable.");
      return;
    }
    settingsPasswordSaveBtn.disabled = true;
    try {
      const result = await window.TBRAuth.adminResetUserPassword(targetUsername, newPassword);
      if (!result.ok) {
        setSettingsPasswordError(result.error || "Unable to reset password.");
        return;
      }
      closeSettingsPasswordModal();
      setMessage("Password reset for @" + targetUsername + ".");
      settingsMessage.classList.remove("error");
      settingsMessage.classList.add("success");
    } finally {
      settingsPasswordSaveBtn.disabled = false;
    }
  });
}

if (usersAdminList) {
  usersAdminList.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    if (!isAdminUser && !canCurrentUserManageGuests()) {
      return;
    }
    const row = target.closest(".users-admin-row");
    if (!row) {
      return;
    }
    const encodedUsername = String(row.getAttribute("data-username") || "").trim();
    let username = "";
    try {
      username = decodeURIComponent(encodedUsername || "");
    } catch (error) {
      username = encodedUsername;
    }
    const openGuestBtn = target.closest("[data-open-guest-admin='true']");
    if (openGuestBtn) {
      const rowData = getUserAdminRowData(username);
      if (rowData) {
        openGuestAdminModal(rowData);
      }
      return;
    }
    const openManageBtn = target.closest("[data-open-user-admin='true']");
    if (openManageBtn && isAdminUser) {
      const rowData = getUserAdminRowData(username);
      if (rowData) {
        openUserAdminModal(rowData);
      }
    }
  });
}

if (navigator.mediaDevices && navigator.mediaDevices.addEventListener) {
  navigator.mediaDevices.addEventListener("devicechange", () => {
    loadDeviceDefaults().catch(() => {
      // Ignore refresh errors.
    });
  });
}

profileMenuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = profileMenuBtn.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

document.addEventListener("click", (event) => {
  if (!profileMenuEl.contains(event.target)) {
    setMenuOpen(false);
  }
  if (!(event.target instanceof Element) || !event.target.closest("[data-role-picker='true']")) {
    closeAllRoleMenus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSettingsConfirmDialog(false);
    closeSettingsPasswordModal();
    closeGuestAdminModal();
    closeUserAdminModal();
    setGuestInviteModalOpen(false);
    closeAllAboutModals();
    closeAllRoleMenus();
    setMenuOpen(false);
  }
});

profileLogoutBtn.addEventListener("click", async () => {
  stopSessionSyncLoop();
  await Promise.race([
    sendPresenceLeaveOnLogout(),
    new Promise((resolve) => setTimeout(resolve, 350))
  ]);
  window.TBRAuth.clearSession();
  window.location.replace("./");
});

window.addEventListener("beforeunload", () => {
  stopSessionSyncLoop();
});

settingsTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-settings-tab") || "";
    setActiveSettingsTab(key);
  });
});

applyAdminAccessControl();
populateNumericSettingsSelect(recordingFadeInDurationSecondsSelect, 1, 20, "seconds");
populateNumericSettingsSelect(recordingFadeOutDurationSecondsSelect, 1, 20, "seconds");
populateNumericSettingsSelect(recordingAutoFadeInStartSecondsSelect, 1, 30, "seconds");
populateNumericSettingsSelect(recordingAutoFadeInDurationSecondsSelect, 1, 20, "seconds");
populateNumericSettingsSelect(recordingAutoFadeOutStartSecondsSelect, 1, 30, "seconds");
populateNumericSettingsSelect(recordingAutoFadeOutDurationSecondsSelect, 1, 20, "seconds");
setActiveSettingsTab("devices");
loadSettings();
loadAdminSettingsState().catch(() => {
  applyAdminSettingsToControls(getFallbackAdminSettings());
});
startSessionSyncLoop();
renderAdminUsers().catch(() => {
  // Ignore initial users render errors.
});
refreshDiagnostics().catch(() => {
  // Ignore diagnostics load errors.
});
refreshAuditLog().catch(() => {
  // Ignore audit load errors.
});
refreshAboutInfo().catch(() => {
  // Ignore about panel load errors.
});
loadDeviceDefaults().catch(() => {
  fillDeviceSelect(cameraDefaultSelect, [], "camera", "");
  fillDeviceSelect(micDefaultSelect, [], "microphone", "");
  if (speakerDefaultSelect) {
    fillDeviceSelect(speakerDefaultSelect, [], "speaker", "");
  }
  setDeviceStatus("Could not load device list. Try Detect Devices.");
});
