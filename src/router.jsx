import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import GuestLayout from "./components/GuestLayout/GuestLayout";
import Homepage from "./pages/Homepage/Homepage";
import AdminLogin from "./pages/Login/AdminLogin/AdminLogin";
import TenantLogin from "./pages/Login/TenantLogin/TenantLogin";
import ProjectAdmins from "./pages/Users/ProjectAdmins/ProjectAdmins";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/project-admins',
                element: <ProjectAdmins />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/home',
                element: <Homepage />
            },
            {
                path: '/login/admin',
                element: <AdminLogin />
            },
            {
                path: 'login/tenant',
                element: <TenantLogin />
            },
            // {
            //     // path: '/',
            //     element: <Login />,
            //     children: [
            //         {
            //             path: 'login/admin',
            //             element: <AdminLogin />
            //         },
            //         {
            //             path: 'login/tenant',
            //             element: <TenantLogin />
            //         },
            //     ]
            // }
        ]
    },
    {
        path: '/',
        element: <NotFound />

    },
])

export default router;