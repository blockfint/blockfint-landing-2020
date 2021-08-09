import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Button = styled(motion.button)`
  cursor: pointer;
  width: 100%;
  @media ${BREAKPOINT.tablet} {
    width: 15rem;
  }
  @media ${BREAKPOINT.desktop} {
    width: 7.125rem;
  }
  height: 2.25rem;
  border-radius: 0.3rem;
  border-color: transparent;
  font-size: 1rem;
  background-color: var(--secondary);
  /* border: solid 1px #f2f2f2; */
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  color: white;
  :focus {
    outline: none;
  }
`
export const OrangeButton: React.FC = ({ children }) => {
  return (
    <Button
      whileTap={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0)', scale: 0.98 }}
      whileHover={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.3)', scale: 1.02 }}
    >
      {children}
    </Button>
  )
}
