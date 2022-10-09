import ContactForm from '../Contact/ContactForm/ContactForm';
import ContactBanner from '../Contact/ContactBanner/ContactBanner';

import './Footer.scss';
import ContactSection from '../Contact/ContactSection/ContactSection';

function Footer() {
  return (
    <footer>
      {/* <ContactForm /> */}
      <ContactBanner />
      <ContactSection />
    </footer>
  );
}

export default Footer;
