import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const ForgetPassword = () => {
    const { resetEmail } = useContext(AuthContext);
    const handleReset = (e) => {
        e.preventDefault
        const email = e.target.email.value;
        resetEmail(email)
            .then(res => {
                toast.success('Send Password verification on Email')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="hero-content flex-col">
            <div className="card bg-base-100 max-w-[300px] md:max-w-[350px] lg:max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleReset} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Reset Password</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ForgetPassword;