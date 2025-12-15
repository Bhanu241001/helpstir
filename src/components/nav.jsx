// Nav.jsx
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 const marqueeText =
    "HELP IN MINUTES 🕑 Now connect a person in need with a nearby NGO that can help them in their location within minutes.";


  return (
    <>
      <nav>
        
        <button
          className={`nav-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <img src="/nav_images/hamburger.svg" alt="" />
        </button>
        <div className="logo">
          <a href="#">
            <img src="/nav_images/Helpstir_logo.png" alt="logo" />
          </a>
        </div>

       <ul className={`nav-list ${isOpen ? "active" : ""}`} id="mobile-menu">
          <li>
            <a href="#">Request Help</a>
          </li>
          <div>|</div>
          <li>
            <a href="#">About Us</a>
          </li>
          <div>|</div>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <a href="#" className="login">
          login
        </a>
      </nav>
        <section className="css-marquee-container">
        <div className="css-marquee-content">
          <span className="marquee-bold-text">{marqueeText}</span>
          <span className="marquee-bold-text">{marqueeText}</span>
          <span className="marquee-bold-text">{marqueeText}</span>
        </div>
        <div className="css-marquee-content">
          <span className="marquee-bold-text">{marqueeText}</span>
          <span className="marquee-bold-text">{marqueeText}</span>
          <span className="marquee-bold-text">{marqueeText}</span>
        </div>
      </section> 
    </>
  );
}

export default Navbar;
