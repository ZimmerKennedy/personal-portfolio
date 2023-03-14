import React from "react";
import "./projectPreview.css";
const ArtiProject = () => {
  return (
    <div id="project-container">
      <section id="title-section" className="font3">
        YouNo
      </section>
      <section id="left-section">
        <img className="project-image" src="/projectsImg/youNoProject.png" />
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
              href="https://github.com/ZimmerKennedy/youtube_clone_app_react"
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
              Youno is an exceptional YouTube-inspired application that leverages React's powerful capabilities to deliver a seamless and user-friendly experience.
              </li>
            </ul>
          </section>
          <section className="tech-stack-section">
          <img
                    className="projects-techstack-images"
                    src="/frontendImg/reactLogo.png"
                    alt="reactLogo"
                  />
          </section>
        </section>
      </section>
    </div>
  );
};

export default ArtiProject;
