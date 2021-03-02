const addButton = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const fTitle = document.querySelector("#title");
const fAuthor = document.querySelector("#author");
const fPages = document.querySelector("#pages");
const fRead = document.querySelector("#read");
const fConfirm = document.querySelector("#confirm")
const fCancel = document.querySelector(".cancel");
const list = document.querySelector(".list");

let myLibrary = [];
function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function showOverlay(){
  overlay.style.display = "block";
}

cancel.onclick = function(){
  clearForm();
  overlay.style.display = "none"
}

function validateForm(){
  //form validation, if all valid, proceed into submitForm()
  if(fAuthor.value !="" && fTitle.value != "" && fPages.value != ""){
    addBookToLibrary();
  }
}

function addBookToLibrary() {
  // called by validateForm() if all fields are valid
  // pushes new Book into myLibrary[]
  myLibrary.push(new Book(fTitle.value, fAuthor.value, fPages.value, fRead.checked));
  console.log(myLibrary);
  list.insertAdjacentHTML("beforeend",
      `<div class="book">
      <div class="delete">&#10060;</div>
      <div class="index">#${myLibrary.length}</div>
      <div class="title">${fTitle.value}</div>
      <div class="author">${fAuthor.value}</div>
      <div class="pages">${fPages.value}</div>
      <div class="read">${fRead.checked}</div>
  </div>`);
  clearForm();
}

function clearForm(){
  fTitle.value = "";
  fAuthor.value = "";
  fPages.value = "";
  fRead.checked = false;
}
