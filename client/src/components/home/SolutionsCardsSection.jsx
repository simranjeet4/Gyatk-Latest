import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSections.css';

const OFFERS = [
  {
    icon: '/images/globe-copy.svg',
    title: 'The gains',
    desc: 'Addition services for adoption of RVCR – like technology evaluation/ assessment/ D&D services for market-specific applications.',
    link: '/strategic-advantage'
  },
  {
    icon: '/images/wind-mill-copy.svg',
    title: 'Our proposition',
    desc: 'Create newer markets of next-gen green machines. Tap into opportunities from RVCR technology and IPR to create new markets for…',
    link: '/proposition'
  },
  {
    icon: '/images/customer-service.png',
    title: 'Support Services',
    desc: 'Services for ‘RVCR – evaluation & adoption’ Technology & Innovation Services D & D Services Technology Assessment.',
    link: '/what-we-offer'
  }
];

export default function SolutionsCardsSection() {
  return (
    <section id="whatweoffer" className="section-common">
      <div className="container">
        <div className="section-title-center">
          <h2 className="section-heading-dark">What We Offer</h2>
        </div>

        <div className="offer-cards-grid">
          {OFFERS.map((card) => (
            <div key={card.title} className="offer-card">
              <div className="offer-icon-wrap">
                <img src={card.icon} alt={card.title} loading="lazy" />
              </div>
              <h3 className="offer-title">{card.title}</h3>
              <p className="offer-desc">{card.desc}</p>
              <Link to={card.link} className="btn-gradient">
                <span>Learn More</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
