import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';

const GroupPage = () => {
    return (
        <div className="grid grid-cols-6 h-screen bg-gradient-to-tr from-yellow-600 to-purple-600">
        <div className="bg-purple-500 bg-opacity-30 col-span-1">
            <Sidebar />
        </div>
            <div className="col-span-3 grid grid-cols-3 h-screen">
                <h1 className="col-start-2 col-end-2">
                    Group
                </h1>
            </div>
        </div>
    )
}
export default GroupPage;