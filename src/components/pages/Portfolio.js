

import ImageSlider from "../Imageslider/ImageSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/en";
import nor from "../languages/nor";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("nor", nor);
counterpart.setLocale("nor");

const Portfolio = ({ images, slidesToShow }) => {
  AOS.init();
    return (
      <div className="section portfolio"  >
           <div className="portfolio-title title"><Translate content="titles.title4" component="div" /></div>

<div className='container'  data-aos="zoom-in-up">
        <ImageSlider images={images} slidesToShow={slidesToShow} />
      </div>
       
      </div>
    );
  }
  
  export default Portfolio;
  