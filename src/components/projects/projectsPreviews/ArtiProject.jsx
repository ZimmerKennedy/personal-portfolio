import React from "react";
import "./projectPreview.css";
const ArtiProject = () => {
  return (
    <div id="project-container">
      <section id="title-section" className="font3">
        Arti the Chatbot
      </section>
      <section id="left-section">
        <img className="project-image" src="/projectsImg/artiProject.png" />
        <section id="right-section">
          <section className="project-links">
            <a
              href="https://arti-the-chatbot-zimmerkennedy.vercel.app/"
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
                Arti The Chatbot is a web application designed to showcase
                chatbot functionality
              </li>
              <li>Built using Vite, Javascript, CSS, and OpenAI API.</li>
              <li>
                The frontend is rendered using Vercel, while the backend is
                powered by Render.
              </li>
            </ul>
          </section>
          <section className="tech-stack-section">
            <img
              className="projects-techstack-images"
              src="/frontendImg/jsLogo.png"
            />
            <img
              className="projects-techstack-images"
              src="/frontendImg/htmlLogo.png"
            />
            <img
              className="projects-techstack-images"
              src="/frontendImg/cssLogo.png"
            />
            <img
              className="projects-techstack-images"
              src="/miscImg/viteLogo.png"
            />
            <img
              className="projects-techstack-images"
              src="/backendImg/nodejsLogo.png"
            />
          </section>
        </section>
      </section>
    </div>
  );
};

export default ArtiProject;
