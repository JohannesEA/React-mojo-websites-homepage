import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import Hamburger from "hamburger-react";
import Translate from "react-translate-component";

import counterpart from "counterpart";
import en from "../languages/en";
import nor from "../languages/nor";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("nor", nor);
counterpart.setLocale("nor");

let i = 0;
let isNorwegian = true;

const NavBar = () => {
  const [state, setState] = useState({ lang: "nor" });

  const onLangChange = (e) => {
    setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };

  const onClickChangeLanguage = (e) => {
    if (i % 2 === 0) {
      isNorwegian = false;
      setState({ lang: "en" });
      counterpart.setLocale("en");
      console.log(state);
    } else {
      isNorwegian = true;
      setState({ lang: "nor" });
      counterpart.setLocale("nor");
      console.log(state);
    }
    i++;
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const [sizeChange, setSize] = useState(false);
  // const changeNavbarSize = () => {
  //   if (window.scrollY >= 80) {
  //     setSize(true);
  //   } else {
  //     setSize(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarSize);

  const [isOpen, setOpen] = useState(false);
  const handleHamburgerClick = () => {
    if (window.innerWidth <= 960) {
      setOpen(!isOpen);
    } else {
      setOpen(isOpen);
    }
  };
  return (
    <div className={"my-navbar"}>
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
            click && window.innerWidth < 960 ? "nav-menu active" : "nav-menu"
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

          {/* <select className="language-select" value={state.lang} onChange={onLangChange}>
            <option value="en">En</option>
            <option value="nor">No</option>
          </select> */}
          <img
          className="language-select-img"
            src={
              isNorwegian
                ? "/assets/images/norwegian.png"
                : "/assets/images/english-logo.png"
            }
            alt="flag-img"
            onClick={function (event) {
              onClickChangeLanguage();
            }}
          ></img>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
