

import ImageSlider from "../Imageslider/ImageSlider";


const Portfolio = ({ images, slidesToShow }) => {
    return (
      <div className="section portfolio">
           <div className="portfolio-title title">Portfølje</div>

<div className='container'>
        <ImageSlider images={images} slidesToShow={slidesToShow} />
      </div>
       
      </div>
    );
  }
  
  export default Portfolio;
  