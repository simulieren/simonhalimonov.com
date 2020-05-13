import React from "react"
import { Box } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { Parallax } from "react-scroll-parallax"

import { XL, H } from "../../components/Typography"

import InviewMotion from "../../components/InviewMotion/InviewMotion"

import { decodeHtmlCharCodes } from "../../utils"

import { Page } from "../../contracts/page"

export default ({ node }: { node: Page }) => {
  const fluid: FluidObject | null =
    node?.featured_media?.localFile?.childImageSharp?.fluid || null

  return (
    <Box
      as="article"
      key={node.slug}
      sx={{ position: "relative", mb: [6, 7], minHeight: "40vmin" }}
    >
      <Box
        sx={{
          maxWidth: "70ch",
          mx: "auto",
          "& > a": { textDecoration: "none !important" },
        }}
      >
        <Link to={node.path} title={node.slug}>
          <InviewMotion>
            <H sx={{ textAlign: "center" }}>
              {decodeHtmlCharCodes(node?.title)}
            </H>
          </InviewMotion>
        </Link>
      </Box>
      {fluid && fluid?.src?.length > 0 && (
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            my: [2, 3],
            maxWidth: [1000],
            mx: "auto",
          }}
        >
          <Parallax y={[-10, 10]}>
            <InviewMotion
              animation="scaleIn"
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            >
              <Link to={node.path} title={node.slug}>
                <Image fluid={fluid} alt={node?.title} title={node?.title} />
              </Link>
            </InviewMotion>
          </Parallax>
        </Box>
      )}

      <XL
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
          opacity: "0.25",
          "& .parallax-inner": { fontFamily: "IBM Plex Serif" },
        }}
      >
        <Parallax x={[-50, 50]}>{decodeHtmlCharCodes(node?.title)}</Parallax>
      </XL>
    </Box>
  )
}
