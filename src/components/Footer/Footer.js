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
          <i className="icon fab fa-facebook"></i>
          <i className="icon fab fa-linkedin"></i>
          <i className="icon fab fa-instagram"></i>
          </div>
          </div>
          <div className="text footer-copyright">MoJo Websites © 2021</div>
      </div>
    );
  }
  
  export default Footer;
  