// src/pages/UniversityAccess.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import './UniversityAccess.css';

function UniversityAccess() {
  return (
    <div className="university-access">
      <div className="container">
        <SectionHeader 
          title="University Access in Switzerland" 
          subtitle="How different diplomas affect admission to Swiss universities"
        />
        
        <div className="intro-text">
          <p>
            Admission to Swiss public universities varies significantly depending on the secondary diploma held. 
            This section outlines the pathways for Swiss Matura, IB, French Bac, and A-Level holders.
          </p>
        </div>

        <div className="pathways-grid">
          <div className="pathway-card">
            <h3>Swiss Matura Holders</h3>
            <p>
              Students with a Swiss Matura (federal maturity certificate) have automatic access to all Swiss public 
              universities, including EPFL, ETH Zurich, and cantonal universities. No additional entrance exams or 
              dossiers are required.
            </p>
            <p>
              EPFL reserves approximately 3,000 spots annually for Swiss Matura graduates, ensuring priority admission 
              for students completing their secondary education in Switzerland.
            </p>
          </div>
          
          <div className="pathway-card">
            <h3>International Baccalaureate (IB) Holders</h3>
            <p>
              IB diploma holders must apply through a competitive selection process. Requirements include:
            </p>
            <ul>
              <li>Minimum of 38 points (out of 45)</li>
              <li>Higher Level Mathematics: 7</li>
              <li>Higher Level Physics: 7</li>
              <li>Standard Level Chemistry: 6</li>
              <li>Motivation letter and CV</li>
              <li>Proof of language proficiency (C1 in instruction language)</li>
            </ul>
            <p>Applications are reviewed on a case-by-case basis, and acceptance is not guaranteed.</p>
          </div>
          
          <div className="pathway-card">
            <h3>French Baccalauréat Holders</h3>
            <p>
              Students with the French Baccalauréat must have:
            </p>
            <ul>
              <li>Série Scientifique (Scientific track)</li>
              <li>Mention Très Bien (Very Good distinction)</li>
              <li>Minimum 14/20 in Mathematics and Physics</li>
              <li>Complete a comprehensive application dossier</li>
            </ul>
            <p>Admission is highly competitive, especially for engineering and computer science programs.</p>
          </div>
          
          <div className="pathway-card">
            <h3>British A-Level Holders</h3>
            <p>
              A-Level students require:
            </p>
            <ul>
              <li>A*A*A in Mathematics, Physics, and a third science subject</li>
              <li>AS-Level in Further Mathematics (recommended)</li>
              <li>GCSE grades: 8/9 in Mathematics and Sciences</li>
              <li>Motivation letter and academic references</li>
            </ul>
            <p>Applications are evaluated holistically, with emphasis on STEM subject performance.</p>
          </div>
        </div>

        <div className="epfl-section">
          <SectionHeader 
            title="EPFL and ETH Zurich Admissions" 
            subtitle="Requirements for Switzerland's leading technical universities"
          />
          
          <div className="epfl-content">
            <h3>EPFL Admission Process</h3>
            <p>
              The École polytechnique fédérale de Lausanne (EPFL) has different admission pathways depending on 
              the applicant's secondary diploma:
            </p>
            
            <div className="epfl-cards">
              <div className="epfl-card">
                <h4>Swiss Matura Graduates</h4>
                <p>Direct admission with no entrance exam. Priority consideration for all programs.</p>
              </div>
              <div className="epfl-card">
                <h4>International Diploma Holders</h4>
                <p>Competitive selection based on grades, motivation letter, and supporting documents.</p>
              </div>
              <div className="epfl-card">
                <h4>Special Entrance Exam</h4>
                <p>Available for exceptional candidates who don't meet standard requirements.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cost-section">
          <SectionHeader 
            title="Cost of Higher Education" 
            subtitle="Tuition fees across different countries"
          />
          
          <div className="cost-content">
            <p>One of the most significant advantages of the Swiss education system is affordability:</p>
            <ul>
              <li><strong>Swiss Public Universities:</strong> CHF 500–1,000 per semester (approx. $550–1,100 USD)</li>
              <li><strong>UK Universities:</strong> £9,250–£38,000 per year ($11,500–47,000 USD)</li>
              <li><strong>US Universities:</strong> $30,000–$60,000 per year (public and private)</li>
              <li><strong>French Public Universities:</strong> €170–€600 per year ($185–650 USD)</li>
            </ul>
            <p>
              Swiss public universities are primarily funded by cantonal and federal governments, making higher 
              education accessible to both domestic and international students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversityAccess;