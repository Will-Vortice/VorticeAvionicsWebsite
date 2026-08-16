import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useContactModal } from '../../contexts/ContactModalProvider'
import logo from '../../assets/OldLogos/Vortice Avionics Logo Wide Whitelarge.png'
import './nav.css'

const defaultLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
]

const heroLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
]

const rifleBirdLinks = [
  { name: 'HOME', path: '/' },
  { name: 'RIFLEBIRD', path: '/riflebird' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT US', path: '/contact' },
]

function Navbar({ variant = 'default', links = defaultLinks, requestLabel = 'Request Info', requestPath = '/contact' }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path
  const closeMenu = () => setIsMenuOpen(false)

  const activeLinks = links && links.length ? links : defaultLinks

  const { openContact } = useContactModal()

  if (variant === 'hero') {
    return (
      <header className="hero-header">
        <Link to="/" className="hero-brand" aria-label="Vortice Avionics home" onClick={closeMenu}>
          <img src={logo} alt="Vortice Avionics" />
        </Link>

        <nav className="hero-nav" aria-label="Primary navigation">
          {heroLinks.map((link) => (
            link.path === '/contact' ? (
              <button
                key={link.path}
                className={`hero-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => { openContact(); closeMenu() }}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`hero-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            )
          ))}
          <button className="hero-nav-request" onClick={() => { openContact(); closeMenu() }}>
            {requestLabel}
          </button>
        </nav>
      </header>
    )
  }

  if (variant === 'riflebird') {
    return (
      <header className="riflebird-header">
        <div className="riflebird-nav-container">
          <Link to="/" className="riflebird-logo-link" onClick={closeMenu}>
            <img src={logo} alt="Vortice Avionics" className="riflebird-logo" />
          </Link>

          <nav className="riflebird-nav-links">
            {rifleBirdLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`riflebird-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
                {isActive(link.path) && <div className="riflebird-nav-underline" />}
              </Link>
            ))}
          </nav>

          <button className="riflebird-request-info-link" onClick={() => { openContact(); closeMenu() }}>
            {requestLabel}
          </button>

          <button
            className="riflebird-hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="riflebird-mobile-menu">
            {rifleBirdLinks.map((link) => (
              link.path === '/contact' ? (
                <button
                  key={link.path}
                  className={`riflebird-mobile-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => { openContact(); closeMenu() }}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`riflebird-mobile-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        )}
      </header>
    )
  }

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
            link.path === '/contact' ? (
              <button
                key={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => { openContact(); closeMenu() }}
              >
                {link.name}
                {isActive(link.path) && <div className="nav-link-underline" />}
              </button>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
                {isActive(link.path) && <div className="nav-link-underline" />}
              </Link>
            )
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
            link.path === '/contact' ? (
              <button
                key={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => { openContact(); closeMenu() }}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar