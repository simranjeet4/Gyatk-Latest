import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HomeSections.css';

const AWARDS_DATA = [
  {
    category: 'Selected',
    tabColor: '#003461',
    isHighlight: false,
    logos: [
      { src: '/images/ic-2-logo-bw-300x120-1.jpg', alt: 'IC2 Institute The University of Texas at Austin' },
      { src: '/images/University_of_Texas.png', alt: 'University of Texas' },
      { src: '/images/GEP-bw-300x102-1.png', alt: 'Global Entrepreneurship Program' }
    ]
  },
  {
    category: 'Funded',
    tabColor: '#8E286C',
    isHighlight: true,
    logos: [
      { src: '/images/dsir-300x147-1.png', alt: 'DSIR Govt of India' },
      { src: '/images/European_Commission-bw-1.png', alt: 'European Commission' }
    ]
  },
  {
    category: 'Winner',
    tabColor: '#003461',
    isHighlight: false,
    logos: [
      { src: '/images/ctipfan-bw-300x117-1.jpg', alt: 'CTI PFAN' },
      { src: '/images/standford-bw-300x117-1.jpg', alt: 'Stanford University' },
      { src: '/images/cto-bw-300x167-1.jpg', alt: 'CTO' }
    ]
  }
];

export default function CreditsSection() {
  const [activeIndices, setActiveIndices] = useState([0, 0, 0]);

  const handlePrev = (colIdx) => {
    setActiveIndices((prev) => {
      const next = [...prev];
      const max = AWARDS_DATA[colIdx].logos.length;
      next[colIdx] = (next[colIdx] - 1 + max) % max;
      return next;
    });
  };

  const handleNext = (colIdx) => {
    setActiveIndices((prev) => {
      const next = [...prev];
      const max = AWARDS_DATA[colIdx].logos.length;
      next[colIdx] = (next[colIdx] + 1) % max;
      return next;
    });
  };

  return (
    <section id="awards" className="awards-section-wrap">
      <div className="container">
        <div className="section-title-center awards-header">
          <h2 className="awards-main-heading">RVCR Credits &amp; Awards</h2>
        </div>

        <div className="awards-cards-row">
          {AWARDS_DATA.map((col, colIdx) => {
            const currentLogo = col.logos[activeIndices[colIdx]];
            return (
              <div 
                key={col.category} 
                className={`award-item-card ${col.isHighlight ? 'award-elevated-highlight' : ''}`}
              >
                {/* Rounded Colored Tab Bar INSIDE white card */}
                <div 
                  className="award-inner-tab"
                  style={{ backgroundColor: col.tabColor }}
                >
                  <span className="award-inner-tab-title">{col.category}</span>
                </div>

                {/* Card Body with Carousel Nav & Logo */}
                <div className="award-carousel-row">
                  <button 
                    type="button"
                    className="award-chevron-btn prev"
                    onClick={() => handlePrev(colIdx)}
                    aria-label={`Previous ${col.category} logo`}
                  >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                  </button>

                  <div className="award-logo-box">
                    <img 
                      src={currentLogo.src} 
                      alt={currentLogo.alt} 
                      className="award-logo-img"
                      loading="lazy"
                    />
                  </div>

                  <button 
                    type="button"
                    className="award-chevron-btn next"
                    onClick={() => handleNext(colIdx)}
                    aria-label={`Next ${col.category} logo`}
                  >
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
