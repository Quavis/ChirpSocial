import React from 'react';
import { Link } from "react-router-dom";
import Chirps from './Chirps';
import BioSidebar from './BioSidebar';
import Profile from './Profile';
import logo from '../bird.png'
const Header = (props) => (
  <header className="App-header">
    <ul className="container">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/new">New Chirp</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>

    <div className="profile-container">
      <Link to="/" title="Home">
        <img src={logo} alt="logo" className="logo" style={{width:'50px',height:'50px'}}/>
      </Link>
    </div>
  </header>
);

export default Header;