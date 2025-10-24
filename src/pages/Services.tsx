import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services">
      <div className="services-hero">
        <div className="container">
          <h1>Our Digital Services</h1>
          <p>Comprehensive digital solutions to elevate your business and brand</p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            <div className="service-detail">
              <div className="service-header">
                <div className="service-icon">🎨</div>
                <h2>Image Editing & Photo Retouching</h2>
              </div>
              <p className="service-description">
                Transform your images with professional editing services. From basic retouching to 
                complex photo manipulation, we deliver stunning visuals that capture attention and 
                convey your message effectively.
              </p>
              <div className="service-features">
                <h3>What We Offer:</h3>
                <ul>
                  <li>Professional photo retouching</li>
                  <li>Color correction and enhancement</li>
                  <li>Background removal and replacement</li>
                  <li>Product photography editing</li>
                  <li>Creative image manipulation</li>
                  <li>Batch processing for multiple images</li>
                </ul>
              </div>
              <div className="service-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get Quote
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Examples
                </Link>
              </div>
            </div>

            <div className="service-detail">
              <div className="service-header">
                <div className="service-icon">💻</div>
                <h2>Web Design & Development</h2>
              </div>
              <p className="service-description">
                Create stunning, responsive websites that engage your audience and drive conversions. 
                Our modern designs combine aesthetics with functionality to deliver exceptional user experiences.
              </p>
              <div className="service-features">
                <h3>What We Offer:</h3>
                <ul>
                  <li>Custom website design</li>
                  <li>Responsive mobile-first development</li>
                  <li>E-commerce solutions</li>
                  <li>Content Management Systems</li>
                  <li>SEO optimization</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
              <div className="service-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get Quote
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Examples
                </Link>
              </div>
            </div>

            <div className="service-detail">
              <div className="service-header">
                <div className="service-icon">📱</div>
                <h2>Digital Marketing</h2>
              </div>
              <p className="service-description">
                Boost your online presence with comprehensive digital marketing strategies. 
                From social media management to content creation, we help you reach and engage your target audience.
              </p>
              <div className="service-features">
                <h3>What We Offer:</h3>
                <ul>
                  <li>Social media management</li>
                  <li>Content creation and strategy</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Pay-per-click advertising</li>
                  <li>Email marketing campaigns</li>
                  <li>Analytics and reporting</li>
                </ul>
              </div>
              <div className="service-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get Quote
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Examples
                </Link>
              </div>
            </div>

            <div className="service-detail">
              <div className="service-header">
                <div className="service-icon">🎯</div>
                <h2>Branding & Identity</h2>
              </div>
              <p className="service-description">
                Develop a strong brand identity that resonates with your audience. From logo design 
                to complete brand guidelines, we create cohesive visual identities that build trust and recognition.
              </p>
              <div className="service-features">
                <h3>What We Offer:</h3>
                <ul>
                  <li>Logo design and branding</li>
                  <li>Brand identity development</li>
                  <li>Business card and stationery design</li>
                  <li>Brand guidelines and style guides</li>
                  <li>Marketing collateral design</li>
                  <li>Brand strategy consultation</li>
                </ul>
              </div>
              <div className="service-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get Quote
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Examples
                </Link>
              </div>
            </div>
          </div>

          <div className="process-section">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Discovery</h3>
                <p>We start by understanding your needs, goals, and vision for the project.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Planning</h3>
                <p>We create a detailed plan and timeline for your project deliverables.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Design</h3>
                <p>Our team creates initial concepts and designs based on your requirements.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Review</h3>
                <p>We present our work and incorporate your feedback for revisions.</p>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <h3>Delivery</h3>
                <p>Final files are delivered in the formats you need for your project.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and create something amazing together.</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
