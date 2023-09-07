import { useState } from 'react';

export default function NotesList ({notes, deleteNote}) {
    const [reverse, setReverse] = useState(false);

    if (notes.length === 0) {
        return <p>No notes yet!</p>
    }

    const notesList = notes.map((n) => (
        <div key={n._id}>
            <p>
                { new Date(n.createdAt).toLocaleString() }:
            </p>
            <p>
                { n.text }
            </p>
        </div>
    ));

    return (
        <div>
            {notesList}
        </div>
    )
}