import React from 'react';
import { Check } from 'lucide-react';
import './PropositionPage.css';

export default function PropositionPage() {
  const nextLeapList = [
    "Delivers Quantum leap in Efficiency, Performance, Reduces cost, Emission & Carbon foot print.",
    "Concrete, Sustainable, Highly Potent, commercially Viable solution to revolutionize Energy & Transport Sector.",
    "Allows a transformation by smooth transition from fossil fuel to a greener ecosystem.",
    "Next evolutionary leap in Technology enabling unhooking from Fossil fuel Dependency"
  ];

  const paradigmList = [
    "RVCR leads to world’s 1st truly Feedstock agnostic Engines: – Allows the long elusive VCR feature in Engines that enables multi-fuel compatibility in I.C. engines permitting real time switching of fuel (Between fossil fuels and green fuels).",
    "RVCR enables use of Positive displacement system for ‘Wind /Hydro motor’ for Renewable Power Generation that enhances energy capture coefficient and lowers the levelized cost of Renewable Energy for enabling smooth transition from fossil fuel to Greener Energy Ecosystem."
  ];

  const focusAreas = [
    "Global I.P.R of RVCR and its upgrades",
    "RVCR Technology know-how development",
    "Pilot RVCR Product development Project capability",
    "IPR and RVCR Product development contract Package for Clients"
  ];

  return (
    <div className="proposition-page-root">
      {/* 1. Hero Section */}
      <section className="proposition-hero">
        <div className="proposition-hero-overlay"></div>
        <div className="container proposition-hero-container">
          <div className="hero-text-col">
            <h1 className="proposition-hero-title">
              Get Future ready with RVCR Technology
            </h1>
          </div>
          <div className="hero-media-col">
            <img 
              src="/images/shaft.png" 
              alt="RVCR Core Mechanism Diagram" 
              className="hero-shaft-img"
            />
            <div className="hero-accent-badge">
              <span>RVCR Product D&D Services + I.P. Rights</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Undertaking Lead Narrative */}
      <section className="proposition-section proposition-lead-section">
        <div className="container">
          <h2 className="lead-heading">Undertaking 'Concept to Pilot-Product Journey for you.</h2>
          <p className="lead-body-p">
            The usage of fossil fuels has resulted in a severe environmental crisis, and present solutions in the energy and transportation sectors are based on century-old energy conversion technologies with limited efficiency and performance. The RVCR technology is a novel technique that gives a unified answer to this problem. It is a breakthrough concept in energy conversion mechanisms that produces a new breed of Prime-Movers with quantum leaps in efficiency, performance, and adaptive capabilities. It signals a new beginning for new age green machines to supersede the century-long rule of conventional mechanism-based Prime-Movers.
          </p>
        </div>
      </section>

      {/* 3. RVCR - The next evolutionary leap */}
      <section className="proposition-section proposition-leap-section">
        <div className="container">
          <div className="leap-grid">
            {/* Left Column */}
            <div className="leap-col-left">
              <h2 className="section-title">
                RVCR - The next evolutionary leap in Prime-Mover Technology
              </h2>
              <ul className="prop-check-list">
                {nextLeapList.map((item, idx) => (
                  <li key={idx}>
                    <div className="prop-check-icon">
                      <Check size={18} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column Box */}
            <div className="leap-col-right">
              <div className="leap-card-box">
                <p className="leap-card-lead">
                  The superior Physics of RVCR brings a paradigm shift in Prime-Mover Capabilities and seeds the birth of entire breed of new age Prime-Movers
                </p>
                <ul className="prop-check-list">
                  {paradigmList.map((item, idx) => (
                    <li key={idx}>
                      <div className="prop-check-icon">
                        <Check size={18} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Formula Flowchart Card */}
      <section className="proposition-section proposition-formula-section">
        <div className="container">
          <div className="formula-card">
            <p className="formula-intro-p">
              At GYATK, We provide our clients (hardware manufacturing companies/OEM’s) with services to adopt/Integrate the RVCR Technology systems into their products utilizing their existing business structure and thence provide the latest in technology to upgrade their Products to beat the best available globally. We deliver you global market leadership by cutting edge technology advantage.
            </p>

            {/* Visual Formula Flow Diagram Image */}
            <div className="formula-flow-container">
              <img 
                src="/images/home-flowchart-1024x233-1.png" 
                alt="RVCR Technology Integration Formula Flowchart" 
                className="formula-flowchart-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Three Color-Block Rows */}
      <section className="proposition-blocks-section">
        {/* Row 1: We Undertake */}
        <div className="color-row row-purple">
          <div className="row-content-col bg-purple">
            <h2 className="row-title">We Undertake</h2>
            <h3 className="row-subtitle">RVCR Pilot Product Projects</h3>
            <ul className="row-check-list">
              <li>
                <Check size={18} className="row-icon" />
                <span>RVCR Slow Speed I.C. Engines</span>
              </li>
              <li>
                <Check size={18} className="row-icon" />
                <span>RVCR Wind Power Generator</span>
              </li>
              <li>
                <Check size={18} className="row-icon" />
                <span>RVCR Hydro/Tidal Motors</span>
              </li>
            </ul>
          </div>
          <div className="row-media-col split-2-photos">
            <img src="/images/eng-work.jpg" alt="Assembly Work" className="row-img" />
            <img src="/images/t-1.webp" alt="Testing Setup" className="row-img" />
          </div>
        </div>

        {/* Row 2: We Offer */}
        <div className="color-row row-darkblue reverse-mobile">
          <div className="row-media-col">
            <img src="/images/solution.png" alt="RVCR CAD Solution Assembly" className="row-img-full" />
          </div>
          <div className="row-content-col bg-darkblue">
            <h2 className="row-title">We Offer</h2>
            <h3 className="row-subtitle">RVCR technology and D&D Services</h3>
            <ul className="row-check-list">
              <li>
                <Check size={18} className="row-icon" />
                <span>I.P. Rights of RVCR Technology License</span>
              </li>
              <li>
                <Check size={18} className="row-icon" />
                <span>Engineering Research & Design Services</span>
              </li>
              <li>
                <Check size={18} className="row-icon" />
                <span>RVCR pilot Product Project Management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3: We Seek */}
        <div className="color-row row-lightblue">
          <div className="row-content-col bg-lightblue">
            <h2 className="row-title">We Seek</h2>
            <ul className="row-check-list mt-top">
              <li>
                <Check size={18} className="row-icon" />
                <span>Investments</span>
              </li>
              <li>
                <Check size={18} className="row-icon" />
                <span>Partners in Prime Mover Industry Verticals</span>
              </li>
              <li>
                <Check size={18} className="row-icon" />
                <span>Business & Technical Professionals</span>
              </li>
            </ul>
          </div>
          <div className="row-media-col">
            <img 
              src="/images/businessmen-businesswomen-meeting-brainstorming-ideas.jpg" 
              alt="Business & Industry Partnership Meeting" 
              className="row-img-full" 
            />
          </div>
        </div>
      </section>

      {/* 6. Product Applications And USP Section */}
      <section className="proposition-section applications-section">
        <div className="container">
          <div className="applications-grid">
            <div className="app-title-col">
              <h2 className="section-title main-app-title">
                RVCR Technology Product Applications And USP
              </h2>
            </div>
            <div className="app-text-col">
              <p className="app-p">
                RVCR is a non-reciprocating rotary mechanism based prime mover technology applicable across diverse product categories and sectors. The base background IPR is segregated to flexibly accommodate client's interest area. It is further topped up with foreground IP while developing products for specific segments. Over two decades of commercial licensing experience ensures robust contractual protection, time-bound deliverables, and strategic risk mitigation for partner OEMs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GYATK World Reach Section */}
      <section className="proposition-section gyatk-reach-section">
        <div className="container">
          <h2 className="section-title">GYATK</h2>
          <p className="gyatk-subtitle-p">
            RVCR delivers superior prime-movers, in terms of cost, utility, features, efficiency and carbon foot print, adaptive to both fossil fuel and green fuel, hence critical for unhooking from Fossil-fuel dependency.
          </p>

          <div className="gyatk-reach-grid">
            <div className="reach-map-col">
              <img 
                src="/images/global-1.jpg" 
                alt="GYATK Global Reach Map" 
                className="reach-map-img"
              />
            </div>
            <div className="reach-info-col">
              <h3 className="focus-area-title">Our focus area:</h3>
              <ul className="prop-check-list">
                {focusAreas.map((area, idx) => (
                  <li key={idx}>
                    <div className="prop-check-icon">
                      <Check size={18} />
                    </div>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p className="reach-conclude-p">
                We are seeking investors and Industry partners for our endeavour to integrate RVCR Prime-Movers into industry main stream and leap frog conventional technologies using superior physics of RVCR to reshape the energy/transport sector technological landscape
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
