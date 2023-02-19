import { createBrowserRouter, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/AdminDashboard/Dashboard";
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";
import GuestLayout from "./components/Layout/GuestLayout/GuestLayout";
import Homepage from "./pages/Homepage/Homepage";
import AdminLogin from "./pages/Login/AdminLogin/AdminLogin";
import TenantLogin from "./pages/Login/TenantLogin/TenantLogin";
import ProjectAdmins from "./pages/Users/ProjectAdmins/ProjectAdmins";
import AddAdmin from "./pages/Users/ProjectAdmins/AddAdmin/AddAdmin";
import CreateIssue from "./pages/Issues/CreateIssue/CreateIssue";
import CreateProject from "./pages/Projects/CreateProject";
import ListProjects from "./pages/Projects/ListProjects"
import ViewIssue from "./pages/Issues/ViewIssue/ViewIssue"
import TenantDashboard from "./pages/Dashboard/TenantDashboard/TenantDashboard";
import TenantProfile from "./pages/Users/Tenants/TenantProfile/TenantProfile";
import AddUser from "./pages/Users/AddUser";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        element: <GuestLayout />,
        children: [
            {
                path: '/login/admin',
                element: <AdminLogin />
            },
            {
                path: 'login/tenant',
                element: <TenantLogin />
            },
        ]
    },
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/tenant-dashboard',
                element: <TenantDashboard />
            },
            {
                path: '/tenant-profile',
                element: <TenantProfile />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/add-user',
                element: <AddUser />
            },
            {
                path: '/add-admin',
                element: <AddAdmin />
            },
            {
                path: '/create-issue',
                element: <CreateIssue />
            },
            {
                path: '/view-issue',
                element: <ViewIssue />
            },
            {
                path: '/list-projects',
                element: <ListProjects />,
            },
            {
                path: '/create-project',
                element: <CreateProject />,
            },
        ]
    },

    {
        path: '/',
        element: <NotFound />

    },
])

export default router;