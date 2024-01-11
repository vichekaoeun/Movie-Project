import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';

const AboutPage = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="bg-pink-400 col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-3 grid grid-cols-3 bg-yellow-400 h-screen">
                <h1 className="col-start-2 col-end-2">
                    About Us!
                </h1>
            </div>
        </div>
    )
}
export default AboutPage;