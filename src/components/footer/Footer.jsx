import React from "react";
import "./footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
const Footer = () => {
  return (
    <section>
      <h2 className="Footer">VIN</h2>
      <div className="footer_bg">
        <div className="inner_footer">
          <div className="footerInfo">
            <ul>
              <li>
                <MdAddIcCall /> <a href="">+254110517567</a>
              </li>
              <li>
                <MdOutlineMailOutline />
                <a href="mailto:myvinmail591@gmail.com">
                  myvinmail591@gmail.com
                </a>
              </li>
              <li>
                <FaWhatsapp />
                <a href="https://api.whatsapp.com/send?phone=254110517567">
                  +254110517567
                </a>
              </li>
              <li>
                <GrLocation />
                <a href="">Nairobi, Kenya</a>
              </li>
            </ul>
          </div>
          <div className="footer_socials">
            <div className="myImage">
              <img src="logo.svg" alt="" />
            </div>
            <div className="footerCTA">
              <div className="inforName">
                <h2>Owuor Vincent Okoth</h2>
                <h5>Software Engineer</h5>
                <ul>
                  <a href="http://linkedin.com/in/myvinmail591" target="_blank">
                    <CiLinkedin />
                  </a>
                  <a href="http://twitter.com/tar_Anula" target="_blank">
                    <BsTwitterX />
                  </a>
                  <a href="http://github.com/0wuorV" target="_blank">
                    <FaGithub />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
