import { MotionProps } from "framer-motion";

export const fadein: MotionProps = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: {
    amount: 'all',
    once: true
  },
  variants: {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }
}
