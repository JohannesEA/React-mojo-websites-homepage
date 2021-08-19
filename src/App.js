import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/pages/Hero";
// import Portfolio from "./components/pages/Portfolio";
import Fab from "@material-ui/core/Fab"
// import AddIcon from '@material-ui/icons/Add';
import Services from "./components/pages/Services";
import { IMAGES } from "./data/data";

import "./index.css"
import React, { useState, useEffect } from "react";
import Portfolio from "./components/pages/Portfolio";

function App() {

  const [isNorwegian, setLanguage] = useState(false);

  const handleClick = () => setLanguage(!isNorwegian);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="App">
      {loading ? (
      <div
      Loader
      className="loading-logo"
      size={50} ><img src="/mojo-logo2.png" alt="loading-img"></img></div>
    ) : (
      <div className="onepage">
    <NavBar/>
    <Fab className="language-selector" color="primary" aria-label="add">
    <img  src={!isNorwegian ? "/assets/images/norwegian.png" : "/assets/images/english-logo.png"} alt="flag-img" onClick={handleClick}></img>
    </Fab>
     <Hero/>
     <About/>
     <Services/>
    <Portfolio images={IMAGES} slidesToShow={3}/>
    <Contact/> 
     <Footer/>
     </div>
    )}
    </div>
  );
}

export default App;
