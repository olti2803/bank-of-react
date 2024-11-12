import React from "react";

function UserProfile({ userName, memberSince }) {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <p>
          <strong>Username:</strong> {userName}
        </p>
        <p>
          <strong>Member Since:</strong> {memberSince}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
