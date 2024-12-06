import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import Activity from '../pages/activities_cultral/Activity';

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
                path: "/activities",
                element: <Activity />,
              },
        ]
    }
])
 

export default router;