import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
    const { signInWithGoogle, createUserWithEmail, manageProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(null);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // password validation
        if (password.length < 6) {
            toast.error('Password should be 6 charector or longor')
        }
        const regex = {
            lowercase: /[a-z]/g,
            uppercase: /[A-Z]/g
        };

        if (!regex.uppercase.test(password)) {
            return toast.error('Password must contain at least one uppercase letter');
        }
        else if (!regex.lowercase.test(password)) {
            return toast.error('Password must contain at least one lowercase letter');
        }

        // create user
        createUserWithEmail(email, password)
            .then(res => {
                manageProfile(name, photo)
                toast.success('Register Successfull');
                navigate('/');
            })
            .catch(error => {
                toast.error((error.message.match(/\(auth\/([^)]+)\)/)?.[1] || 'something-went-wrong').replace(/-/g, ' '));
            })
    }
    const hadnleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                toast.success('Register SuccessfullLog In Successfull');
                navigate('/');
            })
            .catch(error => {
                toast.error(`${error.message}`);
            })
    }
    return (
        <div className="hero bg-base-200 rounded-md">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-xl lg:text-3xl font-semibold">Register now</h1>
                </div>
                <div className="card bg-base-100 max-w-[300px] md:max-w-[350px] lg:max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
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
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                            <div onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-12 right-4">
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </div>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Register</button>
                        </div>
                    </form>
                    <div className="form-contorl text-center pb-4">
                        {/* Google */}
                        <button onClick={hadnleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                    <p className="text-sm pl-8 pb-3">Already have an account? <Link to="/login" className="text-sky-500 underline">Login</Link></p>
                </div>
            </div >
        </div >
    );
};

export default Register;