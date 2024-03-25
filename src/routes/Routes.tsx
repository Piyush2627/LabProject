import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import AddStudentPage from "../components/pages/AddStudentPage/AddStudentPage";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import MarkAttedence from "../components/pages/MarkAttedence/MarkAttedence";
import MakeMarksheet from "../components/pages/MakeMarksheet/MakeMarksheet";
import DasboardLayout from "./DasboardLayout";

const router = createBrowserRouter([
  {
    path: "/oldservices",
    element: <TopNavbar />,
    children: [
      {
        path: "/oldservices",
        element: <Dashboard />,
      },
      {
        path: "/oldservices/addstudent",
        element: <AddStudentPage />,
      },
      {
        path: "/oldservices/markattedence",
        element: <MarkAttedence />,
      },
      {
        path: "/oldservices/makemarksheet",
        element: <MakeMarksheet />,
      },
    ],
  },
  {
    path: "/",
    element: <DasboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/markmarksheet",
        element: <MakeMarksheet />,
      },
      {
        path: "/attedence",
        element: <MarkAttedence />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
