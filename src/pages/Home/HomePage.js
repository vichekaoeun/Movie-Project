import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';

const HomePage = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="bg-pink-400 col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-3 bg-blue-400">
                <div id="trending">
                    <h1>TRENDING</h1>
                </div>
                <div id="mood-mixer">
                    <h1>MOOD MIXER</h1>
                </div>
                <div id="join-group">
                    <h1>JOIN GROUP</h1>
                </div>
            </div>
        </div>
    )
}
export default HomePage;