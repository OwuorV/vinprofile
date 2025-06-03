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
              <small>2+Years of work</small>
            </article>
            <article className="about_card">
              <PiMedalFill className="about_icon" />
              <h5>Experiece</h5>
              <small>2+Years of work</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            ipsa molestiae et beatae ea minus accusantium tempora repellendus
            rem explicabo.
          </p>
          <a href="" className="btn btn_primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
