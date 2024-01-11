import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../pages/Home/HomePage.js';
import AboutPage from '../pages/About/AboutPage.js';
import GroupPage from '../pages/Group/Group.js';

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
        }
    ]);
    return <RouterProvider router={router} />
}
export default Router;