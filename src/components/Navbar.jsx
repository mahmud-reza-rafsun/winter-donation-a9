import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        signOutUser()
            .then(res => {
                toast.success('Log Out Successfull')
            })
            .catch(error => {
                toast.error(`${error.message}`)
            })
    }
    return (
        <div className="bg-sky-500 sticky top-0 z-50">
            <div className="w-11/12 mx-auto navbar">
                <div className="navbar-start">
                    <Link to="/" className="text-md md:text-xl lg:text-2xl font-bold lg:font-semibold cursor-pointer text-white">ColdCare Network</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="donation-campaigns">Donation Campaigns</NavLink></li>
                        <li><NavLink to="how-to-help">How to Help</NavLink></li>
                        <li><NavLink to="dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 absolute right-0 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="donation-campaigns">Donation Campaigns</NavLink></li>
                            <li><NavLink to="how-to-help">How to Help</NavLink></li>
                            <li><NavLink to="dashboard">Dashboard</NavLink></li>
                            <div className="flex gap-4 my-3">
                                {
                                    user ?
                                        <div className="flex justify-center items-center gap-4">
                                            <div role="button" className="btn btn-ghost btn-circle avatar">
                                                {
                                                    user && <div className="w-10 rounded-full">
                                                        <img
                                                            alt={user?.displayName}
                                                            src={user?.photoURL} />
                                                    </div>
                                                }
                                            </div>
                                            <button onClick={handleLogOut} className="btn btn-error text-white">Log Out</button>
                                        </div>
                                        :
                                        <Link to="/login" className="btn">Login</Link>
                                }
                            </div>
                        </ul>
                    </div>
                    <div className="hidden lg:block ">
                        {
                            user ?
                                <div className="flex justify-center items-center gap-4">
                                    <div role="button" className="btn btn-ghost btn-circle avatar">
                                        {
                                            user && <div className="w-10 rounded-full">
                                                <img
                                                    alt={user?.displayName}
                                                    src={user?.photoURL} />
                                            </div>
                                        }
                                    </div>
                                    <button onClick={handleLogOut} className="btn btn-error text-white">Log Out</button>
                                </div>
                                :
                                <Link to="/login" className="btn">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;