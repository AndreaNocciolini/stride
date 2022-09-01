import React from 'react';
import './Notes.scss';

import SingleNote from './SingleNote'

function Notes(props: any) {

  return (
    <div className="Modal d-flex justify-content-center row">
      <div className="content p-5 d-flex flex-column align-items-start col">
        <h1>Titolo</h1>
        {
          // render multiple elements for every click
          props.notes.map((note: any, index: number) => (
            <SingleNote key={index} note={note} />
          )
          ).reverse()
        }
      </div>
    </div>
  );
}

export default Notes;