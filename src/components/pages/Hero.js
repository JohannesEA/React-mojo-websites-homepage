import { Link } from "react-scroll";
import Translate from "react-translate-component";

const Hero = () => {


  return (
    <div className="section hero">
      <div className="hero-content">
  
        <div className="hero-title title">
          Mo<span>Jo</span> Websites
          {/* <Translate content="titles.title1" component="div" /> */}
        </div>
        <div className="hero-text text">
          <Translate content="hero_text.p1" component="div" />
        </div>

        <div className="hero-buttons">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            <button className="hero-btn-contact hero-btn btn">
              <Translate content="buttons.btn2" component="p" />
            </button>
          </Link>

          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            <button className="hero-btn-service hero-btn btn">
              <Translate content="buttons.btn5" component="p" />
            </button>
          </Link>
        </div>
      </div>

      <div className="hero-img">
        <img src="/assets/images/hero-img.jpg" alt="hero-img"></img>
      </div>
    </div>
  );
};

export default Hero;
