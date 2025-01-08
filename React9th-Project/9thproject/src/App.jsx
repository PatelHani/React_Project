import React, { useState } from 'react';
import Header from './Components/Header';
import NoteInput from './Components/NoteInput';
import NoteList from './Components/Notelist';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <NoteInput addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
