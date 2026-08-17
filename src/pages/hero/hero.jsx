import { Link } from 'react-router-dom'
import { useContactModal } from '../../contexts/ContactModalProvider'
import { useEffect, useRef } from 'react'
import Navbar from '../../components/nav/nav'
import backgroundImage from '../../assets/Frame 6.png'
import MissionReadyImg from '../../assets/MissionReadyImg.png'
import SoldierDiscretionIcon from "../../assets/soldierDiscretionImg.png"
import ContestedEnvIcon from "../../assets/contestedEnvImg.png"
import PrecisionIcon from "../../assets/PrecisionImg.png"
import LowCostIcon from "../../assets/costImg.png"
import './hero.css'

const cardImage = '../../assets/MissionReadyImg.png'
const solutionImageMain = 'http://localhost:3845/assets/339f365f2ae1c77d49742bc59b0009ff7947345f.png'
const solutionImageFeature = 'http://localhost:3845/assets/b4853ad635f3facc89950e9270a1edf47cbc48a9.png'
const solutionImageAccent = 'http://localhost:3845/assets/1c4af0bf75adc753fad7eda10220e2d4941eb93f.png'
const productImage = 'http://localhost:3845/assets/e2f877a64f1e1d5cb3e18798a1f3cc21039fae84.png'

const featureItems = [
  {
    title: 'Soldier discretion',
    description: 'The soldier decides when and where to strike.',
    icon: SoldierDiscretionIcon,
  },
  {
    title: 'Contested environments',
    description: 'Operates in GPS denied and signal contested environments.',
    icon: ContestedEnvIcon,
  },
  {
    title: 'Precision effects',
    description: 'Delivers high precision strikes on target.',
    icon: PrecisionIcon,
  },
  {
    title: 'Low cost',
    description: 'Affordable, highly replenishable systems.',
    icon: LowCostIcon,
  },
]

const solutionStages = [
  {
    number: '01',
    label: 'DEPLOY',
    description: 'Remote launch and deployment at the press of a button.',
  },
  {
    number: '02',
    label: 'ENGAGE',
    description: 'Autonomous navigation in GPS denied and contested environments.',
  },
  {
    number: '03',
    label: 'STRIKE',
    description: 'High precision strike on target at soldier discretion.',
  },
]

function HeroButton({ children, variant = 'primary', to = '/contact' }) {
  const { openContact } = useContactModal()
  if (to === '/contact') {
    return (
      <button className={`hero-button ${variant}`} onClick={openContact}>
        {children}
      </button>
    )
  }

  return (
    <Link className={`hero-button ${variant}`} to={to}>
      {children}
    </Link>
  )
}

function FeatureItem({ title, description, icon }) {
  return (
    <article className="hero-feature">
      <div className="hero-feature-icon" aria-hidden="true">
        <img src={icon} alt="" />
      </div>
      <div className="hero-feature-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

function SolutionStage({ number, label, description }) {
  return (
    <div className="solution-stage">
      <div className="solution-stage-number">{number}</div>
      <h3>{label}</h3>
      <p>{description}</p>
    </div>
  )
}

function ProductSpotlight() {
  return (
    <section className="product-section" aria-labelledby="product-title">
      <div className="product-shell">
        <div className="product-copy">
          <p className="product-label">PRODUCT SPOTLIGHT</p>
          <h2 id="product-title">RIFLEBIRD</h2>
          <p>
            RifleBird is a compact, semi-autonomous UAV strike system purpose-built for modern battlefields. Designed to be launched from existing platforms and operated with minimal training, it delivers precise effects when and where they’re needed most.
          </p>
          <Link className="product-cta" to="/riflebird">
            Learn more
          </Link>
        </div>
        <div className="product-image-frame">
          <img src={productImage} alt="RifleBird blueprint" className="product-image" />
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  const overlayRef = useRef(null)
  const solutionRef = useRef(null)

  useEffect(() => {
    let rafId = null
    let debounceId = null

    function updateOverlayImmediate() {
      if (!overlayRef.current || !solutionRef.current) return
      const rect = solutionRef.current.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      const targetHeight = Math.min(Math.max(((vh - rect.top) / vh) * 1.2, 0), 1)
      overlayRef.current.style.height = `${targetHeight * 100}%`
    }

    function onScroll() {
      // schedule update on next animation frame, then debounce the actual update
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (debounceId) clearTimeout(debounceId)
        // small debounce to reduce visible stutter on very fast scrolls
        debounceId = setTimeout(updateOverlayImmediate, 60)
      })
    }

    updateOverlayImmediate()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (debounceId) clearTimeout(debounceId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="hero-page">
      <div className="hero-page-background" aria-hidden="true">
        <img src={backgroundImage} alt="" />
      </div>
      <div ref={overlayRef} className="hero-page-overlay" aria-hidden="true" />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-shell">
          <Navbar requestLabel="Request Info" requestPath="/contact" />

          <div className="hero-body">
            <div className="hero-copy">
              <h1 id="hero-title">Precise strikes. Soldier controlled.</h1>
              <h1 id="hero-title"> </h1>
              <p className="hero-description">
                RifleBird is a semi-autonomous UAV strike system that enables soldiers to deliver precise effects with minimal training and maximum impact anywhere, anytime.
              </p>

              <div className="hero-actions">
                <HeroButton to="/riflebird">Explore RifleBird</HeroButton>
                <HeroButton variant="secondary" to="/contact">
                  Get a briefing
                </HeroButton>
              </div>
            </div>

            <aside className="hero-card" aria-label="Mission ready overview">
              <div className="hero-card-image">
                <img src={MissionReadyImg} alt="Mission ready system" />
              </div>
              <div className="hero-card-body">
                <h2>Mission Ready</h2>
                <p>GPS denied. Signal contested.</p>
                <p>Always on mission</p>
              </div>
            </aside>
          </div>

          <div className="hero-features" aria-label="Capability highlights">
            {featureItems.map((item) => (
              <FeatureItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section" aria-labelledby="solution-title" ref={solutionRef}>
        <div className="solution-shell">
          <div className="solution-copy-panel">
            <p className="solution-label">SOLUTION</p>
            <h2 id="solution-title">RIFLEBIRD</h2>
            <p className="solution-description">
              A rapidly deployable, simple to use, high precision strike system.
            </p>
            <Link className="solution-cta" to="/riflebird">
              View Product
            </Link>
          </div>

          <div className="solution-media-panel">
            <div className="solution-media-frame">
              <img className="solution-media-main" src={solutionImageMain} alt="RifleBird platform" />
              <img className="solution-media-tilt" src={solutionImageFeature} alt="RifleBird deployment" />
              <img className="solution-media-accent top" src={solutionImageAccent} alt="Decorative accent" />
              <img className="solution-media-accent bottom" src={solutionImageAccent} alt="Decorative accent" />
            </div>
          </div>

          <div className="solution-stages">
            {solutionStages.map((stage) => (
              <SolutionStage key={stage.number} {...stage} />
            ))}
          </div>
        </div>
      </section>

      <ProductSpotlight />
    </div>
  )
}
