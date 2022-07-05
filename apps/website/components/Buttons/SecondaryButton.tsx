import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Button = styled(motion.button)`
  cursor: pointer;
  width: 100%;
  @media ${BREAKPOINT.tablet} {
    width: 15rem;
  }
  @media ${BREAKPOINT.desktop} {
    width: 16.875rem;
  }
  height: 3rem;
  border-radius: 2rem;
  border-color: transparent;
  font-size: 1rem;
  background-color: #ffffff;
  border: solid 1px #f2f2f2;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);

  :focus {
    outline: none;
  }
`
type Props = {
  onClick?: () => void
  style?: React.CSSProperties
  children: React.ReactNode | string
}
export const SecondaryButton: React.FC<Props> = ({ children, onClick, style }) => {
  return (
    <Button
      style={style}
      onClick={onClick}
      whileTap={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0)', scale: 0.98 }}
      whileHover={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.3)', scale: 1.02 }}
    >
      {children}
    </Button>
  )
}
