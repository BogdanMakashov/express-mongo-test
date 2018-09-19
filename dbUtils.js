import mongoose from 'mongoose';
import './Note';

const Note = mongoose.model('Note');

export const setUpConnection = () => {
    mongoose.connect('mongodb://localhost/notes', { useNewUrlParser: true });
}

export const listNotes = () => Note.find()

export const createNote = (data) => {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export const deleteNote = (id) => Note.findById(id).remove()