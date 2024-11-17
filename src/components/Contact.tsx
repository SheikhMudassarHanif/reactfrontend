// components/Contact.js
import React from 'react';
import './Contact.css'; // Styling for contact section

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>CONTACT</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Phone: +62 812 3456 7890</p>
          <p>Email: support@sabino.com</p>
        </div>
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Message</label>
          <textarea placeholder="Enter your message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
