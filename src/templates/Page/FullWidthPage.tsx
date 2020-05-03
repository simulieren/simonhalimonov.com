import React from "react"
import Image, { FluidObject } from "gatsby-image"
import { Box, Grid } from "theme-ui"

import SEO from "../../components/SEO"

import HTML from "../../components/HTML/HTML"

import { Page } from "../../contracts/page"

/**
 * Template for a full width page
 */
export interface Props {
  location: Location
  pageContext: {
    page: { node: Page }
  }
}
export default (props: Props) => {
  const {
    pageContext: { page },
  } = props
  console.log("page", page)

  const fluid: FluidObject | null =
    page.node?.featured_media?.localFile?.childImageSharp?.fluid || null

  return (
    <>
      <SEO title={page.node?.title} />
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
                alt={page.node?.title}
                title={page.node?.title}
              />
            </Box>
          )}

          <HTML html={page.node.content} />
        </Box>
      </Grid>
    </>
  )
}
