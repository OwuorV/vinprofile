import React from "react";
import "./experience.css";
const Experinece = () => {
  return (
    <section id="experience">
      <h5>Experiece</h5>
      <h1>Job Experience</h1>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Fronted Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>css</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>react</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>Javasript</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>UI/UX</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>Python</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>SQLite</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience_details">
              {/* //svg */}
              <div>
                <h4>Java</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experinece;
