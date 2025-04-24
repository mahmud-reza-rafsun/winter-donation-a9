import AboutImg from "../assets/donate.webp"
import AboutChildImg from '../assets/Gorkha-10.jpg'

const About = () => {
    return (
        <div className="">
            <h2 className="text-center font-semibold text-3xl ">About <span className="text-sky-500">Us</span> </h2>
            <div className="py-5 flex justify-center items-center gap-10">
                <div>
                    <img src={AboutImg} className="rounded-md" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl lg:text-4xl font-bold">Warm Hearts, Warm Hands.</h1>
                    <p className="py-3">
                        emphasizes both emotional warmth compassion, kindness and physical warmth donating clothes. Your message should highlight
                    </p>
                    <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Learn More</button>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-center py-5">Why Donate Winter <span className="text-sky-500">Clothes to our Org?</span> </h3>
                <div className="flex justify-center items-center gap-5">
                    <div className="space-y-4 w-3/6 mt-5">
                        <div tabIndex={0} className="collapse collapse-arrow border-sky-500 bg-sky-500 text-white border">
                            <div className="collapse-title text-xl font-medium">Spreading Warmth, Saving Lives</div>
                            <div className="collapse-content">
                                <p tabindex={0}> Winter is harsh for those without shelter or proper clothing. By donating your gently used winter wear, you're not just clearing your closet—you're saving someone from the bitter cold.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-sky-500 bg-sky-500 text-white border">
                            <div className="collapse-title text-xl font-medium">Every Coat Tells a Story</div>
                            <div className="collapse-content">
                                <p tabindex={0}> That jacket you don’t wear anymore could be a shield for someone facing the freezing nights. Your donation carries more than fabric—it carries hope, dignity, and warmth.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-sky-500 bg-sky-500 text-white border">
                            <div className="collapse-title text-xl font-medium">Community Helping Community</div>
                            <div className="collapse-content">
                                <p tabindex={0}> Our neighbors in need shouldn’t have to choose between warmth and food. Your winter clothes can make the season easier, safer, and kinder for those struggling.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-sky-500 bg-sky-500 text-white border">
                            <div className="collapse-title text-xl font-medium"> Reuse with a Purpose</div>
                            <div className="collapse-content">
                                <p tabindex={0}> Instead of letting winter clothes go unused, give them a second life. Sustainable giving not only helps the planet but also brings comfort to people who need it the most.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-sky-500 bg-sky-500 text-white border">
                            <div className="collapse-title text-xl font-medium">Shelter from the Storm</div>
                            <div className="collapse-content">
                                <p tabindex={0}>We can’t control the weather, but we can control how we respond. Your donation helps provide a layer of protection against the cold to children, the elderly, and families in need.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-sky-500 bg-sky-500 text-white border">
                            <div className="collapse-title text-xl font-medium">A Simple Act, A Huge Impact</div>
                            <div className="collapse-content">
                                <p tabindex={0}>It might be just a sweater to you—but to someone without one, it’s a gift of warmth and compassion. Small donations make a big difference.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/6">
                        <img src={AboutChildImg} className="rounded-md" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;