import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSections.css';

export default function PioneersSection() {
  return (
    <section id="whowe" className="section-common">
      <div className="whowe-overlay"></div>
      <div className="container">
        <div className="two-col-row">
          {/* Left Column: Image */}
          <div className="framed-photo-wrap">
            <img 
              src="/images/New-Project-7.jpg" 
              alt="Pioneers of RVCR Technology" 
              className="framed-photo"
              loading="lazy"
            />
          </div>

          {/* Right Column: Text */}
          <div className="whowe-text-col">
            <span className="section-badge-purple">Who We Are</span>
            <h2 className="section-heading-dark">Pioneers of<br />RVCR Technology</h2>
            <div className="desc-justify">
              <p>We are inventors of globally patented RVCR concept, a superior principle in ‘Mechanisms of energy conversion’.</p>
              <p>We specialize in developing newer superior ‘energy efficient’ systems technologies – based on RVCR principle.</p>
            </div>
            <Link to="/zero-emission-technology" className="btn-gradient">
              <span>About us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
