import { animate, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
interface Props {
  from: number;
  to: number;
  duration?: number;
}

const Div = styled(motion.div)`
  display: inline-block;
`;
export const Counter: React.FC<Props> = ({ from, to, duration = 3 }) => {
  const nodeRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <Div
      ref={nodeRef}
      // animate={{ scale: [1, 1.2, 1] }} transition={{ duration }}
    />
  );
};
