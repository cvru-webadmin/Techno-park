import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import About from '../pages/about_team/About';
import Courses from '../pages/courses/Courses';
import Activity from '../pages/activities_cultral/Activity';
import Campus from '../pages/campus/Campus';
import IOT from '../pages/campus/Iot';

const router =createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
             path:"/about",
             element:<About/>
            },
            {
             path:"/courses",
             element:<Courses/>
            },
            {
                path: "/activities",
                element: <Activity />,
            },
            {
                path: "/campus",
                element: <Campus/>,
            },
            {
                path: "/IOT",
                element: <IOT/>,
            },
        ]
    }
])
 

export default router;