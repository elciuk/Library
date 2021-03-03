const addButton = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const fTitle = document.querySelector("#title");
const fAuthor = document.querySelector("#author");
const fPages = document.querySelector("#pages");
const fRead = document.querySelector("#read");
const fConfirm = document.querySelector("#confirm")
const fCancel = document.querySelector(".cancel");
const list = document.querySelector(".list");


let myLibrary = [{title:"Lord of the Rings",author:"J.R.R. Tolkien",pages:123, read:"read"}, {title:"Game of Thrones", author:"G.R.R. Martin",pages:456, read: "read"}];
function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
for(let a=0;a<myLibrary.length;a++){
  list.insertAdjacentHTML("beforeend",
      `<div class="book">
      <div class="delete" onclick="deleteEntry()">&#10060;</div>
      <div class="index">#${a+1}</div>
      <div class="title">${myLibrary[a].title}</div>
      <div class="author">${myLibrary[a].author}</div>
      <div class="pages">${myLibrary[a].pages}</div>
      <div class="read">${myLibrary[a].read}</div>
  </div>`);
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
  let checkRead = "";
  if(fRead.checked == true){
    checkRead = "read";
  } else {
    checkRead = "unread";
  }
  myLibrary.push(new Book(fTitle.value, fAuthor.value, fPages.value, checkRead));

  list.insertAdjacentHTML("beforeend",
      `<div class="book">
      <div class="delete" onclick="deleteEntry()">&#10060;</div>
      <div class="index">#${myLibrary.length}</div>
      <div class="title">${myLibrary[myLibrary.length-1].title}</div>
      <div class="author">${myLibrary[myLibrary.length-1].author}</div>
      <div class="pages">${myLibrary[myLibrary.length-1].pages}</div>
      <div class="read">${myLibrary[myLibrary.length-1].read}</div>
  </div>`);
  console.log(myLibrary);
  clearForm();
}

function clearForm(){
  fTitle.value = "";
  fAuthor.value = "";
  fPages.value = "";
  fRead.checked = false;
}
function deleteEntry(){
  console.log(myLibrary);
}
