const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read, id) {
  const newBook = new Book(title, author, pages, read, id);
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

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("removeBtn");
    card.appendChild(remove);

    remove.addEventListener("click", () => {
      console.log(book.id);
      const index = myLibrary.findIndex((item) => item.id === book.id);
      myLibrary.splice(index, 1);
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

addBookToLibrary("Atomic Habits", "James Clear", 320, true);

displayBooks();

const dialog = document.querySelector("#book-dialog");
const newBookBtn = document.querySelector(".addBook");
const closeDialogBtn = document.querySelector("#close-dialog");
const bookForm = document.querySelector("#book-form");

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  bookForm.reset();
  dialog.close();
});
