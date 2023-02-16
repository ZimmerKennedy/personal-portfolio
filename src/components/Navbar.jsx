import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="left-side-navbar">
          <span className="left-side-navbar-items font3">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-10}
              duration={200}
            >
              ZIMMER KENNEDY
            </Link>
          </span>
          <span className="left-side-navbar-items font3">
            FULL STACK DEVELOPER
          </span>
        </div>
        <div className="right-side-navbar">
          <span className="right-side-navbar-items">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              About
            </Link>
          </span>
          <span className="right-side-navbar-items">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={10}
              duration={200}
            >
              Projects
            </Link>
          </span>
          <span className="right-side-navbar-items">
            <Link
              activeClass="active"
              // to="section3"
              spy={true}
              smooth={true}
              offset={20}
              duration={200}
            >
              Contact
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
