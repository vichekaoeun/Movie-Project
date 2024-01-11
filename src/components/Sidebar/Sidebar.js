import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="grid grid-rows-1">
                <button>Profile</button>
            </div>
            <div className="grid grid-rows-4 grid-cols-1">
                <button>Group 1</button>
                <button>Group 2</button>
                <button>Group 3</button>
                <Link to='/about'>About us</Link>
            </div>
        </>
    )
}
export default Sidebar;