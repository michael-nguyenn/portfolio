import './Menu.scss';

const Menu = ({ aboutRef, projectsRef, skillsRef, contactRef, scroll }) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li
          className="menu__item"
          onClick={() => scroll(aboutRef)}
          href="about"
        >
          About Me
        </li>

        <li
          className="menu__item"
          onClick={() => scroll(projectsRef)}
          href="projects"
        >
          Projects
        </li>

        <li
          className="menu__item"
          onClick={() => scroll(skillsRef)}
          href="skills"
        >
          Skills
        </li>

        <li
          className="menu__item"
          onClick={() => scroll(contactRef)}
          href="contact"
        >
          Contact
        </li>

        <a
          href="/michael-nguyen-resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="menu__resume"
        >
          Résumé
        </a>
      </ul>
    </nav>
  );
};

export default Menu;
