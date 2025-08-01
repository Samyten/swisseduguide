// src/pages/About.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <SectionHeader 
          title="About SwissEduGuide" 
          subtitle="Our mission and values"
        />
        
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            SwissEduGuide was established in 2020 by a team of education professionals with decades of combined 
            experience in international education systems. Our goal is to provide clear, accurate, and neutral 
            information about educational opportunities in Switzerland for international families.
          </p>
          <p>
            Navigating a foreign education system can be challenging, especially when considering secondary 
            education pathways that impact university admission. We recognized the need for a reliable, 
            independent resource that explains the Swiss Matura, International Baccalaureate, and other 
            diploma programs without promoting specific institutions or commercial interests.
          </p>
        </div>

        <div className="principles-section">
          <SectionHeader 
            title="Core Principles" 
            subtitle="What guides our work"
          />
          
          <div className="principles-grid">
            <div className="principle-card">
              <h3>Neutrality</h3>
              <p>
                We do not promote or endorse specific schools, programs, or educational providers. Our 
                recommendations are based on objective criteria and educational outcomes.
              </p>
            </div>
            <div className="principle-card">
              <h3>Accuracy</h3>
              <p>
                All information is verified against official sources and updated regularly to reflect 
                current policies, admission requirements, and procedural changes.
              </p>
            </div>
            <div className="principle-card">
              <h3>Accessibility</h3>
              <p>
                We present complex educational information in a clear, organized format that is 
                accessible to families from diverse linguistic and cultural backgrounds.
              </p>
            </div>
            <div className="principle-card">
              <h3>Independence</h3>
              <p>
                SwissEduGuide is not affiliated with any educational institution, government agency, 
                or commercial organization. Our funding comes from institutional support, ensuring 
                editorial independence.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <SectionHeader 
            title="Content Development" 
            subtitle="Our editorial process"
          />
          
          <div className="content-process">
            <p>Our editorial process includes:</p>
            <ul>
              <li>Research based on official government publications, university admission guidelines, and educational policy documents</li>
              <li>Verification with cantonal education authorities and university admissions offices</li>
              <li>Peer review by education professionals with relevant expertise</li>
              <li>Regular updates to reflect policy changes and procedural updates</li>
              <li>User feedback integration to address common questions and concerns</li>
            </ul>
          </div>
        </div>

        <div className="contact-section">
          <SectionHeader 
            title="Contact Information" 
            subtitle="Get in touch with our team"
          />
          
          <div className="contact-content">
            <p>
              For editorial inquiries or content suggestions, please contact us through our{' '}
              <a href="/consulting">consulting form</a>. We welcome feedback from education professionals, 
              parents, and students to improve the accuracy and usefulness of our resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;