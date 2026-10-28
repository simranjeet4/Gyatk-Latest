import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink, Home } from 'lucide-react';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon, LinkedinIcon } from './Icons';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stayDropdownOpen, setStayDropdownOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setStayDropdownOpen(false);
    setHomeDropdownOpen(false);
  }, [location]);

  const stayOnPageLinks = [
    { label: "Who we are", href: "/#whowe" },
    { label: "Our Pursuit", href: "/#pursuit" },
    { label: "Our IPR reach", href: "/#reach" },
    { label: "What we offer", href: "/#whatweoffer" },
    { label: "RVCR Opportunities", href: "/#opportunities" },
    { label: "Projects", href: "/#projects" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Join us", href: "/#contactus" }
  ];

  const homeDropdownLinks = [
    { label: "Kgyat Engine", href: "https://kgyat.com/engine-subdirectory", isExternal: true },
    { label: "KGYAT", href: "https://kgyat.com", isExternal: true },
    { label: "RVCR", href: "https://rvcr.tech/", isExternal: true },
    { label: "Patents", href: "/patents", isExternal: false }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/gyatk.technologies",
      icon: <FacebookIcon size={16} />
    },
    {
      name: "LinkedIn",
      href: "https://uk.linkedin.com/company/gyatk",
      icon: <LinkedinIcon size={16} />
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/gyatk.technologies/",
      icon: <InstagramIcon size={16} />
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@gyatk4479",
      icon: <YoutubeIcon size={16} />
    },
    {
      name: "Twitter",
      href: "https://twitter.com/gyatktech",
      icon: <TwitterIcon size={16} />
    }
  ];

  return (
    <header className="gyatk-kgyat-header">
      {/* Row 1: Top Bar with Logo (Left) and Social Icons (Right) - Same as KGYAT */}
      <div className="gyatk-header-top-row">
        <div className="container gyatk-header-top-inner">
          <Link to="/" className="gyatk-brand-logo-link" aria-label="GYATK Home">
            <img 
              src="/images/logoA.png" 
              alt="GYATK" 
              className="gyatk-brand-logo-img"
            />
          </Link>

          <div className="gyatk-header-socials">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gyatk-social-icon-btn"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Sticky Navigation Bar with Home Icon + Tagline (Left) and Menu (Right) */}
      <div className={`gyatk-navbar-row ${isScrolled ? 'gyatk-navbar-sticky' : ''}`}>
        <div className="container gyatk-navbar-inner">
          {/* Left: Home Icon + Subtitle */}
          <div className="gyatk-navbar-left">
            <Link to="/" className="gyatk-nav-home-icon" aria-label="Home">
              <Home size={18} />
            </Link>
            <span className="gyatk-navbar-tagline">IP Owner & Commercialisation Lead for RVCR.</span>
          </div>

          {/* Right: Desktop Menu */}
          <nav className="gyatk-desktop-nav">
            <ul className="gyatk-nav-menu">
              {/* Home Dropdown with Caret (Contains Ecosystem Links + RVCR) */}
              <li 
                className={`gyatk-nav-item has-dropdown ${location.pathname === '/' ? 'active-item' : ''}`}
                onMouseEnter={() => setHomeDropdownOpen(true)}
                onMouseLeave={() => setHomeDropdownOpen(false)}
              >
                <Link 
                  to="/"
                  className={`gyatk-nav-link dropdown-toggle-btn with-caret ${homeDropdownOpen ? 'open' : ''} ${location.pathname === '/' ? 'active' : ''}`}
                >
                  <span>Home</span>
                  <ChevronDown size={14} className="dropdown-caret-icon" />
                </Link>

                <ul className={`gyatk-dropdown-menu home-menu ${homeDropdownOpen ? 'show' : ''}`}>
                  {homeDropdownLinks.map((item) => (
                    <li key={item.label} className="gyatk-dropdown-item">
                      {item.isExternal ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="gyatk-dropdown-link ecosystem-sublink"
                          onClick={() => setHomeDropdownOpen(false)}
                        >
                          <span>{item.label}</span>
                          <ExternalLink size={13} className="ext-icon" />
                        </a>
                      ) : (
                        <Link 
                          to={item.href} 
                          className="gyatk-dropdown-link ecosystem-sublink"
                          onClick={() => setHomeDropdownOpen(false)}
                        >
                          <span>{item.label}</span>
                          <ExternalLink size={13} className="ext-icon" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

              <li className={`gyatk-nav-item ${location.pathname.includes('zero-emission') ? 'active-item' : ''}`}>
                <Link to="/zero-emission-technology" className={`gyatk-nav-link ${location.pathname.includes('zero-emission') ? 'active' : ''}`}>
                  About
                </Link>
              </li>

              {/* Stay on Page Dropdown */}
              <li 
                className="gyatk-nav-item has-dropdown"
                onMouseEnter={() => setStayDropdownOpen(true)}
                onMouseLeave={() => setStayDropdownOpen(false)}
              >
                <button 
                  type="button"
                  className={`gyatk-nav-link dropdown-toggle-btn ${stayDropdownOpen ? 'open' : ''}`}
                  onClick={() => setStayDropdownOpen(!stayDropdownOpen)}
                  aria-expanded={stayDropdownOpen}
                >
                  <span>Stay on Page</span>
                </button>

                <ul className={`gyatk-dropdown-menu ${stayDropdownOpen ? 'show' : ''}`}>
                  {stayOnPageLinks.map((item) => (
                    <li key={item.label} className="gyatk-dropdown-item">
                      <a 
                        href={item.href} 
                        className="gyatk-dropdown-link"
                        onClick={() => setStayDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={`gyatk-nav-item ${location.pathname.startsWith('/blog') ? 'active-item' : ''}`}>
                <Link to="/blog" className={`gyatk-nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>
                  Blog
                </Link>
              </li>

              {/* Contact Button (KGYAT signature pill button) */}
              <li className="gyatk-nav-item contact-item">
                <Link to="/contact-us" className="kgyat-header-contact-btn">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button"
            className="gyatk-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`gyatk-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="gyatk-mobile-drawer-header">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src="/images/logoA.png" alt="GYATK" className="gyatk-mobile-logo" />
          </Link>
          <button 
            type="button"
            className="gyatk-mobile-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="gyatk-mobile-drawer-body">
          <ul className="gyatk-mobile-menu">
            <li>
              <Link to="/" className="gyatk-mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            </li>

            <li className="gyatk-mobile-group">
              <span className="gyatk-mobile-group-title">Home Links</span>
              <ul className="gyatk-mobile-sublist">
                {homeDropdownLinks.map((item) => (
                  <li key={item.label}>
                    {item.isExternal ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="gyatk-mobile-sublink ext-mobile-sublink" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <Link 
                        to={item.href} 
                        className="gyatk-mobile-sublink ext-mobile-sublink" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ExternalLink size={12} />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/zero-emission-technology" className="gyatk-mobile-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
            </li>

            <li className="gyatk-mobile-group">
              <span className="gyatk-mobile-group-title">Stay on Page</span>
              <ul className="gyatk-mobile-sublist">
                {stayOnPageLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="gyatk-mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/blog" className="gyatk-mobile-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            </li>
            <li className="gyatk-mobile-contact-wrap">
              <Link to="/contact-us" className="kgyat-header-contact-btn mobile-contact-btn" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
