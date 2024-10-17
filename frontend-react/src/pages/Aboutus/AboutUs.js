import NavBar from "../../components/NavBar/Navbar";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import styles from "./about.module.css";
import Events from "../../utils/images/Layer 4.png";
import Prizes from "../../utils/images/Layer 5.png";
import Participants from "../../utils/images/Layer 7.png";
import Instagram from "../../utils/images/Layer 8.png";
import Facebook from "../../utils/images/Layer 6.png";
import Youtube from "../../utils/images/Layer 2.png";
import Anchor from "../../utils/images/Layer 3.png";
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
export const AboutUs = ({ isJamming, setIsJamming }) => {

  const data = [
    { src: Events, num: "50k+", title: "Footfall" },
    { src: Instagram, num: "52k+", title: "Instagram Impressions" },
    { src: Facebook, num: "43k+", title: "Facebook Followers" },
    { src: Youtube, num: "13k+", title: "Youtube Impressions" },
    { src: Anchor, num: "1.8k+", title: "Youtube Subscribers" },
    { src: Prizes, num: "6k+", title: "APP INSTALLS" },
    { src: Participants, num: "8k+", title: "PARTICIPANTS" },
  ];

  return (
    <>
      <VideoBackground url={BACKGROUNDS.AboutUs} />
      <NavBar />
      <div className=" w-full h-screen ">
        <div className="flex flex-col justify-center items-center backdrop-blur-sm">

          <div className="absolute flex justify-center items-center z-10 h-[60vh] w-[85vw] backdrop-blur-sm bg-black/40 top-[15vh] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
          </div>
          <div className=" backdrop-blur-sm bg-black/40 absolute z-10 top-[7vh] h-[8vh] w-[52vw] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]  flex flex-col items-center justify-center">
            <div className="text-[rgb(251,255,0)] text-justify text-[32px] md:text-[40px] lg:text-[52px] font-normal leading-none ">
              <p style={{ fontFamily: 'Cyber Chunk Font' }}>ABOUT US</p>
            </div>
          </div>
          <div className=" backdrop-blur-sm bg-black/30 absolute z-20 top-[20.5vh] h-[49vh] w-[52vw] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
            <div className="z-20 hidden xl:block" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: "40" }}>
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
            <div className="overflow-auto w-full flex flex-col items-center relative h-[25000vh] top-[0vh] z-50">
              <div className="text-gray-200 px-[2vw]  lg:px-[5vw] tracking-wide text-lg mt-[5vh] text-justify items-center z-60">

                Dive into PECFEST 2024: The Techno-Cultural Revolution!

                Step into a neon-infused world where innovation meets artistic expression. PECFEST 2024 is your ticket to an electrifying experience that blends cutting-edge tech with vibrant culture.

                Join over 50,000 creators and dreamers as we shatter conventions. Get inspired by visionary talks, lose yourself in mind-blowing performances, and connect with a diverse community that thrives on passion.

                Embrace the future where tradition meets innovation, and creativity knows no limits. Are you ready to ride the wave of inspiration at PECFEST 2024?


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
      {/* <div className="flex flex-col justify-center items-center backdrop-blur-sm h-[400px]">
      
          <div className="absolute flex justify-center items-center z-10 h-[348.75px] w-[1302.126px] backdrop-blur-sm bg-black/40 top-[170px] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
            
          </div>
  
          <div className="backdrop-blur-sm bg-black/40 absolute z-10 top-[132px] h-[40px] w-[800px] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4">
            
          </div>
          <div className="backdrop-blur-sm bg-black/30 absolute z-10 top-[198px] h-[290px] w-[800px] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
            <div className="text-[#FBFF00] text-justify text-[52px]  leading-none shadow-[0_4px_4px_rgba(0,0,0,0.25)] ">
              About
            </div>
            <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4 text-justify items-center">
          
            Dive into PECFEST 2024: The Techno-Cultural Revolution!

Step into a neon-infused world where innovation meets artistic expression. PECFEST 2024 is your ticket to an electrifying experience that blends cutting-edge tech with vibrant culture.

Join over 50,000 creators and dreamers as we shatter conventions. Get inspired by visionary talks, lose yourself in mind-blowing performances, and connect with a diverse community that thrives on passion.

Embrace the future where tradition meets innovation, and creativity knows no limits. Are you ready to ride the wave of inspiration at PECFEST 2024?


            </div>
          </div>
  
          <div className="absolute z-10 top-[198px] h-[350px] w-[880px] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-4">
           
          </div>
  
          <div className="absolute z-20">
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '50px', right: '480px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '130px', right: '480px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '210px', right: '480px', position: 'absolute' }} />
          </div>
  
          <div className="absolute z-20">
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '50px', right: '540px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '130px', right: '540px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '210px', right: '540px', position: 'absolute' }} />
          </div>
  
          <div className="absolute z-20 h-[150px] w-[150px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '275px', right: '400px', position: 'absolute' }}></div>
        </div> */}
      <div className={styles.aboutBoxes}>
        {data.map((item, index) => (
          <div className={`${styles.aboutBox} glassmorphism`} key={index}>
            <img
              src={item.src} alt="Not available" />
            <div className={styles.aboutNum}>{item.num}</div>
            <div className={styles.aboutTitle}>
              {item.title}
            </div>
          </div>
        ))}
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
          >
            Jam?
          </h2>
        )}
      </div>
    </>
  );
};