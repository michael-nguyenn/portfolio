import './ContactForm.scss';
import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://getform.io/f/528a1b66-bbd7-42f3-bf94-5cecad109dff',
        {
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage,
        }
      );
      setEnteredName('');
      setEnteredEmail('');
      setEnteredMessage('');
    } catch (error) {
      console.log(error);
    }
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
              onChange={(e) => setEnteredName(e.target.value)}
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
              onChange={(e) => setEnteredEmail(e.target.value)}
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
            onChange={(e) => setEnteredMessage(e.target.value)}
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
