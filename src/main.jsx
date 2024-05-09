import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Home from "./Component/Home/Home";
import AllJobs from "./Component/AllJobs/AllJobs";
import AppliedJobs from "./Component/AppliedJobs/AppliedJobs";
import AddJob from "./Component/AddJob/AddJob";
import MyJob from "./Component/MyJob/MyJob";
import Login from "./Component/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/addJobs",
        element: <AddJob></AddJob>,
      },
      {
        path: "/myJobs",
        element: <MyJob></MyJob>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
