import './Menu.scss';

const Menu = ({ aboutRef, projectsRef, skillsRef, contactRef, scroll }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => scroll(aboutRef)} href="about">
          About Me
        </li>

        <li onClick={() => scroll(projectsRef)} href="projects">
          Projects
        </li>

        <li onClick={() => scroll(skillsRef)} href="skills">
          Skills
        </li>

        <li onClick={() => scroll(contactRef)} href="contact">
          Contact
        </li>

        <li>
          <a
            href="/michael-nguyen-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            Résumé
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
