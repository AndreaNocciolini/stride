import React from 'react';
import './Notes.scss';

import SingleNote from './SingleNote'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Note } from '../App';

function Notes(props: any) {
  return (
    <div className="Notes d-flex justify-content-center row">
      <div className="content d-flex flex-column align-items-start col">
        <h1 className='title'>Titolo</h1>
        <TransitionGroup>
          {
            props.notes.map((note: Note, index: number) => (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="note-animation"
              >
                <SingleNote key={index} note={note} setNotes={props.setNotes} notes={props.notes} />
              </CSSTransition>
            )
            ).reverse()
          }

        </TransitionGroup>
      </div>
    </div>
  );
}

export default Notes;