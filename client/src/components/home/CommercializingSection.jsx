import React from 'react';
import './HomeSections.css';

export default function CommercializingSection() {
  return (
    <section id="pursuit" className="section-common">
      <div className="container">
        <div className="two-col-row">
          {/* Left Column: Text */}
          <div className="pursuit-text-col">
            <span className="section-badge-purple">OUR PURSUIT</span>
            <h2 className="section-heading-dark">Commercialising RVCR tech</h2>
            <div className="desc-justify">
              <p>We design, develop, and deliver systems with the coveted VCR feature that out-perform conventional systems with newer functionalities and capabilities.</p>
              <p>We partner with industry players in projects for creating newer RVCR systems for use and sale.</p>
            </div>
            <a 
              href="https://rvcr.tech/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gradient"
            >
              <span>About RVCR</span>
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="framed-photo-wrap">
            <img 
              src="/images/rvcr-commercializing.jpg" 
              alt="Commercialising RVCR tech" 
              className="framed-photo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
