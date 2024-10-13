// NavBar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
// import 
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.linksLeft}>
        <NavLink  to="/AboutUs">About</NavLink>
        <NavLink  to="#about">Developers</NavLink>
        <NavLink  to="#competitions">Competitions</NavLink>
        <NavLink  to="#events">Events</NavLink>
     
      </div>
      <img src="logo.png" alt="Logo" className={styles.logo} /> {/* Update with your logo path */}
      <div className={styles.linksRight}>
      <NavLink  to="#sponsors">Sponsors</NavLink>
        <NavLink  to="#schedule">Schedule</NavLink>
        <NavLink  to="#team">Team</NavLink>
        <NavLink  to="/gallery">Gallery</NavLink>
        <NavLink to="#brochure">Brochure</NavLink>
        <NavLink to="#contact">Contact</NavLink>
        <NavLink to="#login">Login</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
