import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const location = useLocation();
    const userProfile = location.state?.userProfile || {};

    useEffect(() => {
        // Update the state when userProfile changes
        setUsername(userProfile.username || '');
        setEmail(userProfile.email || '');
        setAboutMe(userProfile.aboutMe || '');
    }, [userProfile]);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
        // Add logic to save the edited values, for example, send them to a server.
    };

    const handleImageChange = (e) => {
        // Handle the image change event and set the profileImage state
        const file = e.target.files[0];
        setProfileImage(file);
    };

    return (
        <div className="bg-gradient-to-tr from-yellow-600 to-purple-600 h-screen">
            <div className="flex flex-col items-center">
                <div className="border p-5 flex flex-col gap-2 bg-slate-300 rounded-lg mt-5">
                    <form className="flex flex-col gap-2">
                        <div className="border bg-slate-100 rounded-full p-2">

                            {editMode ? (
                                <input
                                    className="border border-slate-100 m-1"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            ) : (
                                <img
                                    src={profileImage ? URL.createObjectURL(profileImage) : 'default-image-url'}
                                    className=" max-w-full rounded-full"
                                />
                            )}
                        </div>
                        <div className="border bg-slate-100">
                            <label className="p-2">Username:</label>
                            {editMode ? (
                                <input
                                    className="border m-1 "
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            ) : (
                                <span className="p-2">{username}</span>
                            )}
                        </div>
                        <div className="border bg-slate-100">
                            <label className="p-2">Email:</label>
                            {editMode ? (
                                <input
                                    className="border m-1"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            ) : (
                                <span className="p-2">{email}</span>
                            )}
                        </div>
                        <div className="border bg-slate-100">
                            <label className="p-2">About me:</label>
                            {editMode ? (
                                <textarea
                                    className="border"
                                    value={aboutMe}
                                    onChange={(e) => setAboutMe(e.target.value)}
                                />
                            ) : (
                                <span className="p-2">{aboutMe}</span>
                            )}
                        </div>
                    </form>
                    <div className="flex justify-center">
                        {editMode ? (
                            <button className="border p-2 bg-slate-100 text-black rounded-md px-2 py-2 text-base flex justify-center hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300" onClick={handleSaveClick}>Save</button>
                        ) : (
                            <button className="border p-2 bg-slate-100 text-black rounded-md px-2 py-2 text-base flex justify-center hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300" onClick={handleEditClick}>Edit</button>
                        )}
                    </div>
                    <div className="flex justify-center mt-5">
                        <Link to='/'>Return Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
