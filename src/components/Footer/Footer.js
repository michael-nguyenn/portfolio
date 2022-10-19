import ContactForm from '../Contact/ContactForm/ContactForm';
import ContactBanner from '../Contact/ContactBanner/ContactBanner';

import './Footer.scss';
import ContactSection from '../Contact/ContactSection/ContactSection';
import ContactFooter from '../Contact/ContactFooter/ContactFooter';

function Footer({ contactRef }) {
  return (
    <footer id="contact" ref={contactRef}>
      {/* <ContactForm /> */}
      <ContactBanner />
      <ContactSection />
      <ContactFooter />
    </footer>
  );
}

export default Footer;
