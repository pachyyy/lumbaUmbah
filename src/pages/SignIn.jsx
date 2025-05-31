import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { GoLock } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/AuthProvider";

function SignIn() {
    const defaultValues = {
        "email": "",
        "password": "",
    }

    const auth = useAuth()
    const [input, setInput] = useState(defaultValues)
    const [showPwd, setShowPwd] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        auth.userLogin(input)
    }

    return(
        <div className="bg-[#EFF9FF] min-h-screen">
            <NavBar />
                <div className="flex items-center justify-center h-screen w-full py-32 px-4">
                    <div className="bg-sky-100 rounded-4xl w-full h-full mx-auto justify-center max-w-[45%]">
                        <form onSubmit={handleSubmit} className="grid grid-rows-3 gap-5">
                            {/* Title */}
                            <div className="mx-auto flex items-center">
                                <h1 className="text-sky-700 font-rubik font-bold text-5xl">Welcome back! 👋</h1>
                            </div>

                            {/* Username */}
                            <div className="flex bg-white mx-auto py-4 px-5 w-full max-w-[90%] gap-5 items-center rounded-full">
                                <FiUser className="w-15 h-15 text-sky-700" />
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    placeholder="example@emai.com" 
                                    className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-2xl" 
                                    aria-describedby="email"
                                    aria-invalid="false"
                                    onChange={handleChange}
                                    required
                                />
                                <div id="email" className="sr-only">
                                    Please enter a valid email address
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex bg-white mx-auto py-4 px-5 w-full max-w-[90%] gap-5 items-center rounded-full">
                                <GoLock className="w-15 h-15 text-sky-700" />
                                <div className="relative w-full">
                                    <input 
                                        type={showPwd ? 'text' : 'password'} 
                                        id="password"
                                        name="password" 
                                        placeholder="your password"
                                        className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-2xl" 
                                        aria-describedby="password"
                                        aria-invalid="false"
                                        onChange={handleChange}    
                                        required
                                    />
                                    <div id="password" className="sr-only">
                                        Password must be at least 6 characters
                                    </div>
                                    <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute cursor-pointer right-8 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                                        {showPwd ? <EyeClosed /> : <Eye />}
                                    </button>
                                </div>
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
                            <button type="submit" className="max-w-[90%] flex items-center justify-center bg-sky-700 mx-auto rounded-full py-4 w-full text-white font-rubik font-semibold text-3xl cursor-pointer hover:bg-sky-400 transition-ease-in-out duration-300">Sign In</button>

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

                        </form>

                    </div>
                </div>
            <Footer/>
        </div>
    );

}

export default SignIn;