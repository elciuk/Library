const addButton = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const fTitle = document.querySelector("#title");
const fAuthor = document.querySelector("#author");
const fPages = document.querySelector("#pages");
const fRead = document.querySelector("#read");
const fConfirm = document.querySelector("#confirm")
const fCancel = document.querySelector(".cancel");

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
  fTitle.value = "";
  fAuthor.value = "";
  fPages.value = "";
  fRead.checked = false;
  console.log(myLibrary);
}
