// src/components/Contact.jsx
import React from 'react';
import './Contact.css'; // Assurez-vous d'avoir un fichier CSS séparé pour ce composant

const Contact = ({ name, profileImage, isOnline }) => {
  return (
    <div className="contact">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <div className="contact-details">
        <h3>{name}</h3>
        <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      </div>
    </div>
  );
};

export default Contact;