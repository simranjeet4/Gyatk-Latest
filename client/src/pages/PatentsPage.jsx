import React from 'react';
import { Check, FileText, Download } from 'lucide-react';
import './PatentsPage.css';

export default function PatentsPage() {
  const patentCerts = [
    { country: "United States", filename: "USA-Granted-Patent-pages-12.pdf", year: "USPTO" },
    { country: "India", filename: "20031224-Indian-CERTIFICATE.pdf", year: "Indian Patent Office" },
    { country: "China", filename: "china-Granted-pat0001.pdf", year: "SIPO / CNIPA" },
    { country: "Russia", filename: "Pat-cert-Russia.pdf", year: "Rospatent" },
    { country: "Australia", filename: "Aus-patent-cert.pdf", year: "IP Australia" },
    { country: "Singapore", filename: "singapore-patent.pdf", year: "IPOS" }
  ];

  const applicableSectors = [
    "Automotive",
    "Agriculture",
    "Defense",
    "Aerospace",
    "Industrial"
  ];

  const mapHotspots = [
    { id: "canada", name: "Canada", patentNo: "Patent No. - 2564973", pdf: "Canada.pdf", x: 27.0, y: 34.5 },
    { id: "usa", name: "United States", patentNo: "Patent No. - US8297252B2", pdf: "USA-Granted-Patent-pages-12.pdf", x: 29.5, y: 48.5 },
    { id: "mexico", name: "Mexico", patentNo: "Patent No. - MX2008001234", pdf: "mexico.pdf", x: 28.0, y: 59.0 },
    { id: "brazil", name: "Brazil", patentNo: "Patent No. - BR11200801", pdf: "Canada.pdf", x: 38.8, y: 72.0 },
    { id: "uk", name: "United Kingdom", patentNo: "Patent No. - EP1945914", pdf: "singapore-patent.pdf", x: 49.3, y: 34.0 },
    { id: "europe", name: "European Patent Office", patentNo: "Patent No. - EP1945914B1", pdf: "singapore-patent.pdf", x: 56.8, y: 38.5 },
    { id: "israel", name: "Israel", patentNo: "Patent No. - IL189412", pdf: "Israel-.pdf", x: 57.6, y: 49.5 },
    { id: "nigeria", name: "Nigeria", patentNo: "Patent No. - NG/IPT/2008", pdf: "Kenya-patent-cert.pdf", x: 51.8, y: 61.5 },
    { id: "kenya", name: "Kenya", patentNo: "Patent No. - KE512", pdf: "Kenya-patent-cert.pdf", x: 58.5, y: 64.5 },
    { id: "south-africa", name: "South Africa", patentNo: "Patent No. - ZA200804561", pdf: "South-Africa.pdf", x: 55.4, y: 79.5 },
    { id: "russia", name: "Russia", patentNo: "Patent No. - RU2398971", pdf: "Pat-cert-Russia.pdf", x: 71.2, y: 26.5 },
    { id: "india", name: "India", patentNo: "Patent No. - 20031224", pdf: "20031224-Indian-CERTIFICATE.pdf", x: 67.0, y: 54.5 },
    { id: "china", name: "China", patentNo: "Patent No. - CN101375043", pdf: "china-Granted-pat0001.pdf", x: 73.0, y: 46.8 },
    { id: "japan", name: "Japan", patentNo: "Patent No. - JP5123984", pdf: "Japan.pdf", x: 80.2, y: 45.5 },
    { id: "korea", name: "South Korea", patentNo: "Patent No. - KR1012394", pdf: "korea.pdf", x: 77.5, y: 46.0 },
    { id: "hongkong", name: "Hong Kong", patentNo: "Patent No. - HK1123456", pdf: "hongkong-2.pdf", x: 74.5, y: 54.0 },
    { id: "vietnam", name: "Vietnam", patentNo: "Patent No. - VN1842", pdf: "vietnam-patent-cert.pdf", x: 73.5, y: 57.5 },
    { id: "philippines", name: "Philippines", patentNo: "Patent No. - PH12008", pdf: "phillipines.pdf", x: 76.5, y: 58.8 },
    { id: "singapore", name: "Singapore", patentNo: "Patent No. - SG144219", pdf: "singapore-patent.pdf", x: 72.5, y: 64.0 },
    { id: "indonesia", name: "Indonesia", patentNo: "Patent No. - ID002419", pdf: "Indonesia-cert-.pdf", x: 75.5, y: 66.0 },
    { id: "australia", name: "Australia", patentNo: "Patent No. - AU2006334512", pdf: "Aus-patent-cert.pdf", x: 79.0, y: 77.5 },
    { id: "newzealand", name: "New Zealand", patentNo: "Patent No. - NZ567123", pdf: "Newzealand-patent-cert.pdf", x: 87.2, y: 86.8 }
  ];

  return (
    <div className="patents-page-root">
      {/* 1. Hero Banner with Dark Circuit Pattern & Far Bottom-Right Patent Seal Badge */}
      <section className="patents-hero">
        <div className="patents-hero-overlay"></div>
        <div className="container patents-hero-container">
          <div className="patents-hero-content-grid">
            <div className="patents-hero-text">
              <h1 className="patents-hero-title">
                We provide high tech solutions with IPR - intellectual property rights
              </h1>
            </div>
            
            <div className="patents-hero-media">
              <img 
                src="/images/shaft.png" 
                alt="RVCR Kinematic Core Mechanism" 
                className="patents-hero-shaft-img"
              />
            </div>
          </div>
        </div>

        {/* Floating Gold Seal Badge placed on far bottom-right corner outside container */}
        <div className="patents-gold-seal-badge">
          <img 
            src="/images/patent-seal-badge.jpg" 
            alt="An Invention Originating from India Was Patented Globally in 49 Countries" 
            className="patents-seal-badge-img"
          />
        </div>
      </section>

      {/* 2. IPR & Technology Licensing Section */}
      <section className="patents-section patents-licensing-section">
        <div className="container">
          <h2 className="patents-section-title">IPR & Technology Licensing</h2>
          
          <div className="patents-narrative-text">
            <p>
              RVCR is a seed technology applicable across diverse product categories and sectors. The base background IPR is segregated to flexibly accommodate client's interest area. It is further topped up with foreground IP while developing products for specific segments. Over two decades of commercial licensing experience ensures robust contractual protection, time-bound deliverables, and strategic risk mitigation for partner OEMs.
            </p>
            
            <p className="patents-applicable-intro">The IPR is applicable for :</p>
            
            <ul className="patents-check-list">
              {applicableSectors.map((sector) => (
                <li key={sector}>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>{sector}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Interactive World Map Reach Graphic with Hover Tooltips */}
          <div className="patents-interactive-map-section">
            <div className="patents-map-wrapper">
              <img 
                src="/images/map-world-interactive.png" 
                alt="Global Patent Reach Map Across 49 Countries" 
                className="patents-map-base-img"
              />

              {/* Map Pin Hotspots */}
              {mapHotspots.map((spot) => (
                <div 
                  key={spot.id} 
                  className="map-pin-hotspot"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  <div className="pin-dot"></div>
                  <div className="map-tooltip-box">
                    <h5 className="tooltip-country-name">{spot.name}</h5>
                    <p className="tooltip-patent-no">{spot.patentNo}</p>
                    <a 
                      href={`/images/${spot.pdf}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="tooltip-open-link"
                    >
                      Open Patent
                    </a>
                    <div className="tooltip-arrow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Highlight Banner Box */}
          <div className="patents-highlight-banner">
            <h3 className="highlight-banner-title">
              THE 1ST IPR LICENSE AGREEMENT WAS EXECUTED BY GYATK IN 2007.
            </h3>
            <p className="highlight-banner-sub">
              We built an open innovation network with leading OEMs.
            </p>
          </div>

          {/* 5. Two Numbered Cards Section */}
          <div className="patents-numbered-section">
            <p className="patents-intro-p">
              GYATK R&D is committed to augment 'innovation management' and product development techniques for continually enhancing the commercial potency of RVCR technology system for a completely self-sustainable 'Zero Carbon' industrial ecosystem.
            </p>

            <div className="patents-grid-2col">
              {/* Card 1 */}
              <div className="numbered-card">
                <span className="card-big-number">1</span>
                <p className="card-body-text">
                  A company wide holistic R&D program of Gyatk in India which was framed in concert with IC2 Institute (UT Austin) Global Commercialization Program. Under this program we derived key strategic initiatives for creating scalable revenue models suitable for global markets.
                </p>
              </div>

              {/* Card 2 */}
              <div className="numbered-card">
                <span className="card-big-number">2</span>
                <p className="card-body-text">
                  The International Open Innovation Framework created by Gyatk enabled multi-country collaboration for adopting green technology products. This strategic advantage allowed fast deployment of RVCR technology across diverse market segments and geographical locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 2: IPR Value Realization */}
      <section className="patents-section patents-realization-section">
        <div className="container">
          <h2 className="patents-section-title">IPR Value Realization</h2>
          
          <div className="patents-realization-intro">
            <p>
              The business model of GYATK is structured around IP value realization through licensing agreements. GYATK owns the background IP and licenses both IPR and technology to OEMs. This value-realization program is executed over structured interactive sessions.
            </p>
          </div>

          {/* Flowchart Diagram Box */}
          <div className="patents-flowchart-container">
            <div className="flowchart-left-tree">
              {/* Root Box */}
              <div className="flowchart-node root-node">
                <span>GYATK IP Rights & Licensing</span>
              </div>
              
              <div className="flowchart-connector-line"></div>
              
              {/* Branch Nodes */}
              <div className="flowchart-branches">
                <div className="flowchart-node branch-red">
                  <span>Segment Specific IP Rights</span>
                </div>
                <div className="flowchart-node branch-cyan">
                  <span>Market Specific IP Rights</span>
                </div>
              </div>
            </div>

            {/* Flowchart Right Features List */}
            <div className="flowchart-right-features">
              <ul className="patents-check-list">
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Highly lucrative revenue sharing model</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Secured exclusive rights across 49 countries</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Agility for non-disruptive integration in existing supply chains</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Thermal expansion & dynamic compression ratio for Net Zero roadmap</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Concluding Narrative */}
          <div className="patents-realization-conclude">
            <p>
              In part this program's outcome is a preliminary assessment dossier, which evaluates client's specific interest area and business fit. The dossier provides a roadmap for technology development, validation, and commercialization.
            </p>
            <p>
              Dossiers also include recommendations for the scope of licensing, specific product specifications, and licensing terms. This enables both GYATK and the client to proceed with confidence into the formal License Agreement and joint product realization.
            </p>
          </div>

          {/* Patent Documentation Downloads */}
          <div className="patents-downloads-block">
            <h3 className="downloads-block-title">Official Granted Patent Certificates</h3>
            <div className="grid-3 certs-grid">
              {patentCerts.map((cert) => (
                <a 
                  key={cert.country} 
                  href={`/images/${cert.filename}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-card"
                >
                  <div className="cert-header">
                    <FileText size={22} className="cert-icon" />
                    <span className="cert-badge">Verified Grant</span>
                  </div>
                  <h4 className="cert-country">{cert.country}</h4>
                  <span className="cert-authority">{cert.year}</span>
                  <div className="cert-download-link">
                    <span>View Grant PDF</span>
                    <Download size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
