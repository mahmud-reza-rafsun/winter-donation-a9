const Modal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box min-h-full relative">
                    <div className="hero bg-base-200 rounded-xl">
                        <div className="hero-content">
                            <div className="card bg-base-100 max-w-[300px] md:max-w-[350px] lg:max-w-sm shrink-0 shadow-2xl">
                                <form onSubmit={handleSubmit} className="card-body">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Select Quantity</span>
                                        </label>

                                        <select class="select input-bordered w-full max-w-xs">
                                            <option disabled selected>Select Quantity</option>
                                            <option>1,2</option>
                                            <option>3,4</option>
                                            <option>5,6</option>
                                            <option>7,8</option>
                                        </select>
                                    </div>
                                    {/* item types */}
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Items Type</span>
                                        </label>

                                        <select class="select input-bordered w-full max-w-xs">
                                            <option disabled selected>Items Type</option>
                                            <option>Jacket</option>
                                            <option>Puffer Jacket </option>
                                            <option>Wool Coat</option>
                                            <option>Hoodie</option>
                                            <option>Blazer</option>
                                        </select>
                                    </div>
                                    {/* email */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input name="address" type="text" placeholder="address" className="input input-bordered" required />
                                    </div>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Your bio</span>
                                        </div>
                                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                                        <div className="label">
                                        </div>
                                    </label>
                                    <div className="form-control">
                                        <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div >
                    </div >
                    <div className="modal-action absolute top-0 right-7">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-error text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;