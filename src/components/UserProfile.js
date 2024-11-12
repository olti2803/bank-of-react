import React from "react";

function UserProfile({ userName, memberSince }) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {userName}</p>
      <p>Member Since: {memberSince}</p>
    </div>
  );
}

export default UserProfile;
