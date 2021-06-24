import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';

const ButtonContainer = styled(motion.button)<any>`
  cursor: pointer;
  z-index: 1;
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
    background-image: ${({ bg }) => bg};
  }
`;

const Ripple = styled(motion.span)`
  pointer-events: none;
  position: absolute;
  z-index: -1;
  background: #f7941d;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 1em;
  height: 1em;
`;

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
`;
export interface ButtonProps extends HTMLMotionProps<'button'> {
  duration?: number;
  children?: string;
  logo?: ReactNode;
  background?: string;
}

const variants = {
  Hover: { fontSize: '7.5rem', opacity: 1 },
  Active: { fontSize: '50rem', opacity: 1 },
  Inactive: { fontSize: '0rem', opacity: 0 },
};

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick = () => null,
  duration = 0.35,
  logo,
  background = 'radial-gradient(circle at 0 100%, #00b0ff, #00b8de)',
  ...props
}) => {
  const [ripple, setRipple] = useState({ x: 0, y: 0, mode: 'Inactive' });

  const handleHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rom = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rom.left;
    const y = e.clientY - rom.top;
    setRipple(() => ({ x, y, mode: 'Hover' }));
  };

  const terminateRipple = () => {
    setRipple((prev) => ({ ...prev, mode: 'Inactive' }));
  };

  const handleActive = () => {
    setRipple((prev) => ({ ...prev, mode: 'Active' }));
  };

  return (
    <ButtonContainer
      {...props}
      onMouseMove={handleHover}
      onMouseDown={handleActive}
      onHoverEnd={terminateRipple}
      bg={background}
    >
      {logo && <LogoWrapper>{logo}</LogoWrapper>}

      {children}
      <AnimatePresence>
        <Ripple
          key={`${children}-ripple`}
          style={{ left: ripple.x, top: ripple.y }}
          initial={ripple.mode}
          animate={ripple.mode}
          variants={variants}
          exit={ripple.mode}
          transition={{ duration }}
        />
      </AnimatePresence>
    </ButtonContainer>
  );
};
