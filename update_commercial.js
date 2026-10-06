const fs = require('fs');

const jsxContent = `import React from 'react';
import { Check } from 'lucide-react';
import './CommercialServicesPage.css';

export default function CommercialServicesPage() {
  return (
    <div className="commercial-page-root">
      {/* Hero Banner Section */}
      <section className="commercial-hero">
        <div className="container commercial-hero-container">
          <div className="commercial-hero-text">
            <h1 className="commercial-hero-title">Technology Assessment Services</h1>
            <p className="commercial-hero-subtitle">
              We take you through the relevant evaluation for adopting RVCR Technology for sustainable and true "Zero Carbon" transition.
            </p>
          </div>

          <div className="commercial-hero-graphic">
            <div className="tech-nodes-diagram">
              <div className="central-globe">
                <div className="globe-inner">
                  <span className="globe-brand">RVCR</span>
                  <span className="globe-text">Technology</span>
                </div>
              </div>
              <div className="node-badge node-top">Lowering Emission</div>
              <div className="node-badge node-top-right">Lower Carbon Footprint</div>
              <div className="node-badge node-bottom-right">
                Saving Fossil Fuel /<br />Transition to Renewable Energy Sources
              </div>
              <div className="node-badge node-bottom-left">Green Energy Usage</div>
              <div className="node-badge node-left">High Energy Efficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-center">
          <div className="overview-image-wrap">
            <img 
              src="/images/zero-carbon-badge.jpg" 
              alt="Zero Carbon Badge" 
              className="zero-carbon-badge-img"
            />
          </div>
          <div className="overview-content">
            <h2 className="section-heading">Overview</h2>
            <p className="body-text">
              New Technology acquisition & streamlining it into mainstream business is a complex and demanding process. At GYATK, we understand the difficulties of new technology acquisition and its assimilation into existing business structure.
            </p>
            <p className="body-text">
              To help clients with this demanding challenge we have devised flexible mechanisms for joint assessments & evaluations for RVCR Product We offer multiple options for you to decide the best suited adoption methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Business Case Analysis Section */}
      <section className="section-padding bg-light-grid">
        <div className="container">
          <div className="biz-case-box">
            <h2 className="section-heading">Technology business case analysis (Product value analysis)</h2>
            <p className="body-text">
              Any new technology acquisition starts with a business case built on assessment of technology suitability for your Product Range. we help you evaluate the value gain from RVCR technology with interactive assistance to your management / technical teams.
            </p>
            <p className="body-text">
              The business case analyses both tangible as well as intangible gains. The stage-wise assessment modules are listed below.
            </p>
          </div>
        </div>
      </section>

      {/* Preliminary Assessment Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-start">
          <div className="assessment-image-wrap">
            <img 
              src="/images/preliminary-assessment.jpg" 
              alt="Preliminary Assessment" 
              className="assessment-card-img"
            />
          </div>
          <div className="assessment-content">
            <h3 className="sub-section-heading">Preliminary assessment</h3>
            <p className="body-text">
              It starts with high level overview of a particular application The implications are evaluated in its entirety and include its technological, financial, economic, social, environmental and the perceptual value (under the heads listed below) and finer details are worked downwards
            </p>

            <h4 className="list-group-title">High Level Business Case Assessment</h4>
            <ul className="custom-check-list">
              <li>
                <Check size={18} className="check-icon" />
                <span>Concept Product Feasibility & Viability Assessment.</span>
              </li>
              <li>
                <Check size={18} className="check-icon" />
                <span>‘Segment/Sector’ specific profitability Analysis.</span>
              </li>
              <li>
                <Check size={18} className="check-icon" />
                <span>Product Specific Technical Analysis (existing product equivalent comparison).</span>
              </li>
              <li>
                <Check size={18} className="check-icon" />
                <span>Market needs and Product Value Quantification.</span>
                <ul className="nested-bullet-list">
                  <li>• Market spread. TAM SAM SOM.</li>
                  <li>• Trends; Competition overview.</li>
                  <li>• Market Barriers and entry method.</li>
                  <li>• Customer analysis.</li>
                  <li>• Price point analysis.</li>
                  <li>• Pricing and structuring</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Assessment Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="detailed-assessment-box">
            <div className="grid-2-col align-start">
              <div className="assessment-image-wrap">
                <img 
                  src="/images/detailed-assessment.jpg" 
                  alt="Detailed Assessment" 
                  className="assessment-card-img"
                />
              </div>
              <div className="assessment-content">
                <h3 className="sub-section-heading">Detailed Assessment</h3>
                <ul className="custom-check-list">
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Development Cost.</span>
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Cost of Manufacture.</span>
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Product Operation & maintenance Cost Evaluation.</span>
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Inventory Cost (Packing, Storage, Logistical Optimization).</span>
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Cost & Time assessment of Assembly line development (Modifying existing setup).</span>
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Production Streamlining & Optimization.</span>
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Standardization (Product/Process/Systems).</span>
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Supply and Value chain optimization</span>
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    <span>Quantifying Levelized Cost of Product (Preliminary Pricing Model development).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Development & Process Flow Section */}
      <section className="process-flow-section">
        <div className="container text-center">
          <h2 className="process-main-title">Product Development</h2>
          <p className="process-subtitle">
            The product development is an high end engineering expertise. We take you thru the entire RVCR Product Development project process
          </p>

          <h3 className="process-flow-heading">The Project Process flow</h3>

          <div className="process-flow-image-wrap">
            <img 
              src="/images/project-process-flow.jpg" 
              alt="The Project Process flow" 
              className="process-flow-infographic"
            />
          </div>
        </div>
      </section>

      {/* Project Cost Evaluation Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-start">
          <div className="cost-eval-content">
            <h2 className="section-heading">Project Cost Evaluation</h2>
            <p className="body-text">
              We evaluate its cost and other resource requirement.
            </p>

            <h3 className="sub-section-heading mt-4">Product Development planning and management</h3>
            <ul className="custom-check-list">
              <li>
                <Check size={18} className="check-icon" />
                <span>Cost Evaluation & Budgeting</span>
              </li>
              <li>
                <Check size={18} className="check-icon" />
                <span>Project Planning & Activity mapping</span>
              </li>
              <li>
                <Check size={18} className="check-icon" />
                <span>Project Resource mapping and allocation</span>
              </li>
              <li>
                <Check size={18} className="check-icon" />
                <span>Scheduling & Time estimation</span>
              </li>
              <li>
                <Check size={18} className="check-icon" />
                <span>Technology and product development facilities erection</span>
              </li>
              <li>
                <Check size={18} className="check-icon" />
                <span>Facility customization</span>
              </li>
            </ul>
          </div>
          <div className="cost-eval-image-wrap">
            <img 
              src="/images/production-cost.jpg" 
              alt="Project Cost Evaluation" 
              className="assessment-card-img"
            />
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

const cssContent = `/* Commercial Services Page Styling matching reference screenshot 100% */
.commercial-page-root {
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

.mt-4 {
  margin-top: 24px;
}

/* Hero Section */
.commercial-hero {
  background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%);
  border-bottom: 1px solid #bae6fd;
  padding: 60px 0;
  position: relative;
  overflow: hidden;
}

