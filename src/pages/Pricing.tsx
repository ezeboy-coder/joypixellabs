import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        'Up to 5 pages website',
        'Mobile responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        '1 month support',
        'Basic image editing (5 images)',
        'Social media setup'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 599,
      yearlyPrice: 5999,
      features: [
        'Up to 15 pages website',
        'Advanced responsive design',
        'SEO optimization & analytics',
        'E-commerce integration',
        '3 months support',
        'Professional image editing (20 images)',
        'Social media management',
        'Content creation',
        'Email marketing setup'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete digital transformation',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        'Unlimited pages website',
        'Custom web applications',
        'Advanced SEO & marketing',
        'Full e-commerce solution',
        '6 months support',
        'Unlimited image editing',
        'Complete digital marketing',
        'Brand identity design',
        'Advanced analytics',
        'Priority support'
      ],
      popular: false
    }
  ];

  const servicePricing = [
    {
      service: 'Image Editing',
      price: 'Starting at $25/image',
      description: 'Professional photo retouching and enhancement',
      features: ['Color correction', 'Background removal', 'Object removal', 'Creative effects']
    },
    {
      service: 'Web Design',
      price: 'Starting at $2,500',
      description: 'Custom website design and development',
      features: ['Responsive design', 'SEO optimization', 'Content management', 'Mobile optimization']
    },
    {
      service: 'Digital Marketing',
      price: 'Starting at $1,500/month',
      description: 'Comprehensive digital marketing strategy',
      features: ['Social media management', 'Content creation', 'SEO optimization', 'Analytics reporting']
    },
    {
      service: 'Branding',
      price: 'Starting at $1,000',
      description: 'Complete brand identity package',
      features: ['Logo design', 'Brand guidelines', 'Business cards', 'Marketing materials']
    }
  ];

  return (
    <div className="pricing">
      <div className="pricing-hero">
        <div className="container">
          <h1>Transparent Pricing</h1>
          <p>Choose the perfect plan for your business needs. No hidden fees, no surprises.</p>
        </div>
      </div>

      <div className="pricing-content">
        <div className="container">
          <div className="billing-toggle">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
            <button 
              className={`toggle-switch ${billingCycle === 'yearly' ? 'yearly' : ''}`}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <span className="toggle-slider"></span>
            </button>
            <span className={billingCycle === 'yearly' ? 'active' : ''}>
              Yearly 
              <span className="discount-badge">Save 20%</span>
            </span>
          </div>

          <div className="pricing-plans">
            {pricingPlans.map(plan => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="amount">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="period">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="custom-pricing">
            <h2>Need Something Custom?</h2>
            <p>We offer custom solutions for unique requirements. Contact us to discuss your specific needs.</p>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>

          <div className="service-pricing">
            <h2>Individual Services</h2>
            <p>Prefer to pay per service? Here are our individual service rates:</p>
            <div className="service-grid">
              {servicePricing.map((service, index) => (
                <div key={index} className="service-card">
                  <h3>{service.service}</h3>
                  <div className="service-price">{service.price}</div>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-outline">
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="pricing-faq">
            <h2>Pricing FAQ</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What's included in the support?</h3>
                <p>Support includes bug fixes, minor updates, and technical assistance. Major changes or new features may incur additional costs.</p>
              </div>
              <div className="faq-item">
                <h3>Can I change my plan later?</h3>
                <p>Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer refunds?</h3>
                <p>We offer a 30-day money-back guarantee for all our services. If you're not satisfied, we'll refund your payment.</p>
              </div>
              <div className="faq-item">
                <h3>Are there any setup fees?</h3>
                <p>No setup fees! The price you see is the price you pay. We believe in transparent, honest pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
