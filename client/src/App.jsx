import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PatentsPage from './pages/PatentsPage';
import WhatWeOfferPage from './pages/WhatWeOfferPage';
import WhyRVCRPage from './pages/WhyRVCRPage';
import PropositionPage from './pages/PropositionPage';
import StrategicAdvantagePage from './pages/StrategicAdvantagePage';
import RVCRMarketPage from './pages/RVCRMarketPage';
import RVCRBusinessCasePage from './pages/RVCRBusinessCasePage';
import TechnicalServicesPage from './pages/TechnicalServicesPage';
import TechInnovationPage from './pages/TechInnovationPage';
import CommercialServicesPage from './pages/CommercialServicesPage';
import GalleryPage from './pages/GalleryPage';
import GalleryLocationPage from './pages/GalleryLocationPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminBlogPage from './pages/AdminBlogPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

// Helper component for legacy direct location routes (e.g. /abu-dhabi)
function DirectLocationWrapper({ defaultId }) {
  const params = useParams();
  const locationId = params.locationId || defaultId;
  return <GalleryLocationPage locationId={locationId} />;
}

export default function App() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Header />
      <main className="app-main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/zero-emission-technology" element={<AboutPage />} />
          <Route path="/about" element={<Navigate to="/zero-emission-technology" replace />} />
          <Route path="/patents" element={<PatentsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/landing-page" element={<LandingPage />} />

          {/* Service & Strategy Pages */}
          <Route path="/what-we-offer" element={<WhatWeOfferPage />} />
          <Route path="/why-rvcr" element={<WhyRVCRPage />} />
          <Route path="/proposition" element={<PropositionPage />} />
          <Route path="/strategic-advantage" element={<StrategicAdvantagePage />} />
          <Route path="/rvcr-market" element={<RVCRMarketPage />} />
          <Route path="/rvcr-business-case" element={<RVCRBusinessCasePage />} />
          <Route path="/technical-services" element={<TechnicalServicesPage />} />
          <Route path="/technology-and-innovation-services" element={<TechInnovationPage />} />
          <Route path="/commercial-services" element={<CommercialServicesPage />} />

          {/* Gallery Hub & Locations */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:locationId" element={<GalleryLocationPage />} />
          <Route path="/abu-dhabi" element={<DirectLocationWrapper defaultId="abu-dhabi" />} />
          <Route path="/detroit" element={<DirectLocationWrapper defaultId="detroit" />} />
          <Route path="/francisco" element={<DirectLocationWrapper defaultId="san-francisco" />} />
          <Route path="/stuttgart" element={<DirectLocationWrapper defaultId="stuttgart" />} />
          <Route path="/tehran" element={<DirectLocationWrapper defaultId="tehran" />} />
          <Route path="/trivandrum" element={<DirectLocationWrapper defaultId="trivandrum" />} />

          {/* Blog & CMS Admin */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/admin/blog" element={<AdminBlogPage />} />

          {/* 404 Wildcard */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
