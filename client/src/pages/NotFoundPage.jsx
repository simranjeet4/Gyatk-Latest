import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="section section-dark" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '650px' }}>
        <span className="badge-pill" style={{ marginBottom: '1.5rem' }}>Error 404</span>
        <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', lineHeight: 1.1 }}>
          Page Not Found
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          The page you are looking for does not exist, has been moved, or is under development. Please return to the homepage or explore our core technology areas.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/zero-emission-technology" className="btn btn-secondary">
            <span>Explore RVCR Tech</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
