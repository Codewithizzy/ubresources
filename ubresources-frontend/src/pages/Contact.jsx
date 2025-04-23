import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="ub-contact">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              title="UbResources Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31734.124370385853!2d6.838088039550787!3d6.162146200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104391bd7b90a0c9%3A0x374c42a0227acbb!2sBUILDING%20MATERIALS%20INTERNATIONAL%20MARKET%2C%20OGIDI!5e0!3m2!1sen!2suk!4v1744648466809!5m2!1sen!2suk" 
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <div className="detail-item">
              <i className="fas fa-envelope"></i>
              <p>urbanbuilds@workmail.com</p>
            </div>
            <div className="detail-item">
              <i className="fas fa-phone"></i>
              <p>+2347031901705</p>
            </div>
            <div className="detail-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Building Materials, Ogidi, Anambra, Nigeria.</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;