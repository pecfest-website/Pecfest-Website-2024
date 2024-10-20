import { useEffect, useState } from "react";
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
    "Dance": true,
    "Music": true,
    "Coding": true,
    "Fun": true,
    "Hardware": true,
    "Dramatics": true,
    "Gaming": true,
    "Cinematography": true
  };
  
  const [filters, setFilters] = useState(initialFilters);
  
  const queryParams = new URLSearchParams(location.search);
  const defaultEvent = queryParams.get('default') || 'CULTURAL'; 
  
  const [active, setIsActive] = useState(defaultEvent);
  
  const [events, setEvents] = useState({
    CULTURAL: [],
    TECHNICAL: []
  });
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("default", active);
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
  }, [active, location.pathname, location.search, navigate]);
  

  
  
  const getEvents = async () => {
    let data = [];
    const res = await axios.post(
      "https://api.pecfest.org/event/list",
      {
        filters: {
          eventType: "CULTURAL",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data.statusCode === 200) {
      data.CULTURAL = res.data.data.events;
    }
    const res2 = await axios.post(
      "https://api.pecfest.org/event/list",
      {
        filters: { eventType: "TECHNICAL" },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res2.data.statusCode === 200) {
      data.TECHNICAL = res2.data.data.events;
    }
    console.log(data);
    setEvents(data);
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "30px" }}>
        <VideoBackground url={BACKGROUNDS.Events} />
        <div className={styles.events}>
          
          <div className={styles["shadow-region"]}>
            <svg
              width="233"
              height="25"
              viewBox="0 0 233 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block absolute top-32 left-5 text-yellow-100 filter drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"

            >
              <path
                d="M221.745 24.7843C215.527 24.7843 210.495 19.4198 210.495 12.8361C210.495 6.25243 215.546 0.887939 221.745 0.887939C227.944 0.887939 232.995 6.25243 232.995 12.8361C232.995 19.4198 227.944 24.7843 221.745 24.7843ZM221.745 6.98394C218.703 6.98394 216.235 9.60523 216.235 12.8361C216.235 16.067 218.703 18.6883 221.745 18.6883C224.787 18.6883 227.256 16.067 227.256 12.8361C227.256 9.60523 224.787 6.98394 221.745 6.98394ZM169.34 24.7843C163.141 24.7843 158.09 19.4198 158.09 12.8361C158.09 6.25243 163.141 0.887939 169.34 0.887939C175.539 0.887939 180.59 6.25243 180.59 12.8361C180.59 19.4198 175.539 24.7843 169.34 24.7843ZM169.34 6.98394C166.298 6.98394 163.83 9.60523 163.83 12.8361C163.83 16.067 166.298 18.6883 169.34 18.6883C172.382 18.6883 174.851 16.067 174.851 12.8361C174.851 9.60523 172.382 6.98394 169.34 6.98394ZM116.935 24.7843C110.717 24.7843 105.685 19.4198 105.685 12.8361C105.685 6.25243 110.736 0.887939 116.935 0.887939C123.134 0.887939 128.186 6.25243 128.186 12.8361C128.186 19.4198 123.134 24.7843 116.935 24.7843ZM116.935 6.98394C113.893 6.98394 111.425 9.60523 111.425 12.8361C111.425 16.067 113.893 18.6883 116.935 18.6883C119.978 18.6883 122.446 16.067 122.446 12.8361C122.446 9.60523 119.978 6.98394 116.935 6.98394ZM64.5305 24.7843C58.3124 24.7843 53.2804 19.4198 53.2804 12.8361C53.2804 6.25243 58.3315 0.887939 64.5305 0.887939C70.7296 0.887939 75.7807 6.25243 75.7807 12.8361C75.7807 19.4198 70.7296 24.7843 64.5305 24.7843ZM64.5305 6.98394C61.4884 6.98394 59.0203 9.60523 59.0203 12.8361C59.0203 16.067 61.4884 18.6883 64.5305 18.6883C67.5727 18.6883 70.0408 16.067 70.0408 12.8361C70.0408 9.60523 67.5727 6.98394 64.5305 6.98394ZM12.1259 24.7843C5.92681 24.7843 0.875732 19.4198 0.875732 12.8361C0.875732 6.25243 5.92681 0.887939 12.1259 0.887939C18.3249 0.887939 23.376 6.25243 23.376 12.8361C23.376 19.4198 18.3249 24.7843 12.1259 24.7843ZM12.1259 6.98394C9.08373 6.98394 6.61559 9.60523 6.61559 12.8361C6.61559 16.067 9.08373 18.6883 12.1259 18.6883C15.168 18.6883 17.6361 16.067 17.6361 12.8361C17.6361 9.60523 15.168 6.98394 12.1259 6.98394Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="233"
              height="25"
              viewBox="0 0 233 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block absolute bottom-32 right-5 text-yellow-100 filter drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
            >
              <path
                d="M221.745 24.7843C215.527 24.7843 210.495 19.4198 210.495 12.8361C210.495 6.25243 215.546 0.887939 221.745 0.887939C227.944 0.887939 232.995 6.25243 232.995 12.8361C232.995 19.4198 227.944 24.7843 221.745 24.7843ZM221.745 6.98394C218.703 6.98394 216.235 9.60523 216.235 12.8361C216.235 16.067 218.703 18.6883 221.745 18.6883C224.787 18.6883 227.256 16.067 227.256 12.8361C227.256 9.60523 224.787 6.98394 221.745 6.98394ZM169.34 24.7843C163.141 24.7843 158.09 19.4198 158.09 12.8361C158.09 6.25243 163.141 0.887939 169.34 0.887939C175.539 0.887939 180.59 6.25243 180.59 12.8361C180.59 19.4198 175.539 24.7843 169.34 24.7843ZM169.34 6.98394C166.298 6.98394 163.83 9.60523 163.83 12.8361C163.83 16.067 166.298 18.6883 169.34 18.6883C172.382 18.6883 174.851 16.067 174.851 12.8361C174.851 9.60523 172.382 6.98394 169.34 6.98394ZM116.935 24.7843C110.717 24.7843 105.685 19.4198 105.685 12.8361C105.685 6.25243 110.736 0.887939 116.935 0.887939C123.134 0.887939 128.186 6.25243 128.186 12.8361C128.186 19.4198 123.134 24.7843 116.935 24.7843ZM116.935 6.98394C113.893 6.98394 111.425 9.60523 111.425 12.8361C111.425 16.067 113.893 18.6883 116.935 18.6883C119.978 18.6883 122.446 16.067 122.446 12.8361C122.446 9.60523 119.978 6.98394 116.935 6.98394ZM64.5305 24.7843C58.3124 24.7843 53.2804 19.4198 53.2804 12.8361C53.2804 6.25243 58.3315 0.887939 64.5305 0.887939C70.7296 0.887939 75.7807 6.25243 75.7807 12.8361C75.7807 19.4198 70.7296 24.7843 64.5305 24.7843ZM64.5305 6.98394C61.4884 6.98394 59.0203 9.60523 59.0203 12.8361C59.0203 16.067 61.4884 18.6883 64.5305 18.6883C67.5727 18.6883 70.0408 16.067 70.0408 12.8361C70.0408 9.60523 67.5727 6.98394 64.5305 6.98394ZM12.1259 24.7843C5.92681 24.7843 0.875732 19.4198 0.875732 12.8361C0.875732 6.25243 5.92681 0.887939 12.1259 0.887939C18.3249 0.887939 23.376 6.25243 23.376 12.8361C23.376 19.4198 18.3249 24.7843 12.1259 24.7843ZM12.1259 6.98394C9.08373 6.98394 6.61559 9.60523 6.61559 12.8361C6.61559 16.067 9.08373 18.6883 12.1259 18.6883C15.168 18.6883 17.6361 16.067 17.6361 12.8361C17.6361 9.60523 15.168 6.98394 12.1259 6.98394Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="86"
              height="91"
              viewBox="0 0 86 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block absolute top-32 right-10 text-pink-100 filter drop-shadow-[0_0_8px_rgba(255,0,102,1)]"
            >
              <path
                d="M43.2626 90.8855C41.6746 90.8855 40.3927 89.5241 40.3927 87.8375C40.3927 59.7756 30.0992 48.8434 3.67675 48.8434C2.08872 48.8434 0.806824 47.482 0.806824 45.7954C0.806824 44.1088 2.08872 42.7474 3.67675 42.7474C30.0992 42.7474 40.3927 31.8152 40.3927 3.75332C40.3927 2.06676 41.6746 0.705322 43.2626 0.705322C44.8506 0.705322 46.1325 2.06676 46.1325 3.75332C46.1325 31.8152 56.426 42.7474 82.8485 42.7474C84.4365 42.7474 85.7184 44.1088 85.7184 45.7954C85.7184 47.482 84.4365 48.8434 82.8485 48.8434C56.426 48.8434 46.1325 59.7756 46.1325 87.8375C46.1325 89.5241 44.8506 90.8855 43.2626 90.8855ZM24.1489 45.7751C33.7345 49.2701 39.9526 55.8944 43.2626 66.0747C46.5535 55.8944 52.7908 49.2904 62.3764 45.7751C52.7908 42.28 46.5726 35.6557 43.2626 25.4754C39.9526 35.6557 33.7345 42.2597 24.1489 45.7751Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="86"
              height="91"
              viewBox="0 0 86 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block absolute bottom-32 left-10 text-pink-100 filter drop-shadow-[0_0_8px_rgba(255,0,102,1)]"
            >
              <path d="M43.2626 90.8855C41.6746 90.8855 40.3927 89.5241 40.3927 87.8375C40.3927 59.7756 30.0992 48.8434 3.67675 48.8434C2.08872 48.8434 0.806824 47.482 0.806824 45.7954C0.806824 44.1088 2.08872 42.7474 3.67675 42.7474C30.0992 42.7474 40.3927 31.8152 40.3927 3.75332C40.3927 2.06676 41.6746 0.705322 43.2626 0.705322C44.8506 0.705322 46.1325 2.06676 46.1325 3.75332C46.1325 31.8152 56.426 42.7474 82.8485 42.7474C84.4365 42.7474 85.7184 44.1088 85.7184 45.7954C85.7184 47.482 84.4365 48.8434 82.8485 48.8434C56.426 48.8434 46.1325 59.7756 46.1325 87.8375C46.1325 89.5241 44.8506 90.8855 43.2626 90.8855ZM24.1489 45.7751C33.7345 49.2701 39.9526 55.8944 43.2626 66.0747C46.5535 55.8944 52.7908 49.2904 62.3764 45.7751C52.7908 42.28 46.5726 35.6557 43.2626 25.4754C39.9526 35.6557 33.7345 42.2597 24.1489 45.7751Z" fill="white" />
            </svg>

            <div className={styles["glow-border-blue"]} />
            <div className={styles["event-heading"]}>COMPETITIONS</div>
            <div className={styles["glow-border-pink"]} />
            
            <div style={{display:"flex", flexDirection:"row", width:"100vw"}}>
              <div className={styles.filters}>
                <div className={styles['filter-content']}>
                  <div className={styles['filter-heading']}>FILTERS</div>
                  <div className={styles['main-filters']}>
                    {
                      Object.keys(initialFilters).map((key, id) => 
                        <Chip
                          key={id}
                          label={key}
                          color="secondary"
                          variant={filters[`${key}`] ? "filled" : "outlined"}
                          icon={<LoyaltyIcon />}
                          clickable
                          sx={{ mr: 1, fontWeight: 600 }}
                          onClick={() => {setFilters(prev => ({
                              ...prev,
                              [key]: !prev[key]
                          }));}}
                        />
                      )
                    }
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <NavLink
                    className={`${styles["event-sub-heading"]} ${active !== "CULTURAL" ? styles["isNotActive"] : ""
                      }`}
                    to="#"
                    onClick={() => {
                      setIsActive("CULTURAL");
                    }}
                  >
                    CULTURAL
                  </NavLink>
                  <NavLink
                    className={`${styles["event-sub-heading"]} ${active !== "TECHNICAL" ? styles["isNotActive"] : ""
                      }`}
                    onClick={() => {
                      setIsActive("TECHNICAL");
                    }}
                    to="#"
                  >
                    TECHNICAL
                  </NavLink>
                </div>
                <div className={styles["event-content"]}>
                  {events[`${active}`].map((event) => {
                    const shouldDisplay = event["tags"].some((tag) =>
                      Object.keys(filters).some((filterKey) => filters[filterKey] && filterKey === tag)
                    );

                    return shouldDisplay ? <TransparentCard key={event.id} event={event} /> : null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
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