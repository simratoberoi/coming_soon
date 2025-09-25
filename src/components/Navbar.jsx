import React, { useState } from "react";
import "./../styles/Navbar.css";
import logo from "./../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Raasta Logo" />
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
        <li>
          <button className="signup-btn">Sign up</button>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
