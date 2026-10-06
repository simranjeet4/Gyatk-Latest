import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import './TechInnovationPage.css';

export default function TechInnovationPage() {
  return (
    <div className="tech-innovation-page-root">
      {/* Hero Banner Section */}
      <section className="tech-innovation-hero">
        <div className="container tech-innovation-hero-container">
          <div className="tech-innovation-hero-text">
            <h1 className="tech-innovation-hero-title">Technology Integration Services</h1>
            <p className="tech-innovation-hero-subtitle">
              We assist you through the entire process for adopting RVCR technology products to help you attain "Zero Carbon" objectives.
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
              We provide Technology integration Services to develop and deliver customized Products based RVCR. This is a key service required for Client's procuring IPR for commercial sale of RVCR Technology Products.
            </p>
            <p className="body-text">
              The Client could opt to develop RVCR products independently, in-house or by a 3rd Party, however hiring GYATK' have several advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Operations Management Section */}
      <section className="section-padding bg-light-grid">
        <div className="container grid-2-col align-center">
          <div className="tech-ops-content">
            <h2 className="section-heading">Technical operations management</h2>
            <p className="body-text">
              We engage with Industry in several ways in this entire value-chain and provide the players like OEM's and other manufacturers of the end-products with various services including "Engineering Machine Design and Product Development Services", I.P Rights etc.
            </p>
            <p className="body-text">
              We provide our clients (hardware manufacturing companies/OEM's) with services to adopt/Integrate the RVCR Technology systems into their products utilizing their existing business structure and thence provide the latest in technology to upgrade their Products to beat the best available globally. We deliver you global market leadership by cutting edge technology advantage.
            </p>
          </div>
          <div className="tech-ops-image-wrap">
            <img 
              src="/images/technical-operation-management.jpg" 
              alt="Technical Operations Management" 
              className="tech-card-img"
            />
          </div>
        </div>
      </section>

      {/* Options & GYATK Advantage Cards Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-start">
          
          {/* Card 1: The Options */}
          <div className="advantage-card">
            <img 
              src="/images/businessmen-businesswomen-meeting-brainstorming-ideas.jpg" 
              alt="The Options" 
              className="card-header-img"
            />
            <div className="card-body">
              <h3 className="card-title">The Options</h3>
              <p className="body-text">
                GYATK's services contract are generally packaged as a part of the IPR License agreement for delivering complete commercial product manufacture know-how to the client. The Client can choose from Mix of options listed below.
              </p>

              <div className="preliminary-list-container">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">GYATK accepts the onus to develop and Deliver RVCR Products for the client for commercial sale.</span>
                </div>
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">GYATK and client Jointly develop RVCR Products under mutually agreed terms.</span>
                </div>
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Utilizing of clients inhouse resources like infrastructure, Engineering Design tools, Production facilities, Test facilities and for the Joint Development Program.</span>
                </div>
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Hire only services for D&D activities not available inhouse with the client.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: The GYATK Advantage */}
          <div className="advantage-card">
            <img 
              src="/images/technology-assessment.jpg" 
              alt="The GYATK Advantage" 
              className="card-header-img"
            />
            <div className="card-body">
              <h3 className="card-title">The GYATK Advantage</h3>
              <p className="body-text">
                Third Parties will have to start from scratch whereas GYATK already has Technology lead. The "D & D" DATA Handling (Compilation; Documentation; Management; and Control) is done using a custom developed system by GYATK called TOMS "Technology Operations Management System". TOMS is integrated with PLM and Project Planning Software and is a Part of ISO system. Other advantages
              </p>

              <div className="preliminary-list-container">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">RVCR technology fine print Know-how remains Captive to client. A 3rd Party developing the know-how reduces client's exclusivity advantage considerably.</span>
                </div>
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Gaining Captive "Multiple Downstream Products" development capability.</span>
                </div>
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">In-house technology leveraging capability for sustained competitive advantage.</span>
                </div>
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Avail discounted rates of services by GYATK for its IPR Licensee.</span>
                </div>
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Last but not the least, we best know about RVCR and making of its Products.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Full-Width Metallic Engine Banner */}
      <section className="engine-banner-fullwidth">
        <img 
          src="/images/rvcr-metallic-engine-banner.jpg" 
          alt="RVCR Metallic Engine Assembly" 
          className="engine-banner-img"
        />
      </section>

      {/* Financials and Structuring Section */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-start">
          <div>
            <h2 className="section-heading">Financials and Structuring</h2>
          </div>
          <div>
            <p className="body-text">
              Benefiting from GYATK's in-depth understanding of RVCR tech project financing peculiarities. The project financing is kept flexible to accommodate the various factors. The main consideration for its future extrapolation of the project operations into an independent business vertical.
            </p>
            <p className="body-text">
              The Zero Carbon Technology demand among Sector & Industry verticals is segment specific. We engage 3rd party market analyst and experts for Survey, analysis, and evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Project and IP Strategy Management Section */}
      <section className="section-padding bg-light-grid">
        <div className="container grid-2-col align-start">
          <div className="strategy-image-wrap">
            <img 
              src="/images/math-virtual-cad.jpg" 
              alt="RVCR 3D Engine Model" 
              className="tech-card-img"
            />
          </div>
          <div className="strategy-content">
            <h2 className="section-heading">Project and IP strategy management</h2>
            <p className="body-text">
              GYATK executed by 1st IPR License agreement was in 2007. GYATK has valuable exposure in the various operational and value chain aspects, that are essential for the RVCR IP proposition to successfully deliver the business gains conceived in the IP deal.
            </p>
            <p className="body-text mb-4">
              The two aspects covered in the IP deal for ensuring accountability and commitment for ensuring success of the business Proposition, are: �
            </p>

            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">A complete elaborate "Product Development Project Plan" and its time bound execution commitment. GYATK provides services for Project Planning; Project Management; Consultancy for Planning, which clients could avail, unless the capability is available inhouse with the client.</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">The Technological Operations Management system for effective and efficient execution and control over the technological operations of the Project. The process involves high end engineering excellence and GYATK provides this specialized competency, of D&D operations & Process Management services/consultancy.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Various Heads Covered Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="section-heading mb-6">The Various heads covered are</h2>

          <div className="grid-2-col align-start">
            <div className="preliminary-list-container">
              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">IP Management</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> IP due diligence</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Foreground, Background IP strategy development.</li>
                </ul>
              </div>

              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">IP Licensing & Valuation</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Success fee and royalty structuring</li>
                </ul>
              </div>

              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Product life cycle</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Product economics of scale Plan and (facility, Inventory, qc) costing</li>
                </ul>
              </div>

              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Technical support and training</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Individual product handling and Safety management</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Operations, maintenance training (manuals)</li>
                </ul>
              </div>
            </div>

            <div className="preliminary-list-container">
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Regulatory compliance management</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Value and supply chain management</span>
              </div>

              <div className="list-item-with-sub">
                <div className="list-item">
                  <Check size={18} className="list-check-icon" />
                  <span className="list-text-main">Technical support and training</span>
                </div>
                <ul className="preliminary-sub-list">
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Support Systems management, backward and forward integration</li>
                  <li><ChevronRight size={13} className="sub-bullet-icon" /> Individual system lifecycle interdependence</li>
                </ul>
              </div>

              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Warranties and maintenance</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">Logistics & agency management.</span>
              </div>
              <div className="list-item">
                <Check size={18} className="list-check-icon" />
                <span className="list-text-main">After sale maintenance, compliance, and regeneration management</span>
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
              We assist you through the entire process for adopting RVCR technology products to help you attain "Zero Carbon" objectives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
