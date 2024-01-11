import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';

const Home = () => {
    return (
        <div className="bg-blue-500">
            <div className="Sidebar">
                <Sidebar />
            </div>
            <div className="Home-Main">
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
export default Home;