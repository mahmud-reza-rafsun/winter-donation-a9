import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="hero rounded-md py-4">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="font-semibold text-2xl lg:text-3xl" data-aos="fade-down">Profile</h1>
                </div>
                <div className="card rounded-xl lg:rounded-full w-full max-w-sm shrink-0 shadow-2xl relative px-5 lg:pb-0 lg:px-0 pb-5">
                    <div className="flex flex-col lg:flex-row gap-6 p-8 justify-center items-center">
                        <div data-aos="fade-right">
                            <img src={user?.photoURL} className="w-24 h-24 rounded-full object-cover" alt="" />
                        </div>
                        <div className="text-center lg:text-left" data-aos="fade-left">
                            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <Link to="/update-profile" data-aos="fade-up">
                        <button className="btn bg-sky-500 hover:bg-sky-600 text-white w-fit mx-auto absolute top-[230px] lg:top-[135px] right-0 left-0">Update Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;