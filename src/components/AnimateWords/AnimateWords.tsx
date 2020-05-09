import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import useInterval from "../../utils/useInterval"
export const AnimateWords = () => {
  const words = [
    " remote freelancer",
    " digital product designer",
    " React developer",
    " frontend developer",
    " fullstack JavaScript teacher",
    " User Experience engineer",
    " failing writer",
    " constant learner",
  ]
  const [index, setIndex] = React.useState(0)
  useInterval(() => {
    setIndex((index + 1) % words.length)
  }, 2000)
  return (
    <AnimatePresence>
      {words.map(
        (word, i) =>
          i === index && (
            <motion.span
              key={word}
              style={{
                position: "absolute",
                marginLeft: ".25em",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              {word}
            </motion.span>
          )
      )}
    </AnimatePresence>
  )
}
