import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import FeedbackFrom from '../pages/Feedback form/FeedbackFrom';
import EmailAuthfication from '../pages/test fiebase/EmailAuthfication';
import Signin from '../pages/test fiebase/Signin';

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
                element:<Signin />
            }
        ]
    }
])
 

export default router;