import './ContactFooter.scss';
import hand from '../../../assets/icons/hands.png';
import gsap, { Power4 } from 'gsap';
import { useEffect, useRef } from 'react';

function ContactFooter() {
  //Create ref
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);

  //Anime on mouse over
  const mouseOverHandler = () => {
    leftHandRef.current = gsap.to(leftHandRef.current, {
      xPercent: 15,
      translateY: -1,
      rotate: -25,
      duration: 0.5,
      paused: true,
      ease: Power4.easeInOut,
    });

    rightHandRef.current = gsap.to(rightHandRef.current, {
      xPercent: -15,
      translateY: 1,
      duration: 0.5,
      paused: true,
      rotate: 150,
      ease: Power4.easeInOut,
    });
  };

  const handleMouseOverText = () => {
    leftHandRef.current.play();
    rightHandRef.current.play();
  };

  const handleMouseLeaveText = () => {
    leftHandRef.current.reverse();
    rightHandRef.current.reverse();
  };

  useEffect(() => {
    mouseOverHandler();
  });

  return (
    <div className="contact-footer">
      <div className="contact-footer">
        <div className="landing__stars">
          <div className="landing__star1"></div>
          <div className="landing__star2"></div>
          <div className="landing__star3"></div>
        </div>

        <a
          href="https://github.com/michael-nguyenn/portfolio"
          target="_blank"
          rel="noreferrer"
          className="contact-credit__text"
          onMouseEnter={() => handleMouseOverText()}
          onMouseLeave={() => handleMouseLeaveText()}
        >
          Michael Nguyen
        </a>

        <div className="contact-credit">
          <img
            className="contact-credit__hand contact-credit__hand--left"
            src={hand}
            alt="Left Hand"
            loading="lazy"
            ref={leftHandRef}
          />

          <img
            className="contact-credit__hand contact-credit__hand--right"
            src={hand}
            alt="Left Right"
            loading="lazy"
            ref={rightHandRef}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
