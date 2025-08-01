// src/pages/TuitionComparison.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import './TuitionComparison.css';

function TuitionComparison() {
  return (
    <div className="tuition-comparison">
      <div className="container">
        <SectionHeader 
          title="Education Cost Comparison" 
          subtitle="Comparing expenses across Switzerland, UK, US, and France"
        />
        
        <div className="intro-text">
          <p>
            The following table compares average annual costs for secondary and higher education in Switzerland, 
            the UK, the US, and France.
          </p>
        </div>

        <div className="table-section">
          <div className="table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Public School Tuition</th>
                  <th>Private Boarding School</th>
                  <th>Private Day School</th>
                  <th>Living Costs</th>
                  <th>University Tuition (Annual)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Switzerland</strong></td>
                  <td>CHF 0–5,000</td>
                  <td>CHF 80,000–120,000</td>
                  <td>CHF 20,000–40,000</td>
                  <td>CHF 18,000–25,000</td>
                  <td>CHF 1,000–2,000</td>
                </tr>
                <tr>
                  <td><strong>United Kingdom</strong></td>
                  <td>£0–6,000<br/>(CHF 7,500–7,800)</td>
                  <td>£35,000–50,000<br/>(CHF 44,000–63,000)</td>
                  <td>£15,000–25,000<br/>(CHF 19,000–31,000)</td>
                  <td>£12,000–18,000<br/>(CHF 15,000–23,000)</td>
                  <td>£9,250–£38,000<br/>(CHF 11,500–47,000)</td>
                </tr>
                <tr>
                  <td><strong>United States</strong></td>
                  <td>$0–10,000<br/>(CHF 9,000–9,200)</td>
                  <td>$50,000–70,000<br/>(CHF 46,000–64,000)</td>
                  <td>$20,000–35,000<br/>(CHF 18,000–32,000)</td>
                  <td>$15,000–25,000<br/>(CHF 14,000–23,000)</td>
                  <td>$10,000–50,000+<br/>(CHF 9,200–46,000+)</td>
                </tr>
                <tr>
                  <td><strong>France</strong></td>
                  <td>€0–1,000<br/>(CHF 1,100–1,150)</td>
                  <td>€15,000–25,000<br/>(CHF 16,500–27,500)</td>
                  <td>€8,000–15,000<br/>(CHF 8,800–16,500)</td>
                  <td>€8,000–12,000<br/>(CHF 8,800–13,200)</td>
                  <td>€170–€600<br/>(CHF 185–650)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="cost-breakdown">
          <SectionHeader 
            title="Swiss Cost Breakdown" 
            subtitle="Detailed look at expenses in the Swiss education system"
          />
          
          <div className="breakdown-content">
            <div className="breakdown-item">
              <h4>Public Schools</h4>
              <p>
                In Switzerland, public secondary education is free for residents. International students may pay 
                modest fees (CHF 0–5,000 annually) depending on the canton. These schools follow the cantonal 
                curriculum and lead to the Swiss Matura.
              </p>
            </div>
            
            <div className="breakdown-item">
              <h4>Private Boarding Schools</h4>
              <p>
                Switzerland is home to some of the world's most prestigious boarding schools, with tuition and 
                boarding fees typically ranging from CHF 80,000 to 120,000 per year. These institutions often 
                offer multiple diploma programs (Matura, IB, A-Levels) and have extensive facilities.
              </p>
            </div>
            
            <div className="breakdown-item">
              <h4>Private Day Schools</h4>
              <p>
                Day schools charge tuition for instruction only, without boarding costs. Fees range from 
                CHF 20,000 to 40,000 annually. These schools may offer more flexibility for families 
                residing in Switzerland.
              </p>
            </div>
          </div>
        </div>

        <div className="additional-costs">
          <SectionHeader 
            title="Additional Expenses" 
            subtitle="Other costs to consider in your financial planning"
          />
          
          <div className="costs-list">
            <h4>Health Insurance</h4>
            <p>
              Mandatory health insurance costs approximately CHF 300–500 per month for students, depending on 
              age and coverage level. This is required for all residents, including international students.
            </p>
            
            <h4>Application Fees</h4>
            <p>
              Many private schools charge non-refundable application fees ranging from CHF 200–500. Additional 
              costs may include entrance exams, interviews, and assessment days.
            </p>
            
            <h4>School Supplies</h4>
            <p>
              Budget CHF 500–1,000 annually for textbooks, stationery, and other educational materials.
            </p>
            
            <h4>Uniforms (if required)</h4>
            <p>
              Some schools require uniforms, which can cost CHF 1,000–2,000 for a complete set.
            </p>
            
            <h4>Extracurricular Activities</h4>
            <p>
              Sports, arts, clubs, and other activities may have additional fees totaling CHF 2,000–5,000 annually.
            </p>
            
            <h4>Travel and Transportation</h4>
            <p>
              Public transportation passes cost CHF 1,000–3,000 annually, depending on the distance and frequency 
              of travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TuitionComparison;