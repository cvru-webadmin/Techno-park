import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import About from '../pages/about_team/About';

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
            }
        ]
    }
])
 

export default router;