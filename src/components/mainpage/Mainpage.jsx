import React, { useRef, useEffect } from "react";
import About from "../about/About";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar"
import "./mainpage.css";
import Projects from "../projects/Projects";
const Mainpage = () => {
  return ( 
<div className="container">
  <div id="section1" className="section" name="section1">
    <Home />
  </div>

  <div id="section2" className="section" name="section2">
    <About />
  </div>

  <div id="section3" className="section" name="section3">
    <Projects />
  </div>
</div> 
  );
};

export default Mainpage;

