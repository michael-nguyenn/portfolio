import './ContactBanner.scss';
import gsap, { Linear } from 'gsap';
import { useEffect } from 'react';

function Contact() {
  const animateBanner = () => {
    gsap.to('.contact-banner__content', {
      xPercent: -100,
      duration: 10,
      repeat: -1,
      ease: Linear.easeNone,
    });
  };

  useEffect(() => {
    animateBanner();
  });

  return (
    <div className="contact-banner">
      <div className="contact-banner__inner">
        <div className="contact-banner__content">
          <h4 className="contact-banner__description">Let's get in touch</h4>
          <a
            target="_blank"
            aria-label="Michael Nguyen - Getting in touch"
            rel="noreferrer"
            draggable="false"
            href="mailto:n93michael@gmail.com?subject=Getting%20In%20Touch"
            className="contact-banner__link"
          >
            EMAIL ME
          </a>
          <h4 className="contact-banner__description">Let's get in touch</h4>
          <a
            target="_blank"
            aria-label="Michael Nguyen - Getting in touch"
            rel="noreferrer"
            draggable="false"
            href="mailto:n93michael@gmail.com?subject=Getting%20In%20Touch"
            className="contact-banner__link"
          >
            EMAIL ME
          </a>
        </div>

        <div className="contact-banner__content">
          <h4 className="contact-banner__description">Let's get in touch</h4>
          <a
            target="_blank"
            aria-label="Michael Nguyen - Getting in touch"
            rel="noreferrer"
            draggable="false"
            href="mailto:n93michael@gmail.com?subject=Getting%20In%20Touch"
            className="contact-banner__link"
          >
            EMAIL ME
          </a>
          <h4 className="contact-banner__description">Let's get in touch</h4>
          <a
            target="_blank"
            aria-label="Michael Nguyen - Getting in touch"
            rel="noreferrer"
            draggable="false"
            href="mailto:n93michael@gmail.com?subject=Getting%20In%20Touch"
            className="contact-banner__link"
          >
            EMAIL ME
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
