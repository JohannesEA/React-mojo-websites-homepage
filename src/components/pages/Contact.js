      import React, { useState } from "react";
      import { send } from "emailjs-com";
      import AOS from 'aos';
import 'aos/dist/aos.css';

      //import { Link } from 'react-router-dom';
      
      function Contact() {
        AOS.init();
        const [toSend, setToSend] = useState({
          name: "",
          email: "",
          message: "",
          subject: "",
          number: "",
        });
      
        const onSubmit = (e) => {
          e.preventDefault();
          if (validate()) {
            send(
                "service_c4intou",
                "template_39mbyff",
                toSend,
                "user_1fuo6rPChJNJaBBRPrhaQ"
              
            )
              .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
              })
              .catch((err) => {
                console.log("FAILED...", err);
              });
          }
        };
      
        const handleChange = (e) => {
          setToSend({ ...toSend, [e.target.name]: e.target.value });
        };
      
        function validate() {
          const alertArea = document.getElementById("confirmation-area");
          const name = document.getElementById("form-name");
          const number = document.getElementById("form-number");
          const email = document.getElementById("form-email");
          const subject = document.getElementById("form-subject");
          const message = document.getElementById("form-message");
          let isCorrect = true;
      
          alertArea.style.height = "auto";
          alertArea.style.marginTop = "2em";
          alertArea.style.padding = "5px";
          alertArea.style.borderRadius = "7px";
          alertArea.style.marginBottom = "0";
          alertArea.style.backgroundColor = "white";
          alertArea.style.width = "100%";
          alertArea.style.textAlign = "center";
          alertArea.style.color = "#00193b";
      
          const re =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
          if (name.value === "") {
            alertArea.style.color = "red";
            alertArea.innerHTML = "Navn-feltet trenger en verdi.";
            isCorrect = false;
            console.log(isCorrect);
          } else if (
            email.value === "" ||
            !re.test(String(email.value).toLowerCase())
          ) {
            console.log(email.value);
      
            alertArea.style.color = "red";
            alertArea.innerHTML = "Epost-feltet trenger en korrekt verdi.";
            isCorrect = false;
            console.log(isCorrect);
          } else if (number.value.length < 8) {
            alertArea.style.color = "red";
            alertArea.innerHTML = "Mobilnummer-feltet trenger en korrekt verdi.";
            isCorrect = false;
            console.log(isCorrect);
          } else if (subject.value === "") {
            alertArea.style.color = "red";
            alertArea.innerHTML = "Tittel-feltet trenger en korrekt verdi.";
            isCorrect = false;
            console.log(isCorrect);
          } else if (message.value === "") {
            alertArea.style.color = "red";
            alertArea.innerHTML = "Forespørsel-feltet trenger en korrekt verdi.";
            isCorrect = false;
            console.log(isCorrect);
          } else {
            alertArea.style.color = "#00193b";
            alertArea.innerHTML =
              "Takk for din forespørsel! Vi svarer deg så fort som mulig.  Mvh MoJo Websites.";
            return isCorrect;
          }
        }
      
        function refreshForm() {
          const alertArea = document.getElementById("confirmation-area");
          const name = document.getElementById("form-name");
          const number = document.getElementById("form-number");
          const email = document.getElementById("form-email");
          const subject = document.getElementById("form-subject");
          const message = document.getElementById("form-message");
      
          if (validate()) {
            setTimeout(() => {
              name.value = "";
              email.value = "";
              number.value = "";
              subject.value = "";
              message.value = "";
            }, 3000);
      
            alertArea.style.color = "#00193b";
            alertArea.innerHTML =
              "Takk for din forespørsel! Vi svarer deg så fort som mulig. Mvh MoJo Websites.";
          }
        }
      
        /* function sendKvitteringTilbakeTilPersonSomSenderForespørsel*/
      
        return (
          <section className="section contact" id="contact"  >
            <div className="title contact-title"  data-aos="zoom-in-up">Kontakt oss</div>
            <div className="text contact-text"  data-aos="zoom-in-up">
              <p>
                Ønsker du en enkel og fungerende hjemmeside? Send oss en forespørsel.
              </p>
            </div>
        
            <div className=" contact-form-container"  data-aos="zoom-in-up">
              <form name="myForm" className="contact-form" onSubmit={onSubmit}>
                <div className="title form-title">Send oss en epost</div>
                <p className="form-info-email"><i className="far fa-envelope"></i>mojo.websites1@gmail.com</p>
              
              
                  <input
                    className="form-input"
                    id="form-name"
                    type="text"
                    name="name"
                    placeholder="Skriv inn ditt navn.."
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
              
              
              
                  <input
                    className="form-input"
                    id="form-email"
                    type="text"
                    name="email"
                    placeholder="Skriv din epost.."
                    value={toSend.email}
                    onChange={handleChange}
                  />
              
            
                  <input
                    className="form-input"
                    id="form-number"
                    type="text"
                    name="number"
                    placeholder="Skriv mobilnummer.."
                    value={toSend.number}
                    onChange={handleChange}
                  />
            
             
              
                  <input
                    className="form-input"
                    id="form-subject"
                    type="text"
                    name="subject"
                    placeholder="Skriv inn tittel på forespørsel.."
                    value={toSend.subject}
                    onChange={handleChange}
                  />
         
               
                  <input
                    className="form-input form-message"
                    id="form-message"
                    type="textarea"
                    name="message"
                    placeholder="Skriv inn din forespørsel.."
                    value={toSend.message}
                    onChange={handleChange}
                  />
              
      
                <div id="confirmation-area" className="confirmation-area">
                  <p className="conf-text" id="conf-text" name="conf-text"></p>
                </div>
      
                <div id="contact-btn-area" className="contact-btn-area">
                  <button
                    className="btn confirmation-btn"
                    type="submit"
                    onClick={() => refreshForm()}
                  >
                    <p>Send</p>
                  </button>
                </div>
              </form>
            </div>
          </section>
        );
      }
      
      export default Contact;