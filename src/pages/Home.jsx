import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
            <NavBar/>
                <div className="grid grid-cols-2 items-center min-h-screen px-24 bg-[#EFF9FF]">
                    <div>
                        <h1 className="text-7xl md:text-6xl sm:text-3xl font-light leading-snug text-sky-950 mb-4">
                            “ BIAR KAMI <br />
                            YANG <br /> 
                            <span className="italic font-bold text-sky-950">UMBAH</span> ”
                        </h1>

                        <p className="text-[#033145] text-lg md:text-md mt-2">
                            <span className="font-bold italic">Lumba-umbah</span> provides a variety of services you need <br/>
                            <span className="font-bold">— wash, dry, or fold — </span><br/> <br/>

                            <b>Pickup</b> and <b>drop-off</b> options available!
                        </p>

                        <div className="flex items-center gap-2 mt-4">
                            <h3 className="text-4xl font-bold text-sky-950">7+</h3>
                            <p className="text-md text-sky-950 font-bold leading-tight">
                                Years of <br />
                                Experience
                            </p>
                        </div>
                    </div>

                    {/* Washing Machine */}
                    <div className="flex justify-center">
                        <img src="/public/hero.svg" alt="Laundry illustration" className="w-500px" />
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default Home;