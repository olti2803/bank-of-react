import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  CreditCard,
  DollarSign,
  LogIn,
  Landmark,
} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="logo-animation">
          <Landmark size={24} />
        </div>
        Bank of React
      </Link>
      <div className="navbar-links">
        <Link to="/">
          <Home size={18} /> Home
        </Link>
        <Link to="/userProfile">
          <User size={18} /> User Profile
        </Link>
        <Link to="/credits">
          <CreditCard size={18} /> Credits
        </Link>
        <Link to="/debits">
          <DollarSign size={18} /> Debits
        </Link>
        <Link to="/login">
          <LogIn size={18} /> Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
