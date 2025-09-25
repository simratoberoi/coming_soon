// src/components/Footer.js

import React from "react";
import "./../styles/Footer.css";
import logo from "./../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faFacebookF,faXTwitter,} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img className="flogo" src={logo} alt="Logo" />
        </div>
        <div className="footer-contact">
          <p>Email - reach.raasta@gmail.com</p>
          <p>Phone No. - +91 86989 28119</p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/raasta.ind/"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
