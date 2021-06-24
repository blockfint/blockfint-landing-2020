import React, { createContext, useContext, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
const FormContent = dynamic(() => import('./components/FormContent'), {
  loading: () => <span />,
  ssr: false
})
const LockScroll = createGlobalStyle`
  :root{
    overflow-y:hidden;
  }
`

type ContactInfo = { open: boolean; onOpen: () => void; onClose: () => void }

const ContactContext = createContext<ContactInfo>({
  open: false,
  onOpen: () => null,
  onClose: () => null
})

export const ContactDialog: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const onOpen = () => {
    setOpen(true)
  }

  return (
    <ContactContext.Provider value={{ open, onOpen, onClose }}>
      <AnimatePresence>
        {open && (
          <>
            <LockScroll />
            <FormContent onClose={onClose} />
          </>
        )}
      </AnimatePresence>
      {children}
    </ContactContext.Provider>
  )
}

export const useContactContext = () => useContext(ContactContext)
