import './Footer.css';

/**
 * Footer Component
 * Site footer with copyright information
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} CCTV Freelancer. Professional security camera services.
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <span className="footer-divider">•</span>
            <a href="#" className="footer-link">Terms of Service</a>
            <span className="footer-divider">•</span>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
