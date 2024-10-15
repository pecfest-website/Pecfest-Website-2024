import { BACKGROUNDS } from "../../utils/backgrounds";
import VideoBackground from "../../components/VideoBackground";
import NavBar from "../../components/NavBar/Navbar";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";

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
const Blinker = () => {
  return <span className={styles.blinker}> |</span>;
};

const Homepage = ({ isJamming, setIsJamming }) => {
  const p =
    "This site is under development. In the meantime, jam to music on this site and explore events....";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);


  useEffect(() => {
    if (index < p.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + p[index]);

        setIndex(index + 1);
      }, 200); // Set to desired speed

      return () => clearTimeout(timeout);
    } else {
      
    }
  }, [index, p]); // Re-run the effect whenever the index changes

  return (
    <>
      <VideoBackground url={BACKGROUNDS.Homepage} />
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "calc(100vh - 200px)",
        }}
      >
        <div className={styles.events}>
          <div className={styles["shadow-region"]}>
            <div className={styles["glow-border-blue"]} />
            <div className={styles["event-heading"]}>Welcome</div>
            <div className={styles["glow-border-pink"]} />
            <div className={styles["event-content"]}>
              <img src="logo.png" className={styles.logo}  />
              <div>
                {displayText}
                {<Blinker />}
              </div>
            </div>
          </div>
        </div>
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

export default Homepage;
