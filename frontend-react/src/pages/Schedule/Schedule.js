import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/Navbar';
import VideoBackground from '../../components/VideoBackground';
import { BACKGROUNDS } from '../../utils/backgrounds';
import { motion } from 'framer-motion';
import './schedule.css';
import loaderVideo from './vid2.mp4'

function Schedule({ setIsJamming, isJamming }) {
  const [activeTab, setActiveTab] = useState('day1');
  const [events, setEvents] = useState([]);
  const [isLoaderPlaying, setIsLoaderPlaying] = useState(true); // Loader plays initially
  const [isFadingOut, setIsFadingOut] = useState(false); // Fade-out state
  const videoRef = useRef(null); // Reference for the video element

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleTimeUpdate = () => {
        // Trigger fade-out when the video reaches half of its duration
        if (videoElement.currentTime >= videoElement.duration / 2) {
          setIsFadingOut(true); // Start fade-out effect
          setTimeout(() => {
            setIsLoaderPlaying(false); // Hide loader after fade-out
          }, 1000); // 1000ms for the fade-out duration
        }
      };

      videoElement.addEventListener('timeupdate', handleTimeUpdate);

      // Clean up event listener on unmount
      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);
  // Fetch events from the backend using axios on component mount
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.post("https://api.pecfest.org/event/list", {}, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.data && response.data.data && response.data.data.events) {
          setEvents(response.data.data.events);
        } else {
          console.error("Unexpected response structure: ", response.data);
        }
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    }

    fetchdata();
  }, []);

  // Helper function to combine date and time fields
  const combineDateTime = (date, time) => {
    return new Date(`${date}T${time}:00`);
  };

  // Filter and sort events for specific days
  const getEventsForDay = (dateString) => {
    const filteredEvents = events
      .filter((event) => {
        const eventDate = new Date(event.startDate).toDateString();
        return eventDate === new Date(dateString).toDateString();
      })
      .sort((a, b) => {
        const aDateTime = combineDateTime(a.startDate, a.startTime);
        const bDateTime = combineDateTime(b.startDate, b.startTime);
        return aDateTime - bDateTime;
      });

    return filteredEvents;
  };

  // Framer Motion animation variants for event items
  const eventItemVariants = {
    hidden: { opacity: 0, y: 20 }, // Event starts hidden and slightly below the view
    visible: { opacity: 1, y: 0 }, // Event becomes visible and moves to original position
  };

  const getTabDimensions = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      // Mobile dimensions
      return {
        activeWidth: '300px',
        activeHeight: '60px',
        inactiveWidth: '200px',
        inactiveHeight: '60px',
      };
    } else {
      // Desktop dimensions
      return {
        activeWidth: '200px',
        activeHeight: '80px',
        inactiveWidth: '120px',
        inactiveHeight: '80px',
      };
    }
  };

  // Adjusted animation variants for tabs
  const tabVariants = {
    active: {
      width: getTabDimensions().activeWidth,
      height: getTabDimensions().activeHeight, // Set height for active state
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing function
      },
    },
    inactive: {
      width: getTabDimensions().inactiveWidth,
      height: getTabDimensions().inactiveHeight, // Set height for inactive state
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing function
      },
    },
  };

  // Adjusted animation variants for the grid content
  const gridVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }, // Smoother and slower transition
    exit: { opacity: 0, x: 20, transition: { duration: 0.6, ease: 'easeIn' } },
  };

  const renderDayContent = (day) => {
    let dayEvents = [];

    switch (day) {
      case 'day1':
        dayEvents = getEventsForDay('2024-11-08');
        break;
      case 'day2':
        dayEvents = getEventsForDay('2024-11-09');
        break;
      case 'day3':
        dayEvents = getEventsForDay('2024-11-10');
        break;
      default:
        return {
          column25: <p>No Content Available</p>,
          column75: <p>No Content Available</p>,
        };
    }

    const colors = ['grey', 'black'];

    const isMobile = window.innerWidth <= 768;
    return {
      column25: (
        <div>
          {dayEvents.map((event, index) => {
        
            
            return (
              <motion.div
                key={event.id}
                className="glass-container"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={eventItemVariants}
                transition={{ duration: 0.5 }}
                style={{ background: colors[index%2] }} // Apply the color to both time and title
              >
                {combineDateTime(event.startDate, event.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </motion.div>
            );
          })}
        </div>
      ),
      column75: (
        <div>
          {dayEvents.map((event, index) => {
          // Ensure the same color is used for the title
  
            return (
              <motion.div
                key={event.id}
                className="glass-container"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={eventItemVariants}
                transition={{ duration: 0.5 }}
                style={{ background: colors[index%2] }} // Apply the same color to both time and title
              >
                {event.name}
              </motion.div>
            );
          })}
        </div>
      ),
    };
  };
  
  


  const content = renderDayContent(activeTab);

  return (
    <>
      <div>
        <NavBar />
        <VideoBackground url={BACKGROUNDS.AboutUs} />
        {isLoaderPlaying && (
          <div style={{ ...styles.loaderContainer, opacity: isFadingOut ? 0 : 1 }}>
            <video
              ref={videoRef} // Attach reference to the video element
              autoPlay
              muted
              playsInline
              style={styles.loaderVideo}
            >
              <source src={loaderVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Long rectangle with glass background */}

        {!isLoaderPlaying && (
          <div className="schedule-container">
            <div className="long-rectangle">
              <div className="tabs">
                <motion.button
                  className={`tab-button ${activeTab === 'day1' ? 'active' : ''}`}
                  onClick={() => setActiveTab('day1')}
                  variants={tabVariants}
                  animate={activeTab === 'day1' ? 'active' : 'inactive'}
                  whileHover={{ scale: 1.05 }} // Add hover scale for smoother interaction
                >
                  Day 1
                </motion.button>
                <motion.button
                  className={`tab-button ${activeTab === 'day2' ? 'active' : ''}`}
                  onClick={() => setActiveTab('day2')}
                  variants={tabVariants}
                  animate={activeTab === 'day2' ? 'active' : 'inactive'}
                  whileHover={{ scale: 1.05 }} // Add hover scale for smoother interaction
                >
                  Day 2
                </motion.button>
                <motion.button
                  className={`tab-button ${activeTab === 'day3' ? 'active' : ''}`}
                  onClick={() => setActiveTab('day3')}
                  variants={tabVariants}
                  animate={activeTab === 'day3' ? 'active' : 'inactive'}
                  whileHover={{ scale: 1.05 }} // Add hover scale for smoother interaction
                >
                  Day 3
                </motion.button>
              </div>
            </div>

            {/* Below rectangle grid */}
            <motion.div
              key={activeTab}
              className="grid-container"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={gridVariants}
            >
              <motion.div
                className="column-25"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Content for the 25% column */}
                {content.column25}
              </motion.div>
              <motion.div
                className="column-75"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Content for the 75% column */}
                {content.column75}
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  blackOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black overlay with 70% opacity
    zIndex: -1, // Ensure it's behind content but above the background video
  },
  loaderContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    transition: 'opacity 1s ease-in-out', // Smooth fade-out transition
    zIndex: 2, // Ensure the loader is above the overlay
  },
  loaderVideo: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
  },
  title: {
    color: 'white',
    fontSize: '3.5rem',
    marginBottom: '40px', // Adjust this to add more space below the title
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '100px', // Space between cards
    marginTop: '20px',
  },
};


export default Schedule;
