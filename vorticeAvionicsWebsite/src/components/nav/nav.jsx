import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import logo from '../../assets/Vortice Avionics Logo Wide Coloursmall.png'
import './nav.css';



function Navbar() {
    const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <div className="logo-icon-wrapper">
            <img src={logo} alt="Vortice Avionics" className="logo-image" />
          </div>
        </Link>

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
      </div>
    </nav>
  );
}

export default Navbar;