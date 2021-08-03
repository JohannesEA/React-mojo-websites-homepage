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
import React, { useState } from "react";
import Portfolio from "./components/pages/Portfolio";

function App() {

  const [isNorwegian, setLanguage] = useState(false);

  const handleClick = () => setLanguage(!isNorwegian);
  return (
    <div className="App">
  
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
  );
}

export default App;
