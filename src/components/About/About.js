import './About.scss';
import headshot from '../../assets/images/michael.jpeg';
import SplitType from 'split-type';
import gsap, { Power4 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function About() {
  //Create animation for text
  const animateText = () => {
    //Split All Text
    const aboutMeText = new SplitType('.biography__title', {
      types: 'words',
      absolute: true,
    });

    const introText = new SplitType('.biography__intro', {
      types: 'words',
      absolute: true,
    });

    const descriptionText = new SplitType('.biography__description', {
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
      .from(introText.words, {
        y: 60,
        duration: 1,
        stagger: 0.1,
      })
      .from(descriptionText.words, {
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
          markers: true,
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
    <section className="about">
      <div className="headshot">
        <img
          className="headshot__img"
          src={headshot}
          alt="Headshot of Michael Nguyen looking sharp"
        />
      </div>

      <div className="biography">
        <h3 className="biography__title">ABOUT ME</h3>
        <h2 className="biography__intro">
          Hey, I'm <span className="biography__intro--name">Michael!</span>
        </h2>

        <p className="biography__description">
          Hello and welcome! I am a full-stack developer based in Toronto.
          Coming from the healthcare world, I am currently working as a
          Paramedic for the city of Toronto and looking to make a big splash in
          the world of web development!
        </p>
        <p className="biography__description">
          I am currently exploring new opportunities and excited for my next
          challenge! Check out some of my projects below 🙂
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
