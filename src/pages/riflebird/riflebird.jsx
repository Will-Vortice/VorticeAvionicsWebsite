import { Link } from 'react-router-dom'
import Navbar from '../../components/nav/nav'
import { useContactModal } from '../../contexts/ContactModalProvider'
import './riflebird.css'

const productImage = 'http://localhost:3845/assets/b4853ad635f3facc89950e9270a1edf47cbc48a9.png'

export default function RifleBird() {
  const { openContact } = useContactModal()

  return (
    <div className="riflebird-page">
      <Navbar variant="riflebird" requestLabel="REQUEST INFO" requestPath="/contact" />

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
              <button className="riflebird-primary-cta" onClick={openContact}>
                REQUEST INFO
              </button>
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
