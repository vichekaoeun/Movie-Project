import React from "react";
import './Mixer.css';

const Mixer = () => {
    return (
        <>
            <div className="mixer-container">
                <button>
                    <svg width="352" height="331" viewBox="0 0 352 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1">
                            <g id="darkGroup">
                                <ellipse id="dark1" cx="176.5" cy="151.5" rx="133.5" ry="62.5" />
                            </g>
                            <g id="lightGroup">
                                <ellipse id="light1" cx="176.5" cy="151.5" rx="133.5" ry="62.5" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </>
    )
}
export default Mixer;