import { createContext, useContext } from 'react'

export const ContactModalContext = createContext(null)

export function useContactModal() {
  return useContext(ContactModalContext)
}
