const form = document.getElementById("login-form");
const googleSsoButton = document.getElementById("google-sso-btn");
const facebookSsoButton = document.getElementById("facebook-sso-btn");
const loginButton = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberInput = document.getElementById("remember");
const passwordToggle = document.getElementById("password-toggle");
const warningBanner = document.getElementById("attempt-warning");
const lockoutBanner = document.getElementById("lockout-warning");
const loginMessage = document.getElementById("login-message");
const forgotPasswordLink = document.getElementById("forgot-password-link");
const twoFaPanel = document.getElementById("twofa-panel");
const twoFaBackdrop = document.getElementById("twofa-backdrop");
const twoFaPhoneInput = document.getElementById("twofa-phone");
const twoFaPhoneLabel = document.getElementById("twofa-phone-label");
const twoFaCodeInput = document.getElementById("twofa-code");
const twoFaHint = document.getElementById("twofa-hint");
const twoFaSubmitBtn = document.getElementById("twofa-submit-btn");
const twoFaCancelBtn = document.getElementById("twofa-cancel-btn");
const captchaPanel = document.getElementById("captcha-panel");
const captchaBackdrop = document.getElementById("captcha-backdrop");
const captchaCancelBtn = document.getElementById("captcha-cancel-btn");
const captchaContinueBtn = document.getElementById("captcha-continue-btn");
const captchaTurnstileEl = document.getElementById("captcha-turnstile");
const forgotCodePanel = document.getElementById("forgot-code-panel");
const forgotCodeBackdrop = document.getElementById("forgot-code-backdrop");
const forgotCodeHint = document.getElementById("forgot-code-hint");
const forgotUsernameInput = document.getElementById("forgot-username");
const forgotCodeInput = document.getElementById("forgot-code");
const forgotCodeCancelBtn = document.getElementById("forgot-code-cancel-btn");
const forgotCodeSubmitBtn = document.getElementById("forgot-code-submit-btn");
const forgotResetPanel = document.getElementById("forgot-reset-panel");
const forgotResetBackdrop = document.getElementById("forgot-reset-backdrop");
const forgotResetPasswordInput = document.getElementById("forgot-reset-password");
const forgotResetConfirmInput = document.getElementById("forgot-reset-confirm");
const forgotResetCancelBtn = document.getElementById("forgot-reset-cancel-btn");
const forgotResetSubmitBtn = document.getElementById("forgot-reset-submit-btn");

const REALTIME_URL_KEY = "tbr_realtime_url";
const LOCAL_REALTIME_URL = "http://localhost:8787";
const PRODUCTION_REALTIME_URL = "https://realtime.turnbucklereport.com";

const WARNING_ATTEMPT = 4;
const MAX_ATTEMPTS = 5;
const LOCKOUT_MILLIS = 30 * 60 * 1000;

let failedAttempts = 0;
let lockoutUntil = null;
let revealingPassword = false;
let pendingTwoFactor = null;
let pendingGuestInviteToken = "";
let turnstileEnabled = false;
let turnstileSiteKey = "";
let turnstileWidgetId = null;
let turnstileToken = "";
let pendingCaptchaLogin = null;
let turnstileWidgetLoadFailed = false;
let pendingForgotPassword = null;
const isSafariBrowser =
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent || "") &&
  !/crios|fxios|edgios/i.test((navigator.userAgent || "").toLowerCase());
const canUseWebkitMask =
  typeof document !== "undefined" && "webkitTextSecurity" in document.documentElement.style;
const useSafariPasswordMasking = isSafariBrowser && canUseWebkitMask;

function forceHostedRealtimeUrl() {
  const host = String(window.location.hostname || "").toLowerCase();
  const isLocalHostRuntime = host === "localhost" || host === "127.0.0.1" || host === "::1" || host.endsWith(".local");
  try {
    localStorage.setItem(REALTIME_URL_KEY, isLocalHostRuntime ? LOCAL_REALTIME_URL : PRODUCTION_REALTIME_URL);
  } catch (error) {
    // Ignore storage write failures.
  }
}

function now() {
  return Date.now();
}

function isLockedOut() {
  return lockoutUntil && now() < lockoutUntil;
}

