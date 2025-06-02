import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";

function SignUp() {
    const navigate = useNavigate()

    const defaultValues = {
        full_name: '',
        email: '',
        phone_number: '',
        username: '',
        password: '',
    }

    const [formData, setFormData] = useState(defaultValues)
    const [repeatPwd, setRepeatPwd] = useState('')
    const [showPwd, setShowPwd] = useState(false)
    const [showPwdRepeat, setShowPwdRepeat] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleRepeatPasswordChange = (e) => {
        const { value } = e.target;
        setRepeatPwd(value)

        if (value === formData.password) {
            setShowPwdRepeat(false)
        } else {
            setShowPwdRepeat(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== repeatPwd) {
            toast.error("Passwords do not match")
            return
        }

        try {
            const res = await fetch('http://localhost:8000/api/v1/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!res.ok) {
                const error = await res.json()
                switch (res.status) {
                    case 400:
                        toast.error("Invalid data input. Please check your data and try again")
                        break;
                    case 409:
                        toast.error("Email already used")
                        break;
                    default:
                        toast.error(error.message || "Error while registering user")
                        break;
                }
                setFormData(defaultValues)
                return
            }

            toast.success('Success register');
            navigate('/dashboard/user');
        } catch (error) {
            toast.error(error.message)
            setFormData(defaultValues)
        }
    }


    return(
        <div className="bg-[#EFF9FF] min-h-screen">
            <NavBar />

                <div className="flex items-center justify-center h-screen w-full py-32 px-4">
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
                            <form onSubmit={handleSubmit} className="grid grid-row-7 grid-cols-2 py-4 px-8 gap-4">
                                {/* Name */}
                                <div className="col-span-2">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Full Name</p>
                                    <input 
                                        type="text" 
                                        name="full_name" 
                                        value={formData.full_name}
                                        placeholder="Enter your full name" 
                                        className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="col-span-2">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Email</p>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        placeholder="Enter your email" 
                                        className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Phone number</p>
                                    <input 
                                        type="number" 
                                        name="phone_number" 
                                        value={formData.phone_number}
                                        placeholder="Enter your phone number" 
                                        className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" 
                                        onChange={handleChange}    
                                        required
                                    />
                                </div>

                                {/* Username */}
                                <div className="">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Username</p>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        value={formData.username}
                                        placeholder="Enter your username" 
                                        className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="col-span-2">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Password</p>
                                    <div className="relative">
                                        <input  
                                            type={showPwd ? "text" : "password"}
                                            id="password" 
                                            name="password"
                                            value={formData.password}
                                            placeholder="Enter your password" 
                                            className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" 
                                            onChange={handleChange}
                                            required
                                        />
                                        <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute cursor-pointer right-8 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                                            {showPwd ? <EyeClosed /> : <Eye />}
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Repeat Password</p>
                                    <div className="relative">
                                        <input 
                                            value={repeatPwd} 
                                            id="repeat-password" 
                                            onChange={handleRepeatPasswordChange} 
                                             type={showPwdRepeat ? "text" : "password"}
                                            placeholder="Repeat your password" 
                                            className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"     
                                        />
                                        <button type="button" onClick={() => setShowPwdRepeat(!showPwdRepeat)} className="absolute cursor-pointer right-8 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                                            {showPwdRepeat ? <EyeClosed /> : <Eye />}
                                        </button>
                                    </div>
                                    {/* <p id="password-check" className={passwordMessageClass}>{passwordMessage}</p> */}
                                </div>

                                {/* Sign Up Button */} 
                                <button 
                                    type="submit" 
                                    className="flex items-center bg-sky-700 mx-auto rounded-full py-2 px-35 text-white font-rubik font-semibold text-2xl cursor-pointer hover:bg-sky-400 transition-ease-in-out duration-300">
                                    Sign Up
                                </button>

                                <div className="">
                                    <div className="flex items-center justify-center gap-5 max-w-[90%] mx-auto text-sky-700 font-rubik font-semibold text-2xl bg-white py-2 px-5 rounded-full cursor-pointer hover:bg-sky-300 hover:text-white transition-ease-in-out duration-300">
                                        <p>Sign Up With Google</p>
                                        <FcGoogle className="w-10 h-10" />
                                    </div>
                                </div>

                                <div className="-my-4">
                                    <p className="text-gray-500 font-rubik font-semibold text-2xs px-2">
                                        Already have an account? <Link to="/signin"><span className="text-sky-500 hover:text-sky-700 transition-ease-in-out duration-200">Sign In</span></Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            <Footer />
        </div>
    );

}

export default SignUp;