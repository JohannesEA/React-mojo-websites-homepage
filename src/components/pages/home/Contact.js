import React, { useState } from "react";
import { send } from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import Translate from "react-translate-component";
// import jsxToString from 'jsx-to-string';


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
        "service_d92dhff",
        "template_qlfe9vt",
        toSend,
        "user_nXc7ccykjAkWk2linJAyS"
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

    //Parse from element to string
    let errorMsg1 = <Translate content='errormsg.msg1' component='p' />;
    let errorMsg2 = <Translate content="errormsg.msg2" component="p" />;
    let errorMsg3 = <Translate content="errormsg.msg3" component="p" />;
    let errorMsg4 = <Translate content="errormsg.msg4" component="p" />;
    let errorMsg5 = <Translate content="errormsg.msg5" component="p" />;
    let successMsg = <Translate content="successmsg.msg1" component="p" />;
    var doc = new DOMParser().parseFromString(errorMsg1, "text/xml");


    if (name.value === "") {
      alertArea.style.color = "red";
      alertArea.innerHTML = errorMsg1.content;
      isCorrect = false;
      console.log(isCorrect);
    } else if (
      email.value === "" ||
      !re.test(String(email.value).toLowerCase())
    ) {
      console.log(email.value);

      alertArea.style.color = "red";
      alertArea.innerHTML = errorMsg2;
      isCorrect = false;
      console.log(isCorrect);
    } else if (number.value.length < 8) {
      alertArea.style.color = "red";
      alertArea.innerHTML = errorMsg3;
      isCorrect = false;
      console.log(isCorrect);
    } else if (subject.value === "") {
      alertArea.style.color = "red";
      alertArea.innerHTML = errorMsg4;
      isCorrect = false;
      console.log(isCorrect);
    } else if (message.value === "") {
      alertArea.style.color = "red";
      alertArea.innerHTML = errorMsg5;
      isCorrect = false;
      console.log(isCorrect);
    } else {
      alertArea.style.color = "#00193b";
      alertArea.innerHTML = successMsg;
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
      alertArea.innerHTML = (
        <Translate content="successmsg.msg1" component="p" />
      );
    }
  }

  /* function sendKvitteringTilbakeTilPersonSomSenderForespørsel*/

  return (
    <section className="section contact" id="contact">
      <div className="title contact-title" data-aos="zoom-in-up">
        <Translate content="titles.title5" component="h2" />
      </div>
      <div className="text contact-text" data-aos="zoom-in-up">
        <Translate content="contact_text.p1" component="p" />
      </div>

      <div className=" contact-form-container" data-aos="zoom-in-up">
        <form name="myForm" className="contact-form" onSubmit={onSubmit}>
          <div className="title form-title">
            {" "}
            <Translate content="contact_text.p2" component="div" />
          </div>
          <div className="form-info-email">
            <i className="far fa-envelope"></i>mojo.websites1@gmail.com
          </div>

          <Translate
            component="input"
            type="text"
            className="form-input"
            id="form-name"
            value={toSend.from_name}
            onChange={handleChange}
            name="name"
            attributes={{ placeholder: "placeholder.p1" }}
          />
          <Translate
            component="input"
            type="text"
            className="form-input"
            id="form-email"
            value={toSend.email}
            onChange={handleChange}
            name="email"
            attributes={{ placeholder: "placeholder.p2" }}
          />
          <Translate
            component="input"
            type="text"
            className="form-input"
            id="form-number"
            value={toSend.number}
            onChange={handleChange}
            name="number"
            attributes={{ placeholder: "placeholder.p3" }}
          />
          <Translate
            component="input"
            type="text"
            className="form-input"
            id="form-subject"
            value={toSend.subject}
            onChange={handleChange}
            name="subject"
            attributes={{ placeholder: "placeholder.p4" }}
          />
          <Translate
            component="input"
            type="text"
            className="form-input form-message"
            id="form-message"
            value={toSend.message}
            onChange={handleChange}
            name="message"
            attributes={{ placeholder: "placeholder.p5" }}
          />

          <div id="confirmation-area" className="confirmation-area">
            <div className="conf-text" id="conf-text" name="conf-text"></div>
          </div>

          <div id="contact-btn-area" className="contact-btn-area">
            <button
              className="btn confirmation-btn"
              type="submit"
              onClick={() => refreshForm()}
            >
              <Translate content="buttons.btn6" component="p" />
              
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
