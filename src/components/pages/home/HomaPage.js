import React, { useState } from "react";
import { Link } from "react-scroll";

import Fab from "@material-ui/core/Fab";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";

import { IMAGES } from "../../../data/data";

import "./home.css";

const HomaPage = () => {


  const [showFab, setFab] = useState(false);

  const makeFABVisible = () => {
    if (window.scrollY >= 100) {
      setFab(true);
      
      console.log("Show fab")
    } else {
      setFab(false);
      console.log("Hide fab")
    }
  }
  window.addEventListener("scroll", makeFABVisible);


    return (
      <div className="pages homepage">
        <Fab className={showFab ? "fab-button active" : "fab-button"} color="primary" aria-label="add">
        <Link
          to="hero"
          className={"fab-link"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
        >
        <i className={showFab ? "fas fa-arrow-up" : ""}></i>
        </Link>
          </Fab>
        <Hero />
        <About />
        <Services />
        <Portfolio images={IMAGES} slidesToShow={3} />
        <Contact />
      </div>
    );
  }


export default HomaPage;