function updateUI() {
  const locked = isLockedOut();
  warningBanner.classList.add("hidden");
  lockoutBanner.classList.toggle("hidden", !locked);
  loginButton.disabled = locked;
  if (googleSsoButton) {
    googleSsoButton.disabled = false;
  }
  if (facebookSsoButton) {
    facebookSsoButton.disabled = false;
  }

  if (!locked && failedAttempts >= WARNING_ATTEMPT && failedAttempts < MAX_ATTEMPTS) {
    warningBanner.classList.remove("hidden");
  }

  if (locked) {
    const minutesRemaining = Math.ceil((lockoutUntil - now()) / (60 * 1000));
    lockoutBanner.textContent =
      "Account locked due to repeated failed sign-ins. Try again in " +
      minutesRemaining +
      " minute(s).";
  }
}

function setTwoFactorPending(nextPending) {
  pendingTwoFactor = nextPending || null;
  const active = !!pendingTwoFactor;
  const needsEnroll = !!(pendingTwoFactor && pendingTwoFactor.needsEnroll);
  const awaitingCode = !!(pendingTwoFactor && pendingTwoFactor.awaitingCode);
  if (twoFaPanel) {
    twoFaPanel.classList.toggle("hidden", !active);
  }
  if (twoFaPhoneLabel) {
    twoFaPhoneLabel.classList.toggle("hidden", !active || !needsEnroll || awaitingCode);
  }
  if (twoFaPhoneInput) {
    twoFaPhoneInput.classList.toggle("hidden", !active || !needsEnroll || awaitingCode);
    twoFaPhoneInput.disabled = !active || !needsEnroll || awaitingCode;
    if (!active) {
      twoFaPhoneInput.value = "";
    }
  }
  if (twoFaCodeInput) {
    twoFaCodeInput.classList.toggle("hidden", !active || (needsEnroll && !awaitingCode));
    twoFaCodeInput.disabled = !active || (needsEnroll && !awaitingCode);
    if (!active) {
      twoFaCodeInput.value = "";
    }
  }
  if (twoFaHint) {
    let hint = "Enter the code sent by text message.";
    if (active && needsEnroll && !awaitingCode) {
      hint = "Set up SMS 2FA: enter your mobile phone number.";
    } else if (active && pendingTwoFactor.phoneHint) {
      hint = "Enter the code sent to " + pendingTwoFactor.phoneHint + ".";
    }
    twoFaHint.textContent = hint;
  }
  if (loginButton) {
    loginButton.classList.toggle("hidden", active);
  }
  if (twoFaSubmitBtn) {
    twoFaSubmitBtn.textContent = needsEnroll && !awaitingCode ? "Send code" : "Verify code";
  }
  if (usernameInput) {
    usernameInput.disabled = active;
  }
  if (passwordInput) {
    passwordInput.disabled = active;
  }
  if (rememberInput) {
    rememberInput.disabled = active;
  }
}

function setForgotCodePending(nextPending) {
  pendingForgotPassword = nextPending || null;
  const active = !!pendingForgotPassword;
  const codeSent = !!(pendingForgotPassword && pendingForgotPassword.challengeToken);
  if (forgotCodePanel) {
    forgotCodePanel.classList.toggle("hidden", !active);
  }
  if (forgotUsernameInput) {
    forgotUsernameInput.disabled = codeSent;
    if (!active) {
      forgotUsernameInput.value = "";
    }
  }
  if (forgotCodeInput) {
    forgotCodeInput.disabled = !codeSent;
    if (!active) {
      forgotCodeInput.value = "";
    }
  }
  if (forgotCodeHint) {
    forgotCodeHint.textContent = codeSent
      ? "Enter the 6-digit code sent by text message."
      : "Enter your username to receive a password reset code by text message.";
  }
  if (forgotCodeSubmitBtn) {
    forgotCodeSubmitBtn.textContent = codeSent ? "Verify code" : "Send code";
  }
}

function setForgotResetPending(nextPending) {
  pendingForgotPassword = nextPending || null;
  const active = !!(pendingForgotPassword && pendingForgotPassword.resetToken);
  if (forgotResetPanel) {
    forgotResetPanel.classList.toggle("hidden", !active);
  }
  if (forgotResetPasswordInput) {
    forgotResetPasswordInput.disabled = !active;
    if (!active) {
      forgotResetPasswordInput.value = "";
    }
  }
  if (forgotResetConfirmInput) {
    forgotResetConfirmInput.disabled = !active;
    if (!active) {
      forgotResetConfirmInput.value = "";
    }
  }
}

