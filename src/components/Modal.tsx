import React from 'react';
import { Note } from '../App';
import './Modal.scss';

function Modal(props: any) {
    const saveNote = () => {
        props.setNotes([...props.notes, prova])
        props.setIsModalOpen(false)
    }

    const prova: Note = {
        id: 1,
        content: "prova"
    }

    return (
        <div className='Modal-background'>
            <div className="Modal d-flex flex-column">
                <div>
                    <textarea name="" id="" placeholder='prova'>
                        {/* ... */}
                    </textarea>
                </div>

                <div>
                    <button onClick={saveNote}>
                        Salva
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;