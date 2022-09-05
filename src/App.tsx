import React, { useState } from 'react';
import './App.scss';

// import { CSSTransition, TransitionGroup } from "react-transition-group";
import Notes from './containers/Notes';
import Modal from './components/Modal';

// Note Type, should i move it to an external file?
export type Note = {
  id: string,
  content: string,
  done: boolean
}

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false as boolean);
  const [notes, setNotes] = useState([] as Note[]);
  const [message, setMessage] = useState('');

  const openModal = (): any => {
    setIsModalOpen(true)
  }

  return (
    <div className="App">
      <div className="App-container">
        <Notes notes={notes} setNotes={setNotes} />
        <button onClick={openModal} className="new-note d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path d="M33 20L7 20" stroke="#01001e" stroke-width="3" stroke-linecap="round" />
            <path d="M20 33L20 7" stroke="#01001e" stroke-width="3" stroke-linecap="round" />
          </svg>
          Nuova Voce
        </button>
        {isModalOpen &&
          // <TransitionGroup>
          //   <CSSTransition
          //     key={null}
          //     in={isModalOpen}
          //     timeout={0}
          //     classNames="modal-animation"
          //   >
          <Modal
            setIsModalOpen={setIsModalOpen}
            notes={notes}
            setNotes={setNotes}
            message={message}
            setMessage={setMessage}
          />
          //   </CSSTransition>
          // </TransitionGroup>
        }
      </div>

    </div>
  );
}

export default App;
