import * as notesAPI from './notes-api';

export async function getNotes() {
    const notes = await notesAPI.getNotes();
    return notes;
}

export async function createNote(noteText) {
    const newNote = await notesAPI.createNote(noteText);
    return newNote;
}
