import React, { useState } from 'react';
import './Notes.scss';

import SingleNote from './SingleNote'

function Notes() {
  const [anotherContatore, setAnotherContatore] = useState(1);

  const clicketi = (): any => {
    setAnotherContatore(anotherContatore + 1);
  }

  return (
    <div className="Modal d-flex justify-content-center row">
      <div className="content p-5 d-flex flex-column align-items-start col">
        <h1>Titolo</h1>
        <button onClick={clicketi}>PROVA</button>
        {
          // render multiple elements for every click
          Array.from({ length: anotherContatore })
            .map((_, index) => (
              <SingleNote key={index} />
            )
            )
        }
      </div>
    </div>
  );
}

export default Notes;