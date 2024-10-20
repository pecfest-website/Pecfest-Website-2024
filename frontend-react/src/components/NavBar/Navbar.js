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
        <NavLink to="/AboutUs">About</NavLink>
        <NavLink to="/competitions">Competitions</NavLink>
        <NavLink to="/developers">Developers</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/sponsor">Sponsors</NavLink>
        <img className={styles.logo}
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }} 
          src="https://res.cloudinary.com/dfjuxpxff/image/upload/v1728933328/logo_mmk5y8.png" alt="Logo" 
           />
        <NavLink to="#schedule">Schedule</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <button onClick={handleDownload}>Brochure</button>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>

      <nav className={`${isOpen ? styles.mini : styles.miniNav}`}>
        <img src="https://res.cloudinary.com/dfjuxpxff/image/upload/v1728933328/logo_mmk5y8.png" alt="Logo" className={styles.img} onClick={handleLogoClick}
          style={{ cursor: 'pointer' }} />
        {isOpen ? (
          <></>
        ) : (
          <button onClick={toggleMenu} className={styles.hamburger}>
            ☰
          </button>
        )}

        <div className={`${isOpen ? styles.active : styles.links}`}>
          <button onClick={toggleMenu} className={styles.hamburg}>
            ×
          </button>
          <NavLink onClick={toggleMenu} to="/AboutUs">About</NavLink>
          <NavLink onClick={toggleMenu} to="#about">Developers</NavLink>
          <NavLink onClick={toggleMenu} to="#competitions">Competitions</NavLink>
          <NavLink onClick={toggleMenu} to="/events">Events</NavLink>
          <NavLink onClick={toggleMenu} to="/sponsor">Sponsors</NavLink>
          <NavLink onClick={toggleMenu} to="#schedule">Schedule</NavLink>
          <NavLink onClick={toggleMenu} to="/team">Team</NavLink>
          <NavLink onClick={toggleMenu} to="/gallery">Gallery</NavLink>
          <NavLink onClick={handleDownload} to="">Brochure</NavLink>
          <NavLink onClick={toggleMenu} to="/contact">Contact</NavLink>
          <NavLink onClick={toggleMenu} to="/login">Login</NavLink>
        </div>
      </nav>
      <div className={styles.hgt}></div>
    </>
  );
};

export default NavBar;
