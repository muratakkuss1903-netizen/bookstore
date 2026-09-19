import { initialBooks, initialCategories } from "./initialData.js";

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
}
