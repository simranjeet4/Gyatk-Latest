import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="gyatk-hero-section">
      <div className="gyatk-hero-particles" />
      <div className="container gyatk-hero-container">
        {/* Left Column */}
        <div className="gyatk-hero-col-left">
          <h1 className="gyatk-hero-title-main">
            Evolutio-Neering
          </h1>
          <div className="gyatk-hero-spacer" />
          <h2 className="gyatk-hero-title-sub">
            'Zero-Carbon' Future
          </h2>
        </div>

        {/* Right Column with Center Logo and 3 Orbiting Spheres */}
        <div className="gyatk-hero-col-right">
          <div className="gyatk-hero-orbit-stage">
            {/* Center Logo */}
            <div className="gyatk-hero-center-logo">
              <img 
                src="/images/gyatk-logo-svg.png" 
                alt="GYATK" 
                className="center-logo-img"
              />
            </div>

            {/* Orbit 1: Energy */}
            <div className="gyatk-orbit-ball mving1">
              <span className="orbit-text mov-text">Energy</span>
              <img 
                src="/images/circle-energy-ball.png" 
                alt="Energy" 
                className="ball-img"
              />
            </div>

            {/* Orbit 2: Drive */}
            <div className="gyatk-orbit-ball drive">
              <span className="orbit-text drivemov-text">Drive</span>
              <img 
                src="/images/circle-drive-ball.png" 
                alt="Drive" 
                className="ball-img"
              />
            </div>

            {/* Orbit 3: Power */}
            <div className="gyatk-orbit-ball power">
              <span className="orbit-text powermov-text">Power</span>
              <img 
                src="/images/circle-power-ball.png" 
                alt="Power" 
                className="ball-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
