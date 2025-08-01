// src/pages/SwissSystem.jsx
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import './SwissSystem.css';

function SwissSystem() {
  const [activeTab, setActiveTab] = useState('matura');

  const tabs = [
    { id: 'matura', label: 'Swiss Matura' },
    { id: 'ib', label: 'International Baccalaureate' },
    { id: 'bac', label: 'French Baccalauréat' },
    { id: 'alevels', label: 'A-Levels' }
  ];

  return (
    <div className="swiss-system">
      <div className="container">
        <SectionHeader 
          title="Swiss Matura vs International Diplomas" 
          subtitle="Comparing secondary education pathways for university access in Switzerland"
        />
        
        <div className="intro-text">
          <p>
            The Swiss education system offers several pathways to university, each with distinct advantages. 
            This guide compares the Swiss Matura, International Baccalaureate (IB), French Baccalauréat (Bac), 
            and British A-Levels in terms of curriculum structure, assessment methods, and university access—
            particularly for institutions like EPFL and ETH Zurich.
          </p>
        </div>

        {/* Tabbed Interface */}
        <div className="tabs">
          <div className="tab-list">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            {activeTab === 'matura' && (
              <div className="tab-pane">
                <h3>Swiss Matura</h3>
                <p>
                  The Swiss Matura (or Maturité) is the federal maturity certificate awarded upon completion 
                  of upper secondary education in Switzerland. It is recognized internationally and provides 
                  automatic access to all Swiss public universities, including EPFL and ETH Zurich.
                </p>
                <h4>Structure</h4>
                <ul>
                  <li>Two-year program following lower secondary education</li>
                  <li>Compulsory subjects: Mathematics, native language, second national language, foreign language</li>
                  <li>Elective subjects in humanities, sciences, or arts</li>
                  <li>Matura thesis (extended essay)</li>
                  <li>Oral and written examinations</li>
                </ul>
                <h4>Assessment</h4>
                <p>
                  Combination of school-based coursework (30%) and centralized final exams (70%). 
                  Oral examinations may also be required.
                </p>
              </div>
            )}
            
            {activeTab === 'ib' && (
              <div className="tab-pane">
                <h3>International Baccalaureate (IB)</h3>
                <p>
                  The IB Diploma Programme is a globally recognized two-year curriculum offered by international 
                  schools worldwide. It emphasizes critical thinking, research skills, and intercultural understanding.
                </p>
                <h4>Structure</h4>
                <ul>
                  <li>Six subject groups (language, sciences, individuals & societies, mathematics, arts)</li>
                  <li>Theory of Knowledge (TOK)</li>
                  <li>Extended Essay (EE)</li>
                  <li>Creativity, Activity, Service (CAS)</li>
                </ul>
                <h4>Assessment</h4>
                <p>
                  Primarily external examinations (80%), with internal assessments (20%) moderated by the IB organization.
                </p>
              </div>
            )}
            
            {activeTab === 'bac' && (
              <div className="tab-pane">
                <h3>French Baccalauréat</h3>
                <p>
                  The French Baccalauréat is a national examination taken at the end of secondary education in France 
                  and some francophone countries. The scientific track (Série Scientifique) is most relevant for STEM 
                  university programs.
                </p>
                <h4>Structure</h4>
                <ul>
                  <li>Three-year program with specialization in the final two years</li>
                  <li>Emphasis on philosophy, mathematics, and sciences</li>
                  <li>National curriculum with centralized examinations</li>
                </ul>
                <h4>Assessment</h4>
                <p>
                  Final national examinations account for 100% of the grade, with some continuous assessment in the final year.
                </p>
              </div>
            )}
            
            {activeTab === 'alevels' && (
              <div className="tab-pane">
                <h3>British A-Levels</h3>
                <p>
                  A-Levels are subject-specific qualifications taken in the final two years of secondary education in 
                  the UK and many international schools. Students typically specialize in 3–4 subjects.
                </p>
                <h4>Structure</h4>
                <ul>
                  <li>AS-Levels (first year), A2-Levels (second year)</li>
                  <li>No compulsory core subjects beyond the chosen specializations</li>
                  <li>Subject depth over breadth</li>
                </ul>
                <h4>Assessment</h4>
                <p>
                  Entirely examination-based, with no mandatory research component.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comparison-section">
          <SectionHeader 
            title="Comparative Overview" 
            subtitle="Key differences between diploma programs"
          />
          
          <div className="table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Swiss Matura</th>
                  <th>IB</th>
                  <th>French Bac</th>
                  <th>A-Levels</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>University Access in Switzerland</td>
                  <td>Automatic access to all public universities</td>
                  <td>Conditional access (requires dossier)</td>
                  <td>Conditional access (requires dossier)</td>
                  <td>Conditional access (requires dossier)</td>
                </tr>
                <tr>
                  <td>EPFL Admission Priority</td>
                  <td>Yes – 3,000 reserved spots</td>
                  <td>No – competitive selection</td>
                  <td>No – competitive selection</td>
                  <td>No – competitive selection</td>
                </tr>
                <tr>
                  <td>Research Component</td>
                  <td>Matura thesis (required)</td>
                  <td>Extended Essay (required)</td>
                  <td>TPE (Travaux personnels encadrés)</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Language Requirements</td>
                  <td>National language proficiency</td>
                  <td>English + second language</td>
                  <td>French proficiency required</td>
                  <td>English proficiency required</td>
                </tr>
                <tr>
                  <td>Assessment Method</td>
                  <td>70% exams, 30% coursework</td>
                  <td>80% exams, 20% coursework</td>
                  <td>100% exams</td>
                  <td>100% exams</td>
                </tr>
                <tr>
                  <td>International Recognition</td>
                  <td>High</td>
                  <td>Very High</td>
                  <td>High (EU)</td>
                  <td>High</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="table-note">
            <p>
              <strong>Note:</strong> While all four qualifications can lead to university admission in Switzerland, 
              the Swiss Matura provides the most direct and guaranteed pathway, particularly for competitive institutions 
              like EPFL. International qualifications require additional documentation and are subject to individual review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwissSystem;