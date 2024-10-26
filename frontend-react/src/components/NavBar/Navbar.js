import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import brochure from "../../utils/brochure/brochure.pdf";
import bleepSound from './sound.wav'; // Add your sound file path

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false); // State to check if sound can be played
  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = brochure;  // Replace with your PDF file URL
    link.download = 'brochure.pdf';  // Set the downloaded file name
    link.click();
  };

  const playBleepSound = () => {
    if (soundEnabled) {  // Only play sound if user has interacted with the page
      const audio = new Audio(bleepSound);
      audio.play().catch(error => {
        console.log('Error playing sound:', error);
      });
    }
  };

  useEffect(() => {
    // Listen for the first user interaction on the page
    const enableSound = () => {
      setSoundEnabled(true);  // Enable sound after user interaction
      window.removeEventListener('click', enableSound);  // Remove listener after interaction
    };

    // Add event listener for user interaction
    window.addEventListener('click', enableSound);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('click', enableSound);
    };
  }, []);

  return (
    <>
     <nav className={styles.nav1}>
      <NavLink 
        to="/AboutUs" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        About
      </NavLink>
      <NavLink 
        to="/competitions" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Competitions
      </NavLink>
      <NavLink 
        to="/developers" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Developers
      </NavLink>
      <NavLink 
        to="/events" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Events
      </NavLink>
      <NavLink 
        to="/sponsor" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Sponsors
      </NavLink>
      <img 
        className={styles.logo}
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }} 
        src="https://res.cloudinary.com/dfjuxpxff/image/upload/v1728933328/logo_mmk5y8.png" 
        alt="Logo" 
      />
      <NavLink 
        to="/schedule" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Schedule
      </NavLink>
      <NavLink 
        to="/team" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Team
      </NavLink>
      <NavLink 
        to="/gallery" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Gallery
      </NavLink>
      <button className={styles.down} onClick={handleDownload}>Brochure</button>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Contact
      </NavLink>
      {token ? <NavLink 
        to="/profile" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Profile
      </NavLink> :<NavLink 
        to="/login" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        onMouseEnter={playBleepSound} // Add the hover event
      >
        Login
      </NavLink>
      }
    </nav>

    {/* Mobile Navigation */}
      <nav className={`${isOpen ? styles.mini : styles.miniNav}`}>
        <img src="https://res.cloudinary.com/dfjuxpxff/image/upload/v1728933328/logo_mmk5y8.png" alt="Logo" className={styles.img} onClick={handleLogoClick}
          style={{ cursor: 'pointer' }} />
        {isOpen ? (
          <></>
        ) : (
          <p onClick={toggleMenu} className={styles.hamburger}>
            ☰
          </p>
        )}

        <div className={`${isOpen ? styles.active : styles.links}`}>
          <p onClick={toggleMenu} className={styles.hamburg}>
            ×
          </p>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/AboutUs" onMouseEnter={playBleepSound}>About</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/developers" onMouseEnter={playBleepSound}>Developers</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/competitions" onMouseEnter={playBleepSound}>Competitions</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/events" onMouseEnter={playBleepSound}>Events</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/sponsor" onMouseEnter={playBleepSound}>Sponsors</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/schedule" onMouseEnter={playBleepSound}>Schedule</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/team" onMouseEnter={playBleepSound}>Team</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/gallery" onMouseEnter={playBleepSound}>Gallery</NavLink>
          <NavLink onClick={handleDownload} to="">Brochure</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/contact" onMouseEnter={playBleepSound}>Contact</NavLink>
          {token ? 
            <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/profile" onMouseEnter={playBleepSound}>Profile</NavLink>:
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/login" onMouseEnter={playBleepSound}>Login</NavLink>}
        </div>
      </nav>
      <div className={styles.hgt}></div>
    </>
  );
};

export default NavBar;
