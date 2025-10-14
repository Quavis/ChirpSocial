import React from "react";
import "./Profile.css";

const Profile = ({ user }) => {
  // Example user prop shape:
  // {
  //   name: "Quavis Martin",
  //   bio: "Software engineer passionate about building clean and scalable web applications.",
  //   avatarUrl: "https://ui-avatars.com/api/?name=Quavis+Martin&background=0D8ABC&color=fff&size=128",
  //   github: "https://github.com/yourusername",
  //   linkedin: "https://linkedin.com/in/yourusername",
  //   email: "youremail@example.com"
  // }

  return (
  

  <div className="profile-section">
    <img
      className="profile-photo"
      src={user.avatarUrl}
      alt={user.name}
    />
    <h2>{user.name}</h2>
    <p>{user.bio}</p>
    <div className="profile-social-links">
      {user.github && (
        <a href={user.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          GitHub
        </a>
      )}
      {user.linkedin && (
        <a href={user.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          LinkedIn
        </a>
      )}
      {user.email && (
        <a href={`mailto:${user.email}`} aria-label="Email">
          Email
        </a>
      )}
    </div>
  </div>

  );
};
export default Profile;