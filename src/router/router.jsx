import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
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
             element:<h1 className='h-screen flex items-center justify-center'>this is about page</h1>
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