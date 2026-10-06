import React from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_EVENTS } from '../data/companyData';
import './GalleryPage.css';

export default function GalleryPage() {
  return (
    <div className="gallery-page-root">
      {/* Hero Banner with Pink Background & Photo Montage */}
      <section className="gallery-hero">
        <div className="container gallery-hero-container">
          <div className="gallery-hero-title-wrap">
            <h1 className="gallery-hero-title">Gallery</h1>
          </div>
          
          <div className="gallery-hero-montage">
            <div className="montage-row montage-top">
              <img src="/images/gallery/stuttgart/17-768x512-1.webp" alt="Stuttgart Clean Tech" className="montage-img img-1" />
              <img src="/images/gallery/San Francisco/s-1.webp" alt="San Francisco stage" className="montage-img img-2" />
              <img src="/images/gallery/Detroit/d-1.webp" alt="Detroit Expo" className="montage-img img-3" />
            </div>
            <div className="montage-row montage-bottom">
              <img src="/images/gallery/Abu dhabi/a1-3.webp" alt="Abu Dhabi Energy Summit" className="montage-img img-4" />
              <img src="/images/gallery/Tehran/t-1.webp" alt="Tehran Exhibition" className="montage-img img-5" />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Event Cards Grid */}
      <section className="gallery-main-section">
        <div className="container">
          <div className="gallery-events-grid">
            {GALLERY_EVENTS.map((event) => (
              <div key={event.id} className="gallery-event-card">
                <Link to={`/gallery/${event.id}`} className="gallery-card-img-wrap">
                  <img 
                    src={event.thumbnail} 
                    alt={event.title} 
                    className="gallery-card-img"
                    loading="lazy"
                  />
                </Link>
                
                <div className="gallery-card-body">
                  <h3 className="gallery-card-title">{event.title}</h3>
                  <div className="gallery-card-subtitle">{event.subtitle}</div>
                  
                  <div className="gallery-card-btn-wrap">
                    <Link to={`/gallery/${event.id}`} className="gallery-view-btn">
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
