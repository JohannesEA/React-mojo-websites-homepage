import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DynamicFeedOutlinedIcon from "@material-ui/icons/DynamicFeedOutlined";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  AOS.init();
  return (
    <div className="section services" >
      <div className="services-content"  data-aos="zoom-in-up">
        <div className="services-title title">Tjenester</div>
        <div className="services-text text">
          Vi ønsker å gi deg den beste nettsiden til en billig penge.
          For tiden tilbyr vi 3 ulike tjenester. En informasjons-, en kjøp og salgs- og en dynamisk nettside. Disse forskjellige type nettsidene har ulik vanskelighets- og kompleksitets grad, og har derfor ulik pris. 
        </div>
      </div>

      <div className="services-focus-areas"  data-aos="zoom-in-up">
        <div className="services-card">
          <DynamicFeedOutlinedIcon className="services-icon" />
          <div className="services-container">
            <h3>Dynamisk</h3>
            Fra 8500 kr
          </div>
        </div>

        <div className="services-card"  data-aos="zoom-in-up">
          <HelpOutlineIcon className="services-icon" />
          <div className="services-container">
            <h3>Informasjon</h3>
            Fra 5500 kr
          </div>
        </div>

        <div className="services-card">
          <ShoppingCartOutlinedIcon className="services-icon" />
          <div className="services-container">
            <h3>Kjøp og salg</h3>
            Fra 9000 kr
          </div>
        </div>
      </div>
      <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >      <button className="btn services-btn">Kontakt oss</button>
</Link>
    </div>
  );
};

export default Services;
