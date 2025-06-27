import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import { Navigate } from "react-router-dom";

const Landing = lazy(() => import("../pages/Landing"));
const Create = lazy(() => import("../pages/Create"));
const View = lazy(() => import("../pages/View"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/view",
      element: <View />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "*",
      element: <Navigate to="/dashboard" replace />,
    },
  ],
};

export default MainRoutes;
