import { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Events.module.css";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import Navbar from "../../components/NavBar/Navbar";
import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";
import EventCard from "../../components/EventCard/EventCard";
import axios from "axios";

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
  const [active, setIsActive] = useState("MEGASHOW");
  const [events, setEvents] = useState([]);
  const onAboutTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onEventsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const getEvents = async () => {
    let data = [];
    const res = await axios.post(
      "https://api.pecfest.org/event/list",
      {
        filters: {
          eventType: "MEGASHOW",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(res);
    if (res.data.statusCode === 200) {
      data = res.data.data.events;
    }
    const res2 = await axios.post(
      "https://api.pecfest.org/event/list",
      {
        filters: { eventType: "WORKSHOP" },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res2);
    if (res2.data.statusCode === 200) {
      data = [...data, ...res2.data.data.events];
    }
    setEvents(data);
  };
  useEffect(() => {
    getEvents();
  }, []);

  //   console.log(events)

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
                  active !== "MEGASHOW" ? styles["isNotActive"] : ""
                }`}
                to="#"
                onClick={() => {
                  setIsActive("MEGASHOW");
                }}
              >
                MEGA SHOWS
              </NavLink>
              <NavLink
                className={`${styles["event-sub-heading"]} ${
                  active !== "WORKSHOP" ? styles["isNotActive"] : ""
                }`}
                onClick={() => {
                  setIsActive("WORKSHOP");
                }}
                to="#"
              >
                WORKSHOPS
              </NavLink>
            </div>
            <div className={styles["event-content"]}>
              {events.map(
                (event) =>
                  event.eventType === active && (
                    <EventCard
                      name={event.name}
                      photo={event.image}
                      tags={event.tags}
                      key={event.name}
					  id={event.id}
                    />
                  )
              )}
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
