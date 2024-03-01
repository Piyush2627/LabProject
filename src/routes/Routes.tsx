import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import TopNavbar from '../components/TopNavbar';
import AddStudentPage from '../components/pages/AddStudentPage/AddStudentPage';
import Dashboard from "../components/pages/Dashboard/Dashboard";
import MarkAttedence from '../components/pages/MarkAttedence/MarkAttedence';

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <TopNavbar />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/addstudent",
                element: <AddStudentPage />
            },
            {
                path: "/markattedence",
                element: <MarkAttedence />
            },

        ]
    },
]);

function Routes() {
    return (
        <RouterProvider router={router} />
    )
}

export default Routes
