import BannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="flex gap-10 flex-col lg:flex-row-reverse items-center justify-center space-y-3 lg:space-y-0" >
            <div data-aos="fade-left">
                <img src={BannerImg} className="rounded-md" />
            </div>
            <div data-aos="fade-up">
                <h1 className="text-xl lg:text-3xl font-semibold">Warm Clothes, Warmer Hearts.</h1>
                <p className="py-3">
                    This winter, let kindness be your coziest gift. Through your simple act of donating warm clothes, you can bring comfort, dignity, and hope to someone facing the cold without shelter. Every jacket, sweater, or scarf you give wraps another human being
                </p>
                <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;