import React from "react";
import "./contacts.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

// import { useRef } from "react";
// import emailjs from "emailjs-com";
const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_xgesf89", "template_h4rc8iy", form.current, {
  //       publicKey: "q0jM1H4Jr0oaSS1IH",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  //   e.target.reset();
  // };
  return (
    <section id="contact">
      <h5>React Out</h5>
      <h1>Contact</h1>
      <div className="container container_contact">
        <div className="contact_options">
          <div className="contact_option">
            <MdOutlineMailOutline className="icon" />
            <h4>Email</h4>
            <h5>myvinmail591"gmail.com</h5>
            <a href="mailto:myvinmail591@gmail.com">Send Email</a>
          </div>

          <div className="contact_option">
            <FaWhatsapp className="icon" />
            <h4>Whatsapp</h4>
            <h5>+254110517567</h5>
            <a href="https://api.whatsapp.com/send?phone=254110517567">
              Send Email
            </a>
          </div>
        </div>
        <form /*ref={form} onSubmit={sendEmail}*/>
          <input type="text" name="name" placeholder="Enter name" require />
          <input type="email" name="email" placeholder="Enter email" require />
          <textarea
            type="message"
            name="message"
            placeholder="meassage"
            require
          />
          <button type="submit" className="btn btn-primary">
            submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
