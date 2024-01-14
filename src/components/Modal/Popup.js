import React, { useState } from "react";
import './Popup.css'

const Popup = ({ modal, toggleModal }) => {

    return (
        <div>
            {modal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div>

                        </div>
                        <button onClick={toggleModal} className="text-black">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Popup;