"use client"
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              
              <ul>
                <li><a href="#"> parkingguardian@gmail.com</a></li>
                <li><a href="#">+91 932*******</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div className="footer-col">
              
              {/* <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul> */}
            </div>
            {/* <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><a href="#">watch</a></li>
                <li><a href="#">bag</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">dress</a></li>
              </ul>
            </div> */}
            <div className="footer-col">
              <h4>© 2024 TheParkingGuardian      All rights reserved.</h4>
              {/* <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul> */}
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <button>
                <FontAwesomeIcon icon={faFacebookF} />
                &nbsp;
                </button>
                <button>
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp;
                </button>
                <button>
                <FontAwesomeIcon icon={faTwitter} /> &nbsp;
                </button>
                <button>
                <FontAwesomeIcon icon={faLinkedin} />
                &nbsp;
                </button>
                {/* Uncomment these lines if you want to use the anchor tags */}
                {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
                {/* <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
              </div>
            </div>
            <div className="footer-col">
              <div className='button'> Contact us</div>
              {/* <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
