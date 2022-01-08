let categories = {
    note: 'url(./images/align-center-solid.svg)',
    emotions: 'url(angry-solid.svg)',
    religion: 'url(bahai-solid.svg)',
    news: 'url(bolt-solid.svg)',
    animals:'url(democrat-solid.svg)'
}

function createNoteDOM(noteID, noteData) {
    let notes_area = document.getElementById('notes_area')
    let note = document.createElement('tr')
    
    let icon = document.createElement('td')
    let name = document.createElement('td')
    let date = document.createElement('td')
    let category = document.createElement('td')
    let content = document.createElement('td')
    let dates = document.createElement('td')
    let buttons = document.createElement('td')

    icon.style.backgroundImage = categories[noteData.category]
    name.innerHTML = `<p>${noteData.name}</p>`
    date.innerHTML = `<p>${noteData.date}</p>`
    category.innerHTML = `<p>${noteData.category}</p>`
    content.innerHTML = `<p>${noteData.content}</p>`
    dates.innerHTML = `<p>${noteData.dates}</p>`

    [icon, name, date, category, content, dates, buttons].forEach(node => note.appendChild(node))

    createButton(buttons, noteID, 'edit')
    createButton(buttons, noteID, 'archive')
    createButton(buttons, noteID, 'delete')
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

export {createNoteDOM}