const addNote = document.querySelector('.add-note');
const  title = document.querySelector('.title-input');
const date = document.querySelector('#date-input');
const text = document.querySelector('#text');
//Sparar data i local storage.
function saveNote(){
    let titleInput = title.value
    let textInput = text.value
    let dataInput = date.value
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    let newNode = {titleInput,textInput,dataInput};
    notes.push(newNode)
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNote()
}
// hämtar data från local storage och renderar till notes-list
function renderNote(){
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    let note__list = '';
    max__text__strings = 40;
    notes.forEach((value,index)=>{
        note__list += `
        <li onclick="updateNotes(${index})">
            <h2>${value.titleInput}</h2>
            <p>${value.textInput.substring(0,max__text__strings)}
                ${value.textInput.length > max__text__strings ? '...' : ''}
            </p>
            <p>${value.dataInput}</p>
        </li>
    `
    })
    document.querySelector('ul').innerHTML = note__list;
}

function updateNotes(index){
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    title.value = notes[index].titleInput;
    text.value = notes[index].textInput;
    date.value = notes[index].dataInput;
}






