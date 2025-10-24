import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Website Design',
      category: 'web-design',
      description: 'Modern e-commerce platform with seamless user experience',
      image: '🛒',
      tags: ['Web Design', 'E-commerce', 'UI/UX']
    },
    {
      id: 2,
      title: 'Brand Identity Package',
      category: 'branding',
      description: 'Complete brand identity for a tech startup',
      image: '🎨',
      tags: ['Branding', 'Logo Design', 'Identity']
    },
    {
      id: 3,
      title: 'Product Photography',
      category: 'image-editing',
      description: 'Professional product photos with advanced editing',
      image: '📸',
      tags: ['Photography', 'Editing', 'Product']
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'digital-marketing',
      description: 'Comprehensive social media strategy and content',
      image: '📱',
      tags: ['Social Media', 'Marketing', 'Content']
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'web-design',
      description: 'Responsive website for a local restaurant',
      image: '🍽️',
      tags: ['Web Design', 'Restaurant', 'Responsive']
    },
    {
      id: 6,
      title: 'Logo Design Collection',
      category: 'branding',
      description: 'Creative logo designs for various industries',
      image: '✨',
      tags: ['Logo Design', 'Creative', 'Branding']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'web-design', name: 'Web Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'image-editing', name: 'Image Editing' },
    { id: 'digital-marketing', name: 'Digital Marketing' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="portfolio">
      <div className="portfolio-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Explore our recent work and see how we've helped businesses transform their digital presence</p>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="portfolio-item">
                <div className="portfolio-image">
                  <div className="image-placeholder">
                    <span>{item.image}</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="case-studies">
            <h2>Featured Case Studies</h2>
            <div className="case-studies-grid">
              <div className="case-study">
                <div className="case-study-image">
                  <div className="image-placeholder">
                    <span>🏢</span>
                  </div>
                </div>
                <div className="case-study-content">
                  <h3>TechStart Digital Transformation</h3>
                  <p>
                    Complete digital overhaul for a growing tech company, including website redesign, 
                    brand identity, and digital marketing strategy. Resulted in 300% increase in 
                    online leads and 150% improvement in brand recognition.
                  </p>
                  <div className="case-study-stats">
                    <div className="stat">
                      <span className="stat-number">300%</span>
                      <span className="stat-label">Increase in Leads</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">150%</span>
                      <span className="stat-label">Brand Recognition</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-study">
                <div className="case-study-image">
                  <div className="image-placeholder">
                    <span>🛍️</span>
                  </div>
                </div>
                <div className="case-study-content">
                  <h3>Fashion Boutique E-commerce</h3>
                  <p>
                    Designed and developed a modern e-commerce platform for a fashion boutique. 
                    Implemented advanced filtering, mobile optimization, and seamless checkout 
                    experience. Achieved 250% increase in online sales within 6 months.
                  </p>
                  <div className="case-study-stats">
                    <div className="stat">
                      <span className="stat-number">250%</span>
                      <span className="stat-label">Sales Increase</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">6</span>
                      <span className="stat-label">Months Timeline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"JoyPixelLabs transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">👨‍💼</div>
                  <div className="author-info">
                    <h4>John Smith</h4>
                    <p>CEO, TechStart Inc.</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"Professional, creative, and reliable. They delivered our project on time and within budget. Highly recommended!"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">👩‍💼</div>
                  <div className="author-info">
                    <h4>Sarah Johnson</h4>
                    <p>Founder, Fashion Boutique</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"The team's expertise in both design and development is impressive. They brought our vision to life perfectly."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">👨‍🍳</div>
                  <div className="author-info">
                    <h4>Mike Chen</h4>
                    <p>Owner, Golden Dragon Restaurant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together. Get in touch to discuss your project requirements.</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
