const ContactUs = () => {
    return (
        <div>
            <h2 className="text-center font-semibold text-2xl lg:text-3xl pb-6">Contact <span className="text-sky-500">Us</span> </h2>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-15">
                <div className="w-full lg:w-1/2">
                    <div className="hero-content flex-col">
                        <div className="bg-base-100 w-full shadow-xl shadow-sky-500 rounded-md">
                            <form className="card-body w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" placeholder="phone" className="input input-bordered" required />
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
                                    <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 shadow-xl shadow-sky-500">
                    <div style={{ width: '100%', height: '530px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131104.37420561045!2d8.6365638!3d50.121212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%20am%20Main%2C%20Germany!5e1!3m2!1sen!2sbd!4v1745678080698!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '5px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Frankfurt Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;