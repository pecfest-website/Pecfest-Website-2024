import React from 'react';
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from '../../components/NavBar/Navbar';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import Lottie from 'react-lottie';
import animationData from "../../utils/Transparent vivbing.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export default function Contact({ isJamming, setIsJamming }) {
    return (
        <>
            <div>
                <NavBar />
                <VideoBackground url={BACKGROUNDS.Contact} />

                <div className="flex items-center justify-center overflow-hidden mt-[10vh]">
                    <div className="flex flex-col items-center overflow-hidden bg-white bg-opacity-10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] text-center">
                        <h1 className=" text-2xl sm:text-3xl font-bold text-white font-serif mb-6 md:mb-8">
                            Contact Us
                        </h1>

                        {/* Phone Section */}
                        <div className="flex flex-col md:flex-row items-start md:items-center text-left mb-4 md:mb-6">
                            <FaPhone className="text-white text-2xl mr-0 md:mr-4 mb-2 md:mb-0" />
                            <div>
                                <h3 className="text-base md:text-lg text-white">Call us directly at</h3>
                                <p className="text-white text-sm">Ayush Kansal: 94637 41383</p>
                                <p className="text-white text-sm">Prranav Babbar: 62846 91173</p>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="flex flex-col md:flex-row items-start md:items-center text-left mb-4 md:mb-6">
                            <FaEnvelope className="text-white text-2xl mr-0 md:mr-4 mb-2 md:mb-0" />
                            <div>
                                <h3 className="text-base md:text-lg text-white">Reach out via email at</h3>
                                <p className="text-white text-sm">convener.pecfest@pec.edu.in</p>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="flex flex-col md:flex-row items-start md:items-center text-left mb-4 md:mb-6">
                            <FaMapMarkerAlt className="text-white text-2xl mr-0 md:mr-4 mb-2 md:mb-0" />
                            <div>
                                <h3 className="text-base md:text-lg text-white">Visit us at</h3>
                                <p className="text-white text-sm">Punjab Engineering College, <br />Sector-12, Chandigarh</p>
                            </div>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <h3 className="text-base md:text-lg text-white mb-4">Follow Us on Social</h3>
                            <div className="flex justify-around">
                                <a href="https://www.instagram.com/pec.pecfest" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.facebook.com/pecfestofficial" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.youtube.com/c/PECFESTOFFICIAL" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.linkedin.com/company/pecfest/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div
                style={{
                    position: "fixed",
                    zIndex: 1,
                    left: 0,
                    bottom: 0,
                    cursor: "pointer",
                }}
                onClick={() => setIsJamming((prev) => !prev)}
            >
                {isJamming ? (
                    <Lottie options={defaultOptions} height={200} width={200} />
                ) : (
                    <h2
                        style={{
                            color: "#fbff00",
                            position: "fixed",
                            bottom: "50px",
                            left: "50px",
                            fontFamily: "Cyber Chunk Font",
                            fontSize: "1.2rem",
                        }}
                    >
                        Jam?
                    </h2>
                )}
            </div>
        </>
    );
}
