import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * Header Component
 * Navigation bar with logo and links to main pages
 */
function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-icon">📹</span>
            <span className="logo-text">CCTV Freelancer</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/login" className={`nav-link ${isActive('/login')}`}>
              Login
            </Link>
            <Link to="/signup" className={`nav-link nav-link-primary ${isActive('/signup')}`}>
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
