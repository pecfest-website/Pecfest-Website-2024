import React from 'react'
import contact from '../../utils/svgs/phone.svg'
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from '../../components/NavBar/Navbar';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
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
                            <p className="text-white text-sm">Prranav Babbar: 62846 91173</p>
                            <p className="text-white text-sm">Ayush Kansal: 94637 41383</p>
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
                            <p className="text-white text-sm">Punjab Engineering College, <br/>Sector-12, Chandigarh</p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="mb-6 md:mb-8">
                        <h3 className="text-base md:text-lg text-white mb-4">Follow Us on Social</h3>
                        <div className="flex justify-around">
                            <FaInstagram className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaFacebook className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaYoutube className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaLinkedin className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
