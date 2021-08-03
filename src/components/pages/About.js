import { Link } from "react-scroll";

const About = () => {
    return (
      <div className="section about">

      
          <div className="about-content">   
           <div className="about-title title">Om oss</div>
          <div className="about-text text">Dette er et startup prosjekt som går ut på å lage enkle og svært fungerende hjemmesider for de som ønsker det. Vi er 2 studenter, en datingeniør- og en frontend student.</div>
          <div className="about-btn">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          > <button className="btn about-btn">Portfølje</button>
</Link></div>
          </div>

          <div className="about-imgs">
          <div className="about-img about-johannes"><img src="/assets/images/headshot-johannes.jpg"  alt="johannes-img"></img>Johannes Erdahl Andresen</div>
          <div className="about-img about-johannes"><img src="/assets/images/magnus-heashot.png"  alt="magnus-img"></img>Magnus Sødergren</div>
          </div>
       
      </div>
    );
  }
  
  export default About;
  