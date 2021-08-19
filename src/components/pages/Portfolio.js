

import ImageSlider from "../Imageslider/ImageSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = ({ images, slidesToShow }) => {
  AOS.init();
    return (
      <div className="section portfolio"  >
           <div className="portfolio-title title">Portfølje</div>

<div className='container'  data-aos="zoom-in-up">
        <ImageSlider images={images} slidesToShow={slidesToShow} />
      </div>
       
      </div>
    );
  }
  
  export default Portfolio;
  