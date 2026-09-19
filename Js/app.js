import { Storage } from "./storage.js";
const cardTitle = document.querySelectorAll(".card-title");
const listGroup = document.querySelectorAll(".list-group-item");
const cardImage = document.querySelector(".card-img-top");
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginBtn");

const welcomeContainer = document.getElementById("welcomeContainer");

const categoryName = [...Storage.getCategories()];
console.log(categoryName);

const books = [...Storage.getBooks()];
console.log(books);

const bookList = document.getElementById("container1");
books.forEach((book) => {
  const { id, name, price, description, category, image } = book;
  const bookItem = document.createElement("div");
  bookItem.classList.add("col-md-4", "mb-4");
  bookItem.innerHTML = `
        <div class="card">
          <img src="${image}" class="card-img-top" alt="${name}" />
          <div class="card-body">
            <h5 class="card-title">${name}</h5> <span class="badge bg-primary">${category}</span>
            <br />
            <p class="card-text">${description}</p>
            <p class="card-text">Fiyat: ${price} TL</p>
          </div>
        </div>
      `;
  bookList.appendChild(bookItem);
});

const users = [...Storage.getUsers()];

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    alert("Giriş başarılı!");
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "loginSuccess.html";
  } else {
    alert("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
  }
});
