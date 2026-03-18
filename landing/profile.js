const profileMenuEl = document.getElementById("profile-menu");
const profileMenuBtn = document.getElementById("profile-menu-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const profileAvatarEl = document.getElementById("profile-avatar");
const profileAvatarImgEl = document.getElementById("profile-avatar-img");
const profileUserEl = document.getElementById("profile-user");
const profileLogoutBtn = document.getElementById("profile-logout-btn");
const profileMessage = document.getElementById("profile-message");

const profilePhotoPreview = document.getElementById("profile-photo-preview");
const profilePhotoFallback = document.getElementById("profile-photo-fallback");
const profilePhotoInput = document.getElementById("profile-photo-input");
const profilePhotoUploadBtn = document.getElementById("profile-photo-upload-btn");
const profilePhotoRemoveBtn = document.getElementById("profile-photo-remove-btn");
const profilePhotoEditBtn = document.getElementById("profile-photo-edit-btn");
const profileAliasInput = document.getElementById("profile-alias-input");
const profileUseAliasToggle = document.getElementById("profile-use-alias-toggle");
const profileDisplayName = document.getElementById("profile-display-name");
const profileUserMeta = document.getElementById("profile-user-meta");
const profileCreatedMeta = document.getElementById("profile-created-meta");
const profileSaveBtn = document.getElementById("profile-save-btn");
const avatarCategorySelect = document.getElementById("avatar-category-select");
const avatarPresetGrid = document.getElementById("avatar-preset-grid");
const avatarStudioModal = document.getElementById("avatar-studio-modal");
const avatarStudioBackdrop = document.getElementById("avatar-studio-backdrop");
const avatarStudioCloseBtn = document.getElementById("avatar-studio-close-btn");

const profileCurrentPasswordInput = document.getElementById("profile-current-password-input");
const profileNewPasswordInput = document.getElementById("profile-new-password-input");
const profileConfirmPasswordInput = document.getElementById("profile-confirm-password-input");
const profileChangePasswordBtn = document.getElementById("profile-change-password-btn");
const profileDeleteAccountBtn = document.getElementById("profile-delete-account-btn");
const profileDeleteModal = document.getElementById("profile-delete-modal");
const profileDeleteBackdrop = document.getElementById("profile-delete-backdrop");
const profileDeleteCancelBtn = document.getElementById("profile-delete-cancel-btn");
const profileDeleteConfirmBtn = document.getElementById("profile-delete-confirm-btn");
const REALTIME_URL_KEY = "tbr_realtime_url";
const DEFAULT_LOCAL_REALTIME_URL = "http://localhost:8787";
const DEFAULT_PROD_REALTIME_URL = "https://realtime.turnbucklereport.com";

const session = window.TBRAuth.requireSession();
if (!session) {
  window.location.replace("./");
}
if (typeof window.TBRAuth.isCurrentUserGuest === "function" && window.TBRAuth.isCurrentUserGuest()) {
  window.location.replace("./lounge");
}
const SESSION_SYNC_MS = 5000;
let sessionSyncTimer = null;
let sessionSyncInFlight = false;

let currentProfile = window.TBRAuth.getCurrentUserProfile();
let selectedAvatarPresetId = "";

const AVATAR_PRESETS = [
  { id: "space-planet", category: "space", title: "Planet Orbit", emoji: "🪐", bgA: "#173459", bgB: "#10233f" },
  { id: "space-nebula", category: "space", title: "Nebula Glow", emoji: "✨", bgA: "#4b2369", bgB: "#1f1d4e" },
  { id: "space-rocket", category: "space", title: "Rocket Launch", emoji: "🚀", bgA: "#3f2349", bgB: "#1e1d3c" },
  { id: "animal-panda", category: "animals", title: "Panda Mood", emoji: "🐼", bgA: "#1f303f", bgB: "#16222f" },
  { id: "animal-wolf", category: "animals", title: "Wolf Pack", emoji: "🐺", bgA: "#2d3f56", bgB: "#1d2b3d" },
  { id: "animal-eagle", category: "animals", title: "Eagle Eye", emoji: "🦅", bgA: "#4a331c", bgB: "#302211" },
  { id: "myth-dragon", category: "mythical", title: "Dragon Fire", emoji: "🐉", bgA: "#3d1f30", bgB: "#1f1227" },
  { id: "myth-unicorn", category: "mythical", title: "Unicorn Shine", emoji: "🦄", bgA: "#4a2158", bgB: "#1f1c43" },
  { id: "myth-phoenix", category: "mythical", title: "Phoenix Rise", emoji: "🔥", bgA: "#572715", bgB: "#2a1620" },
  {
    id: "sport-football",
    category: "sports",
    title: "Football",
    emoji: "🏈",
    bgA: "#2f4a1f",
    bgB: "#1d2f16"
  },
  { id: "sport-basketball", category: "sports", title: "Basketball", emoji: "🏀", bgA: "#5b3018", bgB: "#2a1b13" },
  { id: "sport-trophy", category: "sports", title: "Champion Cup", emoji: "🏆", bgA: "#514214", bgB: "#2d2710" }
];
function applyContainerMode() {
  const settings = window.TBRAuth.getStudioSettings();
  document.body.classList.toggle("ui-light", settings && settings.uiContainerMode === "light");
}

function isLocalRuntimeHost() {
  const host = String(window.location.hostname || "").toLowerCase();
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

function shouldPromoteToDefaultUrl(currentUrl) {
  const normalized = normalizeRealtimeBaseUrl(currentUrl || "");
  if (isLocalRuntimeHost()) {
    return !isLocalRealtimeUrl(normalized);
  }
  return normalized !== DEFAULT_PROD_REALTIME_URL;
}

async function sendPresenceLeaveOnLogout() {
  const savedRealtime = localStorage.getItem(REALTIME_URL_KEY);
  const baseUrl = shouldPromoteToDefaultUrl(savedRealtime)
    ? getDefaultRealtimeBaseUrl()
    : normalizeRealtimeBaseUrl(savedRealtime || getDefaultRealtimeBaseUrl());
  try {
    localStorage.setItem(REALTIME_URL_KEY, baseUrl);
  } catch (error) {
    // Ignore storage write failures.
  }
  const payload = {
    username: session.username,
    displayName: window.TBRAuth.getIdentity(session.username).displayName || session.username
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

function setAvatarStudioOpen(open) {
  if (!avatarStudioModal) {
    return;
  }
  const isOpen = !!open;
  avatarStudioModal.classList.toggle("hidden", !isOpen);
  avatarStudioModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
  if (!isOpen && window.location.hash === "#photo-studio") {
    history.replaceState(null, "", window.location.pathname);
  }
}

function setMessage(text, isError) {
  profileMessage.textContent = text;
  profileMessage.classList.remove("hidden");
  profileMessage.classList.remove("error", "success");
  profileMessage.classList.add(isError ? "error" : "success");
}

function setProfileDeleteModalOpen(open) {
  if (!profileDeleteModal) {
    return;
  }
  const isOpen = !!open;
  profileDeleteModal.classList.toggle("hidden", !isOpen);
  profileDeleteModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
}

function toInitial(value) {
  const text = String(value || "").trim();
  return (text[0] || "U").toUpperCase();
}

function formatMemberSince(isoText) {
  const date = new Date(String(isoText || ""));
  if (Number.isNaN(date.getTime())) {
    return "Member since --";
  }
  return "Member since " + date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function escapeSvg(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildAvatarPresetDataUrl(preset) {
  const title = escapeSvg(preset.title);
  const emoji = escapeSvg(preset.emoji || "⭐");
  const emojiDx = Number.isFinite(Number(preset.emojiDx)) ? Number(preset.emojiDx) : 0;
  const emojiDy = Number.isFinite(Number(preset.emojiDy)) ? Number(preset.emojiDy) : 0;
  const emojiScale = Number.isFinite(Number(preset.emojiScale)) ? Number(preset.emojiScale) : 1;
  const fontSize = Math.max(74, Math.round(102 * emojiScale));
  const emojiX = 120 + emojiDx;
  const emojiY = 120 + emojiDy;
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${preset.bgA}"/>
      <stop offset="100%" stop-color="${preset.bgB}"/>
    </linearGradient>
  </defs>
  <rect width="240" height="240" rx="120" fill="url(#g)"/>
  <circle cx="120" cy="120" r="104" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
  <text x="${emojiX}" y="${emojiY}" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}">${emoji}</text>
</svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function getPresetByDataUrl(dataUrl) {
  const target = String(dataUrl || "");
  return (
    AVATAR_PRESETS.find((preset) => buildAvatarPresetDataUrl(preset) === target) ||
    null
  );
}

function getFilteredPresets() {
  const selected = avatarCategorySelect ? String(avatarCategorySelect.value || "all") : "all";
  if (selected === "all") {
    return AVATAR_PRESETS;
  }
  return AVATAR_PRESETS.filter((preset) => preset.category === selected);
}

function setSelectedAvatarPreset(presetId) {
  selectedAvatarPresetId = String(presetId || "");
}

function renderAvatarPresetGrid() {
  if (!avatarPresetGrid) {
    return;
  }
  const presets = getFilteredPresets();
  avatarPresetGrid.innerHTML = "";
  presets.forEach((preset) => {
    const dataUrl = buildAvatarPresetDataUrl(preset);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "avatar-preset";
    if (selectedAvatarPresetId === preset.id) {
      button.classList.add("selected");
    }
    button.setAttribute("data-avatar-preset-id", preset.id);
    button.setAttribute("title", preset.title);
    button.setAttribute("aria-label", preset.title);

    const img = document.createElement("img");
    img.src = dataUrl;
    img.alt = preset.title;
    img.className = "avatar-preset-image";

    const text = document.createElement("span");
    text.className = "avatar-preset-title";
    text.textContent = preset.title;

    button.appendChild(img);
    button.appendChild(text);
    avatarPresetGrid.appendChild(button);
  });
}

function renderIdentity() {
  const identity = window.TBRAuth.getIdentity(session.username);
  profileUserEl.textContent = identity.displayName + " (@" + identity.username + ")";
  if (identity.avatarDataUrl) {
    profileAvatarEl.textContent = "";
    if (profileAvatarImgEl) {
      profileAvatarImgEl.src = identity.avatarDataUrl;
      profileAvatarImgEl.classList.remove("hidden");
    }
  } else {
    if (profileAvatarImgEl) {
      profileAvatarImgEl.removeAttribute("src");
      profileAvatarImgEl.classList.add("hidden");
    }
    profileAvatarEl.textContent = identity.initial;
  }

  const displayName = currentProfile.useAlias && currentProfile.alias ? currentProfile.alias : identity.username;
  profileDisplayName.textContent = displayName;
  profileUserMeta.textContent = "@" + identity.username;
  profileAliasInput.value = currentProfile.alias || "";
  profileUseAliasToggle.checked = !!currentProfile.useAlias && !!currentProfile.alias;

  if (currentProfile.avatarDataUrl) {
    profilePhotoPreview.src = currentProfile.avatarDataUrl;
    profilePhotoPreview.classList.remove("hidden");
    profilePhotoFallback.classList.add("hidden");
  } else {
    profilePhotoPreview.removeAttribute("src");
    profilePhotoPreview.classList.add("hidden");
    profilePhotoFallback.classList.remove("hidden");
    profilePhotoFallback.textContent = toInitial(displayName);
  }

  const matchedPreset = getPresetByDataUrl(currentProfile.avatarDataUrl || "");
  setSelectedAvatarPreset(matchedPreset ? matchedPreset.id : "");
  renderAvatarPresetGrid();
}

function refreshMeta() {
  const meta = window.TBRAuth.getCurrentUserMeta();
  profileCreatedMeta.textContent = formatMemberSince(meta && meta.createdAt);
}

function profilePayloadFromInputs() {
  return {
    alias: String(profileAliasInput.value || "").trim(),
    useAlias: !!profileUseAliasToggle.checked,
    avatarDataUrl: currentProfile.avatarDataUrl || ""
  };
}

function openAvatarStudioFromHash() {
  if (window.location.hash === "#photo-studio") {
    setAvatarStudioOpen(true);
  }
}

profilePhotoUploadBtn.addEventListener("click", () => {
  profilePhotoInput.click();
});

if (profilePhotoEditBtn) {
  profilePhotoEditBtn.addEventListener("click", () => {
    setAvatarStudioOpen(true);
  });
}

if (avatarStudioCloseBtn) {
  avatarStudioCloseBtn.addEventListener("click", () => {
    setAvatarStudioOpen(false);
  });
}

if (avatarStudioBackdrop) {
  avatarStudioBackdrop.addEventListener("click", () => {
    setAvatarStudioOpen(false);
  });
}

profilePhotoInput.addEventListener("change", () => {
  const file = profilePhotoInput.files && profilePhotoInput.files[0] ? profilePhotoInput.files[0] : null;
  if (!file) {
    return;
  }
  if (!String(file.type || "").startsWith("image/")) {
    setMessage("Please choose an image file.", true);
    return;
  }
  if (Number(file.size || 0) > 2 * 1024 * 1024) {
    setMessage("Image too large. Use 2MB or less.", true);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = String(reader.result || "");
    if (!dataUrl.startsWith("data:image/")) {
      setMessage("Unable to read selected image.", true);
      return;
    }
    currentProfile.avatarDataUrl = dataUrl;
    renderIdentity();
    setMessage("Profile photo ready. Save profile to apply.", false);
  };
  reader.onerror = () => {
    setMessage("Unable to read selected image.", true);
  };
  reader.readAsDataURL(file);
});

profilePhotoRemoveBtn.addEventListener("click", () => {
  currentProfile.avatarDataUrl = "";
  setSelectedAvatarPreset("");
  renderIdentity();
  setMessage("Profile photo removed. Save profile to apply.", false);
});

if (avatarCategorySelect) {
  avatarCategorySelect.addEventListener("change", () => {
    renderAvatarPresetGrid();
  });
}

if (avatarPresetGrid) {
  avatarPresetGrid.addEventListener("click", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }
    const presetButton = target.closest("[data-avatar-preset-id]");
    if (!presetButton) {
      return;
    }
    const presetId = String(presetButton.getAttribute("data-avatar-preset-id") || "");
    const preset = AVATAR_PRESETS.find((item) => item.id === presetId);
    if (!preset) {
      return;
    }
    currentProfile.avatarDataUrl = buildAvatarPresetDataUrl(preset);
    setSelectedAvatarPreset(preset.id);
    renderIdentity();
    setMessage("Preset selected. Save profile to apply.", false);
  });
}

profileSaveBtn.addEventListener("click", async () => {
  const payload = profilePayloadFromInputs();
  const result = await window.TBRAuth.saveCurrentUserProfile(payload);
  if (!result || !result.ok) {
    setMessage((result && result.error) || "Unable to save profile.", true);
    return;
  }
  currentProfile = result.profile;
  renderIdentity();
  setMessage("Profile saved.", false);
});

profileAliasInput.addEventListener("input", () => {
  currentProfile.alias = String(profileAliasInput.value || "");
  renderIdentity();
});

profileUseAliasToggle.addEventListener("change", () => {
  currentProfile.useAlias = !!profileUseAliasToggle.checked;
  renderIdentity();
});

profileChangePasswordBtn.addEventListener("click", async () => {
  const currentPassword = String(profileCurrentPasswordInput.value || "");
  const nextPassword = String(profileNewPasswordInput.value || "");
  const confirmPassword = String(profileConfirmPasswordInput.value || "");
  if (!currentPassword || !nextPassword || !confirmPassword) {
    setMessage("Enter current password, new password, and confirm password.", true);
    return;
  }
  if (nextPassword.length < 8) {
    setMessage("New password must be at least 8 characters.", true);
    return;
  }
  if (nextPassword !== confirmPassword) {
    setMessage("New password and confirmation do not match.", true);
    return;
  }
  const result = await window.TBRAuth.changePassword(currentPassword, nextPassword);
  if (!result || !result.ok) {
    setMessage((result && result.error) || "Unable to change password.", true);
    return;
  }
  profileCurrentPasswordInput.value = "";
  profileNewPasswordInput.value = "";
  profileConfirmPasswordInput.value = "";
  setMessage("Password changed successfully.", false);
});

if (profileDeleteAccountBtn) {
  profileDeleteAccountBtn.addEventListener("click", () => {
    setProfileDeleteModalOpen(true);
  });
}

if (profileDeleteCancelBtn) {
  profileDeleteCancelBtn.addEventListener("click", () => {
    setProfileDeleteModalOpen(false);
  });
}

if (profileDeleteBackdrop) {
  profileDeleteBackdrop.addEventListener("click", () => {
    setProfileDeleteModalOpen(false);
  });
}

if (profileDeleteConfirmBtn) {
  profileDeleteConfirmBtn.addEventListener("click", async () => {
    if (typeof window.TBRAuth.deleteCurrentUser !== "function") {
      setMessage("Delete account API is unavailable.", true);
      return;
    }
    profileDeleteConfirmBtn.disabled = true;
    try {
      const result = await window.TBRAuth.deleteCurrentUser();
      if (!result || !result.ok) {
        setMessage((result && result.error) || "Unable to delete account.", true);
        return;
      }
      window.location.replace("./");
    } finally {
      profileDeleteConfirmBtn.disabled = false;
      setProfileDeleteModalOpen(false);
    }
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
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setProfileDeleteModalOpen(false);
    setAvatarStudioOpen(false);
    setMenuOpen(false);
  }
});

window.addEventListener("hashchange", () => {
  openAvatarStudioFromHash();
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

applyContainerMode();
renderIdentity();
refreshMeta();
openAvatarStudioFromHash();
startSessionSyncLoop();
