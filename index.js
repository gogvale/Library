function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  };
  this.readBook = () => {
    this.read = !this.read;
  };
}
function renderStatus(li) {
  li.children[0].innerHTML = li.book.info();
}
function addBookToLibrary(book) {
  ul = document.querySelector("ul");
  li = document.createElement("li");
  li.book = book;

  p = document.createElement("p");
  li.appendChild(p);
  renderStatus(li);

  button1 = document.createElement("button");
  button1.innerHTML = "Change Status";
  button1.classList.add("change");
  button1.onclick = (self) => {
    li = self.target.parentElement;
    li.book.readBook();
    renderStatus(li);
  };

  button2 = document.createElement("button");
  button2.innerHTML = "Delete Book";
  button2.classList.add("remove");
  button2.onclick = (self) => {
    li = self.target.parentElement;
    li.parentElement.removeChild(li);
  };

  li.appendChild(button1);
  li.appendChild(button2);

  ul.appendChild(li);
}
function addNewBook() {
  // Get form values
  const form = document.querySelector("form");
  const title = form.title,
    author = form.author,
    pages = form.pages,
    read = form.read;

  fields = [title, author, pages, read];

  const book = new Book(
    title.value,
    author.value,
    +pages.value,
    read.value == "true"
  );

  addBookToLibrary(book);
  fields.forEach((el) => (el.value = ""));
  document.querySelector("form").style.visibility = "hidden";
}
