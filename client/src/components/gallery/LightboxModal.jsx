import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

export default function LightboxModal({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null || !images || images.length === 0) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          <X size={26} />
        </button>

        {images.length > 1 && (
          <button className="lightbox-nav-btn prev" onClick={onPrev} aria-label="Previous image">
            <ChevronLeft size={32} />
          </button>
        )}

        <div className="lightbox-image-wrap">
          <img 
            src={images[currentIndex]} 
            alt={`Gallery showcase image ${currentIndex + 1}`} 
            className="lightbox-img" 
          />
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {images.length > 1 && (
          <button className="lightbox-nav-btn next" onClick={onNext} aria-label="Next image">
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </div>
  );
}
