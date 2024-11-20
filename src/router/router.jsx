import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import AdminRoute from './AdminRoute';
import Admin from '../admin_panel/Admin_App';
import AdminLogin from '../admin_panel/componet/Login';
import Dashbord from '../admin_panel/pages/dashbord/Dashbord';
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
                path:"/featuredCourses",
                element:<h1>featured couress</h1>
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
    },
    {
        path: "/admin",
        element: (
            <AdminRoute>
                <Admin /> 
            </AdminRoute>
        ),
        children: [
            { path: "/admin",element: <Dashbord /> }
        ],
    },
    { path: "/AdminLogin",element: <AdminLogin /> }
    
])
 

export default router;