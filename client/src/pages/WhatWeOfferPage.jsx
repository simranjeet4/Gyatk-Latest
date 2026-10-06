import React from 'react';
import { Link } from 'react-router-dom';
import './WhatWeOfferPage.css';

export default function WhatWeOfferPage() {
  return (
    <div className="what-we-offer-root">
      {/* Hero Banner Section */}
      <section className="offer-hero">
        <div className="container offer-hero-container">
          <div className="offer-hero-text">
            <h1 className="offer-hero-title">COMMERCIAL R&D SERVICES</h1>
            <p className="offer-hero-subtitle">
              We will provide you with services covering all aspects of technology adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Card 1: Technology & Innovation Services */}
      <section className="section-padding bg-light-grid">
        <div className="container grid-2-col align-center">
          <div className="offer-content-col">
            <span className="eyebrow-badge">Technology & Innovation Services</span>
            <h2 className="card-main-heading">Enabling RVCR Adoption</h2>
            <p className="body-text">
              New technology adoption is a highly specialized and arduous job. It involves expertise in technical, legal, market, statutory and business aspects. Each RVCR tech commercial application case is unique, and we know how to suit RVCR to your market needs. We walk you through all these aspects for adopting and commercializing RVCR technology-based products.
            </p>
            <p className="body-text italic-bold">
              We devise segment specific optimal IPR for long-term revenue benefits. We also erect and operationalize open innovation structure for management of RVCR product project.
            </p>
            <div className="btn-wrap">
              <Link to="/technology-and-innovation-services" className="know-more-btn">
                Know More
              </Link>
            </div>
          </div>
          <div className="offer-image-col">
            <img 
              src="/images/advertised.jpg" 
              alt="Enabling RVCR Adoption" 
              className="offer-card-img"
            />
          </div>
        </div>
      </section>

      {/* Card 2: D & D Services */}
      <section className="section-padding bg-white">
        <div className="container grid-2-col align-center">
          <div className="offer-image-col">
            <img 
              src="/images/dd-design.jpg" 
              alt="RVCR pilot product D&D services" 
              className="offer-card-img"
            />
          </div>
          <div className="offer-content-col">
            <span className="eyebrow-badge">D & D Services</span>
            <h2 className="card-main-heading">RVCR pilot product D&D services</h2>
            <p className="body-text italic-sub">
              We cover all aspects in 'high-value-design'
            </p>
            <p className="body-text">
              The RVCR knowhow architecture is structured to easily derive product technologies for various down-stream Primemovers and fluid motor applications.
            </p>
            <p className="body-text">
              Our services cover all aspect of Product project planning; management; Virtual design (modelling and analysis) & Physical engineering (Manufacture, Assembly, systems integration), Testing validation and Product life cycle support.
            </p>
            <div className="btn-wrap">
              <Link to="/technical-services" className="know-more-btn">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Card 3: Technology Assessment */}
      <section className="section-padding bg-light-grid">
        <div className="container grid-2-col align-center">
          <div className="offer-content-col">
            <h2 className="card-main-heading">Technology Assessment</h2>
            <p className="body-text">
              We help you through technology case assessment, deriving best IPR fit and Strategic product specification (MVP) deduction for your business.
            </p>
            <p className="body-text">
              We develop the best RVCR technology business case for your specific segment needs. We devise best RVCR tech strategy mix for your business case.
            </p>
            <p className="body-text">
              Our assessment support ranges from initial financial evaluation of RVCR product to its market grounding sense check, to technical support end to down-stream training needs.
            </p>
            <div className="btn-wrap">
              <Link to="/commercial-services" className="know-more-btn">
                Know More
              </Link>
            </div>
          </div>
          <div className="offer-image-col">
            <img 
              src="/images/technology-assessment.jpg" 
              alt="Technology Assessment" 
              className="offer-card-img solution-graphic-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
