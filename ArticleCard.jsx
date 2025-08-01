// src/components/ArticleCard.jsx
import React from 'react';
import './ArticleCard.css';

function ArticleCard({ title, excerpt, date, readTime, slug }) {
  return (
    <article className="article-card">
      <h3 className="article-title">
        <a href={`/blog/${slug}`}>{title}</a>
      </h3>
      <p className="article-excerpt">{excerpt}</p>
      <div className="article-meta">
        <span className="article-date">{date}</span>
        <span className="article-read-time">{readTime}</span>
      </div>
    </article>
  );
}

export default ArticleCard;