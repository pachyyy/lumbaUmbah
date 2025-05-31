import React from "react";

function BookService() {

    return(
        <div className="bg-[#EFF9FF] w-full max-w-[65%] mx-auto">
            <div className="mx-auto">
                <h1 className="text-5xl font-bold text-sky-700">Book A Service</h1>
            </div>

            {/* Booking Form */}
            <div className="bg-sky-100 rounded-4xl">
                <div className="grid grid-rows-6 grid-cols-2 py-4 px-8 gap-4">
                    {/* Name */}
                    <div className="">
                        <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Name</p>
                        <input type="text" placeholder="e.g. Udin Rajagukguk" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                    </div>
                    {/* Username */}
                    <div className="">
                        <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Username</p>
                        <input type="text" placeholder="e.g. uchihaGanteng251" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                    </div>
                    {/* Address */}
                    <div className="col-span-2">
                        <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Pickup Address</p>
                        <input type="text" placeholder="eg. Jalan Konoha 25" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                    </div>
                    {/* Service Type */}
                    <div>
                        <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Laundry Type</p>
                        <select className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-2xl">
                            <option value="">Regular Service</option>
                            <option value="">Medium Service</option>
                            <option value="">Ultimate Service</option>
                        </select>
                    </div>
                    {/* Weight */}
                    <div className="">
                        <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Weight (kg)</p>
                        <input type="number" placeholder="e.g. 6" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                    </div>
                    {/* Notes */}
                    <div className="col-span-2">
                        <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Notes</p>
                        <textarea placeholder="e.g. Gak pake kecap" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"></textarea>
                    </div>

                    <div className="col-span-2">
                        <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Pickup Time</p>
                    </div>
                    {/* Submit Button */}
                    <div className="flex items-center bg-sky-700 mx-auto rounded-full py-2 px-10 text-white font-rubik font-semibold text-xl cursor-pointer hover:bg-sky-400 transition-ease-in-out duration-300">
                        <p>Submit</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BookService;