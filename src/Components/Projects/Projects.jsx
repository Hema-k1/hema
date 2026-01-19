import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React and modern CSS.",
    },
    {
      title: "Python Mini Project",
      desc: "A Python-based project focusing on logic and problem solving.",
    },
    {
      title: "Todo App",
      desc: "Simple Todo application using React and local storage.",
    },
  ];

  return (
    <section className="projects" id="projects">
        <div className="project-container">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-buttons">
              <a href="#" className="btn primary">View</a>
              <a href="#" className="btn secondary">Code</a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Projects;