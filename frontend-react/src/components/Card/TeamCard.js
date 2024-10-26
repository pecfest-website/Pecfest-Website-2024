import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './TeamCard.css';

function TeamCard({ name, committee, instagram, linkedin, photo, email, contact }) {
  return (
    <section className="container">
      <div className="card-container">
        <div className="card-content">
          <img src={photo} alt={`${name}'s profile`} className="profile-photo" />

          {/* Hover overlay with name, committee, and icons */}
          <div className="card-overlay">
            <h3>{name}</h3>
            <p>{committee}</p>
            <div className="social-icons">
              {instagram && (
                <a href={instagram} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`}>
                  <FaEnvelope />
                </a>
              )}
              {contact && (
                <a href={`tel:${contact}`}>
                  <FaPhone />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCard;
