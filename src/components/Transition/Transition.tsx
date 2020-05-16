import React from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

export interface Props {
  children: React.ReactNode
  location: Location
}

const Transition = ({ children, location }: Props) => {
  const duration = 0.15

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{ position: "relative" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Transition
