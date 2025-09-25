import React from "react";
import "./../styles/Hero.css";
import image26 from "./../assets/image26.png";
import image27 from "./../assets/image27.png";
import logo from "./../assets/logo.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={image26} alt="Left visual" />
      </div>
      <div className="hero-content">
        <h1>
          <span className="blue">R</span>aa<span className="orange">s</span>ta
        </h1>
        <p>Your next favorite platform, loading...</p>
        <div className="hero-input">
          <input type="email" placeholder="enter your email" />
          <button>Notify Me</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img src={image27} alt="Right visual" />
      </div>
    </div>
  );
}
