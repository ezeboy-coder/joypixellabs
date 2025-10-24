import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>About JoyPixelLabs</h1>
          <p>Transforming digital visions into reality with passion, creativity, and technical excellence</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="story-section">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to bridge the gap between creative ideas and digital reality, 
                JoyPixelLabs has been at the forefront of digital innovation. We believe that every 
                business deserves access to professional-grade digital services that can transform 
                their online presence and drive growth.
              </p>
              <p>
                Our journey began with a simple mission: to make high-quality digital services 
                accessible to businesses of all sizes. Today, we're proud to have helped hundreds 
                of clients achieve their digital goals through our comprehensive suite of services.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🏢</span>
                <p>Our Creative Studio</p>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Excellence</h3>
                <p>We strive for perfection in every project, delivering results that exceed expectations and drive meaningful impact.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>We work closely with our clients as partners, ensuring their vision is brought to life through open communication and feedback.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>We stay ahead of digital trends and technologies, bringing fresh ideas and cutting-edge solutions to every project.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3>Efficiency</h3>
                <p>We deliver high-quality work on time and within budget, respecting our clients' timelines and resources.</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <span>👨‍💻</span>
                </div>
                <h3>Alex Johnson</h3>
                <p className="member-role">Creative Director</p>
                <p className="member-bio">With over 8 years in digital design, Alex leads our creative vision and ensures every project meets our high standards.</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <span>👩‍🎨</span>
                </div>
                <h3>Sarah Chen</h3>
                <p className="member-role">Senior Designer</p>
                <p className="member-bio">Sarah specializes in brand identity and web design, bringing a unique artistic perspective to every project.</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <span>👨‍💼</span>
                </div>
                <h3>Mike Rodriguez</h3>
                <p className="member-role">Project Manager</p>
                <p className="member-bio">Mike ensures smooth project delivery and maintains clear communication between our team and clients.</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <span>👩‍💻</span>
                </div>
                <h3>Emma Wilson</h3>
                <p className="member-role">Developer</p>
                <p className="member-bio">Emma brings our designs to life with clean, efficient code and modern development practices.</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Work With Us?</h2>
            <p>Let's discuss your project and see how we can help bring your digital vision to life.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
