// src/pages/VisaGuide.jsx
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import './VisaGuide.css';

function VisaGuide() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is an AVDEP-certified school?",
      answer: "AVDEP (Agence de validation des études et des diplômes de la Confédération) is the Swiss agency that certifies educational institutions authorized to enroll international students and sponsor student visas. Only AVDEP-certified schools can legally issue the acceptance letters required for student visa applications."
    },
    {
      question: "How long does the visa process take?",
      answer: "The student visa application process typically takes 4-8 weeks from submission to approval. It's recommended to apply at least 3 months before your intended travel date to allow for processing time and potential delays."
    },
    {
      question: "Can I work while studying in Switzerland?",
      answer: "International students with a valid residence permit are allowed to work part-time (up to 15 hours per week) during the academic year and full-time during vacation periods. Permission is automatically included in the student residence permit."
    },
    {
      question: "Is health insurance mandatory?",
      answer: "Yes, comprehensive health insurance is mandatory for all residents in Switzerland, including international students. You must have coverage that meets Swiss requirements before your visa will be approved."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="visa-guide">
      <div className="container">
        <SectionHeader 
          title="Student Visa Guide for Switzerland" 
          subtitle="Step-by-step process for obtaining a student residence permit"
        />
        
        <div className="intro-text">
          <p>
            Obtaining a student visa for Switzerland requires careful planning and documentation. This guide outlines 
            the step-by-step process for international students.
          </p>
        </div>

        <div className="steps-section">
          <h3>Application Process</h3>
          
          <div className="steps-list">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Acceptance to an AVDEP-Certified School</h4>
                <p>
                  You must first secure admission to a Swiss educational institution recognized by the Swiss Agency 
                  for Development and Cooperation (AVDEP). Only AVDEP-certified schools can sponsor student visas for 
                  international students.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Gather Required Documentation</h4>
                <p>Prepare the following documents:</p>
                <ul>
                  <li>Valid passport (valid for at least 6 months beyond intended stay)</li>
                  <li>Letter of acceptance from the AVDEP-certified school</li>
                  <li>Proof of financial means (minimum CHF 21,000 per year)</li>
                  <li>Health insurance coverage for Switzerland</li>
                  <li>Completed visa application form</li>
                  <li>Recent passport-sized photographs</li>
                  <li>Academic transcripts and diplomas</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Submit Application at Swiss Consulate</h4>
                <p>
                  Submit your application at the Swiss consulate or embassy in your home country. Processing time 
                  typically takes 4–8 weeks, so apply at least 3 months before your intended travel date.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Obtain Provisional Visa</h4>
                <p>
                  If approved, you will receive a provisional visa (D visa) that allows you to enter Switzerland. 
                  This is valid for 3 months and permits a single entry.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Register and Obtain Residence Permit</h4>
                <p>
                  Within 14 days of arrival in Switzerland, you must register with the local population registry 
                  (commune) and apply for a residence permit (L permit for students). Your school will assist with 
                  this process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="financial-section">
          <SectionHeader 
            title="Financial Requirements" 
            subtitle="Proof of sufficient funds for your stay"
          />
          
          <div className="financial-content">
            <p>International students must demonstrate sufficient financial means:</p>
            <ul>
              <li>Minimum: CHF 21,000 per year</li>
              <li>Boarding schools: CHF 80,000–120,000 per year</li>
              <li>Day schools: CHF 20,000–40,000 per year</li>
              <li>Living expenses: CHF 1,500–2,500 per month</li>
            </ul>
            <p>
              Acceptable proof includes bank statements (last 6 months), scholarship award letters, or sponsorship 
              letters with financial documentation.
            </p>
          </div>
        </div>

        <div className="faq-section">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Common questions about the student visa process"
          />
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaGuide;