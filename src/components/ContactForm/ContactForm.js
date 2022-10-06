import './ContactForm.scss';
import Notification from '../Notification/Notification';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); //pending, success or error
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      //   console.log(
      //     `Submitted! Name:${enteredName}, Email:${enteredEmail}, Message:${enteredMessage}`
      //   );

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
      setRequestStatus('success');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error :(',
      message: requestError,
    };
  }

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

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
