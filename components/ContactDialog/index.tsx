import { Container, IconButton } from '@material-ui/core'
import React, { createContext, useContext, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ReactComponent as HeroBottom } from 'assets/bg/hero-bottom.svg'
import { ReactComponent as CloseSvg } from 'assets/icons/close.svg'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { FormContent } from './components/FormContent'
import { BREAKPOINT } from 'assets/globalStyle'
const StyleHeroTop = styled(HeroBottom)`
  position: absolute;
  top: -10%;
  left: 0;
  z-index: -1;
  transform: scale(-1, -1);
  color: #ffffff;
  font-size: clamp(8rem, 20vw, 17rem);
`

const StyleHeroBottom = styled(HeroBottom)`
  position: absolute;
  bottom: -10%;
  right: 0;
  z-index: -1;
  color: var(--white);
  font-size: clamp(8rem, 20vw, 17rem);
`

const Background = styled(motion.div)`
  padding: 8rem 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: #eef6f7;
`
const LockScroll = createGlobalStyle`
  :root{
    overflow-y:hidden;
  }
`
const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  @media ${BREAKPOINT.tablet} {
    top: 3.75rem;
    right: 3.75rem;
  }
`
type ContactInfo = { open: boolean; onOpen: () => void }

const ContactContext = createContext<ContactInfo>({ open: false, onOpen: () => null })

export const ContactDialog: React.FC = ({ children }) => {
  const [open, setOpen] = useState(true)
  const handleClose = () => setOpen(false)
  const onOpen = () => {
    setOpen(true)
  }

  return (
    <ContactContext.Provider value={{ open, onOpen }}>
      <AnimatePresence>
        {open && (
          <Background initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <StyleHeroTop />
            <StyleHeroBottom />
            <LockScroll />
            <CloseButtonWrapper>
              <IconButton onClick={handleClose}>
                <CloseSvg />
              </IconButton>
            </CloseButtonWrapper>

            <Container maxWidth="lg">
              <FormContent />
            </Container>
          </Background>
        )}
      </AnimatePresence>
      {children}
    </ContactContext.Provider>
  )
}

export const useContactContext = () => useContext(ContactContext)
