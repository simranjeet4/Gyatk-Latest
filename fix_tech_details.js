const fs = require('fs');

const jsxContent = `import React from 'react';
import { Check } from 'lucide-react';
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
                  <li><span className="sub-bullet-dot">•</span> Parameterized model and assembly creation</li>
                  <li><span className="sub-bullet-dot">•</span> Mechanism Modelling</li>
                  <li><span className="sub-bullet-dot">•</span> Component Modelling</li>
                  <li><span className="sub-bullet-dot">•</span> Sub-assembly & Assembly Modelling</li>
                </ul>
              </div>
            </div>

            <div className="math-cad-image-wrap">
              <img 
                src="/images/GYATKrvcr-1 (1).jpg" 
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
                  <li><span className="sub-bullet-dot">•</span> Material Selection</li>
                  <li><span className="sub-bullet-dot">•</span> Metallurgy and Metallurgical Process</li>
                  <li><span className="sub-bullet-dot">•</span> Product manufacturing scheme, machining Plan package</li>
                  <li><span className="sub-bullet-dot">•</span> Product Mass manufacture analysis and Optimization, (Pre-Manufacture and Manufacturing Pilot Requirements)</li>
                  <li><span className="sub-bullet-dot">•</span> Precession machining and finishing</li>
                  <li><span className="sub-bullet-dot">•</span> QC Metrology & inspection Scheme formulation</li>
                  <li><span className="sub-bullet-dot">•</span> Assembly and assembly line scheme formulation and optimization.</li>
                </ul>
              </div>
              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Other custom needs</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><span className="sub-bullet-dot">•</span> Cooling</li>
                  <li><span className="sub-bullet-dot">•</span> Tribiology</li>
                  <li><span className="sub-bullet-dot">•</span> Ergonomics, Coatings, stowage, Handling, Tools, Equipment’s Control and Management Systems.</li>
                  <li><span className="sub-bullet-dot">•</span> Ignition, Fuel Safety, Security systems.</li>
                  <li><span className="sub-bullet-dot">•</span> Closure Constraints &Tolerance Optimization.</li>
                  <li><span className="sub-bullet-dot">•</span> QC Metrology & inspection Scheme formulation</li>
                  <li><span className="sub-bullet-dot">•</span> Upward Systems Integration Scheme Formulation and Analysis.</li>
                  <li><span className="sub-bullet-dot">•</span> Upward System Specification Finalization.</li>
                  <li><span className="sub-bullet-dot">•</span> Upward System Testing, Recording, Tuning, calibration, Analysis, Suiting.</li>
                  <li><span className="sub-bullet-dot">•</span> Data acquisition, Logging, Processing and Analysis Machinery; Tooling; Testing, Manufacturing cost optimization.</li>
                  <li><span className="sub-bullet-dot">•</span> Mating; Assembly Procedures Standardization.</li>
                  <li><span className="sub-bullet-dot">•</span> Mechanized assembly Analysis.</li>
                  <li><span className="sub-bullet-dot">•</span> Standardization / homologation</li>
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
                  <li><span className="sub-bullet-dot">•</span> Deducing Component Level Tolerances from Subassembly Level Functional Tolerances.</li>
                  <li><span className="sub-bullet-dot">•</span> Tolerance stack-up analysis and Optimization.</li>
                  <li><span className="sub-bullet-dot">•</span> Tolerance Attainability; Sustainability; and Viability Analysis.</li>
                  <li><span className="sub-bullet-dot">•</span> Tolerance Allocation coordination with Drafting and Quality Control.</li>
                  <li><span className="sub-bullet-dot">•</span> Drafting of Components for Manufacture</li>
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
`;

