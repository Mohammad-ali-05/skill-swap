import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import SkillDetails from "../Pages/SkillDetails";
import Login from "../Components/Login";
import Registration from "../Components/Registration";
import AuthProvider from "../Contexts/AuthProvider";
import PrivateRoutes from "./PrivateRoutes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <MainLayout></MainLayout>
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <HomeLayout></HomeLayout>,
        loader: async () => {
          const [courseRes, successRes] = await Promise.all([
            fetch("/course-data.json"),
            fetch("/success-stories.json"),
          ]);

          const [courseData, successData] = await Promise.all([
            courseRes.json(),
            successRes.json(),
          ]);

          return { courseData, successData };
        },
      },
      {
        path: "/course-details/:slug",
        element: (
          <PrivateRoutes>
            <SkillDetails></SkillDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/course-data.json"),
      },
      {
        path: "/profile",
        element: <h3>Profile is here</h3>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
export default Router;
