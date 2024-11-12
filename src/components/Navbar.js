import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Bank of React</h1>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/userProfile" activeClassName="active">
          User Profile
        </NavLink>
        <NavLink to="/credits" activeClassName="active">
          Credits
        </NavLink>
        <NavLink to="/debits" activeClassName="active">
          Debits
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
