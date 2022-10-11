import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userUpdateNote } from '../redux/noteSlice';
import '../styles/Note.css';

const Note = () => {
  const dispatch = useDispatch();

  const text = useSelector(state => state.note.text);

  const handleTextChange = e => {
    dispatch(userUpdateNote(e.target.value));
  };

  return (
    <div className='Note-container'>
      <form>
        <textarea type='text' name='Note-text' value={text} onChange={handleTextChange} />
      </form>
    </div>
  );
};

export default Note;
