import React from 'react';

function Note({ note, deleteNote }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
        marginTop: '10px',
        borderRadius: '5px',
        background: '#f9f9f9',
        width: '300px'
      }}
    >
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)} style={{ color: 'red' }}>Delete</button>
    </div>
  );
}

export default Note;
