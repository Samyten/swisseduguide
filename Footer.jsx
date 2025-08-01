// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-section">
            <h4>SwissEduGuide</h4>
            <p>An independent resource for international families navigating the Swiss education system.</p>
          </div>
          
          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/authors">Authors</a></li>
              <li><a href="/consulting">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/swiss-system">Diploma Comparison</a></li>
              <li><a href="/university-access">University Access</a></li>
              <li><a href="/visa-guide">Visa Guide</a></li>
              <li><a href="/tuition-comparison">Cost Comparison</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-disclaimer">
          <p>
            <strong>Disclaimer:</strong> SwissEduGuide provides informational resources about the Swiss education system and related processes. 
            We are an independent information service and do not represent any educational institution, government agency, or visa processing organization. 
            The information provided on this website is for general guidance only and should not be considered as professional educational, legal, or financial advice.
          </p>
          <p>&copy; {currentYear} SwissEduGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;