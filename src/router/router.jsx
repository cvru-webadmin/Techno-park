import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import Admin from '../Admin_ Panel/Admin_App';

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
                path:"/featuredCourses",
                element:<h1>featured couress</h1>
            }
        ]
    },
    {
        path:"/admin",
        element:<Admin />
    }
])
 

export default router;