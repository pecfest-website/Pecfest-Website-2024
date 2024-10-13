import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/back.mp4" type="video/mp4" />
            </video>

            {/* Navbar */}
            <div className="w-full bg-black relative z-10 h-[70px] md:h-[9%] border-dashed border-y-4 border-white flex justify-center items-center">
                <div className="text-yellow-400 text-lg font-semibold">Deep dive into PECFEST</div>
            </div>

            {/* Main Section */}
            <div className="relative flex flex-col justify-center items-center h-full backdrop-blur-sm z-10 overflow-hidden">
                {/* First larger Yellow Div */}
                <div className="absolute top-[18%] w-[80%] md:w-[60%] lg:w-[60%] h-[64%] bg-black/40 border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"></div>

                {/* Second Yellow Div */}
                <div className="absolute top-[9.5%] w-[80%] md:w-[60%] lg:w-[60%] h-[40px] bg-black/40 border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"></div>

                {/* Blue Div */}
                <div className="relative flex justify-center items-center h-[70%] w-[90%] md:w-[90%] lg:w-[90%] bg-black/40 border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                    {/* Login Form */}
                    <div className="relative z-20 w-full flex flex-col items-center top-0">
                        <div className="text-[#FBFF00] text-[36px] md:text-[42px] lg:text-[36px] font-normal leading-none shadow-sm translate-y-[-18px]">
                            SIGNUP
                        </div>
                        <div className="w-full max-w-[400px] mt-4 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-4 translate-y-[-20px]">
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-4 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Empty 1"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-4 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Empty 2"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-4 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Empty 3"
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-4 translate-y-[-20px]">
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Empty 4 "
                                className="w-full h-[30px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>  
                        <div className="mt-4">
                            <button
                                className="w-[200px] h-[40px] hover:scale-110 text-gray-600 bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onClick={async () => {
                                    try {
                                        const response = await axios.post("backendLink", {
                                            username,
                                            password,
                                        });

                                        if (response.data.success) {
                                            const data = response.data.data;
                                            localStorage.setItem("token", data.token);
                                            navigate("/dashboard");
                                        } else {
                                            alert("Invalid credentials. Please try again.");
                                        }
                                    } catch (error) {
                                        console.error("Login failed:", error);
                                        alert("An error occurred. Please try again later.");
                                    }
                                }}
                            >
                                Signup
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pink Rectangle */}
                <div className="absolute z-10 top-[18%] w-[60%] md:w-[60%] lg:w-[65%] h-[64%] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] bg-transparent"></div>

                {/* Small Pink Circles */}
                <div className="absolute z-20 top-[20%] left-[11%] h-[60%]">
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '32%', right: '35%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '47%', right: '35%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '62%', right: '35%', position: 'absolute' }}
                    />
                </div>

                {/* Small Yellow Circles */}
                <div className="absolute z-20 top-[20%] left-[15%] h-[60%]">
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '32%', right: '32%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '47%', right: '32%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '62%', right: '32%', position: 'absolute' }}
                    />
                </div>

                {/* Large Yellow Circle */}
                <div className="absolute z-20 right-[6.5%] top-[40%] md:top-[38%] h-[150px] w-[150px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] "></div>
            </div>
        </div>
    );
};
