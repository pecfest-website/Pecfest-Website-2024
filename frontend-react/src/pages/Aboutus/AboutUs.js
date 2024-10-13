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
export const AboutUs = () => {

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
        <NavBar/>
            <VideoBackground url={BACKGROUNDS.AboutUs}/>
        <div className="flex flex-col justify-center items-center backdrop-blur-sm h-[400px]">
          {/* Blue Div */}
          <div className="absolute flex justify-center items-center z-10 h-[348.75px] w-[1302.126px] backdrop-blur-sm bg-black/40 top-[170px] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
            
          </div>
  
          {/* Yellow Div */}
          <div className="backdrop-blur-sm bg-black/40 absolute z-10 top-[132px] h-[40px] w-[800px] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4">
            
          </div>
  
          {/* About Section */}
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
  
          {/* Pink Div */}
          <div className="absolute z-10 top-[198px] h-[350px] w-[880px] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-4">
           
          </div>
  
          {/* Pink Circles */}
          <div className="absolute z-20">
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '50px', right: '480px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '130px', right: '480px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '210px', right: '480px', position: 'absolute' }} />
          </div>
  
          {/* Yellow Circles */}
          <div className="absolute z-20">
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '50px', right: '540px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '130px', right: '540px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '210px', right: '540px', position: 'absolute' }} />
          </div>
  
          {/* Large Yellow Circle */}
          <div className="absolute z-20 h-[150px] w-[150px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '275px', right: '400px', position: 'absolute' }}></div>
        </div>
        <div className={styles.aboutBoxes}>
            {data.map((item, index) => (
                <div className={`${styles.aboutBox} glassmorphism`} key={index}>
                    <img
                    src={item.src} />
                    <div className={styles.aboutNum}>{item.num}</div>
                    <div className={styles.aboutTitle}>
                        {item.title}
                    </div>
                </div>
            ))}
        </div>
  
      </>
    );
  };