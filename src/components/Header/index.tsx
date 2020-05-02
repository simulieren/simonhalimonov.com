import React from "react"
import { Link } from "gatsby"
import { Grid, Box, useColorMode } from "theme-ui"
import { Sun, Moon } from "react-feather"
import { motion } from "framer-motion"

import Logo from "../Logo/Logo"
import S from "../Typography/S"

export interface Props {
  location: Location
}

export const Header = (props: Props) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Grid
      className="header-container"
      sx={{
        p: [3, 4],
        alignItems: "center",
        position: "absolute",
        zIndex: 100,
        width: "100%",
      }}
      columns={[6, 12]}
      gap={[3, 4, 5]}
    >
      <Link to="/" title="Home">
        <Box sx={{ "svg path": { fill: "text" } }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Logo />
          </motion.div>
        </Box>
      </Link>
      <S>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link to="/work" title="Work">
            Work
          </Link>
        </motion.div>
      </S>
      <S>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/posts" title="Blog">
            Blog
          </Link>
        </motion.div>
      </S>
      <S>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/about" title="About">
            About
          </Link>
        </motion.div>
      </S>

      <S
        sx={{
          "&:hover": { opacity: 0.5, cursor: "pointer" },
        }}
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        {colorMode === "default" ? (
          <motion.div
            key={"moon"}
            style={{ marginTop: ".35em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <Moon strokeWidth={1} />
          </motion.div>
        ) : (
          <motion.div
            key={"sun"}
            style={{ marginTop: ".35em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <Sun strokeWidth={1} />
          </motion.div>
        )}
      </S>
    </Grid>
  )
}

export default Header
