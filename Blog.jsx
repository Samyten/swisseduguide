// src/pages/Blog.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleCard from '../components/ArticleCard';
import './Blog.css';

// Mock data for blog posts
const blogPosts = [
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
  },
  {
    id: 4,
    title: "The Benefits of the Swiss Matura for University Access",
    excerpt: "Why the Swiss Matura provides superior access to EPFL and other Swiss universities.",
    date: "January 22, 2024",
    readTime: "7 min read",
    slug: "benefits-swiss-matura"
  },
  {
    id: 5,
    title: "Common Mistakes in Choosing a Swiss High School",
    excerpt: "Avoid these pitfalls when selecting a secondary school in Switzerland for your child.",
    date: "December 15, 2023",
    readTime: "9 min read",
    slug: "common-mistakes-school-choice"
  },
  {
    id: 6,
    title: "Financial Planning for Education in Switzerland",
    excerpt: "A guide to budgeting for tuition, living costs, and additional expenses in the Swiss education system.",
    date: "November 8, 2023",
    readTime: "12 min read",
    slug: "financial-planning-switzerland"
  }
];

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <SectionHeader 
          title="Blog" 
          subtitle="Articles and guides on Swiss education pathways"
        />
        
        <div className="blog-intro">
          <p>
            Our blog provides in-depth articles on various aspects of the Swiss education system, 
            from diploma comparisons to university admission strategies and practical guidance 
            for international families.
          </p>
        </div>

        <div className="articles-grid">
          {blogPosts.map(post => (
            <ArticleCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;