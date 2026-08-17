import { useEffect, useRef, useState } from 'react'
import { ContactModalContext } from './useContactModal'
import './contactModal.css'

export default function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)
  const openContact = () => setIsOpen(true)
  const closeContact = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeContact()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const contextValue = { isOpen, openContact, closeContact }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    data.append('access_key', 'b55efb66-c655-4e15-a76c-ff8fbaaadac3')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const responseData = await response.json()

      if (responseData.success) {
        alert('Thank you for your message. Our team will be in touch shortly.')
      } else {
        alert('Error in sending message. Try again later')
      }
    } catch {
      alert('Error in sending message. Try again later')
    }

    event.currentTarget.reset()
  }

  return (
    <ContactModalContext.Provider value={contextValue}>
      {children}

      {isOpen && (
        <div className="contact-overlay" onMouseDown={closeContact}>
          <div
            ref={modalRef}
            className="contact-modal"
            onMouseDown={(event) => event.stopPropagation()}
          >
        {/* Decorative HUD corners */}
        <span className="modal-corner modal-corner--tl" />
        <span className="modal-corner modal-corner--tr" />
        <span className="modal-corner modal-corner--bl" />
        <span className="modal-corner modal-corner--br" />

        {/* Header */}
        <div className="contact-header">
          <div>
            <div className="contact-eyebrow">
              VORTICE AVIONICS
            </div>

            <h2>REQUEST INFORMATION</h2>

            <p>
              Connect with our team to learn more about RifleBird,
              integration, and mission capabilities.
            </p>
          </div>

          <button
            className="contact-close"
            type="button"
            onClick={closeContact}
            aria-label="Close contact form"
          >
            <span />
            <span />
          </button>
        </div>

        {/* Status indicator */}
        <div className="contact-status">
          <span className="status-dot" />
          <span>SYSTEM ONLINE</span>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">
                NAME
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="ENTER NAME"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">
                EMAIL
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="ENTER EMAIL"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-field form-field--message">
            <label htmlFor="contact-message">
              MESSAGE
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="ENTER MESSAGE"
              rows="6"
              required
            />
          </div>

          <div className="form-footer">
            <div className="form-note">
              <span className="note-marker">+</span>
              <span>
                Your information will be handled securely.
              </span>
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              <span>SEND INQUIRY</span>
              <span className="submit-arrow">→</span>
            </button>
          </div>
        </form>

        {/* Bottom technical details */}
        <div className="modal-footer">
          <span>VORTICE // CONTACT</span>
          <span>SECURE CHANNEL</span>
          <span>RF-01</span>
        </div>
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  )
}