import React, { useState, useEffect } from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <section className="left-section-about">
        <div className="left-section-contents">Hello</div>
        <div className="left-section-contents">Hello</div>
        <div className="left-section-contents">Hello</div>
      </section>
      <section className="middle-section-about">
        <div className="middle-section-contents">Its Me</div>
        <div className="middle-section-contents">Its Me</div>
        <div className="middle-section-contents">Its Me</div>
      </section>
      <section className="right-section-about">
        <div className="right-section-contents">PERN</div>
        <div className="right-section-contents">PERN</div>
        <div className="right-section-contents">PERN</div>
      </section>
    </div>
  );
};

export default About;
