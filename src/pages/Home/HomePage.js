import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div className="grid grid-cols-6 h-screen">
                <div className="bg-pink-400 col-span-1">
                    <Sidebar />
                </div>
                <div className="col-span-5 bg-blue-400">
                    <div id="trending">
                        <h1>TRENDING</h1>
                    </div>
                    <div id="mood-mixer">
                        <h1>MOOD MIXER</h1>
                    </div>
                    <div id="join-group">
                        <Link to='/discover'>JOIN GROUP</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;