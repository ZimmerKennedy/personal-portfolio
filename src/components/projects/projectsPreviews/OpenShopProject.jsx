import React from "react";
import "./projectPreview.css";
const ArtiProject = () => {
  return (
    <div id="project-container">
      <section id="title-section" className="font3">
        Openshop
      </section>
      <section id="left-section">
        <img className="project-image" src="/projectsImg/openShopProject.png" />
        <section id="right-section">
          <section className="project-links">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                className="project-link"
                src="/miscImg/websiteLogo.png"
                alt="Web"
              />
            </a>
            <a
              href="https://github.com/Grace-Shopper-Senior-Phase/OpenShop"
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
              OpenShop is a full-stack e-commerce application that allows users to buy and sell products online.
              </li>
              <li>Built with React, Redux, Tailwind CSS, PostgreSQL, Express, and Node.js, OpenShop offers a robust set of features, including CRUD operations, that provide a seamless and user-friendly experience.</li>
              <li>
              With its beautifully designed interface and intuitive navigation, OpenShop is sure to attract and engage users.
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
              src="/frontendImg/tailwindLogo.png"
              alt="tailwindLogo"
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
