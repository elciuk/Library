const addButton = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");
const formCancel = document.querySelector(".cancel");

let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  myLibrary.push(new Book(formTitle.content, formAuthor.content, formPages.content, formRead.value));
}
function showOverlay(){

  overlay.style.display = "block";
}
cancel.onclick = function(){
  overlay.style.display = "none"
}
