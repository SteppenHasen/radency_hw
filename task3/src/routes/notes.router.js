import { 
    httpgetAllNotes,
    httpAddNewNote,
    deleteNote,
    httpEditNote,
    retrieveNote,
    httpGetNotesStates
    } from '../services/notes.controller.js';
import { Router } from 'express';

const notesRouter = Router();

notesRouter.get('/notes', httpgetAllNotes);
notesRouter.post('/notes', httpAddNewNote);
notesRouter.delete('/notes/:id', deleteNote);
notesRouter.patch('/notes/:id', httpEditNote);
notesRouter.get('/notes/:id', retrieveNote);
notesRouter.get('/notes/stats', httpGetNotesStates)

export default notesRouter;
