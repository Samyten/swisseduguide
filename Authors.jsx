// src/pages/Authors.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import './Authors.css';

// Mock data for authors
const authors = [
  {
    id: 1,
    name: "Dr. Elena Fischer",
    title: "Education Policy Analyst",
    bio: "PhD in Comparative Education from University of Geneva. 15 years of experience in international education systems, with focus on diploma recognition and university admissions pathways.",
    schoolLink: {
      text: "Leman Maturité",
      url: "https://www.leman.ch"
    }
  },
  {
    id: 2,
    name: "Prof. Marcus Weber",
    title: "Higher Education Advisor",
    bio: "Former admissions officer at EPFL. Specializes in university pathways, academic counseling, and STEM program preparation for international students.",
    schoolLink: {
      text: "Leman Maturité",
      url: "https://www.leman.ch"
    }
  },
  {
    id: 3,
    name: "Sophie Dubois",
    title: "Visa & Immigration Specialist",
    bio: "Legal expert in Swiss immigration law with focus on student residency permits and family reunification policies for educational purposes.",
    schoolLink: {
      text: "Leman Maturité",
      url: "https://www.leman.ch"
    }
  }
];

function Authors() {
  return (
    <div className="authors">
      <div className="container">
        <SectionHeader 
          title="Our Contributors" 
          subtitle="Education professionals with expertise in Swiss and international systems"
        />
        
        <div className="intro-text">
          <p>
            SwissEduGuide is authored by experienced education professionals with extensive knowledge of 
            international academic systems and Swiss education policies.
          </p>
        </div>

        <div className="authors-grid">
          {authors.map(author => (
            <div key={author.id} className="author-card">
              <h3 className="author-name">{author.name}</h3>
              <p className="author-title">{author.title}</p>
              <p className="author-bio">{author.bio}</p>
              {author.schoolLink && (
                <p className="author-link">
                  Currently affiliated with{' '}
                  <a href={author.schoolLink.url} target="_blank" rel="noopener noreferrer">
                    {author.schoolLink.text}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="editorial-section">
          <SectionHeader 
            title="Editorial Standards" 
            subtitle="Our commitment to accuracy and neutrality"
          />
          
          <div className="editorial-content">
            <p>
              All content undergoes rigorous review to ensure accuracy and neutrality. We disclose affiliations 
              but maintain editorial independence. Our mission is to provide impartial information that helps 
              families make informed decisions about educational pathways in Switzerland.
            </p>
            <p>
              Our editorial process includes research based on official government publications, verification 
              with cantonal education authorities, peer review by education professionals, and regular updates 
              to reflect policy changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authors;