import React from "react";
import "./home.css";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import { animateScroll as scroll } from 'react-scroll';
import './Mainpage.css';
const Mainpage = () => {


  return (
    
    <>
      <Navbar />
      <div id="section1" className="section">
        <Home />
      </div>
      <div id="section2" className="section">
        <About />
      </div>
      <div id="section3" className="section">
        {/* section 3 content */}
      </div>
    </>       
  );
}

export default Mainpage;

