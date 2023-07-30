import React, { useState } from "react";
import "../contacts/contacts.css";
/*import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope,faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";*/
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ygaf39",
        "template_1uxrj6i",
        formRef.current,
        "W_1Z7s4--mziSFPYK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's disscus your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              {/*<FontAwesomeIcon icon={faPhone} className="c-icon"/>*/}
              +27 78 938 4743
            </div>
            <div className="c-info-item">
              {/*<FontAwesomeIcon icon={faEnvelope} className="c-icon"/>*/}
              ndosisetlole@gmail.com
            </div>
            <div className="c-info-item">
              {/*<FontAwesomeIcon icon={faMapPin} className="c-icon"/>*/}
              17221 Icilishi Street, Kutlwanong Kimberley 8345
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch with me.</b> I am available to work.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank You..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
