import React from "react"
import { Box } from "theme-ui"
import { motion } from "framer-motion"

import { XL } from "../../components/Typography"

export const PageTitleAnimation: React.FC = (props) => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        mb: ["-35vmin"],
        overflow: "hidden",
        width: "100%",
        zIndex: 100,
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: ["24vmin", "-24vmin"],
        }}
        transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
      >
        <XL sx={{ whiteSpace: "nowrap" }}>{props.children}</XL>
      </motion.div>
    </Box>
  )
}
