import React from "react"
import { motion } from "framer-motion"
import { Box, Grid } from "theme-ui"

import SocialSidebar from "../SocialSidebar/SocialSidebar"

export const ContentWithSidebar: React.FC = (props) => {
  return (
    <Grid sx={{ p: [3, 4], pt: [6, 7, 8] }} gap={[3, 4, 5]} columns={[12]}>
      <Box as="main" sx={{ gridColumn: ["1/13", "1/13", "1/10"], pb: [4, 5] }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: ["24vmin", "0vmin"],
          }}
          transition={{
            duration: 2.5,
            delay: 0.25,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {props.children}
        </motion.div>
      </Box>

      <Box as="aside" sx={{ gridColumn: ["1/13", "1/13", "10/13"] }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: ["24vmin", "0vmin"],
          }}
          transition={{ duration: 3, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
        >
          <SocialSidebar />
        </motion.div>
      </Box>
    </Grid>
  )
}