function openForgotPasswordFlow() {
  setForgotResetPending(null);
  setForgotCodePending({
    challengeToken: "",
    username: usernameInput ? String(usernameInput.value || "").trim() : ""
  });
  if (forgotUsernameInput) {
    forgotUsernameInput.value = usernameInput ? String(usernameInput.value || "").trim() : "";
    forgotUsernameInput.focus();
  }
  setMessage("", false);
}

function setMessage(text, isError) {
  if (!text) {
    loginMessage.classList.add("hidden");
    return;
  }
  loginMessage.textContent = text;
  loginMessage.classList.remove("hidden");
  loginMessage.classList.toggle("error", !!isError);
  loginMessage.classList.toggle("success", !isError);
}

function setPasswordVisibility(show) {
  if (!passwordInput || !passwordToggle) {
    return;
  }
  const visible = !!show;
  if (useSafariPasswordMasking) {
    passwordInput.type = "text";
    passwordInput.style.webkitTextSecurity = visible ? "none" : "disc";
    passwordToggle.setAttribute("aria-pressed", visible ? "true" : "false");
    passwordToggle.setAttribute("aria-label", "Hold to show password");
    passwordToggle.title = "Hold to show password";
    return;
  }
  const nextType = visible ? "text" : "password";
  try {
    passwordInput.type = nextType;
  } catch (error) {
    // Safari/WebKit can occasionally throw when toggling type in edge autofill states.
  }
  if (passwordInput.type !== nextType) {
    try {
      passwordInput.setAttribute("type", nextType);
    } catch (error) {
      // Ignore and fall back to WebKit text-security behavior below.
    }
  }
  if (passwordInput.type !== nextType) {
    passwordInput.type = "text";
    passwordInput.style.webkitTextSecurity = visible ? "none" : "disc";
  } else if (!visible) {
    passwordInput.style.webkitTextSecurity = "";
  }
  passwordToggle.setAttribute("aria-pressed", visible ? "true" : "false");
  passwordToggle.setAttribute("aria-label", "Hold to show password");
  passwordToggle.title = "Hold to show password";
}

function startPasswordReveal() {
  revealingPassword = true;
  setPasswordVisibility(true);
}

function stopPasswordReveal() {
  if (!revealingPassword) {
    setPasswordVisibility(false);
    return;
  }
  revealingPassword = false;
  setPasswordVisibility(false);
}

async function attemptLogin(username, password, remember) {
  const primary = await window.TBRAuth.login(
    username,
    password,
    remember,
    turnstileToken,
    pendingGuestInviteToken
  );
  if (primary.ok) {
    pendingGuestInviteToken = "";
    return primary;
  }
  const trimmed = String(password || "").trim();
  if (trimmed && trimmed !== password) {
    const retry = await window.TBRAuth.login(
      username,
      trimmed,
      remember,
      turnstileToken,
      pendingGuestInviteToken
    );
    if (retry.ok) {
      pendingGuestInviteToken = "";
      retry._trimmedPasswordApplied = true;
      return retry;
    }
  }
  return primary;
}

function setCaptchaModalOpen(open) {
  if (!captchaPanel) {
    return;
  }
  captchaPanel.classList.toggle("hidden", !open);
}

function resetTurnstileChallenge() {
  turnstileToken = "";
  if (captchaContinueBtn) {
    captchaContinueBtn.disabled = true;
  }
  if (window.turnstile && turnstileWidgetId !== null) {
    try {
      window.turnstile.reset(turnstileWidgetId);
    } catch (error) {
      // Ignore reset races.
    }
  }
}

