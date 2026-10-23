import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="colophon" className="gyatk-footer-root">
      <div className="footer-carbon-overlay"></div>
      <div className="container footer-content-wrap">
        <div className="footer-cols-row">
          {/* Column 1: Brand & Socials */}
          <div className="footer-col-1">
            <Link to="/" className="footer-brand-logo-link">
              <img 
                src="/images/logoA.png" 
                alt="Gyatk" 
                className="footer-brand-logo"
                loading="lazy"
              />
            </Link>
            <p className="footer-brand-text">
              We design, develop, and deliver systems with the coveted VCR feature that out-perform conventional systems with newer functionalities and capabilities.
            </p>
            <ul className="footer-social-icons-list">
              <li>
                <a href="https://www.facebook.com/gyatk.technologies" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon size={16} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gyatk.technologies/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={16} />
                </a>
              </li>
              <li>
                <a href="https://uk.linkedin.com/company/gyatk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={16} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/gyatktech" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <TwitterIcon size={16} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@gyatk4479" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YoutubeIcon size={16} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="footer-col-2">
            <h3 className="footer-col-heading">Company</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/zero-emission-technology">About Us</Link></li>
              <li><Link to="/patents">Patents</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/admin" className="admin-shortcut-link">Admin Portal (SEO & CMS)</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col-3">
            <h3 className="footer-col-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/proposition">Our Proposition</Link></li>
              <li><Link to="/rvcr-business-case">RVCR Business Case</Link></li>
              <li><Link to="/strategic-advantage">Strategic Advantage</Link></li>
              <li><Link to="/technical-services">Technical Services</Link></li>
              <li><Link to="/technology-and-innovation-services">Technology And Innovation Services</Link></li>
              <li><Link to="/commercial-services">Commercial Services</Link></li>
              <li><Link to="/what-we-offer">What We Offer</Link></li>
              <li><Link to="/why-rvcr">Why RVCR</Link></li>
            </ul>
          </div>

          {/* Column 4: Address Info */}
          <div className="footer-col-4">
            <h3 className="footer-col-heading">Address info</h3>
            
            {/* India Entity */}
            <div className="address-box-item">
              <img src="/images/india.png" alt="India" className="country-flag-icon" />
              <div>
                <h4 className="country-name">India</h4>
                <p className="entity-desc">GYATK RVCR Apparatus Pvt Ltd, India,</p>
                <span className="cin-text">CIN : U73100KL2005PTC017897</span>
              </div>
            </div>



            {/* Direct Contacts */}
            <div className="footer-direct-contacts">
              <a href="tel:+917403008844" className="footer-contact-link">
                <Phone size={15} />
                <span>+91 74030 08844</span>
              </a>
              <a href="mailto:info@gyatk.com" className="footer-contact-link">
                <Mail size={15} />
                <span>info@gyatk.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="footer-bottom-bar">
          <span className="copyright-left">Copyright &copy; 2023 Gyatk</span>
          <span className="copyright-right">
            <a href="https://pronextdigital.com/" target="_blank" rel="noopener noreferrer">
              Pro Next Digital
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
