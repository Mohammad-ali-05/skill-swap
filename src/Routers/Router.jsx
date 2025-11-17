import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        loader: async () => {
            const [courseRes, successRes] = await Promise.all([
                fetch("/course-data.json"),
                fetch("/success-stories.json")
            ]);

            const [courseData, successData] = await Promise.all([
                courseRes.json(),
                successRes.json()
            ]);

            return { courseData, successData }
        },
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/course-details/:slug",
        element: <p>Course details is here</p>
    },
    {
        path: "/profile",
        element: <h3>Profile is here</h3>
    },
    {
        path: "/auth",
        element: <h2>Auth layout is here</h2>,
        children: [
            {
                path: "/auth/login",
                element: <h2>Login is here</h2>
            },
            {
                path: "/auth/register",
                element: <h2>Register is here</h2>
            }
        ]
    }
])
export default Router;