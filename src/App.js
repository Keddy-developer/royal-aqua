import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Components/Home'; 
import Footer from './Components/Footer'; 
import BlogPage from './Components/BlogPage';  // Import BlogPage
import ScrollToTop from './Components/ScrollToTop';  // Import BlogPage


function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        
        {/* Blog page route with dynamic slug */}
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>

      {/* Footer, which appears on all pages */}
      <ScrollToTop/>
      <Footer />
    </Router>
  );
}

export default App;
