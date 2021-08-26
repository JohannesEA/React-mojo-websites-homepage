import React, { Component } from "react";

import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";

import { IMAGES } from "../../../data/data";

import "./home.css";

class HomaPage extends Component {
  render() {
    return (
      <div className="pages homepage">
        <Hero />
        <About />
        <Services />
        <Portfolio images={IMAGES} slidesToShow={3} />
        <Contact />
      </div>
    );
  }
}

export default HomaPage;
