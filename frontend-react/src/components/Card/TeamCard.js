import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './TeamCard.css';

function TeamCard({ name, committee, instagram, linkedin, photo, email, contact }) {
  const card = document.querySelector(".box");  // Selecting the box class
  const THRESHOLD = 15;

  function handleHover(e) {
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;

      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

      currentTarget.style.transform =
          `perspective(${currentTarget.clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  }

  function resetStyles(e) {
      e.currentTarget.style.transform =
          `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }

  const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");

  if (!motionMatchMedia.matches) {
      card?.addEventListener("mousemove", handleHover);
      card?.addEventListener("mouseleave", resetStyles);
  }
  
  return (
    <div className="box">
      {/* Image inside the circular box */}
      <img
        src={photo}
        alt="Image Description"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
      />
      
      {/* Overlay that appears on hover */}
      <div className="overlay">
        <div>{name}</div>
        <div>{committee}</div>
        <div className="social-icons">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          )}
          <a href={`mailto:${email}`}>
            <FaEnvelope />
          </a>
          <a href={`tel:${contact}`}>
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
