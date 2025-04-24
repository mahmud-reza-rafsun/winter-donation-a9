import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import DonationCampaigns from "../Pages/DonationCampaigns";
import HowToHelp from "../Pages/HowToHelp";
import Dashboard from "../Pages/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";
import Donation from "../components/Donation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/donation-campaigns',
                element: <DonationCampaigns />,
                loader: () => fetch('/cloth-data.json')
            },
            {
                path: '/how-to-help',
                element: <HowToHelp />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: '/donation/:id',
                element: <Donation />,
                loader: async ({ params }) => {
                    const res = await fetch(`/cloth-data.json`);
                    const data = await res.json();
                    const singleData = data.find((data) => data?.id == params?.id);
                    return singleData;
                }
            }
        ]
    }
])

export default router;