import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import FeedbackFrom from '../pages/Feedback form/FeedbackFrom';

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
                path:"/feedback",
                element:<FeedbackFrom />
            }
        ]
    }
])
 

export default router;