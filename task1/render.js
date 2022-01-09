let categories = {
    note: 'url(./images/align-center-solid.svg)',
    emotions: 'url(angry-solid.svg)',
    religion: 'url(bahai-solid.svg)',
    news: 'url(bolt-solid.svg)',
    animals:'url(democrat-solid.svg)'
}

function createNoteDOM(noteID, noteData, dom) {
    let note = document.createElement('tr')
    dom.appendChild(note)

    if(noteData.archived == true) {
        note.style.display = 'none'
    }

    createTdNodeForNotes('icon', note, noteData)
    createTdNodeForNotes('name', note, noteData)
    createTdNodeForNotes('date', note, noteData)
    createTdNodeForNotes('category', note, noteData)
    createTdNodeForNotes('content', note, noteData)
    createTdNodeForNotes('dates', note, noteData)
    createTdNodeForNotes('buttons', note, noteData)

    createButton(buttons, noteID, 'edit')
    createButton(buttons, noteID, 'archive')
    createButton(buttons, noteID, 'delete')
}

function createTdNodeForNotes(name, node_to_append, data) {
    let node = document.createElement('td')
    node.className = name
    
    if(name == 'icon') {
        icon.style.backgroundImage = categories[data.category]
    } else {
        node.innerHTML = `<p>${data[name]}</p>`
    }

    node_to_append.appendChild(node)

}

function createButton(node, id, type) {
    let button = document.createElement('button')
    if(type == 'edit') {
        button.setAttribute(onclick, `editNote(${id})`)
        button.style.backgroundImage = 'url(./images/pencil-alt-solid.svg)'
    } else if(type == 'archive') {
        button.setAttribute(onclick, `archiveNote(${id})`)
        button.style.backgroundImage = 'url(./images/box-solid.svg)'
    } else if( type == 'delete') {
        button.setAttribute(onclick, `deleteNote(${id})`)
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
            console
        } else {
            createTdNodeForStats(categoryRow, cat)
            createTdNodeForStats(categoryRow, notesForCategory.length)
            createTdNodeForStats(categoryRow, active.length)
            createTdNodeForStats(categoryRow, archived.length)
        }
    })
}

function render(noteID, notes) {
    let notes_area = document.getElementById('notes_area')
    let stats_area = document.getElementById('stats_area')

    notes.forEach(note => createNoteDOM(noteID, note, notes_area))

    createStatDOM(categories, notes, stats_area)
}

export default render