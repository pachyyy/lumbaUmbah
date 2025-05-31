import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div className="bg-[#EFF9FF] min-h-screen">
      <NavBar />
        <div className="flex items-center justify-center h-screen w-full py-32 px-4">
          <div className="flex flex-col items-center gap-20">

            <h1 className="text-5xl text-sky-700 font-bold">About Us</h1>

            <div className="grid grid-cols-3 px-5 gap-2 mx-auto">
              {/* Easy */}
              <div className="px-3">
                <div className="flex justify-center text-3xl">
                  <img src="/assets/easy.svg" alt="Easy Icon" className="h-30" ></img>
                </div>

                <div className="flex justify-center text-3xl mt-4 text-sky-700 font-bold">
                    Easy
                </div>
                    
                <div className="flex justify-center text-lg text-center mt-4 font-bold">
                    Your convenience and satisfaction is our priority.<br/> 
                    Each of our service is designed wholeheartedly for 
                    the sake of presenting our customer with the best experience.
                </div>
              </div>

              {/* Time Saving */}
              <div className="ml-4 mr-4">
                <div className="flex justify-center text-3xl">
                  <img src="/assets/time-saving.svg" alt="Easy Icon" className="h-25" ></img>
                </div>

                <div className="flex justify-center text-3xl mt-9 text-sky-700 font-bold">
                    Time Saving
                </div>
                    
                <div className="flex justify-center text-lg text-center mt-4 font-bold">
                    Use pickup and drop-off options to save even more of your time for free! <br/>
                    We take matters into our hands so you can go about your busy schedule.
                </div>
              </div>

              {/* Spotless */}
              <div className="ml-4 mr-6">
                <div className="flex justify-center text-3xl">
                  <img src="/assets/spotless.svg" alt="Easy Icon" className="h-30" ></img>
                </div>

                <div className="flex justify-center text-3xl mt-4 text-sky-700 font-bold">
                    Spotless
                </div>
                    
                <div className="flex justify-center text-lg text-center mt-4 font-bold">
                    We understand the importance of hygiene. Feel the  comfort of wearing a sanitized, <br/>
                    softened, and scented cloth while its been washed nice and well.
                </div>
              </div>

            </div>
          </div>
        </div>
      < Footer/> 
    </div>
  );
}
export default AboutUs;