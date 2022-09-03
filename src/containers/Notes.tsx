import React from 'react';
import './Notes.scss';

import SingleNote from './SingleNote'

function Notes(props: any) {

  return (
    <div className="Notes d-flex justify-content-center row">
      <div className="content d-flex flex-column align-items-start col">
        <h1 className='title'>Titolo</h1>
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