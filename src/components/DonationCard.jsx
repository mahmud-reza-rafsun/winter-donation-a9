import { Link } from "react-router-dom";

const DonationCard = ({ data }) => {
    const { id, title, image, description, status, contactInfo, division, } = data || {};
    return (
        <div className="border p-4 rounded-md">
            <figure data-aos="fade-right">
                <img
                    src={image}
                    className="rounded-md w-full h-100px"
                    alt="Shoes" />
            </figure>
            <div className="space-y-3 mt-4" data-aos="fade-left">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/donation/${id}`}>
                        <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Donate Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;