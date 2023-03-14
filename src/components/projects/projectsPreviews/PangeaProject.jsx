import React from "react";
import "./projectPreview.css";
const ArtiProject = () => {
  return (
    <div id="project-container">
      <section id="title-section" className="font3">
        Pangea
      </section>
      <section id="left-section">
        <img className="project-image" src="/projectsImg/pangeaProject.png" />
        <section id="right-section">
          <section className="project-links">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project-link"
                src="/miscImg/websiteLogo.png"
                alt="Web"
              />
            </a>
            <a
              href="https://github.com/ZimmerKennedy/ai_chatbot_stackathon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project-link"
                src="/miscImg/githubLogoProject.png"
                alt="Github"
              />
            </a>
          </section>
          <section className="project-description">
            <ul>
              <li>
              Pangea is an innovative full-stack web application that utilizes powerful CRUD functionality to provide seamless connections between landlords and tenants.
              </li>
              <li>With Pangea, landlords can effortlessly manage their properties, add new units and tenants, while tenants can easily communicate with their landlord submit work order, pay and access all the necessary information about their rental units.</li>
              <li>
              Pangea is built using React, Redux, Styled Components, PostgreSQL, Express, and Node.js.
              </li>
            </ul>
          </section>
          <section className="tech-stack-section">
          <img
                    className="projects-techstack-images"
                    src="/frontendImg/reactLogo.png"
                    alt="reactLogo"
                  />
                  <img
                    className="projects-techstack-images"
                    src="/frontendImg/reduxLogo.png"
                    alt="reduxLogo"
                  />
                  <img
                    className="projects-techstack-images"
                    src="/frontendImg/styledComponentsLogo.png"
                    alt="styledComponentsLogo"
                  />
                  <img
                    className="projects-techstack-images"
                    src="/backendImg/psqlOutline.png"
                    alt="psqlOutline"
                  />
                  <img
                    className="projects-techstack-images"
                    src="/backendImg/expressLogo.png"
                    alt="expressLogo"
                  />
                  <img
                    className="projects-techstack-images"
                    src="/backendImg/nodejsLogo.png"
                    alt="nodejsLogo"
                  />
          </section>
        </section>
      </section>
    </div>
  );
};

export default ArtiProject;
