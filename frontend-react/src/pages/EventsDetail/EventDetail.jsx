import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
import {
  Button,

} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NavBar from "../../components/NavBar/Navbar";
import VideoBackground from "../../components/VideoBackground";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { BACKGROUNDS } from "../../utils/backgrounds";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";
import {
  FaBook,
  FaCalendar,
  FaClock,
  FaLocationArrow,
  FaPeopleArrows,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const EventDetail = ({ isJamming, setIsJamming }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});

  const fetchData = async (eventId) => {
    const url = "https://api.pecfest.org/event/detail";

    const token = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    try {
      const response = await axios.post(url, { eventId }, { headers });
      const res = response?.data;

      if (res.statusCode === 200) {
        toast.success("Success");
        setEvent(res?.data);
      } else {
        toast.error(res?.message, {
          position: "top-center", // You can change the position
          autoClose: 5000, // Toast disappears after 5 seconds
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause toast dismissal when hovered
          draggable: true, // Allow dragging the toast to dismiss it
          progress: undefined, // Progress bar visibility
        });
      }
    } catch (error) {
      console.error("Error posting event:", error);
      toast.error("Error Occured! Try again later", {
        position: "top-center", // You can change the position
        autoClose: 5000, // Toast disappears after 5 seconds
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause toast dismissal when hovered
        draggable: true, // Allow dragging the toast to dismiss it
        progress: undefined, // Progress bar visibility
      });
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const formatDate = () => {
    if (!event?.startDate || !event?.endDate) {
      return "";
    }
    const s = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(Date.parse(event?.startDate)));

    const e = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(Date.parse(event?.endDate)));
    return `${s} - ${e}`;
  };

  const formatTime = () => {
    if (!event?.startTime || !event?.endTime) return;
    const [startHour, startMinute] = event?.startTime?.split(":");
    const [endHour, endMinute] = event?.endTime?.split(":");

    const startDate = new Date();
    const endDate = new Date();

    startDate.setHours(parseInt(startHour), parseInt(startMinute));
    endDate.setHours(parseInt(endHour), parseInt(endMinute));

    const s = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(startDate);

    const e = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(endDate);

    return `${s} - ${e}`;
  };

  const info = [
    {
      Icon: CalendarMonthIcon,
      text: formatDate(),
    },
    {
      Icon: ScheduleIcon,
      text: formatTime(),
    },
    {
      Icon: MyLocationIcon,
      text: event?.venue,
    },
    {
      Icon: PhoneForwardedIcon,
      text: `${event?.heads?.[0]?.name} - ${event?.heads?.[0]?.phoneNumber}`,
    },
    {
      Icon: GroupsIcon,
      text: `${event?.minParticipants} - ${event?.maxParticipants} members`,
    },
    {
      Icon: MenuBookIcon,
      link: event?.haveRuleBook ? event?.ruleBookLink : "",
      text: "Rulebook",
    },
    {
      Icon: CurrencyRupeeIcon,
      text:
        event?.paymentType !== "FREE"
          ? event?.registrationFee + " per Team"
          : "FREE",
    },
  ];

  const [loading, setLoading] = useState(false);
  const alreadyRegistered = event?.participated ?? false;
  const handleRegister = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  };

  console.log(event);
  console.log(event.heads);
  const participantText =
    event?.minParticipants === 1 && event?.maxParticipants === 1
      ? "1 member"
      :  event?.minParticipants !==  event?.maxParticipants ?`${event?.minParticipants} - ${event?.maxParticipants} members` :`${event.minParticipants} members`;

  return (
    <>
        <NavBar />
      <>
    
        <div>
          <VideoBackground url={BACKGROUNDS.Gallery} />
          <div className={styles.events}>
            <div className={styles["shadow-region"]}>
              <div className={styles["glow-border-blue"]} />
              <div className={styles["event-heading"]}>{event.name}</div>
              <div className={styles["glow-border-pink"]} />

              <div className={styles["event-content"]}>
                <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
                  <img
                    src={event.image}
                    alt="Event"
                    style={{ maxHeight: "calc(100vh - 320px)", width: "auto"}}
                  />
                </div>
                <div style={{display:"flex",flexDirection:"column", flexWrap:"nowrap", alignItems:"flex-start", width:"100%"}} className={styles.infoCont}>
                
                  <h1>{event.name}</h1>
                  <div className={styles.eventInfo}>
                    <FaCalendar /> {formatDate()}
                  </div>
                  <div className={styles.eventInfo}>
                    <FaClock /> {formatTime()}
                  </div>
                  <div className={styles.eventInfo}>
                    <FaLocationArrow /> {event.venue}
                  </div>
                  {event?.heads?.map((head) => {
                    return (
                      <div className={styles.eventInfo} key={head.name}>
                        <FaUser /> {head.name} - {head.phoneNumber}
                      </div>
                    );
                  })}
                  <div className={styles.eventInfo}>
                    {" "}
                    <FaUserFriends />
                    {participantText}
                  </div>
                  {event.haveRuleBook && (
                    <div className={styles.eventInfo}>
                      {" "}
                      <FaBook />
                      {<Link to={event.ruleBookLink}>Rule Book</Link>}
                    </div>
                  )}
                  <Button>Register</Button>
                  <hr style={{width:"100%"}}></hr>
                  <p style={{fontSize:"1.2rem", marginTop:"10px"}}>{event.description}</p>
                </div>
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
    </>
  );
};

export default EventDetail;
