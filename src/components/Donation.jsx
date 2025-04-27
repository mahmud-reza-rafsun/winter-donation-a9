import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Donation = () => {
    const donationData = useLoaderData();
    const { id, title, image, description, status, contactInfo, division, } = donationData || {};
    return (
        <div>
            <div
                className="hero min-h-[80vh]"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-white text-center">
                    <div className="max-w-md">
                        <div className="card p-8 bg-white bg-opacity-20 shadow-xl mb-6 text-left" data-aos="fade-right">
                            <div className="relative space-y-1">
                                <h2 className="card-title text-xl lg:text-2xl">{title}</h2>
                                <p>{description}</p>
                                <h2 className="text-lg lg:text-xl font-semibold">{division}</h2>
                                <div className="badge badge-success text-white bg-green-500 absolute -right-8 -top-10">{status}</div>
                                <p>{contactInfo}</p>
                            </div>
                        </div>
                        <div data-aos="fade-up-left">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-sky-500 hover:bg-sky-600 text-white border-none">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    );
};

export default Donation;