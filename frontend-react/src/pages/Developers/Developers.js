import React, { Suspense } from 'react';
import NavBar from '../../components/NavBar/Navbar';
import VideoBackground from '../../components/VideoBackground';
import { BACKGROUNDS } from '../../utils/backgrounds';
import { developers } from '../../utils/developersData';
import Lottie from 'react-lottie';
import animationData from "../../utils/Transparent vivbing.json";
import { InView } from 'react-intersection-observer'; // Import the Intersection Observer
import DevCard from '../../components/Card/DevCard';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

function Developers({ setIsJamming, isJamming }) {
    const renderTeamSection = (role) => {
        return developers[role].map((member) => (
            <InView triggerOnce={true} rootMargin="100px" key={member.Name}>
                {({ inView, ref }) => (
                    <div ref={ref} style={{ opacity: inView ? 1 : 0.3, transition: 'opacity 0.5s ease-in-out' }}>
                        {inView && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <DevCard
                                    name={member.Name}
                                    instagram={member.Instagram}
                                    linkedin={member.Linkedin}
                                    photo={member.Photo}
                                    email={member.Email}
                                    contact={member.Contact}
                                />
                            </Suspense>
                        )}
                    </div>
                )}
            </InView>
        ));
    };

    return (
        <>
            <div>
                <NavBar />
                <VideoBackground url={BACKGROUNDS.Team} />
                {/* Head Section */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h1 style={styles.title}>Heads</h1>
                    <div style={styles.cardContainer}>
                        {developers.Heads && renderTeamSection('Heads')}
                    </div>
                </div>

                {/* Secretary Section */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h1 style={styles.title}>Developers</h1>
                    <div style={styles.cardContainer}>
                        {developers.Developers && renderTeamSection('Developers')}
                    </div>
                </div>

                {/* Head Section */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h1 style={styles.title}>UI/UX</h1>
                    <div style={styles.cardContainer}>
                        {developers.UI && renderTeamSection('UI')}
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

const styles = {
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

export default Developers;
