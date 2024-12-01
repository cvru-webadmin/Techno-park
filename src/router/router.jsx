import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import Admin from '../admin_panel/Admin_App';
import Dashbord from '../admin_panel/pages/dashbord/Dashbord';
import Contact from '../pages/contact us/Contact';
import { Contact2 } from 'lucide-react';
import ContactPage from '../pages/contact us/Contact2';
import AdminLogin from '../admin_panel/componet/sub Componet/Login';
import NotFoundPage from './Componet/NotFound';
import AdminRoute from './Componet/AdminRoute';
import Enquery from '../admin_panel/pages/enquery/Enquery';
import FacultyPage from '../admin_panel/pages/faculty/facultyPage';
import EventPage from '../admin_panel/pages/events/EnevetPage';
import FeedbackPage from '../admin_panel/pages/feedback/FeedbackPage';
import FeedbackForm from '../pages/Feedback form/FeedbackFrom';

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
                path:"/feedback",
                element:<FeedbackForm />
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
            { path: "/admin",element: <Dashbord /> },
            { path: "faculty",element: <FacultyPage /> },
            { path: "events",element: <EventPage /> },
            { path: "feedbacks",element: <FeedbackPage /> },
            { path: "enquers",element: <Enquery /> },
        ],
    },
    { path: "/AdminLogin",element: <AdminLogin /> },
    { path: "*",element: <NotFoundPage />}
    
])
 

export default router;