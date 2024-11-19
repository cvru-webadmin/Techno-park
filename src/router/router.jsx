import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import Contact from '../pages/contact us/Contact';
import { Contact2 } from 'lucide-react';
import ContactPage from '../pages/contact us/Contact2';

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
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/contact2",
                element:<ContactPage/>
            },
        ]
    }
])
 

export default router;