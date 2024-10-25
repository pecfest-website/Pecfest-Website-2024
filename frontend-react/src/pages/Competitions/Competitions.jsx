import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Competition.module.css";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import Navbar from "../../components/NavBar/Navbar";
import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";
import axios from "axios";
import TransparentCard from "../../components/TransparentCard/TransparentCard";
import { Chip } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Competitions = ({ isJamming, setIsJamming }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialFilters = {
    Dance: true,
    Music: true,
    Coding: true,
    Fun: true,
    Hardware: true,
    Dramatics: true,
    Gaming: true,
    Cinematography: true,
  };

  const [filters, setFilters] = useState(initialFilters);
  const [showFilters, setShowFilters] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const defaultEvent = queryParams.get("default") || "CULTURAL";

  const [active, setIsActive] = useState(defaultEvent);

  const [events, setEvents] = useState({
    CULTURAL: [],
    TECHNICAL: [],
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("default", active);
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
  }, [active, location.pathname, location.search, navigate]);

  const getEvents = async () => {
    try {
      const [culturalRes, technicalRes] = await Promise.all([
        axios.post(
          "https://api.pecfest.org/event/list",
          { filters: { eventType: "CULTURAL" } },
          { headers: { "Content-Type": "application/json" } }
        ),
        axios.post(
          "https://api.pecfest.org/event/list",
          { filters: { eventType: "TECHNICAL" } },
          { headers: { "Content-Type": "application/json" } }
        ),
      ]);

      if (culturalRes.data.statusCode === 200 && technicalRes.data.statusCode === 200) {
        setEvents({
          CULTURAL: culturalRes.data.data.events || [],
          TECHNICAL: technicalRes.data.data.events || [],
        });
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const renderEvents = () => {
    const activeEvents = events[active] || [];
    const filteredEvents = activeEvents.filter((event) =>
      event.tags.some((tag) =>
        Object.keys(filters).some((filterKey) => filters[filterKey] && filterKey === tag)
      )
    );

    if (filteredEvents.length === 0) {
      return <div className={styles["no-events"]}>No events available for the selected category and filters.</div>;
    }

    return filteredEvents.map((event) => <TransparentCard key={event.id} event={event} />);
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div 
        className={`${styles.mainContainer} ${!showFilters ? styles.filtersHidden : ''}`} 
        style={{ position: "relative", marginTop: "30px" }}
      >
        <VideoBackground url={BACKGROUNDS.Events} />

        {/* Left SVG Border */}
        <div className={styles.svgLeftBorder}>
          <svg
            width="131"
            height="952"
            viewBox="0 0 131 952"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleFilters}
          >
            <path
              d="M130.202 206.071V-79H106.06V120.547L-14.6497 263.087V690.697L106.06 833.237V1032.78H130.202V747.713L81.918 690.697V263.087L130.202 206.071Z"
              fill="url(#paint0_linear_90_4922)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_90_4922"
                x1="57.7761"
                y1="1032.78"
                x2="57.7761"
                y2="-79"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FD1D26" />
                <stop offset="1" stopColor="#0D4FF2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Toggle Button for Hidden Filters */}
        {!showFilters && (
          <div className={styles.toggleButton} onClick={toggleFilters}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fbff00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        )}

        {/* Centered Competitions Heading */}
        <h2 className={styles["centered-heading"]}>COMPETITIONS</h2>

        {/* Filters Section */}
        {showFilters && (
          <div className={styles.filtersSection}>
            <div className={styles.filters}>
              <div className={styles["filter-heading"]}>FILTERS</div>
              <div className={styles["main-filters"]}>
                {Object.keys(initialFilters).map((key, id) => (
                  <Chip
                    key={id}
                    label={key}
                    color="secondary"
                    variant={filters[key] ? "filled" : "outlined"}
                    icon={<LoyaltyIcon />}
                    clickable
                    sx={{ mr: 1, mb: 1, fontWeight: 600 }}
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        [key]: !prev[key],
                      }))
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Competitions Section */}
        <div className={`${styles.competitionsSection} ${!showFilters ? styles.fullWidth : ""}`}>
          <div className={styles.eventsSection}>
            <div className={styles["event-nav"]}>
              <NavLink
                className={`${styles["event-sub-heading"]} ${
                  active === "CULTURAL" ? "" : styles["isNotActive"]
                }`}
                to="#"
                onClick={() => setIsActive("CULTURAL")}
              >
                CULTURAL
              </NavLink>
              <NavLink
                className={`${styles["event-sub-heading"]} ${
                  active === "TECHNICAL" ? "" : styles["isNotActive"]
                }`}
                onClick={() => setIsActive("TECHNICAL")}
                to="#"
              >
                TECHNICAL
              </NavLink>
            </div>
            <div className={styles["event-content"]}>{renderEvents()}</div>
          </div>
        </div>
      </div>

      {/* Jam Section */}
      <div
        className="jam"
        style={{
          position: "fixed",
          zIndex: 100,
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
              position: "absolute",
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

export default Competitions;
