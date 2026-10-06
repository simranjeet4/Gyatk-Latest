import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon, LinkedinIcon } from './Icons';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="gyatk-topbar">
      <div className="container gyatk-topbar-inner">
        <div className="gyatk-topbar-left">
          <a href="tel:+917403008844" className="gyatk-topbar-item phone-item">
            <Phone size={13} className="gyatk-topbar-icon" />
            <span>+91 74030 08844</span>
          </a>
          <a href="mailto:info@gyatk.com" className="gyatk-topbar-item email-item">
            <Mail size={13} className="gyatk-topbar-icon" />
            <span>info@gyatk.com</span>
          </a>
        </div>

        <div className="gyatk-topbar-socials">
          <a 
            href="https://www.facebook.com/gyatk.technologies" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gyatk-social-btn social-facebook"
            aria-label="Facebook"
          >
            <FacebookIcon size={14} />
          </a>
          <a 
            href="https://twitter.com/gyatktech" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gyatk-social-btn social-twitter"
            aria-label="Twitter"
          >
            <TwitterIcon size={14} />
          </a>
          <a 
            href="https://www.youtube.com/@gyatk4479" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gyatk-social-btn social-youtube"
            aria-label="YouTube"
          >
            <YoutubeIcon size={14} />
          </a>
          <a 
            href="https://www.instagram.com/gyatk.technologies/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gyatk-social-btn social-instagram"
            aria-label="Instagram"
          >
            <InstagramIcon size={14} />
          </a>
          <a 
            href="https://uk.linkedin.com/company/gyatk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gyatk-social-btn social-linkedin"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
