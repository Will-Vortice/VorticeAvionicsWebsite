import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/OldLogos/Vortice Avionics Logo Wide Whitelarge.png';
import './nav.css';

function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className="navigation">
            <div className="nav-container">
                <Link to="/" className="logo-link" onClick={closeMenu}>
                    <div className="logo-icon-wrapper">
                        <img src={logo} alt="Vortice Avionics" className="logo-image" />
                    </div>
                </Link>

                <div className="nav-links">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            {link.name}
                            {isActive(link.path) && <div className="nav-link-underline" />}
                        </Link>
                    ))}
                </div>

                <div className="request-info">
                    <Link to="/contact" className="request-info-link">
                        Request Info
                    </Link>
                </div>

                <button
                    className="hamburger-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    {links.map((link) => (
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