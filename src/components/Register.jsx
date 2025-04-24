import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero bg-base-200 rounded-md">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Register now</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* photo url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Register</button>
                        </div>
                    </form>
                    <p className="text-sm pl-8 pb-3">Already have an account? <Link className="text-sky-500 underline" to="/login">Login</Link></p>
                </div>
            </div >
        </div >
    );
};

export default Register;