import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button className="btn primary">Send Message</button>
        </form>

        <div className="contact-info">
          <p><span>Email:</span> hhema8613@email.com</p>
          <p><span>Location:</span> India</p>
          
          <img src="worldmap.jpg" usemap="#worldmap" alt="World Map"/>

<map name="worldmap">
  <area shape="rect" coords="34,44,270,350" href="asia.html" alt="Asia"/>
  <area shape="circle" coords="500,150,75" href="europe.html" alt="Europe"/>
</map>

        </div>
      </div>
    </section>
  );
}

export default Contact;