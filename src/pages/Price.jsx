import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { LuWashingMachine } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";



function Price(){
  return(
    <div className="bg-[#EFF9FF] leading-normal tracking-normal z-30 top-0 w-screen h-screen">
      <NavBar/>
        <div className="flex flex-col justify-center min-h-screen gap-5 items-center">

          {/* Title Section */}
          <div className="mx-auto flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-sky-700">
              Services & Price
            </h1>
          </div>
          

          {/* Card Price Section */}
          <div className="flex flex-row gap-5 items-center justify-center">

            {/* Regular Card */}
            <div className="bg-white w-[421px] h-[512px] rounded-4xl drop-shadow-xl/30">
              {/* Title & Logo*/}
              <div className="flex gap-4 px-5 py-4 ">
                <div classname="">
                  <LuWashingMachine className="w-10 h-10" />
                </div>

                <div className="flex items-center">
                  <h1 className="text-4xl font-bold text-sky-700 font-rubik">
                    Regular Service
                  </h1>
                </div>
              </div>
              
              <div className="flex gap-4 px-3">
                 {/* Empty Space */}
                <div className="w-10 h-10 bg-inherit">

                </div>

                {/* Subtitle */}
                <div className="text-gray-500 font-rubik -mt-3">
                  <p classname="text-xs">Best for regular needs</p>
                </div>
              </div>

              {/* Card Title*/}
              <div className="text-gray-500 flex justify-center mx-auto px-3 -mt-5">
                <h1 className="font-jakarta text-3xl font-semibold">What's Included?</h1>
              </div>

              
              {/* Content */}
              <div className="flex flex-col px-15 gap-8 py-7 mx-auto">
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Up to 10kg per load*</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Free pickup & delivery</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">3 Days services</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Ironing Included</p>
                  </div>
              </div>

              {/* Dotted Horizontal Line */}
              <div className="py-5">
                <hr class="h-px border-1 border-gray-400 max-w-[90%] mx-auto border-dashed"></hr>
              </div>

              {/* Price Section */}
              <div className="flex flex-col px-8 justify-center gap-2">
                <p className="font-rubik font-semibold text-4xl">Rp. 5.000 per kg</p>
                <p className="text-xs font-rubik text-gray-400">*Minimum load of 5kg</p>
              </div>
              
            </div>

            {/* Ultimate Card */}
            <div className="bg-sky-200 w-[421px] h-[512px] rounded-4xl drop-shadow-xl/30">
              {/* Title & Logo*/}
              <div className="flex gap-4 px-5 py-4 ">
                <div classname="">
                  <LuWashingMachine className="w-10 h-10" />
                </div>

                <div className="flex items-center">
                  <h1 className="text-4xl font-bold text-sky-700 font-rubik">
                    Ultimate Service
                  </h1>
                </div>
              </div>
              
              <div className="flex gap-4 px-3">
                 {/* Empty Space */}
                <div className="w-10 h-10 bg-inherit">

                </div>

                {/* Subtitle */}
                <div className="text-gray-500 font-rubik -mt-3">
                  <p classname="text-xs">Best for Ultimate needs</p>
                </div>
              </div>

              {/* Card Title*/}
              <div className="text-gray-500 flex justify-center mx-auto px-3 -mt-5">
                <h1 className="font-jakarta text-3xl font-semibold">What's Included?</h1>
              </div>

              
              {/* Content */}
              <div className="flex flex-col px-12 gap-8 py-7 mx-auto">
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Up to 10kg per load*</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Free pickup & delivery</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">1 Days services</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Ironing & Softener Included</p>
                  </div>
              </div>

              {/* Dotted Horizontal Line */}
              <div className="py-5">
                <hr class="h-px border-1 border-gray-400 max-w-[90%] mx-auto border-dashed"></hr>
              </div>

              {/* Price Section */}
              <div className="flex flex-col px-8 justify-center gap-2">
                <p className="font-rubik font-semibold text-4xl">Rp. 9.000 per kg</p>
                <p className="text-xs font-rubik text-gray-400">*Minimum load of 5kg</p>
              </div>
            </div>

            {/* Medium Card */}
            <div className="bg-white w-[421px] h-[512px] rounded-4xl drop-shadow-xl/30">
              {/* Title & Logo*/}
              <div className="flex gap-4 px-5 py-4 ">
                <div classname="">
                  <LuWashingMachine className="w-10 h-10" />
                </div>

                <div className="flex items-center">
                  <h1 className="text-4xl font-bold text-sky-700 font-rubik">
                    Medium Service
                  </h1>
                </div>
              </div>
              
              <div className="flex gap-4 px-3">
                 {/* Empty Space */}
                <div className="w-10 h-10 bg-inherit">

                </div>

                {/* Subtitle */}
                <div className="text-gray-500 font-rubik -mt-3">
                  <p classname="text-xs">Best for fast needs</p>
                </div>
              </div>

              {/* Card Title*/}
              <div className="text-gray-500 flex justify-center mx-auto px-3 -mt-5">
                <h1 className="font-jakarta text-3xl font-semibold">What's Included?</h1>
              </div>

              
              {/* Content */}
              <div className="flex flex-col px-12 gap-8 py-7 mx-auto">
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Up to 10kg per load*</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Free pickup & delivery</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">2 Days services</p>
                  </div>
                  <div className="flex justify-left items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <p className="px-2 font-jakarta text-xl font-semibold">Ironing & Softener Included</p>
                  </div>
              </div>

              {/* Dotted Horizontal Line */}
              <div className="py-5">
                <hr class="h-px border-1 border-gray-400 max-w-[90%] mx-auto border-dashed"></hr>
              </div>

              {/* Price Section */}
              <div className="flex flex-col px-8 justify-center gap-2">
                <p className="font-rubik font-semibold text-4xl">Rp. 7.000 per kg</p>
                <p className="text-xs font-rubik text-gray-400">*Minimum load of 5kg</p>
              </div>

            </div>
          </div>
          <Footer/>
        </div>
    </div>
  )


}

export default Price;