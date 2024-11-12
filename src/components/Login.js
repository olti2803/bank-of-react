import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ mockLogIn }) {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    mockLogIn(userName); // Update the current user in App.js
    navigate("/userProfile"); // Redirect to User Profile page
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
