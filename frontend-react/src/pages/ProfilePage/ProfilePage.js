import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from "../../components/NavBar/Navbar";
import styles from "./ProfilePage.module.css";
import { useState } from "react";
import VideoBackground from "../../components/VideoBackground";

const ProfilePage = () => {
  const [tab, setTab] = useState("personalDetails");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <>
      <div className={styles.profileBackground}>
        {/* Navbar */}
        <VideoBackground url={BACKGROUNDS.Homepage} />
        <div className={styles.navbarContainer}>
          <NavBar />
        </div>

        {/* Main Layout */}
        <div className={styles.mainContainer}>
          {/* Left Side: Profile Picture and Event Reminder */}
          <div className={styles.leftSide}>
            <div className={styles.profilePicture}></div>

            <div className={styles.eventsContainer}>
              <h2>Upcoming Events</h2>
              <ul className={styles.eventList}>
                <li>Event 1 - 10:00 AM</li>
                <li>Event 2 - 11:30 AM</li>
                <li>Event 3 - 2:00 PM</li>
                <li>Event 4 - 4:00 PM</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Main Content with Tabs */}
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
              {tab === "personalDetails" && <p>Display personal details here...</p>}
              {tab === "registrations" && <p>Show your event registrations here...</p>}
              {tab === "invited" && <p>Display invited details here...</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
