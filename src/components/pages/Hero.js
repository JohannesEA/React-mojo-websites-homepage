import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="section hero">
      <div className="hero-content">
        <div className="hero-title title">
          Mo<span>Jo</span> Websites
        </div>
        <div className="hero-text text">
          MoJo Websites for deg som ønsker en enkel og perfekt fungerende
          nettside.
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
              Kontakt oss
            </button>
          </Link>

          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
          <button className="hero-btn-service hero-btn btn">Service</button>


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
