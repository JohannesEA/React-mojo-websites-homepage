import { useSpringCarousel } from 'react-spring-carousel-js'

const ImageCarouselle = () => {

    const { carouselFragment } = useSpringCarousel({
        items: [
          {
            id: 'img1',
            renderItem: <div className="image-carouselle-item"> <img src="/assets/images/hero-img.jpg" alt="hero-img"></img></div>,
          },
          {
            id: 'img2',
            renderItem: <div className="image-carouselle-item">  <img src="/assets/images/hero-img.jpg" alt="hero-img"></img></div>,
          },
        ],
      });


  return (
       <div className="image-carouselle">{carouselFragment}</div>
  );
};

export default ImageCarouselle;
