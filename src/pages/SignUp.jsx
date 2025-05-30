import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';

function SignUp() {

    const seePassword = () => {

    }

    return(
        <div className="bg-[#EFF9FF] min-h-screen">
            <NavBar />

        <div className="flex items-center justify-center h-screen w-full py-32">
            <div className="grid grid-cols-3 gap-4 max-w-[95%] w-full h-full mx-auto justify-center">

                {/* Left Section */}
                <div className="flex gap-5 flex-col">
                    <div className="flex flex-col flex-grow">
                        {/* Title */}
                        <div className="w-full py-5">
                            <h1 className="text-sky-700 font-rubik font-bold text-6xl">Hi there! 👋</h1>
                        </div>

                        <div className="">
                            <h1 className="text-sky-700 font-rubik font-bold text-4xl py-5">We want to know more about you</h1>
                        </div>

                        {/* This spacer will push the last div to the bottom */}
                        <div className="flex-grow"></div>

                        <div className="">
                            <h1 className="text-sky-700 font-rubik font-bold text-2xl py-5">Chill out! We're not going to misuse your data 😉</h1>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-span-2 bg-sky-100 rounded-4xl">
                    <div className="grid grid-row-6 grid-cols-2 py-4 px-8 gap-5">
                        <div className="">
                            <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">First Name</p>
                            <input type="text" placeholder="Enter your first name" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                        </div>

                        <div className="">
                            <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Last Name</p>
                            <input type="text" placeholder="Enter your last name" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                        </div>

                        <div className="col-span-2">
                            <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Email</p>
                            <input type="email" placeholder="Enter your email" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                        </div>

                        <div className="">
                            <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Phone number</p>
                            <input type="number" placeholder="Enter your phone number" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                        </div>

                        <div className="">
                            <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Username</p>
                            <input type="text" placeholder="Enter your username" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                        </div>

                        <div className="col-span-2">
                            <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Password</p>
                            <input type="password" placeholder="Enter your password" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                        </div>

                        <div className="col-span-2">
                            <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Repeat Password</p>
                            <input type="password" placeholder="Repeat your password" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                            <p></p>
                        </div>

                        <div className="flex items-center bg-sky-700 mx-auto rounded-full py-2 px-35 text-white font-rubik font-semibold text-2xl cursor-pointer hover:bg-sky-400 transition-ease-in-out duration-300">
                            <button className=" "><Link to="/">Sign Up</Link></button>
                        </div>

                        <div>
                            <div className="flex items-center justify-center gap-5 max-w-[90%] mx-auto text-sky-700 font-rubik font-semibold text-2xl bg-white py-2 px-5 rounded-full cursor-pointer hover:bg-sky-300 hover:text-white transition-ease-in-out duration-300">
                                <p>Sign Up With Google</p>
                                <FcGoogle className="w-10 h-10" />
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>


                </div>

            </div>
        </div>

            <Footer />
        </div>
    );

}

export default SignUp;