import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  position: relative;
`;
const SpeedingLine = styled(motion.div)`
  position: absolute;
  width: 1px;

  background-color: #19213c;
  left: 50%;
  transform: translateX(-50%);
  top: 1.25rem;
`;
export const ScrollAnimation: React.FC = () => {
  return (
    <Container>
      SCROLL
      <SpeedingLine
        initial={{ height: 0 }}
        animate={{ height: [0, 60, 0], marginTop: [0, 0, 60] }}
        transition={{
          duration: 1,
          ease: 'linear',
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0.5,
        }}
      />
    </Container>
  );
};
