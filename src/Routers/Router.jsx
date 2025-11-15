import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
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