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
          <p>Email - raasta@gmail.com</p>
          <p>Phone No. - 28786377358</p>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">
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
