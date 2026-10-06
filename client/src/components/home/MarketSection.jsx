import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSections.css';

const OPPORTUNITIES = [
  {
    subtitle: 'Why RVCR',
    title: 'an enabler @ critical point',
    desc: 'RVCR alleviates this pain by outputing a new breed of ‘Zero Carbon’ systems for climate market drivers.',
    link: '/why-rvcr',
    image: '/images/New-Project-9.jpg',
    alt: 'Why RVCR an enabler @ critical point'
  },
  {
    subtitle: 'RVCR Markets',
    title: 'Addressing Zero Carbon tech market demand',
    desc: 'RVCR TAM covers entire transport & energy sector',
    link: '/rvcr-market',
    image: '/images/energy-and-transport.jpg',
    alt: 'Addressing Zero Carbon tech market demand'
  },
  {
    subtitle: 'Business Case',
    title: 'Creating newer markets',
    desc: 'We develop business case for RVCR pilot product commercilization.',
    link: '/rvcr-business-case',
    image: '/images/New-Project-8.jpg',
    alt: 'Creating newer markets'
  }
];

export default function MarketSection() {
  return (
    <section id="opportunities" className="section-common">
      <div className="container">
        <div className="section-title-center">
          <h2 className="section-heading-dark">RVCR Opportunities</h2>
        </div>

        <div className="opportunities-list">
          {OPPORTUNITIES.map((opp, idx) => (
            <div key={idx} className="opportunities-row">
              {/* Left Column: Headings, Text, Button */}
              <div className="opp-text-col">
                <div className="opp-title-wrap">
                  <h3 className="opp-subtitle">{opp.subtitle}</h3>
                  <h2 className="opp-main-title">{opp.title}</h2>
                </div>
                <p className="desc-justify opp-desc-text">
                  {opp.desc}
                </p>
                <Link to={opp.link} className="btn-gradient">
                  <span>Learn more</span>
                </Link>
              </div>

              {/* Right Column: Framed Image */}
              <div className="framed-photo-wrap">
                <img 
                  src={opp.image} 
                  alt={opp.alt} 
                  className="framed-photo"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
