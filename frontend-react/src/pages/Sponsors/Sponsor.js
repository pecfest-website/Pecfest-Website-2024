import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/Navbar";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import SponsorCard from "../../components/sponsorCard/SponsorCard";
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
export default function Sponsor({ isJamming, setIsJamming }) {
    const [data, setData] = useState([]);

    const fetchSponsors = async () => {
        try {
            const response = await fetch("https://api.pecfest.org/sponser/list", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });

            const result = await response.json();
            if (result?.statusCode === 200) {
                setData(result.data);
                console.log(data);
            } else {
                console.error("Error fetching sponsors list", result);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchSponsors();
    }, []);
    return (
        <>
            <div>
                <NavBar />
                <VideoBackground url={BACKGROUNDS.Sponsors} />
                    {Array.isArray(data?.sponsers) && data.sponsers.length > 0 ? (
                                        data.sponsers.map((category, index) => (
                                            <SponsorCard key={index} category={category} />
                                        ))
                                    ) : (
                                        <p className="text-[rgb(251,255,0)]" >No sponsors available.</p>  
                                )}
              
                {/* <div className="fixed w-full h-screen overflow-hidden">
                    <div className="flex flex-col justify-center items-center backdrop-blur-sm">
                       
                        <div className="absolute flex justify-center items-center z-10 h-[60vh] w-[85vw] backdrop-blur-sm bg-black/40 top-[15vh] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                        </div>
                       
                        <div className=" backdrop-blur-sm bg-black/40 absolute z-10 top-[7vh] h-[8vh]  w-[62vw] lg:w-[52vw] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]  flex flex-col items-center justify-center">
                            <div className="text-[rgb(251,255,0)] text-justify text-[32px] md:text-[40px] lg:text-[52px] font-normal leading-none ">
                                <p style={{ fontFamily: 'Cyber Chunk Font' }}>SPONSORS</p>
                            </div>
                        </div>
                        <div className=" backdrop-blur-sm bg-black/30 absolute z-20 top-[20.5vh] h-[49vh]  w-[62vw] lg:w-[52vw] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
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
                            <div className="overflow-auto w-full mt-[-2vh] flex flex-col items-center relative h-[25000vh] top-[0vh] z-50">
                                
                            </div>

                        </div>
                
                        <div className="absolute z-10 top-[20vh] h-[50vh]  w-[70vw] lg:w-[58vw] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-2">

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
                </div> */}
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
                    >Jam?
                    </h2>
                )}
            </div>
        </>
    )
}
