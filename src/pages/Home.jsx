import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Home Page Component
 * Landing page with hero banner and services overview
 */
function Home() {
  const services = [
    {
      id: 1,
      icon: '🏠',
      title: 'Residential Installation',
      description: 'Complete CCTV installation for homes including indoor and outdoor cameras, DVR/NVR setup, and mobile monitoring.'
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Commercial Solutions',
      description: 'Enterprise-grade security camera systems for businesses, retail stores, and warehouses with advanced features.'
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Maintenance & Repair',
      description: 'Regular maintenance, troubleshooting, and repair services to ensure your security system works perfectly.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Remote Monitoring',
      description: 'Set up remote access to your cameras via smartphone, tablet, or computer for 24/7 surveillance.'
    },
    {
      id: 5,
      icon: '💡',
      title: 'System Upgrades',
      description: 'Upgrade your existing CCTV system with the latest technology, including HD/4K cameras and cloud storage.'
    },
    {
      id: 6,
      icon: '🛡️',
      title: 'Security Consultation',
      description: 'Professional security assessment and customized solutions tailored to your specific needs and budget.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional CCTV Installation & Security Solutions
            </h1>
            <p className="hero-description">
              Protect what matters most with expert security camera installation, 
              maintenance, and monitoring services. Trusted by homeowners and businesses.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
              <a href="#services" className="btn btn-secondary">
                View Services
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive CCTV and security camera solutions for all your needs
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Secure Your Property?</h2>
            <p className="cta-description">
              Join hundreds of satisfied customers who trust us with their security needs
            </p>
            <Link to="/signup" className="btn btn-light">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