function ensureTurnstileWidget() {
  if (!turnstileEnabled || !turnstileSiteKey || !captchaTurnstileEl) {
    return;
  }
  if (!window.turnstile || typeof window.turnstile.render !== "function") {
    return;
  }
  if (turnstileWidgetId !== null) {
    return;
  }
  turnstileWidgetLoadFailed = false;
  turnstileWidgetId = window.turnstile.render(captchaTurnstileEl, {
    sitekey: turnstileSiteKey,
    theme: "dark",
    callback: (token) => {
      turnstileToken = String(token || "").trim();
      if (captchaContinueBtn) {
        captchaContinueBtn.disabled = !turnstileToken;
      }
    },
    "expired-callback": () => {
      turnstileToken = "";
      if (captchaContinueBtn) {
        captchaContinueBtn.disabled = true;
      }
    },
    "error-callback": () => {
      turnstileToken = "";
      turnstileWidgetLoadFailed = true;
      if (captchaContinueBtn) {
        captchaContinueBtn.disabled = true;
      }
      if (captchaPanel && !captchaPanel.classList.contains("hidden")) {
        setMessage("Security check is unavailable right now. Please retry.", true);
      }
    }
  });
}

async function runCredentialLogin(username, password, remember) {
  const result = await attemptLogin(username, password, remember);
  resetTurnstileChallenge();
  if (result.ok) {
    setMessage(
      result._trimmedPasswordApplied
        ? "Signed in. Extra spaces were removed from password input."
        : "Signed in. Redirecting...",
      false
    );
    setTimeout(() => {
      window.location.href = "./lounge";
    }, 350);
    return;
  }

  if (result.code === "TWO_FA_REQUIRED") {
    setTwoFactorPending({
      challengeToken: String(result.challengeToken || ""),
      needsEnroll: false,
      awaitingCode: true,
      phoneHint: String(result.phoneHint || "")
    });
    setMessage("Enter the SMS code to complete sign in.", false);
    if (twoFaCodeInput) {
      twoFaCodeInput.focus();
    }
    return;
  }

  if (result.code === "TWO_FA_ENROLL_REQUIRED") {
    setTwoFactorPending({
      challengeToken: String(result.challengeToken || ""),
      needsEnroll: true,
      awaitingCode: false,
      phoneHint: ""
    });
    setMessage("2FA setup is required for this account.", false);
    if (twoFaPhoneInput) {
      twoFaPhoneInput.focus();
    }
    return;
  }

  if (result.code === "LOCKED") {
    lockoutUntil = result.lockedUntil || now() + LOCKOUT_MILLIS;
    failedAttempts = 5;
    setMessage("Too many failed attempts. Account locked for 30 minutes.", true);
    updateUI();
    return;
  }

  if (String(result.code || "").startsWith("CAPTCHA_")) {
    setMessage(result.error || "Complete the security check and try again.", true);
    pendingCaptchaLogin = { username, password, remember };
    ensureTurnstileWidget();
    setCaptchaModalOpen(true);
    return;
  }

  if (result.code === "SERVICE_UNAVAILABLE") {
    setMessage(result.error || "Auth service unavailable. Please try again.", true);
    return;
  }

  if (result.code === "MAINTENANCE_MODE") {
    setMessage(result.error || "Studio maintenance is active right now.", true);
    return;
  }

  if (result.code === "VERIFY_RATE_LIMITED") {
    setMessage(result.error || "Too many verification texts were requested. Please wait a few minutes and try again.", true);
    return;
  }

  if (result.code === "GUEST_INVITE_REQUIRED" || result.code === "GUEST_DISABLED") {
    setMessage(result.error || "Guest invite is invalid, expired, or disabled.", true);
    return;
  }

  failedAttempts = result.failedAttempts || 0;
  if (failedAttempts >= WARNING_ATTEMPT) {
    setMessage("Invalid credentials. Next failure will lock the account.", true);
  } else {
    setMessage(result.error || "Invalid credentials.", true);
  }
  updateUI();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (isLockedOut()) {
    setMessage("Account temporarily locked. Please wait before trying again.", true);
    updateUI();
    return;
  }

  const formData = new FormData(form);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "");
  const remember = Boolean(formData.get("remember"));
  const twoFaPhone = String(formData.get("twofaPhone") || "").trim();
  const twoFaCode = String(formData.get("twofaCode") || "").trim();

  if (pendingTwoFactor) {
    if (pendingTwoFactor.needsEnroll && !pendingTwoFactor.awaitingCode) {
      if (!twoFaPhone) {
        setMessage("Enter a mobile phone number to set up 2FA.", true);
        return;
      }
      const enrollResult = await window.TBRAuth.startTwoFactorEnrollment(pendingTwoFactor.challengeToken, twoFaPhone);
      if (!enrollResult.ok) {
        setMessage(enrollResult.error || "Unable to send verification code.", true);
        return;
      }
      setTwoFactorPending({
        challengeToken: pendingTwoFactor.challengeToken,
        needsEnroll: true,
        awaitingCode: true,
        phoneHint: String(enrollResult.phoneHint || "")
      });
      setMessage("Code sent. Enter the 6-digit code to finish setup.", false);
      if (twoFaCodeInput) {
        twoFaCodeInput.focus();
      }
      return;
    }
    if (!twoFaCode) {
      setMessage("Enter the verification code from text message.", true);
      return;
    }
    const verifyResult = await window.TBRAuth.verifyTwoFactorLogin(pendingTwoFactor.challengeToken, twoFaCode);
    if (verifyResult.ok) {
      setMessage("Verified. Redirecting...", false);
      setTimeout(() => {
        window.location.href = "./lounge";
      }, 350);
      return;
    }
    setMessage(verifyResult.error || "Invalid verification code.", true);
    return;
  }

  if (!username || !password) {
    setMessage("Enter username and password.", true);
    return;
  }

  await runCredentialLogin(username, password, remember);
});

