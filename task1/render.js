let categories = {
    note: 'url(./images/align-center-solid.svg)',
    emotions: 'url(./images/angry-solid.svg)',
    religion: 'url(./images/bahai-solid.svg)',
    news: 'url(./images/bolt-solid.svg)',
    animals:'url(./images/democrat-solid.svg)'
}

function createNoteDOM(noteID, noteData, dom) {
    let note = document.createElement('tr')
    dom.appendChild(note)

    if(noteData.archived == true) {
        note.style.display = 'none'
    }

    createTdNodeForNotes('icon', note, noteData, noteID)
    createTdNodeForNotes('name', note, noteData, noteID)
    createTdNodeForNotes('date', note, noteData, noteID)
    createTdNodeForNotes('category', note, noteData, noteID)
    createTdNodeForNotes('content', note, noteData, noteID)
    createTdNodeForNotes('dates', note, noteData, noteID)
    createTdNodeForNotes('buttons', note, noteData, noteID)

    let buttons = document.getElementById(`buttons${noteID}`)
    createButton(buttons, noteID, 'edit')
    createButton(buttons, noteID, 'archive')
    createButton(buttons, noteID, 'delete')
}

function createTdNodeForNotes(name, node_to_append, data, noteId) {
    let node = document.createElement('td')
    node.className = name
    
    if(name == 'icon') {
        node.style.backgroundImage = categories[data.category]
    } else if(name == 'buttons') {
        node.id = `buttons${noteId}`
    } else {
        node.innerHTML = `<p>${data[name]}</p>`
    }

    if(name == 'content') {
        node.id = `contentID${noteId}` 
    }

    node_to_append.appendChild(node)
}

function createButton(node, id, type) {
    let button = document.createElement('button')
    if(type == 'edit') {
        button.setAttribute('onclick', `editNote(${id})`)
        button.style.backgroundImage = 'url(./images/pencil-alt-solid.svg)'
    } else if(type == 'archive') {
        button.setAttribute('onclick', `archiveNote(${id})`)
        button.style.backgroundImage = 'url(./images/box-solid.svg)'
    } else if( type == 'delete') {
        button.setAttribute('onclick', `deleteNote(${id})`)
        button.style.backgroundImage = 'url(./images/trash-alt-solid.svg)'
    }
    node.appendChild(button)
}

function createTdNodeForStats(node, data) {
    let td = document.createElement('td')
        td.innerHTML = data
        node.appendChild(td)
}

function createStatDOM(categories, notes, dom) {

    Object.keys(categories).forEach(cat => {
        let categoryRow = document.createElement('tr')

        let notesForCategory = notes.filter(elem => {return elem.category == cat })
        let archived = notesForCategory.filter(elem => {return elem.archived == true })
        let active = notesForCategory.filter(elem => {return elem.active == true })
        if(notesForCategory.length == 0) {
            console.log(`${cat} is empty`)
        } else {
            createTdNodeForStats(categoryRow, cat)
            createTdNodeForStats(categoryRow, notesForCategory.length)
            createTdNodeForStats(categoryRow, active.length)
            createTdNodeForStats(categoryRow, archived.length)
        }
        dom.appendChild(categoryRow)
    })
}

function render(notes) {
    let notes_area = document.getElementById('notes_area')
    let stats_area = document.getElementById('stats_area')

    document.getElementById('adding_area').style.display = 'none'

    notes.forEach(note => createNoteDOM(note.id, note, notes_area))

    createStatDOM(categories, notes, stats_area)
}

export default render