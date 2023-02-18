import React, { useRef, useEffect } from "react";
import About from "../about/About";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar"
import "./Mainpage.css";
import Projects from "../projects/Projects";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Mainpage = () => {
  return ( 
    <div className="container">
      {/* <Parallax pages={3}>
        <ParallaxLayer> */}
          <div id="section1" className="section">
            <Home />
          </div>
        {/* </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}> */}
          <div id="section2" className="section">
            <About />
          </div>
        {/* </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.1}> */}
          <div id="section3" className="section">
            <Projects />
          </div>
        {/* </ParallaxLayer>
      </Parallax> */}
    </div> 
  );
};

export default Mainpage;

