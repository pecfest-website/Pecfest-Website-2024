import { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Events.module.css";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import Navbar from "../../components/NavBar/Navbar";
import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";
import EventCard from "../../components/EventCard/EventCard";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Events = ({ isJamming, setIsJamming }) => {
  const navigate = useNavigate();
  const [active, setIsActive] = useState("mega shows");

  const onAboutTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onEventsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const data = {
    events: [
      {
        adminId: 5,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim ex consequatur nesciunt iste a consectetur deleniti...",
        endDate: "2028-06-03",
        endTime: "14:01",
        eventType: "MEGASHOW",
        haveRuleBook: false,
        heads: [],
        id: 21,
        image:
          "https://storage.googleapis.com/pecfest/website2024/event/MEGASHOW/1728761571.3796508.jpg",
        maxParticipants: 1,
        minParticipants: 1,
        name: "Temp Event",
        participants: [],
        participationType: "SINGLE",
        paymentType: "FREE",
        provideAccommodation: false,
        registrationFee: 0.0,
        ruleBookLink: "NONE",
        startDate: "2024-05-02",
        startTime: "14:32",
        tags: ["Dance"],
        venue: "Library",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div>
        <VideoBackground url={BACKGROUNDS.Events} />
        <div className={styles.events}>
          <div className={styles["shadow-region"]}>
            <div className={styles["glow-border-blue"]} />
            <div className={styles["event-heading"]}>EVENTS</div>
            <div className={styles["glow-border-pink"]} />
            <div>
              <NavLink
                className={`${styles["event-sub-heading"]} ${
                  active !== "mega shows" ? styles["isNotActive"] : ""
                }`}
                to="#"
                onClick={() => {
                  setIsActive("mega shows");
                }}
              >
                MEGA SHOWS
              </NavLink>
              <NavLink
                className={`${styles["event-sub-heading"]} ${
                  active !== "workshops" ? styles["isNotActive"] : ""
                }`}
                onClick={() => {
                  setIsActive("workshops");
                }}
                to="#"
              >
                WORKSHOPS
              </NavLink>
            </div>
            <div className={styles["event-content"]}>
              <EventCard
                name={data.events[0].name}
                photo={data.events[0].image}
                tags={data.events[0].tags}
              />
            </div>
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
};

export default Events;
