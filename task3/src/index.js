import express, { json } from 'express';
import cors from 'cors';
import { join } from 'path';
import morgan from 'morgan';

import notesRouter from './routes/notes.router.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));

app.use(json());

app.use('/notes', notesRouter)
app.get('/*', (req, res) => {
    res.sendFile(join(path.resolve(), 'index.html'))
})

export default app;