import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';

const AboutPage = () => {
    return (
<<<<<<< HEAD
        <div className="grid grid-cols-4">
            <div className="bg-pink-400 col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-3 grid grid-cols-3 bg-yellow-400 h-screen">
                <h1 className="col-start-2 col-end-2">
                    About Us!
=======
        <div className="grid grid-cols-6">
            <div className="bg-pink-400 col-span-1">
                <Sidebar />
            </div>
            <div className=" col-span-5 bg-yellow-400 h-screen flex flex-col items-center gap-8">
                <h1 className="col-span-3 col-start-2 text-6xl my-3">
                    <u>About Us!</u>
>>>>>>> bac47be6f033e05796d30dc99569158cc5099107
                </h1>
                <div className="">
                    <p className="text-lg">
                        Too often when I want watch movies I question myself, <i>I don't know what to watch</i>. Then I would go to those top 5 or top 10 movie sites and look from their list<br></br>
                        But I would never feel satisfied with the selection, after which I proceed to go ask my friends for recommendations. I wished there was a website that does this. <br></br>
                        <b>So I made it</b>.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;