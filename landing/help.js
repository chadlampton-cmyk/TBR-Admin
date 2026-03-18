const profileMenuEl = document.getElementById("profile-menu");
const profileMenuBtn = document.getElementById("profile-menu-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const profileAvatarEl = document.getElementById("profile-avatar");
const profileAvatarImgEl = document.getElementById("profile-avatar-img");
const profileUserEl = document.getElementById("profile-user");
const profileLogoutBtn = document.getElementById("profile-logout-btn");
const helpBackLink = document.getElementById("help-back-link");
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
const helpTabButtons = Array.from(document.querySelectorAll("[data-help-tab]"));
const helpPanels = Array.from(document.querySelectorAll("[data-help-panel]"));

const REALTIME_URL_KEY = "tbr_realtime_url";
const DEFAULT_LOCAL_REALTIME_URL = "http://localhost:8787";
const DEFAULT_PROD_REALTIME_URL = "https://realtime.turnbucklereport.com";
const SESSION_SYNC_MS = 5000;
const helpIsEmbedded = new URLSearchParams(window.location.search).get("embed") === "1" || window.self !== window.top;

const session = window.TBRAuth.requireSession();
if (!session) {
  window.location.replace("./");
}

let sessionSyncTimer = null;
let sessionSyncInFlight = false;

if (helpIsEmbedded) {
  document.body.classList.add("help-embed");
}

function closeEmbeddedHelp() {
  if (!helpIsEmbedded) {
    return;
  }
  try {
    window.parent.postMessage({ type: "dfs-close-help-modal" }, window.location.origin);
  } catch (error) {
    // Ignore cross-window messaging issues.
  }
}

if (helpBackLink && helpIsEmbedded) {
  helpBackLink.textContent = "Close";
  helpBackLink.addEventListener("click", (event) => {
    event.preventDefault();
    closeEmbeddedHelp();
  });
}

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

function getActiveRealtimeBaseUrl() {
  const savedRealtime = localStorage.getItem(REALTIME_URL_KEY);
  const baseUrl = shouldPromoteToDefaultUrl(savedRealtime)
    ? getDefaultRealtimeBaseUrl()
    : normalizeRealtimeBaseUrl(savedRealtime || getDefaultRealtimeBaseUrl());
  try {
    localStorage.setItem(REALTIME_URL_KEY, baseUrl);
  } catch (error) {
    // Ignore storage write failures.
  }
  return baseUrl;
}

async function sendPresenceLeaveOnLogout() {
  const payload = {
    username: session.username,
    displayName: window.TBRAuth.getIdentity(session.username).displayName || session.username
  };
  try {
    await fetch(getActiveRealtimeBaseUrl() + "/presence/leave", {
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

function setActiveHelpTab(tabName) {
  const normalized = String(tabName || "about").trim() || "about";
  helpTabButtons.forEach((button) => {
    const matches = String(button.getAttribute("data-help-tab") || "") === normalized;
    button.classList.toggle("active", matches);
  });
  helpPanels.forEach((panel) => {
    const matches = String(panel.getAttribute("data-help-panel") || "") === normalized;
    panel.classList.toggle("hidden", !matches);
    panel.classList.toggle("active", matches);
  });
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

const sessionIdentity = window.TBRAuth.getIdentity(session.username);
profileUserEl.textContent =
  sessionIdentity.displayName !== sessionIdentity.username
    ? sessionIdentity.displayName + " (@" + sessionIdentity.username + ")"
    : sessionIdentity.username;

if (typeof window.TBRAuth.isCurrentUserGuest === "function" && window.TBRAuth.isCurrentUserGuest()) {
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
    closeAllAboutModals();
    setMenuOpen(false);
  }
});

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

if (aboutTermsBackdrop) {
  aboutTermsBackdrop.addEventListener("click", () => setAboutModalOpen(aboutTermsModal, false));
}

if (aboutCookiesBackdrop) {
  aboutCookiesBackdrop.addEventListener("click", () => setAboutModalOpen(aboutCookiesModal, false));
}

if (aboutPrivacyBackdrop) {
  aboutPrivacyBackdrop.addEventListener("click", () => setAboutModalOpen(aboutPrivacyModal, false));
}

if (aboutTermsCloseBtn) {
  aboutTermsCloseBtn.addEventListener("click", () => setAboutModalOpen(aboutTermsModal, false));
}

if (aboutCookiesCloseBtn) {
  aboutCookiesCloseBtn.addEventListener("click", () => setAboutModalOpen(aboutCookiesModal, false));
}

if (aboutPrivacyCloseBtn) {
  aboutPrivacyCloseBtn.addEventListener("click", () => setAboutModalOpen(aboutPrivacyModal, false));
}

helpTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveHelpTab(button.getAttribute("data-help-tab") || "about");
  });
});

profileLogoutBtn.addEventListener("click", async () => {
  stopSessionSyncLoop();
  await Promise.race([sendPresenceLeaveOnLogout(), new Promise((resolve) => setTimeout(resolve, 450))]);
  window.TBRAuth.clearSession();
  window.location.replace("./");
});

window.addEventListener("storage", (event) => {
  if (event.key === "tbr_studio_settings") {
    applyContainerMode();
  }
});

applyContainerMode();
setActiveHelpTab("about");
startSessionSyncLoop();
refreshAboutInfo().catch(() => {
  // Ignore about refresh errors.
});
