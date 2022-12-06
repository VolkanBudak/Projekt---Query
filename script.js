const addNote = document.querySelector(".add-note");
const title = document.querySelector(".title-input");
const date = document.querySelector("#date-input");
const text = document.querySelector("#text");
//Sparar data i local storage.
function saveNote() {
  let titleInput = title.value;
  let textInput = text.value;
  let dateInput = date.value;
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  let newNode = { titleInput, textInput, dateInput };
  notes.push(newNode);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNote();
  clear();
}
// hämtar data från local storage och renderar till notes-list
function renderNote() {
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  let note__list = "";
  max__text__strings = 40;
  notes.forEach((value, index) => {
    note__list += `
        <li onclick="updateNotes(${index})">
            <h2>${value.titleInput}</h2>
            <p>${value.textInput.substring(0, max__text__strings)}
                ${value.textInput.length > max__text__strings ? "..." : ""}
            </p>
            <p>${value.dateInput}</p>
            <button onclick = 'deleteNotes(${index})'>delete</button>
            <button class = 'fav-btn' onclick = 'favoriteNotes(${index})'>fav</button>
        </li>
    `;
  });
  document.querySelector("ul").innerHTML = note__list;
}

function updateNotes(index) {
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  title.value = notes[index].titleInput;
  text.value = notes[index].textInput;
  date.value = notes[index].dataInput;
}
function clearNotes() {
  title.value = "";
  text.value = "";
  date.value = "";
}
function deleteNotes(index) {
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  if (confirm("Are you sure you want to delete thhis note?")) {
    notes.splice(index, 1);
  }
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNote();
}
/* function favoriteNotes(index){
    document.querySelector('.fav-btn').classList.toggle('btn-color')
} */

const open = document.querySelector(".section-logo");
const modal = document.querySelector(".modal-container");
const close = document.querySelector(".close");
console.log(open);

function toggle() {
  modal.classList.toggle("hide");
}
open.addEventListener("click", toggle);
close.addEventListener("click", toggle);

const textarea = document.getElementById("textarea");

function f1(e) {
  let value = e.value;
  textarea.style.fontSize = value + "px";
}

function f2(e) {
  if (textarea.style.fontWeight == "bold") {
    textarea.style.fontWeight = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontWeight = "bold";
    e.classList.add("active");
  }
}

function f3(e) {
  if (textarea.style.fontStyle == "italic") {
    textarea.style.fontStyle = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontStyle = "italic";
    e.classList.add("active");
  }
}

function f4(e) {
  if (textarea.style.textDecoration == "underline") {
    textarea.style.textDecoration = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textDecoration = "underline";
    e.classList.add("active");
  }
}

function f5(e) {
  textarea.style.textAlign = "left";
}

function f6(e) {
  textarea.style.textAlign = "center";
}

function f7(e) {
  textarea.style.textAlign = "right";
}

function f8(e) {
  if (textarea.style.textTransform == "uppercase") {
    textarea.style.textTransform = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textTransform = "uppercase";
    e.classList.add("active");
  }
}

function f9() {
  textarea.style.fontWeight = "normal";
  textarea.style.textAlign = "left";
  textarea.style.fontStyle = "normal";
  textarea.style.textTransform = "capitalize";
  textarea.value = "";
}

function f10(e) {
  let value = e.value;
  textarea.style.color = value;
}

window.addEventListener("load", () => {
  textarea.value = "";
});
