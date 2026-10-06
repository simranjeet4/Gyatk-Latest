import React from 'react';
import { Check } from 'lucide-react';
import './ZeroEmissionSections.css';

export default function ZeroEmissionLayout() {
  const focusAreas = [
    "To successfully design, develop technologies of system based on RVCR.",
    "Demonstrating these system and their capabilities.",
    "Integrating them in pilot products and showcasing its commercial viability.",
    "Licensing the technology to Industry players for use and sale."
  ];

  const businessOperations = [
    "Undertaking pilot RVCR systems D & D projects.",
    "Creating RVCR system specific IP Rights",
    "Facilitating technology integration services.",
    "RVCR tech systems commercialization."
  ];

  const raisonStrengths = [
    "Ability to comprehend and conjecture on commercial feasibility of ideas at an early stage.",
    "Clarity in engineering fundamentals, knowledge of product development and manufacture.",
    "Insight in Market Dynamics; Cost Drivers and Analytical abilities for assessment of possible commercial acceptance of such products in future market space.",
    "Our ability to foresee a new technology system capability and its strategic packaging for segment specific needs.",
    "The ability to plan milestone-based Technology development, 'Product Realization', 'Validation' and 'Commercialization'.",
    "JV operations management for Innovation."
  ];

  return (
    <div className="ze-page-wrapper">
      {/* 1. Hero Banner */}
      <section className="ze-hero-banner">
        <div className="ze-hero-particles" />
        <div className="container ze-hero-container">
          <div className="ze-hero-left">
            <h1 className="ze-hero-title-main">
              RVCR - the new paradigm
            </h1>
            <div className="ze-hero-spacer" />
            <h2 className="ze-hero-title-sub">
              Driving an evolutionary shift in 'Zero - Carbon' technologies.
            </h2>
          </div>
          <div className="ze-hero-right">
            <div className="ze-hero-orbit-stage">
              {/* Bubble Background & Center Logo */}
              <div className="ze-bubble-orb">
                <img 
                  src="/images/gyatk-logo-svg.png" 
                  alt="GYATK Innovation" 
                  className="ze-bubble-logo"
                />
              </div>

              {/* Orbit 1: Power-gyatk */}
              <div className="ze-orbit-ball mving1">
                <img 
                  src="/images/Power-gyatk.png" 
                  alt="GYATK Innovation" 
                  className="ze-ball-img"
                />
              </div>

              {/* Orbit 2: New-Project-6 */}
              <div className="ze-orbit-ball drive">
                <img 
                  src="/images/New-Project-6.png" 
                  alt="GYATK Clean Technology" 
                  className="ze-ball-img"
                />
              </div>

              {/* Orbit 3: New-Project-5 */}
              <div className="ze-orbit-ball power">
                <img 
                  src="/images/New-Project-5.png" 
                  alt="GYATK Deep Tech" 
                  className="ze-ball-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Creating Newer Markets */}
      <section className="ze-markets-section">
        <div className="container ze-markets-grid">
          <div className="ze-markets-heading">
            <h2 className="ze-title-navy">Creating newer markets</h2>
          </div>
          <div className="ze-markets-text">
            <p>
              At GYATK we have conceptualized and developed the ‘RVCR technology’ based on the invention of the RVCR Concept in ‘kinematics’ (a new breakthrough in Mechanism of Energy Conversion). We develop products based on RVCR for applications in Transport and Energy industry.
            </p>
            <p>
              Explore the possibilities of creating newer markets with our next gen products for leading in the ‘0 Carbon’ future.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Team & Focus Areas */}
      <section className="ze-team-section-full">
        <div className="ze-team-img-wrap">
          <img 
            src="/images/gyatk-team-1.jpg" 
            alt="GYATK Founder & Team" 
            className="ze-team-img-full"
          />
        </div>
        <div className="ze-team-info-full">
          <h2 className="ze-team-title">GYATK</h2>
          <p className="ze-team-desc">
            GYATK RVCR Apparatus Pvt Limited-India (GYATK) was incorporated, by Founder, Chairman Mr. Das Ajee Kamath. Our objective is to be a globally leading commercial R&D company and we are leveraging our invention of revolutionary RVCR technology for achieving it.
          </p>
          <h3 className="ze-focus-title">Our focus areas</h3>
          <ul className="ze-checklist">
            {focusAreas.map((area, idx) => (
              <li key={idx} className="ze-check-item">
                <Check size={17} className="ze-check-icon" strokeWidth={2.5} />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Checkerboard Grid (Vision, Mission, Strength) */}
      <section className="ze-checkerboard-section">
        {/* Row 1: Vision (Magenta) | Machine Engine */}
        <div className="ze-cb-row">
          <div className="ze-cb-cell-text ze-cb-vision">
            <h3 className="ze-cb-title">Vision</h3>
            <ul className="ze-cb-bullets">
              <li className="ze-cb-bullet-item">
                'To successfully commercialize technologies based on the invention of the 'RVCR principle in energy conversion'.
              </li>
              <li className="ze-cb-bullet-item">
                "To enable the transport and energy Industry with RVCR technology solutions for achieving its Zero Emission goals".
              </li>
              <li className="ze-cb-bullet-item">
                'To be a global leader in industrial deep tech innovation and technology services.
              </li>
            </ul>
          </div>
          <div className="ze-cb-cell-img">
            <img 
              src="/images/machine.png" 
              alt="RVCR Machine Technology" 
              className="ze-cb-sketch"
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 2: Shaft Engine | Mission (Dark Blue) */}
        <div className="ze-cb-row">
          <div className="ze-cb-cell-img">
            <img 
              src="/images/shaft.png" 
              alt="RVCR Shaft Engine Mechanism" 
              className="ze-cb-sketch"
              loading="lazy"
            />
          </div>
          <div className="ze-cb-cell-text ze-cb-mission">
            <h3 className="ze-cb-title">Mission</h3>
            <p className="ze-cb-p">
              We at gyatk committed to augment 'innovation management' and product development techniques' for continually enhancing the commercial potency of RVCR technology system for a completely self-sustainable 'Zero Carbon' industrial ecosystem.
            </p>
          </div>
        </div>

        {/* Row 3: Our Strength (Blue) | Hands & Plant */}
        <div className="ze-cb-row">
          <div className="ze-cb-cell-text ze-cb-strength">
            <h3 className="ze-cb-title">Our Strength</h3>
            <p className="ze-cb-p">
              At GYATK, we have successfully built-up competency in forte of Prime-Mover Technology Design &amp; development for making inroads into the niche commercial R&amp;D business. GYATK owns the IPR (commercial exclusivity) through secured Patents, and licenses Both IPR and technologies to OEM's. We have developed a robust network of Value chain partners, in contractual relationships for undertaking "Green-Field Techno-commercial project based on RVCR concepts".
            </p>
          </div>
          <div className="ze-cb-cell-img">
            <img 
              src="/images/strength.png" 
              alt="Strength Holding Plant Sketch" 
              className="ze-cb-sketch"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 5. Our Business Operations */}
      <section className="ze-operations-section">
        <div className="container ze-operations-grid">
          <div className="ze-operations-heading">
            <h2 className="ze-title-navy">Our Business Operations</h2>
          </div>
          <div className="ze-operations-list">
            <ul className="ze-checklist">
              {businessOperations.map((op, idx) => (
                <li key={idx} className="ze-check-item">
                  <Check size={17} className="ze-check-icon" strokeWidth={2.5} />
                  <span>{op}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Climate Change Mitigation */}
      <section className="ze-climate-section">
        <div className="container">
          <div className="ze-climate-top-grid">
            <div className="ze-climate-media">
              <img 
                src="/images/climate-change.jpg" 
                alt="Climate Change Mitigation" 
                className="ze-climate-img"
                loading="lazy"
              />
            </div>
            <div className="ze-climate-text">
              <h2 className="ze-title-navy">
                Adding a new dimension to climate change mitigation
              </h2>
              <p>
                Industry's continued dependence on incremental innovations in conventional technologies is unable to address 21<sup>st</sup> century needs. Now when markets are at the crossroads of further Industrial development and being environmentally responsible, GYATK is playing an enabling role in providing the global industry with an optimal sustainable progressive solution with its RVCR deep Tech innovation.
              </p>
            </div>
          </div>
          <div className="ze-climate-full-note">
            <p>
              (We witnessed a leap in energy conversion systems beginning with steam engines, through the industrial age. However, these systems are now the root cause of the climate debacle. All innovations in this area are to adapt these technologies to serve stricter climate regulations. This cannot suffice for todays and forthcoming environmental market drivers).
            </p>
          </div>
        </div>
      </section>

      {/* 7. Raison d'être */}
      <section className="ze-raison-section">
        <div className="container">
          <h2 className="ze-title-navy">Raison d'être</h2>
          <div className="ze-raison-text">
            <p>
              At GYATK, we are driven by the urge to excel in the field of engineering machine design. We believe in serving the purpose of enabling the global industry to achieve its most optimal efficiency and value.
            </p>
            <p>
              Our quest for excellence pushes us to reason newer concepts and design solutions. This reflects in our invention of RVCR kinematics, and competency for devising products with newer functionalities and performance possibilities.
            </p>
            <p>
              RVCR principle being a seed mechanism is an anchor-point for catapulting industry and society to newer realms of productivity, performance, and efficiency.
            </p>
          </div>

          <h3 className="ze-raison-sub">We channel our following strengths</h3>
          <ul className="ze-checklist">
            {raisonStrengths.map((str, idx) => (
              <li key={idx} className="ze-check-item">
                <Check size={17} className="ze-check-icon" strokeWidth={2.5} />
                <span>{str}</span>
              </li>
            ))}
          </ul>

          <div className="ze-raison-summary">
            <p>
              Our techno-prudence enables us to envision feasibilities and viability of early-stage ideas. We outstretch to high hanging fruit with confidence, that are risky and far-fetched for OEMs.
            </p>
            <p>
              We evaluate the technology risk at early concept stage ideas and convert high potential ideas, concept technologies and inventions to a commercially viable systems &amp; products.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Blue Sky & Green Earth Banner */}
      <section className="ze-sky-banner-section">
        <div className="container ze-sky-grid">
          <div className="ze-sky-text-left">
            <h2 className="ze-sky-heading">Let's make the planet<br />cleaner</h2>
          </div>
          <div className="ze-sky-earth-wrap">
            <img 
              src="/images/earth.png" 
              alt="Green Planet Eco Technology" 
              className="ze-sky-earth-img"
              loading="lazy"
            />
          </div>
          <div className="ze-sky-text-right">
            <h2 className="ze-sky-heading">With zero carbon<br />technology</h2>
          </div>
        </div>
      </section>

      {/* 9. Philosophy & The Motto Cards */}
      <section className="ze-philosophy-section">
        <div className="container ze-cards-grid">
          {/* Card 1: Philosophy */}
          <div className="ze-quote-card">
            <img 
              src="/images/motivation.png" 
              alt="Philosophy Fist Icon" 
              className="ze-card-icon"
            />
            <h3 className="ze-card-title">Philosophy</h3>
            <p className="ze-card-quote">
              "Pursuit to excellence directs the course of civilization."
            </p>
          </div>

          {/* Card 2: The Motto */}
          <div className="ze-quote-card">
            <img 
              src="/images/philosophy.png" 
              alt="The Motto Thinking Head Icon" 
              className="ze-card-icon"
            />
            <h3 className="ze-card-title">The Motto</h3>
            <p className="ze-card-quote">
              "Race to excellence does not have a finish line."
            </p>
          </div>
        </div>
      </section>

      {/* 10. Tagline Section */}
      <section className="ze-tagline-section">
        <div className="container">
          <p className="ze-tagline-quote">
            "At GYATK the path to excellence is to add newer dimensions by successfully integrating breakthrough technologies into the industry mainstream and opening newer technological channels to build upon."
          </p>
          <p className="ze-tagline-text">
            We design, develop, and deliver systems with the coveted VCR feature that out-perform conventional systems with newer functionalities and capabilities.
          </p>
        </div>
      </section>
    </div>
  );
}
