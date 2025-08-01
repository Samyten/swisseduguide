// src/pages/HighSchoolAdvice.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import './HighSchoolAdvice.css';

function HighSchoolAdvice() {
  return (
    <div className="high-school-advice">
      <div className="container">
        <SectionHeader 
          title="High School Selection Guide" 
          subtitle="Making informed decisions about secondary education in Switzerland"
        />
        
        <div className="advice-grid">
          <div className="advice-column">
            <h3>How to Choose a Swiss High School</h3>
            <p>Selecting the right high school is a critical decision for international families. Consider the following factors:</p>
            
            <h4>Diploma Offered</h4>
            <p>
              Ensure the school offers a diploma that aligns with your university goals. The Swiss Matura provides 
              direct access to Swiss universities, while IB, Bac, and A-Levels may require additional steps.
            </p>
            
            <h4>Integration Year</h4>
            <p>
              Some schools offer preparatory or integration years for students adapting to the Swiss education system 
              or improving language proficiency before entering the Matura program.
            </p>
            
            <h4>Class Size and Support</h4>
            <p>
              Smaller class sizes (15–20 students) typically provide more individualized attention. Look for schools 
              with dedicated support for international students, including language assistance and academic counseling.
            </p>
            
            <h4>EPFL and University Preparation</h4>
            <p>
              If targeting competitive universities like EPFL, inquire about the school's track record in university 
              placements, STEM subject offerings, and preparation for rigorous entrance requirements.
            </p>
            
            <h4>Language Immersion</h4>
            <p>
              Switzerland has four national languages. Consider whether a German, French, Italian, or English-medium 
              school best suits your child's language skills and future academic plans.
            </p>
            
            <h4>Extracurricular Activities</h4>
            <p>
              A well-rounded education includes opportunities beyond the classroom. Evaluate sports, arts, clubs, 
              and leadership programs that contribute to personal development.
            </p>
          </div>
          
          <div className="advice-column">
            <h3>Common Mistakes International Families Make</h3>
            
            <h4>Choosing Prestige Over Fit</h4>
            <p>
              Selecting a school based solely on reputation without considering whether it aligns with your child's 
              learning style, academic needs, and personal preferences can lead to dissatisfaction.
            </p>
            
            <h4>Ignoring Diploma Implications</h4>
            <p>
              Not verifying whether a school's diploma program provides direct access to target universities can 
              limit higher education options and require additional qualification steps.
            </p>
            
            <h4>Underestimating Language and Culture Shock</h4>
            <p>
              Adapting to a new language and cultural environment requires significant adjustment. Schools with 
              strong international student support services can ease this transition.
            </p>
            
            <h4>Visa and Accreditation Issues</h4>
            <p>
              Failing to confirm that a school is AVDEP-certified can result in visa denial. Always verify 
              accreditation status before applying.
            </p>
            
            <h4>Financial Planning</h4>
            <p>
              Underestimating total costs (tuition, boarding, insurance, living expenses) can lead to financial 
              strain. Create a comprehensive budget before committing.
            </p>
            
            <h4>Overlooking Long-Term Visa Requirements</h4>
            <p>
              Ensure the school can sponsor the necessary student visa throughout the entire duration of study, 
              not just for the initial entry.
            </p>
            
            <h4>Neglecting University Admission Requirements</h4>
            <p>
              Some diploma programs may not provide automatic access to certain university programs. Research 
              specific requirements for your target institutions and fields of study.
            </p>
            
            <h4>Not Considering Cultural Integration</h4>
            <p>
              Beyond academics, consider how well the school supports cultural integration, social development, 
              and extracurricular engagement for international students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighSchoolAdvice;