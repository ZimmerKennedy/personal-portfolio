import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };

  const handleNavItemClick = (sectionId) => {
    setToggleNavbar(false);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div id="navbar-container">
        <div className="left-side-navbar">
          <span className="left-side-navbar-items font3"  onClick={() => handleNavItemClick("section1")}>ZIMMER KENNEDY</span>
          <span className="left-side-navbar-items font3"  onClick={() => handleNavItemClick("section2")}>
            FULL STACK DEVELOPER
          </span>
        </div>

        {/* Render hamburger menu only on small screens */}
        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={handleToggleNavbar} />
        </div>

        {/* Render navbar items on large screens */}
        <div className={`right-side-navbar ${toggleNavbar ? "show" : ""}`}>
          <span className="right-side-navbar-items font3" onClick={() => handleNavItemClick("section1")}>Home</span>
          <span className="right-side-navbar-items font3" onClick={() => handleNavItemClick("section2")}>About</span>
          <span className="right-side-navbar-items font3" onClick={() => handleNavItemClick("section3")}>Projects</span>
          <span className="right-side-navbar-items font3" onClick={() => handleNavItemClick("section4")}>Contact</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;