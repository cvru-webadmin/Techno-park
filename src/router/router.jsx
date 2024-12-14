import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import About from '../pages/about_team/About';
import Courses from '../pages/courses/Courses';
import Activity from '../pages/activities_cultral/Activity';
import Campus from '../pages/campus/Campus';
import IOT from '../pages/campus/Iot';
import Archivevments from '../pages/achievements/Archivevments';
import Placement from '../pages/placement/Placement';
import Admin from '../admin_panel/Admin_App';
import Dashbord from '../admin_panel/pages/dashbord/Dashbord';
import Contact from '../pages/contact us/Contact';
import ContactPage from '../pages/contact us/Contact2';
import AdminLogin from '../admin_panel/componet/sub Componet/Login';
import NotFoundPage from './Componet/NotFound';
import AdminRoute from './Componet/AdminRoute';
import Enquery from '../admin_panel/pages/enquery/Enquery';
import EventPage from '../admin_panel/pages/events/EnevetPage';
import FeedbackPage from '../admin_panel/pages/feedback/FeedbackPage';
import FeedbackForm from '../pages/Feedback form/FeedbackFrom';
import EventsPage from '../pages/events/Events';
import Chancellor from '../pages/about_team/AboutComponent/Chancellor';
import AboutPage from '../pages/about_team/AboutPage';
import ViceChancellor from '../pages/about_team/AboutComponent/ViceChancellor';
import Registrar from '../pages/about_team/AboutComponent/Rigistar';

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
             element:<AboutPage/>,
             children:[
                {path:"/about",element:<About />},
                {path:"Chancellor-Message",element:<Chancellor />},
                {path:"Vice-Chancellor-Message",element:<ViceChancellor />},
                {path:"Registrar-Message",element:<Registrar />},
             ]
            },
            {
             path:"/courses",
             element:<Courses/>
            },
            {
                path: "/activities",
                element: <Activity />,
            },
            {
                path: "/campus",
                element: <Campus/>,
            },
            {
                path: "/IOT",
                element: <IOT/>,
            },
            {
             path:"/achievements",
             element:<Archivevments />
            },
            {
                path: "/placement",
                element: <Placement />,
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
            {
             path:"/event",
             element:<EventsPage />
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
            { path: "/admin",element: <Dashbord /> },
            { path: "faculty",element: <FacultyPage /> },
            { path: "events",element: <EventPage /> },
            { path: "feedbacks",element: <FeedbackPage /> },
            { path: "enquers",element: <Enquery /> },
        ],
    },
    { path: "/AdminLogin",element: <AdminLogin /> },
    { path: "*",element: <NotFoundPage />}
],
{
    future: {
        v7_startTransition: true,
        v7_skipActionErrorRevalidation: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
    },
})
 

export default router;