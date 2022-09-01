import React, { useState } from 'react';
import './Notes.scss';

import SingleNote from './SingleNote'

function Notes() {
  const [notes, setNotes] = useState([
    {
      text: "prova"
    }
  ]);

  const prova = {
    text: "prova"
  }

  const clicketi = (): any => {
    setNotes([prova, ...notes]);
  }

  return (
    <div className="Modal d-flex justify-content-center row">
      <div className="content p-5 d-flex flex-column align-items-start col">
        <h1>Titolo</h1>
        <button onClick={clicketi}>PROVA</button>
        {
          // render multiple elements for every click
          notes.map((note: any, index: number) => (
            <SingleNote key={index} text={notes[index].text} />
          )
          ).reverse()
        }
      </div>
    </div>
  );
}

export default Notes;