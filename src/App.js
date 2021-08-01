import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/pages/Hero";
import Portfolio from "./components/pages/Portfolio";
// import Fab from "@material/ui/core/Fab"
function App() {
  return (
    <div className="App">
      {/* <Fab/> */}
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
