import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/pages/Hero";
// import Portfolio from "./components/pages/Portfolio";
import Fab from "@material-ui/core/Fab";
// import AddIcon from '@material-ui/icons/Add';
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import { IMAGES } from "./data/data";

import "./index.css";
import React, { useState, useEffect, Component } from "react";

import counterpart from "counterpart";
import en from "./components/languages/en";
import nor from "./components/languages/nor";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("nor", nor);
counterpart.setLocale("nor");

class App extends Component {
  state = {
    lang: "nor",
  };

  onLangChange = (e) => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };

  // const [isNorwegian, setLanguage] = setLanguage(false);

  // handleClick = (e) => {setLanguage(!isNorwegian)};

  render() {
    // const [loading, setLoading] = setLoading(false);

    // useEffect(() => {
    //   setLoading(true)
    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 1000)
    // }, [])
    return (
      <div className="App">
        {/* {loading ? (
      <div
      Loader
      className="loading-logo"
      size={50} ><img src="/mojo-logo2.png" alt="loading-img"></img></div>
    ) : ( */}
        <div className="onepage">
          <NavBar />
          <Fab className="language-selector" color="primary" aria-label="add">
            {/* <img  src={!isNorwegian ? "/assets/images/norwegian.png" : "/assets/images/english-logo.png"} alt="flag-img" onClick={this.onLangChange}></img> */}
            <select
              className="language-select"
              value={this.state.lang}
              onChange={this.onLangChange}
            >
              <option className="language-select-nor" value="nor">
                NOR
              </option>
              <option className="language-select-en" value="en">
                EN
              </option>
            </select>
          </Fab>
          <Hero />
          <About />
          <Services />
          <Portfolio images={IMAGES} slidesToShow={3} />
          <Contact />
          <Footer />
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default App;
