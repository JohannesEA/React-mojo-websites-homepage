import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Translate from "react-translate-component";
import ImageAnimation from "../animation/ImageAnimation"
import ImageAnimation2 from "../animation/ImageAnimation2"



const About = () => {
  AOS.init();

  return (
    <div className="section about"  data-aos="zoom-in-up" >
      <div className="about-content">
        <div className="about-title title">
          <Translate content="titles.title2" component="h2" />
        </div>
        <div className="about-text text">
          <Translate content="about_text.p1" component="p" />
        </div>

        <div className="about-btn">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
        
            <button className="btn about-btn">
              <Translate content="buttons.btn4" component="p" />
            </button>
          </Link>
        </div>
      </div>

      <div className="about-imgs">
        <div className="about-img about-johannes">
          {/* <img
            src="/assets/images/headshot-johannes.jpg"
            alt="johannes-img"
          ></img> */}
          <ImageAnimation />
          Johannes Erdahl Andresen
        </div>
        <div className="about-img about-johannes">
          {/* <img src="/assets/images/magnus-heashot.png" alt="magnus-img"></img> */}
          <ImageAnimation2/>
          Magnus Sødergren
        </div>
      </div>
    </div>
  );
};

export default About;
