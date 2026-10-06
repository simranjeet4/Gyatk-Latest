import React from 'react';
import './HomeSections.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section-wrap">
      <div className="container">
        <div className="section-title-center projects-header">
          <h2 className="projects-main-heading">PROJECTS</h2>
        </div>

        <div className="projects-navy-card">
          {/* Left Column: Image with white frame & shadow, overlapping top */}
          <div className="projects-media-frame">
            <img 
              src="/images/Phy-Detroit-Proto-pic-left-Iso.jpg" 
              alt="Physical Detroit Prototype" 
              className="projects-proto-img"
              loading="lazy"
            />
          </div>

          {/* Right Column: Text content */}
          <div className="projects-info-content">
            <h3 className="projects-info-heading">Our ongoing and planned projects</h3>
            <p className="projects-info-italic">
              The physics of RVCR has numerous downstream engineering applications.
            </p>
            <div className="projects-info-desc">
              <p>
                Our 1<sup>st</sup> project is in the field of Green fuel I.C.Engine. (An Rotary -VCR system that allows switching from fossil to green fuels and vice-versa in real-time).
              </p>
              <p>
                The 2<sup>nd</sup> project is about developing RVCR based wind motor for renewable energy power generation.
              </p>
            </div>
            <a 
              href="https://kgyat.com/projects" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="projects-cta-link"
            >
              <span className="projects-cta-text">RVCR Product Project</span>
              <span className="projects-cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
