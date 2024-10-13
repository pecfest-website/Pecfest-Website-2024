import { BACKGROUNDS } from "../../utils/backgrounds";
import VideoBackground from "../../components/VideoBackground";
import NavBar from "../../components/NavBar/Navbar";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";

import BouncingBallsLoader from "../../components/LoaderJump/JumpLoader";

const Blinker = () => {
  return <span className={styles.blinker}> |</span>;
};

const Homepage = () => {
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
    }
    else{
        setTimeout(()=>{
        setIndex(0);
        setDisplayText("");
        },1000)
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
              <img src="logo.png" style={{scale:"1.2"}} />
              <div>
                {displayText}
                {<Blinker />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
