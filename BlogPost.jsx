// src/pages/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

// Mock data for blog posts
const blogPosts = {
  'understanding-swiss-matura': {
    title: "Understanding the Swiss Matura System",
    date: "March 15, 2024",
    readTime: "8 min read",
    content: `
      <h2>What is the Swiss Matura?</h2>
      <p>The Swiss Matura (or Maturité) is the federal maturity certificate awarded upon completion of upper secondary education in Switzerland. It is recognized internationally and provides automatic access to all Swiss public universities, including EPFL and ETH Zurich.</p>
      
      <h3>Structure of the Matura</h3>
      <p>The Matura is a two-year program following lower secondary education. It includes:</p>
      <ul>
        <li>Compulsory subjects: Mathematics, native language, second national language, foreign language</li>
        <li>Elective subjects in humanities, sciences, or arts</li>
        <li>Matura thesis (extended essay)</li>
        <li>Oral and written examinations</li>
      </ul>
      
      <h3>Assessment Methods</h3>
      <p>The Matura combines school-based coursework (30%) with centralized final exams (70%). This balanced approach ensures both consistent academic performance and excellence in final assessments.</p>
      
      <h3>University Access</h3>
      <p>One of the key advantages of the Swiss Matura is automatic access to all Swiss public universities. Unlike international qualifications that require additional documentation and review, Matura graduates have a direct pathway to higher education in Switzerland.</p>
      
      <h3>International Recognition</h3>
      <p>The Swiss Matura is recognized by universities worldwide, particularly in Europe. Many institutions have specific admission requirements for Matura holders, often with lower grade thresholds than for other qualifications.</p>
    `
  },
  'ib-vs-a-levels': {
    title: "IB vs A-Levels: Which is Right for Your Child?",
    date: "February 28, 2024",
    readTime: "10 min read",
    content: `
      <h2>Comparing International Qualifications</h2>
      <p>When choosing between the International Baccalaureate (IB) and British A-Levels, families must consider several factors including curriculum structure, assessment methods, and university recognition.</p>
      
      <h3>The International Baccalaureate</h3>
      <p>The IB Diploma Programme emphasizes a broad, balanced education with six subject groups, Theory of Knowledge, Extended Essay, and Creativity, Activity, Service components. It is highly regarded for developing well-rounded students.</p>
      
      <h3>British A-Levels</h3>
      <p>A-Levels allow for specialization in 3-4 subjects, providing depth in chosen fields. This focused approach can be advantageous for students with clear career goals in specific disciplines.</p>
      
      <h3>University Recognition</h3>
      <p>Both qualifications are widely recognized, but acceptance criteria vary by country and institution. In Switzerland, both require additional documentation for university admission, unlike the Swiss Matura which provides automatic access.</p>
    `
  },
  'navigating-swiss-student-visas': {
    title: "Navigating Swiss Student Visas",
    date: "February 10, 2024",
    readTime: "6 min read",
    content: `
      <h2>Student Visa Process for Switzerland</h2>
      <p>Obtaining a student visa for Switzerland requires careful planning and documentation. This guide outlines the key steps in the application process.</p>
      
      <h3>Step 1: Acceptance to an AVDEP-Certified School</h3>
      <p>You must first secure admission to a Swiss educational institution recognized by the Swiss Agency for Development and Cooperation (AVDEP). Only AVDEP-certified schools can sponsor student visas for international students.</p>
      
      <h3>Step 2: Financial Requirements</h3>
      <p>International students must demonstrate sufficient financial means to cover their expenses. The minimum requirement is CHF 21,000 per year, with higher amounts needed for boarding schools.</p>
      
      <h3>Step 3: Application and Processing</h3>
      <p>Submit your application at the Swiss consulate or embassy in your home country. Processing typically takes 4-8 weeks, so apply at least 3 months before your intended travel date.</p>
    `
  }
};

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="blog-post container">
        <div className="not-found">
          <h2>Article Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="btn btn-primary">Return to Blog</a>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="container">
        <article className="post-content">
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
          </header>
          
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="post-share">
            <p>Share this article:</p>
            <div className="share-buttons">
              <button className="share-btn">Twitter</button>
              <button className="share-btn">LinkedIn</button>
              <button className="share-btn">Email</button>
            </div>
          </div>
          
          <div className="post-navigation">
            <a href="/blog" className="btn btn-secondary">← Back to Blog</a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;