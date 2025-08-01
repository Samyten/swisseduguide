// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SwissSystem from './pages/SwissSystem';
import UniversityAccess from './pages/UniversityAccess';
import VisaGuide from './pages/VisaGuide';
import HighSchoolAdvice from './pages/HighSchoolAdvice';
import TuitionComparison from './pages/TuitionComparison';
import Consulting from './pages/Consulting';
import Authors from './pages/Authors';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swiss-system" element={<SwissSystem />} />
          <Route path="/university-access" element={<UniversityAccess />} />
          <Route path="/visa-guide" element={<VisaGuide />} />
          <Route path="/high-school-advice" element={<HighSchoolAdvice />} />
          <Route path="/tuition-comparison" element={<TuitionComparison />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;