import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    // useEffect(()=>{
    //     console.log(username," ",password);
    // },[username,password])
    return (
        <div className="relative w-full h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/back.mp4" type="video/mp4" />
            </video>
            <div className="w-full bg-black relative z-10 h-[70px] border-dashed border-y-4 border-white flex justify-center items-center space-x-4">
                <div className="text-yellow-400 text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                    Deep dive into PECFEST
                </div>
            </div>
            <div className="flex flex-col justify-center items-center backdrop-blur-sm">
                {/* Blue Div */}
                <div className="absolute flex justify-center items-center z-10 h-[348.75px] w-[1302.126px] backdrop-blur-sm bg-black/40 top-[170px] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">

                </div>

                {/* Yellow Div */}
                <div className="backdrop-blur-sm bg-black/40 absolute z-10 top-[132px] h-[40px] w-[800px] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4">

                </div>


                <div className="backdrop-blur-sm bg-black/30 absolute z-20 top-[198px] h-[290px] w-[800px] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
                    <div className="text-[#FBFF00] text-justify text-[52px] font-normal leading-none shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-serif">
                        LOGIN
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
                        >Login</button>
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
    );
};
