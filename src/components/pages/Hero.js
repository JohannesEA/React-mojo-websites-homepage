import { Link } from "react-scroll";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/en";
import nor from "../languages/nor";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("nor", nor);

counterpart.setLocale("nor");

// const TranslateLink = (props) =>{
//   return (<Translate content={props.content} component="a" href="//google.com" target="_blank" />)
// }

const Hero = () => {
  // const link = <TranslateLink content="link"/>;
  // const placeholder = counterpart.translate("placeholder");

  //   const [state, setState] = setState("en");
  //   this.setState({
  //     currentFilter: newSearch
  //   });

  // function onLangChange(e){
  //   this.setState({lang: e.target.value});
  //   counterpart.setLocale(e.target.value);
  // }

  return (
    <div className="section hero">
      <div className="hero-content">
        {/* <select value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">EN</option>
          <option value="nor">NOR</option>
        </select> */}

        {/* <Translate content="copy.p2" component="p" with={{link}}/>
      <input type="text" placeholder={placeholder}></input>
      <Translate component="input" type="text" attributes={{placeholder: "placeholder"}}/> */}

        <div className="hero-title title">
          {/* Mo<span>Jo</span> Websites */}
          <Translate content="titles.title1" component="div" />
          {/* <Translate content="copy.p1" component="span" unsafe={true}/> */}
        </div>
        <div className="hero-text text">
          <Translate content="hero_text.p1" component="div" />
        </div>

        <div className="hero-buttons">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            <button className="hero-btn-contact hero-btn btn">
              <Translate content="buttons.btn2" component="p" />
            </button>
          </Link>

          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            <button className="hero-btn-service hero-btn btn">
              <Translate content="buttons.btn5" component="p" />
            </button>
          </Link>
        </div>
      </div>

      <div className="hero-img">
        <img src="/assets/images/hero-img.jpg" alt="hero-img"></img>
      </div>
    </div>
  );
};

export default Hero;
