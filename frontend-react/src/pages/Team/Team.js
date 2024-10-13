import React from 'react'
import TeamCard from '../../components/Card/TeamCard'
import NavBar from '../../components/NavBar/Navbar'
import VideoBackground from '../../components/VideoBackground'
import { BACKGROUNDS } from '../../utils/backgrounds'
import { coreTeam } from '../../utils/teamData'

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
function Team({setIsJamming,isJamming}) {
    const renderTeamSection = (role) => {
        return coreTeam[role].map((member) => (
          <TeamCard
            key={member.Name}
            name={member.Name}
            committee={member.Committee}
            instagram={member.Instagram}
            linkedin={member.Linkedin}
            photo={member.Photo}
            email={member.Email}
            contact={member.Contact}
          />
        ));
      };
    return (
      <>
        <div>
      <NavBar />
      <VideoBackground url={BACKGROUNDS.Team} />

      {/* Convenor Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ color: 'white', fontSize: '4rem' }}>Convenors</h1>
        <div style={styles.cardContainer}>
          {coreTeam.Convenor && renderTeamSection('Convenor')}
        </div>
      </div>

      {/* Secretary Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ color: 'white', fontSize: '4rem' }}>Secretaries</h1>
        <div style={styles.cardContainer}>
          {coreTeam.Secretary && renderTeamSection('Secretary')}
        </div>
      </div>

      {/* Head Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ color: 'white', fontSize: '4rem' }}>Heads</h1>
        <div style={styles.cardContainer}>
          {coreTeam.Head && renderTeamSection('Head')}
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
               position: "fixed",
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

    )
}
const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px', // Space between cards
        marginTop: '20px',
    },
};

export default Team