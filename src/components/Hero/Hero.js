import './Hero.scss';
import { useEffect } from 'react';
import gsap, { Power4 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const headerAnimation = () => {
    //Initialize timeline
    const tl = gsap.timeline();

    tl
      //Starting animation after loading
      .from('.landing__period', {
        opacity: 0,
        y: -250,
        duration: 0.5,
        stagger: 0.2,
        ease: Power4.easeOut,
      })
      .to('.landing__periods', {
        yPercent: 100,
        duration: 1.5,
        ease: Power4.easeInOut,
      })
      .from(
        '.landing__first-name',
        {
          y: -250,
          duration: 1,
          opacity: 0,
          stagger: 0.1,
          ease: Power4.easeOut,
        },
        '-=1'
      )
      .from(
        '.landing__last-name',
        {
          y: -250,
          duration: 1,
          opacity: 0,
          stagger: 0.1,
          ease: Power4.easeOut,
        },
        '-=0.5'
      );
  };

  const authorNameAnimation = () => {
    gsap.to('.landing__first-name', {
      y: -250,
      immediateRender: false,
      stagger: -0.1,
      scrollTrigger: {
        trigger: '.landing__author',
        markers: true,
        start: 'top top',
        end: 'bottom top',
        scrub: 4,
      },
    });

    gsap.to('.landing__last-name', {
      y: -250,
      immediateRender: false,
      stagger: -0.1,
      scrollTrigger: {
        trigger: '.landing__author',
        markers: true,
        start: 'top top',
        end: 'bottom top',
        scrub: 4,
      },
    });
  };

  useEffect(() => {
    headerAnimation();
    authorNameAnimation();
  }, []);

  return (
    <section className="landing">
      <div className="landing__author">
        <p className="landing__name">
          <span className="landing__first-name">M</span>
          <span className="landing__first-name">i</span>
          <span className="landing__first-name">c</span>
          <span className="landing__first-name">h</span>
          <span className="landing__first-name">a</span>
          <span className="landing__first-name">e</span>
          <span className="landing__first-name">l</span>
        </p>
        <p className="landing__name">
          <span className="landing__last-name">N</span>
          <span className="landing__last-name">g</span>
          <span className="landing__last-name">u</span>
          <span className="landing__last-name">y</span>
          <span className="landing__last-name">e</span>
          <span className="landing__last-name">n</span>
        </p>
      </div>
      <p className="landing__periods">
        <span className="landing__period"></span>
        <span className="landing__period"></span>
        <span className="landing__period"></span>
        <span className="landing__period"></span>
      </p>
    </section>
  );
}

export default Hero;
