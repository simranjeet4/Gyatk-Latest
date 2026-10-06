import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronRight, Phone, Mail } from 'lucide-react';
import { QUICK_LINKS, COMPANY_INFO } from '../../data/companyData';
import '../home/HomeSections.css';
import '../../pages/ServicesPages.css';

export default function ServiceLayout({
  badge = "RVCR Deep-Tech",
  title,
  subtitle,
  image,
  fallbackImage,
  children
}) {
  const location = useLocation();

  return (
    <div className="service-page-wrap">
      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-inner">
          <span className="badge-pill">{badge}</span>
          <h1 className="service-page-title">{title}</h1>
          <p className="service-page-desc">{subtitle}</p>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <section className="section section-dark">
        <div className="container">
          <div className="service-content-grid">
            {/* Main Content Column */}
            <div className="service-main-text">
              {image && (
                <div className="media-card-wrap" style={{ marginBottom: '2.5rem' }}>
                  <img 
                    src={image} 
                    alt={title} 
                    className="feature-main-image"
                    onError={(e) => {
                      if (fallbackImage) e.target.src = fallbackImage;
                    }}
                  />
                </div>
              )}
              {children}
            </div>

            {/* Sidebar */}
            <aside className="service-sidebar">
              <div className="service-sidebar-card">
                <h3 className="sidebar-title">All Service Areas</h3>
                <nav className="sidebar-nav-list">
                  {QUICK_LINKS.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link 
                        key={link.label} 
                        to={link.path} 
                        className={`sidebar-nav-link ${isActive ? 'active' : ''}`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight size={14} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="service-sidebar-card sidebar-cta-card">
                <h3 className="sidebar-title">Inquire for Collaboration</h3>
                <p>
                  Discuss engineering assessment, pilot product D&D, or IPR licensing with our deep-tech team.
                </p>
                <Link to="/contact-us" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                  <span>Contact Engineering</span>
                  <ArrowRight size={16} />
                </Link>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <div>📞 {COMPANY_INFO.phone}</div>
                  <div style={{ marginTop: '0.35rem' }}>✉️ {COMPANY_INFO.email}</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
