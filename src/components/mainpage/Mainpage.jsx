import React, { useRef, useEffect } from "react";
import About from "../about/About";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar"
import "./Mainpage.css";
import Projects from "../projects/Projects";
const Mainpage = () => {
  return ( 
    <div className="container">
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

