import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/pages/Hero";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Hero/>
     <About/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
