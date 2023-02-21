import React, { useState } from "react";
import "./About.css";
import zimmerProfile from "../../../public/zimmerProfile.png";
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
        <img id="profileLogo" draggable="false" src={zimmerProfile} alt="profilePicZimmer" />
      </section>
      <section id="right-section-about">
        <div id="right-section-contents-wrapper">
        <div className="right-section-contents ha font3" onClick={() => handleCategoryClick("frontend")}>FRONTEND</div>
        <div className="right-section-contents font3" onClick={() => handleCategoryClick("backend")}>BACKEND</div>
        <div className="right-section-contents  font3" onClick={() => handleCategoryClick("misc")}>MISC</div>
        </div>
        <div id="right-section-render-contents-wrapper">

        {activeCategory === "frontend" && <div id="frontend-contents">
            <div className="render-images-container">
               <img className="frontend-images" draggable="false" src="/frontendImg/htmlLogo.png" alt="HtmlLogo"/>
               <img className="frontend-images" draggable="false" src="/frontendImg/cssLogo.png" alt="CSSLogo" />
               <img className="frontend-images" draggable="false" src="/frontendImg/jsLogo.png" alt="JSLogo" />
               <img className="frontend-images" draggable="false" src="/frontendImg/reactLogo.png" alt="ReactLogo" />
               <img className="frontend-images" draggable="false" src="/frontendImg/reduxLogo.png" alt="ReduxLogo" />
               <img className="frontend-images" draggable="false" src="/frontendImg/styledComponentsLogo.png" alt="styledComponentsLogo" />
               <img className="frontend-images" draggable="false" src="/frontendImg/tailwindLogo.png" alt="TailwindLogo" />
            </div>
          </div>}
        {activeCategory === "backend" && <div id="backend-contents">
        <div children="render-images-container">
               <img className="backend-images" draggable="false" src="/backendImg/expressLogo.png" alt="ExpressLogo"/>
               <img className="backend-images" draggable="false" src="/backendImg/nodejsLogo.png" alt="NodeJsLogo" />
               <img className="backend-images" draggable="false" src="/backendImg/psqlLogo.png" alt="PSQLLogo" />
            </div>
          </div>}
        {activeCategory === "misc" && <div id="misc-contents">
        <div className="render-images-container">
               <img className="misc-images" draggable="false" src="/miscImg/apisLogo.png" alt="apisLogo"/>
               <img className="misc-images" draggable="false" src="/miscImg/bashLogo.png" alt="bashLogo" />
               <img className="misc-images" draggable="false" src="/miscImg/excalidrawLogo.png" alt="excalidrawLogo" />
               <img className="misc-images" draggable="false" src="/miscImg/figmaLogo.png" alt="figmaLogo" />
               <img className="misc-images" draggable="false" src="/miscImg/githubLogo.png" alt="githubLogo" />
               <img className="misc-images" draggable="false" src="/miscImg/gitLogo.png" alt="gitLogo" />
               <img className="misc-images" draggable="false" src="/miscImg/npmLogo.png" alt="npmLogo" />
               <img className="misc-images" draggable="false" src="/miscImg/postmanLogo.png" alt="postmanLogo" />
               <img className="misc-images" draggable="false" src="/miscImg/viteLogo.jpg" alt="viteLogo" />
               <img className="misc-images" draggable="false" src="/miscImg/webpackLogo.png" alt="webpackLogo" />
            </div>
          </div>}
        </div>
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
