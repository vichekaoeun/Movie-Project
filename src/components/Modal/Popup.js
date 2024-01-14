import React from "react";
import './Popup.css'

const Popup = ({ modal, toggleModal, MovieList }) => {

    return (
        <div>
            {modal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div>
                            {MovieList.map((movie) => (
                                <div key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                    <div>
                                        <h3>{movie.title}</h3>
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={toggleModal} className="close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Popup;