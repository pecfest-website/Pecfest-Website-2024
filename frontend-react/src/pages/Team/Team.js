import React from 'react'
import TeamCard from '../../components/Card/TeamCard'
import NavBar from '../../components/NavBar/Navbar'
import VideoBackground from '../../components/VideoBackground'
import { BACKGROUNDS } from '../../utils/backgrounds'
import { coreTeam } from '../../utils/teamData'

function Team() {
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