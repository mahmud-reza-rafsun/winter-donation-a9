import About from "../components/About";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Review from "../components/Review";


const Home = () => {
    return (
        <div className="space-y-16">
            <Banner />
            <About />
            <Review />
            <ContactUs />
        </div>
    );
};

export default Home;