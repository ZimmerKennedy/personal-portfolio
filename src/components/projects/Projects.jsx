import React, { useState } from "react";
import "./projects.css";
const Projects = () => {
  const [isArtiHovered, setIsArtiHovered] = useState(false);
  const [isPangeaHovered, setIsPangeaHovered] = useState(false);
  const [isOpenShopHovered, setIsOpenShopHovered] = useState(false);
  const [isYouNoHovered, setIsYouNoHovered] = useState(false);
  return (
    <div id="projects-container">
      <div className="projects-wrapper">
        <section className="title-section">Projects</section>
        <div className="projects-section-wrapper">
          <div className="left-section-projects">
            <section
              className={`project1-section ${isArtiHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsArtiHovered(true)}
              onMouseLeave={() => setIsArtiHovered(false)}
            >
              <div className="border-middle-projects-arti">
                <svg width="100%" height="100%">
                  <line
                    className="line-arti"
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <div className="border-projects-arti">
                <svg width="100%" height="100%">
                  <line
                    className="line-arti"
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <div className="projects-title-left">
                Arti The Chatbot - ChatGPT Clone
              </div>
              <a
                href="https://github.com/ZimmerKennedy/ai_chatbot_stackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-project-arti"
                  src="/miscImg/githubLogo.png"
                  alt="Github"
                />
              </a>
              <img
                className="projects-img"
                src="/projectsImg/artiProject.png"
                alt="artiProject"
              />

              {isArtiHovered && (
                <div className="projects-techstack-arti">
                  <img
                    className="projects-techstack-arti-images"
                    src="/frontendImg/jsLogo.png"
                  />
                  <img
                    className="projects-techstack-arti-images"
                    src="/frontendImg/htmlLogo.png"
                  />
                  <img
                    className="projects-techstack-arti-images"
                    src="/frontendImg/cssLogo.png"
                  />
                  <img
                    className="projects-techstack-arti-images"
                    src="/miscImg/viteLogo.png"
                  />
                  <img
                    className="projects-techstack-arti-images"
                    src="/backendImg/nodejsLogo.png"
                  />
                </div>
              )}
            </section>

            <section
              className={`project3-section ${
                isOpenShopHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsOpenShopHovered(true)}
              onMouseLeave={() => setIsOpenShopHovered(false)}
            >
              <div className="border-middle-projects-openShop">
                <svg width="100%" height="100%">
                  <line
                    className="line-openShop"
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                  />
                </svg>
              </div>
              <div className="border-projects-openShop">
                <svg width="100%" height="100%">
                  <line
                    className="line-openShop"
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  />
                </svg>
              </div>
              <div className="projects-title-left">
                Open Shop - ECommerce Platform
              </div>
              <a
                href="https://github.com/Grace-Shopper-Senior-Phase/OpenShop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-project-openShop"
                  src="/miscImg/githubLogo.png"
                  alt="Github"
                />
              </a>
              <img
                className="projects-img"
                src="/projectsImg/openShopProject.png"
                alt="openShopProject"
              />
              {isOpenShopHovered && (
                <div className="projects-techstack-openShop">
                  <img
                    className="projects-techstack-openShop-images"
                    src="/frontendImg/reactLogo.png"
                    alt="reactLogo"
                  />
                  <img
                    className="projects-techstack-openShop-images"
                    src="/frontendImg/reduxLogo.png"
                    alt="reduxLogo"
                  />
                  <img
                    className="projects-techstack-openShop-images"
                    src="/frontendImg/tailwindLogo.png"
                    alt="tailwindLogo"
                  />
                  <img
                    className="projects-techstack-openShop-images"
                    src="/backendImg/psqlOutline.png"
                    alt="psqlOutline"
                  />
                  <img
                    className="projects-techstack-openShop-images"
                    src="/backendImg/expressLogo.png"
                    alt="expressLogo"
                  />
                  <img
                    className="projects-techstack-openShop-images"
                    src="/backendImg/nodejsLogo.png"
                    alt="nodejsLogo"
                  />
                </div>
              )}
            </section>
          </div>
          <div className="right-section-projects">
            <section
              className={`project2-section ${isPangeaHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsPangeaHovered(true)}
              onMouseLeave={() => setIsPangeaHovered(false)}
            >
              <div className="border-middle-projects-pangea">
                <svg width="100%" height="100%">
                  <line
                    className="line-pangea"
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                  />
                </svg>
              </div>

              <div className="border-projects-pangea">
                <svg width="100%" height="100%">
                  <line
                    className="line-pangea"
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  />
                </svg>
              </div>
              <div className="projects-title-right">
                Pangea - Landlord/Tenant App
              </div>
              <a
                href="https://github.com/Pangea-Capstone-Project/Pangea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-project-pangea"
                  src="/miscImg/githubLogo.png"
                  alt="Github"
                />
              </a>
              <img
                className="projects-img"
                src="/projectsImg/pangeaProject.png"
                alt="pangeaProject"
              />

              {isPangeaHovered && (
                <div className="projects-techstack-pangea">
                  <img
                    className="projects-techstack-pangea-images"
                    src="/frontendImg/reactLogo.png"
                    alt="reactLogo"
                  />
                  <img
                    className="projects-techstack-pangea-images"
                    src="/frontendImg/reduxLogo.png"
                    alt="reduxLogo"
                  />
                  <img
                    className="projects-techstack-pangea-images"
                    src="/frontendImg/styledComponentsLogo.png"
                    alt="styledComponentsLogo"
                  />
                  <img
                    className="projects-techstack-pangea-images"
                    src="/backendImg/psqlOutline.png"
                    alt="psqlOutline"
                  />
                  <img
                    className="projects-techstack-pangea-images"
                    src="/backendImg/expressLogo.png"
                    alt="expressLogo"
                  />
                  <img
                    className="projects-techstack-pangea-images"
                    src="/backendImg/nodejsLogo.png"
                    alt="nodejsLogo"
                  />
                </div>
              )}
            </section>
            <section
              className={`project4-section ${isYouNoHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsYouNoHovered(true)}
              onMouseLeave={() => setIsYouNoHovered(false)}
            >
              <div className="border-middle-projects-youNo">
                <svg width="100%" height="100%">
                  <line
                    className="line-youNo"
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                  />
                </svg>
              </div>
              <div className="border-projects-youNo">
                <svg width="100%" height="100%">
                  <line
                    className="line-youNo"
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  />
                </svg>
              </div>
              <div className="projects-title-right">
                YouNo - A Youtube Clone
              </div>
              <a
                href="https://github.com/ZimmerKennedy/youtube_clone_app_react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-project-youNo"
                  src="/miscImg/githubLogo.png"
                  alt="Github"
                />
              </a>
              <img
                className="projects-img"
                src="/projectsImg/youNoProject.png"
                alt="youNoProject"
              />
              {isYouNoHovered && (
                <div className="projects-techstack-youNo">
                  <img
                    className="projects-techstack-youNo-images"
                    src="/frontendImg/reactLogo.png"
                    alt="reactLogo"
                  />
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
