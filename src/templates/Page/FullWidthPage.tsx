import React from "react"
import Image, { FluidObject } from "gatsby-image"
import { Box, Grid } from "theme-ui"

import SEO from "../../components/SEO"

import HTML from "../../components/HTML/HTML"

import { Page } from "../../contracts/page"
import { Preview } from "../../contracts/preview"

/**
 * Template for a full width page
 */
export interface Props {
  location: Location
  pageContext: {
    page: { node: Page | Preview }
  }
}
export const FullWidthPage = (props: Props) => {
  const pageContext = props?.pageContext
  const page = pageContext?.page?.node

  const fluid: FluidObject | null =
    page?.featured_media?.localFile?.childImageSharp?.fluid || null

  const title = page?.title || page?.post_title

  const excerpt = page?.excerpt || page?.post_excerpt

  const content = page?.content || page?.post_content

  return (
    <>
      <SEO title={title} description={excerpt} />
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
              <Image fluid={fluid} alt={title} title={title} />
            </Box>
          )}

          <HTML html={content} />
        </Box>
      </Grid>
    </>
  )
}

export default FullWidthPage
