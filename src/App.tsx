import React, { useState } from 'react';
import './App.scss';

import Notes from './containers/Notes';

function App() {

  const [notes, setNotes] = useState([] as any[]);

  const prova = {
    text: "prova"
  }

  const clicketi = (): any => {
    setNotes([prova, ...notes]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Notes notes={notes} addNotes={setNotes} />
        <button onClick={clicketi} className="col-6 new-note">
          Nuova Voce
        </button>
      </header>

    </div>
  );
}

export default App;
