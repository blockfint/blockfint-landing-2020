import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'

const ButtonContainer = styled(motion.button)`
  position: relative;
  width: 15.625rem;
  height: 3rem;
  overflow: hidden;
  background: transparent;
  color: #ffffff;

  font-size: 1rem;
  line-height: 1.88;
  border-radius: 2rem;
  border: none;
  :focus {
    outline: none;
  }
  :before {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -2;
    background-image: radial-gradient(circle at 0 100%, #00b0ff, #00b8de);
  }
`

const Ripple = styled(motion.span)`
  pointer-events: none;
  position: absolute;
  z-index: -1;
  background: #f7941d;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 1em;
  height: 1em;
`

const LogoWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  left: 0.125rem;
  top: 0.125rem;
  bottom: 0.125rem;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  place-items: center;
  place-content: center;
`
export interface ButtonProps extends HTMLMotionProps<'button'> {
  duration?: number
  children?: string
  logo?: ReactNode
}

const variants = {
  hover: { fontSize: '7.5rem', opacity: 1 },
  active: { fontSize: '50rem', opacity: 1 }
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick = () => null,
  duration = 0.35,
  logo,
  ...props
}) => {
  const [ripples, setRipples] = useState([])
  const [isActive, setActive] = useState(false)
  const handleHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const x = e.clientX - e.currentTarget.offsetLeft
    const y = e.clientY - e.currentTarget.offsetTop
    const newRippleIndex = `${ripples.length + 1}`
    setRipples(() => [{ x, y, id: newRippleIndex, mode: 'hover' }])
  }

  const terminateRipple = () => {
    setRipples([])
    setActive(false)
  }

  const handleActive = () => {
    setActive(true)
  }

  return (
    <ButtonContainer {...props} onMouseMove={handleHover} onMouseDown={handleActive} onHoverEnd={terminateRipple}>
      {logo && <LogoWrapper>{logo}</LogoWrapper>}
      <span>
        {children}
        <AnimatePresence>
          {ripples.map(({ x, y }, index) => (
            <Ripple
              key={index}
              style={{ left: x, top: y }}
              initial={{ fontSize: '0rem', opacity: 0.5 }}
              animate={isActive ? 'active' : 'hover'}
              variants={variants}
              exit={{ fontSize: '0rem', opacity: 0 }}
              transition={{ duration }}
            />
          ))}
        </AnimatePresence>
      </span>
    </ButtonContainer>
  )
}
