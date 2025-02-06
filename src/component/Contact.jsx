import React from 'react';
import "./Contact.css";
import { contactData } from '../data/ContactData';

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <div>
        <h2 className='contact-heading'>Contact</h2>
      </div>
      <div className='contact-middle' data-aos="zoom-in" data-aos-duration="1000">
        {contactData.map((item, id) => (
          <a key={id} href={item.link} target='_blank' rel='noopener noreferrer' className='contact-item'>
            <div className='contact-logo'>{item.logo}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
