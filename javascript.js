const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
const container = document.querySelector(".container");

function displayBooks() {
  container.innerHTML = "";
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card-body");
    const title = document.createElement("div");
    title.textContent = `Title: ${book.title}`;
    title.classList.add("book-text");
    card.appendChild(title);

    const author = document.createElement("div");
    author.textContent = `Author: ${book.author}`;
    author.classList.add("book-text");
    card.appendChild(author);

    const pages = document.createElement("div");
    pages.textContent = `Pages: ${book.pages}`;
    pages.classList.add("book-text");
    card.appendChild(pages);

    const read = document.createElement("button");
    if (book.read == true) {
      read.textContent = "Read";
      read.classList.add("read-status");
    } else {
      read.textContent = "Not Read";
      read.classList.add("notRead-status");
    }
    card.appendChild(read);
    read.addEventListener("click", () => {
      book.readStatus();
      displayBooks();
    });

    container.appendChild(card);
  });
}

Book.prototype.readStatus = function () {
  this.read = !this.read;
};

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);

displayBooks();
