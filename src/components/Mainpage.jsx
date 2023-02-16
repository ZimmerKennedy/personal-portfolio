import React, { useRef, useEffect } from "react";
import "./home.css";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import "./Mainpage.css";
import Projects from "./Projects";

const Mainpage = () => {
  return (
    <div className="container">
      <Navbar />
      <div id="section1" className="section">
        <Home />
      </div>
      <div id="section2" className="section">
        <About />
      </div>
      <div id="section3" className="section">
        <Projects />
      </div>
    </div>
  );
};

export default Mainpage;