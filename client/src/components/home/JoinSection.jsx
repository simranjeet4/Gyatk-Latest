import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeSections.css';

export default function JoinSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactus" className="section-common join-endeavor-section">
      <div className="join-endeavor-overlay"></div>
      <div className="container join-endeavor-container">
        <div className="contactus-row">
          {/* Left Column: White Text & Button */}
          <div className="contactus-left">
            <h2 className="join-heading-white">
              Join the RVCR endeavor
            </h2>
            <p className="join-sub-white">
              Witness the seeding of newer unconventional Zero Carbon technologies. Explore how you can tap into the benefits from RVCR
            </p>
            <Link to="/contact-us" className="btn-gradient">
              <span>Know More</span>
            </Link>
          </div>

          {/* Right Column: Dark Glass Contact Form */}
          <div className="contactus-glass-card">
            {submitted ? (
              <div className="form-status-msg-glass">
                <h4>Inquiry Received!</h4>
                <p>Thank you for reaching out. Our RVCR engineering team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="join-contact-form">
                <div className="form-field-row">
                  <div className="form-field-group">
                    <input 
                      type="text" 
                      required 
                      className="form-input-glass" 
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="form-field-group">
                    <input 
                      type="text" 
                      className="form-input-glass" 
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field-row">
                  <div className="form-field-group">
                    <input 
                      type="email" 
                      required 
                      className="form-input-glass" 
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-field-group">
                    <input 
                      type="tel" 
                      className="form-input-glass" 
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <textarea 
                    required 
                    className="form-textarea-glass" 
                    placeholder="Your Message *"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-gradient btn-submit-glass"
                >
                  <span>{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
