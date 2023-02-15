import React from "react";
import "./home.css"
import Navbar from "./Navbar";

function Home() {
  return (
        <div className="container">
            <Navbar />
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

export default Home;