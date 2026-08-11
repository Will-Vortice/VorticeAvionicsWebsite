import { Link } from 'react-router-dom'
import logo from '../../assets/OldLogos/Vortice Avionics Logo Wide Whitelarge.png'
import './hero.css'

const backgroundImage = 'http://localhost:3845/assets/fdcc98e19885314573d62df61067936b14104497.png'
const cardImage = 'http://localhost:3845/assets/ec70dd6be55cb1f9185847cc294953611069591c.png'
const solutionImageMain = 'http://localhost:3845/assets/339f365f2ae1c77d49742bc59b0009ff7947345f.png'
const solutionImageFeature = 'http://localhost:3845/assets/b4853ad635f3facc89950e9270a1edf47cbc48a9.png'
const solutionImageAccent = 'http://localhost:3845/assets/1c4af0bf75adc753fad7eda10220e2d4941eb93f.png'
const productImage = 'http://localhost:3845/assets/e2f877a64f1e1d5cb3e18798a1f3cc21039fae84.png'

const featureItems = [
  {
    title: 'Soldier discretion',
    description: 'The soldier decides when and where to strike.',
    icon: 'http://localhost:3845/assets/5fe7e64cbac1c0260ab97fec8ce80edaccbde682.png',
  },
  {
    title: 'Contested environments',
    description: 'Operates in GPS denied and signal contested environments.',
    icon: 'http://localhost:3845/assets/6ee4cf958196cb989530d465c042b15ad3d2eaf6.png',
  },
  {
    title: 'Precision effects',
    description: 'Delivers high precision strikes on target.',
    icon: 'http://localhost:3845/assets/9c7f3ff49f2a12e3faf4a930a6c9fa06cd1dedc1.png',
  },
  {
    title: 'Low cost',
    description: 'Affordable, highly replenishable systems.',
    icon: 'http://localhost:3845/assets/662ff929d89e093cda1f5774052a7bd915f73e8d.png',
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
  return (
    <div className="hero-page">
      <div className="hero-page-background" aria-hidden="true">
        <img src={backgroundImage} alt="" />
      </div>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-shell">
          <header className="hero-header">
            <Link to="/" className="hero-brand" aria-label="Vortice Avionics home">
              <img src={logo} alt="Vortice Avionics" />
            </Link>

            <nav className="hero-nav" aria-label="Primary navigation">
              <Link className="hero-nav-link active" to="/">
                Home
              </Link>
              <Link className="hero-nav-link" to="/about">
                About
              </Link>
              <Link className="hero-nav-link" to="/contact">
                Contact Us
              </Link>
              <Link className="hero-nav-request" to="/contact">
                Request Info
              </Link>
            </nav>
          </header>

          <div className="hero-body">
            <div className="hero-copy">
              <p className="hero-kicker">RIFLEBIRD</p>
              <h1 id="hero-title">Precise strikes. Soldier controlled.</h1>
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
                <img src={cardImage} alt="Mission ready system" />
              </div>
              <div className="hero-card-body">
                <h2>Mission ready</h2>
                <p>GPS denied. Signal contested. Always on mission.</p>
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

      <section className="solution-section" aria-labelledby="solution-title">
        <div className="solution-overlay" aria-hidden="true" />
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
