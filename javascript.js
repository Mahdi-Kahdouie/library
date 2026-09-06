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

function displayBooks() {
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

    const read = document.createElement("div");
    read.textContent = `Read: ${book.read}`;
    read.classList.add("book-text");
    card.appendChild(read);

    const container = document.querySelector(".container");
    container.appendChild(card);
  });
}

addBookToLibrary("a", "b", 100, true);

addBookToLibrary("a", "b", 100, true);

displayBooks();
