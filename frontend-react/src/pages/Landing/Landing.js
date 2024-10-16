import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from "../../components/NavBar/Navbar";
import { useEffect, useState, useRef } from "react";
import vid1 from "../../utils/vid/land1.mp4";
import vid2 from "../../utils/vid/land2.mp4";

//replace with links in backgrounds.landing1 2
// const videoIntro = "https://www.w3schools.com/tags/movie.mp4";
// const videoLoop ="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
import styles from '../../components/VideoBackground.module.css';


const Landing = () => {
  const [vidIndex, setVidIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);
  // BACKGROUNDS.Landing add later
  return (
    <>
      <div className={styles['video-background']}>
      <video
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        src={vid1}
        autoPlay
        muted
        onEnded={() => setVidIndex((idx) => idx + 1)}
      />
      <video
        style={{ display: vidIndex === 0 ? "none" : "block" }}
        src={vid2}
        muted
        loop
        ref={ref}
      />
      </div>
      <div 
        className={styles['video-overlay']} 
        onClick={(e) => e.preventDefault()} // Prevent click actions
      ></div>
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "calc(100vh - 200px)",
        }}
      ></div>
    </>
  );
};

export default Landing;
