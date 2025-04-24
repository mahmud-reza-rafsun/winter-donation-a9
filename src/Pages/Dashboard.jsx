const Dashboard = () => {
    return (
        <div className="hero bg-base-200 rounded-md py-4">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-semibold">Update Profile</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Dashboard;