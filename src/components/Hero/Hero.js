import './Hero.scss';
import { useEffect } from 'react';
import gsap, { Power4 } from 'gsap';

function Hero() {
  const headerAnimation = () => {
    //Initialize timeline
    const tl = gsap.timeline();

    tl.from('.landing__period', {
      y: -250,
      opacity: 0,
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
        '.landing__author-text',
        {
          y: 250,
          duration: 0.8,
        },
        '-=0.8'
      );
  };

  useEffect(() => {
    headerAnimation();
  }, []);

  return (
    <section className="landing">
      <p className="landing__author">
        <span className="landing__author-text">Michael Nguyen</span>
      </p>

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
