import { Link } from 'react-router-dom'
import { useContactModal } from '../../components/contact/ContactModalProvider'
import Navbar from '../../components/nav/nav'
import backgroundImage from '../../assets/Frame 6.png'
import MissionReadyImg from '../../assets/MissionReadyImg.png'
import SoldierDiscretionIcon from "../../assets/soldierDiscretionImg.png"
import ContestedEnvIcon from "../../assets/contestedEnvImg.png"
import PrecisionIcon from "../../assets/PrecisionImg.png"
import LowCostIcon from "../../assets/costImg.png"
import DeployIcon from '../../assets/DeployIcon.png'
import EngageIcon from '../../assets/EngageIcon.png'
import StrikeIcon from '../../assets/StrikeIcon.png'
import solutionImageMain from '../../assets/RifleBirdBackground.png'
import solutionImageFeature from "../../assets/TransparentRifleBirdFlying.webm"
import blueprint from '../../assets/Riflebird Blueprint.png'
import './hero.css'

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
    icon: DeployIcon,
  },
  {
    number: '02',
    label: 'ENGAGE',
    description: 'Autonomous navigation in GPS denied and contested environments.',
    icon: EngageIcon,
  },
  {
    number: '03',
    label: 'STRIKE',
    description: 'High precision strike on target at soldier discretion.',
    icon: StrikeIcon,
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

function SolutionStage({ number, label, description, icon }) {
  return (
    <div className="solution-stage">
      <div className="solution-stage-content">
        <div className="solution-stage-copy">
          <div className="solution-stage-number">{number}</div>
          <h3>{label}</h3>
          <p>{description}</p>
        </div>
        <div className="solution-stage-visual" aria-hidden="true">
          <img src={icon} alt="" />
        </div>
      </div>
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
          <img
            src={blueprint}
            alt="RifleBird blueprint"
            className="product-image"
            loading="lazy"
            onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
          />
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

      <section className="solution-section" aria-labelledby="solution-title">
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
              <img
                className="solution-media-main"
                src={solutionImageMain}
                alt="RifleBird platform"
                loading="lazy"
                onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
              />
              {/* <img className="solution-media-tilt" src={solutionImageFeature} alt="RifleBird deployment" /> */}
              <video  autoPlay loop muted playsInline className="solution-media-tilt" alt="RifleBird deployment" >
                <source src={solutionImageFeature} type="video/webm" />
              </video>
              {/* <img className="solution-media-accent top" src={solutionImageAccent} alt="Decorative accent" />
              <img className="solution-media-accent bottom" src={solutionImageAccent} alt="Decorative accent" /> */}
            </div>
          </div>
        </div>

        <div className="solution-stages">
          {solutionStages.map((stage) => (
            <SolutionStage key={stage.number} {...stage} />
          ))}
        </div>
      </section>

      <ProductSpotlight />
    </div>
  )
}
