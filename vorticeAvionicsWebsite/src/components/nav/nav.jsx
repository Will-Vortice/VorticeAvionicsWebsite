import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Vortice Avionics Logo Wide Coloursmall.png'
import './nav.css';



function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path;
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo-icon-wrapper">
            <img src={logo} alt="Vortice Avionics" className="logo-image" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {[
            { name: 'Home', path: '/' },
            { name: 'Directory', path: '/directory' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
              {isActive(link.path) && <div className="nav-link-underline" />}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {[
            { name: 'Home', path: '/' },
            { name: 'Directory', path: '/directory' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;