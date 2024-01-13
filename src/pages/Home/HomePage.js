import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Mixer from '../../components/Mixer/Mixer.js';
import { Link } from 'react-router-dom';
import "./HomePage.css";
const HomePage = () => {
    return (
        <div>
            <div className="grid grid-cols-6 bg-gradient-to-tr from-yellow-600 to-purple-600">
                <div className="bg-purple-500 bg-opacity-30 col-span-1">
                    <Sidebar />
                </div>
                <div className="col-span-5  px-8 homecontent">
                    <div id="trending" >
                        <h1>TRENDING</h1>
                    </div>
                    <div id="mood-mixer">
                        <div>
                            <h1>MOOD MIXER</h1>
                            <p id = "parag">To discover the movies your heart desires, please select the mood you are currently feeling:</p> 
                        </div>
                        <div className="w-100 h-100 flex items-center flex-col">
                            < Mixer />
                        </div>
                    </div>
                    <div id="join-group" className="mt-10">
                        <Link to='/discover'>JOIN GROUP</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;