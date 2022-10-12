import './Projects.scss';
import projects from '../../data/projects.json';

function Projects() {
  return (
    <section className="projects">
      <h3 className="projects__header">PROJECTS</h3>

      {projects.map((project) => {
        return (
          <article className="project" key={project.id}>
            <div
              className="project__wrapper"
              style={{
                background: `${project.background}`,
              }}
            >
              <h3 className="project__header">{project.name}</h3>
              <p className="project__description">{project.description}</p>

              <div className="project__buttons">
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                >
                  Live Site
                </a>

                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                >
                  Repo
                </a>
              </div>

              <img
                src={project.projectImg}
                alt="placeholder"
                className="project__img"
              />

              <div className="project__tech">
                <span className="project__title">Tech Stack:</span>
                <div className="project__stack">
                  {project.techStack.map((tech) => {
                    return (
                      <img
                        className="project__icon"
                        src={tech}
                        alt="tech stack icon"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Projects;
