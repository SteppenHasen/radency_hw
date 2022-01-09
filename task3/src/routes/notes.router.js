import { 
    httpgetAllNotes,
    httpAddNewNote,
    deleteNote,
    httpEditNote,
    retrieveNote,
    httpGetNotesStates
    } from '../services/notes.controller.js';
import Router from 'express';
import multer from 'multer'

const upload = multer()

const notesRouter = Router();

notesRouter.get('/notes/', httpgetAllNotes); 
notesRouter.post('/notes', upload.none(), httpAddNewNote);
notesRouter.delete('/notes/:id', deleteNote); 
notesRouter.patch('/notes/:id', upload.none(), httpEditNote);
notesRouter.get('/notes/:id', retrieveNote); 
notesRouter.get('/stats', httpGetNotesStates)

export default notesRouter;
