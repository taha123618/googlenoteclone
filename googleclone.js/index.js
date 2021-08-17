
const addButton = document.querySelector('#add');


// local storage fat arrow function calling
const updateLSData = () => {
    const textareaData = document.querySelectorAll('textarea');
    const notes = [];

    textareaData.forEach((note) => {
        return notes.push(note.value);  
    })
    console.log(notes);

    localStorage.setItem('notes', JSON.stringify(notes));
};

const addNewNote = (text = '') =>{
   // crating div class with js
    const note = document.createElement('div');
    note.classList('note1');

    const htmlData = ` 
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
    
    
    <div class="main ${text ? "" : "hidden"}"></div> 
        <textarea class="${text ? "hidden" : ""}"></textarea>`;

note.insertAdjacentHTML('afterbegin',htmlData);
// console.log(note);

// getting the references
const editButton = note.querySelector('.edit');
const delButton = note.querySelector('.delete');
const mainDiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');


// delte the node 
delButton.addEventListener('click', () =>{
    note.remove();
    updateLSData();
});

// togle using edit button 
textarea.value = text;
mainDiv.innerHTML = text;


editButton.addEventListener('click',() =>{
  mainDiv.classList.toggle('hidden');
  textarea.classList.toggle('hidden');
});

textarea.addEventListener('change', (event) =>{
const value = event.target.value;
mainDiv.innerHTML = value;

// local Storage
updateLSData();


});



document.body.appendChild(note);


}

// getting the data back from localStorage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note) => addNewNote(note))};

addButton.addEventListener('click', () => addNewNote());
