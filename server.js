import express from 'express';
import bodyParser from 'body-parser';
import * as db from './dbUtils';

db.setUpConnection();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    console.log(req.body);
    db.createNote(req.body).then(data => res.send(data))
});

app.delete('/notes/:id', (req, res) => {
    console.log(req.params);
    db.deleteNote(req.params.id).then(data => res.send(data))
});

const server = app.listen(8080, () => {
    console.log('Server is up and running on port 8080');
});