const cssContent = `/* Technical Services Page Styling - Fixed 2x2 Math Grid & Background Image */
.technical-page-root {
  width: 100%;
  background-color: #ffffff;
  font-family: 'Nunito', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333333;
}

/* Container */
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}

.section-padding {
  padding: 56px 0;
}

.bg-white {
  background-color: #ffffff;
}

.bg-light-grid {
  background-color: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.grid-2-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.text-center {
  text-align: center;
}

/* Hero Section */
.technical-hero {
  width: 100%;
  min-height: 380px;
  background-image: url('/images/hero-tech-graphic.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 80px 0;
  position: relative;
  display: flex;
  align-items: center;
}

.technical-hero-container {
  display: block;
}

.technical-hero-text {
  max-width: 520px;
}

.technical-hero-title {
  font-size: 38px;
  font-weight: 800;
  color: #1b355a;
  line-height: 1.25;
  margin: 0 0 16px 0;
}

.technical-hero-subtitle {
  font-size: 16px;
  line-height: 1.6;
  color: #0284c7;
  font-weight: 600;
  margin: 0;
}

/* Headings & Text */
.section-heading {
  font-size: 30px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 18px 0;
  line-height: 1.25;
}

.body-text {
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  margin: 0 0 16px 0;
}

.font-semibold {
  font-weight: 600;
}

.text-slate-800 {
  color: #1e293b;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-6 {
  margin-bottom: 24px;
}

.mb-8 {
  margin-bottom: 36px;
}

/* Blue Divider Banner */
.blue-divider-banner {
  padding: 32px 0;
  background-color: #ffffff;
}

.blue-pill-box {
  background: linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%);
  border-radius: 50px;
  padding: 16px 32px;
  text-align: center;
  box-shadow: 0 4px 14px rgba(2, 132, 199, 0.25);
}

.blue-pill-text {
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}

/* Clean List Container Styling */
.preliminary-list-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}

.list-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.list-check-icon {
  color: #0284c7;
  flex-shrink: 0;
  margin-top: 2px;
}

.list-text-main {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.5;
}

.list-item-with-sub {
  display: flex;
  flex-direction: column;
}

.preliminary-sub-list {
  list-style: none;
  padding-left: 28px;
  margin: 8px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.preliminary-sub-list li {
  font-size: 14px;
  color: #0284c7;
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  line-height: 1.4;
}

.sub-bullet-dot {
  color: #f97316;
  font-weight: 800;
  font-size: 16px;
  line-height: 1;
}

/* Card & CAD Images */
.tech-card-img, .math-cad-img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: block;
}

.math-cad-image-wrap {
  width: 100%;
}

.zero-carbon-badge-img {
  max-width: 280px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* Physical Engineering Section - With Dark Industrial Background Image */
.physical-eng-section {
  background-image: linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.88)), url('/images/multiethnic-team-sharing-ideas-about-industrial-project-using-two-monitors-with-d-gears-metalic.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 72px 0;
  position: relative;
}

.pink-pill-badge {
  display: inline-block;
  background: linear-gradient(135deg, #db2777 0%, #9333ea 100%);
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
  padding: 10px 28px;
  border-radius: 30px;
  margin-bottom: 16px;
  box-shadow: 0 4px 14px rgba(219, 39, 119, 0.3);
}

.physical-subtitle {
  font-size: 20px;
  color: #cbd5e1;
  margin: 0 0 36px 0;
  font-weight: 600;
}

.physical-matrix-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  text-align: left;
}

.tech-check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.white-check-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #f1f5f9;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
}

.check-icon-white {
  color: #38bdf8;
  flex-shrink: 0;
  margin-top: 3px;
}

/* Summary Callout Card */
.summary-callout-card {
  background: linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%);
  color: #ffffff;
  border-radius: 12px;
  padding: 40px 48px;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 0 8px 24px rgba(2, 132, 199, 0.25);
}

.summary-card-title {
  font-size: 28px;
  font-weight: 800;
  color: #ffffff !important;
  margin: 0 0 16px 0;
}

.summary-card-text {
  font-size: 17px;
  line-height: 1.7;
  color: #e0f2fe;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .grid-2-col, .physical-matrix-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
`;

fs.writeFileSync('client/src/pages/TechnicalServicesPage.jsx', jsxContent);
fs.writeFileSync('client/src/pages/TechnicalServicesPage.css', cssContent);
console.log('Fixed Math section 2x2 grid, Analysis list styling, and added Physical Engineering background image!');
