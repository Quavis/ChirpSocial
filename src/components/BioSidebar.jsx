 import React from "react";
import "./BioSidebar.css";

const BioSidebar = () => {
  return (
    <aside className="bio-sidebar">
      <img
        className="bio-photo"
        src="https://ui-avatars.com/api/?name=Quavis+Martin&background=0D8ABC&color=fff&size=128"
        alt="Avatar of Quavis Martin"
      />

      <h2 className="bio-name">Quavis Martin</h2>

      <p className="bio-description">
        Software engineer passionate about building clean and scalable web
        applications. Lover of React, open source, and good coffee.
      </p>

      <div className="social-links">
        <a
          href="https://github.com/yourusername"  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Quavis's GitHub Profile"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Quavis's LinkedIn Profile"
        >
          LinkedIn
        </a>

        <a
          href="mailto:youremail@example.com" 
          aria-label="Send an email to Quavis Martin"
        >
          Email
        </a>
      </div>

      <div>
        

          We would be thrilled if you left a review of the website !
        
      </div>
    </aside>
  );
};

export default BioSidebar;
