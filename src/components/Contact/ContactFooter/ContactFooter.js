import './ContactFooter.scss';
import hand from '../../../assets/icons/hands.png';

function ContactFooter() {
  return (
    <div className="contact-footer">
      <div className="contact-footer">
        <div className="landing__stars">
          <div className="landing__star1"></div>
          <div className="landing__star2"></div>
          <div className="landing__star3"></div>
        </div>

        <div className="contact-credit">
          <img
            className="contact-credit__hand contact-credit__hand--left"
            src={hand}
            alt="Left Hand"
            loading="lazy"
          />

          <img
            className="contact-credit__hand contact-credit__hand--right"
            src={hand}
            alt="Left Right"
            loading="lazy"
          />
        </div>
        <a
          href="https://github.com/michael-nguyenn/portfolio"
          target="_blank"
          rel="noreferrer"
          className="contact-credit__text"
        >
          Michael Nguyen
        </a>
      </div>
    </div>
  );
}

export default ContactFooter;
