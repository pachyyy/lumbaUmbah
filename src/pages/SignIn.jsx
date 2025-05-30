import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { GoLock } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';


function SignIn() {

    return(
        <div className="bg-[#EFF9FF] min-h-screen">
            <NavBar />
                <div className="flex items-center justify-center h-screen w-full py-32 px-4">
                    <div className="bg-sky-100 rounded-4xl w-full h-full mx-auto justify-center max-w-[45%]">
                        <div className="grid grid-rows-3 gap-5">
                            {/* Title */}
                            <div className="mx-auto flex items-center">
                                <h1 className="text-sky-700 font-rubik font-bold text-5xl">Welcome back! 👋</h1>
                            </div>

                            {/* Username */}
                            <div className="flex bg-white mx-auto py-4 px-5 w-full max-w-[90%] gap-5 items-center rounded-full">
                                <FiUser className="w-15 h-15 text-sky-700" />
                                <input type="text" placeholder="Username" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-2xl" />
                            </div>

                            {/* Password */}
                            <div className="flex bg-white mx-auto py-4 px-5 w-full max-w-[90%] gap-5 items-center rounded-full">
                                <GoLock className="w-15 h-15 text-sky-700" />
                                <input type="password" placeholder="Password" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-2xl" />
                            </div>

                            {/* Remember Me & Forgot Password*/}
                            <div className="flex items-center px-15">
                                <div className="flex items-center">
                                    <input type="checkbox" className="w-5 h-5 text-sky-700 rounded-lg border-none" />
                                    <label className="ml-2 font-jakarta font-semibold text-xl text-gray-500">Remember Me</label>
                                </div>

                                {/* Empty Space */}
                                <div className="flex-grow">

                                </div>
                                <div className="cursor-pointer">
                                    <p className="font-jakarta text-sky-700 font-semibold text-xl"><a href="#">Forgot Password?</a></p>
                                </div>
                            </div>

                            {/* Sign In Button */}
                            <div className="max-w-[90%] w-full mx-auto">
                                <button className="flex items-center justify-center bg-sky-700 mx-auto rounded-full py-4 w-full text-white font-rubik font-semibold text-3xl cursor-pointer hover:bg-sky-400 transition-ease-in-out duration-300">Sign In</button>
                            </div>

                            {/* Sign In Button with Google*/}
                            <div className="max-w-[90%] w-full mx-auto">
                                <div className="flex items-center justify-center gap-5 mx-auto text-sky-700 font-rubik font-semibold text-3xl bg-white py-4 rounded-full cursor-pointer hover:bg-sky-300 hover:text-white transition-ease-in-out duration-300">
                                    <p>Sign In With Google</p>
                                    <FcGoogle className="w-10 h-10" />
                                </div>
                            </div>

                            {/* Create account link */}
                            <div className="px-10">
                                <p className="font-jakarta text-gray-400 font-bold">Don't have an account? <span className="text-sky-700 hover:text-sky-400 transition-ease-in-out duration-300"><Link to={"/signup"}>Create a new one!</Link></span></p>
                            </div>

                        </div>

                    </div>
                </div>
            <Footer/>
        </div>
    );

}

export default SignIn;