if (googleSsoButton) {
  googleSsoButton.addEventListener("click", () => {
    const started = typeof window.TBRAuth.startGoogleSso === "function" && window.TBRAuth.startGoogleSso();
    if (!started) {
      setMessage("Google sign-in is not configured yet.", true);
    }
  });
}

if (facebookSsoButton) {
  facebookSsoButton.addEventListener("click", () => {
    const started = typeof window.TBRAuth.startFacebookSso === "function" && window.TBRAuth.startFacebookSso();
    if (!started) {
      setMessage("Facebook sign-in is not configured yet.", true);
    }
  });
}

if (twoFaCancelBtn) {
  twoFaCancelBtn.addEventListener("click", () => {
    setTwoFactorPending(null);
    setMessage("Two-factor verification cancelled.", false);
  });
}

if (twoFaBackdrop) {
  twoFaBackdrop.addEventListener("click", () => {
    setTwoFactorPending(null);
    setMessage("Two-factor verification cancelled.", false);
  });
}

if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener("click", () => {
    openForgotPasswordFlow();
  });
}

if (forgotCodeCancelBtn) {
  forgotCodeCancelBtn.addEventListener("click", () => {
    setForgotCodePending(null);
    setMessage("Password reset cancelled.", false);
  });
}

if (forgotCodeBackdrop) {
  forgotCodeBackdrop.addEventListener("click", () => {
    setForgotCodePending(null);
    setMessage("Password reset cancelled.", false);
  });
}

if (forgotCodeSubmitBtn) {
  forgotCodeSubmitBtn.addEventListener("click", async () => {
    const current = pendingForgotPassword || { challengeToken: "", username: "" };
    const username = forgotUsernameInput ? String(forgotUsernameInput.value || "").trim() : "";
    const code = forgotCodeInput ? String(forgotCodeInput.value || "").trim() : "";
    if (!current.challengeToken) {
      if (!username) {
        setMessage("Enter your username to continue.", true);
        return;
      }
      forgotCodeSubmitBtn.disabled = true;
      try {
        const startResult = await window.TBRAuth.startForgotPassword(username);
        if (!startResult.ok) {
          setMessage(startResult.error || "Unable to start password reset.", true);
          return;
        }
        setForgotCodePending({
          challengeToken: String(startResult.challengeToken || ""),
          username
        });
        setMessage(startResult.message || "If this account is eligible, a verification code has been sent.", false);
        if (forgotCodeInput) {
          forgotCodeInput.focus();
        }
      } finally {
        forgotCodeSubmitBtn.disabled = false;
      }
      return;
    }
    if (!code) {
      setMessage("Enter the verification code from text message.", true);
      return;
    }
    forgotCodeSubmitBtn.disabled = true;
    try {
      const verifyResult = await window.TBRAuth.verifyForgotPasswordCode(current.challengeToken, code);
      if (!verifyResult.ok) {
        setMessage(verifyResult.error || "Invalid verification code.", true);
        return;
      }
      setForgotCodePending(null);
      setForgotResetPending({
        resetToken: String(verifyResult.resetToken || ""),
        username: current.username
      });
      if (forgotResetPasswordInput) {
        forgotResetPasswordInput.focus();
      }
      setMessage("Verification complete. Set a new password.", false);
    } finally {
      forgotCodeSubmitBtn.disabled = false;
    }
  });
}

