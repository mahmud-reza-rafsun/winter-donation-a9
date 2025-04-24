import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero bg-base-200 rounded-md">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-semibold">Login now</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Login</button>
                        </div>
                    </form>
                    <p className="text-sm pl-8 pb-3">New to this Website? <Link className="text-sky-500 underline" to="/register">Register</Link></p>
                </div>
            </div >
        </div >
    );
};

export default Login;