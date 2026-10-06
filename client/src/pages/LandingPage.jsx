import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Phone, Mail, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import '../components/home/HomeSections.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <section className="page-hero-banner" style={{ padding: '6rem 0 5rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="badge-pill">Technology Partnership</span>
          <h1 className="page-hero-title" style={{ fontSize: '3.2rem' }}>
            Join the RVCR Endeavor
          </h1>
          <p className="page-hero-subtitle" style={{ fontSize: '1.25rem' }}>
            We design, develop, and deliver systems with the coveted VCR feature that out-perform conventional systems with newer functionalities and capabilities.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <Link to="/contact-us" className="btn btn-primary" style={{ padding: '0.9rem 2.25rem' }}>
              <span>Contact Our Engineering Team</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/zero-emission-technology" className="btn btn-secondary">
              <span>Explore RVCR Principles</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="feature-row">
            <div className="feature-col-text">
              <span className="section-subtitle">Pioneering Mechanical Disruption</span>
              <h2 className="section-title">A New Era in Prime Mover Efficiency</h2>
              <p className="feature-lead">
                Transforming global energy conversion mechanisms for heavy transport, microgrids, and fluid machinery.
              </p>
              <ul className="feature-checklist">
                <li>
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>50+ Countries IPR Protected</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>Real-Time Multi-Fuel Combustion (Hydrogen, Biomethane, e-Fuels)</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>~30% Higher Thermal Efficiency over Conventional Engines</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>54% Volumetric Packaging Envelope Reduction</span>
                </li>
              </ul>
            </div>

            <div className="feature-col-media">
              <div className="media-card-wrap">
                <img 
                  src="/images/Phy-Detroit-Proto-pic-left-Iso.jpg" 
                  alt="Detroit Prototype" 
                  className="feature-main-image"
                  onError={(e) => { e.target.src = '/images/engine-with-bg.png'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
