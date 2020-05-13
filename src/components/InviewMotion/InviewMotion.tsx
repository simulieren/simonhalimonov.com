import React from "react"
import { useIntersection } from "react-use"
import { motion, AnimationProps, MotionProps } from "framer-motion"

interface Props {
  children: React.ReactElement | React.ReactElement[] | string
  ratio?: number
  animation?: "scaleIn"
  animate?: AnimationProps["animate"]
  exit?: AnimationProps["exit"]
  transition?: AnimationProps["transition"]
  initial?: MotionProps["initial"]
}

const InviewMotion: React.FC<Props> = ({
  ratio,
  children,
  animation,
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

  const animations = {
    scaleIn: {
      opacity:
        intersection && intersection?.intersectionRatio < (ratio || 0.3)
          ? 0
          : 1,
      scale:
        intersection && intersection?.intersectionRatio < (ratio || 0.3)
          ? 0.9
          : 1,
    },
  }

  return (
    <motion.div
      style={{ width: "100%" }}
      animate={animations[animation] || animate || animateDefault}
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
