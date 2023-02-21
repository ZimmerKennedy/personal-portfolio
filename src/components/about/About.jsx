import React, { useState } from "react";
import "./About.css";
import zimmerProfile from "../../../public/zimmerProfile.png"
const About = () => {

  const [activeCategory, setActiveCategory] = useState("frontend");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div id="about-container">
      <section id="left-section-about">
        <div className="name-tag font3">Hi, I'm Zimmer</div>
        <div className="left-section-contents font3">
          A Full Stack Software Developer who loves turning ideas into reality
          through web development.
        </div>
        <div className="left-section-contents font3">
          I bring a disciplined and determined approach to my work. taking pride
          in writing clean, efficient code and enjoy tackling complex challenges
          to find elegant solutions.
        </div>
        <div className="left-section-contents font3">
        When I'm not coding, You can find me in the
          gym working out, swimming, and or cycling. I believe that a healthy
          body and mind are essential to achieving success in all areas of life.
        </div>
      </section>
      <section id="middle-section-about">
        <img id="profileLogo" src={zimmerProfile} alt="profilePicZimmer" />
      </section>
      <section id="right-section-about">
        <div className="right-section-contents font3">FRONTEND</div>
        <div className="right-section-contents font3">BACKEND</div>
        <div className="right-section-contents font3">MISC</div>
        <div className="frontend-contents">FRONTEND</div>
        <div className="backend-contents">BACKEND</div>
        <div className="misc-contents">MISC</div>
      </section>
    </div>
  );
};

// //         <div className="left-section-contents font3">
// I'm excited to bring my skills and experience to your project and help
// bring your vision to life through clean, efficient, and effective
// code. Let's work together to build something great!
// </div>

export default About;
