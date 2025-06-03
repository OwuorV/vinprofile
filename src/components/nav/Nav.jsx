import React from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";

import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <IoPersonSharp />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaScrewdriverWrench />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FaBookBookmark />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <IoCall />
      </a>
    </nav>
  );
};

export default Nav;
