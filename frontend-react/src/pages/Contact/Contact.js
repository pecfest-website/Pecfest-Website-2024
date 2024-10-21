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

            <div className="flex items-center justify-center overflow-hidden">
                <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96 text-center">
                    <h1 className="text-3xl font-bold text-white font-serif mb-8">Contact Us</h1>

                    {/* Phone Section */}
                    <div className="flex items-center text-left mb-6">
                        <FaPhone className="text-white text-2xl mr-4" />
                        <div>
                            <h3 className="text-lg text-white">Call us directly at</h3>
                            <p className="text-white text-sm">Prranav Babbar: 62846 91173</p>
                            <p className="text-white text-sm">Ayush Kansal: 94637 41383</p>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-center text-left mb-6">
                        <FaEnvelope className="text-white text-2xl mr-4" />
                        <div>
                            <h3 className="text-lg text-white">Reach out via email at</h3>
                            <p className="text-white text-sm">convener.pecfest@pec.edu.in</p>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="flex items-center text-left mb-6">
                        <FaMapMarkerAlt className="text-white text-2xl mr-4" />
                        <div>
                            <h3 className="text-lg text-white">Visit us at</h3>
                            <p className="text-white text-sm">Punjab Engineering College, Sector-12, Chandigarh</p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="mb-8">
                        <h3 className="text-lg text-white mb-4">Follow Us on Social</h3>
                        <div className="flex justify-around">
                            <FaInstagram className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaFacebook className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaYoutube className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaLinkedin className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    {/* Developers Button */}
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Developers
                    </button>
                </div>
            </div>
            {/* <div className=' mt-[2vh] h-[85vh] w-[100vw] overflow-hidden flex flex-col justify-around pb-[2vh]'>
                <div className="text-[rgb(251,255,0)] mt-[2vh] text-justify text-[32px] md:text-[40px] lg:text-[52px] font-normal leading-none flex justify-center">
                    <p style={{ fontFamily: 'Cyber Chunk Font' }}>CONTACT US</p>
                </div>
                <div className='flex justify-center'>
                    <div className='flex justify-center w-[70vw] h-[70vh] bg-black'>
                        <img
                            style={{
                                width: `calc(80vw)`,
                                height: `calc(70vh)`,
                            }}
                            src={contact}
                        />

                    </div>
                </div>
            </div>  */}
            {/* <div
                style={{
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    marginTop: '-5vh',
                    flexDirection: 'column',
                }}
            >
                <h1 className='text-black'>Contact Us</h1>
                        <div className='w-[30vw] h-[36vh] bg-white z-10 absolute top-[22vh] overflow-auto'>
                            hello
                        </div>
                <img
                    style={{
                        width: `calc(80vw)`,
                        height: `calc(70vh)`,
                        position: 'absolute' // This will position the image absolutely inside the flex container
                    }}
                    src={contact}
                />
            </div> */}

        </div>
    )
}
