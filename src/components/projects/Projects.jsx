import React from "react";
import "./projects.css";
const Projects = () => {
  return (
    <div id="projects-wrapper">
      <div className="projects-container">
        <section className="title-section">Projects</section>
        <div className="border-middle-projects">
          <svg width="100%" height="100%">
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="black"
              stroke-width="1"
            />
          </svg>
        </div>
        <div className="border-projects1">
          <svg width="100%" height="100%">
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="black"
              stroke-width="1"
            />
          </svg>
        </div>
        <div className="projects-section-wrapper">
        <div className="left-section-projects">
        <section className="project1-section">Project2</section>
        <section className="project3-section">Project3</section>
        </div>
        <div className="right-section-projects">
        <section className="project2-section">Project1</section>
        <section className="project4-section">Project4</section>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
