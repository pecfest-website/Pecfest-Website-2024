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
        <div className="relative w-full h-screen">
            <NavBar />
            <div className="flex flex-col justify-center items-center backdrop-blur-sm">
                {/* Blue Div */}
                <div className="absolute flex justify-center items-center z-10 h-[348.75px] w-[1302.126px] backdrop-blur-sm bg-black/40 top-[170px] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                </div>
                {/* Yellow Div */}
                <div className="backdrop-blur-sm bg-black/40 absolute z-10 top-[132px] h-[40px] w-[800px] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4">
                </div>
                <div className="backdrop-blur-sm bg-black/30 absolute z-20 top-[198px] h-[290px] w-[800px] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
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
                            className="w-[400px] h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-600 z-30"
                        />
                    </div>
                    <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
                        <input
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder="Enter your password"
                            className="w-[400px] h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-600 z-30"
                        />
                    </div>
                    <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
                        <button
                            className="w-[200px] h-[30px] hover:scale-110 text-gray-600 bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent z-30 items-center"
                            onClick={() => handleLogin()}
                        >Login</button>
                    </div>
                    <div className="text-gray-200 px-[60px] tracking-wide text-lg font-thin pt-4 w-full flex items-center justify-center">
                        New to PECFEST?  <div className="pl-1 hover:underline" onClick={()=>navigate("/signup")}>Create Account</div>
                    </div>
                    
                </div>
                {/* Pink Div */}
                <div className="absolute z-10 top-[198px] h-[290px] w-[880px] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-4">
                </div>
                {/* Pink Circles */}
                <div className="absolute z-20">
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '250px', right: '480px', position: 'absolute' }} />
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '315px', right: '480px', position: 'absolute' }} />
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '380px', right: '480px', position: 'absolute' }} />
                </div>
                {/* Yellow Circles */}
                <div className="absolute z-20">
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '250px', right: '540px', position: 'absolute' }} />
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '315px', right: '540px', position: 'absolute' }} />
                    <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '380px', right: '540px', position: 'absolute' }} />
                </div>
                {/* Large Yellow Circle */}
                <div className="absolute z-20 right-[155px] top-[275px] h-[150px] w-[150px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"></div>
            </div>
        </div>
        </>
    );
};