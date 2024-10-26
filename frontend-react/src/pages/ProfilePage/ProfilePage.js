import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from "../../components/NavBar/Navbar";
import styles from "./ProfilePage.module.css";
import VideoBackground from "../../components/VideoBackground";
import axios from "axios";
import { toast } from "react-toastify";

const Blinker = () => {
  return <span className={styles.blinker}> |</span>;
};

const ProfilePage = () => {
  const [tab, setTab] = useState("personalDetails");
  const [userData, setUserData] = useState({});
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  const [invitationStatus, setInvitationStatus] = useState({});
  const [showTeamMembers, setShowTeamMembers] = useState({});
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const fetchDetails = async () => {
    const res = await axios.post(
      "https://api.pecfest.org/user/info",
      {  },
      { headers: { "Content-Type": "application/json",
        "token": "Bearer "+ token
      } }
    )
    const data = res.data;
    console.log(data);
    if (data?.statusCode === 200){
      const sampleResponse = data?.data;
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
    }else if (data?.statusCode === 501){
      navigate("/login");
    }else{
      toast.error(data?.message, {
        position: "top-right", // You can change the position
        autoClose: 5000, // Toast disappears after 5 seconds
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause toast dismissal when hovered
        draggable: true, // Allow dragging the toast to dismiss it
        progress: undefined, // Progress bar visibility
      });
    }
  }

  useEffect(() => {
    if (!token){
      navigate("/login")
    } else {
      fetchDetails();
    }
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

  return (
    <div className={styles.profileBackground}>
      <VideoBackground url={BACKGROUNDS.Homepage} />
    <NavBar />
      {/* <div className={styles.navbarContainer}>
      </div> */}

      <div className={styles.mainContainer}>
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
                  <strong>Name:</strong> {userData.user?.name}
                </p>
                <p>
                  <strong>Email:</strong> {userData.user?.email}
                </p>
                <p>
                  <strong>User ID:</strong> {userData.user?.userId}
                </p>
                <button className={styles.rejectButton} onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}>
                  Logout
                </button>
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
                    {userData.acceptedAndParticipantEvents?.map((event, index) => (
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
                {userData.invitedTeams?.map((team, index) => (
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