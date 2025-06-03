import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="http://linkedin.com" target="_blank">
        <CiLinkedin />
      </a>
      <a href="http://twitter.com" target="_blank">
        <FaGithub />
      </a>
      <a href="http://github.com" target="_blank">
        <BsTwitterX />
      </a>
    </div>
  );
};

export default HeaderSocials;
