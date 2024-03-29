import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar.js';

const AboutPage = () => {
    return (
        <div className="grid grid-cols-6 h-screen bg-gradient-to-tr from-yellow-600 to-purple-600">
            <div className="bg-purple-500 bg-opacity-30 col-span-1">
                <Sidebar />
            </div>
            <div className=" col-span-5 h-screen flex flex-col items-center gap-8">
                <h1 className="col-span-3 col-start-2 text-6xl my-3 text-slate-200">
                    <u>About Us!</u>
                </h1>
                <div className="">
                    <p className="text-lg text-slate-200">
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