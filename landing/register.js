const registerForm = document.getElementById("register-form");
const registerMessage = document.getElementById("register-message");

function isLikelyPhoneNumber(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return false;
  }
  const digits = raw.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function setRegisterMessage(text, isError) {
  registerMessage.textContent = text;
  registerMessage.classList.remove("hidden");
  registerMessage.classList.toggle("error", !!isError);
  registerMessage.classList.toggle("success", !isError);
}

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");
  const phone = String(formData.get("phone") || "").trim();

  if (!username || !password) {
    setRegisterMessage("Username and password are required.", true);
    return;
  }

  if (password.length < 8) {
    setRegisterMessage("Use at least 8 characters for testing.", true);
    return;
  }

  if (password !== confirmPassword) {
    setRegisterMessage("Passwords do not match.", true);
    return;
  }

  if (!phone) {
    setRegisterMessage("Mobile phone is required for SMS 2FA.", true);
    return;
  }
  if (!isLikelyPhoneNumber(phone)) {
    setRegisterMessage("Enter a valid mobile phone number for SMS 2FA.", true);
    return;
  }

  const result = await window.TBRAuth.createUser(username, password, phone);
  if (!result.ok) {
    setRegisterMessage(result.error || "Unable to create user.", true);
    return;
  }

  setRegisterMessage("User created. Redirecting to sign in...", false);
  setTimeout(() => {
    window.location.href = "./";
  }, 900);
});
