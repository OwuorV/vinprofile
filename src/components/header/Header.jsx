import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Okoth Owuor</h1>
        <h5 className="text-light">SOftware Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="myavator" />
        </div>
        <a href="#contact" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
