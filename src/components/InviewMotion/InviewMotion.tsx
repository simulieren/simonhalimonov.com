import React from "react"
import { useIntersection } from "react-use"
import { motion, AnimationProps, MotionProps } from "framer-motion"

interface Props {
  children: React.ReactElement | React.ReactElement[] | string
  ratio?: number
  animate?: AnimationProps["animate"]
  exit?: AnimationProps["exit"]
  transition?: AnimationProps["transition"]
  initial?: MotionProps["initial"]
}

const InviewMotion: React.FC<Props> = ({
  ratio,
  children,
  animate,
  exit,
  transition,
  initial,
}) => {
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: ratio || 0.5,
  })

  const animateDefault = {
    opacity:
      intersection && intersection?.intersectionRatio < (ratio || 0.3) ? 0 : 1,
  }

  return (
    <motion.div
      style={{ width: "100%" }}
      animate={animate || animateDefault}
      exit={exit}
      transition={transition}
      initial={initial}
      ref={intersectionRef}
    >
      {children}
    </motion.div>
  )
}

export default InviewMotion
