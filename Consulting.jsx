// src/pages/Consulting.jsx
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import './Consulting.css';

function Consulting() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    studentAge: '',
    currentSchool: '',
    targetDiploma: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real implementation, this would send to a backend
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        country: '',
        studentAge: '',
        currentSchool: '',
        targetDiploma: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="consulting">
      <div className="container">
        <SectionHeader 
          title="Educational Guidance" 
          subtitle="Request information about Swiss education pathways"
        />
        
        <div className="intro-text">
          <p>
            We understand that navigating the Swiss education system can be complex, especially for international families. 
            If you have questions about diploma options, university admissions, visa processes, or school selection, 
            we can provide personalized guidance.
          </p>
          <p>
            SwissEduGuide is an independent information service. We do not represent any specific school or educational 
            provider, nor do we charge for advisory services. Our goal is to help you make informed decisions based on 
            accurate, neutral information.
          </p>
        </div>

        <div className="form-section">
          {!formSubmitted ? (
            <form className="consulting-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="country">Country of Residence *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="studentAge">Student's Age *</label>
                  <select
                    id="studentAge"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select age</option>
                    <option value="12-14">12-14 years</option>
                    <option value="15-16">15-16 years</option>
                    <option value="17-18">17-18 years</option>
                    <option value="19+">19+ years</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="currentSchool">Current School Type</label>
                  <input
                    type="text"
                    id="currentSchool"
                    name="currentSchool"
                    value={formData.currentSchool}
                    onChange={handleChange}
                    placeholder="e.g., International School, Public School, etc."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="targetDiploma">Target Diploma Program</label>
                  <select
                    id="targetDiploma"
                    name="targetDiploma"
                    value={formData.targetDiploma}
                    onChange={handleChange}
                  >
                    <option value="">Select program</option>
                    <option value="Swiss Matura">Swiss Matura</option>
                    <option value="International Baccalaureate">International Baccalaureate</option>
                    <option value="French Baccalauréat">French Baccalauréat</option>
                    <option value="A-Levels">A-Levels</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Questions or Concerns *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your educational goals and any specific questions..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Submit Inquiry
              </button>
            </form>
          ) : (
            <div className="success-message">
              <h3>Thank you for your inquiry</h3>
              <p>We will respond to your message within 3-5 business days.</p>
            </div>
          )}
          
          <div className="disclaimer">
            <p>
              <strong>Disclaimer:</strong> By submitting this form, you acknowledge that SwissEduGuide is an 
              independent information resource and does not represent any educational institution. Responses 
              are typically provided within 3–5 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;