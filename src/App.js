import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SuccessPage from "./components/pages/confirmation/SuccessPage";

import counterpart from "counterpart";
import en from "./components/languages/en";
import nor from "./components/languages/nor";
import HomaPage from "./components/pages/home/HomaPage";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

import Fab from "@material-ui/core/Fab";
import AnimationPage from "./components/pages/animation/AnimationPage";
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
    if (i % 2 === 0) {
      isNorwegian = false;
      console.log("Language: English");
      this.setState({ lang: "en" });
      counterpart.setLocale("en");
    } else {
      isNorwegian = true;
      console.log("Language: Norwegian");
      this.setState({ lang: "nor" });
      counterpart.setLocale("nor");
    }

    i++;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Fab className="language-selector" color="primary" aria-label="add">
            <img
              src={
                isNorwegian
                  ? "/assets/images/norwegian.png"
                  : "/assets/images/english-logo.png"
              }
              alt="flag-img"
              onClick={this.handleLanguageChange}
            ></img>
          </Fab>
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
}

export default App;
