import React, { useEffect, useState } from "react";
import './Mixer.css';

// Generate a random size value
const getRandomSize = () => {
    const minSize = 100;
    const maxSize = 250;
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
};

// Generate a random position
const getRandomPosition = () => {
    const maxPosition = 100;
    return Math.floor(Math.random() * maxPosition);
};

//Generate random colors
const getRandomColor = () => {
    const randomComponent = () => Math.floor(Math.random() * 256);
    const red = randomComponent().toString(16).padStart(2, '0');
    const green = randomComponent().toString(16).padStart(2, '0');
    const blue = randomComponent().toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
};

const moods = ["Happy", "Sad", "Excited", "Calm", "Surprised", "Angry", "Content", "Energetic", "Relaxed", "Playful"];

const Mixer = () => {
    const numButtons = 10;
    const [buttons, setButtons] = useState([]);
    const handleButtonClick = (mood) => {
        switch (mood) {
            case 0:
                console.log('Click on Happy');
                break;
            case 1:
                console.log('Click on Sad');
                break;
            case 2:
                console.log('Click on Excited');
                break;
            case 3:
                console.log('Click on Calm');
                break;
            case 4:
                console.log('Click on Surprised');
                break;
            case 5:
                console.log('Click on Angry');
                break;
            case 6:
                console.log('Click on Content');
                break;
            case 7:
                console.log('Click on Energetic');
                break;
            case 8:
                console.log('Click on Relaxed');
                break;
            case 9:
                console.log('Click on Playful');
                break;
        }
    };

    useEffect(() => {
        const generatedButtons = [];

        for (let i = 0; i < numButtons; i++) {
            const mood = moods[i];
            const buttonStyles = {
                width: getRandomSize(),
                height: getRandomSize(),
                left: getRandomPosition(),
                top: getRandomPosition(),
                padding: 5
            }
            console.log(buttonStyles);

            generatedButtons.push(
                <button key={i} style={buttonStyles} onClick={() => handleButtonClick(i)}>
                    <svg width="100%" height="100%" viewBox="0 0 352 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1">
                            <g id="darkGroup">
                                <ellipse id="dark1" cx="176.5" cy="151.5" rx="133.5" ry="62.5" />
                            </g>
                            <g id="lightGroup">
                                <ellipse id="light1" cx="176.5" cy="151.5" rx="133.5" ry="62.5" fill={getRandomColor()} />
                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="30">{mood}</text>
                            </g>
                        </g>
                    </svg>
                </button>
            )
        }
        setButtons(generatedButtons); //Change button state
    }, []);

    return (
        <>
            <div className="mixer-container">
                {buttons}
            </div>
            <div className="w-20 h-17 flex justify-center">
                <button className="bg-slate-100 text-black rounded-md px-2 py-2 text-base flex justify-center">Mix</button>
            </div>
        </>
    )
}
export default Mixer;