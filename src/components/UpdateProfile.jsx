import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { manageProfile } = useContext(AuthContext);
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        // update profile
        manageProfile(name, photo)
            .then(res => {
                toast.success('Profile Updated')
                setTimeout(() => {
                    window.location.reload();
                }, 1)
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="hero bg-base-200 rounded-md py-4">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-xl lg:text-3xl font-semibold">Update Profile</h1>
                </div>
                <div className="card bg-base-100 max-w-[300px] md:max-w-[350px] lg:max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default UpdateProfile;