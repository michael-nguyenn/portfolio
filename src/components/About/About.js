import './About.scss';
import headshot from '../../assets/images/michael.jpeg';
import SplitType from 'split-type';
import gsap, { Power4 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function About({ aboutRef }) {
  //Create animation for text
  const animateText = () => {
    //Split All Text
    const aboutMeText = new SplitType('.biography__title', {
      types: 'words',
      absolute: true,
    });

    //Animate Text
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.about',
          start: 'top center',
          end: 'top 40%',
          scrub: 3,
          ease: Power4.easeInOut,
        },
      })
      .from(aboutMeText.words, {
        y: 50,
        duration: 1,
        stagger: 0.1,
      })
      .from('.biography__intro > span', {
        y: 60,
        duration: 1,
        stagger: 0.1,
      })
      .from('.biography__description--first span', {
        y: 400,
        duration: 1,
      })
      .from('.biography__description--second span', {
        y: 400,
        duration: 1,
      })
      .from('.biography__resume', {
        opacity: 0,
        duration: 0.5,
      });
  };

  //Create animation for image
  const animateImage = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.about',
          start: 'top center',
          end: 'top top',
          scrub: 3,
          ease: Power4.easeInOut,
        },
      })
      .from('.headshot__img', {
        scale: 0.4,
        duration: 1,
      })
      .to('.headshot__img', {
        immediateRender: false,
        scale: 0.95,
        duration: 1,
      });
  };

  useEffect(() => {
    animateText();
    animateImage();
  });

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="headshot">
        <img
          className="headshot__img"
          src={headshot}
          alt="Headshot of Michael Nguyen looking sharp"
        />
      </div>

      <div className="biography">
        <h2 className="biography__title">ABOUT ME</h2>
        <h2 className="biography__intro">
          <span>Hey, I'm</span>
          <span className="biography__intro--name"> Michael!</span>
        </h2>

        <p className="biography__description biography__description--first">
          <span>
            Hello and welcome! I am a full-stack developer based in Toronto.
            Coming from the healthcare world, I am currently working as a
            Paramedic for the city of Toronto and looking to make a big splash
            in the world of web development!
          </span>
        </p>
        <p className="biography__description biography__description--second">
          <span>
            I am currently exploring new opportunities and excited for my next
            challenge! Check out some of my projects below 🙂
          </span>
        </p>

        <a
          href="/michael-nguyen-resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="biography__resume"
        >
          View Résumé
        </a>
      </div>
    </section>
  );
}

export default About;
