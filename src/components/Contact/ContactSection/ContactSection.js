import './ContactSection.scss';
import emailIcon from '../../../assets/icons/email-icon.svg';

function ContactSection() {
  return (
    <section className="contact">
      {/* <h2 className="contact__header">CONTACT ME</h2> */}

      <div className="contact__container">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/michael-nguyenn"
          className="contact__link"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/github/github-original.svg"
            alt="GitHub Icon"
            className="contact__img"
          />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/michael--nguyen/"
          className="contact__link"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/linkedin/linkedin-original.svg"
            alt="GitHub Icon"
            className="contact__img"
          />
        </a>

        <a
          target="_blank"
          aria-label="Michael Nguyen - Getting in touch"
          rel="noreferrer"
          draggable="false"
          href="mailto:n93michael@gmail.com?subject=Getting%20In%20Touch"
          className="contact__link"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt="Icon of Mail"
            className="contact__img"
          />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
