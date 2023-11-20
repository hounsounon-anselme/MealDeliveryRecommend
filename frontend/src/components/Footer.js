import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
	    <div className="footer">

      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@fooddeliveryapp.com</p>
            <p>Phone: + (229) 96 09 22 46</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Facebook
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                Twitter
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                Instagram
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <p>&copy; 2023 FoodDelivery App. All rights reserved.</p>
      </div>
	  </div>

    </footer>
  );
};

export default Footer;
