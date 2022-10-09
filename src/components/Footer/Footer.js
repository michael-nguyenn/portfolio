import ContactForm from '../Contact/ContactForm/ContactForm';
import ContactBanner from '../Contact/ContactBanner/ContactBanner';

import './Footer.scss';
import ContactSection from '../Contact/ContactSection/ContactSection';
import ContactFooter from '../Contact/ContactFooter/ContactFooter';

function Footer() {
  return (
    <footer>
      {/* <ContactForm /> */}
      <ContactBanner />
      <ContactSection />
      <ContactFooter />
    </footer>
  );
}

export default Footer;
