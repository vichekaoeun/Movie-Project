import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../pages/Home/HomePage.js';
import AboutPage from '../pages/About/AboutPage.js';
import GroupPage from '../pages/Group/Group.js';
import DiscoverPage from '../pages/Discover/Discover.js';
import SignUp from '../pages/Auth/SignUp/SignUp.js';
import SignIn from '../pages/Auth/SignIn/SignIn.js';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/about',
            element: <AboutPage />,
        },
        {
            path: '/group',
            element: <GroupPage />,
        },
        {
            path: '/discover',
            element: <DiscoverPage />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/signin',
            element: <SignIn />
        }
    ]);
    return <RouterProvider router={router} />
}
export default Router;