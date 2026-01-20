import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p className="about-text">
          I’m <span>Hema K</span>, a passionate Python Developer with
          strong interest in web development and problem solving. I enjoy
          building clean, efficient, and user-friendly applications.
        </p>

        <p className="about-text text1">
          I have experience with Python, Django basics, JavaScript, React, HTML,
          and CSS. I am always eager to learn new technologies and improve my
          skills by building real-world projects.
        </p>

        <div className="about-skills">
          <span>Python</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default About;