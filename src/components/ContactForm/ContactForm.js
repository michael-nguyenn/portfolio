import { useState } from 'react';
import './ContactForm.scss';

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    console.log('boom, submitted');
  };

  return (
    <section className="contact-form">
      <h1 className="contact-form__header">Contact</h1>
      <p className="contact-form__description">
        Let's get in contact, and make something awesome!
      </p>

      <form className="form" onSubmit={sendMessageHandler}>
        <div className="form__controls">
          <div className="form__control">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>

          <div className="form__control">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
        </div>

        <div className="form__control">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            rows="5"
            placeholder="Message"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className="form__action">
          <button className="form__btn">Send!</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
