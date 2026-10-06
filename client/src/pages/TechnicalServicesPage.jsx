import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import './TechnicalServicesPage.css';

export default function TechnicalServicesPage() {
  return (
    <div className="technical-page-root">
      {/* Hero Banner Section */}
      <section className="technical-hero">
        <div className="container technical-hero-container">
          <div className="technical-hero-text">
            <h1 className="technical-hero-title">Design & Engineering services</h1>
            <p className="technical-hero-subtitle">
              We expertise in the high end engineering competency of pilot prototype development. We cover for all aspects of the complex multi disciplinary machine design & engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-center">
          <div className="overview-image-wrap">
            <img 
              src="/images/zero-carbon-badge.png" 
              alt="Zero Carbon Badge" 
              className="zero-carbon-badge-img"
            />
          </div>
          <div className="overview-content">
            <h2 className="section-heading">Overview</h2>
            <p className="body-text">
              D&D is one of the most extreme challenge in mechanical engineering. We started off from the drawing board and over years have perfected the knowhow to deliver customized pilot products. The D & E activities are managed with streamlined project planning over sequence of predetermined milestones. The process is detailed herein.
            </p>
          </div>
        </div>
      </section>

      {/* The Background Section */}
      <section className="section-padding bg-light-grid">
        <div className="container grid-2-col align-center">
          <div className="background-content">
            <h2 className="section-heading">The Background</h2>
            <p className="body-text">
              The product D&D deals with range of engineering branches and expertise in numerous sophisticated tools. This process demands high end skills in machine design and expertise across a vast spectrum of engineering fields and each branch and expertise are a specialization. The adroitness in Integrating expertise in entire gamut of engineering branches is kernel to proficiency in the forte of machine design.
            </p>
            <p className="body-text">
              GYATK initiated the D&D process by conceiving preliminary concept prototype assembly made of various components and formulated its mathematical, Digital and Physical Models. These were refined over various Iterative correction cycles. Various Design techniques were used for Failure Mode Analysis and identifying weak-points, limitations, and Possibilities.
            </p>
            <p className="body-text font-semibold text-slate-800">
              The RVCR specific design process techniques, methods and activity flow layout structure developed by GYATK and it comprises.
            </p>
          </div>
          <div className="background-image-wrap">
            <img 
              src="/images/eng-work.jpg" 
              alt="Engineer Work" 
              className="tech-card-img"
            />
          </div>
        </div>
      </section>

      {/* Blue Section Divider Banner */}
      <section className="blue-divider-banner">
        <div className="container">
          <div className="blue-pill-box">
            <h2 className="blue-pill-text">Design planning & Virtual engineering</h2>
          </div>
        </div>
      </section>

      {/* Process Planning Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-start">
          <div className="planning-image-wrap">
            <img 
              src="/images/businessmen-businesswomen-meeting-brainstorming-ideas.jpg" 
              alt="Process Planning" 
              className="tech-card-img"
            />
          </div>
          <div className="planning-content">
            <h2 className="section-heading">Process Planning</h2>
            <p className="body-text mb-4">
              Each project is planned, and its detailed activity fine print mapped out to. The objectives, milestones, main heads, subheads, and their interdependencies are laid out using
            </p>

            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">MVP Analysis and determination</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Project activity Plan and scheduling</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Resource planning</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Costing and Budget</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Math & Virtual Modelling Section - Staggered 2x2 Layout matching screenshot */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="section-heading mb-6">Math & Virtual Modelling</h2>
          
          {/* Row 1: Left List Part 1, Right Green/Gold CAD Image */}
          <div className="grid-2-col align-start mb-8">
            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Design requirement analysis</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Specification evaluation & Finalization</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Systems Accessory Specification Synthesis</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Readying of individual data sheets of subsystems</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">System modelling scheme verification</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Geometry formulation & Preliminary DFMA (Design Failure Mode Analysis)</span>
              </div>
              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Function animation and drafting scheme confirmation</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Parameterized model and assembly creation</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Mechanism Modelling</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Component Modelling</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Sub-assembly & Assembly Modelling</li>
                </ul>
              </div>
            </div>

            <div className="math-cad-image-wrap">
              <img 
                src="/images/math-virtual-cad.jpg" 
                alt="RVCR CAD 3D Mechanism Render" 
                className="math-cad-img"
              />
            </div>
          </div>

          {/* Row 2: Left Pink Line Drawing Image, Right List Part 2 */}
          <div className="grid-2-col align-start">
            <div className="math-cad-image-wrap">
              <img 
                src="/images/FIL921-s-768x512.jpg" 
                alt="Technical Drafting Line Drawing Render" 
                className="math-cad-img"
              />
            </div>

            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Data exchange with up and downstream process</span>
              </div>
              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Manufacturing Process Development</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Material Selection</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Metallurgy and Metallurgical Process</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Product manufacturing scheme, machining Plan package</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Product Mass manufacture analysis and Optimization, (Pre-Manufacture and Manufacturing Pilot Requirements)</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Precession machining and finishing</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> QC Metrology & inspection Scheme formulation</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Assembly and assembly line scheme formulation and optimization.</li>
                </ul>
              </div>
              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Other custom needs</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Cooling</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Tribiology</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Ergonomics, Coatings, stowage, Handling, Tools, Equipment's Control and Management Systems.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Ignition, Fuel Safety, Security systems.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Closure Constraints &Tolerance Optimization.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> QC Metrology & inspection Scheme formulation</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Upward Systems Integration Scheme Formulation and Analysis.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Upward System Specification Finalization.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Upward System Testing, Recording, Tuning, calibration, Analysis, Suiting.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Data acquisition, Logging, Processing and Analysis Machinery; Tooling; Testing, Manufacturing cost optimization.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Mating; Assembly Procedures Standardization.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Mechanized assembly Analysis.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Standardization / homologation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis, Simulation & Design Freeze Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-start">
          <div className="analysis-image-wrap">
            <img 
              src="/images/analysis-simulation.jpg" 
              alt="Analysis and Simulation" 
              className="tech-card-img"
            />
          </div>
          <div className="analysis-content">
            <h2 className="section-heading">Analysis, Simulation & Design Freeze</h2>

            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Model Preparation for Analysis</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">MBD: (Multi Body Dynamics) kinematics evaluation and correction</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">CFD: (Computational fluid Dynamics)</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">FEA: Finite Element Analysis. Structural and thermal analysis.</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Steady thermal State Model Development and Combustion analysis.</span>
              </div>
              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Design freeze; GD&T and Drafting</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Deducing Component Level Tolerances from Subassembly Level Functional Tolerances.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Tolerance stack-up analysis and Optimization.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Tolerance Attainability; Sustainability; and Viability Analysis.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Tolerance Allocation coordination with Drafting and Quality Control.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Drafting of Components for Manufacture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Engineering Section - With Background Image */}
      <section className="physical-eng-section">
        <div className="container text-center">
          <div className="pink-pill-badge">Physical Engineering</div>
          <h3 className="physical-subtitle">Prototyping / Pilot Product development</h3>

          <div className="physical-matrix-grid">
            <div className="matrix-col">
              <ul className="tech-check-list white-check-list">
                <li><Check size={16} className="check-icon-white" /> Component manufacture and Assembly</li>
                <li><Check size={16} className="check-icon-white" /> Inspection and QC</li>
                <li><Check size={16} className="check-icon-white" /> Mating and assembly</li>
                <li><Check size={16} className="check-icon-white" /> Sub assembly Calibration and Functional Integrity check</li>
                <li><Check size={16} className="check-icon-white" /> Assembly realization</li>
              </ul>
            </div>
            <div className="matrix-col">
              <ul className="tech-check-list white-check-list">
                <li><Check size={16} className="check-icon-white" /> Acc Systems integration</li>
                <li><Check size={16} className="check-icon-white" /> Assembly creation</li>
                <li><Check size={16} className="check-icon-white" /> Testing and Trials</li>
                <li><Check size={16} className="check-icon-white" /> Test bed performance</li>
                <li><Check size={16} className="check-icon-white" /> Design accuracy confirmation</li>
              </ul>
            </div>
            <div className="matrix-col">
              <ul className="tech-check-list white-check-list">
                <li><Check size={16} className="check-icon-white" /> Validation and certification</li>
                <li><Check size={16} className="check-icon-white" /> Product suiting</li>
                <li><Check size={16} className="check-icon-white" /> installation suiting</li>
                <li><Check size={16} className="check-icon-white" /> Product tuning</li>
                <li><Check size={16} className="check-icon-white" /> Performance validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Aspects Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-start">
          <div className="commercial-image-wrap">
            <img 
              src="/images/thoughtful-man-with-infographic-with-heads.jpg" 
              alt="Commercial Aspects" 
              className="tech-card-img"
            />
          </div>
          <div className="commercial-content">
            <h2 className="section-heading">Commercial aspects</h2>
            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Standardized Stowaging Handling Consumables and Time motion optimization.</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Installation, Logistics, Warranties.</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">IT Support</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Performance Validation</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Regulatory Compliances</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Product Certification</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Grounding Sense check</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Statutory Publications.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Callout Box */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="summary-callout-card">
            <h2 className="summary-card-title">Summary</h2>
            <p className="summary-card-text">
              The RVCR concept is an invention in the field of kinematic mechanism that seeds a new breed of highly energy efficient machines with possibilities of newer functionalities to effectively deal with 21st century market drivers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
