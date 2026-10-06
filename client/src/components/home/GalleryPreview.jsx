import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, X } from 'lucide-react';
import './HomeSections.css';

const GALLERY_IMAGES = [
  { id: 1, src: '/images/15.webp', alt: 'RVCR Technology 15' },
  { id: 2, src: '/images/13.webp', alt: 'RVCR Assembly 13' },
  { id: 3, src: '/images/9.webp', alt: 'RVCR Prototype 9' },
  { id: 4, src: '/images/2.webp', alt: 'RVCR Model 2' },
  { id: 5, src: '/images/tr-12.webp', alt: 'RVCR Engineering tr-12' },
  { id: 6, src: '/images/tr-10.webp', alt: 'RVCR Testing tr-10' },
  { id: 7, src: '/images/tr-9.webp', alt: 'RVCR Mechanism tr-9' },
  { id: 8, src: '/images/tr-5.webp', alt: 'RVCR Dynamics tr-5' },
  { id: 9, src: '/images/tr-4.webp', alt: 'RVCR Presentation tr-4' },
  { id: 10, src: '/images/t-6.webp', alt: 'RVCR Innovation t-6' },
  { id: 11, src: '/images/d-7.webp', alt: 'RVCR Showcase d-7' },
  { id: 12, src: '/images/a1-6.webp', alt: 'RVCR Expo a1-6' }
];

export default function GalleryPreview() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="section-common">
      <div className="container">
        <div className="section-title-center">
          <h2 className="section-heading-dark">Gallery</h2>
        </div>

        <div className="gallery-grid-3col">
          {GALLERY_IMAGES.map((item) => (
            <div 
              key={item.id} 
              className="gallery-thumb-item"
              onClick={() => setSelectedImg(item)}
              title="Click to zoom"
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-thumb-overlay">
                <Maximize2 size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-btn-center">
          <Link to="/gallery" className="btn-gradient">
            <span>View more</span>
          </Link>
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div 
            className="gallery-lightbox-modal"
            onClick={() => setSelectedImg(null)}
          >
            <div className="gallery-lightbox-inner">
              <button 
                onClick={() => setSelectedImg(null)}
                className="gallery-lightbox-close"
                aria-label="Close"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImg.src} 
                alt={selectedImg.alt} 
                className="gallery-lightbox-img" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
