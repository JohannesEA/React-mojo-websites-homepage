import {Link} from "react-scroll";
import "./footer.css";
import Translate from "react-translate-component";

const Footer = () => {
    return (
      <div className="section footer">

      
          <div className="footer-content">   
           <div className="footer-title title">
           <Link
              to="hero"
              className="footer-link"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              >MoJo</Link>
              </div>
          <div className="text footer-text"><Translate content="footer_text.p1" component="div" /></div>
          <div className="footer-icons">
          <a href="https://www.facebook.com/johannesea"><i className="icon fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/johannes-erdahl-andresen-2aa117205/"><i className="icon fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/mojowebsites1/"><i className="icon fab fa-instagram"></i></a>
          </div>
          </div>
          <div className="text footer-copyright">MoJo Websites © 2021</div>
      </div>
    );
  }
  
  export default Footer;
  