import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { Box, Grid } from "theme-ui"

import SEO from "../components/SEO"

import HTML from "../components/HTML/HTML"

export interface Props {
  location: Location
}

export default (props: Props) => {
  const {
    wordpressPage,
  }: {
    wordpressPage: {
      id: string
      content: string
      slug: string
      title: string
      type: string
      excerpt: string
      date: string
      status: string
      featured_media: any
    }
  } = useStaticQuery(graphql`
    query {
      wordpressPage(slug: { eq: "about-me" }) {
        id
        content
        slug
        title
        type
        excerpt
        date
        status
        featured_media {
          localFile {
            childImageSharp {
              fluid(quality: 85) {
                aspectRatio
                src
                srcSet
                sizes
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)

  const fluid: FluidObject | null =
    wordpressPage?.featured_media?.localFile?.childImageSharp?.fluid || null

  return (
    <>
      <SEO title="About Me" />
      <Grid sx={{ p: [3, 4], pt: [6, 7, 8] }} gap={[3, 4, 5]} columns={[1]}>
        <Box>
          {fluid && fluid?.src?.length > 0 && (
            <Box
              sx={{
                width: "100%",
                mb: [2, 4],
                "& img": { objectFit: "cover" },
              }}
            >
              <Image
                fluid={fluid}
                alt={wordpressPage?.title}
                title={wordpressPage?.title}
              />
            </Box>
          )}

          <HTML html={wordpressPage.content} />
        </Box>
      </Grid>
    </>
  )
}
