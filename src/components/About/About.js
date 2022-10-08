import './About.scss';
import headshot from '../../assets/images/michael.jpeg';

function About() {
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
        <h2 className="biography__intro">Hey, I'm Michael!</h2>

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
