import { motion, SVGMotionProps } from 'framer-motion'
import * as React from 'react'
const Triangle: React.FC<SVGMotionProps<SVGSVGElement>> = (props) => {
  return (
    <motion.svg width="1em" height="1em" viewBox="0 0 71 74" {...props}>
      <path d="M70.75.733L50.516 74.017-.017 28.516z" fill="currentColor" fillRule="evenodd" />
    </motion.svg>
  )
}

const MemoTriangle = React.memo(Triangle)
export default MemoTriangle
