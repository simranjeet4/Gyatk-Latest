import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import './CommercialServicesPage.css';

export default function CommercialServicesPage() {
  return (
    <div className="commercial-page-root">
      {/* Hero Banner Section with hero-tech-graphic.jpg as Background */}
      <section className="commercial-hero">
        <div className="container commercial-hero-container">
          <div className="commercial-hero-text">
            <h1 className="commercial-hero-title">Technology Assessment Services</h1>
            <p className="commercial-hero-subtitle">
              We take you through the relevant evaluation for adopting RVCR Technology for sustainable and true "Zero Carbon" transition.
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
                <span className="list-text-main">'Segment/Sector' specific profitability Analysis.</span>
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
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Market spread. TAM SAM SOM.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Trends; Competition overview.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Market Barriers and entry method.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Customer analysis.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Price point analysis.</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Pricing and structuring</li>
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
