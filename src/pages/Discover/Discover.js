import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';

const DiscoverPage = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="bg-pink-400 col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-3 grid grid-cols-3 bg-pink-100 h-screen">
                <h1 className="col-start-2 col-end-2">
                    Discover!
                </h1>
            </div>
        </div>
    )
}
export default DiscoverPage;