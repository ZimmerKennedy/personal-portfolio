import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="left-side-navbar">
          <span className="left-side-navbar-items font3">
            ZIMMER KENNEDY
          </span>
          <span className="left-side-navbar-items font3">
            FULL STACK DEVELOPER
          </span>
        </div>

        {/* Render hamburger menu only on small screens */}
        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={handleToggleNavbar} />
        </div>

        {/* Render navbar items on large screens */}
        <div className={`right-side-navbar ${toggleNavbar ? "show" : ""}`}>
          <span className="right-side-navbar-items">About</span>
          <span className="right-side-navbar-items">Projects</span>
          <span className="right-side-navbar-items">Contact</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;