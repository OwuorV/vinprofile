import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { PiMedalFill } from "react-icons/pi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>About Me</h5>
      <h1>Get To Know</h1>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="neno" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <PiMedalFill className="about_icon" />
              <h5>Experiece</h5>
              <small>2+Years of work</small>
            </article>
            <article className="about_card">
              <PiMedalFill className="about_icon" />
              <h5>Clients</h5>
              <small>30 Active Clients</small>
            </article>
            <article className="about_card">
              <PiMedalFill className="about_icon" />
              <h5>Projects</h5>
              <small>10 personal projects completed</small>
            </article>
          </div>
        </div>
      </div>
      <div className="paragraphs">
        <p>
          I’m a passionate and detail-oriented software developer with a strong
          foundation in programming, problem-solving, and building efficient,
          scalable applications. I enjoy turning complex challenges into simple,
          elegant solutions through clean code and thoughtful design.
          <p>
            My skill set includes experience with Python, JavaScriptand Java and
            frameworks like React, Node.js, as well as version control, UX/UI
            Design databases, and cloud platforms. Whether collaborating
          </p>
          <p>
            in a team or working independently, I’m always eager to learn new
            technologies and improve my craft. I thrive in environments that
            encourage innovation, continuous learning, and meaningful impact
            through technology.
          </p>
        </p>
        <a href="" className="btn btn_primary">
          Contact me
        </a>
      </div>
    </section>
  );
};

export default About;
