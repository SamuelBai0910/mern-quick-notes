import { useState, useEffect } from 'react';

import * as notesServices from '../../utilities/notes-service';

import NotesList from '../../components/NotesList/NotesList';
import NoteForm from '../../components/NoteForm/NoteForm';

export default function NotesPage() {
    const [notes, setNotes] = useState([]);

    async function addNote(note) {
        const newNote = await notesServices.createNote(note);
        setNotes([...notes, newNote]);
    }

    useEffect(() => {
        notesServices.getNotes().then((notes) => {
            setNotes(notes);
        });
    }, []);

    return (
        <>
            <h1>
                NotesPage
                <NoteForm addNote={ addNote } />
                <NotesList notes={notes} />
            </h1>
        </>
    );
}
