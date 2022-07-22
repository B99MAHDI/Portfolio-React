
import React from 'react'

const Modal = () => {
    return (
        <section>
            {/* <button id="modalBtn" type="button" class="btn" data-target="#modal-test" data-toggle="modal">Click to show the modal</button> */}

            <div id="simplemodal" class="modal">
                <div class="modal-content">
                    <span id="closeBtn" class="closeBtn">&times;</span>
                    <p>hello im a modal ...</p>
                </div>  
            </div>
        </section>
    )
}

export default Modal