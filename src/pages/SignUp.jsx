import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';

function SignUp() {

    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordMessageClass, setPasswordMessageClass] = useState('');

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordMatch(newPassword, repeatPassword);
    };

    const handleRepeatPasswordChange = (e) => {
        const newRepeatPassword = e.target.value;
        setRepeatPassword(newRepeatPassword);
        checkPasswordMatch(password, newRepeatPassword);
    };

    const checkPasswordMatch = (pass, repeatPass) => {
        // Don't show message if either field is empty
        if (!pass || !repeatPass) {
            setPasswordMessage('');
            setPasswordMessageClass('');
            return;
        }

        if (pass !== repeatPass) {
            setPasswordMessage('Passwords do not match');
            setPasswordMessageClass('font-rubik px-3 italic text-red-500');
        } else {
            setPasswordMessage('Passwords match');
            setPasswordMessageClass('font-rubik px-3 italic text-green-500');
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        
        if (!password || !repeatPassword) {
            alert('Please fill in all password fields!');
            return;
        }
        
        if (password !== repeatPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Proceed with sign up logic here
        console.log('Passwords match, proceeding with sign up...');
        // You can navigate or call your API here
    };


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
                            <div className="grid grid-row-7 grid-cols-2 py-4 px-8 gap-4">
                                {/* Name */}
                                <div className="">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">First Name</p>
                                    <input type="text" placeholder="Enter your first name" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                                </div>

                                <div className="">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Last Name</p>
                                    <input type="text" placeholder="Enter your last name" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                                </div>

                                {/* Email */}
                                <div className="col-span-2">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Email</p>
                                    <input type="email" placeholder="Enter your email" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                                </div>

                                {/* Phone Number */}
                                <div className="">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Phone number</p>
                                    <input type="number" placeholder="Enter your phone number" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                                </div>

                                {/* Username */}
                                <div className="">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Username</p>
                                    <input type="text" placeholder="Enter your username" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                                </div>

                                {/* Password */}
                                <div className="col-span-2">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Password</p>
                                    <input id="password" type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                                </div>

                                <div className="col-span-2">
                                    <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">Repeat Password</p>
                                    <input id="repeat-password" value={repeatPassword} onChange={handleRepeatPasswordChange} type="password" placeholder="Repeat your password" className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl" />
                                    <p id="password-check" className={passwordMessageClass}>{passwordMessage}</p>
                                </div>

                                {/* Sign Up Button */} 
                                <div className="flex items-center bg-sky-700 mx-auto rounded-full py-2 px-35 text-white font-rubik font-semibold text-2xl cursor-pointer hover:bg-sky-400 transition-ease-in-out duration-300">
                                    <button type="submit"><Link to="/">Sign Up</Link></button>
                                </div>

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
                            </div>
                        </div>
                    </div>
                </div>

            <Footer />
        </div>
    );

}

export default SignUp;