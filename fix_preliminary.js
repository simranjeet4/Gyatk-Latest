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
            <img 
              src="/images/hero-tech-graphic.jpg" 
              alt="Technology Assessment Graphic" 
              className="hero-graphic-img"
            />
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
            <h2 className="section-heading">Preliminary assessment</h2>
            <p className="body-text mb-6">
              It starts with high level overview of a particular application The implications are evaluated in its entirety and include its technological, financial, economic, social, environmental and the perceptual value (under the heads listed below) and finer details are worked downwards
            </p>

            <h4 className="assessment-sub-heading">High Level Business Case Assessment</h4>
            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Concept Product Feasibility & Viability Assessment.</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">‘Segment/Sector’ specific profitability Analysis.</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Product Specific Technical Analysis (existing product equivalent comparison).</span>
              </div>
              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Market needs and Product Value Quantification.</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><span className="sub-bullet-dot">•</span> Market spread. TAM SAM SOM.</li>
                  <li><span className="sub-bullet-dot">•</span> Trends; Competition overview.</li>
                  <li><span className="sub-bullet-dot">•</span> Market Barriers and entry method.</li>
                  <li><span className="sub-bullet-dot">•</span> Customer analysis.</li>
                  <li><span className="sub-bullet-dot">•</span> Price point analysis.</li>
                  <li><span className="sub-bullet-dot">•</span> Pricing and structuring</li>
                </ul>
              </div>
            </div>
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
                <h2 className="section-heading">Detailed Assessment</h2>
                <div className="preliminary-list-container">
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Development Cost.</span>
                  </div>
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Cost of Manufacture.</span>
                  </div>
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Product Operation & maintenance Cost Evaluation.</span>
                  </div>
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Inventory Cost (Packing, Storage, Logistical Optimization).</span>
                  </div>
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Cost & Time assessment of Assembly line development (Modifying existing setup).</span>
                  </div>
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Production Streamlining & Optimization.</span>
                  </div>
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Standardization (Product/Process/Systems).</span>
                  </div>
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Supply and Value chain optimization</span>
                  </div>
                  <div className="list-item">
                    <Check size={18} className="list-check-icon" />
                    <span className="list-text-main">Quantifying Levelized Cost of Product (Preliminary Pricing Model development).</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Development & Process Flow Section - Full width end to end */}
      <section className="process-flow-section-fullwidth">
        <img 
          src="/images/project-process-flow.jpg" 
          alt="The Project Process flow" 
          className="process-flow-fullwidth-img"
        />
      </section>

      {/* Project Cost Evaluation Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-start">
          <div className="cost-eval-content">
            <h2 className="section-heading">Project Cost Evaluation</h2>
            <p className="body-text">
              We evaluate its cost and other resource requirement.
            </p>

            <h3 className="subheading-small">Product Development planning and management</h3>
            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Cost Evaluation & Budgeting</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Project Planning & Activity mapping</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Project Resource mapping and allocation</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Scheduling & Time estimation</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Technology and product development facilities erection</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Facility customization</span>
              </div>
            </div>
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

const cssContent = `/* Commercial Services Page Styling - Clean Refined List */
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

/* Hero Section */
.commercial-hero {
  background: #fdfdfd;
  background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
  background-size: 24px 24px;
  border-bottom: 1px solid #e2e8f0;
  padding: 50px 0;
  position: relative;
  overflow: hidden;
}

.commercial-hero-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: center;
}

.commercial-hero-title {
  font-size: 38px;
  font-weight: 800;
  color: #1b355a;
  line-height: 1.25;
  margin: 0 0 16px 0;
}

.commercial-hero-subtitle {
  font-size: 16px;
  line-height: 1.6;
  color: #0284c7;
  font-weight: 600;
  margin: 0;
}

.hero-graphic-img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 280px;
  object-fit: contain;
}

/* Section Headings */
.section-heading {
  font-size: 30px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 18px 0;
  line-height: 1.25;
}

.assessment-sub-heading {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 16px 0;
}

.subheading-small {
  font-size: 18px !important;
  font-weight: 700;
  color: #1e293b;
  margin: 24px 0 14px 0;
}

.body-text {
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  margin: 0 0 16px 0;
}

.mb-6 {
  margin-bottom: 24px;
}

/* Preliminary Assessment List Styling */
.preliminary-list-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
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
  align-items: center;
  gap: 6px;
  line-height: 1.4;
}

.sub-bullet-dot {
  color: #f97316;
  font-weight: 800;
  font-size: 16px;
}

/* Zero Carbon Badge */
.zero-carbon-badge-img {
  max-width: 280px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
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

/* Process Flow Section - Full Width Edge to Edge */
.process-flow-section-fullwidth {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #0d1726;
  display: block;
}

.process-flow-fullwidth-img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
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
  .grid-2-col {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .commercial-hero-container {
    grid-template-columns: 1fr;
  }
}
`;

fs.writeFileSync('client/src/pages/CommercialServicesPage.jsx', jsxContent);
fs.writeFileSync('client/src/pages/CommercialServicesPage.css', cssContent);
console.log('Preliminary assessment list & hero graphic updated!');
