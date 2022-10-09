import './Projects.scss';

function Projects() {
  return (
    <section className="projects">
      <h3 className="projects__header">PROJECTS</h3>

      <article className="project">
        <div
          className="project__wrapper"
          style={{
            background: 'linear-gradient(#e66465, #9198e5)',
          }}
        >
          <h3 className="project__header">PEN TO PAPER</h3>
          <p className="project__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            odio porttitor, mollis tortor sed, posuere velit. Sed facilisis
            accumsan enim non scelerisque. Phasellus sit amet dolor nec quam
            commodo tristique.
          </p>

          <div className="project__buttons">
            <a
              href="https://github.com/michael-nguyenn"
              target="_blank"
              rel="noreferrer"
              className="project__link"
            >
              Live Site
            </a>

            <a
              href="https://github.com/michael-nguyenn"
              target="_blank"
              rel="noreferrer"
              className="project__link"
            >
              Repo
            </a>
          </div>

          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*"
            alt="placeholder"
            className="project__img"
          />

          <div className="project__tech">
            <p className="project__stack">
              Tech Stack: JS, SCSS, React, DraftJS, Express, MySQL
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;
