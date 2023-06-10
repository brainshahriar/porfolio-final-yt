import React from "react";
import "./contact.scss";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ipuktg', 'template_shgn6yn', form.current, 'H3hj9aDk5I9p6UHVj')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms ? Send me an email. 👋
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          {/* <div className="contact__form-group"> */}
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                name="user_name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                name="user_email"
              />
            </div>
            {/* <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
                name="message"
              />
            </div> */}
            <div className="contact__form-div contact__form-area">
              <textarea
                className="contact__form-input"
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Write your message"
              ></textarea>
            </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
