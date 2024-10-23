const addBtn=document.querySelector('.add')
const saveBtn=document.querySelector('.save')
const cancelBtn=document.querySelector('.cancel')
const deleteBtns=document.getElementsByClassName('.delete-note')
const deleteAllBtn=document.querySelector('.delete-all')

const noteArea=document.querySelector('.note-area')
const notePanel=document.querySelector('.note-panel')
const category=document.querySelector('#category')
const text=document.querySelector('#text')
const error=document.querySelector('.error')

let selectedValue;
let cardID=0;

function openPanel() {
    notePanel.style.display='flex'
}
function closePanel() {
    notePanel.style.display='none'
    error.style.visibility='hidden'
    text.value=''
    category.selectedIndex=0
}
function addNote() {
    if(text.value!==''&& category.options[category.selectedIndex].value !== '0'){
        createNote()
        error.style.visibility ='hidden'
    }else{
        error.style.visibility ='visible'
    }
}
function createNote() {
    const newNote=document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id',cardID)

    newNote.innerHTML=`
            <div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardID})">
                    <i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-body">
                ${text.value}
            </div>
            `
    noteArea.appendChild(newNote)
    cardID++
    text.value=''
    category.selectedIndex=0
    notePanel.style.display='none'
    checkColor(newNote)

}

function selectValue() {
    selectedValue=category.options[category.selectedIndex].text

}

function checkColor(note) {
    switch(selectedValue){
        case 'Zakupy':
            note.style.backgroundColor='rgb(72,255,0)'
            break
            case 'Praca':
            note.style.backgroundColor='rgb(255,243,0)'
            break
            case 'Inne':
            note.style.backgroundColor='rgb(0,170,255)'
            break
        
        
    }
}

function deleteNote(id) {
    const noteToDelete=document.getElementById(id)
    noteArea.removeChild(noteToDelete)

}

function deleteAllNotes(){
    noteArea.textContent=''
}

addBtn.addEventListener('click',openPanel)
cancelBtn.addEventListener('click',closePanel)
saveBtn.addEventListener('click',addNote)
deleteAllBtn.addEventListener('click',deleteAllNotes)
// Array.from(deleteBtns).forEach(btn => btn.addEventListener('click', deleteNote));