import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [sizeChange, setSize] = useState(false);
  const changeNavbarSize = () => {
    if (window.scrollY >= 80) {
      setSize(true);
    } else {
      setSize(false);
    }
  };
  window.addEventListener("scroll", changeNavbarSize);
  return (
    <div className={sizeChange ? "navbar nav-size-change-on-scroll" : "navbar"}>
      
        <div className="nav-container-left">
        
    <li className="nav-logo-link">
          <Link
            to="hero"
            className="nav-logo"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            Mojo websites
          </Link></li>
        </div>
        <div className="nav-container-right">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              onClick={handleClick}
            >
              Hjem
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              onClick={handleClick}
            >
              Om oss
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="services"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              onClick={handleClick}
            >
              Hva vi tilbyr
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="portfolio"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              onClick={handleClick}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              onClick={handleClick}
            >
              Kontakt oss
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
    </div>
    </div>
  );
}

export default NavBar;