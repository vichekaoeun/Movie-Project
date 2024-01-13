import React, { useEffect, useState, useRef } from "react";
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

const moods = ["Happy", "Sad", "Excite", "Calm", "Fear", "Anger", "Content", "Romantic", "Stress", "Humorous"];

const Mixer = () => {
    const numButtons = 10;
    const [buttons, setButtons] = useState([]);
    const initialStyles = useRef(Array(numButtons).fill(null));
    const clickedButtons = useRef(Array(numButtons).fill(false));

    const getRandomStyle = (index) => {
        if (!initialStyles.current[index]) {
            initialStyles.current[index] = {
                width: getRandomSize(),
                height: getRandomSize(),
                left: getRandomPosition(),
                top: getRandomPosition(),
                padding: 5,
            };
        }
        return initialStyles.current[index];
    };

    const [selectedMoods, setSelectedMoods] = useState([]);


    const handleButtonClick = (index) => {
        clickedButtons.current[index] = !clickedButtons.current[index];

        if (clickedButtons.current[index]) {
            // If the button is clicked, add the mood to the sel ectedMoods array
            setSelectedMoods((prevSelectedMoods) => [...prevSelectedMoods, moods[index]]);
        } else {
            // If the button is unclicked, remove the mood from the selectedMoods array
            setSelectedMoods((prevSelectedMoods) =>
                prevSelectedMoods.filter((mood) => mood !== moods[index])
            );
        }

        setButtons(prevButtons => {
            const newButtons = [...prevButtons];
            const style = getRandomStyle(index);

            // Modify the fill attribute based on the current state
            const fill = clickedButtons.current[index] ? '#808080' : getRandomColor();

            // Directly manipulate the SVG fill attribute using ref
            newButtons[index] = (
                <button key={index} style={style} onClick={() => handleButtonClick(index)}>
                    <svg width="100%" height="100%" viewBox="0 0 352 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1">
                            <g id="darkGroup">
                                <ellipse id="dark1" ref={(el) => el && (el.style.fill = fill)} cx="176.5" cy="151.5" rx="133.5" ry="62.5" />
                            </g>
                            <g id="lightGroup">
                                <ellipse id="light1" ref={(el) => el && (el.style.fill = fill)} cx="176.5" cy="151.5" rx="133.5" ry="62.5" />
                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="30">{moods[index]}</text>
                            </g>
                        </g>
                    </svg>
                </button>
            );
            return newButtons;
        });
    };

    //hook will log the selected moods whenever the array changes
    useEffect(() => {
        console.log("Selected Moods:", selectedMoods);
    }, [selectedMoods]);

    useEffect(() => {
        const generatedButtons = [];
        for (let i = 0; i < numButtons; i++) {
            generatedButtons.push(
                <button key={i} style={getRandomStyle(i)} onClick={() => handleButtonClick(i)} >
                    <svg width="100%" height="100%" viewBox="0 0 352 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1">
                            <g id="darkGroup">
                                <ellipse id="dark1" cx="176.5" cy="151.5" rx="133.5" ry="62.5" fill={getRandomColor()} />
                            </g>
                            <g id="lightGroup">
                                <ellipse id="light1" cx="176.5" cy="151.5" rx="133.5" ry="62.5" fill={getRandomColor()} />
                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="30">{moods[i]}</text>
                            </g>
                        </g>
                    </svg>
                </button>
            );
        }
        setButtons(generatedButtons);
    }, []);

    return (
        <>
            <div className="mixer-container">
                {buttons}
            </div>
            <div className="w-20 h-17 flex justify-center">
                <button className="bg-slate-100 text-black rounded-md px-2 py-2 text-base flex justify-center hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300">Mix</button>
            </div>
        </>
    );
};

export default Mixer;