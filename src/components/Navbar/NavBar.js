import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import Hamburger from "hamburger-react";
import Translate from "react-translate-component";

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
  const [isOpen, setOpen] = useState(false);
  const handleHamburgerClick = () => {
    if (window.innerWidth <= 960) {
      setOpen(!isOpen);
    } else {
      setOpen(isOpen);
    }
  };
  return (
    <div
      className={sizeChange ? "my-navbar nav-change-on-scroll" : "my-navbar"}
    >
      <li className="nav-logo-link">
        <Link
          to="hero"
          className="nav-logo"
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
        >
          MoJo
        </Link>
      </li>

      <div className="nav-container-right">
        <ul
          className={
            click && window.innerWidth < 960
              ? "nav-menu active"
              : "nav-menu" && sizeChange
              ? "nav-menu nav-menu-size-change-on-scroll"
              : "nav-menu"
          }
        >
          <li className={click ? "nav-item  active" : "nav-item "}>
            <Link
              to="hero"
              className={click ? "nav-links  active" : "nav-links "}
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={function (event) {
                handleHamburgerClick();
                handleClick();
              }}
            >
              <Translate content="navlinks.link1" component="p" />
            </Link>
          </li>
          <li className={click ? "nav-item  active" : "nav-item "}>
            <Link
              to="about"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={function (event) {
                handleHamburgerClick();
                handleClick();
              }}
            >
              <Translate content="navlinks.link2" component="p" />
            </Link>
          </li>
          <li className={click ? "nav-item  active" : "nav-item "}>
            <Link
              to="services"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={function (event) {
                handleHamburgerClick();
                handleClick();
              }}
            >
              <Translate content="navlinks.link3" component="p" />
            </Link>
          </li>
          <li className={click ? "nav-item  active" : "nav-item "}>
            <Link
              to="portfolio"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={function (event) {
                handleHamburgerClick();
                handleClick();
              }}
            >
              <Translate content="navlinks.link4" component="p" />
            </Link>
          </li>
          <li className={click ? "nav-item  active" : "nav-item "}>
            <Link
              to="contact"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={function (event) {
                handleHamburgerClick();
                handleClick();
              }}
            >
              <Translate content="navlinks.link5" component="p" />
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
