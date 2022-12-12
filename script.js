const addNote = document.querySelector(".add-note");
const title = document.querySelector(".title-input");
const text = document.querySelector("#text");
const star = document.querySelector(".star");
const date = document.querySelector(".date2");
const updateNotes = document.querySelector(".update-note");

//Sparar data i local storage.
function saveNote() {
  let titleInput = title.value; // tilldela ett värde till en variabel
  let textInput = text.value; // tilldela ett värde till en variabel
  let updated = date.innerHTML; // tilldela ett värde till en variabel
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : []; //går in i local storage, om det finns data i den så hämtar den med hjälpt av local storage getItem annars returnera en tom array
  let newNote = { titleInput, textInput, updated }; // skapar en object som heter newNote med inputsvärde sedan pushar den till notes (array)
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes)); // spara data i local storage.
  renderNote();
  clearNotes();
}

// hämtar data från local storage och renderar till notes-list
function renderNote() {
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : []; //går in i local storage, om det finns data i den så hämtar den med hjälpt av local storage getItem annars returnera en tom array
  let note__list = "";
  max__text__strings__title = 10;
  max__text__strings = 40;
  notes.forEach((value, index) => {
    note__list += `
        <li onclick="editNotes(${index})">
            <h2>${value.titleInput.substring(0, max__text__strings__title)}
                ${
                  value.titleInput.length > max__text__strings__title
                    ? "..."
                    : ""
                }</h2>
            <p>${value.textInput.substring(0, max__text__strings)}
                ${value.textInput.length > max__text__strings ? "..." : ""}
            </p>
            <p>${value.updated}</p>
            <button class = "delete-btn" onclick = 'deleteNotes(${index})'><i class="fa-solid fa-delete-left"></i></button>
            <button class = 'fav-btn' onclick = 'favoriteNotes(${index})'><i class="fa-regular fa-star"></i></button>
        </li>
    `;
  }); // loopar in i notes, tilldela listan (li) till no__list.
  document.querySelector("ul").innerHTML = note__list; // tilldela note__list till ul i html.
}

function editNotes(index) {
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : []; //går in i local storage, om det finns data i den så hämtar den med hjälpt av local storage getItem annars returnera en tom array
  title.value = notes[index].titleInput; //tilldela nya värde som matchar indexet
  text.value = notes[index].textInput; //tilldela nya värde som matchar indexet
  date.innerHTML = notes[index].updated; //tilldela nya värde som matchar indexet
  updateNotes.value = index; // indexet på varje note
  addNote.style.display = "none";
  updateNotes.style.display = "inline-block";
}

function saveChange() {
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  let index = updateNotes.value;
  notes[index] = {
    titleInput: title.value,
    textInput: text.value,
    updated: date.innerHTML,
  };
  localStorage.setItem("notes", JSON.stringify(notes));
  addNote.style.display = "inline-block";
  updateNotes.style.display = "none";
  renderNote();
  clearNotes();
}
// raderar texter efter användaren har sparat eller skapar en ny anteckning
function clearNotes() {
  title.value = "";
  text.value = "";
  date.innerHTML = date.innerHTML;
}

//tar bort anteckning
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
//märkerar favorit anteckning
function favoriteNotes(index) {
  let a = document.querySelectorAll(".fav-btn");
  a[index].classList.toggle("btn-color");
}

//Modal
const open = document.querySelector(".section-logo");
const modal = document.querySelector(".modal-container");
const close = document.querySelector(".close");
function toggle() {
  modal.classList.toggle("hide");
}
open.addEventListener("click", toggle);
close.addEventListener("click", toggle);

const myDate = new Date();
const myDateFormatted = formatDate(myDate);
function formatDate(dateObj) {
  const parts = {
    date: dateObj.getDate(),
    month: dateObj.getMonth() + 1,
    year: dateObj.getFullYear(),
  };
  date.innerHTML = `${parts.date}/${parts.month}/${parts.year}`;
}
{
  /* <span>Last edited : </span><p class = "date2">${parts.date}/${parts.month}/${parts.year} - ${parts.hours}:${parts.minutes}</p> */
}
/* var date3 = new Date();
/* /* console.log( (date3.getMinutes()<10?'0':'') + date3.getMinutes() ); */

// visar och gömma anteckningar.
const search = document.querySelector(".is-active");
const noteList = document.querySelector(".notes-list");
const listItem = document.querySelector(".list-item");
const textArea = document.querySelector(".main-area");
function showList() {
  noteList.classList.toggle("notes-list-open");
}
search.addEventListener("click", showList);
listItem.addEventListener("click", showList);
textArea.addEventListener("click", showList);
