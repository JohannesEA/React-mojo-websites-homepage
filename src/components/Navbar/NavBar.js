import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import Hamburger from 'hamburger-react'

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
  const [isOpen, setOpen] = useState(false)


  return (
    <div className={sizeChange ? "navbar nav-size-change-on-scroll" : "navbar"}>
      
        
    <li className="nav-logo-link">
          <Link
            to="hero"
            className="nav-logo"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            Mo<span>Jo</span>
          </Link></li>
      
        <div className="nav-container-right">
        <ul className={click ? "nav-menu active" : "nav-menu" && sizeChange ? "nav-menu nav-menu-size-change-on-scroll" : "nav-menu"}>
          <li className="nav-item nav-item-home">
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
          <li className="nav-item nav-item-about">
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
          <li className="nav-item nav-item-services">
            <Link
              to="services"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              onClick={handleClick}
            >
              Tjenester
            </Link>
          </li>
          <li className="nav-item nav-item-portfolio">
            <Link
              to="portfolio"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              onClick={handleClick}
            >
              Portfølje
            </Link>
          </li>
          <li className="nav-item nav-item-contact">
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
        <div className="hamburger" onClick={handleClick}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

     
    </div>
    </div>
  );
}

export default NavBar;