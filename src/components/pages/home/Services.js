import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DynamicFeedOutlinedIcon from "@material-ui/icons/DynamicFeedOutlined";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Translate from "react-translate-component";

const Services = () => {
  AOS.init();
  return (
    <div className="section services">
      <div className="services-content" data-aos="zoom-in-up">
        <div className="services-title title">
          <Translate content="titles.title3" component="h2" />
        </div>
        <div className="services-text text">
          <Translate content="services_text.p1" component="p" />
        </div>
      </div>

      <div className="services-focus-areas" data-aos="zoom-in-up">
        <div className="services-card">
          <DynamicFeedOutlinedIcon className="services-icon" />
          <div className="services-container">
            <Translate content="services_text.h1" component="h3" />
            <Translate content="services_text.price1" component="p" />
          </div>
        </div>

        <div className="services-card" data-aos="zoom-in-up">
          <HelpOutlineIcon className="services-icon" />
          <div className="services-container">
            <Translate content="services_text.h2" component="h3" />
            <Translate content="services_text.price2" component="p" />
          </div>
        </div>

        <div className="services-card">
          <ShoppingCartOutlinedIcon className="services-icon" />
          <div className="services-container">
            <Translate content="services_text.h3" component="h3" />
            <Translate content="services_text.price3" component="p" />
          </div>
        </div>
      </div>
      <Link to="contact" spy={true} smooth={true} offset={-100} duration={400}>
        <button className="btn services-btn">
          <Translate content="buttons.btn5" component="p" />
        </button>
      </Link>
    </div>
  );
};

export default Services;
