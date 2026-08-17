import { Link } from 'react-router-dom'
import { useContactModal } from '../contact/useContactModal'
import logo from '../../assets/OldLogos/Vortice Avionics Logo Wide Whitelarge.png'
import './footer.css'

function Footer() {
  const { openContact } = useContactModal()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link to="/" className="site-footer-logo-link" aria-label="Vortice Avionics home">
            <img src={logo} alt="Vortice Avionics" className="site-footer-logo" />
          </Link>
          <p>Soldier-controlled precision effects for contested environments.</p>
        </div>

        <div className="site-footer-column">
          <p className="site-footer-label">EXPLORE</p>
          <Link to="/">Home</Link>
          <Link to="/riflebird">RifleBird</Link>
          <Link to="/directory">Directory</Link>
        </div>

        <div className="site-footer-column">
          <p className="site-footer-label">CONNECT</p>
          <button type="button" onClick={openContact}>Request information</button>
          <a href="mailto:info@vorticeavionics.com">Email the team</a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>VORTICE AVIONICS</span>
        <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  )
}

export default Footer
