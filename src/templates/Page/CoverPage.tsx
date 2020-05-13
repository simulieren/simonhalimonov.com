import React from "react"
import { Box, Grid } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { motion } from "framer-motion"
import { Parallax, useController } from "react-scroll-parallax"

import useInterval from "../../utils/useInterval"

import StaticImage from "../../components/Image/Image"

import SEO from "../../components/SEO"

import HTML from "../../components/HTML/HTML"

import H from "../../components/Typography/H"
import S from "../../components/Typography/S"

import { Page } from "../../contracts/page"
import { Preview } from "../../contracts/preview"

import { decodeHtmlCharCodes } from "../../utils"

/**
 * Template for cover page
 */
export interface Props {
  pageContext: {
    previous?: {
      slug: string
      title: string
      path: string
    }
    next?: {
      slug: string
      title: string
      path: string
    }
    page: {
      node: Page | Preview
    }
    lang: string
  }
  location: Location
}

export const CoverPage = (props: Props) => {
  const pageContext = props?.pageContext
  const page = pageContext?.page?.node
  const lang = pageContext?.lang

  const fluid: FluidObject | null =
    page?.featured_media?.localFile?.childImageSharp?.fluid || null

  const title = page?.title || page?.post_title

  const excerpt = page?.excerpt || page?.post_excerpt

  const content = page?.content || page?.post_content

  const { parallaxController } =
    typeof window !== "undefined"
      ? useController()
      : { parallaxController: null }

  useInterval(() => {
    if (typeof parallaxController === null) return

    parallaxController?.update()
  }, 200)

  return (
    <>
      <SEO title={title} description={excerpt} lang={lang} />
      <Box>
        <Box as="article" sx={{ mb: [4, 5] }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: ["50vh", "75vh", "80vh"],
              backgroundColor: "background2",
              overflow: "hidden",
              mb: [2, 4],
            }}
          >
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 1, x: -100, rotate: 5 }}
                animate={{ opacity: 1, x: -50, rotate: 0 }}
                transition={{ duration: 2.5, yoyo: Infinity }}
              >
                <Box
                  sx={{
                    maxHeight: "75vh",
                    position: "relative",
                    width: "50vw",
                    height: "80vh",
                    "& img": {
                      objectFit: "contain !important",
                    },
                  }}
                >
                  <StaticImage filename="leaf-01.png" />
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 1, x: -100, rotate: 5 }}
                animate={{ opacity: 1, x: -50, rotate: 0 }}
                transition={{ duration: 2.5, yoyo: Infinity }}
              >
                <Box
                  sx={{
                    maxHeight: "75vh",
                    position: "relative",
                    width: "50vw",
                    height: "80vh",
                    right: "-70%",
                    "& img": {
                      objectFit: "contain !important",
                    },
                  }}
                >
                  <StaticImage filename="leaf-03.png" />
                </Box>
              </motion.div>
            </Box>

            <Box
              sx={{
                p: [3, 4, 5],
                "& img": {
                  objectFit: "contain !important",
                  maxHeight: "75vh",
                },
              }}
            >
              <Parallax y={[-10, 10]}>
                {fluid && fluid?.src?.length > 0 && (
                  <Image fluid={fluid} alt={title} title={title} />
                )}
              </Parallax>
            </Box>
          </Box>

          <Box sx={{ maxWidth: "70ch", mx: "auto", mb: [2, 4] }}>
            <H as="h1" sx={{ textAlign: "center" }}>
              {decodeHtmlCharCodes(title)}
            </H>
          </Box>

          <Box sx={{ px: [3, 4] }}>
            <HTML html={content} />
          </Box>
        </Box>
      </Box>
      <Grid
        sx={{ p: [3, 4], pt: [6, 7, 8], maxWidth: 1200, mx: "auto" }}
        gap={[3, 4, 5]}
        columns={[2]}
      >
        {pageContext?.next?.slug && (
          <Box>
            <Link to={pageContext.next.path} title={pageContext.next.slug}>
              <S>Previous</S>
              <H>{pageContext.next.title}</H>
            </Link>
          </Box>
        )}
        {pageContext?.previous?.slug && (
          <Box>
            <Link
              to={pageContext.previous.slug}
              title={pageContext.previous.slug}
            >
              <S>Next</S>
              <H>{pageContext.previous.title}</H>
            </Link>
          </Box>
        )}
      </Grid>
    </>
  )
}

export default CoverPage
