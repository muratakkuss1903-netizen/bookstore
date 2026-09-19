import { Storage } from "./storage.js";
const welcomeContainer = document.getElementById("welcomeContainer");
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (loggedInUser) {
  welcomeContainer.innerHTML = `<h2>Hoş Geldiniz ${loggedInUser.username}!</h2>
    <p>Üye olarak giriş yaptınız.</p>`;
}
