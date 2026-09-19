import { Storage } from "./storage.js";

const registerForm = document.getElementById("registerBtn");
const form = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

registerForm.addEventListener("click", (event) => {
  event.preventDefault();
  const users = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
  };

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Şifreler eşleşmiyor!");
    return;
  }

  Storage.registerUser(users);
  form.reset();
  alert("Kayıt başarılı! Giriş yapabilirsiniz.");
});
