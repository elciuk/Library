const addButton = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const fTitle = document.querySelector("#title");
const fAuthor = document.querySelector("#author");
const fPages = document.querySelector("#pages");
const fRead = document.querySelector("#read");
const fConfirm = document.querySelector("#confirm")
const fCancel = document.querySelector(".cancel");
const list = document.querySelector(".list");
const read = document.querySelectorAll(".read");

let myLibrary = [{title:"Sample Book A",author:"Author A",pages:123, read:"read"}, {title:"Sample Book B", author:"Book B",pages:456, read: "read"},
  {title:"Sample Book C",author:"Author C", pages:789, read:"read"}];

  // START OF BACK4APP TEST



  // END OF BACK4APP TEST


function refreshList(){
  while(list.hasChildNodes()){
    list.removeChild(list.firstChild);
  }
  for(let a=0;a<myLibrary.length;a++){
    list.insertAdjacentHTML("beforeend",
        `<div class="book" id="book${a+1}">
        <div class="delete" onclick="deleteEntry(${a+1})">&#10060;</div>
        <div class="index">#${a+1}</div>
        <div class="title">${myLibrary[a].title}</div>
        <div class="author">${myLibrary[a].author}</div>
        <div class="pages">${myLibrary[a].pages}</div>
        <div class="read" onclick="toggleRead(${a})">${myLibrary[a].read}</div>
    </div>`);
  }
}

function saveToLocal(){
  localStorage.setItem('library', JSON.stringify(myLibrary));
}
function getFromLocal(){
  if(localStorage.getItem("library") != undefined){
    myLibrary = JSON.parse(localStorage.getItem("library"));
    refreshList();
  }

}

refreshList();
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
  let checkRead = "";
  if(fRead.checked == true){
    checkRead = "read";
  } else {
    checkRead = "unread";
  }
  //sanitises fAuthor and fTitle to help prevent XSS
  let sanitisedTitle = document.createElement("div");
  sanitisedTitle.textContent = fTitle.value;
  let sanitisedAuthor = document.createElement("div");
  sanitisedAuthor.textContent = fAuthor.value;
  //push the book into the array after sanitisation
  myLibrary.push(new Book(sanitisedTitle.innerHTML, sanitisedAuthor.innerHTML, fPages.value, checkRead));
  //insert the html into webpage
  list.insertAdjacentHTML("beforeend",
      `<div class="book" id="book${myLibrary.length}">
      <div class="delete" onclick="deleteEntry(${myLibrary.length})">&#10060;</div>
      <div class="index">#${myLibrary.length}</div>
      <div class="title">${myLibrary[myLibrary.length-1].title}</div>
      <div class="author">${myLibrary[myLibrary.length-1].author}</div>
      <div class="pages">${myLibrary[myLibrary.length-1].pages}</div>
      <div class="read">${myLibrary[myLibrary.length-1].read}</div>
  </div>`);
  console.log(myLibrary);
  clearForm();
  refreshList();
  saveToLocal();
}

// resets form values
function clearForm(){
  fTitle.value = "";
  fAuthor.value = "";
  fPages.value = "";
  fRead.checked = false;
}
//
function deleteEntry(id){
  document.querySelector(`#book${id}`).remove();
  myLibrary.splice(id-1,1);
  refreshList();
  saveToLocal();
}
function toggleRead(index){
  let toggledBook = document.querySelector(`#book${index+1} > .read`);
  if(toggledBook.textContent == "read"){
    toggledBook.textContent = "unread";
    myLibrary[index].read = "unread";
  } else {
    toggledBook.textContent = "read";
    myLibrary[index].read = "read";
    }
    saveToLocal();
  }
