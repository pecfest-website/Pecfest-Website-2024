import React, { useState, useEffect, useRef } from 'react';
import TeamCard from '../../components/Card/TeamCard';
import NavBar from '../../components/NavBar/Navbar';
import VideoBackground from '../../components/VideoBackground';
import { BACKGROUNDS } from '../../utils/backgrounds';
import { coreTeam } from '../../utils/teamData';
import Lottie from 'react-lottie';
import animationData from "../../utils/Transparent vivbing.json";
import loaderVideo from './vid.mp4'; // Your loader video
import { InView } from 'react-intersection-observer'; // Import the Intersection Observer

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Team({ setIsJamming, isJamming }) {
  const [isLoaderPlaying, setIsLoaderPlaying] = useState(true); // Loader plays initially
  const [isFadingOut, setIsFadingOut] = useState(false); // Fade-out state
  const videoRef = useRef(null); // Reference for the video element

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleTimeUpdate = () => {
        // Trigger fade-out when the video reaches half of its duration
        if (videoElement.currentTime >= videoElement.duration / 2) {
          setIsFadingOut(true); // Start fade-out effect
          setTimeout(() => {
            setIsLoaderPlaying(false); // Hide loader after fade-out
          }, 1000); // 1000ms for the fade-out duration
        }
      };

      videoElement.addEventListener('timeupdate', handleTimeUpdate);

      // Clean up event listener on unmount
      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  const renderTeamSection = (role) => {
    return coreTeam[role].map((member) => (
      <InView triggerOnce={true} rootMargin="100px" key={member.Name}>
        {({ inView, ref }) => (
          <div ref={ref} style={{ opacity: inView ? 1 : 0.3, transition: 'opacity 0.5s ease-in-out' }}>
            {inView && (
              <React.Suspense fallback={<div>Loading...</div>}>
                <TeamCard
                  name={member.Name}
                  committee={member.Committee}
                  instagram={member.Instagram}
                  linkedin={member.Linkedin}
                  photo={member.Photo}
                  email={member.Email}
                  contact={member.Contact}
                />
              </React.Suspense>
            )}
          </div>
        )}
      </InView>
    ));
  };

  return (
    <>
    <div>
      {/* Background Video (always showing in the background) */}
      <NavBar />
      <VideoBackground url={BACKGROUNDS.Team} />

      {/* Black overlay filter */}
      <div style={styles.blackOverlay}></div>

      {/* Loader Video (only showing at the start) */}
      {isLoaderPlaying && (
        <div style={{ ...styles.loaderContainer, opacity: isFadingOut ? 0 : 1 }}>
          <video
            ref={videoRef} // Attach reference to the video element
            autoPlay
            muted
            playsInline
            style={styles.loaderVideo}
          >
            <source src={loaderVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {!isLoaderPlaying && (
        <div>
          {/* Main Page Content */}
  

          {/* Convenor Section */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 style={styles.title}>Convenors</h1>
            <div style={styles.cardContainer}>
              {coreTeam.Convenor && renderTeamSection('Convenor')}
            </div>
          </div>

          {/* Secretary Section */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 style={styles.title}>Secretaries</h1>
            <div style={styles.cardContainer}>
              {coreTeam.Secretary && renderTeamSection('Secretary')}
            </div>
          </div>

          {/* Head Section */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 style={styles.title}>Heads</h1>
            <div style={styles.cardContainer}>
              {coreTeam.Head && renderTeamSection('Head')}
            </div>
          </div>
        </div>
      )}

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
      </div>
    </>
  );
}

const styles = {
  blackOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black overlay with 70% opacity
    zIndex: -1, // Ensure it's behind content but above the background video
  },
  loaderContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    transition: 'opacity 1s ease-in-out', // Smooth fade-out transition
    zIndex: 2, // Ensure the loader is above the overlay
  },
  loaderVideo: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
  },
  title: {
    color: 'white',
    fontSize: '3.5rem',
    marginBottom: '40px', // Adjust this to add more space below the title
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '100px', // Space between cards
    marginTop: '20px',
  },
};

export default Team;
