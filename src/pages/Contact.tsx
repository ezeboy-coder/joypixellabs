import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Ready to start your next project? Let's discuss how we can help bring your vision to life.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Start a Conversation</h2>
              <p>
                Whether you have a specific project in mind or just want to explore possibilities, 
                we're here to help. Get in touch and let's discuss how we can work together.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-info">
                    <h3>Email Us</h3>
                    <p>hello@joypixellabs.com</p>
                    <p>We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-info">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-info">
                    <h3>Visit Us</h3>
                    <p>2847 Innovation Drive</p>
                    <p>Austin, TX 78701</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">Facebook</a>
                  <a href="#" className="social-icon">Twitter</a>
                  <a href="#" className="social-icon">LinkedIn</a>
                  <a href="#" className="social-icon">Instagram</a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      <option value="image-editing">Image Editing</option>
                      <option value="web-design">Web Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="branding">Branding</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-plus">$25,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How long does a typical project take?</h3>
                <p>Project timelines vary based on scope and complexity. Simple designs can be completed in 1-2 weeks, while comprehensive websites may take 4-8 weeks. We'll provide a detailed timeline during our initial consultation.</p>
              </div>
              <div className="faq-item">
                <h3>What's included in your web design service?</h3>
                <p>Our web design service includes custom design, responsive development, content integration, SEO optimization, and 30 days of post-launch support. We also provide training on how to manage your website.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer ongoing support?</h3>
                <p>Yes! We offer various support packages including maintenance, updates, hosting management, and ongoing optimization. We're here to help your digital presence grow and evolve.</p>
              </div>
              <div className="faq-item">
                <h3>Can you work with our existing brand guidelines?</h3>
                <p>Absolutely! We can work within your existing brand guidelines or help evolve your brand identity. We're flexible and can adapt to your specific requirements and preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
