import express, { json } from 'express';
import cors from 'cors';
import { join } from 'path';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';

import notesRouter from './routes/notes.router.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:8000'
}));
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/', notesRouter)
app.get('/*', (req, res) => {
    res.sendFile(join(path.resolve(), 'index.html'))
})

export default app;