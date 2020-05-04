import React, { useState } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { Box } from "theme-ui"
import { motion, AnimatePresence } from "framer-motion"
import { Parallax } from "react-scroll-parallax"

import P from "../Typography/P"
import S from "../Typography/S"

import useInterval from "../../utils/useInterval"

interface ItemProps {
  data: {
    featured_media: any
    title: string
    slug: string
  }
  current: number
  index: number
  time: number
}

const BlockSlider = ({ sx, ...rest }) => {
  const sxDefault = {
    zIndex: 100,
    position: "absolute",
    pointerEvents: "none",
    left: "0px",
    right: "0px",
    top: "0px",
    bottom: "0px",
    "& > div": {
      backgroundColor: "text",
      position: "absolute",
      left: "0px",
      right: "0px",
      top: "0px",
      bottom: "0px",
      transformOrigin: "right",
    },
  }

  return (
    <Box sx={{ ...sxDefault, ...sx }}>
      <motion.div {...rest} />
    </Box>
  )
}

const WorkSliderItem = ({ data, current, index, time }: ItemProps) => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      position: "absolute",
      p: [3, 4, 8, 8],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        zIndex: 10,
        position: "absolute",
        bottom: [3, 4],
        left: [3, 4],
      }}
    >
      <motion.div
        key={data?.title}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <Link to={data?.path}>
          <S>View Project</S>
          <P>{data?.title}</P>
        </Link>
      </motion.div>
    </Box>

    <Box
      sx={{
        width: ["100%"],
        maxHeight: ["100vh"],
        pointerEvents: ["none"],
        "& img": {
          maxHeight: ["100vh"],
          height: ["100vh"],
          //@ts-ignore
          objectFit: "contain !important",
        },
      }}
    >
      {current === index && (
        <motion.div
          key={data?.title}
          initial={{ opacity: 0, x: -100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", zIndex: 10 }}
        >
          <Parallax y={[-10, 10]}>
            {data?.featured_media?.localFile?.childImageSharp?.fluid?.src
              ?.length > 0 && (
              <Image
                fluid={data?.featured_media?.localFile?.childImageSharp?.fluid}
              />
            )}
          </Parallax>
        </motion.div>
      )}
      {/* {current === index && (
        <BlockSlider
          sx={{
            position: "absolute",
            left: "0px",
            right: "0px",
            top: "0px",
            bottom: "0px",
            "& > div": {
              background:
                `url(${data?.featured_media?.localFile?.childImageSharp?.fluid?.base64})` ||
                "#fff",
              backgroundSize: "500%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              left: "0px",
              right: "0px",
              top: "0px",
              bottom: "0px",
              transformOrigin: "right",
            },
          }}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )} */}
      {current === index && (
        <BlockSlider
          sx={{ top: "auto", height: "2px" }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: time / 1000 }}
        />
      )}
    </Box>
  </Box>
)

interface Props {
  data: any[]
  time: number
}

export default (props: Props) => {
  const { time, data } = props
  console.log("data", data)
  const [state, setState] = useState({
    index: 0,
  })

  useInterval(() => {
    setState({ index: (state.index + 1) % data.length })
  }, time)

  return (
    <Box
      sx={{
        width: ["100vw", "100vw", "100vw", "50vw"],
        height: ["70vh", "100vh"],
        // TODO: Check with other images
        background:
          `url(${
            data[state.index]?.featured_media?.localFile?.childImageSharp?.fluid
              ?.base64
          })` || "#fff",
        backgroundSize: "500%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: ["relative", "relative", "relative", "absolute"],
        right: "0px",
      }}
    >
      <AnimatePresence>
        {data.map(
          (d, i) =>
            state.index === i && (
              <WorkSliderItem
                key={i}
                data={d.node}
                current={state.index}
                index={i}
                time={time}
              />
            )
        )}
      </AnimatePresence>
      <BlockSlider
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
    </Box>
  )
}
