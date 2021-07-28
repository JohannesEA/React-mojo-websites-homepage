<<<<<<< HEAD
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
=======
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/NavBar";
>>>>>>> 93271bc5f31288a11c258ea056a9f34a5eb4e902
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/pages/Hero";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <div className="App">
    <NavBar/>
     <Hero/>
     <About/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
