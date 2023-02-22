import React from "react";
import "./projects.css";
const Projects = () => {
  return (
    <div id="projects-wrapper">
      <div className="projects-container">
        <section className="title-section">Projects</section>
        <div className="projects-section-wrapper">
          <div className="left-section-projects">
            <section className="project1-section">
            <div className="border-middle-projects-arti">
          <svg width="100%" height="100%">
            <line
              className="line-arti"
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
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
                  />
                </svg>
              </div>
              <div className="projects-title-left">
                Arti The Chatbot - ChatGPT Clone
              </div>
              
              <img
                className="projects-img"
                src="/projectsImg/artiProject.png"
                alt="artiProject"
              />
            </section>

            <section className="project3-section">
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
              <img
                className="projects-img"
                src="/projectsImg/openShopProject.png"
                alt="openShopProject"
              />
            </section>
          </div>
          <div className="right-section-projects">
            <section className="project2-section">
              
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
              <img
                className="projects-img"
                src="/projectsImg/pangeaProject.png"
                alt="pangeaProject"
              />
            </section>
            <section className="project4-section">
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
              <img
                className="projects-img"
                src="/projectsImg/youNoProject.png"
                alt="youNoProject"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
