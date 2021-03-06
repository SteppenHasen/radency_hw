import render from './render.js'

let latestID = 14

let notes = [
    {
        id: 10,
        name : 'Visit the mortician’s ghost',
        date: '09/01/2022',
        category: 'note',
        content: '12/01/2022 visit the mortician’s ghost to demand a purse of legitimate gold, because the stake in my coffin was never slaughtered.',
        dates: '12/01/2022',
        archived: false,
        active: true
    },
    {
        id: 11,
        name : 'About drinks',
        date: '09/01/2022',
        category: 'religion',
        content: 'have a drink with the local pop',
        dates: '',
        archived: false,
        active: true
    },
    {
        id: 12,
        name : 'Dance with fox',
        date: '09/01/2022',
        category: 'animals',
        content: 'On Wednesday 4 April 04/04/2022, dance with the bald fox and return her cigarette case',
        dates: '04/04/2022',
        archived: false,
        active: true
    },
    {
        id: 13,
        name : 'submarine "Alzheimer’s"',
        date: '09/01/2022',
        category: 'news',
        content: '12/12/2021, the submarine "Alzheimer’s" collided over Lenin’s monument with the submarine "Oppenheimer". The case gained a resonance',
        dates: '12/12/2021',
        archived: false,
        active: true
    },
    {
        id: 14,
        name : 'dwarf',
        date: '09/01/2022',
        category: 'note',
        content: '02/01/2022, dug a spoon with two ants into the hole of an old dwarf.',
        dates: '02/01/2022',
        archived: false,
        active: true
    }    
]

function reRender(notes) {
    let notes_area = document.getElementById('notes_area')
    let stats_area = document.getElementById('stats_area')

    notes_area.innerHTML = '';
    stats_area.innerHTML = '';

    render(notes)    
}

function saveEditedData(noteID) {
    let input = document.getElementById(`input${noteID}`)
    let content = input.value
    let foundIndex = notes.findIndex(note => note.id == noteID)
    notes[foundIndex].content = content

    reRender(notes)
}

function editNote(noteID) {
    let content = document.getElementById(`contentID${noteID}`)
    let foundIndex = notes.findIndex(note => note.id == noteID)

    content.innerHTML = ''
    let input = document.createElement('input')
    input.id = `input${noteID}`
    input.className = 'input'
    input.value = notes[foundIndex].content
    let button = document.createElement('button')
    button.className = 'saveButton'
    button.innerText = 'Save'
    button.setAttribute('onclick', `saveEditedData(${noteID})`)

    content.appendChild(input)
    content.appendChild(button)
}

function archiveNote(noteID) {
    let foundIndex = notes.findIndex(note => note.id == noteID)
    notes[foundIndex].archived = true

    reRender(notes)
}

function deleteNote(noteID) {
    notes = notes.filter(note => { return note.id != noteID })

    reRender(notes)
}

function showAddingField() {
    document.getElementById('adding_area').style.display = 'block'
    document.getElementById('add_note').style.display = 'none'
}

function addNote() {
    let name = document.getElementById('adding_name').value
    let content = document.getElementById('adding_content').value
    let category = document.getElementById('adding_select').value
    let date = new Date()
    latestID++

    let regex = new RegExp('[0-9]{2}/[0-9]{2}/[0-9]{4}')
    let dates_arr = regex.exec(content)
    let dates = ''
    dates_arr == null ? dates : dates = dates_arr.reduce((a, b) => a + '' + b)

    let note = {
        id: latestID,
        name : name,
        date: date.toLocaleString(),
        category: category,
        content: content,
        dates: dates,
        archived: false,
        active: true
    }

    notes.push(note)

    document.getElementById('adding_area').style.display = 'none'
    document.getElementById('add_note').style.display = 'block'

    reRender(notes)
}

window.onload = function() {
    render(notes)
}
