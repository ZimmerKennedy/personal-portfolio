import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="container">
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
          <div className="right-side-content-items">Full Stack Developer</div>
          <div className="right-side-content-items">
            Creating Solutions, One Code at a Time
          </div>
        </div>
        <span className="pernLogo">
          <div class="logo-container">
            <svg
              class="pernLogo"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25,0 L100,100 L75,175 L0,75 Z"
                stroke="#ffffff"
                stroke-width="10"
                fill="none"
              />
            </svg>
          </div>
        </span>
      </section>
    </div>
  );
}

export default Home;
