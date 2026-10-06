import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { GALLERY_EVENTS } from '../data/companyData';
import LightboxModal from '../components/gallery/LightboxModal';
import './GalleryLocationPage.css';

export default function GalleryLocationPage() {
  const { locationId } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const eventData = GALLERY_EVENTS.find(loc => loc.id === locationId);

  if (!eventData) {
    return <Navigate to="/gallery" replace />;
  }

  return (
    <div className="gallery-detail-page">
      {/* Detail Hero Header */}
      <section className="detail-hero-banner">
        <div className="container">
          <Link to="/gallery" className="back-to-gallery-btn">
            <ArrowLeft size={18} />
            <span>Back to Gallery</span>
          </Link>
          
          <div className="detail-meta-pills">
            <div className="meta-pill">
              <MapPin size={16} />
              <span>{eventData.city}, {eventData.country}</span>
            </div>
            <div className="meta-pill">
              <Calendar size={16} />
              <span>{eventData.year}</span>
            </div>
          </div>

          <h1 className="detail-hero-title">{eventData.title}</h1>
          <p className="detail-hero-description">{eventData.description}</p>
        </div>
      </section>

      {/* Detail Photos Masonry Grid */}
      <section className="detail-gallery-section">
        <div className="container">
          <div className="detail-gallery-header">
            <h2>Event Photo Showcase ({eventData.images.length} Photos)</h2>
            <p>Click on any photo to expand into high-resolution full screen view.</p>
          </div>

          <div className="detail-photos-grid">
            {eventData.images.map((imgSrc, idx) => (
              <div 
                key={`${imgSrc}-${idx}`} 
                className="detail-photo-card"
                onClick={() => setLightboxIndex(idx)}
              >
                <img 
                  src={imgSrc} 
                  alt={`${eventData.title} Photo ${idx + 1}`} 
                  className="detail-photo-img"
                  loading="lazy"
                />
                <div className="detail-photo-overlay">
                  <div className="zoom-icon-badge">
                    <Maximize2 size={20} />
                  </div>
                  <span className="detail-photo-caption">{eventData.title} — #{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        images={eventData.images}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : eventData.images.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < eventData.images.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}
