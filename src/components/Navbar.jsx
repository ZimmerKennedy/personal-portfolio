import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="left-side-navbar">
              <span className="left-side-navbar-items font3">
                ZIMMER KENNEDY
              </span>
              <span className="left-side-navbar-items font3">
                FULL STACK DEVELOPER
              </span>
            </div>
            <div className="right-side-navbar">
              <span className="right-side-navbar-items">Projects</span>
              <span className="right-side-navbar-items">About</span>
              <span className="right-side-navbar-items">Contact</span>
            </div>
          </div>
    </div>
  )
}

export default Navbar