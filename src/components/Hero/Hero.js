import './Hero.scss';

function Hero() {
  return (
    <section className="landing">
      <div className="landing__author">
        <span className="landing__author-text">Michael Nguyen</span>
      </div>

      <div className="landing__periods">
        <span className="landing__period"></span>
        <span className="landing__period"></span>
        <span className="landing__period"></span>
        <span className="landing__period"></span>
      </div>
    </section>
  );
}

export default Hero;