.commercial-hero-container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.commercial-hero-title {
  font-size: 40px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
  margin: 0 0 16px 0;
}

.commercial-hero-subtitle {
  font-size: 17px;
  line-height: 1.6;
  color: #0284c7;
  font-weight: 600;
  margin: 0;
}

/* Hero Diagram Graphic */
.commercial-hero-graphic {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
}

.tech-nodes-diagram {
  position: relative;
  width: 380px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.central-globe {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, #22c55e 0%, #15803d 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
  border: 4px solid #ffffff;
}

.globe-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.globe-brand {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;
}

.globe-text {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.node-badge {
  position: absolute;
  background: #ffffff;
  border: 1.5px solid #0284c7;
  color: #0369a1;
  font-weight: 700;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  white-space: nowrap;
}

.node-top {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.node-top-right {
  top: 60px;
  right: -10px;
}

.node-bottom-right {
  bottom: 20px;
  right: -30px;
  text-align: left;
  line-height: 1.3;
}

.node-bottom-left {
  bottom: 20px;
  left: -20px;
}

.node-left {
  top: 100px;
  left: -30px;
}

/* Overview Section */
.zero-carbon-badge-img {
  max-width: 280px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.section-heading {
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 18px 0;
  line-height: 1.25;
}

.sub-section-heading {
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 16px 0;
}

.body-text {
  font-size: 16px;
  line-height: 1.7;
  color: #475569;
  margin: 0 0 16px 0;
}

/* Custom Check Lists */
.custom-check-list {
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.custom-check-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: #334155;
  line-height: 1.5;
}

.check-icon {
  color: #0284c7;
  flex-shrink: 0;
  margin-top: 2px;
}

.list-group-title {
  font-size: 18px;
  font-weight: 700;
  color: #0284c7;
  margin: 24px 0 12px 0;
}

.nested-bullet-list {
  list-style: none;
  padding-left: 28px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #0284c7;
  font-weight: 600;
  font-size: 14px;
}

/* Assessment Card Images */
.assessment-card-img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: block;
}

/* Detailed Assessment Box */
.detailed-assessment-box {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 40px;
}

/* Product Development & Process Flow Section */
.process-flow-section {
  background-color: #0d1726;
  color: #ffffff;
  padding: 70px 0;
}

.process-main-title {
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 12px 0;
}

.process-subtitle {
  font-size: 16px;
  color: #94a3b8;
  max-width: 720px;
  margin: 0 auto 36px auto;
  line-height: 1.6;
}

.process-flow-heading {
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.5px;
  margin: 0 0 40px 0;
}

.process-flow-image-wrap {
  width: 100%;
  overflow-x: auto;
}

.process-flow-infographic {
  width: 100%;
  max-width: 1100px;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
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
  .grid-2-col {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .commercial-hero-container {
    grid-template-columns: 1fr;
  }
  .commercial-hero-graphic {
    margin-top: 30px;
  }
}
`;

fs.writeFileSync('client/src/pages/CommercialServicesPage.jsx', jsxContent);
fs.writeFileSync('client/src/pages/CommercialServicesPage.css', cssContent);
console.log('Successfully updated CommercialServicesPage.jsx and CommercialServicesPage.css!');
