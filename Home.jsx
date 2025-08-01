// src/pages/Home.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleCard from '../components/ArticleCard';
import './Home.css';

// Mock data for featured articles
const featuredArticles = [
  {
    id: 1,
    title: "Understanding the Swiss Matura System",
    excerpt: "A comprehensive guide to Switzerland's federal maturity certificate and its international recognition.",
    date: "March 15, 2024",
    readTime: "8 min read",
    slug: "understanding-swiss-matura"
  },
  {
    id: 2,
    title: "IB vs A-Levels: Which is Right for Your Child?",
    excerpt: "Comparing the International Baccalaureate and British A-Level systems for university preparation.",
    date: "February 28, 2024",
    readTime: "10 min read",
    slug: "ib-vs-a-levels"
  },
  {
    id: 3,
    title: "Navigating Swiss Student Visas",
    excerpt: "Step-by-step instructions for obtaining a student residence permit in Switzerland.",
    date: "February 10, 2024",
    readTime: "6 min read",
    slug: "navigating-swiss-student-visas"
  }
];

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Navigating Swiss Education</h1>
          <p className="hero-text">
            SwissEduGuide is an independent, non-commercial resource for international families 
            seeking to understand the Swiss secondary and higher education system. We provide 
            neutral, accurate information about diplomas, university admissions, visas, and school selection.
          </p>
          <div className="hero-buttons">
            <a href="/consulting" className="btn btn-primary">Need personalized help?</a>
            <a href="/blog" className="btn btn-secondary">Read our blog</a>
          </div>
        </div>
      </section>

      <section className="featured-articles">
        <div className="container">
          <SectionHeader 
            title="Featured Articles" 
            subtitle="Our most-read guides on Swiss education pathways"
          />
          
          <div className="articles-grid">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      <section className="site-purpose">
        <div className="container">
          <SectionHeader 
            title="Our Mission" 
            subtitle="Why SwissEduGuide exists"
          />
          
          <div className="purpose-content">
            <p>
              The Swiss education system offers multiple pathways to university, each with distinct advantages 
              and requirements. For international families, understanding these options can be challenging.
            </p>
            <p>
              SwissEduGuide was created to provide clear, accurate, and neutral information about the Swiss 
              Matura, International Baccalaureate, French Baccalauréat, and British A-Levels—without promoting 
              any specific institution or commercial interest.
            </p>
            <p>
              Our content is developed by education professionals with expertise in international admissions, 
              university pathways, and academic counseling. All information is verified against official sources 
              and updated regularly to reflect current policies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;