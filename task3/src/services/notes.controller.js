import {
    getAllNotes, 
    addNewNote, 
    existNoteWithID, 
    abortNoteById,
    editNote,
    getNoteWithId,
    getNotesStates
    } from "../repositories/notes.model.js";

function httpgetAllNotes(req, res) {
    res.json(getAllNotes());
};

function httpAddNewNote(req, res) {
    const note = req.body;

    if (!note.name) {
        return res.status(400).json({
            error: 'Missing required note name property'
        })
    }
    if (!note.noteDate) {
        return res.status(400).json({
            error: 'Missing required note noteDate property'
        })
    }
    if (!note.content) {
        return res.status(400).json({
            error: 'Missing required note content property'
        })
    }
    if (!note.category) {
        return res.status(400).json({
            error: 'Missing required note category property'
        })
    }

    note.noteDate = new Date(note.noteDate);
    if (isNaN(note.noteDate)) {
        return res.status(400).json({
            error: 'Date property is invalid'
        })
    }

    let newNote = addNewNote(note);
    res.status(201).json(newNote);
};

function deleteNote(req, res) {
    const noteID = Number(req.params.id)

    if (!existNoteWithID(noteID)) {
        return res.status(404).json({
            error: 'note not found'
        })
    }

    const deleted = abortNoteById(noteID)
    res.status(200).json(deleted)
}

function httpEditNote(req, res) {
    const id = Number(req.params.id)

    if (!existNoteWithID(id)) {
        return res.status(404).json({
            error: 'note not found'
        })
    }

    const noteParams = req.body;
    let note = editNote(id, noteParams);
    res.status(201).json(note);
}

function retrieveNote(req, res) {
    const noteID = Number(req.params.id)

    if (!existNoteWithID(noteID)) {
        return res.status(404).json({
            error: 'note not found'
        })
    }

    return res.status(200).json(getNoteWithId(noteID));    
}

function httpGetNotesStates(req, res) {
    res.status(200).json(getNotesStates());
}

export { 
    httpgetAllNotes,
    httpAddNewNote,
    deleteNote,
    httpEditNote,
    retrieveNote,
    httpGetNotesStates
 }
