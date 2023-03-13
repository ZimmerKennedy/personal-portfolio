import React from "react";
import About from "../about/About";
import Home from "../home/Home";
import "./mainpage.css";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Test from "../test/Test";
const Mainpage = () => {
  return ( 
<div id="mainpage-container">
  <div id="section1" className="section" name="section1">
    <Home />
  </div>
  <div id="section2" className="section" name="section2">
    <About />
  </div>
  <div id="section3" className="section" name="section3">
    <Projects />
  </div>
  <div id="section4" className="section" name="section4">
    <Contact />
  </div>
  <div id="sectionTest" className="section" name="sectionTest">
    <Test />
  </div>
</div> 
  );
};

export default Mainpage;

