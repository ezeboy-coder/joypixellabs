import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <Link to="/" className="brand-link">
              <span className="brand-text">JoyPixelLabs</span>
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/services" 
                className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/portfolio" 
                className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/pricing" 
                className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/blog" 
                className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-cta">
            <Link to="/contact" className="cta-button">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>JoyPixelLabs</h3>
            <p>Transforming ideas into digital excellence through innovative design and cutting-edge technology.</p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/image-editing">Image Editing</Link></li>
              <li><Link to="/services/web-design">Web Design</Link></li>
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services/branding">Branding</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: hello@joypixellabs.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Digital Street, Tech City, TC 12345</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 JoyPixelLabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
