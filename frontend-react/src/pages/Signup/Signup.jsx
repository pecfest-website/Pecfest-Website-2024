import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import Navbar from "../../components/NavBar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
    
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
            if (response.data.statusCode===200) {
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
        <div className="relative w-full h-screen overflow-hidden">
            <VideoBackground url = {BACKGROUNDS.Signup} />
            <ToastContainer />
            <Navbar />
            <div className="relative flex flex-col justify-center items-center h-full backdrop-blur-sm z-10 overflow-hidden">
                {/* First larger Yellow Div */}
                <div className="absolute top-[13vh] w-[70vw] md:w-[60%] lg:w-[60%] h-[63vh] bg-black/40 border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"></div>
                {/* Second Yellow Div */}
                <div className="absolute top-[5vh] w-[70%] md:w-[60%] lg:w-[60%] h-[39px] bg-black/40 border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"></div>
                {/* Blue Div */}
                <div className="absolute top-[9.5vh] flex justify-center items-center h-[70%] w-[90%] md:w-[90%] lg:w-[90%] bg-black/40 border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                    {/* Login Form */}
                    <div className="relative z-20 w-[80%] flex flex-col items-center top-0">
                        <div className="text-[#FBFF00] text-[36px] md:text-[42px] lg:text-[36px] font-normal leading-none shadow-sm translate-y-[-18px]">
                            SIGNUP
                        </div>
                        <div className="w-full max-w-[400px] mt-3 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => handleChange(e, 'name')}
                                value={input.name}
                                placeholder="Enter your name"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        
                        <div className="w-full max-w-[400px] mt-3 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => handleChange(e, 'username')}
                                value={input.username}
                                placeholder="Enter your username"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-3 translate-y-[-20px]">
                            <input
                                type="email"
                                onChange={(e) => handleChange(e, 'email')}
                                value={input.email}
                                placeholder="Enter your email"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div> 
                        <div className="w-full max-w-[400px] mt-3 translate-y-[-20px]">
                            <input
                                type="password"
                                onChange={(e) => handleChange(e, 'password')}
                                value={input.password}
                                placeholder="Enter your password"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-3 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => handleChange(e, 'college')}
                                value={input.college}
                                placeholder="Enter your college name"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-3 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => handleChange(e, 'sid')}
                                value={input.sid}
                                placeholder="Enter your student id"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-3 translate-y-[-20px]">
                            <input
                                type="number"
                                onChange={(e) => handleChange(e, 'contact')}
                                placeholder="Enter your contact number"
                                value={input.contact}
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                         
                        <div className="mt-0 mb-0">
                            <button
                                className="w-[200px] h-[40px] hover:scale-110 text-gray-600 bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onClick={() => handleSubmit()}
                            >
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
                {/* Pink Rectangle */}
                <div className="absolute z-10 top-[12.5vh] w-[70%] md:w-[60%] lg:w-[65%] h-[64%] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] bg-transparent"></div>
                {/* Small Pink Circles */}
                <div className="absolute z-20 top-[20%] left-[11%] h-[60%] hidden xl:block">
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '20%', right: '35%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '37.5%', right: '35%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '55%', right: '35%', position: 'absolute' }}
                    />
                </div>
                {/* Small Yellow Circles */}
                <div className="absolute z-20 top-[20%] left-[15%] h-[60%] hidden xl:block">
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '20%', right: '32%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '37.5%', right: '32%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '55%', right: '32%', position: 'absolute' }}
                    />
                </div>
                {/* Large Yellow Circle */}
                <div className="hidden xl:block absolute z-20 right-[6.5%] top-[35%] h-[140px] w-[140px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] "></div>
            </div>
        </div>
    );
};