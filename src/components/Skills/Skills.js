import './Skills.scss';
import skills from '../../data/skills.json';

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="skills-section__title">SKILLS</h2>
      <div className="skills">
        {skills.map((skill) => {
          return (
            <div className="skills__container" key={skill.key}>
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
    </div>
  );
}

export default Skills;
