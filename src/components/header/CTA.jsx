import React from "react";

import Resume from "../../assets/OwuorResume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        My Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        contact Me
      </a>
    </div>
  );
};

export default CTA;
