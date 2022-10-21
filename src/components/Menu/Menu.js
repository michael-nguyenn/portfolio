import { useState } from 'react';
import './Menu.scss';

const Menu = ({ aboutRef, projectsRef, skillsRef, contactRef, scroll }) => {
  const [menuActive, setMenuActive] = useState('');

  const toggleMenu = () => {
    if (menuActive === '') {
      setMenuActive('menu-active');
    } else {
      setMenuActive('');
    }
  };

  return (
    <nav className="nav">
      <div onClick={toggleMenu} className="nav__title">
        Menu
      </div>

      <div className={`menu ${menuActive}`}>
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
      </div>
    </nav>
  );
};

export default Menu;
