import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar">
    <div className="nav-brand">
      <i className="fab fa-github nav-logo"></i>
      <Link to="/">
        <h1 className="nav-title">GitHub Finder</h1>
      </Link>
    </div>
    <div className="nav-links">
      <Link to="/about">
        <p className="nav-link">About</p>
      </Link>
    </div>
  </nav>
);

export default Navbar;
