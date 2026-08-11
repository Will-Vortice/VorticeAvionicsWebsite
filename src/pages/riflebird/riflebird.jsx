import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/OldLogos/Vortice Avionics Logo Wide Whitelarge.png'
import './riflebird.css'

const productImage = 'http://localhost:3845/assets/b4853ad635f3facc89950e9270a1edf47cbc48a9.png'

function RifleBirdNav() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'RIFLEBIRD', path: '/riflebird' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
  ]

  return (
    <header className="riflebird-header">
      <div className="riflebird-nav-container">
        <Link to="/" className="riflebird-logo-link">
          <img src={logo} alt="Vortice Avionics" className="riflebird-logo" />
        </Link>

        <nav className="riflebird-nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`riflebird-nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
              {isActive(link.path) && <div className="riflebird-nav-underline" />}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="riflebird-request-info-link">
          REQUEST INFO
        </Link>

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
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`riflebird-mobile-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default function RifleBird() {
  return (
    <div className="riflebird-page">
      <RifleBirdNav />

      <main className="riflebird-content">
        <section className="riflebird-hero">
          <div className="riflebird-copy">
            <p className="riflebird-breadcrumb">PRODUCTS / RIFLEBIRD</p>
            <h1 className="riflebird-title">RIFLEBIRD</h1>
            <p className="riflebird-subtitle">SOLDIER-CONTROLLED, PRECISION STRIKE.</p>
            <p className="riflebird-description">
              RifleBird is a rapidly deployable, semi-autonomous strike system that enables soldiers to deliver
              precise effects with minimal training and input - anywhere, anytime
            </p>

            <div className="riflebird-actions">
              <Link to="/contact" className="riflebird-primary-cta">
                REQUEST INFO
              </Link>
              <button className="riflebird-secondary-cta">
                WATCH OVERVIEW
              </button>
            </div>
          </div>

          <div className="riflebird-image">
            <img src={productImage} alt="RifleBird UAV" />
          </div>
        </section>
      </main>
    </div>
  )
}