if (forgotResetCancelBtn) {
  forgotResetCancelBtn.addEventListener("click", () => {
    setForgotResetPending(null);
    setMessage("Password reset cancelled.", false);
  });
}

if (forgotResetBackdrop) {
  forgotResetBackdrop.addEventListener("click", () => {
    setForgotResetPending(null);
    setMessage("Password reset cancelled.", false);
  });
}

if (forgotResetSubmitBtn) {
  forgotResetSubmitBtn.addEventListener("click", async () => {
    const resetToken = pendingForgotPassword && pendingForgotPassword.resetToken ? pendingForgotPassword.resetToken : "";
    const resetUsername = pendingForgotPassword && pendingForgotPassword.username ? pendingForgotPassword.username : "";
    const nextPassword = forgotResetPasswordInput ? String(forgotResetPasswordInput.value || "") : "";
    const confirmPassword = forgotResetConfirmInput ? String(forgotResetConfirmInput.value || "") : "";
    if (!resetToken) {
      setForgotResetPending(null);
      setMessage("Password reset session expired. Start again.", true);
      return;
    }
    if (!nextPassword || nextPassword.length < 8) {
      setMessage("New password must be at least 8 characters.", true);
      return;
    }
    if (nextPassword !== confirmPassword) {
      setMessage("Passwords do not match.", true);
      return;
    }
    forgotResetSubmitBtn.disabled = true;
    try {
      const resetResult = await window.TBRAuth.resetForgotPassword(resetToken, nextPassword);
      if (!resetResult.ok) {
        setMessage(resetResult.error || "Unable to reset password.", true);
        return;
      }
      setForgotResetPending(null);
      if (usernameInput && resetUsername) {
        usernameInput.value = String(resetUsername || "");
      }
      if (passwordInput) {
        passwordInput.value = "";
        passwordInput.focus();
      }
      setMessage("Password updated. Sign in with your new password.", false);
    } finally {
      forgotResetSubmitBtn.disabled = false;
    }
  });
}

if (captchaBackdrop) {
  captchaBackdrop.addEventListener("click", () => {
    pendingCaptchaLogin = null;
    setCaptchaModalOpen(false);
    resetTurnstileChallenge();
    setMessage("Security check cancelled.", false);
  });
}

if (captchaCancelBtn) {
  captchaCancelBtn.addEventListener("click", () => {
    pendingCaptchaLogin = null;
    setCaptchaModalOpen(false);
    resetTurnstileChallenge();
    setMessage("Security check cancelled.", false);
  });
}

if (captchaContinueBtn) {
  captchaContinueBtn.addEventListener("click", async () => {
    if (!pendingCaptchaLogin || !turnstileToken) {
      if (turnstileWidgetLoadFailed) {
        setMessage("Security check is temporarily unavailable. Please retry sign in.", true);
        return;
      }
      setMessage("Complete the security check first.", true);
      return;
    }
    const pending = { ...pendingCaptchaLogin };
    pendingCaptchaLogin = null;
    setCaptchaModalOpen(false);
    await runCredentialLogin(pending.username, pending.password, pending.remember);
  });
}

