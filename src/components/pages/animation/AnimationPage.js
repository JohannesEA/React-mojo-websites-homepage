import { React } from "react";
import { Link as RouterLink } from "react-router-dom";

import "./animation.css";
import ImageAnimation from "./ImageAnimation";
import ImageCarouselle from "./ImageCarouselle";

const AnimationPage = () => {
  return (
    <div className="pages animation-page">
      <div className="hero-title title">
        Anima<span>tion</span>s
      </div>

      <div className="animation-page-hero">
        <ImageCarouselle />
      </div>

      <div className="animation-page-card">
        <ImageAnimation />
      </div>

      <RouterLink class="page_link" to="/">
        Home
      </RouterLink>
    </div>
  );
};

export default AnimationPage;
