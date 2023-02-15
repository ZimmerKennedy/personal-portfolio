import React from "react";
import "./home.css"

function App() {
  return (
        <div className="container">
          <div className="navbar">
            <div className="left-side-navbar">
              <span className="left-side-navbar-items font3">
                ZIMMER KENNEDY
              </span>
              <span className="left-side-navbar-items font3">
                JUNIOR WEB DEVELOPER
              </span>
            </div>
            <div className="right-side-navbar">
              <span className="right-side-navbar-items">Projects</span>
              <span className="right-side-navbar-items">About</span>
              <span className="right-side-navbar-items">Contact</span>
            </div>
          </div>
          <section className="contents font2">
            <div className="left-side-contents">
              <div className="left-side-content-items">I Have not failed.</div>
              <div className="left-side-content-items">
                I've just found 10,000 ways that won't work.
              </div>
              <div className="left-side-content-items">-Thomas Edison</div>
            </div>
            <div className="right-side-contents">
              <div className="right-side-content-items">Zimmer Kennedy</div>
              <div className="right-side-content-items">
                A Junior Web Developer
              </div>
              <div className="right-side-content-items">
                Creating Solutions, One Code at a Time
              </div>
            </div>
          </section>
        </div>
  );
}

export default App;