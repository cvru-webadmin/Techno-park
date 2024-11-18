import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import AdminRoute from './AdminRoute';
import Admin from '../admin_panel/Admin_App';
import AdminLogin from '../admin_panel/componet/Login';
import Dashbord from '../admin_panel/componet/Dashbord';

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