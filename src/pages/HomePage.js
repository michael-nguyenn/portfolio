import './HomePage.scss';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills/Skills';

import { Fragment, useRef } from 'react';

function HomePage() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const scroll = (section) => {
    section.current.scrollIntoView();
  };

  return (
    <Fragment>
      <Hero
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        scroll={scroll}
      />
      <main>
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Skills skillsRef={skillsRef} />
      </main>
      <Footer contactRef={contactRef} />
      <div id="notifications"></div>
    </Fragment>
  );
}

export default HomePage;
