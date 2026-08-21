import { Link } from 'react-router-dom'
import Navbar from '../../components/nav/nav'
import Footer from '../../components/footer/footer'
import { useContactModal } from '../../components/contact/ContactModalProvider'
import './riflebird.css'
import SoldierDiscretionIcon from '../../assets/soldierDiscretionImg.png'
import ContestedEnvIcon from '../../assets/contestedEnvImg.png'
import PrecisionIcon from '../../assets/PrecisionImg.png'
import LowCostIcon from '../../assets/costImg.png'
import DeployIcon from '../../assets/DeployIcon.png'
import EngageIcon from '../../assets/EngageIcon.png'
import StrikeIcon from '../../assets/StrikeIcon.png'
import blueprintImage from '../../assets/stockBlueprint.png'
import theaterImage from '../../assets/Theater.png'
import galleryOne from '../../assets/droneRenders/Back NegAng.png'
import galleryTwo from '../../assets/droneRenders/Back PosAng.png'
import galleryThree from '../../assets/droneRenders/CloseFront NegAng.png'
import galleryFour from '../../assets/droneRenders/FarFront PosAng.png'
import galleryFive from '../../assets/droneRenders/Front NegAng.png'
import gallerySix from '../../assets/droneRenders/Front PosAng.png'
import RifleBirdFlying from '../../assets/TransparentRifleBirdFlying.webm'


const capabilities = [
  ['Soldier discretion', 'The soldier decides when and where to strike.', SoldierDiscretionIcon],
  ['Contested environments', 'Operates in GPS denied and signal contested environments.', ContestedEnvIcon],
  ['Precision effects', 'Delivers high precision strikes on target.', PrecisionIcon],
  ['Seamless integration', 'Integrates with existing hardware and infrastructure.', EngageIcon],
  ['Low cost', 'Affordable, highly replenishable systems.', LowCostIcon],
]

const processSteps = [
  ['01', 'Identify target', 'Soldier acquires and marks the target.', SoldierDiscretionIcon],
  ['02', 'Launch', 'RifleBird is launched from a nearby platform at the press of a button.', DeployIcon],
  ['03', 'Autonomous flight', 'RifleBird navigates in contested environments to the target.', EngageIcon],
  ['04', 'Strike', 'Target is engaged with precision and effect.', StrikeIcon],
]

const specifications = [
  ['Length', '1200 mm'], ['Wingspan', '1800 mm'], ['Weight', '6.5 kg'], ['Endurance', '25+ min'],
  ['Range', '10+ km'], ['Speed', '50 - 120 kt'], ['Payload', '1.5 - 2.5 kg'],
  ['Launch method', 'Container / Rail / Catapult'], ['Navigation', 'GPS Denied / INS / Terrain Referencing'],
  ['Data link', 'Encrypted / Low Probability of Intercept'], ['Operating temp.', '-20°C to 50°C'],
  ['Environments', 'EW Contested / GPS Denied'], ['Reusability', 'No (Low Cost, Expendable)'],
]

const galleryImages = [galleryOne, galleryTwo, galleryThree, galleryFour, galleryFive, gallerySix]

export default function RifleBird() {
  const { openContact } = useContactModal()

  return (
    <div className="riflebird-page">
      <main className="riflebird-content">
        <Navbar requestLabel="REQUEST INFO" requestPath="/contact" />
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
              {/* TODO: BUTTON COMMENTED OUT, AWAITING VIDEO/DEMO */}
              {/* <button className="riflebird-secondary-cta">
                WATCH OVERVIEW
              </button> */}
            </div>
          </div>

          <div className="riflebird-image">
            <video autoPlay loop muted playsInline className="riflebird-image-video" aria-label="RifleBird in flight">
              <source src={RifleBirdFlying} type="video/webm" />
            </video>
          </div>
        </section>

        {/* <section className="riflebird-capabilities" aria-label="RifleBird capabilities">
          {capabilities.map(([title, description, icon]) => (
            <article className="riflebird-capability" key={title}>
              <img src={icon} alt="" />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </section> */}

        <section className="riflebird-details">
          <article className="riflebird-panel how-it-works">
            <p className="riflebird-section-label">HOW IT WORKS</p>
            <h2>PRECISION AT THE<br />PRESS OF A BUTTON</h2>
            <p className="riflebird-panel-copy">
              From a forward position, the soldier designates a target using the control module. RifleBird is launched from a nearby vehicle or base and autonomously navigates to the target, delivering a precise strike.
            </p>
            <div className="process-list">
              {processSteps.map(([number, title, description, icon]) => (
                <div className="process-step" key={number}>
                  <img src={icon} alt="" />
                  <span className="process-number">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </div>
              ))}
            </div>
            <img
              className="theater-image"
              src={theaterImage}
              alt="RifleBird mission sequence"
              loading="lazy"
              onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
            />
          </article>

          <article className="riflebird-panel specs-panel">
            <p className="riflebird-section-label">TECHNICAL SPECIFICATIONS</p>
            <dl>
              {specifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </article>
        </section>

        <section className="riflebird-media-grid">
          <article className="riflebird-panel gallery-panel">
            <p className="riflebird-section-label">GALLERY</p>
            <div className="gallery-tabs"></div>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`RifleBird gallery ${index + 1}`}
                  loading="lazy"
                  onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
                />
              ))}
            </div>
          </article>

          <div className="riflebird-media-stack">
            <article className="riflebird-panel blueprint-panel">
              <p className="riflebird-section-label">BLUEPRINTS</p>
              <img
                src={blueprintImage}
                alt="RifleBird technical blueprint"
                loading="lazy"
                onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
              />
            </article>
            {/* <article className="riflebird-panel overview-panel">
              <p className="riflebird-section-label">PRODUCT OVERVIEW</p>
              <div className="overview-image"><img src={galleryTwo} alt="RifleBird in the field" /><span className="play-button">▶</span></div>
              <div className="video-bar"><span /> <small>0:00 / 1:48</small></div>
            </article> */}
          </div>
        </section>

        {/* <section className="riflebird-integration riflebird-panel">
          <p className="riflebird-section-label">INTEGRATES WITH WHAT YOU ALREADY USE</p>
          <div className="integration-list"><span>HANDHELD TABLETS</span><span>TACTICAL RADIOS</span><span>VEHICLE SYSTEMS</span><span>COMMAND SOFTWARE</span><span>MISSION PLANNING TOOLS</span><span>NATO / STANAG COMPATIBLE</span></div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}
