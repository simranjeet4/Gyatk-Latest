import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import TopBar from './TopBar';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stayDropdownOpen, setStayDropdownOpen] = useState(false);
  const [ecosystemDropdownOpen, setEcosystemDropdownOpen] = useState(false);
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
    setEcosystemDropdownOpen(false);
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

  const ecosystemLinks = [
    { label: "Engine Subdirectory", href: "https://kgyat.com/engine-subdirectory", isExternal: true },
    { label: "KGYAT", href: "https://kgyat.com", isExternal: true },
    { label: "RVCR.tech", href: "https://rvcr.tech", isExternal: true },
    { label: "Patents", href: "/patents", isExternal: false }
  ];

  return (
    <header className="gyatk-header-wrapper">
      <TopBar />

      <div className={`gyatk-nav-container ${isScrolled ? 'gyatk-nav-sticky' : ''}`}>
        <div className="container gyatk-nav-inner">
          {/* Logo */}
          <Link to="/" className="gyatk-logo-wrap">
            <img 
              src="/images/logoA.png" 
              alt="GYATK" 
              className="gyatk-header-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="gyatk-desktop-nav">
            <ul className="gyatk-menu-list">
              <li className={`gyatk-menu-item ${location.pathname === '/' ? 'active-item' : ''}`}>
                <Link to="/" className={`gyatk-menu-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>

              <li className={`gyatk-menu-item ${location.pathname.includes('zero-emission') ? 'active-item' : ''}`}>
                <Link to="/zero-emission-technology" className={`gyatk-menu-link ${location.pathname.includes('zero-emission') ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>

              {/* Stay on Page Dropdown */}
              <li 
                className="gyatk-menu-item has-dropdown"
                onMouseEnter={() => setStayDropdownOpen(true)}
                onMouseLeave={() => setStayDropdownOpen(false)}
              >
                <button 
                  className="gyatk-menu-link dropdown-btn" 
                  onClick={() => setStayDropdownOpen(!stayDropdownOpen)}
                >
                  Stay on Page
                </button>

                <ul className={`gyatk-submenu ${stayDropdownOpen ? 'show' : ''}`}>
                  {stayOnPageLinks.map((item) => (
                    <li key={item.label} className="gyatk-submenu-item">
                      <a 
                        href={item.href} 
                        className="gyatk-submenu-link" 
                        onClick={() => setStayDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Ecosystem Dropdown Tab */}
              <li 
                className={`gyatk-menu-item has-dropdown ${location.pathname === '/patents' ? 'active-item' : ''}`}
                onMouseEnter={() => setEcosystemDropdownOpen(true)}
                onMouseLeave={() => setEcosystemDropdownOpen(false)}
              >
                <button 
                  className={`gyatk-menu-link dropdown-btn with-caret ${ecosystemDropdownOpen ? 'open' : ''}`}
                  onClick={() => setEcosystemDropdownOpen(!ecosystemDropdownOpen)}
                >
                  <span>Ecosystem</span>
                  <ChevronDown size={14} className="dropdown-caret-icon" />
                </button>

                <ul className={`gyatk-submenu ecosystem-submenu ${ecosystemDropdownOpen ? 'show' : ''}`}>
                  {ecosystemLinks.map((item) => (
                    <li key={item.label} className="gyatk-submenu-item">
                      {item.isExternal ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="gyatk-submenu-link ecosystem-sublink"
                          onClick={() => setEcosystemDropdownOpen(false)}
                        >
                          <span>{item.label}</span>
                          <ExternalLink size={13} className="ext-icon" />
                        </a>
                      ) : (
                        <Link 
                          to={item.href} 
                          className="gyatk-submenu-link ecosystem-sublink"
                          onClick={() => setEcosystemDropdownOpen(false)}
                        >
                          <span>{item.label}</span>
                          <ExternalLink size={13} className="ext-icon" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

              <li className={`gyatk-menu-item ${location.pathname.startsWith('/blog') ? 'active-item' : ''}`}>
                <Link to="/blog" className={`gyatk-menu-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>
                  Blog
                </Link>
              </li>

              <li className={`gyatk-menu-item ${location.pathname === '/contact-us' ? 'active-item' : ''}`}>
                <Link to="/contact-us" className={`gyatk-menu-link ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
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
        <div className="gyatk-mobile-drawer-inner">
          <ul className="gyatk-mobile-list">
            <li>
              <Link to="/" className="gyatk-mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/zero-emission-technology" className="gyatk-mobile-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
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
            <li className="gyatk-mobile-group">
              <span className="gyatk-mobile-group-title">Ecosystem</span>
              <ul className="gyatk-mobile-sublist">
                {ecosystemLinks.map((item) => (
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
              <Link to="/blog" className="gyatk-mobile-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link to="/contact-us" className="gyatk-mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
