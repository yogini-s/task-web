import React from 'react';
import './Footer.css';
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content1">
        <div className="footer-left">
          <div className="email-signup">
            <h3 className="email-heading">Subscribe to our newsletter for regular updates about Offers, Coupons & more</h3>
            <div className="main-flex">
              <div className="email-input-container">
                <input type="email" placeholder="Your email address" className="email-input" />
              </div>
              <div className="subscribe-button-section">
                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-section">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Instagram"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">How we work</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Cancel your booking</a></li>
            <li><a href="#">Refund policies</a></li>
            <li><a href="#">Use a coupon</a></li>
            <li><a href="#">Travel documents</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li><a href="#">Airline fees</a></li>
            <li><a href="#">Airlines</a></li>
            <li><a href="#">Low fare trips</a></li>
            <li><a href="#">Badges & Certificates</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-methods">
          <div className="payment-icons">
            <FaCcPaypal aria-label="PayPal" />
            <FaCcVisa aria-label="Visa" />
            <FaCcMastercard aria-label="MasterCard" />
            {/* <FaCcMaestro  aria-label="Maestro" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


