import React, { useState } from 'react';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote({
        id: Date.now(),
        title,
        content,
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type ="text "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ width: '300px', padding: '10px', marginBottom: '10px' , marginTop: '10px'}}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Take a note..."
        style={{ width: '300px', padding: '10px' , display: 'flex' }}
      />
      <button type="submit" style={{ marginTop: '10px', padding: '5px 10px' }}>Add Note</button>
    </form>
  );
}







export default NoteInput;
