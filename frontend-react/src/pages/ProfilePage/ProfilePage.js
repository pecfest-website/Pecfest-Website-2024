import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from "../../components/NavBar/Navbar";
import styles from "./ProfilePage.module.css";
import VideoBackground from "../../components/VideoBackground";

const Blinker = () => {
  return <span className={styles.blinker}> |</span>;
};

const ProfilePage = () => {
  const [tab, setTab] = useState("personalDetails");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  const [invitationStatus, setInvitationStatus] = useState({});
  const [showTeamMembers, setShowTeamMembers] = useState({});

  const sampleResponse = {
    user: {
      userId: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      uuid: "123e4567-e89b-12d3-a456-426614174000",
    },
    invitedTeams: [
      {
        teamName: "Tech Wizards",
        eventName: "Hackathon",
        eventId: 101,
      },
    ],
    acceptedAndParticipantEvents: [
      {
        eventName: "Coding Contest",
        teamName: "Code Masters",
        eventType: "TEAM",
        teamSize: 4,
        acceptedMembers: [
          {
            name: "Charlie Brown",
            email: "charlie@example.com",
            contact: "7654321098",
          },
          {
            name: "Dave Wilson",
            email: "dave@example.com",
            contact: "6543210987",
          },
        ],
        eventId: 102,
      },
      {
        eventName: "Solo Singing Competition",
        eventType: "SINGLE",
        eventId: 103,
      },
    ],
  };

  useEffect(() => {
    const initialDropdownState = {};
    sampleResponse.acceptedAndParticipantEvents.forEach((event) => {
      if (event.eventType === "TEAM") {
        initialDropdownState[event.eventId] = false;
      }
    });

    const initialInvitationStatus = sampleResponse.invitedTeams.reduce((acc, team) => {
      acc[team.teamName] = "pending";
      return acc;
    }, {});

    setShowTeamMembers(initialDropdownState);
    setUserData(sampleResponse);
    setInvitationStatus(initialInvitationStatus);
    setLoading(false);
  }, []);

  const toggleTeamMembers = (eventId) => {
    setShowTeamMembers((prevState) => ({
      ...prevState,
      [eventId]: !prevState[eventId],
    }));
  };

  const tabMessages = {
    personalDetails: "These are your personal details:",
    registrations: "These are your registered events:",
    invited: "You have been invited to the following teams:",
  };

  useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [tab]);

  useEffect(() => {
    const message = tabMessages[tab];
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, tab]);

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handleAccept = (teamName) => {
    setInvitationStatus((prevStatus) => ({
      ...prevStatus,
      [teamName]: "accepted",
    }));
  };

  const handleReject = (teamName) => {
    setInvitationStatus((prevStatus) => ({
      ...prevStatus,
      [teamName]: "rejected",
    }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.profileBackground}>
      <VideoBackground url={BACKGROUNDS.Homepage} />
      <div className={styles.navbarContainer}>
        <NavBar />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.leftSide}>
          <div className={styles.profilePicture}></div>

          <div className={styles.eventsContainer}>
            <h2>Upcoming Events</h2>
            <ul className={styles.eventList}>
              {sampleResponse.acceptedAndParticipantEvents.map((event, index) => (
                <li key={index}>
                  <Link to={`/events/${event.eventId}`} className={styles.eventLink}>
                    {event.eventName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.tabContainer}>
            <button
              className={tab === "personalDetails" ? styles.active : ""}
              onClick={() => handleTabChange("personalDetails")}
            >
              Personal Details
            </button>
            <button
              className={tab === "registrations" ? styles.active : ""}
              onClick={() => handleTabChange("registrations")}
            >
              Registrations
            </button>
            <button
              className={tab === "invited" ? styles.active : ""}
              onClick={() => handleTabChange("invited")}
            >
              Invited
            </button>
          </div>

          <div className={styles.detailsPanel}>
            <div>
              {displayText}
              <Blinker />
            </div>
          </div>

          <div className={styles.detailsPanel} style={{ marginTop: "20px" }}>
            {tab === "personalDetails" && (
              <div>
                <p>
                  <strong>Name:</strong> {sampleResponse.user.name}
                </p>
                <p>
                  <strong>Email:</strong> {sampleResponse.user.email}
                </p>
                <p>
                  <strong>User ID:</strong> {sampleResponse.user.userId}
                </p>
              </div>
            )}

            {tab === "registrations" && (
              <div className={styles.tableWrapper}>
                <table className={styles.registrationsTable}>
                  <thead>
                    <tr>
                      <th>Event Name</th>
                      <th>Event Type</th>
                      <th>Team Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleResponse.acceptedAndParticipantEvents.map((event, index) => (
                      <tr key={index}>
                        <td>
                          <Link to={`/events/${event.eventId}`} className={styles.eventLink}>
                            {event.eventName}
                          </Link>
                        </td>
                        <td>{event.eventType === "TEAM" ? "Team Event" : "Individual Event"}</td>
                        <td>
                          {event.eventType === "TEAM" ? (
                            <div className={styles.teamDetailsContainer}>
                              <span>{event.teamName}</span>
                              <button
                                onClick={() => toggleTeamMembers(event.eventId)}
                                className={styles.showTeamButton}
                              >
                                {showTeamMembers[event.eventId] ? "Hide Team" : "Show Team"}
                              </button>
                              {showTeamMembers[event.eventId] && (
                                <ul className={styles.teamList}>
                                  {event.acceptedMembers.map((member, idx) => (
                                    <li key={idx}>
                                      {member.name} - {member.email} (Contact: {member.contact})
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === "invited" && (
              <div>
                {sampleResponse.invitedTeams.map((team, index) => (
                  <div key={index} className={styles.invitedItem}>
                    <div className={styles.eventDetails}>
                      <p>
                        <strong>Team Name:</strong> {team.teamName} <br />
                        <strong>Event:</strong>{" "}
                        <Link to={`/events/${team.eventId}`} className={styles.eventLink}>
                          {team.eventName}
                        </Link>
                      </p>
                      <span className={styles.status}>
                        Status: {invitationStatus[team.teamName]}
                      </span>
                    </div>
                    <div className={styles.buttonContainer}>
                      {invitationStatus[team.teamName] === "pending" && (
                        <>
                          <button
                            onClick={() => handleAccept(team.teamName)}
                            className={styles.acceptButton}
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleReject(team.teamName)}
                            className={styles.rejectButton}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;