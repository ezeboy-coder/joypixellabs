import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Digital Vision into Reality
          </h1>
          <p className="hero-subtitle">
            Professional image editing, stunning web design, and comprehensive digital services 
            to elevate your brand and business to new heights.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started Today
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <span>🎨</span>
              <p>Image Editing</p>
            </div>
            <div className="floating-card card-2">
              <span>💻</span>
              <p>Web Design</p>
            </div>
            <div className="floating-card card-3">
              <span>📱</span>
              <p>Digital Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of digital services to help your business thrive
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Image Editing</h3>
              <p>Professional photo retouching, color correction, and creative image manipulation to make your visuals stand out.</p>
              <Link to="/services/image-editing" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Design</h3>
              <p>Modern, responsive websites that captivate your audience and drive conversions with stunning design and UX.</p>
              <Link to="/services/web-design" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Digital Marketing</h3>
              <p>Comprehensive digital marketing strategies to boost your online presence and reach your target audience.</p>
              <Link to="/services/digital-marketing" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Branding</h3>
              <p>Complete brand identity design including logos, color schemes, and brand guidelines that represent your vision.</p>
              <Link to="/services/branding" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose JoyPixelLabs?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Quick delivery without compromising on quality. We understand the importance of meeting deadlines.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Custom Solutions</h3>
              <p>Tailored services that meet your specific needs and business objectives.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>High-quality deliverables that exceed expectations and drive results.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h3>Dedicated Support</h3>
              <p>Ongoing support and communication throughout your project lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's work together to create something amazing that drives your business forward.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start Your Project
              </Link>
              <Link to="/pricing" className="btn btn-outline btn-large">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
