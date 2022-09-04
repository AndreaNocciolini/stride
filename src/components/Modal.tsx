import React from 'react';
import './Modal.scss';
// import { Note } from '../App';

function Modal(props: any) {

    const saveNote = () => {
        if (props.message) {
            props.setNotes([...props.notes, {
                id: props.notes.length ? props.notes.length + 1 : 1,
                content: props.message
            }])
        }
        props.setIsModalOpen(false)
        props.setMessage('')
    }


    const handleMessageChange = (event: any) => {
        props.setMessage(event.target.value);
    };

    return (
        <div className='Modal-container'>
            <div className='Modal-overlay'>
            </div>
            <div className="Modal d-flex flex-column">
                <div>
                    <textarea
                        id="message"
                        name="message"
                        value={props.message}
                        onChange={handleMessageChange}
                        placeholder='Inserisci voce'
                    />
                </div>

                <div>
                    <button className='save-button' onClick={saveNote}>
                        Salva
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;