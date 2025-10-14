import React from 'react';
import './AccountActivityAside.css';

const AccountActivityAside = () => {
  const activityData = {
    lastLogin: 'October 13, 2025 at 9:42 PM',
    recentPosts: [
      'How I built my portfolio with React 🚀',
      '10 CSS tricks you might not know 💡',
      'Just hit 5K followers! Thank you all 🙌',
    ],
    followers: 5123,
    following: 348,
    newNotifications: 7,
  };

  return (
    <aside className="account-activity-aside">
      <div className="activity-card">
        <h3>Account Activity</h3>
        <p><strong>Last Login:</strong> {activityData.lastLogin}</p>

        <div className="activity-section">
          <h4>Recent Posts</h4>
          <ul>
            {activityData.recentPosts.map((post, index) => (
              <li key={index}>📌 {post}</li>
            ))}
          </ul>
        </div>

        <div className="activity-section">
          <h4>Stats</h4>
          <p>👥 Followers: {activityData.followers}</p>
          <p>🔗 Following: {activityData.following}</p>
          <p>🔔 New Notifications: {activityData.newNotifications}</p>
        </div>
      </div>
    </aside>
  );
};

export default AccountActivityAside;