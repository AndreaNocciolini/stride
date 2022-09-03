import React from 'react';
import './Modal.scss';
// import { Note } from '../App';

function Modal(props: any) {
    const saveNote = () => {
        props.setNotes([...props.notes, {
            id: props.notes.length ? props.notes.length + 1 : 1,
            content: props.message
        }])
        props.setIsModalOpen(false)
        console.log(props.notes)
        console.log(props.message)
    }


    const handleMessageChange =(event: any) => {
        console.log(event.target.value);
        console.log(props.message)
    };

    return (
        <div className='Modal-background'>
            <div className="Modal d-flex flex-column">
                <div className='p-3'>
                    <textarea
                        id="message"
                        name="message"
                        value={props.message}
                        onChange={handleMessageChange}
                        placeholder='prova'>
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