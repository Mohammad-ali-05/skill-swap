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
import Profile from "../Components/Profile";
import ResetPassword from "../Components/ResetPassword";
import ErrorPage from "../Components/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <MainLayout></MainLayout>
      </AuthProvider>
    ),
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);
export default Router;
