import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link  to="hero" className="nav-logo" spy={true}
              smooth={true}
              offset={-100}
              duration={0}
                            >
       Mojo Websites
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/*<li className="nav-item">
        <NavLink
           exact
           to="/confirm"
           className="nav-links"
           onClick={handleClick}>confirm</NavLink>
        </li>*/}
          <li className="nav-item">
            
            <Link
              to="hero"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
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
              duration={0}
              onClick={handleClick}
            >
              Om oss
            </Link>
          </li>
          <li className="nav-item">
            <Link
                to="portfolio"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-100}
                duration={0}
                onClick={handleClick}
            >
              Portefølje
            </Link>
          </li>
     
          <li className="nav-item">
            <Link
             to="contact"
             className="nav-links"
             spy={true}
             smooth={true}
             offset={-100}
             duration={0}
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