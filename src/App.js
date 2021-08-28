import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AnimationPage from "./components/pages/animation/AnimationPage";
import SuccessPage from "./components/pages/confirmation/SuccessPage";
import HomaPage from "./components/pages/home/HomaPage";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";


const App = () =>{
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={() => <HomaPage />} />
            <Route path="/success" exact component={() => <SuccessPage />} />
            <Route path="/animation" exact component={() => <AnimationPage />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }


export default App;
