import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending");
    emailjs.sendForm('service_2qdhl5f', 'template_35cvlae', form.current, 'NVGB9GwmS2TQ7rk2C')
      .then((result) => {
          setButtonText("Sent");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={10} md={5}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__rollIn" : "preAnimated"} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={1}></Col>
          <Col size={12} md={6}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : "preAnimated"}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_name" placeholder="First Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_last_name" placeholder="Last Name"/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" name="user_email" placeholder="Email Address"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
