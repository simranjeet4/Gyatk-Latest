import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  User, 
  Building, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Technology Licensing',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can OEMs license RVCR technology?",
      answer: "GYATK provides customized IPR and technology licensing packages tailored for specific vehicle, compressor, or prime-mover market segments. Contact our licensing team via the form to schedule a technical evaluation."
    },
    {
      question: "What is the typical timeline for Pilot Product D&D?",
      answer: "Our streamlined milestone-driven D&D process spans from initial Virtual Modelling & Simulation (1-3 months) to Physical Prototype Validation and Testing (4-8 months)."
    },
    {
      question: "Can we request a working prototype demonstration?",
      answer: "Yes. Technical delegations and OEM engineering teams can request live prototype demonstrations at our R&D facilities or scheduled international engineering symposia."
    },
    {
      question: "What information is required for a commercial evaluation?",
      answer: "Providing details on your target application segment (e.g. automotive IC engine, HVAC compressor, hydrogen expander), power/displacement specs, and annual volume estimates helps us accelerate your technology business case."
    }
  ];

  return (
    <div className="contact-page-root">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <span className="contact-eyebrow">
              <Sparkles size={14} />
              <span>Get in Touch</span>
            </span>
            <h1 className="contact-hero-title">Contact GYATK R&D & Licensing Team</h1>
            <p className="contact-hero-subtitle">
              Whether you are an automotive OEM, clean-tech investor, or engineering research partner, our leadership and technical teams are ready to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Connect Top Bar */}
      <section className="quick-connect-section">
        <div className="container">
          <div className="quick-connect-grid">
            {/* India HQ */}
            <div className="quick-card">
              <div className="quick-icon-wrap">
                <MapPin size={22} />
              </div>
              <div className="quick-card-info">
                <span className="quick-card-badge">India HQ</span>
                <h4 className="quick-card-title">{COMPANY_INFO.indiaEntity}</h4>
                <p className="quick-card-text">{COMPANY_INFO.indiaCin}</p>
              </div>
            </div>



            {/* Direct Line */}
            <div className="quick-card">
              <div className="quick-icon-wrap">
                <Phone size={22} />
              </div>
              <div className="quick-card-info">
                <span className="quick-card-badge">Direct Line</span>
                <h4 className="quick-card-title">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="quick-link">
                    {COMPANY_INFO.phone}
                  </a>
                </h4>
                <p className="quick-card-text">
                  <a href={`mailto:${COMPANY_INFO.email}`} className="quick-link-sub">
                    {COMPANY_INFO.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Office Info Grid */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left Column: Interactive Form */}
            <div className="contact-form-card">
              <div className="form-header">
                <h2 className="form-title">Send Us a Message</h2>
                <p className="form-subtitle">
                  Fill out your inquiry details below. Our technical licensing team will review and respond promptly.
                </p>
              </div>

              {submitted ? (
                <div className="form-success-box">
                  <div className="success-icon-circle">
                    <CheckCircle2 size={42} />
                  </div>
                  <h3>Message Submitted Successfully!</h3>
                  <p>
                    Thank you for reaching out to <strong>GYATK RVCR Apparatus Pvt Ltd</strong>. Your inquiry has been routed to our commercial R&D and licensing team. We will respond within 24 business hours.
                  </p>
                  <button 
                    className="btn-gradient" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', subject: 'Technology Licensing', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-body">
                  <div className="form-row-2col">
                    <div className="input-group">
                      <label className="input-label">Full Name *</label>
                      <div className="input-wrapper">
                        <User size={18} className="input-icon" />
                        <input 
                          type="text" 
                          required 
                          className="styled-input" 
                          placeholder="e.g. Dr. John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label className="input-label">Email Address *</label>
                      <div className="input-wrapper">
                        <Mail size={18} className="input-icon" />
                        <input 
                          type="email" 
                          required 
                          className="styled-input" 
                          placeholder="name@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="input-group">
                      <label className="input-label">Phone Number</label>
                      <div className="input-wrapper">
                        <Phone size={18} className="input-icon" />
                        <input 
                          type="tel" 
                          className="styled-input" 
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label className="input-label">Organization / Company</label>
                      <div className="input-wrapper">
                        <Building size={18} className="input-icon" />
                        <input 
                          type="text" 
                          className="styled-input" 
                          placeholder="e.g. Global Motors Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-group">
                    <label className="input-label">Nature of Inquiry *</label>
                    <div className="input-wrapper">
                      <HelpCircle size={18} className="input-icon" />
                      <select 
                        className="styled-select"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="Technology Licensing">Technology & IPR Licensing</option>
                        <option value="R&D Collaboration">R&D & Engineering Collaboration</option>
                        <option value="Pilot Product D&D">Pilot Product Design & Development</option>
                        <option value="Investor Inquiry">Investor / SPV Opportunities</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-group">
                    <label className="input-label">Your Message *</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="styled-textarea" 
                      placeholder="Describe your project, application segment, target displacement/power requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="form-submit-wrap">
                    <button 
                      type="submit" 
                      className="btn-gradient submit-btn"
                      disabled={submitting}
                    >
                      <Send size={16} />
                      <span>{submitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Office Details & FAQ Accordion */}
            <div className="contact-sidebar-col">
              
              {/* Response Guarantee Box */}
              <div className="guarantee-card">
                <div className="guarantee-header">
                  <ShieldCheck size={26} className="guarantee-icon" />
                  <div>
                    <h4 className="guarantee-title">Fast-Track Technical Response</h4>
                    <p className="guarantee-text">Average response time: <strong>within 24 business hours</strong>.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="faq-widget-card">
                <h3 className="faq-widget-title">Frequently Asked Questions</h3>
                <div className="faq-list">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className={`faq-item ${openFaq === idx ? 'faq-open' : ''}`}>
                      <button 
                        className="faq-question-btn"
                        onClick={() => toggleFaq(idx)}
                      >
                        <span>{faq.question}</span>
                        {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {openFaq === idx && (
                        <div className="faq-answer-box">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="hours-card">
                <div className="hours-title-wrap">
                  <Clock size={20} className="hours-icon" />
                  <h4 className="hours-title">R&D Support Hours</h4>
                </div>
                <ul className="hours-list">
                  <li><span>Monday – Friday:</span> <strong>9:00 AM – 6:00 PM IST</strong></li>
                  <li><span>Saturday:</span> <strong>9:00 AM – 1:00 PM IST</strong></li>
                  <li><span>Sunday:</span> <strong>Closed (Emergency email monitored)</strong></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
