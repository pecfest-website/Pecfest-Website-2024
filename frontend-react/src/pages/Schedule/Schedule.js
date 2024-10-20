import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/Navbar';
import VideoBackground from '../../components/VideoBackground';
import { BACKGROUNDS } from '../../utils/backgrounds';
import { motion } from 'framer-motion';
import './schedule.css';

function Schedule({ setIsJamming, isJamming }) {
  const [activeTab, setActiveTab] = useState('day1');
  const [events, setEvents] = useState([]);

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

    return {
      column25: (
        <div>
          {dayEvents.map((event) => (
            <motion.div
              key={event.id}
              className="glass-container"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={eventItemVariants}
              transition={{ duration: 0.5 }}
            >
              {combineDateTime(event.startDate, event.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </motion.div>
          ))}
        </div>
      ),
      column75: (
        <div>
          {dayEvents.map((event) => (
            <motion.div
              key={event.id}
              className="glass-container"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={eventItemVariants}
              transition={{ duration: 0.5 }}
            >
              {event.name}
            </motion.div>
          ))}
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

        {/* Long rectangle with glass background */}
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
      </div>
    </>
  );
}

export default Schedule;
