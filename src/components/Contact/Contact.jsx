<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> f85955c05e84359a5b0e7da278b98392bfed7eeb
import ContactForm from '../ContactForm/ContactForm';

const Contact = ({ showContactForm, toggleContactForm }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (showContactForm) {
      scrollToContact(); 
    }
  }, [showContactForm]);

  return (
    <>
      <div id='contactt' className="alert flex justify-center alert-success mt-10 bg-transparent border-purple-500 border-solid border-2">
        <button className="btn text-white" onClick={() => {
          toggleContactForm();
        }}>
          {showContactForm ? 'Cancel' : 'Contact me'}
        </button>
      </div>

      {showContactForm && <ContactForm />}
    </>
  );
};

export default Contact;