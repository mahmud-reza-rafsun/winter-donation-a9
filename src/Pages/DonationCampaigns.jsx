import { useLoaderData } from "react-router-dom";
import DonationCard from "../components/DonationCard";

const DonationCampaigns = () => {
    const donationData = useLoaderData();
    return (
        <div>
            <h2 className="text-center font-semibold text-2xl lg:text-3xl pb-3 lg:pb-6">Donation <span className="text-sky-500">Campaigns</span> </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    donationData.map((data) => <DonationCard key={data?.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;