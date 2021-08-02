import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DynamicFeedOutlinedIcon from "@material-ui/icons/DynamicFeedOutlined";

const Services = () => {
  return (
    <div className="section services">
      <div className="services-content">
        <div className="services-title title">Tjenester</div>
        <div className="services-text text">
          Vi ønsker å gi deg den beste nettsiden til en billig penge.
          For tiden tilbyr vi 3 ulike tjenester. En informasjons-, en kjøp og salgs- og en dynamisk nettside. Disse forskjellige type nettsidene har ulik vanskelighets- og kompleksitets grad, og har derfor ulik pris. 
        </div>
      </div>

      <div className="services-focus-areas">
        <div className="services-card">
          <DynamicFeedOutlinedIcon className="services-icon" />
          <div className="services-container">
            <h3>Dynamisk</h3>
            Fra 8500 kr
          </div>
        </div>

        <div className="services-card">
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
    </div>
  );
};

export default Services;