if (passwordToggle) {
  // Pointer events (modern browsers)
  passwordToggle.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    startPasswordReveal();
  });
  passwordToggle.addEventListener("pointerup", () => {
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("pointerleave", () => {
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("pointercancel", () => {
    stopPasswordReveal();
  });

  // Safari fallback paths
  passwordToggle.addEventListener("mousedown", (event) => {
    event.preventDefault();
    startPasswordReveal();
  });
  passwordToggle.addEventListener("mouseup", () => {
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("click", (event) => {
    // Keep click from submitting the form and ensure rapid taps also reveal briefly.
    event.preventDefault();
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("mouseleave", () => {
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("mouseout", () => {
    stopPasswordReveal();
  });
  passwordToggle.addEventListener(
    "touchstart",
    (event) => {
      event.preventDefault();
      startPasswordReveal();
    },
    { passive: false }
  );
  passwordToggle.addEventListener("touchend", () => {
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("touchcancel", () => {
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("blur", () => {
    stopPasswordReveal();
  });
  passwordToggle.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      startPasswordReveal();
    }
  });
  passwordToggle.addEventListener("keyup", (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      stopPasswordReveal();
    }
  });
}

document.addEventListener("mouseup", () => {
  stopPasswordReveal();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }
  setForgotCodePending(null);
  setForgotResetPending(null);
});

forceHostedRealtimeUrl();
setTwoFactorPending(null);
setForgotCodePending(null);
setForgotResetPending(null);
setCaptchaModalOpen(false);

try {
  const params = new URLSearchParams(window.location.search || "");
  const isGuestInvite = String(params.get("guest") || "").trim() === "1";
  if (isGuestInvite) {
    const invitedUser = String(params.get("u") || "").trim();
    const invitedPassword = String(params.get("p") || "");
    pendingGuestInviteToken = String(params.get("t") || "").trim();
    if (invitedUser && usernameInput) {
      usernameInput.value = invitedUser;
    }
    if (invitedPassword && passwordInput) {
      passwordInput.value = invitedPassword;
    }
    if (rememberInput) {
      rememberInput.checked = false;
      rememberInput.disabled = true;
    }
    if (window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState(null, "", window.location.pathname);
    }
    setMessage("Guest invite loaded. Click Sign in.", false);
  }
} catch (error) {
  // Ignore URL parsing errors.
}

window.TBRAuth.completeOAuthRedirectIfPresent()
  .then((result) => {
    if (!result || !result.handled) {
      return;
    }
    if (!result.ok) {
      setMessage(result.error || "Social sign-in failed.", true);
      return;
    }
    setMessage("Signed in with social account. Redirecting...", false);
    setTimeout(() => {
      window.location.href = "./lounge";
    }, 320);
  })
  .catch(() => {
    // Ignore OAuth completion errors here; normal login remains available.
  });

window.TBRAuth.getAuthConfig()
  .then((config) => {
    const turnstile = config && config.turnstile && typeof config.turnstile === "object" ? config.turnstile : {};
    turnstileEnabled = !!turnstile.enabled;
    turnstileSiteKey = String(turnstile.siteKey || "");
  })
  .catch(() => {
    turnstileEnabled = false;
    turnstileSiteKey = "";
  });

document.addEventListener("mousedown", (event) => {
  if (!passwordToggle || passwordToggle.contains(event.target)) {
    return;
  }
  stopPasswordReveal();
});

document.addEventListener("touchend", () => {
  stopPasswordReveal();
});

document.addEventListener("touchcancel", () => {
  stopPasswordReveal();
});

document.addEventListener("pointerup", () => {
  stopPasswordReveal();
});

document.addEventListener("pointercancel", () => {
  stopPasswordReveal();
});

window.addEventListener("blur", () => {
  stopPasswordReveal();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopPasswordReveal();
  }
});

if (usernameInput) {
  usernameInput.setAttribute("autocapitalize", "off");
  usernameInput.setAttribute("autocorrect", "off");
  usernameInput.setAttribute("spellcheck", "false");
}

if (passwordInput) {
  passwordInput.setAttribute("autocapitalize", "off");
  passwordInput.setAttribute("autocorrect", "off");
  passwordInput.setAttribute("spellcheck", "false");
  passwordInput.setAttribute("autocapitalize", "none");
  if (useSafariPasswordMasking) {
    passwordInput.type = "text";
    passwordInput.style.webkitTextSecurity = "disc";
  }
  passwordInput.addEventListener("blur", () => {
    // Safari can keep the field in plain-text after soft-keyboard autofill edge cases.
    if (useSafariPasswordMasking) {
      passwordInput.style.webkitTextSecurity = "disc";
      return;
    }
    if (passwordInput.type === "text" && passwordToggle && passwordToggle.getAttribute("aria-pressed") !== "true") {
      passwordInput.type = "password";
    }
  });
}

setPasswordVisibility(false);

setInterval(updateUI, 5000);
updateUI();
