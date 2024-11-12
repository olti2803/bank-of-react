import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Bank of React</h1>
      <div className="navbar-links">
        <Link to="/">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/userProfile">
          <i className="fas fa-user"></i> User Profile
        </Link>
        <Link to="/credits">
          <i className="fas fa-credit-card"></i> Credits
        </Link>
        <Link to="/debits">
          <i className="fas fa-money-bill-wave"></i> Debits
        </Link>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
