import { motion, SVGMotionProps } from 'framer-motion';
import * as React from 'react';

const Oval: React.FC<SVGMotionProps<SVGSVGElement>> = (props) => {
  return (
    <motion.svg width="1em" height="1em" viewBox="0 0 35 36" {...props}>
      <circle
        cx={884.5}
        cy={179.57}
        r={17.5}
        transform="translate(-867 -162)"
        fill="currentColor"
        fillRule="evenodd"
      />
    </motion.svg>
  );
};

const MemoOval = React.memo(Oval);
export default MemoOval;
