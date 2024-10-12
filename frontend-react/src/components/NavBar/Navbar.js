// NavBar.jsx
import React from 'react';
import styles from './Navbar.module.css';
// import 
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.linksLeft}>
        <a href="#about">About</a>
        <a href="#about">Developers</a>
        <a href="#competitions">Competitions</a>
        <a href="#events">Events</a>
        <a href="#sponsors">Sponsors</a>
      </div>
      <img src="logo.png" alt="Logo" className={styles.logo} /> {/* Update with your logo path */}
      <div className={styles.linksRight}>
        <a href="#schedule">Schedule</a>
        <a href="#team">Team</a>
        <a href="#gallery">Gallery</a>
        <a href="#brochure">Brochure</a>
        <a href="#contact">Contact</a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
