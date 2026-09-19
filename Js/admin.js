import { Storage } from "./storage.js";

const addBookButton = document.getElementById("addBook");
const updateBookButton = document.getElementById("updateBook");
const deleteBookButton = document.getElementById("deleteBook");
const form = document.getElementById("bookForm");
const bookIDInput = document.getElementById("bookID");
const bookNameInput = document.getElementById("bookName");
const bookPriceInput = document.getElementById("bookprice");
const bookCategoryInput = document.getElementById("bookCategory");
const bookImageInput = document.getElementById("bookImage");
const bookDescriptionInput = document.getElementById("bookDescription");

addBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  const book = {
    id: bookIDInput.value,
    name: bookNameInput.value,
    price: bookPriceInput.value,
    category: bookCategoryInput.value,
    image: bookImageInput.value,
    description: bookDescriptionInput.value,
  };
  Storage.addBook(book);
  form.reset();
});

updateBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  const book = {
    id: bookIDInput.value,
    name: bookNameInput.value,
    price: bookPriceInput.value,
    category: bookCategoryInput.value,
    image: bookImageInput.value,
    description: bookDescriptionInput.value,
  };
  Storage.updateBook(book);
  form.reset();
});

deleteBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  const bookId = bookIDInput.value;
  Storage.deleteBook(bookId);
  form.reset();
});
