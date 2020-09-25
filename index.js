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

  button = document.createElement("button");
  button.innerHTML = "Change Status";
  button.onclick = (self) => {
    li = self.target.parentElement;
    li.book.readBook();
    renderStatus(li);
  };

  li.appendChild(button);
  // add li to ul
  ul.appendChild(li);

  return ul;
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
