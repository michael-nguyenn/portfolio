import './HomePage.scss';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills/Skills';

import { Fragment } from 'react';

function HomePage() {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <div id="notifications"></div>
    </Fragment>
  );
}

export default HomePage;
