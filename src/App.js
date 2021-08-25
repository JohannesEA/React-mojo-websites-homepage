import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/pages/Hero";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Test from "./components/pages/Test";

import Fab from "@material-ui/core/Fab";
// import AddIcon from '@material-ui/icons/Add';
import { IMAGES } from "./data/data";
import "./index.css";

import counterpart from "counterpart";
import en from "./components/languages/en";
import nor from "./components/languages/nor";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("nor", nor);
counterpart.setLocale("nor");

let i = 0;
let isNorwegian = true;


class App extends Component {
  state = {
    lang: "nor",
  };

  onLangChange = (e) => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };


  handleLanguageChange = () => {
    if (i % 2 === 0){
      isNorwegian = false;
      console.log("Language: English")
      this.setState({ lang: "en" });
      counterpart.setLocale("en");
    }
    else{
      isNorwegian = true;
      console.log("Language: Norwegian")
      this.setState({ lang: "nor" });
      counterpart.setLocale("nor");
    }
   
    i++;
  }

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
          <Fab className="language-selector" color="primary" aria-label="add" >
             <img  src={isNorwegian ? "/assets/images/norwegian.png" : "/assets/images/english-logo.png"} alt="flag-img" onClick={this.handleLanguageChange}></img> 
        
          </Fab>
          <Hero />
          <About />
          <Services />
          <Portfolio images={IMAGES} slidesToShow={3} />
          <Contact />
          <Footer />
        </div>
        {/* )} */}

        <BrowserRouter>
       <Switch>
        {/* <Route exact path="/" component={Page1} /> */}
        <Route path="/test" component={Test} />
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
