import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useContactModal } from '../contact/useContactModal'
import logo from '../../assets/OldLogos/Vortice Avionics Logo Wide Whitelarge.png'
import './nav.css'

const defaultLinks = [
  { name: 'Home', path: '/' },
  { name: 'RifleBird', path: '/riflebird' },
]

function Navbar({ links = defaultLinks, requestLabel = 'Request Info' }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path
  const closeMenu = () => setIsMenuOpen(false)

  const activeLinks = links && links.length ? links : defaultLinks

  const { openContact } = useContactModal()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo-icon-wrapper">
            <img src={logo} alt="Vortice Avionics" className="logo-image" />
          </div>
        </Link>

        <div className="nav-links">
          {activeLinks.map((link) => (
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
          <button className="request-info-link" onClick={() => { openContact(); closeMenu() }}>
            {requestLabel}
          </button>
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
          {activeLinks.map((link) => (
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
  )
}

export default Navbar