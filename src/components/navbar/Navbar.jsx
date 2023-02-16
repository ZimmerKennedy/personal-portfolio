import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="left-side-navbar">
          <span className="left-side-navbar-items font3">ZIMMER KENNEDY</span>
          <span className="left-side-navbar-items font3">
            FULL STACK DEVELOPER
          </span>
        </div>
        <div className="right-side-navbar">
          <span className="right-side-navbar-items">About</span>
          <span className="right-side-navbar-items">Projects</span>
          <span className="right-side-navbar-items">Contact</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
