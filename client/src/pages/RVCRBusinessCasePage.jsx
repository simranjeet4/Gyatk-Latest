import React from 'react';
import { Check } from 'lucide-react';
import './RVCRBusinessCasePage.css';

export default function RVCRBusinessCasePage() {
  const businessCasePoints = [
    "the knowhow to develop customized RVCR engineering systems for various Industrial applications.",
    "The 2nd generation IP rights of RVCR technology in major economies around the world.",
    "We progressed through the 1st tech demonstrator of RVCR kinematic proto.",
    "We successfully executed the RVCR technology IPR licensing with an auto Major.",
    "Our RVCR system projects have gained funding and recognition in EU and UK based innovation ecosystem.",
    "We have developed competency to execute JV projects with OEM’s"
  ];

  return (
    <div className="rvcr-business-page-exact">
      {/* 1. Hero Section matching reference screenshot */}
      <section className="business-hero-exact">
        <div className="container hero-container-flex">
          <div className="hero-left-text">
            <h1 className="hero-title">
              RVCR Business<br />Case
            </h1>
            <p className="hero-subtext">
              We develop business cases for Investors and Industry stake holders to monetize Segment specific product commercialization.
            </p>
          </div>
          <div className="hero-right-callout">
            <span className="hero-products-tag">RVCR Products</span>
            <h2 className="hero-invest-title">
              Invest in RVCR<br />
              <span className="gold-subtitle">The Next Big Thing in Prime Mover Technology</span>
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="page-section overview-section">
        <div className="container">
          <div className="overview-2col-layout">
            <div className="overview-logo-col">
              <img 
                src="/images/Zero-Carbon-Logo-Green-1200x1104-1 (1).png" 
                alt="Zero Carbon Logo" 
                className="zero-carbon-badge-img"
              />
            </div>
            <div className="overview-text-col">
              <h2 className="section-main-heading">Overview</h2>
              <p className="section-p">
                RVCR technology commercialization opens new investment opportunities for investors and stake holders of the Transport and energy industry. We understand being a Deep Tech Innovation RVCR poses significant challenges to conjecture on its potency and outcome.
              </p>
              <p className="section-p">
                We at GYATK ease out this challenge by developing a comprehensive Business plan for specific product project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Cases Section */}
      <section className="page-section business-cases-section">
        <div className="container">
          <h2 className="section-main-heading">Business cases</h2>
          <p className="section-p intro-p">
            Today after years of R&D in RVCR kinematics are showing results now. We have traversed a long way in the journey of taking the core RVCR concept to a viable product. We have acquired:
          </p>

          <div className="cases-2col-grid">
            <div className="cases-media-col">
              <img 
                src="/images/view-bioengineering-advance-with-human-hands.jpg" 
                alt="RVCR Technology Innovation Hands" 
                className="hands-tech-img"
              />
            </div>
            <div className="cases-list-col">
              <ul className="check-list-purple">
                {businessCasePoints.map((point, idx) => (
                  <li key={idx} className="check-list-item">
                    <Check size={18} className="purple-check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cases-post-text">
            <p className="section-p">
              The Covid pandemic was a very bad time for R&D projects that need lots of self-financing. It did put a halt to our endeavour. We see a great opportunity in the post covid era as industry gains composure for RVCR innovation.
            </p>
            <p className="section-p">
              We now have segregated the entire endeavour to facilitate its commercialization in various industry verticals. The business case is developed for convenience of investors and stake holders. The specific business case projects are classed under the status whether ongoing/upcoming/planned the application : –
            </p>
          </div>
        </div>
      </section>

      {/* 4. Ongoing (I.C.E) Section */}
      <section className="page-section ongoing-section">
        <div className="container">
          <h3 className="sub-section-heading">Ongoing – (I.C.E)</h3>

          {/* Item 1 */}
          <div className="project-item-block">
            <div className="item-title-row">
              <Check size={18} className="purple-check-icon" />
              <h4 className="item-title-text">R-VCR I.C. engine technology development.</h4>
            </div>
            <p className="section-p">
              This was the 1st project we started with and the most strategic one. It laid the foundation for all the subsequent downstream projects. This project’s objective was to develop the core knowhow of RVCR for I.C Engine applications. This could then further be customized for segment specific applications.
            </p>
            <p className="section-p">
              The project gained various credits and accolades including grant funding from DSIR (Department of Industrial Research) of GOI, EC Horizon 2020 scheme etc. It was winner of various international innovation competitions.
            </p>
            <div className="btn-wrapper">
              <a 
                href="https://rvcr-engine.kgyat.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="purple-pill-btn"
              >
                Click here for details
              </a>
            </div>
          </div>

          {/* Item 2 with Right Image */}
          <div className="project-2col-block">
            <div className="project-text-left">
              <div className="item-title-row">
                <Check size={18} className="purple-check-icon" />
                <h4 className="item-title-text">Rotary Green Fuel VCR I.C. engine for automotive applications.</h4>
              </div>
              <p className="section-p">
                The project was kicked off in a Joint project with Tata Motors Ltd. The objective was to develop an TRL7 prototype engine. This could be then developed as a pilot for an automotive application. The project was under an IP licensing agreement which reached TRL5. However, the various limitations with Industrial Technological Base in India for designing and developing I.C.Engines was a major challenge. (And when it comes to developing one based on an entirely new kinematic system, it’s a completely different ball game). The project base was shifted to EU where the pedigree to all engine technologies lay. Here the project got traction with the western ecosystem and specifically the – SME instrument – of the European commission. The project was stalled for a number of disruptions form breakup with TML, lack of funding, Brexit and Covid challenge. The project is being reinitiated now.
              </p>
              <p className="section-p">
                The MVP of the proto technology is now modified. This is in considerations to enquires from custom car manufacturers. The pilot would lead to the usage of the technology for multiple segments across sectors.
              </p>
              <div className="btn-wrapper">
                <a 
                  href="https://rvcr-windmotor.kgyat.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="purple-pill-btn"
                >
                  Click here for details
                </a>
              </div>
            </div>
            <div className="project-media-right">
              <img 
                src="/images/3d-environment-project-scene.jpg" 
                alt="RVCR 3D Engine Model" 
                className="square-engine-3d-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Upcoming (I.C.E) Section */}
      <section className="page-section upcoming-ice-section">
        <div className="container">
          <h3 className="sub-section-heading">Upcoming (I.C.E)</h3>
          <div className="item-title-row">
            <Check size={18} className="purple-check-icon" />
            <h4 className="item-title-text">Rotary Green Fuel VCR I.C. engine for automotive applications.</h4>
          </div>
          <p className="section-p">
            This project Is an offshoot of the earlier I.C. Engine project. It was conceived the demand for duel fuel engines in the Maritime Industry for Ship Propulsion. A scaled down model is being envisaged.
          </p>
        </div>
      </section>

      {/* 6. Upcoming (Renewable energy) Section */}
      <section className="page-section upcoming-re-section">
        <div className="container">
          <div className="re-2col-layout">
            <div className="re-media-left">
              <img 
                src="/images/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg" 
                alt="RVCR Renewable Energy Power Generators" 
                className="re-landscape-img"
              />
            </div>
            <div className="re-text-right">
              <h3 className="sub-section-heading">Upcoming (Renewable energy)</h3>
              <div className="item-title-row">
                <Check size={18} className="purple-check-icon" />
                <h4 className="item-title-text">RVCR fluid power generator demonstrator development.</h4>
              </div>
              <p className="section-p">
                Though this project was conceived much earlier, and a patent was also filed for the new concept, it was abandoned for lack of resources to follow it up. The concept was mathematically modelled and latter a virtual model was created.
              </p>
              <p className="section-p">
                RVCR renewable energy power generators (RVCR -REPG) adds a new concept in tapping energy from flowing fluid. This system shall revolutionize the Green Power sector in a number of ways. This ranges from creating newer market of REPG where none existed before.
              </p>
              <div className="btn-wrapper">
                <a 
                  href="https://rvcr-windmotor.kgyat.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="purple-pill-btn"
                >
                  Click here for details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Planned (Renewable energy) Section */}
      <section className="page-section planned-re-section">
        <div className="container">
          <h3 className="sub-section-heading">Planned (Renewable energy)</h3>
          <ul className="check-list-purple">
            <li className="check-list-item">
              <Check size={18} className="purple-check-icon" />
              <span>RVCR city based domestic wind power.</span>
            </li>
            <li className="check-list-item">
              <Check size={18} className="purple-check-icon" />
              <span>RVCR Shipboard marine wind power generator.</span>
            </li>
            <li className="check-list-item">
              <Check size={18} className="purple-check-icon" />
              <span>RVCR Hydro Motor Technology.</span>
            </li>
          </ul>
          <div className="btn-wrapper" style={{ marginTop: '24px' }}>
            <a 
              href="https://rvcr-windmotor.kgyat.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="purple-pill-btn"
            >
              Click here for details
            </a>
          </div>
        </div>
      </section>

      {/* 8. Conclusion Section with Metallic Banner Background */}
      <section className="conclusion-banner-section">
        <div className="conclusion-overlay"></div>
        <div className="container conclusion-container">
          <h2 className="conclusion-title">Conclusion</h2>
          <p className="conclusion-text">
            Our RVCR drive in ‘Specific Market Segment’ is set to open new opportunities for partnerships, professional engagements, and investments. We invite you to discover more about RVCR technology details and explore business prospects with RVCR technology. Express your interest to receive updates on our RVCR endeavour. Feel free to contact us for any queries and info on RVCR business cases.
          </p>
        </div>
      </section>

      {/* 9. Summary Rounded Card Section */}
      <section className="page-section summary-blue-card-section">
        <div className="container">
          <div className="summary-blue-box">
            <h2 className="summary-box-title">Summary</h2>
            <p className="summary-box-text">
              We expertise in the RVCR technology commercialization. RVCR business cases are open opportunities for investors to monetize the RVCR innovation. We design, develop, and deliver systems with the coveted VCR feature that out-perform conventional systems with newer functionalities and capabilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
