import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from "../../components/NavBar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import circles from '../../utils/svgs/circles.svg';
import plus from '../../utils/svgs/plus.svg';
import star from '../../utils/svgs/star.svg';

import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
export const Login = ({ isJamming, setIsJamming }) => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            console.log(username);
            console.log(password);
            const response = await axios.post("https://api.pecfest.org/user/login", {
                username,
                password,
            });
            console.log(response);
            if (response.data.statusCode === 200) {
                localStorage.setItem("token", response.data.data.token);
                navigate(-1);
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
            console.error("Login failed:", error);
            toast.error("An error occurred. Please try again later.", {
                position: 'top-right', // You can change the position
                autoClose: 5000, // Toast disappears after 5 seconds
                hideProgressBar: false, // Show or hide the progress bar
                closeOnClick: true, // Close the toast when clicked
                pauseOnHover: true, // Pause toast dismissal when hovered
                draggable: true, // Allow dragging the toast to dismiss it
                progress: undefined, // Progress bar visibility
            });
            // alert();  
        }
    };
    return (
        <>
            <VideoBackground url={BACKGROUNDS.Login} />
            <ToastContainer />
            <NavBar />
            <div className="fixed w-full h-screen overflow-hidden">
                <div className="flex flex-col justify-center items-center backdrop-blur-sm">

                    <div className="absolute flex justify-center items-center z-10 h-[60vh] w-[85vw] backdrop-blur-sm bg-black/40 top-[15vh] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                    </div>
                    <div className=" backdrop-blur-sm bg-black/40 absolute z-10 top-[7vh] h-[8vh] w-[52vw] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]  flex flex-col items-center justify-center">
                        <div className="text-[rgb(251,255,0)] text-justify text-[32px] md:text-[40px] lg:text-[52px] font-normal leading-none ">
                            <p style={{ fontFamily: 'Cyber Chunk Font' }}>LOGIN</p>
                        </div>
                    </div>
                    <div className=" backdrop-blur-sm bg-black/30 absolute z-20 top-[20.5vh] h-[49vh] w-[52vw] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
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
                        <div className="overflow-auto w-full p-1 flex flex-col items-center relative h-[25000vh] top-[0vh] z-50 ">
                            <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-[12vh]">
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        setusername(e.target.value);
                                    }}
                                    placeholder="Enter your username"
                                    className="w-[30vw] h-[4vh] p-4 text-black text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-600 z-30"
                                />
                            </div>
                            <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
                                <input
                                    type="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    placeholder="Enter your password"
                                    className="w-[30vw] h-[4vh] p-4 text-black text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-600 z-30"
                                />
                            </div>
                            <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
                                <button
                                    className="w-[18vw] h-[4vh] hover:scale-110 text-gray-600 bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent z-30 items-center"
                                    onClick={() => handleLogin()}
                                >Login</button>
                            </div>
                            <div className="text-gray-200 tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-thin pt-4 w-full flex flex-wrap items-center justify-center">
                                New to PECFEST?  <div className="pl-1 hover:underline" onClick={() => navigate("/signup")}>Create Account</div>
                            </div>

                        </div>

                    </div>
                    <div className="absolute z-10 top-[20vh] h-[50vh] w-[58vw] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-2">

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


            {/* <div className="relative w-full h-screen overflow-hidden">
                <NavBar />
                <div className="flex flex-col justify-center items-center backdrop-blur-sm">

                    <div className="absolute flex justify-center items-center z-10 h-[44vh] w-[85vw] backdrop-blur-sm bg-black/40 top-[170px] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                    </div>

                    <div className=" backdrop-blur-sm bg-black/40 absolute z-10 top-[17vh] h-[5vh] w-[52vw] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4">
                    </div>
                    <div className="backdrop-blur-sm bg-black/30 absolute z-20 top-[25.5vh] h-[40vh] w-[52vw] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
                        <div className="text-[#FBFF00] text-justify text-[52px] font-normal leading-none shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <p style={{ fontFamily: 'Cyber Chunk Font' }}>LOGIN</p>
                        </div>

                        <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
                            <input
                                type="text"
                                onChange={(e) => {
                                    setusername(e.target.value);
                                }}
                                placeholder="Enter your username"
                                className="w-[30vw] h-[4vh] p-4 text-black text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-600 z-30"
                            />
                        </div>
                        <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
                            <input
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Enter your password"
                                className="w-[30vw] h-[4vh] p-4 text-black text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-600 z-30"
                            />
                        </div>
                        <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
                            <button
                                className="w-[18vw] h-[4vh] hover:scale-110 text-gray-600 bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent z-30 items-center"
                                onClick={() => handleLogin()}
                            >Login</button>
                        </div>
                        <div className="text-gray-200 tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-thin pt-4 w-full flex flex-wrap items-center justify-center">
                            New to PECFEST?  <div className="pl-1 hover:underline" onClick={() => navigate("/signup")}>Create Account</div>
                        </div>

                    </div>

                    <div className="absolute z-10 top-[25.5vh] h-[36vh] w-[58vw] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-4">
                    </div>

                    <div className="absolute z-20 hidden xl:block">
                        <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '32vh', right: '32vw', position: 'absolute' }} />
                        <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '41vh', right: '32vw', position: 'absolute' }} />
                        <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '50vh', right: '32vw', position: 'absolute' }} />
                    </div>

                    <div className="absolute z-20 hidden xl:block">
                        <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '32vh', right: '36vw', position: 'absolute' }} />
                        <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '41vh', right: '36vw', position: 'absolute' }} />
                        <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '50vh', right: '36vw', position: 'absolute' }} />
                    </div>

                    <div className="absolute z-20 right-[10vw] top-[35vh] h-[10vw] w-[10vw] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] hidden xl:block"></div>
                </div>
            </div> */}
            <div
                style={{
                    position: "absolute",
                    zIndex: 2,
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