import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [buttonColor, setButtonColor] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitMessage("Sending...");

    emailjs
      .sendForm('service_v305l7d', 'template_xe4ydds', form.current, {
        publicKey: 'onJ7rKZZblrWWCNO8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitMessage("Email Sent!");
          setButtonColor('green');
          setTimeout(() => { 
            setButtonColor('');
            setSubmitMessage("");
        }, 3500);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setButtonColor('red');
          setSubmitMessage("Email failed to send...");
          setTimeout(() => {
            setButtonColor('');
            setSubmitMessage("");
           } ,3500)
        },
      );
  };

  return (
    <div className = "contactContainer">
        <h1>&#128187;Let's Connect</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" style = {{backgroundColor: buttonColor}} />
      <h3>{submitMessage}</h3>
    </form>
    </div>
  );
};

export default Contact;