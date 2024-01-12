import React from "react";
import './Mixer.css';

// Generate a random size value
const getRandomSize = () => {
    const minSize = 50;
    const maxSize = 200;
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
};

// Generate a random position
const getRandomPosition = () => {
    const maxPosition = 300;
    return Math.floor(Math.random() * maxPosition);
};

const Mixer = () => {
    const numButtons = 5;
    const buttons = []; // Array to store buttons

    for (let i = 0; i < numButtons; i++) {
        const buttonStyles = {
            width: getRandomSize(),
            height: getRandomSize(),
            left: getRandomPosition(),
            top: getRandomPosition(),
        }
        console.log(buttonStyles);

        buttons.push(
            <button key={i} style={buttonStyles}>
                <svg width="100%" height="100%" viewBox="0 0 352 331" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        )
    }

    return (
        <>
            <div className="mixer-container">
                {buttons}
            </div>
        </>
    )
}
export default Mixer;