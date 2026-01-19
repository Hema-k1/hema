import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Git & GitHub", level: "Basic" }
  ];

  return (
    <section className="skills" id="skills">
        <div className="about-Skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Skills;