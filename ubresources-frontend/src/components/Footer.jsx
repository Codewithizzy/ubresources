import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="ub-footer">
      <div className="container">
        <div className="footer-section">
          <h3>UB Resources</h3>
          <p>Your trusted e-commerce platform for quality resources.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: urbanbuilds@workmail.com</p>
          <p>Phone: +2347031901705</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} UB Resources. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;