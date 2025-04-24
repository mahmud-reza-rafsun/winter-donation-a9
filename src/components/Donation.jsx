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
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {description}

                        </p>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-sky-500 hover:bg-sky-600 text-white border-none">Donate</button>
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    );
};

export default Donation;