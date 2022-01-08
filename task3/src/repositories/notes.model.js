const notes = new Map();

let latestID = 100;

const note = {
    id: 100,
    name:'Nal',
    content: 'node server',
    category: 'vIT',
    noteDate: new Date('December 27, 2030'),
};

notes.set(note.id, note);

function getAllNotes() {
    return Array.from(notes.values());
}

function existNoteWithID(noteID) {
    return notes.has(noteID)
}

function addNewNote(note) {
    latestID++;
    notes.set(
        latestID, Object.assign(note)
    );
};

function abortNoteById(noteId) {
    const deleted = notes.get(noteId)
    notes.delete(noteId)
    return deleted
}

function editNote(note, noteID) {
    notes.set(
        noteID, Object.assign(note)
    );
    return note
}

function getNoteWithId(noteId) {
    return notes.get(noteId)
}

function getNotesStates() {
    let number_of_notes = Array.from(notes.values()).length
    return {number_of_notes: number_of_notes}
}

export {
    getAllNotes, 
    addNewNote, 
    existNoteWithID, 
    abortNoteById,
    editNote,
    getNoteWithId,
    getNotesStates
}