import React, { createContext, useContext, useState } from 'react'
import Contact from '../pages/contact/contact'
import '../pages/contact/contact.css'
import '../components/contact/contactModal.css'
import { X } from 'lucide-react'
import { motion } from 'motion/react'

const ContactModalContext = createContext()

export function useContactModal() {
  return useContext(ContactModalContext)
}

export default function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openContact = () => setIsOpen(true)
  const closeContact = () => setIsOpen(false)

  return (
    <ContactModalContext.Provider value={{ isOpen, openContact, closeContact }}>
      {children}

      {isOpen && (
        <div className="contact-modal-overlay" onMouseDown={closeContact}>
          <motion.div
            className="contact-modal-content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              className="contact-modal-close"
              onClick={closeContact}
              aria-label="Close contact modal"
            >
              <X size={20} />
            </button>

            <Contact />
          </motion.div>
        </div>
      )}
    </ContactModalContext.Provider>
  )
}
