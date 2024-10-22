import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import brochure from "../../utils/brochure/brochure.pdf";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
     <nav className={styles.nav}>
      <NavLink 
        to="/AboutUs" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
      >
        About
      </NavLink>
      <NavLink 
        to="/competitions" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
      >
        Competitions
      </NavLink>
      <NavLink 
        to="/developers" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
      >
        Developers
      </NavLink>
      <NavLink 
        to="/events" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
      >
        Events
      </NavLink>
      <NavLink 
        to="/sponsor" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
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
      >
        Schedule
      </NavLink>
      <NavLink 
        to="/team" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
      >
        Team
      </NavLink>
      <NavLink 
        to="/gallery" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
      >
        Gallery
      </NavLink>
      <button onClick={handleDownload}>Brochure</button>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
      >
        Contact
      </NavLink>
      <NavLink 
        to="/login" 
        className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
      >
        Login
      </NavLink>
    </nav>

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
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/AboutUs">About</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/developers">Developers</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/competitions">Competitions</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/events">Events</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/sponsor">Sponsors</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/schedule">Schedule</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/team">Team</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/gallery">Gallery</NavLink>
          <NavLink onClick={handleDownload} to="">Brochure</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/contact">Contact</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? `${styles.activeLink}` : ''} to="/login">Login</NavLink>
        </div>
      </nav>
      <div className={styles.hgt}></div>
    </>
  );
};

export default NavBar;
