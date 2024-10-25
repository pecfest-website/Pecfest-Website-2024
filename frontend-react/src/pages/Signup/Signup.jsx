import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import Navbar from "../../components/NavBar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";

import circles from '../../utils/svgs/circles.svg';
import plus from '../../utils/svgs/plus.svg';
import star from '../../utils/svgs/star.svg';
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
export const Signup = ({ isJamming, setIsJamming }) => {

    const initialState = {
        name: "",
        username: "",
        email: "",
        password: "",
        college: "",
        sid: "",
        contact: ""
    }

    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e, key) => {
        const val = e.target.value;
        setInput(prev => ({
            ...prev,
            [key]: val
        }));
    }

    useEffect(()=>{
        if (localStorage.getItem("token")){
            navigate("/profile");
        }
    })

    const showToastAndWait = (message) => {
        return new Promise((resolve) => {
            // Show the toast with the error message
            const toastId = toast.success(message, {
                position: 'top-right', // You can change the position
                autoClose: 3000, // Toast disappears after 5 seconds
                hideProgressBar: false, // Show or hide the progress bar
                closeOnClick: true, // Close the toast when clicked
                pauseOnHover: true, // Pause toast dismissal when hovered
                draggable: true, // Allow dragging the toast to dismiss it
                progress: undefined, // Progress bar visibility
                onClose: () => resolve(), // Resolve the promise when the toast is closed
            });
        });
    };

    const handleSubmit = async () => {
        console.log(input);
        try {
            const response = await axios.post("https://api.pecfest.org/user/create", input);
            console.log(response);
            if (response.data.statusCode === 200) {
                const data = response.data.data;
                localStorage.setItem("token", response.data.data.token);
                await showToastAndWait('User successfully created... Redirecting to homepage');
                navigate("/");
            } else {
                toast.error(`${response.data.message}`, {
                    position: 'top-right', // You can change the position
                    autoClose: 5000, // Toast disappears after 5 seconds
                    hideProgressBar: false, // Show or hide the progress bar
                    closeOnClick: true, // Close the toast when clicked
                    pauseOnHover: true, // Pause toast dismissal when hovered
                    draggable: true, // Allow dragging the toast to dismiss it
                    progress: undefined, // Progress bar visibility
                });
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.", {
                position: 'top-right', // You can change the position
                autoClose: 5000, // Toast disappears after 5 seconds
                hideProgressBar: false, // Show or hide the progress bar
                closeOnClick: true, // Close the toast when clicked
                pauseOnHover: true, // Pause toast dismissal when hovered
                draggable: true, // Allow dragging the toast to dismiss it
                progress: undefined, // Progress bar visibility
            });
        }
    }

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <VideoBackground url={BACKGROUNDS.Signup} />
                <ToastContainer />
                <Navbar />
                
            <div className="fixed w-full h-screen overflow-hidden">
            <div className="flex flex-col justify-center items-center backdrop-blur-sm">
               
                <div className="absolute flex justify-center items-center z-10 h-[60vh] w-[85vw] backdrop-blur-sm bg-black/40 top-[15vh] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                </div>
                <div className=" backdrop-blur-sm bg-black/40 absolute z-10 top-[7vh] h-[8vh]  w-[62vw] lg:w-[52vw] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]  flex flex-col items-center justify-center">
                    <div className="text-[rgb(251,255,0)] text-justify text-[32px] md:text-[40px] lg:text-[52px] font-normal leading-none ">
                        <p style={{ fontFamily: 'Cyber Chunk Font' }}>SIGN UP</p>
                    </div>
                </div>
                <div className=" backdrop-blur-sm bg-black/30 absolute z-20 top-[20.5vh] h-[49vh]  w-[62vw] lg:w-[52vw] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] flex flex-col items-center">
                    <div className="hidden xl:block" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: "40" }}>
                        <img style={{ width: 150, height: 30, left: 20, top: 10, position: 'absolute' }} src={circles} />
                    </div>
                    <div className="hidden xl:block" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: "40" }}>
                        <img style={{ width: 150, height: 60, left: -20, bottom: 40, position: 'absolute' }} src={star} />
                    </div>
                    <div className="hidden xl:block" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: "40" }}>
                        <img style={{ width: 150, height: 30, right: 20, bottom: 50, position: 'absolute' }} src={circles} />
                    </div>
                    <div className="hidden xl:block" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: "40" }}>
                        <img style={{ width: 150, height: 60, right: -20, top: 10, position: 'absolute' }} src={star} />
                    </div>
                    <div className="overflow-scroll z-50 w-[80%] flex flex-col items-center ">
                            
                            <div className="w-full max-w-[400px] mt-[4vh] translate-y-[-20px]">
                                <input
                                    type="text"
                                    onChange={(e) => handleChange(e, 'name')}
                                    value={input.name}
                                    placeholder="Enter your name"
                                    className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                                />
                            </div>

                            <div className="w-full max-w-[400px] mt-2 translate-y-[-20px]">
                                <input
                                    type="text"
                                    onChange={(e) => handleChange(e, 'username')}
                                    value={input.username}
                                    placeholder="Enter your username"
                                    className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                                />
                            </div>
                            <div className="w-full max-w-[400px] mt-2 translate-y-[-20px]">
                                <input
                                    type="email"
                                    onChange={(e) => handleChange(e, 'email')}
                                    value={input.email}
                                    placeholder="Enter your email"
                                    className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                                />
                            </div>
                            <div className="w-full max-w-[400px] mt-2 translate-y-[-20px]">
                                <input
                                    type="password"
                                    onChange={(e) => handleChange(e, 'password')}
                                    value={input.password}
                                    placeholder="Enter your password"
                                    className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                                />
                            </div>
                            <div className="w-full max-w-[400px] mt-2 translate-y-[-20px]">
                                <input
                                    type="text"
                                    onChange={(e) => handleChange(e, 'college')}
                                    value={input.college}
                                    placeholder="Enter your college name"
                                    className="w-full h-[28px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                                />
                            </div>
                            <div className="w-full max-w-[400px] mt-2 translate-y-[-20px]">
                                <input
                                    type="text"
                                    onChange={(e) => handleChange(e, 'sid')}
                                    value={input.sid}
                                    placeholder="Enter your student id"
                                    className="w-full h-[28px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                                />
                            </div>
                            <div className="w-full max-w-[400px] mt-2 translate-y-[-20px]">
                                <input
                                    type="number"
                                    onChange={(e) => handleChange(e, 'contact')}
                                    placeholder="Enter your contact number"
                                    value={input.contact}
                                    className="w-full h-[28px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                                />
                            </div>

                            <div className="mt-0 mb-0">
                                
                                <div className="text-gray-200 px-[60px] tracking-wide text-lg">
                                <p
                                   className="cursor-pointer w-[18vw] h-[4vh] mb-2 text-center hover:scale-110 hover:bg-gray-600 hover:text-gray-400 text-gray-600 bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent z-30 items-center transition-all duration-300 ease-in-out"
                                   onClick={() => handleSubmit()}
                                   
                                >Signup</p>
                            </div>
                            </div>
                        </div>

                </div>
                <div className="absolute z-10 top-[20vh] h-[50vh] w-[70vw] lg:w-[58vw] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-2">

                    </div>
                <div className="absolute z-20 hidden xl:block">
                    <div className="h-[5vh] w-[5vh] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '32vh', right: '32vw', position: 'absolute' }} />
                    <div className="h-[5vh] w-[5vh] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '43vh', right: '32vw', position: 'absolute' }} />
                    <div className="h-[5vh] w-[5vh] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '54vh', right: '32vw', position: 'absolute' }} />
                </div>
                <div className="absolute z-20 hidden xl:block">
                    <div className="h-[5vh] w-[5vh] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '32vh', right: '36vw', position: 'absolute' }} />
                    <div className="h-[5vh] w-[5vh] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '43vh', right: '36vw', position: 'absolute' }} />
                    <div className="h-[5vh] w-[5vh] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '54vh', right: '36vw', position: 'absolute' }} />
                </div>
                <div className="absolute z-20 right-[10vw] top-[35vh] h-[10vw] w-[10vw] rounded-full hidden xl:block">
                    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                        <img style={{ width: 200, height: 160, left: 0, top: 10, position: 'absolute' }} src={plus} />
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    zIndex: 1,
                    left: 0,
                    bottom: 0,
                    cursor: "pointer",
                }}
                onClick={() => setIsJamming((prev) => !prev)}
            >
                {isJamming ? (
                    <Lottie
                        options={defaultOptions}
                        height={200}
                        width={200}
                    // Wrap in an arrow function
                    />
                ) : (
                    <h2
                        style={{
                            color: "#fbff00",
                            position: "absolute",
                            bottom: "50px",
                            left: "50px",
                            fontFamily: "Cyber Chunk Font",
                            fontSize: "1.2rem",
                        }}
                    // Wrap in an arrow function
                    >
                    </h2>
                )}
            </div>
        </>
    );
};