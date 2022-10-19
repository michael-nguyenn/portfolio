import './Skills.scss';
import skills from '../../data/skills.json';
import { useEffect } from 'react';
import gsap, { Power4 } from 'gsap';

function Skills({ skillsRef }) {
  const animateSkills = () => {
    //initialize timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-section',
        start: '60% bottom',
        end: '80% bottom',
        scrub: 4,
        ease: Power4.easeInOut,
      },
    });

    //animate html icon
    tl.from('.icon-html', {
      yPercent: 100,
      duration: 1,
      opacity: 0,
    });

    //animate node icon
    tl.from(
      '.icon-nodejs',
      {
        yPercent: -100,
        duration: 1,
        opacity: 0,
      },
      '<'
    );

    //animate nextjs
    tl.from(
      '.icon-nextjs',
      {
        xPercent: 100,
        duration: 1,
        opacity: 0,
      },
      '<'
    );

    //animate redux
    tl.from(
      '.icon-redux',
      {
        xPercent: -150,
        duration: 1,
        opacity: 0,
      },
      '<'
    );

    //animate css
    tl.from('.icon-css', {
      yPercent: 50,
      duration: 1,
      opacity: 0,
    });

    //animate scss
    tl.from(
      '.icon-scss',
      {
        xPercent: -100,
        duration: 1,
        opacity: 0,
      },
      '<'
    );

    //animate mysql
    tl.from(
      '.icon-mysql',
      {
        yPercent: -100,
        duration: 1,
        opacity: 0,
      },
      '<'
    );

    //animate mysql
    tl.from(
      '.icon-express',
      {
        xPercent: 100,
        duration: 1,
        opacity: 0,
      },
      '<'
    );

    //animate mysql
    tl.from('.icon-mongodb', {
      yPercent: -100,
      duration: 1,
      opacity: 0,
    });

    //animate typescript
    tl.from(
      '.icon-typescript',
      {
        yPercent: 100,
        duration: 1,
        opacity: 0,
      },
      '<'
    );

    //animate typescript
    if (window.innerWidth < 1280) {
      tl.from('.icon-react', {
        yPercent: 100,
        duration: 1,
        opacity: 0,
      });
    } else {
      tl.from('.icon-react', {
        xPercent: 100,
        duration: 1,
        opacity: 0,
      });
    }

    //animate typescript
    if (window.innerWidth < 1280) {
      tl.from(
        '.icon-firebase',
        {
          yPercent: -100,
          duration: 1,
          opacity: 0,
        },
        '<'
      );
    } else {
      tl.from(
        '.icon-firebase',
        {
          xPercent: -150,
          duration: 1,
          opacity: 0,
        },
        '<'
      );
    }
  };

  useEffect(() => {
    animateSkills();
  });

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <h2 className="skills-section__title">SKILLS</h2>
      <div className="skills">
        {skills.map((skill) => {
          return (
            <div
              className={`"skills__container" ${skill.spcialClass} `}
              key={skill.key}
            >
              <img
                src={skill.src}
                alt={`Icon of ${skill.name}`}
                className="skills__img"
              />
              {/* <span className="skills__name">{skill.name}</span> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
