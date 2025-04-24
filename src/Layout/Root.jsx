import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-128px)] w-11/12 mx-auto py-4 lg:py-8">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;