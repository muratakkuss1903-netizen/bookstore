import {
  initialBooks,
  initialCategories,
  initialUsers,
} from "./initialData.js";

export class Storage {
  static getCategories() {
    return initialCategories;
  }
  static getBooks() {
    const books = localStorage.getItem("books");
    if (!books) {
      localStorage.setItem("books", JSON.stringify(initialBooks));
      return initialBooks;
    }
    return JSON.parse(books);
  }
  static addBook(newBook) {
    const books = this.getBooks();
    newBook.id = Date.now();
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static deleteBook(bookId) {
    const books = this.getBooks();
    const updatedBooks = books.filter((book) => book.id !== Number(bookId));
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  }
  static getUsers() {
    const users = localStorage.getItem("users");
    if (!users) {
      localStorage.setItem("users", JSON.stringify(initialUsers));
      return initialUsers;
    }
    return JSON.parse(users);
  }
  static registerUser(newUser) {
    const users = this.getUsers();

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }
}
