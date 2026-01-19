import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-left">
        <img
          src="public/images/img.jpeg"
          alt="Muqthar"
          className="profile-pic"
        />
      </div>

      <div className="home-right">
        <h1>Hi, I'm <span>Mohammad Muqthar</span></h1>
        <h2>Python Developer</h2>
        <p>
          I am a passionate Python Developer with strong interest in
          web development and problem solving. I love building clean
          and user friendly applications.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;