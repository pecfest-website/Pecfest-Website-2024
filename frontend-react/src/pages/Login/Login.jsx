import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from "../../components/NavBar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
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
        <div className="relative w-full h-screen overflow-hidden">
            <NavBar />
            <div className="flex flex-col justify-center items-center backdrop-blur-sm">
                {/* Blue Div */}
                <div className="absolute flex justify-center items-center z-10 h-[44vh] w-[85vw] backdrop-blur-sm bg-black/40 top-[170px] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                </div>
                {/* Yellow Div */}
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
                        New to PECFEST?  <div className="pl-1 hover:underline" onClick={()=>navigate("/signup")}>Create Account</div>
                    </div>
                    
                </div>
                {/* Pink Div */}
                <div className="absolute z-10 top-[25.5vh] h-[36vh] w-[58vw] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-4">
                </div>
                {/* Pink Circles */}
                <div className="absolute z-20 hidden xl:block">
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '32vh', right: '32vw', position: 'absolute' }} />
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '41vh', right: '32vw', position: 'absolute' }} />
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '50vh', right: '32vw', position: 'absolute' }} />
                </div>
                {/* Yellow Circles */}
                <div className="absolute z-20 hidden xl:block">
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '32vh', right: '36vw', position: 'absolute' }} />
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '41vh', right: '36vw', position: 'absolute' }} />
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '50vh', right: '36vw', position: 'absolute' }} />
                </div>
                {/* Large Yellow Circle */}
                <div className="absolute z-20 right-[10vw] top-[35vh] h-[10vw] w-[10vw] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] hidden xl:block"></div>
            </div>
        </div>
        </>
    );
};