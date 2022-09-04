import React from 'react';
import './Notes.scss';

import SingleNote from './SingleNote'
import { Note } from '../App';

function Notes(props: any) {
  return (
    <div className="Notes d-flex justify-content-center row">
      <div className="content d-flex flex-column align-items-start col">
        <h1 className='title'>Titolo</h1>
        {
          props.notes.map((note: Note, index: number) => (
            <SingleNote key={index} note={note} setNotes={props.setNotes} notes={props.notes}/>
          )
          ).reverse()
        }
      </div>
    </div>
  );
}

export default Notes;