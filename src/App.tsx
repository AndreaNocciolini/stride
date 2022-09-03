import React, { useState } from 'react';
import './App.scss';

import Notes from './containers/Notes';
import Modal from './components/Modal';

// Note Type, should i move it to an external file?
export type Note = {
  id: number,
  content: string
}

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false as boolean);
  const [notes, setNotes] = useState([] as Note[]);

  const openModal = (): any => {
    setIsModalOpen(true)
  }
  return (
    <div className="App">
      <div className="App-container">
        <Notes notes={notes} addNotes={setNotes} />
        <button onClick={openModal} className="col-6 new-note">
          Nuova Voce
        </button>
        {isModalOpen && <Modal
          setIsModalOpen={setIsModalOpen}
          notes={notes}
          setNotes={setNotes}
        />}
      </div>

    </div>
  );
}

export default App;
