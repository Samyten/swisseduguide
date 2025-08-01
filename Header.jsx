// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/swiss-system', label: 'Swiss System' },
    { path: '/university-access', label: 'University Access' },
    { path: '/visa-guide', label: 'Visa Guide' },
    { path: '/high-school-advice', label: 'High School Advice' },
    { path: '/tuition-comparison', label: 'Tuition Comparison' },
    { path: '/consulting', label: 'Consulting' },
    { path: '/authors', label: 'Authors' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="site-title">
          <a href="/">SwissEduGuide</a>
        </h1>
        
        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <a 
                  href={item.path} 
                  className={window.location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;