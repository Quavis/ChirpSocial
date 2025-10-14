import React from "react";
import './About.css'
import logo from '../bird.png'

const About = () => {
  return (
    <section className="about container">
      <h1>About Chirps</h1>
      <p>
        Chirps is a simple social platform where you can post, save, and share
        notes — called chirps — with your followers. Whether it’s quick thoughts,
        ideas, or important updates, Chirps makes it easy to stay connected and
        share your voice.
      </p>
      <p>
        Your chirps are saved locally in your browser for quick access, and you
        can edit or delete them anytime. Join the community and start sharing today!
      </p>

       <img src={logo} alt="logo" className="logo" style={{width:'100px',height:'100px',dispaly :'flex', justifyContent: 'center', alignItems: 'center'}} />
    </section>
    
  );
};

export default About;